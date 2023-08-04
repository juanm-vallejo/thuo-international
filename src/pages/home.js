
import React from 'react';

/*Media*/ 
import HomeVid from "../assets/vid/video.mp4";
import ExportImg from "../assets/img/export.png";
import DistribImg from "../assets/img/distribution.png";
import MarketImg from "../assets/img/market-analysis.png";
import globalImg from  "../assets/img/consulting.png";
import endImg from  "../assets/img/sea-sunset.jpg";


/*Css*/
import '../styles/Home.css'

/*Bootstrap*/
import { Card, Container, Col, Row, Image} from 'react-bootstrap';
import "bootstrap/dist/css/bootstrap.min.css"


function Home () {
    return (
        <section>
            <div>
                <div className="video-background videoWrapper ">
                    <video className="" src={HomeVid} autoPlay={true} loop="true" muted={true}></video>
                </div> 
            </div>

            <div className="container mt-4">
                <div className="pt-4 pb-4">
                <h1 className='miama'>Thuo International</h1>
                </div>
                <h3 className='mont-bold'>A global trading distribution and consulting company</h3>
                <p className='mont-reg'>Established to actively engage in the import-export industry. We provide a reliable platform
                to facilitate the seamless delivery of superior products worldwide. As an import-export enterprise,
                our primary focus is to deliver tangible services to exporters and importers dedicated to global
                commodity supply. We foster equitable relationships with producers, farmers, wholesalers, importers,
                and other stakeholders to swiftly establish a robust international presence in the realm of trade.
                Our ultimate objective, as an import-export firm, is to bridge the divide in the global market between
                buyers and sellers. To ensure top-notch merchandise quality, customer satisfaction, and foster customer
                loyalty, we pledge support from competent consultants.</p>
            </div>
            <Container>
                <h2 className="pt-3 mont-bold">Our Services:</h2>
                <Row className='justify-content-center'>
                    <Col xs={12} sm={6} md={4}>
                        <Card className='text-center my-4'>
                            <Card.Img src={ExportImg} variant='top' className='home-img mx-auto' alt="Import-Export img" />
                            <Card.Body>
                            <Card.Title>Import Export</Card.Title>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col xs={12} sm={6} md={4}>
                        <Card className='text-center my-4'>
                            <Card.Img src={DistribImg} variant='top' className='home-img mx-auto' alt="Import-Export img" />
                            <Card.Body>
                            <Card.Title>Distribution</Card.Title>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col xs={12} sm={6} md={4}>
                        <Card className='text-center my-4'>
                            <Card.Img src={MarketImg} variant='top' className='home-img mx-auto' alt="Import-Export img" />
                            <Card.Body>
                            <Card.Title>Market Analysis</Card.Title>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col xs={12} sm={6} md={4}>
                        <Card className='text-center my-4'>
                            <Card.Img src={globalImg} variant='top' className='home-img mx-auto' alt="Import-Export img" />
                            <Card.Body>
                            <Card.Title>International Consulting</Card.Title>
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>
                <hr></hr>
            </Container>

            <section>
                <div className="imgWrapper pt-5 pb-5" style={{backgroundImage: `url(${endImg})`}}>
                    <p className="container lead text-center text-white p">As an international trading company, we are dedicated to providing comprehensive 
                        support to importers and exporters who may find themselves overwhelmed by the complex 
                        landscape of global business. We understand that navigating through numerous requirements 
                        and fragmented information sources can be daunting for newcomers in the industry. Therefore, 
                        we offer expert consultancy services covering all aspects of import and export operations. 
                        Our guidance encompasses supplier selection, contract negotiation, favorable delivery terms, 
                        carrier and route selection, customs clearance, storage and distribution, and other relevant 
                        areas crucial to your business success. We recognize that entering the world of importing and 
                        exporting can be challenging, often discouraging and causing many to abandon their endeavors prematurely. 
                        By choosing Thuo International as your trusted partner, you gain access to a wealth of knowledge and 
                        resources, enabling you to efficiently ship your products worldwide.</p>
                </div>
            </section>
        </section>        
    );
}

export default Home;