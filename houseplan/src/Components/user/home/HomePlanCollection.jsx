import house_home from '../assets/images/house_home.jpg'
import farmhouse from '../assets/images/famhouse.jpg'
import { Link } from 'react-router-dom'
import { useSelector } from 'react-redux'
import { Grid } from "react-loader-spinner";
const HomePlanCollection = () => {
    const subTypeCallHome = useSelector(state => state.getSubTypeReducer)
    console.log(subTypeCallHome.subTypes)
    if (subTypeCallHome.dataIsLoaded === true) {
        return (
            <>
                {
                    subTypeCallHome.subTypes.map((data, index) => {
                        if (index < 4) {
                            return (
                                <>
                                    <div className='col-sm-6 col-md-4 col-lg-3 mb-3'>
                                        <Link to={`/collection/${data._id}`}>
                                            <div className="card img_overlay_plan_card">
                                                <img className="card-img img_overlay_user_plan" src={`https://d2sxpk1n4exfl4.cloudfront.net${data.carasole[0]}`} alt="" />
                                                <div className="img_overlay_user_plan_text">{data.name}</div>
                                            </div>
                                        </Link>
                                    </div>
                                </>
                            )
                        }
                    })
                }
            </>
        )
    } else {
        // return (
        //     <div className="container mt-5">
        //         <div className="loader">
        //             <Grid color="#1589FF" height={80} width={80} />
        //         </div>
        //     </div>
        // )
    }
}
export default HomePlanCollection