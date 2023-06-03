import React, {useState, useEffect} from 'react';
import {useParams} from 'react-router-dom'
import axios from 'axios'
const OneShow = (props) => {
    const [show, setShow] = useState({})
    const {id} = useParams()
    console.log(id);

    useEffect(() => {
        axios.get(`http://localhost:8000/api/oneShow/${id}`)
            .then((res) => {
                console.log(res.data.show);
                setShow(res.data.show)
            })
            .catch((err) => {
                console.log(err);
            })
    },[])
    return (
        <div>
            <h1>Title: {show.title}</h1>
            <h2>Aired on: {show.network} in {show.releaseYear}</h2>
            <h2>Created By: {show.creator}</h2>
            <h2>Genre: {show.genre}</h2>
        </div>
)}

export default OneShow;