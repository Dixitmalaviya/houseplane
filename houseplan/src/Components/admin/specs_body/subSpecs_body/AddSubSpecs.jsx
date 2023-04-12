import { useState } from "react"
import { useSelector, useDispatch } from 'react-redux'
import { REQUEST_FOR_ADD_SUBSPECS_IS_IN_PROGRESS } from "../../../redux/specs/subSpecs/action"
import Swal from 'sweetalert2'
import withReactContent from 'sweetalert2-react-content'
const AddSubSpecs = () => {

    const dispatch = useDispatch()
    const [select, setselect] = useState("All")
    const [valid, setValid] = useState("")
    const [name, setName] = useState("")
    const getMainSpecs = useSelector(state => state.mainSpecsReducer)
    const mySwal = withReactContent(Swal)
    const submit = () => {
        if (select == 'All') {
            setValid("Please select Valid Type")
        }
        else if (!name) {
            setValid("Enter A Tage!")
        }
        else {
            setValid("")
            const data = {
                name: name,
                mainSpec: select
            }
            if (dispatch({ type: REQUEST_FOR_ADD_SUBSPECS_IS_IN_PROGRESS, payload: { data } })) {
                mySwal.fire({
                    title: "SubSpecs Added!",
                    text: "Successfully",
                    icon: "success",
                });
                document.getElementById("newFormSubSpecs").reset();
                setName('')
            }
            else {
                mySwal.fire({
                    title: "Opps..!",
                    text: "Something went wrong!",
                    icon: "error",
                });
                document.getElementById("newFormSubSpecs").reset();
                setName('')
            }
        }

    }
    return (
        <>
            {/* Add Specs Btn and Model */}
            <span className="mt-2 ml-auto" data-toggle="modal" data-target="#subSpecsModel" style={{ cursor: 'pointer' }}>
                <i className="fa fa-plus-circle fa-2x text-success" aria-hidden="true"></i>
            </span>

            <div className="modal modal_subSpecs fade " id="subSpecsModel" tabIndex="-1" role="dialog" aria-labelledby="subSpecsModelLabel" aria-hidden="true">
                <div className="modal-dialog" role="document">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title" id="subSpecsModelLabel">ADD SPECS</h5>
                            <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                                <span aria-hidden="true">&times;</span>
                            </button>
                        </div>
                        <div className="modal-body">
                            <div className="form-group">
                                <form id="newFormSubSpecs">
                                    <div className="form-group mb-4">
                                        <span className="text-danger">{valid}</span>
                                        <select className="form-control col-md-6 form-control-sm mt-2" onChange={(e) => setselect(e.target.value)}>
                                            <option defaultValue>All</option>
                                            {
                                                getMainSpecs.mainSpecs.map((val, ind) => {
                                                    return (
                                                        <option key={ind} value={val._id}>{val.name}</option>
                                                    )
                                                })
                                            }
                                        </select>
                                    </div>

                                    <label>Name</label>
                                    <input
                                        type="text"
                                        id=""
                                        name="names"
                                        className="form-control mb-3"
                                        defaultValue=""
                                        onChange={e => setName(e.target.value)}
                                    />

                                </form>
                            </div>
                        </div>
                        <div className="modal-footer">
                            <button type="button" className="btn btn-close" data-dismiss="modal">Close</button>
                            <button type="submit" className="btn btn-save" id="closemodal" onClick={submit}>Save changes</button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default AddSubSpecs