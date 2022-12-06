import { useState } from "react";
import { list } from "./data";

function Button({ children, onClick, disabled }) { //Komponens propertykkel
    return (
        <button onClick={onClick} disabled={disabled}>{children}</button>
    )
}

export default function Gallery() {
    const [index, setIndex] = useState(0); //index eltárolása
    const [show, setShow] = useState(false); //megjelenítés alapjáraton ne mutassa
    let lista = list[index];
    let hasPrev = index > 0;
    let hasNext = index < list.length - 1; //-1 mert a length 1-től számol, de a tömb 0-tól

    function handlePlus() {
        if (hasNext) { //ha index kisebb mint a tömb mérete
            setIndex(index + 1);
        }
    }
    function handleMinus() {
        if (hasPrev) { //ha nagyobb mint 0
            setIndex(index - 1); //index csökkentése
        }
    }
    function showDetails() {
        setShow(!show); //Legyen a show ellentéte vagyis, ha igaz legyen hamis, ha hamis legyen igaz
    }

    console.log(index);

    return (
        <div className="Component">
            <Button onClick={handleMinus} disabled={!hasPrev}>Előző</Button>  {/* Legyen off, ha nincs kevesebb */}
            <Button onClick={handlePlus} disabled={!hasNext}>Következő</Button> <br />{/* Legyen off, ha nincs több */}
            <h2>{lista.name}</h2>
            <Button onClick={showDetails}>{show ? "Rejtsd el" : "Mutasd"}</Button> {/* Ha show igaz: 'Rejtsd el', ha nem igaz: 'Mutasd' */}
            {show ? //Show igaz akkor megmutatja a listát
                <section>
                    <h2>ID: {lista.id}</h2>
                    <h2>Neve: {lista.fullName}</h2>
                    <h2>Neme: {lista.sex}</h2>
                </section>
                : "" //Ha nem igaz nem mutat semmit
            }
        </div>
    )
}