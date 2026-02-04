import React from "react";
import { createRoot } from "react-dom/client";
import { StrictMode } from "react";
import HelloWorld from "./HelloWorld";
import Container from "../container/Container";
import Table from "../Table/Table";
import AlertButton from "../Button/AlertButton";
import MyButton from "../Button/MyButton";
import Toolbar from "../Button/Toolbar";
import SearchForm from "../form/SearchForm";
import SayHello from "../form/SayHello";
import Counter from "../form/Counter";
import "../Card/Card.css"

createRoot(document.getElementById('root')).render(
    <StrictMode>
     <Container>
     <HelloWorld/>
     <Table/>
    <AlertButton text= "klik saya`" message="terimakasih sudah mengklik"/>
    <MyButton text="hancurkan" onSmash={() => alert("Button hancur")} />
    <MyButton text="tekan" onSmash={() => alert("Button tertekan")} />
     <Toolbar onClick={(e) =>{ 
        e.stopPropagation()
        alert("Toolbar clicked")}} />
        <SearchForm/>
        <SayHello/>
        <Counter/>
        <Counter/>
     </Container>
    </StrictMode>
)