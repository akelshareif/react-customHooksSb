import React, { useState } from 'react';
import axios from 'axios';
import uuid from 'uuid';

const useFlip = () => {
    const [isFlipped, setIsFlipped] = useState(true);

    const toggleFlip = () => {
        setIsFlipped((isFlipped) => !isFlipped);
    };

    return [isFlipped, toggleFlip];
};

const useAxios = (baseurl) => {
    const [data, setData] = useState([]);

    const getData = async (params) => {
        const res = await axios.get(typeof params === 'string' ? baseurl + params : baseurl);
        setData((data) => [...data, { ...res.data, id: uuid() }]);
    };

    return [data, getData];
};

export { useFlip, useAxios };
