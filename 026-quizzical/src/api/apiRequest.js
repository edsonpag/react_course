import axios from "axios";

const apiRequest = async () => {
    try {
        const apiUrl = "https://opentdb.com/api.php?amount=5&type=multiple&encode=base64";
        const response = await axios.get(apiUrl);
        const results = response.data.results    

        for(let obj of results) {
            for(let propriety in obj) {
                if(Array.isArray(obj[propriety])) {
                    obj[propriety] = obj[propriety].map((item) => {
                        return atob(item);
                    });
                } else {
                    obj[propriety] = atob(obj[propriety]);
                }
            }
        }


        return results;

    } catch (error) {
        console.log(error);
    }
}

export default apiRequest;