import React from "react";
import './navbar.css';
import tomate from '../imagens/tomate.png';
import styled from "styled-components";
import { Link } from "react-router-dom";

function Navbar (){
    return(
        <nav class="navbar navbar-expand-lg navbar-light navbar-site">
            <div class="container-fluid">
                <Tomate src={tomate}/>
                <Link to="/" class="Tomate">Tomate</Link>
                <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse" id="navbarNav">
                <ul class="navbar-nav">
                    <li class="nav-item">
                    <Link to="/top" class="Tomate">Top 10</Link>
                    </li>
                    <li class="nav-item">
                    <Link to="recomendado" class="Tomate">Indicações</Link>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link active" href="#">Temporada Atual</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link active" href="#">Genero</a>
                    </li>
                </ul>
                </div>
            </div>
        </nav>
    )
}

export default Navbar;

const Tomate = styled.img`
    width:25px;
    height:25px;
`;