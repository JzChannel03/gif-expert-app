import React, {useEffect, useState} from 'react';
import getImgFetch from "../helpers/getImgFetch";

interface imgProps{
    title: string,
    img: string,
    id: string
}

type FetchGifsObject = {
    data: imgProps[],
    loading: boolean
}

const useFetchGifs = (category: string) => {

    const [state, setState] = useState<FetchGifsObject>({
        data: [],
        loading: true
    });

    useEffect(() => {
        getImgFetch(category).then((value) => setState({
            data: value,
            loading: false
        }))
    }, [category]);


    return state;
};

export {
    useFetchGifs
};
