import axios from 'axios';

const ENROLL_API_BASE_URL = "http://localhost:8080/api/v1/enrolls";

class EnrollService {

    getEnrolls(){
        return axios.get(ENROLL_API_BASE_URL);
    }
}

export default new EnrollService()