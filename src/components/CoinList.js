import React from 'react';
import style from "./coinlist.module.css";
import Coin from './Coin';

const CoinList = ({coinlist}) => {
//console.log(coinlist.status);

//if(coinlist?.status === "success") {
  return (
    <section className={style.coinlist}>
      {coinlist?.data?.map((coin, idx) => {
        if(idx < 3) {
          return (
            <Coin
              coinData = {coin}
              key={coin.baseCurrencyId}
            />
          );
        } else {
          return (
            <>
            </>
          )
        }
          
        })}
    </section>
  
  )
//}
  
}

export default CoinList