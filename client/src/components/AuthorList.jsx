import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';
import Swal from 'sweetalert2'
const AuthorList = () => {
    const [author, setAuthor] = useState([]);
    const swalWithBootstrapButtons = Swal.mixin({
        customClass: {
            confirmButton: 'btn btn-success',
            cancelButton: 'btn btn-danger'
        },
        buttonsStyling: false
    })


        useEffect(() => {
            const getData = async () => {
                const respuesta = await axios.get('http://localhost:8000/api/author')
                setAuthor(respuesta.data);
            }

            getData();
        }, [])



        const deleteAuthor = async (authorID) => {
            try {
                
                const respuesta = await axios.delete(`http://localhost:8000/api/author/${authorID}`)
                console.log(respuesta);
    
                swalWithBootstrapButtons.fire({
                    title: 'Estas Seguro?',
                    text: "No podras revertirlo!",
                    icon: 'warning',
                    showCancelButton: true,
                    confirmButtonText: 'Si, borralo!',
                    cancelButtonText: 'No, cancela!',
                    reverseButtons: true
                }).then((result) => {
                    if (result.isConfirmed) {
                        swalWithBootstrapButtons.fire(
                            'ELIMINADO!',
                            'Tu autor fue eliminada.',
                            'success',
                            setAuthor(author.filter((author) => author._id != authorID))
                            )
                    } else if(
                        /* Read more about handling dismissals below */
                        result.dismiss === Swal.DismissReason.cancel
                    ) {
                        swalWithBootstrapButtons.fire(
                            'CANCELADO',
                            'Tu tarea esta a salvo',
                            'error'
                        )
                    }
                })
    
            } catch (err) {
                console.log(err)
            }
        }
    
    return (
        <>
            <table className='table table-hover table-bordered table-striped'>
                <thead>
                    <tr>
                        <th>Author</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {author.map((author, idx) => <tr key={idx}>
                        <td>{author.author}</td>
                        <td className='d-flex justify-content-around'>
                            <Link to={`/author/${author._id}`} className='btn btn-warning'>Update</Link>
                            <button className='btn btn-danger' onClick={() => { deleteAuthor(author._id) }}>Delete</button>
                        </td>
                    </tr>)}
                </tbody>
            </table>
        </>
    )
}

export default AuthorList;
