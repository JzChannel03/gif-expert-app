import React, {useEffect, useState} from 'react';
import {Welcome3} from "./GifGrid.type";
import GifGridItem from "./GifGridItem";

interface imgProps{
    title: string,
    img: string,
    id: string
}

const GifGrid = ({category} : {category: string}) => {

    const [ImagesData, setImagesData] = useState<imgProps[]>([]);

    useEffect(() => {
        imgFetching(category);
    }, []);


    const imgFetching = async (category: string) => {

        const imagesData: Promise<Welcome3> = (await fetch(`https://api.giphy.com/v1/gifs/search?api_key=WxzSBMFxIG303SwcpYswQ2l2VW3nhyWA&q=${category}&limit=10`)).json();

        if ((await imagesData).meta.msg === "OK"){

            const {data} = (await imagesData);

            const gifs = data.map(({id, title, images}) => (
                {
                    id: id,
                    title: title,
                    img: images.downsized_medium.url,
                }
            ));

            setImagesData(gifs);
        }
    }


    return (
        <div>
            <h3 id={category}>{category}</h3>
            <br/>

            {ImagesData.map((value) =>
                (
                    <GifGridItem {...value}/>
                )
            )}

        </div>
    );
};

export default GifGrid;
