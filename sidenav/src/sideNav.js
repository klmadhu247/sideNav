import React, {useState} from "react";
import cn from './assets/cn.png';
import '@fortawesome/fontawesome-free/css/all.min.css'
import { FaHome } from "react-icons/fa";
import { MdPeople } from "react-icons/md";
import { FaFolderOpen } from "react-icons/fa";
import { FaCalendarDays } from "react-icons/fa6";
import { IoDocuments } from "react-icons/io5";
import './sidenav.css'


function SideNav ()
{

    const [clicked,setClicked] = useState(false)

    const handleHamburger = ()=>
    {
        setClicked(!clicked)
    }

    const handleClose = ()=>
    {
        setClicked(!clicked)
    }




    return (
        <div>

           { !clicked && <div><i className="fa fa-bars" onClick={handleHamburger}></i></div> }

            <aside className={clicked ? "sidebar__Items": "menulist_closed"}>
                
                <img  src={cn}/>

                <div> <i className="fa fa-times" onClick={handleClose}></i></div>

                <ul className={clicked ? "list_Items":"menulist_closed"}>
                    <li className="list_Items"><a href="#" > <FaHome />   Home</a></li>
                    <li className="list_Items"><a href="#"> <MdPeople/> Team</a></li>
                    <li className="list_Items"><a href="#"> <FaFolderOpen/> Projects</a></li>
                    <li className="list_Items"><a href="#"> <FaCalendarDays/> Calendar</a></li>
                    <li className="list_Items"><a href="#"><IoDocuments /> Documents</a></li>
                </ul>

                <div className={clicked ? "social":"menulist_closed"} > 
                    <ul className="social">
                        <li className="social-logo">
                            <a href="#"><i className="fab fa-facebook-f"></i></a>
                        </li>
                        <li  className="social-logo">
                            <a href="#"><i className="fab fa-twitter"></i></a>
                        </li>
                        <li  className="social-logo">
                            <a href="#"><i className="fab fa-linkedin-in"></i></a>
                        </li>
                        <li  className="social-logo">
                            <a href="#"><i className="fab fa-behance"></i></a>
                        </li>
                    </ul>
                    </div> 

            </aside>
            
            

            
            

        </div>
    );
}
export default SideNav

