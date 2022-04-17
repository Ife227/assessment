import { Route, Routes } from "react-router";
import App from "../App";
import Login from "../components/login";
import Settings from "../components/settings";
import Profile from "../components/profile";
import SignUp from "../components/signup";
import Contact from "../components/contactUs";
import About from "../components/about";
import Reset from "../components/resetpassword";
import NotFound from "../components/notfound";
import Home from "../components/secure/home";
import Start from "../components/secure/start.js";
import RequireAuth from "../services/requireauth";
import Results from "../components/secure/results";

const MyRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<App />} />
      <Route path="/login" element={<Login />} />
      <Route path="/profile" element={<Profile />} />
      <Route path="/settings" element={<Settings />} />
      <Route path="/signup" element={<SignUp />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/about" element={<About />} />
      <Route path="/password_reset" element={<Reset />} />
      <Route
        path="/quiz"
        element={
          <RequireAuth>
            <Home />
          </RequireAuth>
        }
      />
      <Route
        path="/quiz/start"
        element={
          <RequireAuth>
            <Start />
          </RequireAuth>
        }
      />
      <Route
        path="/quiz/results"
        element={
          <RequireAuth>
            <Results />
          </RequireAuth>
        }
      />
      <Route path="/*" element={<NotFound />} />
    </Routes>
  );
};

export default MyRoutes;
