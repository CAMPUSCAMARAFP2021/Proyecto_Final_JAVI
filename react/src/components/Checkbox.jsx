import { useState } from "react"

const Checkbox = ({checked}) => {
    const [isChecked, setIsChecked] = useState(checked);
    const handler = () => {
        console.log("Se ha pulsado :)")
    setIsChecked (previous => !previous)
    } 
    return <input type="checkbox" onChange={handler}></input>
};

export default Checkbox;