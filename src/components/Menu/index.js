import React from 'react';
import Img from '../../assets/img/Madflix_logo.png';
import './menu.css';
import Button from '../Button/';
// import ButtonLink from '../components/ButtonLink';

function Menu() {
    return (
        <nav className="Menu">
            <a href="/">
                <img className= "Img" src ={Img} alt="MadFlix logo"/>
            </a>
            <Button as="a" className= "ButtonLink" href="/">
                Add Novo Vídeo
            </Button>

        </nav>

    );
}

export default Menu;
