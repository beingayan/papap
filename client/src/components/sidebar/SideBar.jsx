import React from 'react';
import { SideBarData } from './SidebarData';
// import HomeWorkIcon from '@material-ui/icons/HomeWork';
import { MdFactory } from "react-icons/md";


export default function SideBar() {
  return (
    <div className="Sidebar">
        <div className="main-logo">
            <MdFactory style={{fontSize:'90px',textAlign:'center',margin:'40px 40px 40px 57px',color:'white'}}/>

           
        </div>
        <hr/>
        <ul className='sidebarList'>

            {SideBarData.map((val,key)=>{
                return (
                    <li key={key}
                    onClick={()=> window.location.pathname=val.link}
                    className='row'
                    >
                        <div id='icon'>{val.icon}</div>
                        <div id='title'>{val.title}</div>

                    </li>
                )
            })}
        </ul>
    </div>
  )
}
