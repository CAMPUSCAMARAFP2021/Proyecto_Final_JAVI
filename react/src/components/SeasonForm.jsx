import { useState } from "react";
import Button from './Button';
import "react-datepicker/dist/react-datepicker.css";

const SeasonForm = ({createSeason}) => {
    const [season, setSeason] = useState(
        {
           
            "year": "",
            
        }
    );

    const setBdwinner = ({target}) => {
        const bdwinner = target.value;
        setSeason( lastValue => ({...lastValue, bdwinner}))
    }

    const setYear = ({target}) => {
        const year = target.value;
        setSeason( lastValue => ({...lastValue, year}))
    }

    return <>
        <form>
            <input type="text" name="year" onChange={setYear} value={season.year}></input>
        </form>
        <Button name="enviar" onClick={() => createSeason(season)}></Button>
        <div> 
            {JSON.stringify(season)}
        </div>
    </>;
}

export default SeasonForm;