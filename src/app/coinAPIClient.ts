import axios from 'axios';

const coinApiClient = axios.create({
  baseURL: 'https://rest.coinapi.io/v1',
  headers: {
    'X-CoinAPI-Key': process.env.NEXT_PUBLIC_COIN_API_KEY
  }
});

export default coinApiClient;
