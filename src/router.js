import {  Route, Routes } from "react-router-dom";
import HomePage from "./pages/users/homePage";
import {ROUTERS} from "./utils/router"
import MasterLayout from "./pages/users/theme/masterLayout";
import ChatPage from "./pages/users/chatPage";

const renderUserRouter = () =>{
    const userRouters = [
        {
            path : ROUTERS.USER.HOME,
            component: <HomePage />
        },
        {
            path : ROUTERS.USER.CHAT,
            component: <ChatPage /> 
        },
    ];
    return(
        <MasterLayout>
        <Routes>
            {userRouters.map((item, key)=>(
            <Route key = {key} path={item.path} element={item.component} />
            ))}
        </Routes>
        </MasterLayout>
    );
};

const RouterCustom = () => {
    return renderUserRouter();
};
export default RouterCustom;