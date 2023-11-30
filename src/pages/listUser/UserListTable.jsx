import React, { useState,useEffect } from 'react'
import './userListTable.css'
import { ApiService } from '../../service'
import UserListTableRow from './UserListTableRow';




const UserListTable = () => {
  const [userList, setUserList] = useState([]);
  useEffect(() => {
      const loadUsers = async() =>{
      const users = await ApiService.getUsers();
      console.log(users);
      setUserList(users);
    }
  loadUsers()

  }, [])
  
  return (
    <>
    <div className="header">
      <div className="text">Lista de Usuarios</div>
       <div className="underline"></div>
    </div>
    <table className='user-list-table'>
        <thead>
            <tr>
            <th><h3 className='text-h3'>Correo</h3></th>
            <th><h3>Imagen</h3></th>
            </tr>
        </thead>
        <tbody>
           {
            userList.length === 0 ? <tr><td><h4>No hay usuario</h4></td></tr> :userList.map(user=><UserListTableRow key={user.id} user={user}/>)
           }
        </tbody>
    </table>
    </>
  )
}

export default UserListTable