import { FC } from "react"
import { Route, Routes, useLocation } from "react-router-dom"
import HomeContainer from "./screens/HomeScreen"
import ScreenHeader from "./components/Header/ScreenHeader"
import MovieContainer from "./screens/MovieScreen"



const Router : FC = (props) => {

    const location = useLocation();
    const {pathname} = location;

    return (
        <div>
            <ScreenHeader pathname={pathname}/>
            <Routes>
                <Route path="/" Component={HomeContainer}></Route>
                <Route path="/movie/*" Component={MovieContainer}></Route>

                    
            </Routes>

        </div>
    )

}

export default Router;