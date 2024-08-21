import ListGroup from 'react-bootstrap/ListGroup';
import CloseButton from 'react-bootstrap/CloseButton';
import Card from 'react-bootstrap/Card';
import Image from 'react-bootstrap/Image';
import axios from 'axios';

export default function CartItem(props: {cart_item_id:number, title:string, price:number, quantity:number, image_url:string, deleteCartItem:Function} ) {

    function handleRemoveCartItem() {
        props.deleteCartItem(props.cart_item_id);
    }

    return (
        <>
            <Card style={{ width: '15rem', margin:'.15rem', height:'25rem'}}>
                <Card.Body>
                    <Image src={props.image_url} fluid rounded/>
                </Card.Body>
                <Card.Body>
                    <Card.Title>{props.title}</Card.Title>
                    <Card.Text>description</Card.Text>
                </Card.Body>
                <ListGroup className="list-group-flush">
                    <ListGroup.Item>Total Price: ${props.price * props.quantity}</ListGroup.Item>
                    <ListGroup.Item>Quantity: {props.quantity}</ListGroup.Item>
                </ListGroup>
                <Card.Body>
                    <Card.Text><CloseButton onClick={handleRemoveCartItem} style={{backgroundColor: 'rgba(255, 100, 100, 0.85)'}}/> Remove from Cart</Card.Text>
                </Card.Body>
            </Card> 
        </>
    )
}