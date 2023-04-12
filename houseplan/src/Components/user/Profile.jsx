import ChangePassword from "./home/Profile/ChangePassword"
import ProfileDetails from "./home/Profile/ProfileDetails"
import ProfileImg from "./home/Profile/ProfileImg"

const Profile = () => {
    return (
        <>
            <div className="container mt-3 mb-5">
                <div className='col-12'>
                    <div className='row d-flex mt-5 pl-2 pr-2'>
                        <h3 className='flex-grow-1'>Profile</h3>
                    </div>
                    <hr />
                    <div className='row'>
                        <div className="col-sm-12 col-md-4 col-lg-4 mb-3">
                            <ProfileImg />
                        </div>
                        <div className="col-sm-12 col-md-4 col-lg-4 mb-3">
                            <ProfileDetails />
                        </div>
                        <div className="col-sm-12 col-md-4 col-lg-4 mb-3">
                            <ChangePassword />
                        </div>
                    </div>
                </div>
            </div>

        </>
    )
}
export default Profile