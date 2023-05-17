import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../Pages/Home/Home/Home";
import LogIn from "../Pages/Login/logIn";
import Register from "../Pages/Register/Register";




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
            }
        ]
        
    }
])