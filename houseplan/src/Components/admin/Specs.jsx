import MainSpecs from "./specs_body/MainSpecs"
import SubSpecs from "./specs_body/SubSpecs"

const Specs = () => {
    return (
        <>
            <div className="container specs_container">
                <h3 className="">FULL SPECS & FEATURES</h3>
                <MainSpecs />
                <SubSpecs />
            </div>
        </>
    )
}
export default Specs