import { createBrowserRouter } from "react-router-dom";
import Main from "../../Layout/Main";
import Home from "../../Pages/Home/Home/Home";
import SignUp from "../../Pages/SignUp/SignUp";
import SignIn from "../../Pages/SignIn/SignIn";

export const router = createBrowserRouter([
    {
        path: `/`,
        element: <Main/>,
        children: [
            {
                path: `/`,
                element: <Home/>
            },
            {
                path: `/signup`,
                element: <SignUp/>
            },  
            {
                path: `/signin`,
                element: <SignIn/>
            }
        ]
    }
])