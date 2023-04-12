const HomeSearch = () => {
    const click = () => {
        console.log("hello")
    }
    return (
        <>
            <div className="card" style={{ borderRadius: '10px' }}>
                <div className="card-body">
                    <div>
                        <div className='mt-4 mb-4'>Bedrooms</div>
                        <div className="custom-control custom-radio custom-control-inline">
                            <input type="radio" id="bedrooms1" name="bedrooms" className="custom-control-input" />
                            <label className="custom-control-label" htmlFor="bedrooms1">1</label>
                        </div>
                        <div className="custom-control custom-radio custom-control-inline">
                            <input type="radio" id="bedrooms2" name="bedrooms" className="custom-control-input" />
                            <label className="custom-control-label" htmlFor="bedrooms2">2</label>
                        </div>
                        <div className="custom-control custom-radio custom-control-inline">
                            <input type="radio" id="bedrooms3" name="bedrooms" className="custom-control-input" />
                            <label className="custom-control-label" htmlFor="bedrooms3">3</label>
                        </div>
                        <div className="custom-control custom-radio custom-control-inline">
                            <input type="radio" id="bedrooms4" name="bedrooms" className="custom-control-input" />
                            <label className="custom-control-label" htmlFor="bedrooms4">4+</label>
                        </div>
                        <div className="custom-control custom-radio custom-control-inline">
                            <input type="radio" id="bedrooms5" name="bedrooms" className="custom-control-input" />
                            <label className="custom-control-label" htmlFor="bedrooms5">5+</label>
                        </div>
                    </div>

                    <div>
                        <div className='mt-4 mb-4'>Bathrooms</div>
                        <div className="custom-control custom-radio custom-control-inline">
                            <input type="radio" id="bathrooms1" name="bathrooms" className="custom-control-input" />
                            <label className="custom-control-label" htmlFor="bathrooms1">1</label>
                        </div>
                        <div className="custom-control custom-radio custom-control-inline">
                            <input type="radio" id="bathrooms2" name="bathrooms" className="custom-control-input" />
                            <label className="custom-control-label" htmlFor="bathrooms2">2</label>
                        </div>
                        <div className="custom-control custom-radio custom-control-inline">
                            <input type="radio" id="bathrooms3" name="bathrooms" className="custom-control-input" />
                            <label className="custom-control-label" htmlFor="bathrooms3">3</label>
                        </div>
                        <div className="custom-control custom-radio custom-control-inline">
                            <input type="radio" id="bathrooms4" name="bathrooms" className="custom-control-input" />
                            <label className="custom-control-label" htmlFor="bathrooms4">4</label>
                        </div>
                        <div className="custom-control custom-radio custom-control-inline">
                            <input type="radio" id="bathrooms5" name="bathrooms" className="custom-control-input" />
                            <label className="custom-control-label" htmlFor="bathrooms5">5+</label>
                        </div>
                    </div>
                    <div>
                        <button className="btn btn-user-save mt-5">Search Plan</button>
                    </div>
                </div>
            </div>
        </>
    )
}
export default HomeSearch