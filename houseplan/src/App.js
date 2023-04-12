import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './Components/Navbar';
import Home from './Components/admin/Home';
import Post from './Components/admin/Post';
import Specs from './Components/admin/Specs';
import Price from './Components/admin/Price';

// User
import NavbarUser from './Components/NavbarUser';
import Plan from './Components/user/Plan';
import HomeUser from './Components/user/Home';
import ManagePlan from './Components/admin/ManagePlan'
import Login from './Components/Login/Login'


// 404Page
import PageNotFound from './Components/PageNotFound';

// Used for Validation and Toast msg show to user
import { ToastContainer, toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';

import { REQUEST_FOR_GET_MAINTYPE_IS_IN_PROGRESS } from './Components/redux/home_MainType/action';
import { REQUEST_FOR_GET_SUBTYPE_IS_IN_PROGRESS } from './Components/redux/home_SubType/action';
import { REQUEST_FOR_GET_MAINSPECS_IS_IN_PROGRESS } from './Components/redux/specs/mainSpecs/action';
import { REQUEST_FOR_GET_SUBSPECS_IS_IN_PROGRESS } from './Components/redux/specs/subSpecs/action';

import { useEffect } from 'react';
import { useDispatch } from 'react-redux';

import './App.css'
import { REQUEST_FOR_GET_PRICE_TITLE_IS_IN_PROGRESS } from './Components/redux/home_PriceTitle/action';
import { REQUEST_FOR_GET_PRICE_VALUE_IS_IN_PROGRESS } from './Components/redux/home_PriceValue/action';
import { REQUEST_FOR_GET_PLAN_IS_IN_PROGRESS } from './Components/redux/home_plan/action';
import CollectionView from './Components/user/home/CollectionView';
import EditPost from './Components/admin/All_plan/EditPost';
import Register from './Components/Register/Register';
import AdminLogin from './Components/Login/AdminLogin';
import axios from 'axios';
import Profile from './Components/user/Profile';


function App() {

  const dispatch = useDispatch()
  axios.defaults.withCredentials = true;
  axios.defaults.corssDomain = true;

  useEffect(() => {
    dispatch({ type: REQUEST_FOR_GET_MAINTYPE_IS_IN_PROGRESS })
    dispatch({ type: REQUEST_FOR_GET_SUBTYPE_IS_IN_PROGRESS })
    dispatch({ type: REQUEST_FOR_GET_MAINSPECS_IS_IN_PROGRESS })
    dispatch({ type: REQUEST_FOR_GET_SUBSPECS_IS_IN_PROGRESS })
    dispatch({ type: REQUEST_FOR_GET_PRICE_TITLE_IS_IN_PROGRESS })
    dispatch({ type: REQUEST_FOR_GET_PRICE_VALUE_IS_IN_PROGRESS })
    dispatch({ type: REQUEST_FOR_GET_PLAN_IS_IN_PROGRESS })

  }, [dispatch])

  const user = "user"
  if (user === "user") {
    return (
      <>
        <Router>
          <NavbarUser />
          <Routes>
            <Route path='/' exact element={<HomeUser />} />
            <Route path='/plan/:id' exact element={<Plan />} />
            <Route path="*" element={<PageNotFound />} />
            <Route path='/collection/:id' exact element={<CollectionView />} />
            <Route path='/login' exact element={<Login />} />
            <Route path='/register' exact element={<Register />} />
            <Route path='/profile' exact element={<Profile />} />
          </Routes>
        </Router>
      </>
    )
  } else {
    return (
      <>
        <Router>
          <Navbar />
          <Routes>
            {/* Admin collection Dashboard */}
            <Route path='/admin-master/collection' exact element={<Home />} />
            {/* Admin Specs & Features Dashboard */}
            <Route path='/admin-master/specs' exact element={<Specs />} />
            {/* Admin Post Dashboard */}
            <Route path='/admin-master/post' exact element={<Post />} />
            {/* Admin Post Dashboard */}
            <Route path='/admin-master/manageplan' exact element={<ManagePlan />} />
            {/* Admin Price Dashboard */}
            <Route path='/admin-master/post-prices' exact element={<Price />} />
            {/* View / Edit PAge */}
            <Route path='/admin-master/plan/:id' exact element={<EditPost />} />
            {/* 404 PAge */}
            <Route path="*" exact element={<PageNotFound />} />
          </Routes>
        </Router>
        {/* Used for Global access of Toast */}
        <ToastContainer
          position="top-right"
          autoClose={5000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
        />
      </>
    );
  }
}

export default App;
