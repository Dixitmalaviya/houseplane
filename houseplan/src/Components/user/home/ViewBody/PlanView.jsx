import '../../assets/css/plan.css'
import 'react-responsive-carousel/lib/styles/carousel.min.css'
import { Carousel } from 'react-responsive-carousel'
import { useState } from 'react'
import { useParams } from 'react-router-dom'
const PlanView = (props) => {

    const { data } = props
    const [toggleState, setToggleState] = useState(1);

    const toggleTab = (index) => {
        setToggleState(index);
    };

    console.log(data, "ssd")

    // console.log(params)

    const [selectedPrice, setselectedPrice] = useState(data.pricing[0]?.subPrice[0]?.value)
    // console.log(selectedPrice)

    return (
        <div className='container-fluid'>

            <div className='row'>
                <h4 className='ml-3 mt-5 mb-5'>Plan : {data.planNumber}</h4>
            </div>
            <div className='carousel_userplan'>
                <Carousel infiniteLoop className='' >
                    {
                        data.image?.exterior?.map((data, ind) => {
                            {

                                return (
                                    <div className='images_cara'>
                                        <img src={`https://d2sxpk1n4exfl4.cloudfront.net${data}`} />
                                    </div>
                                )
                            }
                        })
                    }
                </Carousel>
            </div>

            <div className='col-md-12 '>
                <div className='row'>
                    <div className='col-md-8'>
                        <div className='row mb-5 ml-2'>
                            <h3>PLAN <b>{data.planNumber}</b></h3>
                        </div>
                        <section className='plan_content_block'>
                            <div className="plan_block_tabs">
                                <div className='col-md-12'>
                                    <div className='row'>
                                        <div className='mb-3 nav-item'>
                                            <div
                                                className={toggleState === 1 ? "tabs active-tabs nav-link " : "tabs nav-link "}
                                                onClick={() => toggleTab(1)}
                                            >
                                                DESCRIPTION
                                            </div>
                                        </div>
                                        <div className='nav-item'>
                                            <div
                                                className={toggleState === 2 ? "tabs active-tabs nav-link" : "tabs nav-link"}
                                                onClick={() => toggleTab(2)}
                                            >
                                                KEY SPECS
                                            </div>
                                        </div>
                                        <div className='nav-item'>
                                            <div
                                                className={toggleState === 3 ? "tabs active-tabs nav-link" : "tabs nav-link"}
                                                onClick={() => toggleTab(3)}
                                            >
                                                FULL SPECS & FEATURES
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>


                            <div className="content-tabs">
                                <div
                                    className={toggleState === 1 ? "content  active-content" : "content"}
                                >
                                    {/* <h2>Content 1</h2> */}
                                    {/* <hr /> */}
                                    <p>
                                        {data.planDiscription.info}
                                    </p>
                                </div>

                                <div
                                    className={toggleState === 2 ? "content  active-content" : "content"}
                                >
                                    {/* <h2>Content 2</h2>
                                <hr /> */}
                                    <p>
                                        <div className='row'>
                                            {
                                                data.keyFeature?.map((data, ind) => {
                                                    return (
                                                        data.subSpecs.map((e, ind) => {
                                                            if (ind < 5)
                                                                return (
                                                                    <div className="col text-center mb-2">
                                                                        <div><i className='bx bxs-grid-alt bx-md text-secondary'></i></div>
                                                                        <div className='mt-3'>{e.subSpec.name}</div>
                                                                        <div>{e.value}</div>
                                                                    </div>
                                                                )
                                                        })
                                                    )
                                                })
                                            }
                                        </div>
                                    </p>
                                </div>

                                <div
                                    className={toggleState === 3 ? "content  active-content" : "content"}
                                >
                                    {
                                        data.keyFeature?.map((data, ind) => {
                                            return (
                                                <>
                                                    <div className='row'>
                                                        <div className='col-4'>
                                                            <div><b>{data.mainSpecs?.name}</b></div>
                                                        </div>
                                                        <div className='col-8'>
                                                            <div className='row'>
                                                                {
                                                                    data.subSpecs.map((e, ind) => {
                                                                        return (
                                                                            <div className='col-6 mb-2'>
                                                                                <div>{`${e.subSpec.name}:${e.value}`}</div>
                                                                            </div>
                                                                        )
                                                                    })
                                                                }
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <hr />
                                                </>

                                            )
                                        })
                                    }
                                </div>
                            </div>
                        </section>
                    </div>
                    <div className='col-md-4'>
                        <div className="card" style={{ borderRadius: '10px' }}>
                            <div className="card-header">
                                Pricing
                            </div>
                            <div className="card-body">
                                {
                                    data.pricing?.map((data, ind) => {
                                        {/* console.log(data) */ }
                                        return (
                                            <>
                                                <div className='mb-2'>{data.priceTitle.name}</div>
                                                <select class="custom-select mb-4" onChange={(e) => setselectedPrice(e.target.value)}>
                                                    {
                                                        data.subPrice?.map((e, ind) => {
                                                            return (
                                                                <option value={e.value}>{e._id.name}</option>
                                                            )
                                                        })
                                                    }
                                                </select>
                                            </>
                                        )
                                    })
                                }

                                <div className='d-flex justify-content-end mt-4'>
                                    <div>
                                        <div className='mb-2'>SUBTOTAL</div>
                                        <div className=''>₹ <b>{selectedPrice}</b></div>
                                    </div>
                                </div>
                                <div className='d-flex justify-content-end mt-4'>
                                    <div>
                                        <button>ADD TO CART</button>
                                    </div>
                                </div>

                            </div>
                        </div>
                    </div>
                </div>
            </div>



            <div className='col-md-12 mb-5'>
                <div className='row'>
                    <div className='col-md-8'>
                        <div className='row'>
                            <h5 className='ml-3'>FLOOR IMAGES</h5>
                        </div>
                        <hr />
                        <Carousel infiniteLoop autoPlay showThumbs={false}>
                            {
                                data.image?.interior?.map((data, ind) => {
                                    {
                                        return (
                                            <div className='images_cara'>
                                                <img src={`https://d2sxpk1n4exfl4.cloudfront.net${data}`} />
                                            </div>
                                        )
                                    }
                                })
                            }

                        </Carousel>

                        <div className='row mt-5'>
                            <h5 className='ml-3'>WHAT'S INCLUDED IN THIS PLAN SET
                            </h5>
                        </div>
                        <hr />
                        {
                            data.planDiscription?.planIncludes?.map((data, ind) => {
                                return (
                                    <>
                                        <div className='col mb-3'>
                                            <b>{data.heading} :</b>
                                        </div>
                                        <div className='col'>
                                            {data.info}
                                        </div>
                                    </>
                                )
                            })
                        }

                    </div>
                </div>
            </div>
        </div>
    )
}
export default PlanView