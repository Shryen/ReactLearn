import { useState } from 'react';


// e.stopPropagation(); -- dupla event megakadályozása
// e.preventDefault(); -- default funkció megszüntetése
// e.target.value -- az adott érték

//EventHandling -> átadjuk a függvényt egy komponensnek és nem meghívjuk -> onClick={szia} és nem onClick={szia()}
//Külön és ugyanabban a sorban is megtudjuk hívni a függvényt -> <button onClick={(e)=>{alert('Szia')}}
//EventHandlers a komponensen belül vannak meghatározva így hozzáférnek a tulajdonságiakhoz

function Button({ onClick, children }) { //props átadva és megnevezve a komponensben
    return (
        <button onClick={onClick}>
            {children}
        </button>
    );
}

export default function Szia() {
    const [name, setName] = useState(''); //memória, ez fogja megjegyezni a beírt nevet
    const [message, setMessage] = useState(''); //Az üzenet amit megkap majd a felhasználó

    function handleChange(e) {
        setName(e.target.value) //ez állítja be, hogy mit kell megjegyeznie a name-ben
    }

    function szia() { // handleClick a függvény neve ha követjük a szabályokat!!!
        if (name === "") { //Check hogy üres-e
            setMessage('A mező nem lehet üres!')
        } else {
            setMessage(`Szia ${name}`);
        }
    }

    return (
        <div className='Component'>
            <input type="text" name="name" onChange={handleChange} /> <br />
            <Button onClick={szia}>Köszönj!</Button> {/* Komponens meghívva, props átadva */}
            <p>{message}</p>
        </div>
    );
}