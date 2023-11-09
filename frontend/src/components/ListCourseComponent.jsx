import React, { Component } from 'react'
import CourseService from '../services/CourseService'

class ListCourseComponent extends Component {
    constructor(props) {
        super(props)
        this.state = {
                courses: []
        }
    }

    componentDidMount(){
        CourseService.getCourses().then((res) => {
            this.setState({ courses: res.data});
        });
    }

    render() {
        return (
            <div>
                 <h2 className="text-center">Courses List</h2>
                 <br></br>
                 <div className = "row">
                        <table className = "table table-striped table-bordered">
                            <thead>
                                <tr>
                                    <th> Course Id</th>
                                    <th> Course Name</th>
                                    <th> Grade</th>
                                    <th> Shortname</th>
                                    <th> Isactive</th>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    this.state.courses.map(
                                        course =>
                                        <tr key = { course.id }>
                                             <td> { course.courseid } </td>
                                             <td> { course.coursename } </td>
                                             <td> { course.grade }</td>
                                             <td> { course.shortname }</td>
                                             <td> { course.isactive }</td>
                                        </tr>
                                    )
                                }
                            </tbody>
                        </table>

                 </div>

            </div>
        )
    }
}

export default ListCourseComponent