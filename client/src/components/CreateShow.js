import React, {useState} from 'react';
import axios from 'axios'
import {useNavigate} from 'react-router-dom'

const CreateShow = (props) => {
    const navigate = useNavigate();
    const [show, setShow] = useState({
        title:'',
        releaseYear:1920,
        network:'',
        creator:'',
        genre:''
    })
    const [errors, setErrors] = useState({})
    const changeHandler = (e) => {
        setShow({...show, [e.target.name]:e.target.value})
    }

    const submitHandler = (e) => {
        e.preventDefault();
        axios.post('http://localhost:8000/api/newShow', show)
            .then((res) => {
                console.log(res);
                navigate('/')
            })
            .catch((err) => {
                console.log(err.response.data.errors);
                setErrors(err.response.data.errors)
            })
    }

    return (
        <div>
            <form onSubmit={submitHandler}>
                <div>
                    <label>Title:</label>
                    <input type="text" name='title' onChange={changeHandler} value={show.title}/>
                    {
                        errors.title?
                        <p className='text-danger'>{errors.title.message}</p>:
                        null
                    }
                </div>
                <div>
                    <label>Release Year:</label>
                    <input type="number" name='releaseYear' onChange={changeHandler} value={show.releaseYear}/>
                    {
                        errors.releaseYear?
                        <p className='text-danger'>{errors.releaseYear.message}</p>:
                        null
                    }
                </div>
                <div>
                    <label>Network:</label>
                    <input type="text" name='network' onChange={changeHandler} value={show.network}/>
                    {
                        errors.network?
                        <p className='text-danger'>{errors.network.message}</p>:
                        null
                    }
                </div>
                <div>
                    <label>Creator:</label>
                    <input type="text" name='creator' onChange={changeHandler} value={show.creator}/>
                    {
                        errors.creator?
                        <p className='text-danger'>{errors.creator.message}</p>:
                        null
                    }
                </div>
                <div>
                    <label>Genre:</label>
                    <input type="text" name='genre' onChange={changeHandler} value={show.genre}/>
                    {
                        errors.genre?
                        <p className='text-danger'>{errors.genre.message}</p>:
                        null
                    }
                </div>
                <button>Submit</button>
            </form>
        </div>
)}

export default CreateShow;