import axios from 'axios';
import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import Swal from 'sweetalert2'
import withReactContent from 'sweetalert2-react-content'
import { base_url } from '../../../../constant';
import { REQUEST_FOR_ADD_SUBTYPE_IS_IN_PROGRESS } from '../../../redux/home_SubType/action';

const AddSubTypeModel = () => {


    const mySwal = withReactContent(Swal)
    const dispatch = useDispatch()

    const getMainType = useSelector(state => state.getMainTypeReducer);

    // console.log(getSubType)
    const [sFile, setsFile] = useState('')
    const [mulFile, setmulFile] = useState([])
    const MultipleFileChange = (e) => {
        setmulFile(e.target.files)
    }
    const SingleFileChange = (e) => {
        setsFile(e.target.files[0])
    }


    const [state, setState] = useState({
        name: "",
        headingName: "",
        mainType: "",
        info: "",
        image: "",
        carasole: ""

    })

    function handleChange(event) {
        const target = event.target
        const value = target.type === 'file' ? target.files : target.value;
        const file = target.name
        setState({
            ...state,
            [file]: value,

        });
    }


    const HandleSubmit = () => {
        if (state.mainType === "" || state.name === "" || !sFile || mulFile.length === 0 || state.headingName === "") {
            document.getElementById("err_AddSubType").innerHTML = "All fields are Required!"
        }
        else {
            document.getElementById("err_AddSubType").innerHTML = ""
            const formdata = new FormData()
            formdata.append('name', state.name)
            formdata.append('headingName', state.headingName)
            formdata.append('mainType', state.mainType)
            formdata.append('info', state.info)
            // for the iamge
            formdata.append('image', sFile)
            for (let i = 0; i < mulFile.length; i++) {
                formdata.append('carasole', mulFile[i])
            }
            if (dispatch({ type: REQUEST_FOR_ADD_SUBTYPE_IS_IN_PROGRESS, payload: formdata })) {
                // document.getElementById('subTypeModel').modal('hide');
                // mySwal.fire({
                //     title: "MainType Added!",
                //     text: "Successfully",
                //     icon: "success",
                // });
                document.getElementById("subform").reset();
                setState("")
                setsFile("")
                setmulFile([])

            }
            else {
                // mySwal.fire({
                //     title: "Opps..!",
                //     text: "Something went wrong!",
                //     icon: "error",
                // });
                document.getElementById("subform").reset();
                setState("")
                setsFile("")
                setmulFile([])
            }
        }
    }




    return (

        <div className="modal fade" id="subTypeModel" tabIndex="-1" role="dialog" aria-labelledby="subTypeModelLabel" aria-hidden="true">
            <div className="modal-dialog" role="document">
                <div className="modal-content">
                    <div className="modal-header">
                        <h5 className="modal-title" id="subTypeModelLabel">Modal title</h5>
                        <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                            <span aria-hidden="true">&times;</span>
                        </button>
                    </div>
                    <div className="modal-body">
                        <form id="subform" >
                            <div className="form-group">

                                <span className='text-secondary'>
                                    <li>Each File size must be file less than 3 MB</li>
                                    <li><span className='text-danger'>*</span> Fields are Requied!</li>
                                </span><br />
                                <span className='text-danger' id="err_AddSubType"></span><br />

                                <div className='row ml-1 mt-2'>
                                    <select className="form-control col-md-4 form-control-sm mb-5" onChange={handleChange} name="mainType">
                                        <option>Select</option>
                                        {
                                            getMainType.mainTypes.map((val, ind) => {
                                                return (
                                                    <option key={ind} value={val._id}>{val.name}</option>
                                                )
                                            })
                                        }
                                    </select>
                                    <span className='text-danger'>*</span>
                                </div>
                                <label>Add Subtype<span className='text-danger'> *</span></label>
                                <input
                                    type="text"
                                    id=""
                                    name="name"
                                    className="form-control"
                                    defaultValue=""
                                    required
                                    onChange={handleChange}
                                />

                                <label className='mt-4'>Heading Name<span className='text-danger'> *</span></label>
                                <input
                                    type="text"
                                    id=""
                                    name="headingName"
                                    className="form-control"
                                    defaultValue=""
                                    onChange={handleChange}
                                />
                                <label className='mt-4'>Description</label>
                                <input
                                    type="text"
                                    id=""
                                    name="info"
                                    className="form-control"
                                    defaultValue=""
                                    onChange={handleChange}
                                />
                                <label className='mt-4'>Multiple File<span className='text-danger'> *</span></label><br />
                                <input type="file"
                                    name='carasole' multiple
                                    onChange={(e) => MultipleFileChange(e)}
                                // onChange={handleChange}
                                /><br />
                                <label className='mt-4'>Single File<span className='text-danger'> *</span></label><br />
                                <input type="file"
                                    name='image' required
                                    onChange={(e) => SingleFileChange(e)}
                                // onChange={handleChange}
                                />
                            </div>
                        </form>
                    </div>
                    <div className="modal-footer">
                        <button type="button" className="btn btn-close" data-dismiss="modal">Close</button>
                        <button type="button" className="btn btn-save" onClick={HandleSubmit}>Save changes</button>
                    </div>
                </div>
            </div>
        </div>

    )
}

export default AddSubTypeModel