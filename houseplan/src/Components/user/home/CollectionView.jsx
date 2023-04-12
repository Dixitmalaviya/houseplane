import React, { useState } from 'react'
import { useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'
import ViewBody from './ViewBody/ViewBody'
import { useForm } from "react-hook-form";
import axios from 'axios';
import { base_url } from '../../../constant';

const CollectionView = (props) => {

    const params = useParams()
    const { register, handleSubmit, formState: { errors }, setValue } = useForm();

    const getSubTypeReducer = useSelector(state => state.getSubTypeReducer)
    const [planDate, setPlanData] = useState([])
    const onSubmit = (data) => {
        if (data.bedrooms == null && data.bath == null && data.min == '' && data.max == '') {
            console.log("E")
        } else {
            const finalData = [
                {
                    "key": 'bedrooms',
                    "value": data.bedrooms
                },
                {
                    "key": 'bath',
                    "value": data.bath
                },
                {
                    "key": "sqfeet",
                    "value": {
                        "min": data.min,
                        "max": data.max
                    }
                }
            ]
            console.log(finalData, "Filter Data")
            axios.post(base_url + '/filter/masterfilter', finalData)
                .then((res) => {
                    console.log(res.data.subType)
                    setPlanData(res.data.subType)
                })

        }


    }
    return (

        <div className="container-fluid mt-5 mb-5" >
            <div className='row'>
                <div className='col-md-3 col-sm-12 col-lg-3'>
                    <div className='card p-3'>
                        <h4>Filter</h4>
                        <hr />
                        <form onSubmit={handleSubmit(onSubmit)}>
                            <p>Bedrooms</p>
                            <div className='form-group'>
                                <div className="form-check form-check-inline">
                                    <input {...register("bedrooms")} className="form-check-input" type="radio" id="inlineRadio1" value="1" />
                                    <label className="form-check-label" for="inlineRadio1">1</label>
                                </div>
                                <div className="form-check form-check-inline">
                                    <input className="form-check-input" type="radio" {...register("bedrooms")} id="inlineRadio2" value="2" />
                                    <label className="form-check-label" for="inlineRadio2">2</label>
                                </div>
                                <div className="form-check form-check-inline">
                                    <input className="form-check-input" type="radio" {...register("bedrooms")} id="inlineRadio3" value="3" />
                                    <label className="form-check-label" for="inlineRadio3">3</label>
                                </div>
                                <div className="form-check form-check-inline">
                                    <input className="form-check-input" type="radio" {...register("bedrooms")} id="inlineRadio3" value="4" />
                                    <label className="form-check-label" for="inlineRadio3">4+</label>
                                </div>
                            </div>

                            <p>Bath</p>
                            <div className='form-group'>
                                <div className="form-check form-check-inline">
                                    <input className="form-check-input" type="radio" {...register("bath")} id="bath1" value="1" />
                                    <label className="form-check-label" for="bath1">1</label>
                                </div>
                                <div className="form-check form-check-inline">
                                    <input className="form-check-input" type="radio" {...register("bath")} id="bath2" value="2" />
                                    <label className="form-check-label" for="bath2">2</label>
                                </div>
                                <div className="form-check form-check-inline">
                                    <input className="form-check-input" type="radio" {...register("bath")} id="bath3" value="3" />
                                    <label className="form-check-label" for="bath3">3+</label>
                                </div>
                            </div>

                            Square Feet
                            <div className='row'>
                                <div className='mt-2 ml-3'>
                                    {/* {...register("min")} */}
                                    <input type="number" name="min" {...register("min")} placeholder="min" min="0" max="10000" className="mr-4" />
                                    <input type="number" name="max" {...register("max")} placeholder="max" min="0" max="10000" />
                                </div>
                            </div>

                            <button className="btn btn-user-save mt-5">Search Plan</button>
                        </form>
                    </div>
                </div>
                <div className='col-md-9 col-sm-12 col-lg-9'>
                    {
                        planDate.length === 0
                            ?
                            getSubTypeReducer.subTypes?.map((data, ind) => {
                                if (data._id === params.id)
                                    return (
                                        <ViewBody data={data} key={ind} />
                                    )
                            })
                            : planDate?.map((data, ind) => {
                                if (data._id === params.id)
                                    return (
                                        <ViewBody data={data} key={ind} />
                                    )
                            })
                    }
                </div>
            </div>
        </div>

    )
}

export default CollectionView