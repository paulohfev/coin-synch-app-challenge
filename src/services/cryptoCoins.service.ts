import coinApiClient from "@/app/coinAPIClient";

export const fetchCryptoCoinTrades = () => {

  return coinApiClient.get(`/trades/latest?limit=5&filter_asset_class=CRYPTO`)
    .then(response => response.data)
    .catch(error => {
      throw new Error(error.response.data.error_message);
    });
};

export const CryptoCoinsService = {
  fetchCryptoCoinTrades
};
