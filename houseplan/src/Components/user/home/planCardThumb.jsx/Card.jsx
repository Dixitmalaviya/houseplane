import React from 'react'
import { Link } from 'react-router-dom'

const Card = (props) => {
    const { data } = props
    return (
        <>
            <Link to={`/plan/${data._id}`}>
                <div className="card thumb_overlay_plan_card">
                    <img className="card-img thumb_overlay_user_plan" src={`https://d2sxpk1n4exfl4.cloudfront.net${data.image.exterior[0]}`} alt="Card image" />
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
                    <div></div>
                    <div><span style={{ color: '#C0C0C0' }}>Buy from</span> ₹4999</div>
                </div>
            </Link>

        </>
    )
}

export default Card