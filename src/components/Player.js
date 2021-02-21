import React from 'react'
import "../Styles/Player.css"
import Sidebar from "./Sidebar"
import Body from "./Body"
import Footer from "./Footer"
export default function Player({spotify}) {
    return (
        <div className="player">
            <div className="player__body">
            <Sidebar />
            <Body />
            </div>
            <Footer />
        </div>
    )
}
