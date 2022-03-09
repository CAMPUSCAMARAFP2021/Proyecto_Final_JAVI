import Bdwinner from "./Bdwinner";
import BdwinnerForm from './BdwinnerForm';

import { useState, useEffect } from 'react';
import { getBdwinners, createBdwinner, deleteBdwinner} from "../api/bdwinners";



const BdwinnerList = ({jwt}) => {
    const [bdwinners, setBdwinners] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    

    const doCreateBdwinner = (Bdwinner, jwt) => {
        setIsLoading(true);
        createBdwinner(Bdwinner)
            .then((newBdwinner) => {
                 setBdwinners((prevState) => [...prevState, newBdwinner]);
                 setIsLoading(false);       
            }); 
    };
    const doDeleteBdwinner = (Bdwinner, jwt) => {
        setIsLoading(true);
        deleteBdwinner(Bdwinner)
        .then(loadData);
    };
    const loadData = () => {
        setIsLoading(true);
        getBdwinners(jwt).then((bdwinners) => {    
            setIsLoading(false);
            setBdwinners(bdwinners);
        }).catch(() => setIsLoading(false));
    }
    useEffect(loadData,[]); 
    
   
    
    return <>
        {isLoading ? 
            <p>cargando...</p> : 
            bdwinners.map(bdwinner => 
                <Bdwinner 
                    key={bdwinner._id} 
                    bdwinner={bdwinner} 
                    onDelete={() => doDeleteBdwinner(bdwinner)}
                />)}
        <BdwinnerForm createBdwinner={doCreateBdwinner}></BdwinnerForm>
    </>
        
}
    

export default BdwinnerList;