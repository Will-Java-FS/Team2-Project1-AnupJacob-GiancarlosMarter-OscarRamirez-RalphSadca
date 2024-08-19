import Item from "../components/item.tsx";
import {useState, useEffect} from 'react';
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.css';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';

const Itempage=()=>{

    const [item, setItem] = useState('');

    const getData = async () => {
        const response = await axios.get("http://localhost:8080/products");
        setItem(response.data);
    }

    useEffect(() => {
        getData();
      }, []);

    return(
        <>
        <Container>
            <Row>
               {
               item && item.map && item.map((item, index) => (
                     <Item index={index} product_id={item.product_id} title={item.title} description={item.description} price={item.price} category={item.category.name}/>
               ))
               }
            </Row>
         </Container>
        </>
    )
}
export default Itempage