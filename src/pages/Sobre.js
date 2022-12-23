
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import React from 'react'
import fotojho from "../assets/images/fotojho.png"


export default function Sobre() {
  return (
    <>
    <img className="img" src={fotojho} />
    <a target="_blank" href="https://www.linkedin.com/in/jhonatan-almeida-alflen-965584248/"><LinkedInIcon sx={{ fontSize: '32px' }} /></a>
  </>
    )
}



