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
            <h2
                className={'animate__animated Title'}
            >GifExpertApp</h2>
            <AddCategory setCategories={setCategories}/>
            <hr/>

            <ul id={"listMoreSearch"}>
                {Categories.map((value) => {
                    return (
                        <li key={value} onClick={link}>{value}</li>
                    );
                })}
            </ul>

            {
                Categories.length !== 0
                &&
                <button onClick={handleDelete}>Delete last category</button>
            }

            {
                Categories.length !== 0
                    ?
                    <h3>List: </h3>
                    :
                    <h3>No items to display, please add a new category.</h3>
            }

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