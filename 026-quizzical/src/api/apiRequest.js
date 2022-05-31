import axios from "axios";

const apiRequest = async () => {
    try {
        const apiUrl = "https://opentdb.com/api.php?amount=5&type=multiple";
        const response = await axios.get(apiUrl);

        return response.data.results;

    } catch (error) {
        console.log(error);
    }
}

export default apiRequest;