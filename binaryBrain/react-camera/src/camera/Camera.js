import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import debounce from 'throttle-debounce/debounce';

import axios from 'axios';
import './polyfill';
import CameraError from './CameraError';
import CaptureButton from './CaptureButton';
import CameraWrapper from './CameraWrapper';
import CameraControls from './CameraControls';
import SwitchModeButton from './SwitchModeButton';
import { errorTypes } from './errorTypes';
import { facingModes } from './facingModeTypes';
import { buildConstraints, getAvailableDevices } from './cameraUtils';

class Camera extends PureComponent {
  constructor(props) {
    super(props);
    const { facingMode, height, width } = this.props;
    const constraints = buildConstraints(facingMode, height, width);

    this.state = {
      constraints,
      devices: null,
      error: false,
      isIntersecting: false,
      mediaStream: null,
    };
  }

  async componentWillMount() {
    const devices = await getAvailableDevices('video');
    if (devices) {
      this.setState({
        devices,
      });
    }
  }

  async componentDidMount() {
    await this.getMediaStream(this.state.constraints);
    this.setVideoStream();
    window.addEventListener('resize', this.handleResize);
  }

  componentWillUnmount() {
    this.stopMediaStream();
    window.removeEventListener('resize', this.handleResize);
  }

  captureMediaStream = (event, mediaStream) => {
    const ms = mediaStream || this.state.mediaStream;
    if (!ms) this.setState({ error: errorTypes.NO_STREAM.type });

    const mediaStreamTrack = ms.getVideoTracks()[0];
    const imageCapture = new window.ImageCapture(mediaStreamTrack);

    if (imageCapture) {
      this.takePhoto(imageCapture);
    }
  };

  changeFacingMode = async (facingMode = '') => {
    if (!facingModes[facingMode]) {
      return this.setState({ error: errorTypes.INVALID_FACING_MODE.type });
    }

    this.stopMediaStream();

    const { height, width } = this.state.constraints.video;
    const constraints = buildConstraints(facingMode, height, width);

    await this.getMediaStream(constraints);
    this.setVideoStream();
  };

  async getMediaStream(constraints = {}) {
    try {
      const mediaStream = await navigator.mediaDevices.getUserMedia(
        constraints
      );

      this.setState({ mediaStream });
    } catch (error) {
      console.log(error);
      this.setState({ error: errorTypes.UNSUPPORTED.type });
    }
  }

  handleResize = debounce(150, async () => {
    const { facingMode, height, width } = this.state.constraints.video;
    await this.getMediaStream(buildConstraints(facingMode, height, width));
    this.setVideoStream();
  });

  async sendWavFiletoServer(wavFile) {
    var formdata = new FormData();
    formdata.append("file", wavFile); 
    formdata.append("shouldGivePOV", "true")
    formdata.append("callbackUrl", "http://localhost:5000/userCoupon/callback%22" )
    formdata.append("externalId", "34535")
    formdata.append("hash", Date.now().toString())
    formdata.append("lat", "100")
    formdata.append("long", "100")

    // http://192.168.129.105:3000/pov
    // https://test-img.free.beeceptor.com/pov

    const response = await axios.post("https://28e4-2409-40f2-1039-ae05-6330-c03b-58aa-a639.ngrok-free.app/pov", formdata, {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    });
    console.log(response.data)
  }

  
  async takePhoto(imageCapture) {
    try {
      const { onTakePhoto } = this.props;
      const blob = await imageCapture.takePhoto();
      const capturedImg = URL.createObjectURL(blob);

      // saveAs(new Blob([file], {type:mime}),filename);


      //Now convert the blob to a wav file or whatever the type you want
      var wavefilefromblob = new File([blob], 'filename.jpg');

      console.log(wavefilefromblob);
      //Pass the converted file to the backend/service
      await this.sendWavFiletoServer(wavefilefromblob);



      // console.log("blob", blob)
      // console.log("capturedImg", imageCapture)
      // await this.sendImage_old(blob);

      if (onTakePhoto) {
        onTakePhoto(capturedImg);
      }
    } catch (e) {
      console.log(e);
      this.setState({ error: errorTypes.TAKE_PHOTO_FAILURE.type });
    }
  }

  dataURItoBlob(dataURI) {
    const byteString = atob(dataURI.split(',')[1]);
    const mimeString = dataURI.split(',')[0].split(':')[1].split(';')[0];
    const ab = new ArrayBuffer(byteString.length);
    const ia = new Uint8Array(ab);

    for (let i = 0; i < byteString.length; i++) {
      ia[i] = byteString.charCodeAt(i);
    }

    return new Blob([ab], { type: mimeString });
  }

  async sendImage_old(img) {
    console.log("send image old")
    const formData = new FormData();
    formData.append('image', img, "images.jpg");
    console.log("FOrm data: ",formData);

    try {
      
      // https://test-img.free.beeceptor.com/pov
      const response = await fetch('http://192.168.129.105:3000/pov', 
        {
          method: 'POST',
          headers: {
            // 'Content-Type': 'multipart/form-data',
            // "charset": 'utf-8',
            // "boundary": "another cool boundary"
          },        
          body: { "file": formData, 
            "shouldGivePOV": "true", 
            "callbackUrl": "http://localhost:5000/userCoupon/callback", 
            "externalId": "12347", "hash": "1", "lat": "100", "long": "100" 
          }
        }
      );
  
      const data = await response.json();
      console.log('Response from backend:', data);

    } catch (error) {
      console.log("Error:", error)
    }

  };

  setVideoStream() {
    const { mediaStream } = this.state;
    if (this.video) {
      this.video.srcObject = mediaStream;
      this.video.onloadedmetadata = () => this.video.play();
    }
  }

  stopMediaStream() {
    if (this.video && this.video.srcObject) {
      const { onStopMediaStream } = this.props;
      this.video.srcObject.getTracks().forEach(t => t.stop());

      if (onStopMediaStream) {
        onStopMediaStream();
      }
    }
  }

  render() {
    const { captureButtonRenderer, responsive } = this.props;
    const { constraints = {}, devices, error } = this.state;
    const multipleDevices = devices && devices.length > 1;

    const {
      video: { facingMode },
    } = constraints;

    if (error) {
      return <CameraError errorType={error} />;
    }

    return (
      <CameraWrapper>
        <video
          autoPlay
          playsInline
          ref={video => (this.video = video)}
          style={
            responsive
              ? { background: 'black', display: 'block', width: '100%' }
              : { background: 'black', display: 'block' }
          }
        />
        <CameraControls>
          {captureButtonRenderer ? (
            captureButtonRenderer(this.captureMediaStream)
          ) : (
            <CaptureButton onCapture={this.captureMediaStream} />
          )}
        </CameraControls>
        {multipleDevices && (
          <SwitchModeButton
            currentFacingMode={facingMode}
            onSwitch={this.changeFacingMode}
          />
        )}
      </CameraWrapper>
    );
  }
}

Camera.defaultProps = {
  facingMode: facingModes.ENVIRONMENT,
  responsive: true,
};

Camera.propTypes = {
  captureButtonRenderer: PropTypes.func,
  facingMode: PropTypes.string,
  height: PropTypes.number,
  onStopMediaStream: PropTypes.func,
  onTakePhoto: PropTypes.func,
  responsive: PropTypes.bool,
  width: PropTypes.number,
};

export default Camera;