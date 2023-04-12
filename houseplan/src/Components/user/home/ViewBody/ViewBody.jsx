import React from 'react'
import { useSelector } from 'react-redux'
import Card from '../planCardThumb.jsx/Card'
import Pagination from 'react-js-pagination'
import { useState } from 'react'

const ViewBody = (props) => {
    const { data } = props


    const [currentPage, setcurrentPage] = useState()


    const PlanDataReducer = useSelector(state => state.PlanDataReducer)

    // console.log(data)
    return (
        <>
            <div className='row'>
                <div className='col-md-12'>
                    <img className='img-fluid' src={`https://d2sxpk1n4exfl4.cloudfront.net${data.image}`} alt="" />
                    <p className='mt-4'>{data.info}</p>
                </div>
            </div>


            <div className='row mt-5'>
                {
                    PlanDataReducer.planData?.map((e, ind) => {
                        if (data._id === e.subType) {
                            return (
                                <div className="col-md-4" key={ind}>
                                    <Card data={e} />
                                </div>
                            )
                        }
                    })
                }
            </div>

            <div className='d-flex justify-content-center  mt-5'>
                {/* <Pagination
                    activePage={currentPage}
                    itemsCountPerPage={resPerPage}
                    totalItemsCount={productsCount}
                    onChange={setCurrentpageNo}
                    nextPageText={'Next'}
                    prevPageText={'Prev'}
                    firstPageText={'First'}
                    lastPageText={'Last'}
                    itemClass="page-item"
                    linkClass='page-link'
                /> */}
            </div>
        </>
    )
}

export default ViewBody