import React, { Component } from 'react'
import DropService from '../services/DropService'

class ListDropComponent extends Component {
    constructor(props) {
        super(props)
        this.state = {
                drops: []
        }
    }

    componentDidMount(){
        DropService.getDrops().then((res) => {
            this.setState({ drops: res.data});
        });
    }

    render() {
        return (
            <div>
                 <h2 className="text-center">Drops List</h2>
                 <br></br>
                 <div className = "row">
                        <table className = "table table-striped table-bordered">
                            <thead>
                                <tr>
                                    <th> Student Id</th>
                                    <th> Enrollment Id</th>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    this.state.drops.map(
                                        drop =>
                                        <tr key = { drop.id }>
                                             <td> { drop.student_id } </td>
                                             <td> { drop.enrollment_id } </td>
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

export default ListDropComponent