import React from 'react'
import './UserListTableRow.css'

const UserListTableRow = ({ user }) => {
    const { email, avatar } = user;
    return (
        <>
            <tr>
                <td><h3>{email}</h3></td>
                <td><img src={avatar} alt="user-photo" /></td>
            </tr>
        </>

    )
}

export default UserListTableRow