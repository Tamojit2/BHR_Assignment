import React, { useState } from "react";
import style from "./coin.module.css";
import CoinModal from "./CoinModal";

const Coin = (props) => {
  const { marketName, currToName, baseCurrency, baseCurrencyId } = props.coinData;

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [coinName, setCoinName] = useState('');

  const handleModal = (marketName) => {
    setIsModalOpen(!isModalOpen);
    setCoinName(marketName);
  };


  return (
    <article className={style.coin}>
      <div>
        <h3>Market Name: {marketName}</h3>
        <h3>CurrToName: {currToName}</h3>
        <h3>Base Currency: {baseCurrency}</h3>
        <h3>Id: {baseCurrencyId}</h3>

        <button
          className={style.btn}
          onClick={() => {
            handleModal(marketName);
          }}
        >
          Show Details
        </button>

        {isModalOpen && <CoinModal onClose={handleModal} isModalOpen={isModalOpen} coinName = {coinName} />}
      </div>
    </article>
  );
};

export default Coin;