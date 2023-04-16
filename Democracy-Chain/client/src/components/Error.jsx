import React from "react";
import { ConnectKitButton } from "connectkit";
const Error = () => {
  return (
    <>
      <div className=" h-screen mt-10 w-full flex justify-center items-center ">
        <div className="w-2/3 p-4 text-center bg-white border border-gray-200 rounded-lg shadow sm:p-8  dark:border-gray-700">
         
          <h1 class="mb-4 text-4xl font-extrabold leading-none tracking-tight text-black md:text-5xl lg:text-6xl dark:text-black">Please Connect Your Wallet</h1>
          <p className="mb-5 text-base text-gray-500 sm:text-lg dark:text-gray-900">
            WalletConnect is a bridge that connects Democracy-Chain (DC) to your
            Any Wallet. Once you've approved a connection request from the DApp
            (via WalletConnect), the DApp can send transaction requests to your
            Any Wallet, which you must also manually approve in the
            Wallet
          </p>
          <div className="items-center justify-center space-y-4 sm:flex sm:space-y-0 sm:space-x-4">
            
             
              <div className="text-left">
                <div className=" font-sans text-sm font-semibold">
                  <ConnectKitButton/>
                </div>
              </div>
           
          </div>
        </div>
      </div>
    </>
  );
};

export default Error;
