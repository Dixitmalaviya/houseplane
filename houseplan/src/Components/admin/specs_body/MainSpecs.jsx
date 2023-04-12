import AddMainSpecs from "./mainSpecs_body/AddMainSpecs"
import EditMainSpces from "./mainSpecs_body/EditMainSpecs"
import { useSelector } from 'react-redux'

const MainSpecs = () => {
    const mainSpecsData = useSelector(state => state.mainSpecsReducer)
    if (mainSpecsData.dataIsLoaded == true) {
        return (
            <>
                <div className='row mt-5'>

                    <i className='bx bx-menu bx-md mr-3' data-toggle="collapse" data-target="#collapsMainSpecs" aria-expanded="false" aria-controls="collapsMainSpecs" style={{ cursor: 'pointer' }}></i>
                    <h3 className="ml-3">Main Specs</h3>

                    <AddMainSpecs />

                </div>

                {/* Show Type on display */}
                <div className="mt-5 collapse multi-collapse show" id="collapsMainSpecs" >
                    <div className="col-md-12 row" >
                        {
                            mainSpecsData.mainSpecs.map(data => <EditMainSpces key={data._id} data={data} />)
                        }
                    </div>
                </div>
            </>
        )
    } else {
        return (
            <>
                Loding..
            </>
        )
    }
}
export default MainSpecs