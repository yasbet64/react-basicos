

import React, {createRef, useRef} from 'react';

export default function Referencias(){
    //let refMenu=createRef(), --para class componente
    let refMenu=useRef(), //para funciones Hooks
    refMenuBtn=useRef();


    
    const handleToggleMenu=(e)=>{
        /*
        const $menu = document.getElementById("menu")

        if (e.target.textContent==="Menu") {
            e.target.textContent="cerrar";
            $menu.style.display="block";
        } else {
            e.target.textContent="Menu";
            $menu.style.display="none";
        }*/
        if (refMenuBtn.current.textContent==="Menu") {
            refMenuBtn.current.textContent="cerrar";
            refMenu.current.style.display="block";
        } else {
            refMenuBtn.current.textContent="Menu";
            refMenu.current.style.display="none";
            
        }
    };

    return(
        <>
        <h2>Referencias</h2>
        <button id="menu-btn" ref={refMenuBtn} onClick={handleToggleMenu}>Menu</button>
        <nav id="menu" ref={refMenu}>
            <a href="#">Seccion 1</a>
            <br></br>
            <a href="#">Seccion 2</a>
            <br></br>
            <a href="#">Seccion 3</a>
            <br></br>
            <a href="#">Seccion 4</a>
            <br></br>
            <a href="#">Seccion 5</a>
        </nav>
        </>
    );
}