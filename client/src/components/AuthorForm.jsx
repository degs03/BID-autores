import React from 'react'
import { Formik, Form, Field } from 'formik';
import * as Yup from 'yup';

const AuthorErrores = Yup.object().shape({
    author: Yup.string()
        .min(3, "El Nombre debe tener como minimo 3 caracteres")
        .max(70, "No puede ser muy largo")
        .required('Requerido'),
});

const AuthorForm = ({ initialValues, onSubmit }) => {
    return (
        <div className='container'>
            <Formik
                initialValues={initialValues}
                enableReinitialize={true}
                onSubmit={onSubmit}
                validationSchema={AuthorErrores} >
                {({ errors, touched, isValid, dirty }) => (
                    <Form className='form-signup ' style={{ border: '3px black solid', position: 'relative', width:'500px', padding:'30px' }}>
                        <h5 style={{ position: 'absolute', transform: 'translateX(10px) translateY(-45px)', backgroundColor: 'white' }}>| New Author |</h5>
                        <div className='d-flex align-items-center flex-column w-50 container' >
                            <p className='m-2'>Name</p>
                            <Field name="author" type='text' className='form-control m-2' />
                            {touched.author && errors.author ? (<div className='ms-3 mt-1 mb-3 text-danger'>{errors.author}</div>) : null}
                            <button style={
                                {
                                    backgroundColor: '#2a78e5',
                                    boxShadow: '4px 4px black',
                                    color: 'white',
                                    border: '2px solid black',
                                    textDecoration: 'none'
                                }
                            }
                                className='d-flex justify-content-center p-2 mt-4'
                                type='submit' disabled={!(isValid && dirty)}>Enviar</button>
                        </div>
                    </Form>
                )}
            </Formik>
        </div>
    )
}

export default AuthorForm;