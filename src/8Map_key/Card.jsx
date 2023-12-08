import React from 'react'
import { Button,
    Card,
    CardBody,
    CardText,
    CardTitle, } from 'reactstrap'
    

export default function Cards(props) {
    return (
        <>
            <Card style={{width: '18rem'}}>
                <img alt="Sample" style={{ height: "300px" }} src={props.data.img}/>
                <CardBody>
                    <CardTitle tag="h5">{props.data.title}</CardTitle>
                    <CardText>
                        {props.data.dec}
                    </CardText>
                    <Button className='btn btn-primary'>
                        Buy Now
                    </Button>
                </CardBody>
            </Card>
        </>
    )
}
