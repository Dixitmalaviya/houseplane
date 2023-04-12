// Parent Page is Maintype.jsx
import { useState } from "react";
import { useDispatch } from "react-redux/es/exports";
import {
    REQUEST_FOR_UPDATE_MAINTYPE_IS_IN_PROGRESS,
    REQUEST_FOR_DELETE_MAINTYPE_IS_IN_PROGRESS
} from "../../../redux/home_MainType/action";

import Swal from 'sweetalert2'
import withReactContent from 'sweetalert2-react-content'

const EditType = (props) => {
    const mySwal = withReactContent(Swal)
    const { data } = props
    const dispatch = useDispatch()
    const [type, setType] = useState(data.name)
    const [heading, setHeading] = useState(data.headingName)
    const [description, setDescription] = useState(data.info)

    const UpdateData = () => {
        let update_data = {
            _id: data._id,
            name: type,
            headingName: heading,
            info: description
        }

        if (dispatch({ type: REQUEST_FOR_UPDATE_MAINTYPE_IS_IN_PROGRESS, payload: { update_data } })) {
            mySwal.fire({
                title: "MainType Updated!",
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

    const deleteMainType = () => {
        let delete_data = {
            _id: data._id,
        }
        dispatch({ type: REQUEST_FOR_DELETE_MAINTYPE_IS_IN_PROGRESS, payload: { delete_data } })
    }

    return (
        <>
            <div class="col-md-4 mb-4">
                <div className='card card_radius' >
                    <div className="row">
                        <i class='bx bxs-edit ml-auto mr-2' data-toggle="collapse" data-target={"#1" + data._id} aria-expanded="false" aria-controls={data._id} style={{ cursor: 'pointer' }}></i>
                        <i class='bx bxs-trash' id={data._id} onClick={deleteMainType} style={{ cursor: 'pointer' }}></i>
                    </div>
                    <div className="form-group " >
                        <label>Type</label>
                        <input
                            type="text"
                            id=""
                            name=""
                            className="form-control"
                            defaultValue={type}
                            onChange={e => setType(e.target.value)}
                        />
                        <div class="collapse multi-collapse" id={"1" + data._id}>
                            <label className='mt-4'>Heading</label>
                            <input
                                type="text"
                                id=""
                                name=""
                                className="form-control"
                                defaultValue={heading}
                                onChange={e => setHeading(e.target.value)}
                            />
                            <label className='mt-4'>Description</label>
                            <textarea
                                rows="2"
                                id=""
                                name=""
                                className="form-control"
                                defaultValue={description}
                                onChange={e => setDescription(e.target.value)}
                            ></textarea>
                            <span className='text-danger'></span>
                            <input class="btn btn-save mt-4" type="submit" value="Save" onClick={UpdateData} />
                        </div>

                    </div>
                </div>
            </div>
        </>
    )
}

export default EditType