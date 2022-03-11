import Season from "./Season";
import SeasonForm from './SeasonForm';

import { useState, useEffect } from 'react';
import { getSeasons, createSeason, deleteSeason} from "../api/seasons";



const SeasonList = ({jwt}) => {
    const [seasons, setSeasons] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    

    const doCreateSeason = (Season, jwt) => {
        setIsLoading(true);
        createSeason(Season)
            .then((newSeason) => {
                 setSeasons((prevState) => [...prevState, newSeason]);
                 setIsLoading(false);       
            }); 
    };
    const doDeleteSeason = (Season, jwt) => {
        setIsLoading(true);
        deleteSeason(Season)
        .then(loadData);
    };
    const loadData = () => {
        setIsLoading(true);
        getSeasons(jwt).then((seasons) => {    
            setIsLoading(false);
            setSeasons(seasons);
        }).catch(() => setIsLoading(false));
    }
    useEffect(loadData,[]); 
    
   
    
    return <>
        {isLoading ? 
            <p>cargando...</p> : 
            seasons.map(season => 
                <Season 
                    key={season._id} 
                    season={season} 
                    onDelete={() => doDeleteSeason(season)}
                />)}
        <SeasonForm createSeason={doCreateSeason}></SeasonForm>
    </>

}
    

export default SeasonList;