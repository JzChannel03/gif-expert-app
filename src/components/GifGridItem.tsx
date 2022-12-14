import React from 'react';

interface imgProps{
    title: string,
    img: string
}

const GifGridItem: React.FC<imgProps> = ({img, title}) => {
    return (
        <div className={"card"}>
            <img className={"gifs animate__animated animate__fadeInLeft"} src={img} alt={title} />
            <p>{title}</p>
        </div>

    );
};

export default GifGridItem;
