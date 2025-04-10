import { createBrowserRouter,RouterProvider } from "react-router-dom";
import { ProductsPage } from "./pages/ProductsPage";
import {Header} from './Header'

const router = createBrowserRouter([
    {
        path: '/',
        element:<Header/>,
    },
    {
        path:'products',
        element:<ProductsPage/>,
    },
])

export function Routes(){
    return <RouterProvider router={router}/>;
}