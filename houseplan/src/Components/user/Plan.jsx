import React from 'react'
import { useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'
import PlanView from './home/ViewBody/PlanView'

const Plan = () => {

    const PlanDataReducer = useSelector(state => state.PlanDataReducer)
    const params = useParams()

    console.log(PlanDataReducer.planData)

    return (
        <>

            {
                PlanDataReducer.planData?.map((data, ind) => {
                    if (params.id === data._id) {
                        return (
                            <PlanView data={data} key={ind} />
                        )
                    }

                })
            }


        </>
    )
}

export default Plan