import React from 'react';


interface imgProps{
    title: string,
    img: string
}

const GifGridItem: React.FC<imgProps> = ({img, title}) => {
    return (
        <img className={"gifs"} src={img} alt={title}/>
    );
};

export default GifGridItem;
