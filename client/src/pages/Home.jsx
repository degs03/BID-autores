import React from 'react'
import AuthorList from '../components/AuthorList'
import Title from '../components/Title'

const Home = () => {
    return (
        <>
        <div className='container'>
            <Title path='/author/new' pathText='Add an author' text='We have quotes by:'/>
            <AuthorList/>
        </div>
        </>
    )
}

export default Home