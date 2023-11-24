import React, { Component } from 'react'
import SectionService from '../services/SectionService'

class ListSectionComponent extends Component {
    constructor(props) {
        super(props)
        this.state = {
                sections: []
        }
    }

    componentDidMount(){
        SectionService.getSections().then((res) => {
            this.setState({ sections: res.data});
        });
    }

    render() {
        return (
            <div>
                 <h2 className="text-center">Sections List</h2>
                 <br></br>
                 <div className = "row">
                        <table className = "table table-striped table-bordered">
                            <thead>
                                <tr>
                                    <th> Course Id </th>
                                    <th> Section Code  </th>
                                    <th> Instructor Id </th>
                                    <th> Schedule </th>
                                    <th> Room Id </th>
                                    <th> Enrollment Count </th>
                                    <th> Max Capacity </th>
                                    <th> Term </th>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    this.state.sections.map(
                                        section =>
                                        <tr key = { section.id }>
                                             <td> { section.course_id } </td>
                                             <td> { section.section_code } </td>
                                             <td> { section.instructor_id }</td>
                                             <td> { section.schedule }</td>
                                             <td> { section.room_id }</td>
                                             <td> { section.enrollment_count }</td>
                                             <td> { section.max_capacity }</td>
                                             <td> { section.term }</td>
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

export default ListSectionComponent