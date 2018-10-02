import React from 'react';
import CategoryList from './components/category/categoryList';
const routers = [
    {
        // 
        path: "/category",
        exact: true,
        icon:"fas fa-certificate",
        label:"Loại sản phẩm",
        main: () => <CategoryList />
    },
];
export default routers;