import React from 'react'
import "./header.css"

export default function Header() {
    return (
        <div className="header">
            <div className="headerTitles">
                <span className="headerTitleSm">React & Node</span>
                <span className="headerTitleLg">Blog</span>
            </div>
            <img className="headerimg" src="https://images.pexels.com/photos/2972971/pexels-photo-2972971.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="" />
        </div>
    )
}
