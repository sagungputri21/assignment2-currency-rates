import './App.css';
import DataTable from './components/Table/DataTable';
import axios from 'axios';
import React, { useEffect, useState } from 'react';
import TextInfo from './components/TextInfo';

const baseAPI = "https://api.currencyfreaks.com/latest?apikey=a4bed77c76ca46d189705a30c51c4e76&symbols=CAD,EUR,IDR,JPY,CHF,GBP"

function App () {

  const header = [
    "Currency", "We Buy", "Exchange Rate", "We Sell"
  ]

  const [data, setData] = useState([]);

  const getCurrencyData = async () => {
    try {
      const response = await axios.get(baseAPI);
      setData(response.data);
      console.log(response);
    }catch(err) {
      console.log(err);
    }
  }

  useEffect(() => {
    getCurrencyData();
  }, []);

  return (
    <div className="flex flex-col justify-center items-center">
      <DataTable
        data={data}
        header={header}
      />
      <TextInfo/>
    </div>
  );
}

export default App;
