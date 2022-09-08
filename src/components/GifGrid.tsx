import React/*, {useEffect, useState}*/ from 'react';
import {useFetchGifs} from "../hooks/useFetchGifs";
/*import GifGridItem from "./GifGridItem";*/

interface imgProps{
    title: string,
    img: string,
    id: string
}

const GifGrid = ({category} : {category: string}) => {


    const {loading} = useFetchGifs();

    return (
        <>
            <h3 id={category}>{category}</h3>
            {loading ? 'Cargando...' : 'Carga completada'}
            {/*<div className={"card-grid"}>

                {ImagesData.map((value) =>
                    (
                        <GifGridItem key={value.id} {...value}/>
                    )
                )}

            </div>*/}
        </>

    );
};

export default GifGrid;
