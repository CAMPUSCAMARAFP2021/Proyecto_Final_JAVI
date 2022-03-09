import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';


const Bdwinner = ({bdwinner, onDelete}) =>  
    <Card style={{ width: '18rem' }}>
        <Card.Body>
            <Card.Name>{bdwinner.name}</Card.Name>
            <Card.Team>{bdwinner.team}</Card.Team>
            <Card.Year>{bdwinner.year}</Card.Year>
            <Button variant="primary" onClick={onDelete}>Eliminar</Button>
        </Card.Body>
    </Card>


    // <div>
    //     <input type="checkbox"></input>
    //     <p className="team">{bdwinner.team}</p>
    //     <p className="bdwinner">{bdwinner.season}</p>
    //     <Button variant="primary" onClick={onDelete}>Eliminar</Button>
    // </div>

export default Bdwinner;