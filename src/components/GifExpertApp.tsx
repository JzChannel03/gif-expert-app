import React, {useState} from "react";
import AddCategory from "./AddCategory";
import GifGrid from "./GifGrid";

const GifExpertApp = () => {

    const [Categories, setCategories] = useState(['Sonic X']);

    const link = (e: React.SyntheticEvent) => {
        const loc = window.location;
        window.location.href = `${loc.origin}/#${(e.target as HTMLUListElement).textContent}`;
    }

    const handleDelete = () => {
        setCategories((value) => {
            const array = [...value];
            array.pop();
            return array;
        });
    }


    return (
        <div>
            <h2>GifExpertApp</h2>
            <AddCategory setCategories={setCategories}/>
            <hr/>
            <h3>Listado: </h3>
            <ul id={"listMoreSearch"}>
                {Categories.map((value) => {
                    return (
                        <li key={value} onClick={link}>{value}</li>
                    );
                })}
            </ul>

            {Categories.length && <button onClick={handleDelete}>Borrar último elemento</button>}

            <ul className={"category"}>
                {Categories.map((value) =>
                    (
                        <li key={value} onClick={link}><GifGrid category={value}/></li>
                    )
                )}
            </ul>


        </div>
    )
}



export default GifExpertApp;