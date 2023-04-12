// Parent Page is Home.jsx
import { useState } from 'react';
import { useSelector } from 'react-redux'
import EditSubType from './subType_body/EditSubType';
import AddSubTypeModel from './subType_body/AddSubTypeModel';
const SubType = () => {


    const [select, setselect] = useState("All")
    const getMainType = useSelector(state => state.getMainTypeReducer);
    // console.log(getMainType, "this get data..........")

    const getSubType = useSelector(state => state.getSubTypeReducer)
    // console.log(getSubType)



    if (getMainType.dataIsLoaded === true) {
        return (
            <>
                <div className='mt-5 '>
                    <div className="row">
                        <i className='bx bx-menu bx-md mr-3 mt-1' data-toggle="collapse" data-target="#collapsSubType" aria-expanded="false" aria-controls="collapsSubType" style={{ cursor: 'pointer' }}></i>
                        <h2 className='ml-3'>Sub Type</h2>
                        <select className="form-control col-md-2 form-control-sm ml-5 mt-2" onChange={(e) => setselect(e.target.value)} style={{ cursor: 'pointer' }}>
                            <option defaultValue>All</option>
                            {
                                getMainType.mainTypes.map((val, ind) => {
                                    return (
                                        <option key={ind} value={val._id}>{val.name}</option>
                                    )
                                })
                            }
                        </select>
                        <span className="mt-2 ml-auto" data-toggle="modal" data-target="#subTypeModel" style={{ cursor: 'pointer' }}>
                            <i className="fa fa-plus-circle fa-2x text-success ml-auto mt-2" aria-hidden="true"></i>
                        </span>
                    </div>

                    <AddSubTypeModel />

                    {/* Show SubType on display */}

                    <div className="mt-5 collapse multi-collapse" id="collapsSubType" >
                        <div className="col-md-12 row" >
                            {

                                getSubType.subTypes.map((data) => {
                                    return (
                                        select == "All" ? <EditSubType key={data._id} data={data} /> : select === data.mainType ? <EditSubType key={data._id} data={data} /> : ""
                                    )

                                })
                            }

                        </div>
                    </div>

                </div>


            </>
        )

    }
    else {
        return (
            <>Loading...</>
        )
    }
}
export default SubType