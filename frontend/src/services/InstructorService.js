import axios from 'axios';

const INSTRUCTOR_API_BASE_URL = "http://localhost:8080/api/v1/instructors";

class InstructorService{

    getInstructors(){
        return axios.get(INSTRUCTOR_API_BASE_URL);
    }
}

export default new InstructorService()