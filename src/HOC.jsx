import { useEffect, useState } from "react"

export const withEffect = (Component) => {
    const WithEffect = (props) => {
        const [val, setVal] = useState('Im from HOC ')
        useEffect(() => {
            console.log(`useEffect from HOC ${props.value}`)
        }, [])
        return <Component {...props} hocValue={val}/>
    }
    return WithEffect;
}