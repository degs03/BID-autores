import { createBrowserRouter } from "react-router-dom";
import Layout from '../layout/Layout'
import AddAuthor from "../pages/AddAuthor";
import Home from "../pages/Home";
import Update from "../pages/Update";


export default createBrowserRouter([
    {
        path: '/',
        element: <Layout />,
        children: [
            {
                index: true,
                element: <Home />
            },
            {
                path:'author/:id',
                element: <Update/>
            },
            {
                path:'/author/new',
                element: <AddAuthor/>
            }
        ]
    }
])