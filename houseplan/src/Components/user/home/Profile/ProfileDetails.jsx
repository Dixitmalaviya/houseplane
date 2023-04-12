import { useSelector } from 'react-redux'
const ProfileDetails = () => {
    const user = useSelector(state => state.CustomerLogin)
    return (
        <>
            <h4>Profile Detils</h4>

            <div className='mb-4 mt-4 '>
                <label>Username</label>
                <input
                    type="text"
                    className="form-control"
                    placeholder={user.login_user.username}
                    disabled
                />
            </div>
        </>
    )
}
export default ProfileDetails