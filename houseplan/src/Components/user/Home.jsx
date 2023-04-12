import house_home from './assets/images/house_home.jpg'
import HomeSearch from './home/HomeSearch'
import { Link } from 'react-router-dom'
import HomePlanCollection from './home/HomePlanCollection'
import Footer from './Footer'
import './assets/css/style.css'
import PlanCard from './home/planCardThumb.jsx/PlanCard'
const Home = () => {
    return (
        <>
            <div className="container mt-3 mb-5">
                <div className='col-12'>
                    <div className="row">
                        <div className="col-sm-12 col-md-8 col-lg-8 text-center mb-3">
                            <img src={house_home} width="100%" className="img-fluid" alt="house" style={{ borderRadius: '10px' }} />
                        </div>
                        <div className="col-sm-12 col-md-4 col-lg-4 mb-3">
                            <HomeSearch />
                        </div>
                    </div>
                    <div className='row d-flex mt-5 pl-2 pr-2'>

                        <h3 className='flex-grow-1'>Home Plan Collections</h3>
                        <div className='ml-auto mt-2'>
                            <Link to={''}>Search all collection</Link>
                        </div>
                    </div>
                    <hr />
                    <div className='row'>
                        <HomePlanCollection />
                    </div>
                </div>
            </div>
            <div className='container'>
                <h3 className='flex-grow-1'>Plan</h3>
                <hr />
                <div className='row'>
                    <PlanCard />
                </div>
            </div>
            <Footer />
        </>
    )
}
export default Home