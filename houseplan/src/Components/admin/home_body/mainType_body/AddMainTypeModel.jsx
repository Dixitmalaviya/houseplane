import { useState } from "react"
import Swal from 'sweetalert2'
import { useDispatch } from 'react-redux'
import withReactContent from 'sweetalert2-react-content'
import { REQUEST_FOR_ADD_MAINTYPE_IS_IN_PROGRESS } from "../../../redux/home_MainType/action";


const AddMainTypeModel = () => {

    const mySwal = withReactContent(Swal)
    const dispatch = useDispatch()

    // Get data from input field
    const [state, setState] = useState({
        addtype: "",
        heading: "",
        description: ""

    })
    function handleChange(event) {
        const value = event.target.value;
        setState({
            ...state,
            [event.target.name]: value,
        });
    }

    // Submit btn click
    const addMaintypeData = () => {
        let data = {
            name: state.addtype,
            headingName: state.heading,
            info: state.description
        }
        // console.log(data)
        dispatch({ type: REQUEST_FOR_ADD_MAINTYPE_IS_IN_PROGRESS, payload: { data } })
        // if () {
        //     mySwal.fire({
        //         title: "MainType Added!",
        //         text: "Successfully",
        //         icon: "success",
        //     });
        //     document.getElementById("newForm").reset();
        // }
        // else {
        //     mySwal.fire({
        //         title: "Opps..!",
        //         text: "Something went wrong!",
        //         icon: "error",
        //     });
        //     document.getElementById("newForm").reset();
        // }

    }






    return (
        <>
            {/* Add Type Btn and Model */}
            <span className="mt-2 ml-auto" data-toggle="modal" data-target="#mainTypeModel" style={{ cursor: 'pointer' }}>
                <i className="fa fa-plus-circle fa-2x text-success" aria-hidden="true"></i>
            </span>

            <div className="modal fade" id="mainTypeModel" tabIndex="-1" role="dialog" aria-labelledby="mainTypeModelLabel" aria-hidden="true">
                <div className="modal-dialog" role="document">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title" id="mainTypeModelLabel">Modal title</h5>
                            <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                                <span aria-hidden="true">&times;</span>
                            </button>
                        </div>
                        <div className="modal-body">
                            <div className="form-group">
                                <form id="newForm">
                                    <label for="email">Add type</label>
                                    <input
                                        type="text"
                                        id=""
                                        name="addtype"
                                        className="form-control"
                                        defaultValue=""
                                        onChange={handleChange}
                                    />
                                    <label for="email" className='mt-4'>Heading Name</label>
                                    <input
                                        type="text"
                                        id=""
                                        name="heading"
                                        className="form-control"
                                        defaultValue=""
                                        onChange={handleChange}
                                    />
                                    <label for="email" className='mt-4'>Description</label>
                                    <textarea
                                        rows="2"
                                        id=""
                                        name="description"
                                        className="form-control"
                                        defaultValue=""
                                        onChange={handleChange}
                                    ></textarea>
                                    <span className='text-danger'></span>
                                </form>
                            </div>
                        </div>
                        <div className="modal-footer">
                            <button type="button" className="btn btn-close" data-dismiss="modal">Close</button>
                            <button type="button" className="btn btn-save" data-dismiss="modal" onClick={addMaintypeData}>Save changes</button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
export default AddMainTypeModel