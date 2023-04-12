import { Link } from 'react-router-dom'
import { useSelector } from 'react-redux'
import { Grid } from "react-loader-spinner";
const PlanCard = () => {
    const GetplanData = useSelector(state => state.PlanDataReducer)
    console.log(GetplanData)
    if (GetplanData.dataIsLoaded === true) {
        let i = 0
        return (
            <>
                {
                    GetplanData.planData.map((data) => {
                        {/* console.log(data) */ }
                        return (
                            <>
                                <div className='col-sm-6 col-md-4 col-lg-4 mb-3'>
                                    <Link to={`/plan/${data._id}`} style={{ textDecoration: 'none' }}>
                                        <div className="card thumb_overlay_plan_card">
                                            <img className="card-img thumb_overlay_user_plan" src={`https://d2sxpk1n4exfl4.cloudfront.net${data.image.exterior[0]}`} alt="Card image" />
                                            <div className="thumb_overlay_user_plan_text">
                                                <div className='row text-center mb-3'>
                                                    {
                                                        data.keyFeature.map((data, index) => {
                                                            return (
                                                                <span className='col-4 p-1' key={index}>
                                                                    {/* {
                                                                        data.subSpecs.map((data, index) => {
                                                                            i++
                                                                            if (i < 7) {
                                                                                return (
                                                                                    <div style={{ borderRight: '1px solid gray' }} key={index}>{data.value} {data.subSpec.name}</div>
                                                                                )
                                                                            }
                                                                        })
                                                                    } */}
                                                                </span>
                                                            )
                                                        })
                                                    }
                                                </div>
                                            </div>

                                        </div>
                                        <div className="thumb_overlay_plan_card_btn mt-3 d-flex justify-content-between" >
                                            <div>Plan {data.planNumber}</div>
                                            <div><span style={{ color: '#C0C0C0' }}>Buy from</span> ₹4999</div>
                                        </div>
                                    </Link>
                                </div>
                            </>
                        )
                    })
                }
            </>
        )
    }
}

export default PlanCard