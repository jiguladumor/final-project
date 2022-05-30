import React from 'react';
import {
    Card, Button, CardImg, CardTitle, CardText, CardColumns,
    CardSubtitle, CardBody
} from 'reactstrap';

function Clothing({details}) {
    return (
        details.map ((d,i)=>
        <Card>
        <CardBody>
            <CardTitle>{d.name}</CardTitle>
            <CardSubtitle>{d.price}</CardSubtitle>
            <CardSubtitle>{d.size}</CardSubtitle>
            <Button>Button</Button>
        </CardBody>
    </Card>
        
        )
           
        
    );
}

export default Clothing;