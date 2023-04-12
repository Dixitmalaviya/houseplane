import { useState } from 'react';
import '../Components/admin/assets/css/styles.css';
import { Link } from 'react-router-dom'
const Navbar = () => {

    const [show, setShow] = useState(false)
    const user = 'user'

    const navData = [
        { label: 'Dashboard', link: '/admin-master/', icon: 'bx-layer' },
        { label: 'Collection', link: '/admin-master/collection', icon: 'bx-collection' },
        { label: 'Specs & Features', link: '/admin-master/specs', icon: 'bx-list-plus' },
        { label: 'Prices', link: '/admin-master/post-prices', icon: 'bx bxs-credit-card' },
        { label: 'Post', link: '/admin-master/post', icon: 'bxs-cloud-upload' },
        { label: 'Manage Plan', link: '/admin-master/manageplan', icon: 'bxs-cloud-upload' },
    ]
    return (
        <>
            <div className='hpad'>
                <section id="body-pd" className={show ? 'body-pd' : null}>

                    <header className={`header ${show ? 'body-pd' : null}`} id="header">
                        <div className="header__toggle">
                            <i className={`bx bx-menu ${show ? 'bx-x' : null}`} id="header-toggle" onClick={() => {
                                setShow(!show)
                            }}></i>
                        </div>
                    </header>
                    <div className={`l-navbar show_des ${show ? 'show' : null}`} id="nav-bar">
                        <nav className="nav">
                            <div>
                                <Link to="/admin-master/" className="nav__link" style={{ textDecoration: 'none' }} >
                                    <i className='bx bx-home nav__logo-icon'></i>
                                    <span className="nav__logo-name">Houseplan</span>
                                </Link>
                                <div className="nav__list">
                                    {
                                        navData.map((data, index) => {
                                            return (
                                                <Link to={data.link} className="nav__link" style={{ textDecoration: 'none' }} key={index}>
                                                    <i className={`nav__icon bx ${data.icon}`} ></i>
                                                    <span className="nav__name">{data.label}</span>
                                                </Link>
                                            )
                                        })
                                    }
                                </div>
                            </div>
                            <Link to='#' className="nav__link" style={{ textDecoration: 'none' }} >
                                <i className='bx bx-log-out nav__icon' ></i>
                                <span className="nav__name">Log Out</span>
                            </Link>
                        </nav>
                    </div>

                </section>
            </div>
        </>
    )

}

export default Navbar