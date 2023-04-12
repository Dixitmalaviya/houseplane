import { useForm } from "react-hook-form";
import { useState } from 'react';
import { base_url } from "../../constant";
import axios from "axios";
import img_1 from '../assets/urban_design.svg'
import Cookies from "js-cookie";
const Login = () => {

    // For Form
    const { register, handleSubmit, formState: { errors } } = useForm();

    // This is for validation and use for validation in if condition
    const [status, setStatus] = useState(false)

    // Data
    const [resData, setResData] = useState({})
    const [err, setErr] = useState('')

    const [loader, setLoader] = useState(false)

    const onSubmit = (data) => {
        console.log(data)
        setLoader(true)
        axios.post(base_url + '/auth/loginCustomer', data)
            .then((res) => {
                // console.log(res)
                if (res.status === 200) {
                    console.log(res)
                    setStatus(true)
                    setResData(res.data)
                    setErr('')
                    setLoader(false)
                    Cookies.set('role', res.data.result.role)
                    // window.location.href = '/'
                } else {
                    setStatus(false)
                    setErr('Somthing went wrong!')
                    setLoader(false)
                }
            })
            .catch((err) => {
                setStatus(false)
                if (err.response.status === 301) {
                    setErr("Username not Found!")
                    setLoader(false)
                } else {
                    setErr('Somthing went wrong!')
                    setLoader(false)
                }
            })
    }

    return (
        <>
            <div className="container-fluid">
                <div className="content mb-5">
                    <div className="row">
                        <div className="col-md-6 col-lg-6 col-sm-12  text-center">
                            <img src={img_1} alt="Image" className="img-fluid" />
                        </div>
                        <div className="col-md-6 col-lg-6 col-sm-12 contents">
                            <div className="row justify-content-center">
                                <div className="col-md-8">
                                    <div className="mb-5">
                                        <h3>Sign In</h3>
                                        {/* <p className="mb-4">Lorem ipsum dolor sit amet elit. Sapiente sit aut eos consectetur adipisicing.</p> */}
                                    </div>
                                    <form onSubmit={handleSubmit(onSubmit)}>
                                        {
                                            err
                                                ? <div className="alert alert-danger" role="alert">
                                                    {err}
                                                </div>
                                                : ''
                                        }
                                        <div className="form-group first">
                                            <input
                                                type="text"
                                                name="username"
                                                className="form-controls"
                                                placeholder="Username"
                                                {...register("username", {
                                                    required: true,
                                                })}
                                            />
                                        </div>
                                        <span className="text-danger">{errors.username?.type === 'required' && "Username is required!"}</span>

                                        <div className="form-group last mt-4">
                                            <input
                                                type="password"
                                                name="password"
                                                className="form-controls"
                                                placeholder="Password"
                                                {...register("password", {
                                                    required: true,
                                                })}
                                            />
                                        </div>
                                        <span className="text-danger">{errors.password?.type === 'required' && "Password is required!"}</span>

                                        <div className="d-flex mb-5 mt-4 align-items-center">
                                            {/* <label className="control control--checkbox mb-0"><span className="caption">Remember me</span>
                                                <input type="checkbox" checked="checked" />
                                                <div className="control__indicator"></div>
                                            </label> */}
                                            <span className="ml-auto"><a href="#" className="forgot-pass">Forgot Password</a></span>
                                        </div>
                                        {
                                            loader === true
                                                ? <input value="Loading.." className="btn btn-block" disabled />
                                                : <input type="submit" value="Sign In" className="btn btn-block" />
                                        }
                                    </form>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
export default Login
