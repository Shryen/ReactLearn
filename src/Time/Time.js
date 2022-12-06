import { useState } from "react";

export default function Time() {
    const bodyStyle = document.body.style; //body formázása elmentve változóban
    const [date, setDate] = useState(); //frissítendő idő
    setInterval(() => {  //setInterval, hogy 1 másodpercenként újra lerenderelje a React
        setDate(new Date().toLocaleTimeString()) //változó beállítása
    }, 1000);
    if (date > "19:00:00") {
        bodyStyle.backgroundColor = "rgba(0,0,0,.90)";
        bodyStyle.color = "rgba(255,255,255,.90)"
    } else {
        bodyStyle.backgroundColor = "white";
        bodyStyle.color = "black";
    }
    return (
        <>
            <h1>{date}</h1>
        </>
    );
}