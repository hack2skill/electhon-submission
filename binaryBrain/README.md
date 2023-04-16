# Electhon - 2023

#### Team Name - Binary Brain
#### Problem Statement - 3. Device a solution that can increase the voting turnout on the election day
#### Team Leader Email - phadnis.anurag@gmail.com

## A Brief of the Prototype:
  What is your solution? and how it works. 
  > The idea behind Votivate is to increase voter turnout in India by incentivizing people to vote. Votivate aims to achieve this by partnering with brands to offer exclusive discounts and offers to those who cast their votes.
  
  > Users can register for Votivate using their prefered brand's application and upload a selfie with an inked finger as proof of voting. Votivate uses deep learning neural net to verify the proof of voting and confirm that the user has indeed cast their vote. Once a user's vote is validated, they are redirected to the participating brand's website or app to receive their discount or offer.
  
  > By providing a tangible benefit to voting, Votivate hopes to increase voter turnout and promote a more representative democracy. In addition, brands benefit from increased customer engagement and loyalty, positive brand image and reputation, and increased sales and revenue. Votivate offers a plug-and-play API that allows brands to easily integrate their campaigns into their apps and websites.

## Code Execution Instruction:
  The repository contains multiple indepndent service which are needed to be built in order to run the system.

  1. pov-app-backend:
    This is the backend server created for the votivate application. The purpose of this service is to create endpoint to upload picture with geolocation and verify the proof of vote token should be given to the user or not. The user's are identified on the basis of SHA256 hash of their email address of phone number. It talks to the services of the brand companies by using HTTP callbacks.
    It has the following dependencies:
    1. Nodejs
    2. Mongodb
    3. Token for the ML model hosted on cloud

    You need to provide all the above information in an .env file.
    Then run
    > `yarn install`
    > Run `yarn start:dev`
    > Server opens on a default port 3000
  
  2. react-camera
    This is the frontend application which will be used to upload a selfie and act as a web interface using which the voter can get his proof of vote for one time for each election which can then be redemmed at brand offers of multiple brands

    To run the application
    > npm install
    > npm start

  3. Ecom-app-backend (Demo code for integration with brands)
    This is the backend application which act as a mock application for how the brand's will integrate our application. They need to create and maintain their own discount coupons and create banner during the election which will act as reminder using push notifications and voter can click on the banner to get redirected to the portal where he can upload the selfie to get the proof of vote tokens. Later the proof of vote tokens are notified to this service using HTTP calls which are made by the pov app backend.
    > Create .env file with the mongodb credentials
    > run yarn install
    > run yarn start:dev

  4. Ecommerce react app (Demo code for integration with brands)
    This is a front end demo application of how our solution will be integrated on other platforms. 
    To run this
    > npm run

[Execution Plan](pov.pdf)
