import React from 'react'
import "./Sidebar.css"

function Sidebar() {
  return (
    <div className="sidebar">
    <div className="sidebar-top">
        <i className="logo "></i>
        <span className="brand">EMS</span>
    </div>
    <div className="sidebar-center">
        <ul className="list">
            <li className="list-item">
                <i className="list-item-icon fas fa-home"></i>
                <span className="list-item-text">Dashboard</span>
            </li>
            <li className="list-item">
                <i className="list-item-icon fas fa-plus"></i>
                <span className="list-item-text">Add Form</span>
            </li>
           
        </ul>
    </div>
    <div className="sidebar-bottom">
       <ul className='list'>
       <li className="list-item">
                <i className="list-item-icon fas fa-sign-out-alt"></i>
                <span className="list-item-text">logout</span>
            </li>
       </ul>
    </div>
</div>
  )
}

export default Sidebar