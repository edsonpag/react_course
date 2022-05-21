import Axios from "axios";

const API_KEY = "bfa8722befe85b1b757c";

async function convertCurrencies(amount, fromCurrency, toCurrency) {
    const URL = `https://free.currconv.com/api/v7/convert?q=${fromCurrency}_${toCurrency}&compact=ultra&apiKey=${API_KEY}`

    const response = await Axios.get(URL);

    const value = response.data[`${fromCurrency}_${toCurrency}`];

    const result = (parseFloat(amount) * parseFloat(value)).toFixed(2);

    return result;
}


export default convertCurrencies;