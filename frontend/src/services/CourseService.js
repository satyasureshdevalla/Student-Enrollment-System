import axios from 'axios';

const COURSE_API_BASE_URL = "http://localhost:8080/api/v1/courses";

class CourseService {

    getCourses(){
        return axios.get(COURSE_API_BASE_URL);
    }
}

export default new CourseService()