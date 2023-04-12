
import { useState } from 'react';
import { useSelector } from 'react-redux'
import AddSubSpecs from './subSpecs_body/AddSubSpecs';
import EditSubSpecs from './subSpecs_body/EditSubSpecs';

const SubSpecs = () => {
    const [select, setselect] = useState("All")
    const getMainSpecs = useSelector(state => state.mainSpecsReducer)

    const getSubSpecs = useSelector(state => state.subSpecsReducer)

    if (getSubSpecs.dataIsLoaded == true && getMainSpecs.dataIsLoaded == true) {
        return (
            <div className='mt-5'>
                <div className="row">
                    <i className='bx bx-menu bx-md mr-3' data-toggle="collapse" data-target="#collapsSubSpecs" aria-expanded="false" aria-controls="collapsSubSpecs" style={{ cursor: 'pointer' }}></i>
                    <h3 className="ml-3">Sub Specs & Features</h3>

                    <select className="form-control col-md-2 form-control-sm ml-5 mt-2" onChange={(e) => setselect(e.target.value)}>
                        <option defaultValue>All</option>
                        {
                            getMainSpecs.mainSpecs.map((val, ind) => {
                                return (
                                    <option key={ind} value={val._id}>{val.name}</option>
                                )
                            })
                        }
                    </select>
                    <AddSubSpecs />
                </div>

                <div className="mt-5 collapse multi-collapse show" id="collapsSubSpecs" >
                    <div className="col-md-12 row" >
                        {

                            getSubSpecs.subSpecs.map((data) => {
                                return (
                                    select == "All" ? <EditSubSpecs key={data._id} data={data} /> : select === data.mainSpec ? <EditSubSpecs key={data._id} data={data} /> : ""
                                )

                            })
                        }

                    </div>
                </div>
            </div>
        )
    } else {
        return (
            <>


            </>
        )
    }
}
export default SubSpecs