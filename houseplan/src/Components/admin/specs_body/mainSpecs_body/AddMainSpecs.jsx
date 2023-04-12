import { useState } from "react"
import { useDispatch } from 'react-redux'
import Swal from 'sweetalert2'
import withReactContent from 'sweetalert2-react-content'
import { REQUEST_FOR_ADD_MAINSPECS_IS_IN_PROGRESS } from '../../../redux/specs/mainSpecs/action'

const AddMainSpecs = () => {

    const mySwal = withReactContent(Swal)
    const dispatch = useDispatch()
    // Get data from input field
    const [state, setState] = useState({
        name: "",
        note: "",

    })
    function handleChange(event) {
        const value = event.target.value;
        setState({
            ...state,
            [event.target.name]: value,
        });
    }

    const addMainSpecs = () => {
        let data = {
            name: state.name,
            note: state.note,
        }

        if (dispatch({ type: REQUEST_FOR_ADD_MAINSPECS_IS_IN_PROGRESS, payload: { data } })) {
            mySwal.fire({
                title: "MainSpecs Added!",
                text: "Successfully",
                icon: "success",
            });
            document.getElementById("newForm").reset();
            setState('')
        }
        else {
            mySwal.fire({
                title: "Opps..!",
                text: "Something went wrong!",
                icon: "error",
            });
            document.getElementById("newForm").reset();
            setState('')
        }
    }
    return (
        <>
            {/* Add Specs Btn and Model */}
            <span className="mt-2 ml-auto" data-toggle="modal" data-target="#mainTypeModel" style={{ cursor: 'pointer' }}>
                <i className="fa fa-plus-circle fa-2x text-success" aria-hidden="true"></i>
            </span>

            <div className="modal fade" id="mainTypeModel" tabIndex="-1" role="dialog" aria-labelledby="mainTypeModelLabel" aria-hidden="true">
                <div className="modal-dialog" role="document">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title" id="mainTypeModelLabel">ADD SPECS</h5>
                            <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                                <span aria-hidden="true">&times;</span>
                            </button>
                        </div>
                        <div className="modal-body">
                            <div className="form-group">
                                <form id="newForm">
                                    <label>Name</label>
                                    <input
                                        type="text"
                                        id=""
                                        name="name"
                                        className="form-control mb-3"
                                        defaultValue=""
                                        onChange={handleChange}
                                    />
                                    Add Note for User?<span data-toggle="collapse" data-target="#collapsMainSpecs_note" aria-expanded="false" aria-controls="collapsMainSpecs_note" style={{ cursor: 'pointer', color: 'blue' }}> Add</span><br />
                                    <div>
                                        <div className="collapse multi-collapse" id="collapsMainSpecs_note">
                                            <textarea
                                                rows="2"
                                                name="note"
                                                className="form-control mt-4"
                                                defaultValue=""
                                                onChange={handleChange}
                                            ></textarea>
                                            <span className='text-danger'></span>
                                        </div>
                                    </div>
                                </form>
                            </div>
                        </div>
                        <div className="modal-footer">
                            <button type="button" className="btn btn-close" data-dismiss="modal">Close</button>
                            <button type="button" className="btn btn-save" data-dismiss="modal" onClick={addMainSpecs}>Save changes</button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
export default AddMainSpecs