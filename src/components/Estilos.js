import { auto } from 'async';
import { func } from 'prop-types';
import React from 'react';
import './Estilos.css';
import './Estilos.scss';
import moduleStyles from './Estilos.module.css'

export default function Estilos(){

    let myStyles={
        borderRadius:".5rem",
        margin:" 2rem auto",
        maxWidth: "50%"                 
    }
    return(
        <section className="estilos">
            <h2>Estilos css en react</h2>
            <h3 className="bg-react">Estilos de hojas</h3>
            <h3 className="bg-react" style={{borderRadius:"25rem", margin:"1rem"}} >Estilos en lineas</h3>
            <h3 className="bg-react" style={myStyles}>Estilos en Linea</h3>
            <h3 className="bg-react" >agregando normalize con <br/>
            <code>@import-normalize</code>
            </h3>
            <h3 className={moduleStyles.error}>Estilos module</h3>
            <h3 className={moduleStyles.success}>Estilos module</h3>
            <h3 className="bg-sass">Estilos con scss</h3>
        </section>
    );
}