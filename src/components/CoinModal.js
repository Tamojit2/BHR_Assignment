import React, { useEffect, useState } from 'react';
import '../App';
import { LIVE_DATA } from '../CONST/constant';

const CoinModal = ({ onClose, coinName, isModalOpen }) => {

  const [coinDetails, setCoinDetails] = useState([]);
  
  if(onClose === true) {

  }
  //console.log(LIVE_DATA+'?symbol='+coinName);

  const fetchData = async (url) => {
    try {
        const response = await fetch(url);
        const data = await response.json();
        setCoinDetails(data);
    } catch (error) {
        console.log(error);
    }
};

useEffect(()=>{
  if(isModalOpen){
    fetchData(LIVE_DATA+'?symbol='+coinName);
  }
},[isModalOpen])

//console.log(coinDetails?.data?.baseCurrencyId);


  return (

    
    <div className="modal">
    <div className="modal-content">
      <span className="close-button" onClick={onClose}> &times;</span>

      
      {coinDetails?.data?.map((coinInfo) => {

          return(
            <>
              <h2> {coinInfo.baseCurrencyId} </h2>
              <h3>{coinInfo.currToName}</h3>
              <h2>{coinInfo.baseCurrency}</h2>
              <h3>{coinInfo.quoteCurrency}</h3>
            </>
          )})}

    </div>
  </div>

  
    
  );

}

export default CoinModal