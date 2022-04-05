import axios from "axios";

async function fetchData(stock) {
  try {
    const response = await axios(
      `https://cloud.iexapis.com/stable/stock/${stock}/quote?token=sk_92ca606e0dab464a8b9c2adf2c7ff1ec`
    );
    // console.log(response);
    console.log(response);
    return response;
  } catch (error) {
    console.log(error);
  }
}

export default fetchData;