import { useSelector } from "react-redux"
import UploadPost from "./post_body/UploadPost"

const Post = () => {
    // const getplan = useSelector(state => state.PlanDataReducer)
    // console.log(getplan, "This is getplan")
    return (
        <div className="container post_container">
            <h3 className="mb-4">ADD POST</h3>
            <UploadPost />
        </div>
    )
}

export default Post