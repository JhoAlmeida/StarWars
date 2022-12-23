import React from 'react'
import { useNavigate, Link } from 'react-router-dom'
export default function MenuOpcoes() {

    const navigate = useNavigate();
    const logoff = () => {
        sessionStorage.removeItem("login")
        navigate("/")
    }
    return (
        <div className='menu'>
            <Link to="/menu">
                <div className='itemMenu'>HOME</div>
            </Link>
            <Link to="/Filmes">
                <div className='itemMenu'>FILMES</div>
            </Link>
            <Link to="/Starships">
                <div className='itemMenu'>STARSHIPS</div>
                </Link>
            <Link to="/Pessoas">
                <div className='itemMenu'>PESSOAS</div>
            </Link>
            <Link to="/Planetas">
                <div className='itemMenu'>PLANETAS</div>
            </Link>
            <Link to="/Especies">
                <div className='itemMenu'>SPECIES</div>
            </Link>
            <Link to="/Duvidas">
                <div className='itemMenu'>DÚVIDAS</div>
            </Link>
            <Link to="/Sobre">
                <div className='itemMenu'>SOBRE</div>
            </Link>
            
            <div className='itemMenu' onClick={logoff}>Logoff</div>
        </div>
    )
}
