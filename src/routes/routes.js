import { Route, Routes } from "react-router";
import App from '../App';
import Login from '../components/login';
import Settings from '../components/settings';
import Profile from '../components/profile';
import SignUp from '../components/signup';
import Contact from '../components/contactUs';
import About from '../components/about';
import Reset from '../components/resetpassword';
import NotFound from "../components/notfound";
import Home from "../components/secure/home";
// import RequireAuth from "../services/requireauth";

const MyRoutes = () => {
    return (
        <Routes>
            <Route path="/" element={<App/>}/>
            <Route path="/login" element={<Login/>}/>
            <Route path="/profile" element={<Profile/>}/>
            <Route path="/settings" element={<Settings/>}/>
            <Route path="/signup" element={<SignUp/>}/>
            <Route path="/contact" element={<Contact/>}/>
            <Route path="/about" element={<About/>}/>
            <Route path="/password_reset" element={<Reset/>}/>
            <Route path="/*" element={<NotFound/>}/>
            <Route path="/home" element={
                // <RequireAuth>
                    <Home/>
                /* </RequireAuth> */
                }
            />
        </Routes>
    )
}

export default MyRoutes;