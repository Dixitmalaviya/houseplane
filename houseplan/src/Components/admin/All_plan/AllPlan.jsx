import React from 'react'
import { Link } from 'react-router-dom'
import { useSelector } from 'react-redux/es/hooks/useSelector'
import { useDispatch } from 'react-redux/es/hooks/useDispatch'
import { REQUEST_FOR_DELETE_PLAN_IS_IN_PROGRESS } from '../../redux/home_plan/action'

const AllPlan = () => {

    const AllPlan = useSelector(state => state.PlanDataReducer)
    // console.log(AllPlan, "This is is All Plan")

    const dispatch = useDispatch()

    const deletePlan = (data) => {
        let delete_data = {
            _id: data,
        }
        // console.log(delete_data)
        dispatch({ type: REQUEST_FOR_DELETE_PLAN_IS_IN_PROGRESS, payload: { delete_data } })
    }


    if (AllPlan.dataIsLoaded == true) {
        return (
            <div className='container'>
                <h3 className='flex-grow-1'>Plan</h3>
                <hr />
                <div className='row'>

                    {
                        AllPlan.planData.map((val) => {
                            console.log(val)
                            {/* console.log(val, "this is val...") */ }
                            let img = val.image.interior[0]
                            let image = `https://d2sxpk1n4exfl4.cloudfront.net${img}`
                            {/* console.log(image, "This is image") */ }
                            let price = val.pricing
                            return (
                                <div className='col-sm-6 col-md-4 col-lg-4 mb-3'>

                                    <div className="card thumb_overlay_plan_card">
                                        <img className="card-img thumb_overlay_user_plan" src={image} alt="Card image" />
                                        <div className="thumb_overlay_user_plan_text">
                                            <div className='row text-center mb-3'>
                                                <div className='col-4' style={{ borderRight: '1px solid gray' }}>2718 Sqft</div>
                                                <div className='col-4' style={{ borderRight: '1px solid gray' }}>3 bed</div>
                                                <div className='col-4'>4 bath</div>
                                            </div>
                                            <div className='row'>
                                                <div className='col-4' style={{ borderRight: '1px solid gray' }}>2718 Sqft</div>
                                                <div className='col-4' style={{ borderRight: '1px solid gray' }}>3 bed</div>
                                                <div className='col-4'>4 bath</div>
                                            </div>
                                        </div>

                                    </div>
                                    <div className="thumb_overlay_plan_card_btn mt-3 d-flex justify-content-between" >
                                        <div>{val.planNumber}</div>
                                        <div><span style={{ color: '#C0C0C0' }}>Buy from</span> ₹4999</div>
                                    </div>
                                    <div className="mt-3 d-flex" >
                                        <Link to={`/admin-master/plan/${val._id}`} style={{ textDecoration: 'none' }}>
                                            <div><button className='btn btn-save mr-2'>Edit</button></div>
                                        </Link>
                                        <div><button className='btn btn-close' onClick={() => deletePlan(val._id)}>Delete</button></div>
                                    </div>
                                </div>
                            )
                        })
                    }
                </div>
            </div>
        )
    }

}

export default AllPlan