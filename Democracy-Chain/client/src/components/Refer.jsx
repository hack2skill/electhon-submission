import React, { useState } from "react";
import {
  FacebookShareCount,
  HatenaShareCount,
  OKShareCount,
  PinterestShareCount,
  RedditShareCount,
  TumblrShareCount,
  VKShareCount,
  WhatsappShareButton,
  
} from "react-share";
const ReferAndEarn = () => {
  const [referralCode, setReferralCode] = useState("");
  const [referralLink, setReferralLink] = useState("");

  const generateReferralCode = () => {
    // code to generate a unique referral code for the user
    const code = "ABCDE12345";
    setReferralCode(code);
  };

  const generateReferralLink = () => {
    // code to generate a referral link using the referral code
    const link = `https://example.com/signup?ref=${referralCode}`;
    setReferralLink(link);
  };

  return (
    <>
      <div>
        <h2>Your Referral Code: {referralCode}</h2>
        <button onClick={generateReferralCode}>Generate Code</button>

        <h2>Your Referral Link: {referralLink}</h2>
        <button onClick={generateReferralLink}>Generate Link</button>
      </div>
      <FacebookShareCount url={"https:hello.com"}>
        {(shareCount) => (
          <span className="myShareCountWrapper">{shareCount}</span>
        )}
      </FacebookShareCount>
    </>
  );
};

export default ReferAndEarn;
