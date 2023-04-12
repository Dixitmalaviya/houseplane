import { useState } from "react";
import { useDispatch, useSelector } from "react-redux/es/exports";
import { REQUEST_FOR_UPDATE_MAINSPECS_IS_IN_PROGRESS, REQUEST_FOR_DELETE_MAINSPECS_IS_IN_PROGRESS } from "../../../redux/specs/mainSpecs/action";

import Swal from 'sweetalert2'
import withReactContent from 'sweetalert2-react-content'

const EditMainSpces = (props) => {


    const mySwal = withReactContent(Swal)
    const { data } = props
    const dispatch = useDispatch()
    const [name, setName] = useState(data.name)
    const [note, setNote] = useState(data.note)

    const updateData = () => {

        let update_data = {
            _id: data._id,
            name: name,
            note: note,
        }

        if (dispatch({ type: REQUEST_FOR_UPDATE_MAINSPECS_IS_IN_PROGRESS, payload: { update_data } })) {
            mySwal.fire({
                title: "MainSpecs Updated!",
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

    const deleteMainSpec = () => {
        let delete_data = {
            _id: data._id,
        }
        dispatch({ type: REQUEST_FOR_DELETE_MAINSPECS_IS_IN_PROGRESS, payload: { delete_data } })
    }


    return (
        <>
            <div className="col-md-4 mb-4">
                <div className='card card_radius' >
                    <div className="row">
                        <i className='bx bxs-edit ml-auto mr-3' data-toggle="collapse" data-target={"#1" + data._id} aria-expanded="false" aria-controls={data._id}></i>
                        <i className='bx bxs-trash' id={data._id} onClick={deleteMainSpec}></i>
                    </div>
                    <div className="form-group " >
                        <label>Name</label>
                        <input
                            type="text"
                            className="form-control"
                            defaultValue={name}
                            onChange={e => setName(e.target.value)}
                        />
                        <div className="collapse multi-collapse" id={"1" + data._id}>

                            <label className='mt-4'>Note</label>
                            <textarea
                                rows="2"
                                className="form-control"
                                defaultValue={note}
                                onChange={e => setNote(e.target.value)}
                            ></textarea>

                            <span className='text-danger'></span>
                            <input className="btn btn-save mt-4" type="submit" value="Save" onClick={updateData} />
                        </div>

                    </div>
                </div>
            </div>
        </>
    )
}
export default EditMainSpces