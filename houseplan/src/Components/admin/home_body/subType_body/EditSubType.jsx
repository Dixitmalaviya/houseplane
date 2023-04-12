import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { REQUEST_FOR_DELETE_SUBTYPE_IS_IN_PROGRESS, REQUEST_FOR_UPDATE_SUBTYPE_IS_IN_PROGRESS } from '../../../redux/home_SubType/action'
import Swal from 'sweetalert2'
import withReactContent from 'sweetalert2-react-content'

const EditSubType = (props) => {

    const { data } = props
    // console.log(data)
    const mySwal = withReactContent(Swal)

    const [Title, setTitle] = useState(data.name)
    const [Heading, setHeading] = useState(data.headingName)
    const [Description, setDescription] = useState(data.info)
    const dispatch = useDispatch()

    const UpdateData = () => {
        let update_data = {
            name: Title,
            _id: data._id,
            headingName: Heading,
            info: Description
        }


        if (dispatch({ type: REQUEST_FOR_UPDATE_SUBTYPE_IS_IN_PROGRESS, payload: { update_data } })) {

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

    const deleteSubType = () => {
        let delete_data = {
            _id: data._id,
        }

        dispatch({ type: REQUEST_FOR_DELETE_SUBTYPE_IS_IN_PROGRESS, payload: { delete_data } })
    }
    return (
        <>
            <div class="col-md-4 mb-4">
                <div type="button" >
                    <div className='card card_radius' >
                        <div className="row">
                            <i class='bx bxs-edit ml-auto mr-2' data-toggle="collapse" data-target={"#1" + data._id} aria-expanded="false" aria-controls={data._id} style={{ cursor: 'pointer' }}></i>
                            <i class='bx bxs-trash' id={data._id} onClick={deleteSubType} style={{ cursor: 'pointer' }}></i>
                        </div>
                        <div className="form-group" >

                            <label>Title</label>
                            <input
                                type="text"
                                id=""
                                name=""
                                className="form-control"
                                defaultValue={Title}
                                onChange={e => setTitle(e.target.value)}
                            />
                            <div class="collapse multi-collapse" id={"1" + data._id}>
                                <label className='mt-4'>Heading</label>
                                <input
                                    type="text"
                                    id=""
                                    name=""
                                    className="form-control"
                                    defaultValue={Heading}
                                    onChange={e => setHeading(e.target.value)}
                                />
                                <label for="email" className='mt-4'>Description</label>
                                <textarea
                                    rows="2"
                                    id=""
                                    name=""
                                    className="form-control"
                                    defaultValue={Description}
                                    onChange={e => setDescription(e.target.value)}
                                ></textarea>
                                <div>
                                    {/* <img src={data.image} className="img-responsive mt-3" height={150} width={150} /><br /> */}

                                    {/* <input type="file" />
                                    <span className='text-danger'></span> */}
                                </div>
                                <input class="btn btn-save mt-4" type="submit" value="Save" onClick={UpdateData} />
                            </div>

                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default EditSubType