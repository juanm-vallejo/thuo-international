import React from 'react'
import {Container, Row } from 'react-bootstrap';

/*Css*/
import '../styles/footer.css'

import "bootstrap/dist/css/bootstrap.min.css"
import {Link} from "react-router-dom"


function Footer(){
    return (
        <Container>
          <footer class="pt-4 my-md-5 pt-md-5 border-top">
                <Row>
                    <div class="col-12 col-md justify-content-center">
                        <h3 className="h3-foot" style={{fontFamily:'Miama'}}>Thuo International</h3>
                        <small class="d-block mb-3 text-muted">Forging Connections that Matter <br></br>2016-2023</small>
                    </div>
                        <div class="col-6 col-md">
                            <Link to="about" className="nav-link-fo">About Us</Link>
                            
                        </div>
                        <div class="col-6 col-md">
                            <Link to="services" className="nav-link-fo">Services</Link>
                        </div>
                        <div class="col-6 col-md">
                            <Link to="Contact" className="nav-link-fo">Contact</Link>
                        </div>
                </Row>
            </footer>
        </Container>
    );
  };
  
  export default Footer;