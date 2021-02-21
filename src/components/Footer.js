import React from 'react'
import "../Styles/Footer.css"
import PlayCircleOutlineOutlinedIcon from '@material-ui/icons/PlayCircleOutlineOutlined';
import SkipNextIcon from '@material-ui/icons/SkipNext';
import SkipPreviousIcon from '@material-ui/icons/SkipPrevious';
import ShuffleIcon from '@material-ui/icons/Shuffle';
import RepeatIcon from '@material-ui/icons/Repeat';


function Footer() {
    return (
        <div className="footer">
           <div className="footer__left">
                
           </div>

           <div className="footer__center">
               <ShuffleIcon className="footer__green"/>
               < SkipPreviousIcon className="footer__Icon"/>
               < PlayCircleOutlineOutlinedIcon  fontSize="large" className="footer__Icon"/>
               < SkipNextIcon  className="footer__Icon"/>
               <RepeatIcon className="footer__green"/>
           </div>

           <div className="footer__right">
               
           </div>
        </div>
    )
}

export default Footer
