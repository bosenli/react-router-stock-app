import fetchData from "../constants/constants";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

function Search() {
  const navigate = useNavigate();

  const [stock, setStock] = useState("");
  const [stockData, setStockData] = useState({});

  function getStockItem(e) {
    const stockTarget = e.target.value;
    setStock(stockTarget);
  }

  async function sendData(event) {
    const response = await fetchData(stock);
    setStockData(response.data);
  }

  console.log(stockData);

  return (
    <div>
      <input type="text" placeholder="Company Tag" onChange={getStockItem} />
      <button type="submit" onClick={sendData}>
        Submit
      </button>
      <div>
        <h1>{stockData.companyName}</h1>
        {stockData.companyName ? (
          <button onClick={() => navigate(`/search/${stockData.symbol}`)}>
            More Info
          </button>
        ) : (
          ""
        )}
      </div>
    </div>
  );
}

export default Search;
