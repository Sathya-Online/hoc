import { useEffect } from "react";



const SmallComponent = (props) => {


    useEffect(() => {
        console.log(`I'm mounted ${props.value}`)
        console.log(`HOC value is ${props.hocValue}`)
    }, [])

    return (
        <div className="small-component">
            <h1>SmallComponent</h1>
        </div>
    )
}

export default SmallComponent;