import React from 'react'
import { useSelector } from 'react-redux'
import AddPriceTitle from './main_priceTitle/AddPriceTitle'
import EditPriceTitle from './main_priceTitle/EditPriceTitle'

const Price_title = () => {

    const PriceTitle = useSelector(state => state.PriceTitleReducer)
    // console.log(PriceTitle)

    if (PriceTitle.dataIsLoaded == true) {
        return (
            <>
                <div className='row mt-5'>

                    <i className='bx bx-menu bx-md mr-3' data-toggle="collapse" data-target="#collapsPriceTitle" aria-expanded="false" aria-controls="collapsPriceTitle" style={{ cursor: 'pointer' }}></i>
                    <h3 className="ml-3">PRICE TITLE</h3>

                    <AddPriceTitle />
                </div>

                {/* Show Price Title on display */}
                <div className="mt-5 collapse multi-collapse" id="collapsPriceTitle" >
                    <div className="col-md-12 row" >
                        {
                            PriceTitle.priceTitle.map(data => <EditPriceTitle key={data._id} data={data} />)

                        }
                    </div>
                </div>

            </>
        )
    }
    else {
        return (
            <>
                Loading...
            </>
        )
    }
}
export default Price_title