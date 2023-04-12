import axios from "axios";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { base_url } from "../../../constant";

const EditPostBody = (props) => {
    const { data } = props
    console.log(data)
    const [temp_arr, setTemp_arr] = useState([])

    const getMainSpecs = useSelector(state => state.mainSpecsReducer);
    const getMainTypes = useSelector(state => state.getMainTypeReducer);
    const getSubTypes = useSelector(state => state.getSubTypeReducer);
    const getSubSpecs = useSelector(state => state.subSpecsReducer);
    const getPriceTitle = useSelector(state => state.PriceTitleReducer);
    const getPriceValue = useSelector(state => state.PriceValueReducer)

    // ------------------------------ Baaic detail -------------------------------------
    const [ifEditMainType, setIfEditMainType] = useState(false)

    const [selectMainType, setSelectMainType] = useState()     // used for select MainType
    const [selectSubType, setSelectSubType] = useState()       // used for selct SubType
    const [plan, setPlan] = useState({
        planName: "",
        planInfo: "",
    })
    function handlePlan(event) {
        const value = event.target.value;
        setPlan({
            ...plan,
            [event.target.name]: value,

        });
    }

    // ------------------- Full specs and features -----------------

    // Status for Edit or nor
    const [ifEdit, setIfEdit] = useState(false)

    const [state, setState] = useState({}) // Used for getting data from SubSpecs field
    const [finalSubSpecsData, setFinalSubSpecsData] = useState([]) // Used for make Final Object
    const [selectArr, setSelectArr] = useState([])
    const [subSpecsArr, setsubSpecsArr] = useState([])
    const [selectMainSpecs, setSelectMainSpecs] = useState("All") // used for select MainSpecs

    function handleChange(e) {
        const value = e.target.value;
        setState({
            ...state,
            [e.target.name]: value,
        });
    }
    const handleSubmit = event => {
        event.preventDefault();
        if (selectMainSpecs === "All" || selectMainSpecs === "" || selectMainSpecs === "Select Main Specs") {
            // Handle Blank Input and Try to Submit SubSpecs Form
            // errHandle('Select Main Specs!')
            event.preventDefault();
        } else {
            if (state === "" || Object.keys(state).length == 0) {
                // Handle if State is eq to Null
                event.preventDefault(); //used for not submiting form
                // errHandle('Input Requied!')
            } else {
                event.preventDefault();
                const StateKeys = Object.keys(state);

                StateKeys.map(e => {
                    // console.log(getMainSpecs, "This is get main specs data")
                    getMainSpecs.mainSpecs.map(me => {
                        if (me._id == selectMainSpecs) {
                            me.subSpec.map(value => {
                                // console.log(me, "THis is upper value.name")
                                if (e == value.name) {
                                    if (state[value.name] != "") {
                                        setsubSpecsArr(subSpecsArr.push({ subSpec: value._id, value: state[value.name] }))
                                    }
                                }
                            })
                        }
                    })
                })
                setFinalSubSpecsData([
                    ...finalSubSpecsData,
                    {
                        mainSpec: selectMainSpecs,
                        subSpecs: subSpecsArr
                    }
                ]) // Make Final Object and Copy data from {State}
                setSelectArr([...selectArr, selectMainSpecs]) // Make selected MainSpecs for Not select in second time (Validation)
                document.getElementById("subSpecsForm").reset()
                setsubSpecsArr([])
                setState([]) // MAke empty for new key's and value's & RESET All
                setSelectMainSpecs("")
                event.target.reset();
            }
        }

    };
    //remove subspecs
    const removeSubSpecsData = (e) => {
        let x = e.target.getAttribute("removesubspecs") // Get the value form the field
        setFinalSubSpecsData(
            finalSubSpecsData.filter(val => val.mainSpec !== x) //Remove Data form Final State
        )
        setSelectArr(
            selectArr.filter(val => val !== x) // Set the Selected Field 
        )
    }


    //  -------------------------- Price ---------------------------------

    // handle price Title

    const [ifEditPrice, setIfEditPrice] = useState(false)
    const [selectPriceTitle, setSelectPriceTitle] = useState("All")     //used for select Price Title

    const [Pricestate, setPricestate] = useState({});
    const [selectPriceArr, setSelectPriceArr] = useState([]);
    const [finalPriceData, setFinalPriceData] = useState([])
    const [selectFinalPriceArr, setSelectFinalPriceArr] = useState([])


    const handlePriceChange = (e) => {
        const value = e.target.value;
        setPricestate({
            ...Pricestate,
            [e.target.name]: value,
        });
    }
    const handlePrice = event => {
        event.preventDefault();
        // console.log(Pricestate, "This is price state")
        if (selectPriceTitle == "All" || selectPriceTitle === "" || selectPriceTitle === "Select Price Title") {
            // errHandle('Select Price Title!')
            event.preventDefault();
        }
        else {
            if (Pricestate === "" || Object.keys(Pricestate).length == 0) {
                // Handle if Price State is eq to Null
                event.preventDefault(); //used for not submiting form
                // errHandle('Input Requied!')
            }
            else {
                event.preventDefault();
                const StateKeys = Object.keys(Pricestate);
                // console.log(getPriceTitle, "THiss is get price title")
                StateKeys.map(e => {
                    getPriceTitle.priceTitle.map(me => {

                        if (me._id == selectPriceTitle) {
                            me.subPrice.map(value => {
                                // console.log(e, "THis is e ")
                                if (e == value.name) {
                                    if (Pricestate[value.name] != "") {
                                        setSelectPriceArr(selectPriceArr.push({ _id: value._id, value: Pricestate[value.name] }))
                                    }

                                }
                            })
                        }
                    })
                })

                // console.log(selectPriceArr, "This is select price arr")
                setFinalPriceData([
                    ...finalPriceData,
                    {
                        priceTitle: selectPriceTitle,
                        subPrice: selectPriceArr
                    }
                ]) // Make Final Object and Copy data from {State}
                setSelectFinalPriceArr([...selectFinalPriceArr, selectPriceTitle])
                // console.log(selectPriceTitle, "this is price title")
                // console.log(selectFinalPriceArr, "This is selectFinalPriceArr")

                document.getElementById("subPriceForm").reset()
                // setSelectPriceArr([])
                setPricestate([]) // MAke empty for new key's and value's & RESET All
                setSelectPriceArr([])
                setSelectPriceTitle("")
                event.target.reset();
            }
        }
    }

    //remove Price
    const removePriceTitle = (e) => {
        let x = e.target.getAttribute("removeprice") // Get the value form the field
        // console.log(x, "This is x")
        setFinalPriceData(
            finalPriceData.filter(val => val.priceTitle !== x) //Remove Data form Final State
        )
        setSelectPriceArr(
            selectPriceArr.filter(val => val !== x) // Set the Selected Field 
        )
    }



    // ------------------------- Plan Include ---------------------------------
    // This is for What's Plan Include Section... Only

    const [ifEditPlanInclude, setIfEditPlanInclude] = useState(false)

    const [planIncludeData, setPlanIncludeData] = useState([]) // MAke final PlanInclude State 
    const [planIncludeDesc, setPlanIncludeDesc] = useState("")
    const [planInclude, setPlanInclude] = useState({  // getting value form the input field
        heading: "",
        info: "",
    })
    const handlePlanInclude = (event) => {      // Handle PlanInclude and Make state
        const value = event.target.value;
        setPlanInclude({
            ...planInclude,
            [event.target.name]: value,
        });
    }
    const addPlanInclude = (e) => {     // This function used for make Final Data of PlanInclude
        e.preventDefault();
        if (planInclude.heading && planInclude.info) {
            const data = {
                heading: planInclude.heading,
                info: planInclude.info
            }
            setPlanIncludeData([...planIncludeData, data])
            setPlanInclude("")
            document.getElementById("formPlanInclude").reset();
            e.target.reset();
        }
        else {
            // Validation
            // errHandle('Requied Heading and Info!')
        }
    }

    const removePlanIncludeData = (e) => {
        let x = e.target.getAttribute("removeplaninclude")
        setPlanIncludeData(
            planIncludeData.filter(val => val.heading !== x) // For remove specefic data in final state, When function call
        )
    }


    // ------------------------------ Images -----------------------------------

    const [ifEditImg, setIfEditImg] = useState(false)
    //use for plan image
    const [mulintimage, setmulintImage] = useState([])
    const [muleximage, setmulexImage] = useState([])






    // MainType and SubType
    let Final_MainType = ''
    let Final_SubTypeType = ''
    if (ifEditMainType === true) {
        Final_MainType = selectMainType
        Final_SubTypeType = selectSubType
    } else {
        Final_MainType = data.mainType
        Final_SubTypeType = data.subType
    }



    let Final_keyFeature = []
    if (ifEdit === true) {
        Final_keyFeature = finalSubSpecsData
    }
    else {
        data.keyFeature.map((data) => {
            Final_keyFeature.push(
                {
                    mainSpecs: data.mainSpecs._id,
                    subSpecs: data.subSpecs
                }
            )
        })
    }
    let Final_Price = []
    if (ifEditPrice === true) {
        Final_Price = finalPriceData
    } else {
        data.pricing.map((data) => {
            Final_Price.push(
                {
                    priceTitle: data.priceTitle._id,
                    subPrice: data.subPrice
                }
            )
        })
    }

    let Final_PlanInclude = []
    if (ifEditPlanInclude === true) {
        Final_PlanInclude = planIncludeData
    } else {
        data.planDiscription.planIncludes.map((data) => {
            Final_PlanInclude.push(
                {
                    heading: data.heading,
                    info: data.info
                }
            )
        })
    }
    const [err, setErr] = useState("")
    // Set Final Data with Validation
    if (Final_MainType !== '' && Final_SubTypeType !== '' && Final_MainType !== undefined && Final_SubTypeType !== undefined) {
        if (plan.planName !== '' && plan.planName !== undefined) {
            if (Final_keyFeature.length !== 0) {
                if (Final_Price.length !== 0) {
                    if (Final_PlanInclude.length !== 0) {
                        if (mulintimage.length !== 0 && muleximage.length !== 0) {
                            // console.log(data)
                        } else {
                            console.log("Err6")
                        }
                    } else {
                        console.log("Err5")

                    }
                } else {
                    console.log("Err4")

                }
            } else {
                console.log("Err3")

            }
        } else {
            console.log("Err2")
        }
    } else {
        console.log("Err1")

    }




    const finalData = {
        planNumber: plan.planName,
        mainType: Final_MainType,
        subType: Final_SubTypeType
    }


    // console.log(finalData, "this is data")

    // console.log(selectMainType, "_MainType -id")
    // console.log(selectSubType, "SubType -id")

    // console.log(Final_keyFeature, "Final Full Specs")
    // console.log(Final_Price, "Final Price")


    // console.log(planIncludeDesc, "Plan Include Desc")
    // console.log(Final_PlanInclude, "Plan Include")


    const submit = () => {

        const data = {
            "planNumber": finalData.planNumber,
            "pricing": Final_Price,
            "info": 'this is data',
            "mainType": finalData.mainType,
            "subType": finalData.subType,
            "planDiscription": {
                "info": planIncludeDesc,
                "planIncludes": Final_PlanInclude
            },
            "keyFeature": Final_keyFeature
        }

        // console.log(mulintimage, "interior image")
        // console.log(muleximage, "ex image")

        const formdata = new FormData()

        formdata.append('jsonData', JSON.stringify(data))

        for (let i = 0; i < mulintimage.length; i++) {
            formdata.append('interior', mulintimage[i])
        }
        for (let j = 0; j < muleximage.length; j++) {
            formdata.append('exterior', muleximage[j])
        }

        formdata.append('planNumber', finalData.planNumber)


        // const da = formdata.get('jsonData')

        // console.log(da)

        const header = {
            'Content-type': 'application/json',
            'Content-Type': 'multipart/form-data',
            'Access-Control-Allow-Origin': '*'
        }
        axios.patch("http://192.168.1.3:3005/plan/updatePlans", formdata, header)
            .then((res) => {
                console.log(res)
            }).catch((err) => {
                console.log(err)
            })


        // console.log(data)
    }

    useEffect(() => {
        // setSelectMainType(props.data.mainType)
        // setSelectSubType(props.data.subType)
        setPlan({
            planName: props.data.planNumber
        })
        setPlanIncludeDesc(props.data.planDiscription?.info)

    }, [props])


    if (getMainTypes.dataIsLoaded === true
        && getSubTypes.dataIsLoaded === true
        && getMainSpecs.dataIsLoaded === true
        && getSubSpecs.dataIsLoaded === true
        && getPriceTitle.dataIsLoaded === true
        && getPriceValue.dataIsLoaded === true) {
        return (
            <>
                <div className="container">
                    <div className="card card_radius">
                        <div className="col-md-12">
                            <div className="row">
                                <div className="col-md-5">
                                    <div className="mb-4"><b>BASIC DETAILS</b></div>

                                    <div className="mb-4">MainType/SubType <i className=' ml-3 bx bxs-edit-alt' onClick={() => setIfEditMainType(!ifEditMainType)}></i></div>

                                    {
                                        ifEditMainType === true
                                            ? <>
                                                <select className="form-control col-md-12 form-control-sm mt-2 mb-5" onChange={(e) => setSelectMainType(e.target.value)} required>
                                                    <option value="" >Select Main Type</option>
                                                    {
                                                        getMainTypes.mainTypes.map((val, ind) => {
                                                            return (
                                                                <option key={ind} value={val._id}>{val.name}</option>
                                                            )
                                                        })
                                                    }
                                                </select>

                                                <select className="form-control col-md-12 form-control-sm mt-2 mb-5" onChange={(e) => setSelectSubType(e.target.value)} required >
                                                    <option defaultValue>Select Sub Type</option>
                                                    {
                                                        getSubTypes.subTypes.map((data, ind) => {
                                                            return (
                                                                selectMainType === "All" ? '' : selectMainType === data.mainType ?
                                                                    <option key={ind} value={data._id}>{data.name}</option>
                                                                    : ''
                                                            )
                                                        })
                                                    }
                                                </select>
                                            </>
                                            : <>
                                                <div className="alert alert-success row" role="alert">
                                                    <div>MainType : </div>
                                                    {
                                                        getMainTypes.mainTypes.map((dataa, ind) => {
                                                            if (data.mainType == dataa._id) {
                                                                return (
                                                                    <b> &nbsp;{dataa.name}</b>
                                                                )
                                                            }
                                                        })
                                                    }
                                                </div>
                                                <div className="alert alert-success row mb-5" role="alert">
                                                    <div>SubType : </div>
                                                    {
                                                        getSubTypes.subTypes.map((dataa, ind) => {
                                                            if (data.subType == dataa._id) {
                                                                return (
                                                                    <b> &nbsp;{dataa.name}</b>
                                                                )
                                                            }
                                                        })
                                                    }
                                                </div>
                                            </>
                                    }


                                    <label>Plan Name</label>
                                    <input
                                        type="text"
                                        id=""
                                        name="planName"
                                        className="form-control"
                                        defaultValue={plan.planName}
                                        onChange={handlePlan}
                                    />

                                    <label className='mt-4'>Plan Description</label>
                                    <textarea
                                        rows="2"
                                        id=""
                                        name="planInfo"
                                        className="form-control"
                                        defaultValue=""
                                    // onChange={handlePlan}
                                    ></textarea>

                                </div>
                                <div className="col-md-7"></div>
                            </div>


                            <hr className="mt-5 mb-5" />



                            {/* Full Specs & Features */}
                            <div className="mb-4 mt-5 ">
                                <b>FULL SPECS & FEATURES</b>
                                <i className=' ml-3 bx bxs-edit-alt' onClick={() => setIfEdit(!ifEdit)}></i>
                                {
                                    ifEdit === true
                                        ? <div className="row mt-5 ml-0">
                                            <div className="col-md-4">
                                                <form onSubmit={handleSubmit} id="subSpecsForm">
                                                    <div className="row">
                                                        <select className="form-control col-md-8 form-control-sm mt-2" onChange={(e) => setSelectMainSpecs(e.target.value)} >
                                                            <option defaultValue>Select Main Specs</option>
                                                            {
                                                                getMainSpecs.mainSpecs.map((val, ind) => {
                                                                    if (selectArr.includes(val._id)) {

                                                                    }
                                                                    else {
                                                                        return (
                                                                            <option key={ind} value={val._id}>{val.name}</option>
                                                                        )
                                                                    }
                                                                })

                                                            }
                                                        </select>
                                                        <div className="col-md-3">
                                                            <button className="btn btn-save"> Add</button>
                                                        </div>
                                                    </div>
                                                    {

                                                        getSubSpecs.subSpecs.map((data, ind) => {
                                                            return (
                                                                selectMainSpecs === "All" ? '' : selectMainSpecs === data.mainSpec ?
                                                                    <div key={ind}>
                                                                        <label className="mt-3" >{data.name}</label>
                                                                        <input
                                                                            type="text"
                                                                            id={data._id}
                                                                            name={data.name}
                                                                            className="form-control formclear"
                                                                            onChange={handleChange}
                                                                        />
                                                                    </div>
                                                                    : ""
                                                            )
                                                        })

                                                    }
                                                </form>
                                            </div>
                                            <div className="col-md-2"></div>
                                            <div className="col-md-6">
                                                {
                                                    finalSubSpecsData.map((data) => {
                                                        const keys = Object.keys(data.subSpecs)
                                                        const values = Object.values(data.subSpecs)
                                                        return (
                                                            <div className="row">
                                                                <div className="alert alert-success col-md-12" role="alert">
                                                                    <div className="row">
                                                                        <div className="col-md-4">
                                                                            {
                                                                                getMainSpecs.mainSpecs.map((dataMainSpecs, key) => { // This map function used for match data based on id and return Name of mainSpecs
                                                                                    return (
                                                                                        dataMainSpecs._id === data.mainSpec ?
                                                                                            <div key={key + 1}>
                                                                                                <b>mainSpec</b> : <br /><br />{dataMainSpecs.name}
                                                                                            </div> : ''
                                                                                    )
                                                                                })
                                                                            }
                                                                        </div>

                                                                        <div className="col-md-7">
                                                                            <b>SubSpecs</b> <br /><br />
                                                                            <div className="col-md-12">
                                                                                {/* Display MainSpecs and SubSpecs Name and values */}
                                                                                {
                                                                                    values.map((item, index) => {
                                                                                        if (values[index].value === "") {
                                                                                        }
                                                                                        return (
                                                                                            <div className="mb-2" key={index}>
                                                                                                {
                                                                                                    getSubSpecs.subSpecs.map((dataSubSpecs, ind) => {
                                                                                                        if (dataSubSpecs._id === values[index].subSpec) {
                                                                                                            return (
                                                                                                                <b key={ind}>{dataSubSpecs.name}</b>
                                                                                                            )
                                                                                                        }
                                                                                                    })
                                                                                                }
                                                                                                :
                                                                                                &nbsp;{values[index].value}
                                                                                            </div>
                                                                                        )
                                                                                    })
                                                                                }
                                                                            </div>
                                                                        </div>

                                                                        <div className="col-md-1">
                                                                            <i className='bx bx-x bx-sm text-danger' removesubspecs={data.mainSpec}
                                                                                onClick={removeSubSpecsData} ></i>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        )

                                                    })
                                                }
                                            </div>
                                        </div>
                                        : <div className="row mt-5 ml-0">
                                            {
                                                data.keyFeature.map((data) => {
                                                    const keys = Object.keys(data.subSpecs)
                                                    const values = Object.values(data.subSpecs)
                                                    return (
                                                        <div className="col-6">
                                                            <div className="alert alert-success col-md-12" role="alert">
                                                                <div className="row">
                                                                    <div className="col-md-4">
                                                                        {
                                                                            getMainSpecs.mainSpecs.map((dataMainSpecs, key) => { // This map function used for match data based on id and return Name of mainSpecs
                                                                                return (
                                                                                    dataMainSpecs._id === data.mainSpecs._id ?
                                                                                        <div key={key + 1}>
                                                                                            <b>mainSpec</b> : <br /><br />{dataMainSpecs.name}
                                                                                        </div> : ''
                                                                                )
                                                                            })
                                                                        }
                                                                    </div>

                                                                    <div className="col-md-7">
                                                                        <b>SubSpecs</b> <br /><br />
                                                                        <div className="col-md-12">
                                                                            {/* Display MainSpecs and SubSpecs Name and values */}
                                                                            {
                                                                                values.map((item, index) => {
                                                                                    if (values[index].value !== "") {
                                                                                        return (
                                                                                            <div className="mb-2" key={index}>
                                                                                                {
                                                                                                    getSubSpecs.subSpecs.map((dataSubSpecs, ind) => {
                                                                                                        if (dataSubSpecs._id === values[index].subSpec._id) {
                                                                                                            return (
                                                                                                                <b key={ind}>{dataSubSpecs.name}</b>
                                                                                                            )
                                                                                                        }
                                                                                                    })
                                                                                                }
                                                                                                :
                                                                                                &nbsp;{values[index].value}
                                                                                            </div>
                                                                                        )
                                                                                    }

                                                                                })
                                                                            }
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    )

                                                })
                                            }
                                        </div>

                                }
                            </div>


                            <hr className="mt-5 mb-5" />

                            {/* Price & Title */}
                            <div className="mb-4">
                                <b>PRICES & TITLE</b>
                                <i className=' ml-3 bx bxs-edit-alt' onClick={() => setIfEditPrice(!ifEditPrice)}></i>
                            </div>

                            {
                                ifEditPrice === true
                                    ? <div className="row mb-5">
                                        <div className="col-md-4">
                                            <form onSubmit={handlePrice} id="subPriceForm">
                                                <div className="row">
                                                    <select className="form-control col-md-8 form-control-sm mt-2" onChange={(e) => setSelectPriceTitle(e.target.value)} >
                                                        <option defaultValue>Select Price Title</option>
                                                        {
                                                            getPriceTitle.priceTitle.map((val, ind) => {
                                                                if (selectFinalPriceArr.includes(val._id)) {

                                                                }
                                                                else {
                                                                    return (
                                                                        <option key={ind} value={val._id}>{val.name}</option>
                                                                    )
                                                                }
                                                            })

                                                        }
                                                    </select>
                                                    <div className="col-md-3">
                                                        <button className="btn btn-save">Add</button>
                                                    </div>
                                                </div>
                                                {

                                                    getPriceValue.priceValue.map((data, ind) => {
                                                        return (
                                                            selectPriceTitle === "All" ? '' : selectPriceTitle === data.priceTitle ?
                                                                <div key={ind}>
                                                                    <label className="mt-3" >{data.name}</label>
                                                                    <input
                                                                        type="number"
                                                                        id={data._id}
                                                                        name={data.name}
                                                                        className="form-control formclear"
                                                                        onChange={handlePriceChange}
                                                                    />
                                                                </div>
                                                                : ""
                                                        )
                                                    })

                                                }
                                            </form>
                                        </div>
                                        <div className="col-md-2"></div>
                                        <div className="col-md-6">
                                            {
                                                finalPriceData.map((data) => {
                                                    {/* console.log(data, "sdsdsdfsdfsdfsdfsdfsdfdf......") */ }
                                                    const keys = Object.keys(data.priceTitle)
                                                    const values = Object.values(data.subPrice)
                                                    {/* console.log(values, "this is values item") */ }
                                                    return (
                                                        <div className="row">
                                                            <div className="alert alert-success col-md-12" role="alert">
                                                                <div className="row">
                                                                    <div className="col-md-4">
                                                                        {
                                                                            getPriceTitle.priceTitle.map((dataPriceTitle, key) => { // This map function used for match data based on id and return Name of mainSpecs
                                                                                {/* console.log("sdasdaadas", dataPriceTitle) */ }
                                                                                return (
                                                                                    dataPriceTitle._id === data.priceTitle ?
                                                                                        <div key={key + 1}>
                                                                                            <b>Price Title</b> : <br /><br />{dataPriceTitle.name}
                                                                                        </div> : ''
                                                                                )
                                                                            })
                                                                        }
                                                                    </div>

                                                                    <div className="col-md-7">
                                                                        <b>Price Value</b> <br /><br />
                                                                        <div className="col-md-12">
                                                                            {/* Display MainSpecs and SubSpecs Name and values */}
                                                                            {
                                                                                values.map((item, index) => {

                                                                                    if (values[index].value === "") {
                                                                                    }
                                                                                    return (
                                                                                        <div className="mb-2" key={index}>
                                                                                            {
                                                                                                getPriceValue.priceValue.map((dataPriceValue, ind) => {
                                                                                                    if (dataPriceValue._id === values[index]._id) {
                                                                                                        return (
                                                                                                            <b key={ind}>{dataPriceValue.name}</b>
                                                                                                        )
                                                                                                    }
                                                                                                })
                                                                                            }
                                                                                            :
                                                                                            &nbsp;{values[index].value} ₹
                                                                                        </div>
                                                                                    )
                                                                                })
                                                                            }
                                                                        </div>
                                                                    </div>

                                                                    <div className="col-md-1">
                                                                        <i className='bx bx-x bx-sm text-danger' removeprice={data.priceTitle}
                                                                            onClick={removePriceTitle} ></i>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    )

                                                })
                                            }
                                        </div>
                                    </div>
                                    : <div className="row mt-5 ml-0">
                                        {
                                            data.pricing.map((data) => {
                                                {/* console.log(data, "sdsdsdfsdfsdfsdfsdfsdfdf......") */ }
                                                const keys = Object.keys(data.priceTitle)
                                                const values = Object.values(data.subPrice)
                                                {/* console.log(values, "this is values item") */ }
                                                return (
                                                    <div className="col-6">
                                                        <div className="alert alert-success col-md-12" role="alert">
                                                            <div className="row">
                                                                <div className="col-md-4">
                                                                    {
                                                                        getPriceTitle.priceTitle.map((dataPriceTitle, key) => { // This map function used for match data based on id and return Name of mainSpecs
                                                                            {/* console.log("sdasdaadas", dataPriceTitle) */ }
                                                                            return (
                                                                                dataPriceTitle._id === data.priceTitle._id ?
                                                                                    <div key={key + 1}>
                                                                                        <b>Price Title</b> : <br /><br />{dataPriceTitle.name}
                                                                                    </div> : ''
                                                                            )
                                                                        })
                                                                    }
                                                                </div>

                                                                <div className="col-md-7">
                                                                    <b>Price Value</b> <br /><br />
                                                                    <div className="col-md-12">
                                                                        {/* Display MainSpecs and SubSpecs Name and values */}
                                                                        {
                                                                            values.map((item, index) => {

                                                                                if (values[index].value === "") {
                                                                                }
                                                                                return (
                                                                                    <div className="mb-2" key={index}>
                                                                                        {
                                                                                            getPriceValue.priceValue.map((dataPriceValue, ind) => {
                                                                                                if (dataPriceValue._id === values[index]._id._id) {
                                                                                                    return (
                                                                                                        <b key={ind}>{dataPriceValue.name}</b>
                                                                                                    )
                                                                                                }
                                                                                            })
                                                                                        }
                                                                                        :
                                                                                        &nbsp;{values[index].value} ₹
                                                                                    </div>
                                                                                )
                                                                            })
                                                                        }
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                )

                                            })
                                        }
                                    </div>
                            }
                        </div>

                        <hr className="mt-5 mb-5" />

                        <div>
                            <div className="mb-4"><b>PLAN INCLUDE</b></div>
                            <div className="row mb-5 mt-5">
                                <div className="col-md-4">
                                    <div className="form-group">
                                        <label>Description (note)</label>
                                        <textarea
                                            rows="2"
                                            id=""
                                            name="planInfo"
                                            className="form-control"
                                            defaultValue={planIncludeDesc}
                                            onChange={e => setPlanIncludeDesc(e.target.value)}
                                        ></textarea>
                                    </div>
                                </div>
                                <div className="col-md-8"></div>
                            </div>
                            <div className="mb-4"><b>INCLUDES</b>
                                <i className=' ml-3 bx bxs-edit-alt' onClick={() => setIfEditPlanInclude(!ifEditPlanInclude)}></i>
                            </div>
                            {
                                ifEditPlanInclude === true
                                    ? <div className="row">
                                        <div className="col-md-4">
                                            <div className="form-group">
                                                <form id="formPlanInclude" onSubmit={addPlanInclude}>
                                                    <label>Name</label>
                                                    <input
                                                        type="text"
                                                        name="heading"
                                                        className="form-control mb-3"
                                                        onChange={handlePlanInclude}
                                                    />

                                                    <label>Description</label>
                                                    <textarea
                                                        name="info"
                                                        className="form-control mb-3"
                                                        onChange={handlePlanInclude}
                                                    ></textarea>
                                                    <button className="btn btn-save" >Add</button>
                                                </form>
                                            </div>
                                        </div>
                                        <div className="col-md-2"></div>
                                        <div className="col-md-6">
                                            {
                                                planIncludeData.map((data, index) => {
                                                    const { heading, info } = data
                                                    return (
                                                        <div className="row" key={index}>
                                                            <div className="alert alert-success col-md-12" role="alert">
                                                                <div className="row">
                                                                    <div className="col-md-5"><b>Heading Name</b> : {heading}</div>
                                                                    <div className="col-md-6"><b>Description</b> : {info} </div>
                                                                    <div className="col-md-1">
                                                                        <i className='bx bx-x bx-sm text-danger' removeplaninclude={heading}
                                                                            onClick={removePlanIncludeData}></i>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    )
                                                })
                                            }
                                        </div>
                                    </div>
                                    : <div className="row">
                                        {
                                            data.planDiscription.planIncludes.map((data, index) => {
                                                const { heading, info } = data
                                                return (
                                                    <div className="col-12">
                                                        <div className="row m-0" key={index}>
                                                            <div className="alert alert-success col-md-12" role="alert">
                                                                <div className="row">
                                                                    <div className="col-md-6"><b>Heading Name</b> : {heading}</div>
                                                                    <div className="col-md-6"><b>Description</b> : {info} </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                )
                                            })
                                        }
                                    </div>
                            }
                        </div>




                        <hr className="mt-5 mb-5" />


                        <div className="mb-4">
                            <b>IMAGES</b>
                            <i className=' ml-3 bx bxs-edit-alt' onClick={() => setIfEditImg(!ifEditImg)}></i>
                        </div>

                        {
                            ifEditImg === true
                                ? <>
                                    <label className='mb-4'>Image for Interior Design</label>
                                    <div className="form-row mb-4">
                                        <div className="post_upload_img_admin mr-2 mb-2">
                                            <input type="file" id="upload_int" accept="image/*" onChange={e => setmulintImage(e.target.files)} hidden multiple />
                                            <label htmlFor="upload_int">
                                                <i className="bx bx-image-add"></i>
                                            </label>
                                            &nbsp; {mulintimage.length} Photo Selected
                                        </div>
                                    </div>

                                    <label className='mt-4'>Image for Exterior Design</label>
                                    <div className="form-row mb-4">
                                        <div className="post_upload_img_admin mr-2 mb-2">
                                            <input type="file" id="upload_ex" accept="image/*" onChange={e => setmulexImage(e.target.files)} hidden multiple />
                                            <label htmlFor="upload_ex">
                                                <i className="bx bx-image-add"></i>
                                            </label>
                                            &nbsp; {muleximage.length} Photo Selected
                                        </div>
                                    </div>
                                </>
                                : <>
                                    <label className='mb-4 mt-5'>Image for Interior Design</label>
                                    <div className="row">
                                        {
                                            data.image.interior.map((url) => {
                                                return (
                                                    <div className="col-3 mb-3">
                                                        <img src={`https://d2sxpk1n4exfl4.cloudfront.net${url}`} className="img-fluid" />
                                                    </div>
                                                )
                                            })
                                        }
                                    </div>
                                    <label className='mb-4 mt-5'>Image for Exterior Design</label>
                                    <div className="row">
                                        {
                                            data.image.exterior.map((url) => {
                                                return (
                                                    <div className="col-3 mb-3">
                                                        <img src={`https://d2sxpk1n4exfl4.cloudfront.net${url}`} className="img-fluid" />
                                                    </div>
                                                )
                                            })
                                        }
                                    </div>


                                </>
                        }
                    </div>
                    <div className="row">
                        <button className="btn btn-save mt-5 mr-3" onClick={() => submit()}>Edit Plan</button>
                        <button className="btn btn-save mt-5">Create Duplicate</button>
                    </div>
                </div>

            </>
        )
    }

}
export default EditPostBody