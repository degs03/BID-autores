import axios from 'axios'
import React from 'react'
import { useNavigate } from 'react-router-dom'
import Swal from 'sweetalert2'
import AuthorForm from '../components/AuthorForm'
import Title from '../components/Title'

const initialValues = {
    author: ''
}
const AddAuthor = () => {
    const navigate = useNavigate()
    const onSubmitHandler = async (values, actions) => {
        try {
            const respuesta = await axios.post('http://localhost:8000/api/author', values)
            console.log(respuesta);
            actions.resetForm(initialValues);
            navigate('/');
            if (respuesta.status == 200) {
                Swal.fire({
                    icon: 'success',
                    title: 'ENVIADO!!',
                    confirmButtonColor: '#2a77e8',
                    iconColor: '#2a77e8',
                    text: `Se ha agregado ${respuesta.data.dateProject} correctamente`
                })
            }
        } catch (err) {
            console.log(err)
        }
    }
    return (
        <>
            <Title path='/' pathText='Home' text='Add a new author:'/>
            <AuthorForm
                initialValues={initialValues}
                onSubmit={onSubmitHandler}
            />
        </>
    )
}

export default AddAuthor