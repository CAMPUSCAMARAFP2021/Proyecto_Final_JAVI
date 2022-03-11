import { useState } from "react";
import Button from './Button';
import "react-datepicker/dist/react-datepicker.css";

const BdwinnerForm = ({createBdwinner}) => {
    const [bdwinner, setBdwinner] = useState(
        {
            "name": "",
            "team": "",
            "season": [],
        }
    );

    const setName = ({target}) => {
        const name = target.value;
        setBdwinner( lastValue => ({...lastValue, name}))
    }

    const setTeam = ({target}) => {
        const team = target.value;
        setBdwinner( lastValue => ({...lastValue, team}))
    }

    return <>
        <form>
            <input type="text" name="name" onChange={setName} value={bdwinner.name}></input>
            <input type="text" name="team" onChange={setTeam} value={bdwinner.team}></input>
        </form>
        <Button name="enviar" onClick={() => createBdwinner(bdwinner)}></Button>
        <div> 
            {JSON.stringify(bdwinner)}
        </div>
    </>;
}

export default BdwinnerForm;