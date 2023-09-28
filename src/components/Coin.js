import React, { useEffect, useState } from "react";
import style from "./coin.module.css";
import CoinModal from "./CoinModal";
import { LIVE_DATA } from "../CONST/constant";

const Coin = (props) => {
  const { marketName, currToName, baseCurrency, baseCurrencyId } = props.coinData;
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [coinName, setCoinName] = useState('');
  const [coinDetails, setCoinDetails] = useState([]);
  const [checkData, setCheckData] = useState(false);

  const handleModal = (marketName) => {
    //setIsModalOpen(!isModalOpen);
    setCoinName(marketName);
    setCheckData(true);

    // if(isModalOpen === false) {
    //   setCheckData(false);
    // }
  };

  const closeModal = () => {
    console.log('close');
    setIsModalOpen(false);
    setCheckData(false);
  }


  const fetchData = async (url) => {
    try {
        const response = await fetch(url);
        const data = await response.json();
        setCoinDetails(data);
        //setCheckData(true);
        setIsModalOpen(true);
    } catch (error) {
        console.log(error);
    }
};

useEffect(()=>{
  if(checkData){
    fetchData(LIVE_DATA+'?symbol='+coinName);
  }
},[checkData])



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

        {isModalOpen && <CoinModal closeModal={closeModal} isModalOpen={isModalOpen} coinName = {coinName} coinObj = {coinDetails} />}
      </div>
    </article>
  );
};

export default Coin;