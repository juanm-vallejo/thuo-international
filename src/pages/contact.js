import React from 'react';

/* Assets */
import usFlag from '../assets/img/us-flag.jpg'
import euFlag from '../assets/img/eu-flag.jpg'

/*Bootstrap */
import { Container, Image, Row} from 'react-bootstrap';
import "bootstrap/dist/css/bootstrap.min.css"

/*Css */
import '../styles/contact.css'


function Contact () {
    return (
        <Container>
            <h1 className='mont-bold'>Contact us: </h1>
            <h5 className='mont-semi-bold'>We belive in a personal contact. Here you will find our email and phone number:</h5>
            <Row className='d-flex align-items-center'>
                <div className='col-6'>
                    <ul className='no-bullets'>
                        <li className='mont-semi-bold' >US department email:</li>
                        <li className='mont-reg'>admin@thuointernational.com</li>
                        <li className='mont-reg'></li>
                    </ul>
                </div>
                <div className='col-6'>
                    <ul className='flag-container'>
                        <Image src={usFlag} style={{ maxHeight: '200px' }} />
                    </ul>
                </div>
            </Row>
            <Row className='d-flex align-items-center'>
                <div className='col-6'>
                    <ul className='no-bullets'>
                        <li className='mont-semi-bold'>EU department email and phone:</li>
                        <li className='mont-reg'>europe@thuointernational.com</li>
                        <li className='mont-reg'>+45 91 88 75 27</li>
                    </ul>
                </div>
                <div className='col-6'>
                    <ul className='flag-container'>
                        <Image src={euFlag} style={{ maxHeight: '200px' }} />
                    </ul>
                </div>
            </Row>
        </Container>
                    )
    }

    export default Contact