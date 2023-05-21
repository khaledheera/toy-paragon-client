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
import ErrorPage from "../Pages/ErrorPage/ErrorPage";
import Blog from "../Pages/Blog/Blog";
import UpdateMyToys from "../Pages/MyToys/UpdateMyToys";




export const router = createBrowserRouter([
    {
        path:"/",
        element:<Main/>,
        errorElement:<ErrorPage></ErrorPage>,
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
                path:'/updateMyToys',
                element:<UpdateMyToys/>,
                
            },
            {
                path:"/myToys",
                element:<PrivateRoutes><MyToys/></PrivateRoutes>
            },
            {
                path:"/blogs",
                element:<Blog></Blog>
            }
        ]
        
    }
])