import axios from 'axios';

const SECTION_API_BASE_URL = "http://localhost:8080/api/v1/sections";

class SectionService {

    getSections(){
        return axios.get(SECTION_API_BASE_URL);
    }
}

export default new SectionService()