import { useState } from "react"

let id = 0; //a komponensen kívül hívjük meg mivel így nem nullázódik minden alkalommal amikor a komponens megvan hívva
export default function ShoppingList() {
    const [name, setName] = useState(''); //input értéke
    const [groceries, setGroceries] = useState([]); //a tömbb ahova bekerülnek az elemek

    function handleAdd() {
        setName(''); //Kattintás után kiürítjük az inputot
        setGroceries([
            { id: id++, name: name }, //hozzáadjuk az id-t és az inputba írt nevet a tömbbe
            ...groceries //létrehozunk egy új tömböt, ami ezeket tartalmazza
        ])
    }
    return (
        <div className="Component">
            <h1>Shopping List</h1>
            <input type="text" name="groceries" onChange={e => { setName(e.target.value) }} /> <br /> {/* inline function */}
            <button onClick={handleAdd}>Hozzáaadás</button>
            {groceries.map(groc => ( // A tömb kiíratása
                <h2 key={groc.id}>{groc.name}</h2>
            ))}
        </div>
    )
}