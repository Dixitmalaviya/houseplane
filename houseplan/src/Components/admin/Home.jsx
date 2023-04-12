import Maintype from './home_body/Maintype'
import SubType from './home_body/SubType'

import { useDispatch, useSelector } from 'react-redux'
import { useEffect } from 'react'
import { REQUEST_FOR_GET_MAINTYPE_IS_IN_PROGRESS } from '../redux/home_MainType/action'
import { REQUEST_FOR_GET_SUBTYPE_IS_IN_PROGRESS } from '../redux/home_SubType/action'

const Home = () => {

    const dispatch = useDispatch()

    // useEffect(() => {
    //     dispatch({ type: REQUEST_FOR_GET_MAINTYPE_IS_IN_PROGRESS })
    //     // dispatch({ type: REQUEST_FOR_GET_SUBTYPE_IS_IN_PROGRESS })
    // }, [dispatch])

    return (
        <>

            <div className='container home_section'>
                <Maintype />
                <SubType />
            </div>


        </>
    )
}

export default Home