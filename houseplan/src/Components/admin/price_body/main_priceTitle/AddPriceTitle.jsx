import React, { useState } from 'react'
import { REQUEST_FOR_ADD_PRICE_TITLE_IS_IN_PROGRESS } from '../../../redux/home_PriceTitle/action';
import Swal from 'sweetalert2'
import { useDispatch } from 'react-redux'
import withReactContent from 'sweetalert2-react-content'

const AddPriceTitle = () => {

    const mySwal = withReactContent(Swal)

    const [state, setState] = useState({
        name: "",
    })

    const dispatch = useDispatch();

    function handleChange(event) {
        const value = event.target.value;
        setState({
            ...state,
            [event.target.name]: value,
        });
    }

    const addPriceTitle = (e) => {
        e.preventDefault()
        let data = {
            name: state.name
        }
        // console.log(data)
        dispatch({ type: REQUEST_FOR_ADD_PRICE_TITLE_IS_IN_PROGRESS, payload: { data } })
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
            {/* Add Price_title Btn and Model */}
            <span className="mt-2 ml-auto" data-toggle="modal" data-target="#mainTypeModel" style={{ cursor: 'pointer' }}>
                <i className="fa fa-plus-circle fa-2x text-success" aria-hidden="true"></i>
            </span>

            <div className="modal fade" id="mainTypeModel" tabIndex="-1" role="dialog" aria-labelledby="mainTypeModelLabel" aria-hidden="true">
                <div className="modal-dialog" role="document">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title" id="mainTypeModelLabel">ADD PRICE TITLE</h5>
                            <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                                <span aria-hidden="true">&times;</span>
                            </button>
                        </div>
                        <form id="newForm" onClick={e => addPriceTitle(e)}>
                            <div className="modal-body">
                                <div className="form-group">

                                    <label>Name</label>
                                    <input
                                        type="text"
                                        id=""
                                        name="name"
                                        className="form-control mb-3"
                                        defaultValue=""
                                        onChange={handleChange}
                                    />

                                </div>
                            </div>
                            <div className="modal-footer">
                                <button type="button" className="btn btn-close" data-dismiss="modal">Close</button>
                                <button type="button" className="btn btn-save" data-dismiss="modal" >Save changes</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </>
    )
}

export default AddPriceTitle