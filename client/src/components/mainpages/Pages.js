import React from 'react'
import {Routes, Route} from 'react-router-dom'
import Products from './products/Products'
import Login from './auth/Login'
import Register from './auth/Register'
import Cart from './cart/Cart'
import NotFound from './utils/not_found/NotFound'

function Pages() {
    return (
            <Routes>
                <Route path="/"  element={<Products />} />
                <Route path="/cart"  element={<Cart />} />
                <Route path="/register" element={<Register />} />
                <Route path="/login"  element={<Login />} />
                
                


                <Route path="*" element={<NotFound />} />

            </Routes>
    )
}

export default Pages