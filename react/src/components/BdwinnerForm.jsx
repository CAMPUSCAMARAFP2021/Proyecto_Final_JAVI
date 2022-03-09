import { useState } from "react";
import Button from './Button';
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

const BdwinnerForm = ({createBdwinner}) => {
    const [bdwinner, setBdwinner] = useState(
        {
            "name": "",
            "team": "",
            "season": "",
            "year": "",
        }
    );

    const setName = ({target}) => {
        const name = target.value;
        setBdwinner( lastValue => ({...lastValue, name}))
    }

    const setSeason = ({target}) => {
        const season = target.value;
        setBdwinner( lastValue => ({...lastValue, season}))
    }

    const setTeam = ({target}) => {
        const team = target.value;
        setBdwinner( lastValue => ({...lastValue, team}))
    }

    const setYear = ({target}) => {
        const year = target.value;
        setBdwinner( lastValue => ({...lastValue, year}))
    }

    return <>
        <form>
            <input type="text" name="name" onChange={setName} value={bdwinner.name}></input>
            <input type="text" name="season" onChange={setSeason} value={bdwinner.season}></input>
            <input type="text" name="team" onChange={setTeam} value={bdwinner.team}></input>
            <input type="text" name="year" onChange={setYear} value={bdwinner.year}></input>
        </form>
        <Button name="enviar" onClick={() => createBdwinner(bdwinner)}></Button>
        <div> 
            {JSON.stringify(bdwinner)}
        </div>
    </>;
}

export default BdwinnerForm;