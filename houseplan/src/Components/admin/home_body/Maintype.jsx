// Parent Page is Home.jsx

import EditType from "./mainType_body/EditType";
import { useSelector } from 'react-redux'
import AddMainTypeModel from "./mainType_body/AddMainTypeModel";
// import { connect } from 'react-redux';

const Maintype = () => {

    const mainTypeData = useSelector(state => state.getMainTypeReducer)

    if (mainTypeData.dataIsLoaded == true) {
        return (
            <>
                <div className='row maintype'>

                    <i className='bx bx-menu bx-md mr-3 mt-1' data-toggle="collapse" data-target="#collapsMainType" aria-expanded="false" aria-controls="collapsMainType" style={{ cursor: 'pointer' }}></i>
                    <h2 className="ml-3">Main Type</h2>

                    <AddMainTypeModel />

                </div>
                {/* Show Type on display */}
                <div className="mt-5 collapse multi-collapse show" id="collapsMainType" >
                    <div className="col-md-12 row" >
                        {
                            mainTypeData.mainTypes.map(data => <EditType key={data._id} data={data} />)
                        }
                    </div>
                </div>
            </>
        )
    } else {
        return (
            <>
                Loading...
            </>
        )
    }
}




export default Maintype







// ############################### OR Insted of useSelector and Dispatch method ######################################


// import { connect } from 'react-redux';
// const Maintype = (props) => {
//     // console.log(props)
//     // const mainTypeData = useSelector(state => state.mainTypes)
//     // const dispatch = useDispatch()
//     // useEffect(() => {
//     //     dispatch({ type: REQUEST_FOR_GET_MAINTYPE_IS_IN_PROGRESS })
//     // }, [dispatch])

//     console.log(props.mainTypeReducer.mainTypes)

//     return (
//         <>
//             <h2>Hello</h2>

//         </>
//     )
// }


// const mapStateToProps = (state) => {
//     return { mainTypeReducer: state.getMainTypeReducer }

// };
// const mapDispatchToProps = (dispatch) => {
//     return {
//         //for adding multiple request hear
//         requestForGetMainType: dispatch({ type: REQUEST_FOR_GET_MAINTYPE_IS_IN_PROGRESS }),
//     };
// };
// export default connect(mapStateToProps, mapDispatchToProps)(Maintype);