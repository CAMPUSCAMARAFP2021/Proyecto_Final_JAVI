import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

const Bdwinner = ({bdwinner, onDelete}) =>  
    <Card style={{ width: '18rem' }}>
        <Card.Body>
            <Card.Title>{bdwinner.name}</Card.Title>
            <Card.Text>{bdwinner.team}</Card.Text>
            <Card.Text>{bdwinner.year}</Card.Text>
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