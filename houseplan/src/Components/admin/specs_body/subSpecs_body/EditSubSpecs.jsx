import { useState } from "react"
import { useDispatch } from "react-redux"
import { REQUEST_FOR_UPDATE_SUBSPECS_IS_IN_PROGRESS, REQUEST_FOR_DELETE_SUBSPECS_IS_IN_PROGRESS } from "../../../redux/specs/subSpecs/action"
import Swal from 'sweetalert2'
import withReactContent from 'sweetalert2-react-content'
const EditSubSpecs = (props) => {
    const { data } = props
    const dispatch = useDispatch()
    const [name, setName] = useState(data.name)
    const mySwal = withReactContent(Swal)
    const updateData = () => {
        const update_data = {
            _id: data._id,
            name: name
        }
        if (dispatch({ type: REQUEST_FOR_UPDATE_SUBSPECS_IS_IN_PROGRESS, payload: { update_data } })) {
            mySwal.fire({
                title: "SubSpecs Updated!",
                text: "Successfully",
                icon: "success",
            });
        }
        else {
            mySwal.fire({
                title: "Opps..!",
                text: "Something went wrong!",
                icon: "error",
            });
        }
    }
    const deleteSubSpecs = () => {
        let delete_data = {
            _id: data._id,
        }
        if (dispatch({ type: REQUEST_FOR_DELETE_SUBSPECS_IS_IN_PROGRESS, payload: { delete_data } })) {
            mySwal.fire({
                title: "SubSpecs Deleted!",
                text: "Successfully",
                icon: "success",
            });
        }
        else {
            mySwal.fire({
                title: "Opps..!",
                text: "Something went wrong!",
                icon: "error",
            });
        }
    }
    return (
        <>
            <div class="col-md-4 mb-4">
                <div type="button" >
                    <div className='card card_radius' >
                        <div className="row">
                            <span className="fa fa-refresh ml-auto mr-3" style={{ cursor: 'pointer' }} onClick={updateData}></span>
                            <i className='bx bxs-trash' onClick={deleteSubSpecs}></i>
                        </div>
                        <div className="form-group" >
                            <label for="email">Name</label>
                            <input
                                type="text"
                                id=""
                                name=""
                                className="form-control"
                                defaultValue={name}
                                onChange={e => setName(e.target.value)}
                            />
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default EditSubSpecs