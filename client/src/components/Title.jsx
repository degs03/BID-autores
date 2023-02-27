import React from 'react'
import { Link } from 'react-router-dom'

const Title = ({path, pathText, text}) => {
    return (
        <>
            <div className='container'>
                <Link to={path} >{pathText}</Link>
                <h5 className='my-4'>{text}</h5>
            </div>
        </>
    )
}

export default Title