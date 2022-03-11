import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';


const Season = ({season, onDelete}) =>  
    <Card style={{ width: '18rem' }}>
        <Card.Body>
            <Card.Title>{season.name}</Card.Title>
            <Card.Text>{season.year}</Card.Text>
            <Button variant="primary" onClick={onDelete}>Eliminar</Button>
        </Card.Body>
    </Card>
    
    // <div>
    //     <input type="checkbox"></input>
    //     <p className="team">{bdwinner.team}</p>
    //     <p className="bdwinner">{bdwinner.season}</p>
    //     <Button variant="primary" onClick={onDelete}>Eliminar</Button>
    // </div>

export default Season;