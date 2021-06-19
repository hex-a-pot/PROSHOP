import { Row, Col,Jumbotron,Button,Container } from 'react-bootstrap';
import {listProducts} from '../actions/productActions.js' 
import {useDispatch, useSelector} from 'react-redux'
import { useEffect } from 'react';
import Product from './Product.js'

import Loader from '../components/Loader.js'
import Message from '../components/Message.js'

const HomeScreen = () => {

    const dispatch = useDispatch() 

    const productList  = useSelector(state=>state.productList)

    const {loading,error,products} = productList

    useEffect(()=>{

        dispatch(listProducts())

    },[dispatch])

   

    return ( 
        <>
        
        <Jumbotron fluid>
        <h1 className = 'p-3 text-center'> Latest products</h1>
        <p className = 'my-3 p-3 text-center' >
        Your one and only solution for all the shopping related dilemma
        </p>
        <Container className = 'row justify-content-center'>
            <Button variant="info">Learn more</Button>
        </Container>
        </Jumbotron>

        {loading?<Loader />:error ? <Message variant = 'danger'>{error}</Message>:
        
        <Row>
            {products.map(product=>(
                <Col key = {product._id} sm={12} md={6} lg={4} >
                    <Product product ={product} />
                </Col>
            ))}

        </Row>

        }
        </>
     );
}
 
export default HomeScreen;