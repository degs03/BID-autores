import React, { useEffect, useState } from 'react'
import AuthorForm from '../components/AuthorForm'
import { useNavigate, useParams } from 'react-router-dom';
import axios from 'axios';
import Title from '../components/Title';

const Update = () => {
    const [author, setAuthor] = useState([]);
    const { id } = useParams();
    const navigate = useNavigate()
    useEffect(() => {
        const getData = async () => {
            const respuesta = await axios.get(`http://localhost:8000/api/author/${id}`)
            setAuthor(respuesta.data);
        }

        getData();
    }, [])
    const updateAuthor = async (values, actions) => {
        const respuesta = await axios.put(`http://localhost:8000/api/author/${id}`, values)
        console.log(respuesta);
        navigate('/');
    }
    return (
        <>
            <div>
                <Title path='/' pathText='Home' text='Edit this author:'/>
                <AuthorForm
                    initialValues={author}
                    onSubmit={updateAuthor}
                />
            </div>
        </>
    )
}

export default Update