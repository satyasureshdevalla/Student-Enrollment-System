import React, { Component } from 'react'
import InstructorService from '../services/InstructorService'

class ListInstructorComponent extends Component {
    constructor(props) {
        super(props)
        this.state = {
                instructors: []
        }
    }

    componentDidMount(){
        InstructorService.getInstructors().then((res) => {
            this.setState({ instructors: res.data});
        });
    }

    render() {
        return (
            <div>
                 <h2 className="text-center">Instructors List</h2>
                 <br></br>
                 <div className = "row">
                        <table className = "table table-striped table-bordered">
                            <thead>
                                <tr>
                                    <th> Username </th>
                                    <th> Password </th>
                                    <th> Name </th>
                                    <th> Email </th>
                                    <th> Contact Details </th>
                                    <th> Schedule </th>
                                    <th> Subjects Taught</th>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    this.state.instructors.map(
                                        instructor =>
                                        <tr key = { instructor.id }>
                                             <td> { instructor.username } </td>
                                             <td> { instructor.password } </td>
                                             <td> { instructor.name }</td>
                                             <td> { instructor.email }</td>
                                             <td> { instructor.contact_details }</td>
                                             <td> { instructor.schedule }</td>
                                             <td> { instructor.subjects_taught }</td>
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

export default ListInstructorComponent