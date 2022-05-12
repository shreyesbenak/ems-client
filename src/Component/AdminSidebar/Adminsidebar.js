import React from 'react'
import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from '../Utils/Auth';
import "./Adminsidebar.css"

function Adminsidebar() {
    const auth = useAuth()
    let navigate = useNavigate()
    const logoutHnadler = (e) =>{
           localStorage.clear();
           auth.logout()
           navigate("/");
   }
  return (
    <div className="sidebar1">
    <div className="sidebar-top">
        <i className="logo "></i>
        <span className="brand">EMS</span>
    </div>
    <div className="sidebar-center">
        <ul className="list">
           
            <li className="list-item">
              <Link to='/admin/viewdata' className='Link'>
              <i className="list-item-icon fas fa-plus"></i>
                <span className="list-item-text">View Data</span>

              </Link>
            </li>
           
        </ul>
    </div>
    <div className="sidebar-bottom">
       <ul className='list'>
       <li className="list-item">
           <Link to="/" className='Link' >
                <i className="list-item-icon fas fa-sign-out-alt"></i>
                <span className="list-item-text" onClick={logoutHnadler}>logout</span>
                </Link>
            </li>
       </ul>
    </div>
</div>
  )
}

export default Adminsidebar