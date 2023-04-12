import { useState } from "react";
import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
const ChangePassword = () => {
    const user = useSelector(state => state.CustomerLogin)
    const dispatch = useDispatch()
    const [status, setStatus] = useState(false)
    const { register, handleSubmit, setValue, formState: { errors } } = useForm();
    const chnagePassword = (e) => {
        // setStatus(true)
        const data = {
            "_id": user.login_user._id,
            "oldPassword": e.oldPassword,
            "newPassword": e.newPassword
        }
        console.log(data)
    }
    return (
        <>
            <div className='row d-flex pl-2 pr-2'>
                <h3 className='flex-grow-1'>Change Password</h3>
            </div>
            <form className="mt-5" onSubmit={handleSubmit(chnagePassword)}>

                <div className='mb-5 mt-2 '>
                    <label>Old Password<span className='text-danger'> *</span></label>
                    <input
                        type="text"
                        name="oldPassword"
                        className="form-control"
                        {...register("oldPassword", {
                            required: true
                        })}
                    />
                    <span className="text-danger">{errors.oldPassword?.type === 'required' && "Old Password is required!"}</span>
                </div>

                <div className='mb-4 mt-2 '>
                    <label>New Password<span className='text-danger'> *</span></label>
                    <input
                        type="text"
                        name="newPassword"
                        className="form-control"
                        {...register("newPassword", {
                            required: true
                        })}
                    />
                    <span className="text-danger">{errors.newPassword?.type === 'required' && "New Password is required!"}</span>
                </div>
                {
                    status === true
                        ? <button className="btn btn-user-save" disabled>Updating..</button>
                        : <button type="submit" className="btn btn-user-save">Update</button>
                }

            </form>
        </>
    )
}
export default ChangePassword