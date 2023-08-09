import { useEffect, useState } from "react"
import { Navigate, Outlet } from "react-router-dom";
import { UserLogin } from "../components/UserLogin";

const useAuth = () => {

    const [isAuthenticated, setisAuthenticated] = useState(false);

    useEffect(() => {
        const id = localStorage.getItem('id');
        console.log("id...",id);
        if (id) {
            setisAuthenticated(true);
        }
    },[]);

    return isAuthenticated;
}

export const ProtectedRoutes = () => {
    const isAuth = useAuth();
    console.log("isAuth...",isAuth);
    return isAuth ? <Outlet/> : <UserLogin/>;
    // return(
    //     <div>
    //         {
    //             isAuth ? <h1>Protected Routes</h1> : <Navigate to="/login"/>
    //         }
    //     </div>
    // )
}