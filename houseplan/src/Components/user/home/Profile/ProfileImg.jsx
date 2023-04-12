import React, { useRef, useState } from 'react';
import { useSelector } from "react-redux"
import { useForm } from "react-hook-form";
import icon_image from '../../../assets/icon_image.svg'
import icon_upload from '../../../assets/icon_upload.svg'
const ProfileImg = () => {
    const instAdminReducer = useSelector(state => state.instAdminReducer)

    // For All File Upload (If you have serious chnaged then change it otherwise do not change it)
    const wrapperRef = useRef(null);
    const [fileList, setFileList] = useState([]);
    const [fileErr, setFileErr] = useState("")

    const onDragEnter = () => wrapperRef.current.classList.add('dragover');
    const onDragLeave = () => wrapperRef.current.classList.remove('dragover');
    const onDrop = () => wrapperRef.current.classList.remove('dragover');

    const onFileDrop = (e) => {
        const newFile = e.target.files[0];
        if (newFile) {
            if (newFile.type === 'image/png' || newFile.type === 'image/jpeg') {
                if (newFile.size < 5242880) {
                    const updatedList = [newFile];
                    setFileList(updatedList);

                } else {
                    setFileErr("File Size must be less than 5 MB!")
                }
            }
            else {
                setFileErr("Only PDF file allowed!")
            }
        }
    }

    const fileRemove = () => {
        setFileList([]);
    }
    // File Upload Logic Section End------------
    const { register, handleSubmit, formState: { errors } } = useForm();
    const updateProfileImg = () => {
        // //console.log(fileList[0])
    }
    return (
        <>
            <div className="text-center">
                <img className="card-img profile_img"
                    src={'https://d2sxpk1n4exfl4.cloudfront.net/plans/1d6eb59c-c41a-4487-b899-046addabdfb6.jpg'}
                    alt="ppsu" />
                <br />
                <button type="button" className="btn btn-sm mt-4" data-toggle="modal" data-target="#updateProfileModal">
                    Chnage Image
                </button>
            </div>


            <div className="modal fade" id="updateProfileModal" tabIndex="-1" role="dialog" aria-labelledby="updateProfileModalModalLabel" aria-hidden="true">
                <div className="modal-dialog" role="document">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title" id="exampleModalLabel">Update Profile Image</h5>
                            <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                                <span aria-hidden="true">&times;</span>
                            </button>
                        </div>
                        <div className="modal-body pl-5 pr-5 mt-3 mb-3">

                            <div className="alert alert-info mb-4">
                                <strong>Instruction</strong>
                                <li>Image feild is Required!</li>
                                <li>Only <strong>PNG/JPEG</strong> File Allowed!</li>
                                <li>File size must be less than <strong>5 MB</strong></li>
                            </div>

                            <form onSubmit={handleSubmit(updateProfileImg)} >
                                <div className='file_upload_for_all '>
                                    {
                                        fileList.length === 0 ? (
                                            <>
                                                <div
                                                    ref={wrapperRef}
                                                    className="drop-file-input"
                                                    onDragEnter={onDragEnter}
                                                    onDragLeave={onDragLeave}
                                                    onDrop={onDrop}
                                                >
                                                    <div className="drop-file-input__label">
                                                        <img src={icon_upload} alt="" />
                                                        <p>Drag & Drop your files here</p>
                                                        <p>Only JPG/PNG Allow<span className='text-danger'> *</span></p>
                                                    </div>
                                                    <input type="file"
                                                        name='profileImg'
                                                        {
                                                        ...register("profileImg", {
                                                            required: true
                                                        })
                                                        }
                                                        onChange={onFileDrop}
                                                    />
                                                </div>
                                                <span className='text-danger'>{fileErr}</span>
                                                <span className="text-danger">{errors.profileImg?.type === 'required' && "File is required!"}</span>
                                            </>
                                        ) : null
                                    }

                                    {
                                        fileList.length > 0 ? (
                                            <div className="drop-file-preview">
                                                <p className="drop-file-preview__title">
                                                    Ready to upload
                                                </p>
                                                {
                                                    fileList.map((item, index) => (
                                                        <div key={index} className="drop-file-preview__item">
                                                            <img src={icon_image} alt="" />
                                                            <div className="drop-file-preview__item__info">
                                                                <p>{item.name}</p>
                                                                <p>{(item.size / 1048576).toFixed(0)} MB</p>
                                                            </div>
                                                            <span className="drop-file-preview__item__del" onClick={() => fileRemove(item)}>x</span>
                                                        </div>
                                                    ))
                                                }
                                            </div>
                                        ) : null
                                    }
                                </div>
                                {/* End of File Uploading Section */}

                                <div className="mt-5 d-flex justify-content-end">
                                    <button type="button" className="btn close-btn mr-2" data-dismiss="modal">Close</button>
                                    <button type="submit" className="btn btn-user-save">Submit</button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
export default ProfileImg