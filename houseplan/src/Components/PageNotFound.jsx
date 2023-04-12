// import ppsu from './PPSU.png'
const PageNotFound = () => {
    return (
        <>
            <div className="container">
                <div className='notFound_err_handle'>
                    {/* <h1></h1> */}
                    <div className='text-center'>
                        {/* <img src={ppsu} className="logo" /> */}
                    </div>
                    <p class="zoom-area"><b>Opps!</b> Page not Found! </p>
                    <section class="error-container">
                        <span class="four"><span class="screen-reader-text">4</span></span>
                        <span class="zero"><span class="screen-reader-text">0</span></span>
                        <span class="four"><span class="screen-reader-text">4</span></span>
                    </section>
                    <div class="link-container">
                        <a target="_blank" href="#" class="more-link">Return to happiness</a>
                    </div>
                </div>
            </div>
        </>
    )
}
export default PageNotFound