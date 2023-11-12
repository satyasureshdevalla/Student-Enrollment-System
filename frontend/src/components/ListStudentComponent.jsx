import React, { Component } from 'react'
import StudentService from '../services/StudentService'

class ListStudentComponent extends Component {
    constructor(props) {
        super(props)
        this.state = {
                students: []
        }
    }

    componentDidMount(){
        StudentService.getStudents().then((res) => {
            this.setState({ students: res.data});
        });
    }

    render() {
        return (
            <div>
                 <h2 className="text-center">Students List</h2>
                 <br></br>
                 <div className = "row">
                        <table className = "table table-striped table-bordered">
                            <thead>
                                <tr>
                                    <th> Username </th>
                                    <th> Name </th>
                                    <th> Email </th>
                                    <th> Contact Details </th>
                                    <th> Schedule </th>
                                    <th> Maximum Credits </th>
                                    <th> Current Term </th>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    this.state.students.map(
                                        student =>
                                        <tr key = { student.id }>
                                             <td> { student.username } </td>
                                             <td> { student.name } </td>
                                             <td> { student.email }</td>
                                             <td> { student.contact_details }</td>
                                             <td> { student.schedule }</td>
                                             <td> { student.max_credits }</td>
                                             <td> { student.current_term }</td>
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

export default ListStudentComponent