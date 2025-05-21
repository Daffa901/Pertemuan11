import React, { Suspense, useState } from "react";
import { Routes, Route } from "react-router-dom";
import "./assets/tailwind.css";
import { FaHome } from "react-icons/fa";
import Home from "./components/guest/Home";
import Shop from "./components/guest/Shop";
import Testimoni from "./components/guest/Testimoni";
const Dashboard = React.lazy(() => import("./pages/Dashboard"));
const Orders = React.lazy(() => import("./pages/Orders"));
const Customers = React.lazy(() => import("./pages/Customers"));
const NotFound = React.lazy(() => import("./pages/NotFound"));
const ErrorPage = React.lazy(() => import("./components/ErrorPage"));
const Error403 = React.lazy(() => import("./pages/Error403"));
const MainLayout = React.lazy(() => import("./layouts/MainLayout"));
const AuthLayout = React.lazy(() => import("./layouts/AuthLayout"));
const Login = React.lazy(() => import("./pages/Auth/Login"));
const Register = React.lazy(() => import("./pages/Auth/Register"));
const Forgot = React.lazy(() => import("./pages/Auth/Forgot"));
const Loading = React.lazy(() => import("./components/Loading"));
const Users = React.lazy(() => import("./pages/Users"));
const GuestLayout = React.lazy(() => import("./layouts/GuestLayout"));
const Navbar = React.lazy(() => import("./components/guest/Navbar")); 
const About = React.lazy(() => import("./components/guest/About")); 
const Topproduk = React.lazy(() => import("./components/guest/Topproduk")); 


function App() {
  return (
    <Suspense fallback={<Loading />}>
    <Routes>
      <Route element={<MainLayout />}>
        <Route path="/" element={<Dashboard />} />
        <Route path="/orders" element={<Orders />} />
        <Route path="/customers" element={<Customers />} />
        <Route path="/users" element={<Users />} />
        {/* Error Pages
              <Route path="/error400" element={
                <ErrorPage 
                  errorCode="400"
                  errorTitle="Bad Request"
                  errorDescription="Something went wrong with your request."
                  errorImage="img/error400.jpg"
                />
              } />
              <Route path="/error401" element={
                <ErrorPage 
                  errorCode="401"
                  errorTitle="Unauthorized"
                  errorDescription="Access is denied due to invalid credentials."
                  errorImage="img/error401.jpg"
                />
              } />
              <Route path="/error403" element={
                <ErrorPage 
                  errorCode="403"
                  errorTitle="Forbidden"
                  errorDescription="You do not have permission to access this page."
                  errorImage="img/error403.jpg"
                />
              } /> */}
        <Route path="*" element={<NotFound />} />
      </Route>
      <Route element={<AuthLayout />}>
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/forgot" element={<Forgot />} />
      </Route>

      <Route element={<GuestLayout/>}>
        <Route path="/Navbar" element={<Navbar/>}/>
        <Route path="/Home" element={<Home/>}/>
        <Route path="/About" element={<About/>}/>
        <Route path="/Shop" element={<Shop/>}/>
        <Route path="/Testimoni" element={<Testimoni/>}/>
        <Route path="/Topproduk" element={<Topproduk/>}/>
      </Route>
    </Routes>

    </Suspense>
  );
}

export default App;
