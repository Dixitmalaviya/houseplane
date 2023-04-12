
import { useState } from 'react';
import { useSelector } from 'react-redux'
import AddPriceValue from './sub_priceValue/AddPriceValue';
import EditPriceValue from './sub_priceValue/EditPriceValue';


const Price_value = () => {
    const [select, setselect] = useState("All")
    const getPriceTitle = useSelector(state => state.PriceTitleReducer)

    const getPriceValue = useSelector(state => state.PriceValueReducer)

    if (getPriceValue.dataIsLoaded == true && getPriceTitle.dataIsLoaded == true) {
        return (
            <div className='mt-5'>
                <div className="row">
                    <i className='bx bx-menu bx-md mr-3' data-toggle="collapse" data-target="#collapsSubSpecs" aria-expanded="false" aria-controls="collapsSubSpecs" style={{ cursor: 'pointer' }}></i>
                    <h3 className="ml-3">PRICE VALUE</h3>

                    <select className="form-control col-md-2 form-control-sm ml-5 mt-2" onChange={(e) => setselect(e.target.value)}>
                        <option defaultValue>All</option>
                        {
                            getPriceTitle.priceTitle.map((val, ind) => {
                                return (
                                    <option key={ind} value={val._id}>{val.name}</option>
                                )
                            })
                        }
                    </select>
                    <AddPriceValue />
                </div>

                <div className="mt-5 collapse multi-collapse show" id="collapsSubSpecs" >
                    <div className="col-md-12 row" >
                        {

                            getPriceValue.priceValue.map((data) => {
                                return (
                                    select == "All" ? <EditPriceValue key={data._id} data={data} /> : select === data.priceTitle ? <EditPriceValue key={data._id} data={data} /> : ""
                                )

                            })
                        }

                    </div>
                </div>
            </div>
        )
    } else {
        return (
            <>

                Loading....
            </>
        )
    }
}
export default Price_value