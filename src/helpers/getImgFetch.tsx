import {Welcome3} from "../components/GifGrid.type";

const getImgFetch = async (category: string) => {

    const imagesData: Promise<Welcome3> = (await fetch(`https://api.giphy.com/v1/gifs/search?api_key=WxzSBMFxIG303SwcpYswQ2l2VW3nhyWA&q=${encodeURI(category)}&limit=10`)).json();

    if ((await imagesData).meta.msg === "OK"){

        const {data} = (await imagesData);

        return data.map(({id, title, images}) => (
            {
                id: id,
                title: title,
                img: images.downsized_medium.url,
            }
        ));
    }
    return [];
}

export default getImgFetch;
