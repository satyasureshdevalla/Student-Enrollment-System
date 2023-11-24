import axios from 'axios';

const DROP_API_BASE_URL = "http://localhost:8080/api/v1/drops";

class DropService {

    getDrops(){
        return axios.get(DROP_API_BASE_URL);
    }
}

export default new DropService()