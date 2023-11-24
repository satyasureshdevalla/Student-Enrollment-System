import React, { Component } from 'react'
import EnrollService from '../services/EnrollService'

class ListEnrollComponent extends Component {
    constructor(props) {
        super(props)
        this.state = {
                enrolls: []
        }
    }

    componentDidMount(){
        EnrollService.getEnrolls().then((res) => {
            this.setState({ enrolls: res.data});
        });
    }

    render() {
        return (
            <div>
                 <h2 className="text-center">Enrolls List</h2>
                 <br></br>
                 <div className = "row">
                        <table className = "table table-striped table-bordered">
                            <thead>
                                <tr>
                                    <th> Student Id</th>
                                    <th> Section Id</th>
                                    <th> Grade </th>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    this.state.enrolls.map(
                                        enroll =>
                                        <tr key = { enroll.id }>
                                             <td> { enroll.student_id } </td>
                                             <td> { enroll.section_id } </td>
                                             <td> { enroll.grade }</td>
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

export default ListEnrollComponent