import React from 'react'
import { useState,useEffect } from 'react'
import './sidebar.css'
import axios from 'axios'
import { Link, useLocation } from 'react-router-dom'

export default function Sidebar() {

    const [cat, setCat] = useState([])

    useEffect(() => {
        const getCat = async ()=>{
            const res = await axios.get("/category")
            setCat(res.data)
        }
        getCat()
    }, [])

    return (
        <div className='sideBar'>
            <div className='sidebarItem'>
                <span className="sidebarTitle">ABOUT ME</span>
                <img src="https://images.pexels.com/photos/7118186/pexels-photo-7118186.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                     alt="" 
                />
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta rem, asperiores esse ipsam corrupti ducimus cupiditate suscipit doloribus veritatis fuga distinctio consectetur laborum corporis culpa laudantium repellat architecto sunt iure!</p>
            </div>
            <div className="sidebarItem">
                <span className="sidebarTitle">CATEGORIES</span>
                <ul className="sidebarList">
                
                    {cat.map(c=>(
                        <Link to={`/?cat=${c.name}`} className="link" >
                            <li className="sidebarListItem"> {c.name} </li>
                        </Link>
                    ))}
                
                </ul>
            </div>
            <div className="sidebarItem">
                <span className="sidebarTitle">FOLLOW US</span>
                <div className="sidebarSocial">
                    <i className="sidebarIcon fab fa-facebook-square"></i>
                    <i className="sidebarIcon fab fa-instagram-square"></i>
                    <i className="sidebarIcon fab fa-pinterest-square"></i>
                    <i className="sidebarIcon fab fa-twitter-square"></i>
                </div>
            </div>
        </div>
    )
}
