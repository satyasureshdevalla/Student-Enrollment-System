import React, { Component } from 'react'
import RoomService from '../services/RoomService'

class ListRoomComponent extends Component {
    constructor(props) {
        super(props)
        this.state = {
                rooms: []
        }
    }

    componentDidMount(){
        RoomService.getRooms().then((res) => {
            this.setState({ rooms: res.data});
        });
    }

    render() {
        return (
            <div>
                 <h2 className="text-center">Rooms List</h2>
                 <br></br>
                 <div className = "row">
                        <table className = "table table-striped table-bordered">
                            <thead>
                                <tr>
                                    <th> Room Name </th>
                                    <th> Capacity </th>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    this.state.rooms.map(
                                        room =>
                                        <tr key = { room.id }>
                                             <td> { room.room_name } </td>
                                             <td> { room.capacity } </td>
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

export default ListRoomComponent