import {BrowserRouter, Routes, Route} from "react-router-dom";
import Home from "./screens/home/Home.jsx";
import DishDetail from "./screens/dish-detail/DishDetail";

const RouterComponent = () => {
    return <BrowserRouter>
        <Routes>
            <Route element={<Home />} path='/'/>
            <Route element={<DishDetail />} path='/dish/:id'/>

            <Route path='*' element={<div> Page Not Found</div>}/>
        </Routes>
    </BrowserRouter>
}

export default RouterComponent;