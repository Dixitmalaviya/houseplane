import { useSelector } from "react-redux"
import { useParams } from "react-router-dom"
import EditPostBody from "./EditPostBody"
const EditPost = () => {
    const AllPlan = useSelector(state => state.PlanDataReducer)
    const params = useParams()
    if (AllPlan.dataIsLoaded === true) {
        return (
            <>
                <div className='container post_container'>
                    <h3 className='flex-grow-1'>Plan View</h3>
                    <div className='row'>
                        {
                            AllPlan.planData.map((data) => {
                                if (data._id == params.id) {
                                    return (
                                        <EditPostBody data={data} />
                                    )
                                }
                            })
                        }
                    </div>
                </div>
            </>
        )
    }

}
export default EditPost