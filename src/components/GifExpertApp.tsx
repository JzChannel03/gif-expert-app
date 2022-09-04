import React, {useState} from "react";
import AddCategory from "./AddCategory";

const GifExpertApp = () => {

    const [Categories, setCategories] = useState(['One Punch', 'Samurai X', 'Dragon Ball', 'Sonic X']);

    const link = (e: React.SyntheticEvent) => {
        window.location.href = `https://google.com/search?q=${(e.target as HTMLUListElement).textContent}`
    }

    const handleDelete = (e: React.SyntheticEvent) => {
        setCategories((value) => {
            if (e.isTrusted){
                value.pop();
                e.isTrusted = false;
            }
            return [...value];
        });
    }


    return (
        <div>
            <h2>GifExpertApp</h2>
            <AddCategory setCategories={setCategories}/>
            <hr/>
            <h3>Más buscados: </h3>
            <ul id={"listMoreSearch"}>
                {Categories.map((value) => {
                    return (
                        <li key={value} onClick={link}>{value}</li>
                    );
                })}
            </ul>
            {Categories.length && <button onClick={handleDelete}>Borrar último elemento</button>}

        </div>
    )
}



export default GifExpertApp;