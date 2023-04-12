import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import Swal from 'sweetalert2'
import withReactContent from 'sweetalert2-react-content'
import { REQUEST_FOR_DELETE_PRICE_TITLE_IS_IN_PROGRESS, REQUEST_FOR_UPDATE_PRICE_TITLE_IS_IN_PROGRESS } from '../../../redux/home_PriceTitle/action'

const EditPriceTitle = (props) => {

    const { data } = props

    const mySwal = withReactContent(Swal)
    const dispatch = useDispatch()
    const [name, setName] = useState(data.name)


    const updateData = () => {

        let update_data = {
            _id: data._id,
            name: name,

        }

        if (dispatch({ type: REQUEST_FOR_UPDATE_PRICE_TITLE_IS_IN_PROGRESS, payload: { update_data } })) {
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

    const deleteSubSpecs = () => {
        let delete_data = {
            _id: data._id,
        }

        if (dispatch({ type: REQUEST_FOR_DELETE_PRICE_TITLE_IS_IN_PROGRESS, payload: { delete_data } })) {
            mySwal.fire({
                title: "Price Title Deleted!",
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

export default EditPriceTitle