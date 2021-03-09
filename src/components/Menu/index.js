import React from 'react';
import { Link } from 'react-router-dom'; //pagina não fica loop carregando
import Img from '../../assets/img/Madflix_logo.png';
import './menu.css';
import Button from '../Button/';
//import ButtonLink from '../components/ButtonLink';

function Menu() {
    return (
        <nav className="Menu">
            <Link to="/">
                <img className= "Img" src ={Img} alt="MadFlix logo"/>
            </Link>
            <Button as={Link} className= "ButtonLink" to="/cadastro/video">
                Add Novo Vídeo
            </Button>

        </nav>

    );
}

export default Menu;
