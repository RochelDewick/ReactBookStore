import { BrowserRouter, Route, Routes } from "react-router-dom";

import Login from "./components/Login";
import BookList from "./components/BookList";
import BookDetail from "./components/BookDetail";
import ShoppingCart from "./components/ShoppingCart";



const AppRouter = () => {
    return (
        <>
            <BrowserRouter>
                <Routes>

                    <Route path='/' element={<Login></Login>}></Route> 
                    <Route path='/Store' element={<BookList></BookList>}></Route>
                    <Route path='/BookDetail' element={<BookDetail></BookDetail>}></Route> 
                    <Route path='/ShoppingCart' element={<ShoppingCart></ShoppingCart>}></Route> 
                </Routes> 

            </BrowserRouter>
        </>
    )
}

export default AppRouter;