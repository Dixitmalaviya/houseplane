import '../Components/user/assets/css/style.css'
import { Link } from 'react-router-dom'
import { useSelector } from 'react-redux'
import Cookies from 'js-cookie';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux'
import { REQ_FOR_LOGIN_PROGRESS_CUSTOMER } from './redux/Login/customerLogin/action';
const NavbarUser = () => {

    const dispatch = useDispatch()
    const subtypeReducer = useSelector(state => state.getSubTypeReducer)
    const maintypeReducer = useSelector(state => state.getMainTypeReducer)
    useEffect(() => {
        dispatch({ type: REQ_FOR_LOGIN_PROGRESS_CUSTOMER })
    }, [dispatch])
    const login_data = useSelector(state => state.CustomerLogin)
    if (login_data.login_status_success === true) {
        return (
            <>
                <section className="ftco-section">
                    <div className="container-fluid px-md-5">
                        <div className="row justify-content-between">
                            <div className="col-md-12 order-md-last">
                                <div className="row">
                                    <div className="col-md-6 text-center" >
                                        <Link to='/' className="navbar-brand" style={{ textDecoration: 'none' }}>
                                            HOUSPLAN <span>The Architecture Agency</span>
                                        </Link>
                                    </div>
                                    <div className="col-md-6 d-md-flex justify-content-end mb-md-0 mb-3">
                                        <form action="#" className="searchform order-lg-last">
                                            <div className="form-group d-flex">
                                                <input type="text" className="form-control pl-3" placeholder="Search" />
                                                <button type="submit" placeholder="" className="form-control search"><span
                                                    className="fa fa-search"></span></button>
                                            </div>
                                        </form>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <nav className="navbar navbar-expand-lg navbar-dark ftco_navbar ftco-navbar-light" id="ftco-navbar">
                        <div className="container-fluid">
                            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#ftco-nav"
                                aria-controls="ftco-nav" aria-expanded="false" aria-label="Toggle navigation">
                                <span className="fa fa-bars"></span> Menu
                            </button>
                            <div className="collapse navbar-collapse" id="ftco-nav">

                                <ul className="navbar-nav m-auto">

                                    <li className="nav-item active"><Link to="/" className="nav-link">Home</Link></li>
                                    {
                                        maintypeReducer.mainTypes?.map((data, ind) => {

                                            if (ind < 3) {
                                                return (
                                                    <li className="nav-item dropdown" key={ind}>
                                                        <a className="nav-link dropdown-toggle" href="#" id="dropdown04" data-toggle="dropdown"
                                                            aria-haspopup="true" aria-expanded="false">{data.name}</a>
                                                        <div className="dropdown-menu" aria-labelledby="dropdown04">
                                                            {
                                                                data.subTypes?.map((data, ind) => {
                                                                    return (
                                                                        <Link to={`/collection/${data._id}`} style={{ textDecoration: 'none' }}><a className="dropdown-item">{data.name}</a></Link>
                                                                    )
                                                                })
                                                            }
                                                        </div>
                                                    </li>
                                                )
                                            }
                                        })
                                    }

                                </ul>

                                <ul className="navbar-nav ml-auto">


                                    {
                                        Cookies.get('role') !== 'customer'
                                            ? <>
                                                <li className="nav-item nav-link"><Link to='/login' className="nav-link">Sign In</Link></li>
                                                <li className="nav-item nav-link"><Link to='/register' className="nav-link">Register</Link></li>
                                            </>
                                            : <>
                                                <li className="nav-item nav-link"><Link to='/profile' className="nav-link"><i className='bx bxs-user mb-0'></i> Profile</Link></li>
                                                <li className="nav-item nav-link"><Link to='/logout' className="nav-link">Logout</Link></li>
                                            </>
                                    }

                                    {/* <li className="nav-item">
                                        <a href="#" className="nav-link">
                                            <div style={{ display: 'flex', justifyContent: 'space-between', width: '75px' }}>
                                                <span className="res-circle">
                                                    <span className="circle-txt">1</span>
                                                </span>
                                                <span>Cart
                                                    <i className='bx bx-cart-alt' style={{ fontSize: '14px' }}></i></span>
                                            </div>
                                        </a>
                                    </li> */}
                                </ul>

                            </div>
                        </div>
                    </nav>
                </section>
            </>
        )
    }

}
export default NavbarUser