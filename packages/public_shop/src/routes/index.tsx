import React, {Suspense} from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import HomePage from '../pages-components/HomePage/HomePage';
import ProductDetailsPage from '../pages-components/ProductDetailsPage/ProductDetailsPage';

const MainRoute = () => {
    return (
        <Suspense fallback='loading'>
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<HomePage />} />
                    <Route path="/product/:id" element={<ProductDetailsPage />} />
                </Routes>
            </BrowserRouter>
        </Suspense>
    )
}

export default MainRoute ;