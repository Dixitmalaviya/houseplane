import Price_title from "./price_body/Price_title"
import Price_value from "./price_body/Price_value"

const Price = () => {

    return (
        <>
            <div className="container post_container">
                <h3 className="mb-4">PRICES</h3>
                <Price_title />
                <Price_value />
            </div>
        </>
    )
}
export default Price