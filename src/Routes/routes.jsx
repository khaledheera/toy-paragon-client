import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../Pages/Home/Home/Home";
import LogIn from "../Pages/Login/logIn";
import Register from "../Pages/Register/Register";
import DollDetails from "../Pages/DollDetails/DollDetails";
import AddToys from "../Pages/AddToys/AddToys";




export const router = createBrowserRouter([
    {
        path:"/",
        element:<Main/>,
        children:[
            {
                path:"/",
                element:<Home/>
            },
            {
               path:"/login",
               element:<LogIn/>
            },
            {
                path:"/register",
                element:<Register/>
            },
            {
                path:"/dollDetails/:id",
                element:<DollDetails/>,
                loader:({params})=>fetch(`http://localhost:5000/category/${params.id}`)
            },
            {
                path:"/addToys",
                element:<AddToys/>
            }
        ]
        
    }
])