import { useParams } from "react-router-dom";
import axios from "axios";
import { useState, useEffect } from "react";
import "../App.css";

// stock symbol
// full company name
// primary exchange
// latest price
// 52 week high price
// 52 week low price
// market cap

function Detail() {
  const { symbol } = useParams();
  const [data, setData] = useState({});

  async function fetchData() {
    try {
      const response = await axios(
        `https://cloud.iexapis.com/stable/stock/${symbol}/quote?token=sk_92ca606e0dab464a8b9c2adf2c7ff1ec`
      );
      setData(response.data);
      console.log(response);
      return response;
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    fetchData();
  }, []);

  console.log(data);
  return (
    <div className="detail">
      <h1>Stock Symbol: {data.symbol}</h1>
      <p>Company Name: {data.companyName}</p>
      <p>Primary Exchange: {data.primaryExchange}</p>
      <p>Latest Price: ${data.latestPrice}</p>
      <p>52 Week High: ${data.week52High}</p>
      <p>52 Week Low: ${data.week52Low}</p>
      <p>Market Cap: {data.marketCap}</p>
    </div>
  );
}

export default Detail;

