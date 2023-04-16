import React from "react";

const NFTCard = () => {
  return (
    <>
      <div className="nft">
        <div className="main">
          <img
            className="tokenImage"
            src="https://images.unsplash.com/photo-1621075160523-b936ad96132a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
            alt="NFT"
          />
          <h2 className="text-white mt-2">Electhon #4269</h2>
          <p className="description font-bold">
          मेरा मत , मेरा अधिकार...
          </p>
          <div className="tokenInfo">
            <div className="price">
              <ins>◘</ins>
              <p>0.031 ETH</p>
            </div>
            <div className="duration">
              <ins>◷</ins>
              <p>11 days left</p>
            </div>
          </div>
          <hr />
        </div>
      </div>
    </>
  );
};

export default NFTCard;
