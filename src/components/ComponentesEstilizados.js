import React from 'react'
import styled, {css,keyframes,ThemeProvider,createGlobalStyle}from "styled-components"

export default function ComponentesEstilizados(){

    let mainColor="#db7093",
    mainAlphaColor80="#db709380";

    const setTransitionTime=(time)=>`all ${time} ease-in-out`

    const fadeIn=keyframes`
    0%{
        opacity:0;
    }
    100%{
        opacity:1;
    }
    `

    const MyH3= styled.h3`
    padding:2rem;
    text-align:center;
    color:${(props)=>props.color};
    color:${({color})=>color};
    color:${({color})=>color || "#000"};
    background-color:${mainColor};
    transition:${setTransitionTime("1s")};
    animation:${fadeIn} 5s ease-out;

    ${({isButton})=>isButton &&  css`
    margin:auto;
    max-width:50%;
    border-radius:0.25rem;
    cursor:pointer;
    `}

    &:hover{
        background-color:${mainAlphaColor80};
    }
    `;

    const light={
        color:"#222",
        bgColor:"#DDD"
    }

    const dark={
        bgcolor:"#222",
        Color:"#DDD"
    }

    const Box=styled.div`
    padding:1rem;
    margin:1rem;
    color:${({theme})=>theme.color};
    background-color:${({theme})=>theme.bgColor}
    `;
    const BoxRounded=styled(Box)`
    border-radius:1rem;
    `;

    const GlobalStyle=createGlobalStyle`
    h2{
        padding:2rem;
        background-color:#fff;
        color:#61dafb;
        text-transform:uppercase;
    }
    `;
    return(
        <>
        <GlobalStyle></GlobalStyle>
        <h2>Styled-Components</h2>
        <MyH3>hola estoooy estilizado con styled-components</MyH3>
        <MyH3 color="#61dafb">hola estoooy estilizado con styled-components</MyH3>
        <MyH3>Soy un h3  estilizado como boton</MyH3>
        <ThemeProvider theme={light}>
            <Box>Soy una caja ligth</Box>
            <BoxRounded>Soy una caja REDONDEADA LIGTH</BoxRounded>
        </ThemeProvider>
        <ThemeProvider theme={dark}>
            <Box>Soy una caja dark</Box>
        </ThemeProvider>
        </>
    );
}