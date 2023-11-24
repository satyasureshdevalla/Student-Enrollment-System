import React, { Component } from 'react'
import AdminService from '../services/AdminService'

class ListAdminComponent extends Component {
    constructor(props) {
        super(props)
        this.state = {
                admins: []
        }
    }

    componentDidMount(){
        AdminService.getAdmins().then((res) => {
            this.setState({ admins: res.data});
        });
    }

    render() {
        return (
            <div>
                 <h2 className="text-center">Admins List</h2>
                 <br></br>
                 <div className = "row">
                        <table className = "table table-striped table-bordered">
                            <thead>
                                <tr>
                                    <th> Username </th>
                                    <th> Password </th>
                                    <th> Name </th>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    this.state.admins.map(
                                        admin =>
                                        <tr key = { admin.id }>
                                             <td> { admin.username } </td>
                                             <td> { admin.password }</td>
                                             <td> { admin.name }</td>
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

export default ListAdminComponent