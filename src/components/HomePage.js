import React, { useEffect, useState } from 'react';
import { LIVE_DATA } from "../CONST/constant";
import CoinList from './CoinList';
import PriceListing from './PriceListing';

const HomePage = () => {

    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState(null);
    const [coins, setCoins] = useState([]);

    
    const fetchData = async (url) => {
        setIsLoading(true);
        try {
            const response = await fetch(url);
            const data = await response.json();
            setCoins(data);
            setIsLoading(false);
            setError(null);
        } catch (error) {
            setIsLoading(false);
            setError(error);
        }
    };

    useEffect(() => {
        fetchData(LIVE_DATA);
    }, []);

    //console.log(coins);
      

  return (
    <>
      <h1>Crypto Coin List</h1>
      {isLoading && <h2>Loading...</h2>}
      {error && <h2>{error.message}</h2>}
      {coins && (
        <CoinList
          coinlist={coins}
        />
      )}


      <PriceListing />
    </>
  )
}

export default HomePage