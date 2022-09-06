import React from 'react';

interface imgProps{
    title: string,
    img: string
}

const GifGridItem: React.FC<imgProps> = ({img, title}) => {
    return (
        <div className={"card"}>
            <img className={"gifs"} src={img} alt={title} />
            <p>{title}</p>
        </div>

    );
};

export default GifGridItem;
