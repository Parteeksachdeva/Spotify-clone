import "./App.css"
import Login from "./components/Login.js"
import {useState,useEffect} from "react"
import {getToken} from "./components/spotify"
import SpotifyWebApi from "spotify-web-api-js";
import {useDataLayerValue} from "./components/DataLayer"
import Player from "./components/Player.js"

const spotify = new SpotifyWebApi();


function App() {
  const [{ user,token },dispatch]= useDataLayerValue();


  useEffect(()=>{
    const hash=getToken();
    window.location.hash="";
    const _token = hash.access_token;
    if(_token){

      dispatch({
        type: "SET_TOKEN",
        token: _token,
      })

      // setToken(_token);
      spotify.setAccessToken(_token);

      spotify.getMe().then((user)=>{
        dispatch({
          type: "SET_USER",
          user: user,
        });
        })
        spotify.getUserPlaylists("u13gakgy5ewdd1hs2e06616tm").then((playlists)=>{
          dispatch({
            type: "SET_PLAYLISTS",
            playlists:playlists,
          })
      },function(err) {
        console.error("jnj kernreibuierhuibhueribnureibuierbui");})
    }

    //console.log("I have the token",token);
  },[])
  //console.log("Token:-",token);
  // console.log("PLaylist",playlists);
  
  return (
    <div className="app">
      {
        token ?  <Player spotify={spotify}/> : <Login />
      }
      
    </div>
   );
 }

export default App;
