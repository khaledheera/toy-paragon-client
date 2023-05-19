import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../Pages/Home/Home/Home";
import LogIn from "../Pages/Login/logIn";
import Register from "../Pages/Register/Register";
import DollDetails from "../Pages/DollDetails/DollDetails";
import AddToys from "../Pages/AddToys/AddToys";
import AllToys from "../Pages/AllToys/AllToys";
import MyToys from "../Pages/MyToys/MyToys";
import PrivateRoutes from "./PrivateRoutes";




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
                element:<PrivateRoutes><DollDetails/></PrivateRoutes>,
                loader:({params})=>fetch(`http://localhost:5000/category/${params.id}`)
            },
            {
                path:"/addToys",
                element:<AddToys/>
            },
            {
                path:'/allToys',
                element:<AllToys/>,
                
            },
            {
                path:"/myToys",
                element:<PrivateRoutes><MyToys/></PrivateRoutes>
            }
        ]
        
    }
])