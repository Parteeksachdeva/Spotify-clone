import React from 'react'
import "../Styles/Login.css"
import {LoginUrl} from "./spotify"
export default function Login() {
    return (
        <div className="login">
            <img src="https://getheavy.com/wp-content/uploads/2019/12/spotify2019-830x350.jpg" alt=""/>
            <a href={LoginUrl}>LOGIN WITH SPOTIFY</a>
        </div>
    )
}
