import React from 'react';

const Banner = ({ imageUrl, text }) => {
  return (
  <a href='https://e337-2409-40f2-1036-68a5-49c7-59af-720b-a59d.ngrok-free.app/'>
    <div style={{
      backgroundImage: `url(${"https://media.discordapp.net/attachments/1077202067376046131/1096952288557408256/banner-voting.png"})`,
      backgroundSize: 'contain',
      backgroundPosition: 'center',
      backgroundRepeat : 'no-repeat',
      height: '25vh',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      color: 'white',
      textShadow: '2px 2px #000000'
    }}>
      <h1>{text}</h1>
    </div>
    </a>
  );
}

export default Banner;