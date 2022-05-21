import Axios from "axios";

const API_KEY = "bfa8722befe85b1b757c";

async function getAllCurrencies() {
    const URL = `https://free.currconv.com/api/v7/currencies?apiKey=${API_KEY}`;
    
    try {
        const response = await Axios.get(URL);
        const responseArray = [];

        for(let i in response.data.results) {
            responseArray.push(response.data.results[i])
        }
        return responseArray;
    }
    catch(error) {
        console.log(error);
    }
}

export default getAllCurrencies;