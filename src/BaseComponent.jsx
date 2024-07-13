import { useEffect } from "react"

const BaseComponent = (props) => {

    useEffect(() => {
        console.log(`I'm mounted ${props.value}`)
    }, [])

    return (
        <div className="base-component">
            <h1>Base Component</h1>
        </div>
    )
}

export default BaseComponent