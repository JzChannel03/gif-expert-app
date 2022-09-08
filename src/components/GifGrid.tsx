import React/*, {useEffect, useState}*/ from 'react';
import {useFetchGifs} from "../hooks/useFetchGifs";
import GifGridItem from "./GifGridItem";



const GifGrid = ({category} : {category: string}) => {


    const {data: images, loading} = useFetchGifs(category);

    return (
        <>
            <h3 id={category}>{category}</h3>
            {loading && <p>Loading...</p>}
            <div className={"card-grid"}>

                {images.map((value) =>
                    (
                        <GifGridItem key={value.id} {...value}/>
                    )
                )}

            </div>
        </>

    );
};

export default GifGrid;
