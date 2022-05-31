import React from 'react';
import {Route, Routes} from "react-router-dom";
import {Main} from "../pages/Main";
import {About} from "../pages/About";
import {Users} from "../users/Users";
import {UserDetailsPage} from "../pages/UserDetailsPage";
import {ErrorPage} from "../pages/ErrorPage";
import HelloWorld from "../pages/HelloWorld";
import UsersForTest from "../components/UsersForTest/UsersForTest";

const AppRouter = () => {
    return (
        <Routes>
            <Route path='/' element={<Main/>}/>
            <Route path='/hello' element={<HelloWorld/>}/>
            <Route path='/about' element={<About/>}/>
            <Route path='/users' element={<Users/>}/>
            <Route path='/users-test' element={<UsersForTest/>}/>
            <Route path='/users/:id' element={<UserDetailsPage/>}/>
            <Route path='/*' element={<ErrorPage/>}/>
        </Routes>
    );
};

export default AppRouter;
