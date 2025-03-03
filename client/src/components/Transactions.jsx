import React, { useContext } from 'react';

import { TransactionContext } from '../context/TransactionContext';


const shortenAddress = (address) => {
  return `${address?.slice(0, 5)}...${address?.slice(-4)}`;
};

const TransactionsCard = ({ addressTo, addressFrom, timestamp, message, keyword, amount, url }) => {
  return (
    <div className="bg-[#181918] m-2 flex 
      w-[30%]
      min-w-[270px]
      max-w-[300px]
      flex-col p-3 rounded-md hover:shadow-2xl"
    >
      <div className="flex flex-col items-center w-full mt-2">
        <div className="flex flex-col w-full mb-3 p-2">
          <a href={`https://sepolia.etherscan.io/address/${addressFrom}`} target="_blank" rel="noreferrer">
            <p className="text-white text-sm">From: {shortenAddress(addressFrom)}</p>
          </a>
          <a href={`https://sepolia.etherscan.io/address/${addressTo}`} target="_blank" rel="noreferrer">
            <p className="text-white text-sm">To: {shortenAddress(addressTo)}</p>
          </a>
          <p className="text-white text-sm">Amount: {amount} ETH</p>
          {message && (
            <>
              <br />
              <p className="text-white text-sm">Message: {message}</p>
            </>
          )}
        </div>
        <img
          src="https://media.giphy.com/media/3oEjI5VtIhHvK37WYo/giphy.gif"
          alt="test successful"
          className="w-full h-32 rounded-md shadow-lg object-cover"
          onError={(e) => {
            e.target.onerror = null;
            e.target.src = "https://media.giphy.com/media/3oEjI5VtIhHvK37WYo/giphy.gif"
          }}
        />
        <div className="bg-black p-2 px-4 w-max rounded-3xl -mt-4 shadow-2xl">
          <p className="text-[#37c7da] text-sm font-bold">{timestamp}</p>
        </div>

      </div>
    </div>
  );
};

const Transactions = () => {
  const { currentAccount, transactions } = useContext(TransactionContext);

  return (
    <div className="flex w-full justify-center items-center 2xl:px-20 gradient-bg-transactions">
      <div className="flex flex-col md:p-12 py-12 px-4">
        {currentAccount ? (
          <h3 className="text-white text-3xl text-center my-2">
            Latest Transactions
          </h3>
        ) : (
          <h3 className="text-white text-3xl text-center my-2">
            Connect your account to see the latest transactions
          </h3>
        )}

        <div className="flex flex-wrap justify-center items-start gap-2 mt-10">
          {transactions.map((transaction, i) => (
            <TransactionsCard key={i} {...transaction} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Transactions;