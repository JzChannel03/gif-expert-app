import React, {useEffect, useState} from 'react';

type FetchGifsObject = {
    data: number[],
    loading: boolean
}

const useFetchGifs = () => {

    const [state, setState] = useState<FetchGifsObject>({
        data: [],
        loading: true
    });

    useEffect(() => {

    }, []);


    return state;
};

export {
    useFetchGifs
};
