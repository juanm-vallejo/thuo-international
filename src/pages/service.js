import React from 'react';

import '../styles/Services.css';

/*Assets*/
import ExportImg from "../assets/img/export.png";
import DistribImg from "../assets/img/distribution.png";
import MarketImg from "../assets/img/market-analysis.png";
import globalImg from  "../assets/img/consulting.png";
import ExportImport from "../assets/img/import-export.jpg";
import Distribution from "../assets/img/distribution.jpg";
import Market from "../assets/img/market-research.jpg";
import Consulting from "../assets/img/consulting.jpg";


import {Row, Container} from 'react-bootstrap';
import Carousel from 'react-bootstrap/Carousel';
import "bootstrap/dist/css/bootstrap.min.css";

function Service () {
    return (
        <section>
            <Carousel>
                <Carousel.Item>
                    <img
                    className="d-block w-100"
                    src={ExportImport}
                    alt="Export-Import"
                    />
                    <Carousel.Caption>
                    <h3>Export-Import</h3>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                    className="d-block w-100"
                    src={Distribution}
                    alt="Distribution"
                    />

                    <Carousel.Caption>
                    <h3>Distribution</h3>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                    className="d-block w-100"
                    src={Market}
                    alt="Market Research"
                    />

                    <Carousel.Caption>
                    <h3 className='text-black'>Market Research</h3>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                    className="d-block w-100"
                    src={Consulting}
                    alt="International Consulting"
                    />

                    <Carousel.Caption>
                    <h3 className='text-black'>Consulting</h3>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>

            <Container className="mt-5">
                <Row>
                    <div class="col-12 col-md-6 col-lg-auto mb-4">
                        <Row className='pb-5'>
                            <div class="col-md-4 text-center">
                                <img src={ExportImg} class="img-fluid img-services" alt="Image" />
                            </div>
                            <div class="col-md-6">
                                <h5 class="card-title mont-bold">Import Export</h5>
                                <p class="card-text mont-reg">We source and deliver top-quality food and commodities worldwide, 
                                connecting you to a vast network of suppliers. Our services cover multiple continents, 
                                meeting diverse market demand. With expertise in international trade regulations and 
                                customs procedures, we ensure seamless operations. Tailoring solutions to your specific 
                                needs, we offer a global marketplace of opportunities and innovative products.</p>
                            </div>
                        </Row>
                    </div>
                </Row>
                <Row>
                    <div class="col-12 col-md-6 col-lg-auto mb-4">
                        <Row className='pb-5'>
                            <div class="col-md-4 text-center">
                                <img src={DistribImg} class="img-fluid img-services" alt="Image" />
                            </div>
                            <div class="col-md-6">
                                <h5 class="card-title mont-bold">Distribution</h5>
                                <p class="card-text mont-reg">Our services reach multiple areas, satisfying diverse market 
                                expectations. With proficiency in international trade rules and customs formalities, 
                                we ensure trouble-free operations. Adapting solutions to your specific demands, we offer 
                                a global network of opportunities and state-of-the-art products. Whether you are looking 
                                for fresh produce, grains, spices, or beverages, we can help you find the best suppliers 
                                and deliver them to your doorstep.</p>
                            </div>
                        </Row>
                    </div>
                </Row>
                <Row>
                    <div class="col-12 col-md-6 col-lg-auto mb-4">
                        <Row className='pb-5'>
                            <div class="col-md-4 text-center">
                                <img src={MarketImg} class="img-fluid img-services" alt="Image" />
                            </div>
                            <div class="col-md-6">
                                <h5 class="card-title mont-bold">Market Research</h5>
                                <p class="card-text mont-reg">We provide you with reliable and relevant data on various 
                                markets around the world, helping you make informed decisions. Our services 
                                cover multiple sectors, addressing different business challenges. With 
                                expertise in data collection, analysis, and presentation, we deliver actionable 
                                insights. Tailoring solutions to your specific objectives, we offer a global 
                                perspective of trends and opportunities. Whether you need to understand consumer 
                                behavior, competitor strategies, or industry dynamics, we can help you gain the 
                                knowledge you need.</p>
                            </div>
                        </Row>
                    </div>
                </Row>
                <Row>
                    <div class="col-12 col-md-6 col-lg-auto mb-4">
                        <Row className='pb-5'>
                            <div class="col-md-4 text-center">
                                <img src={globalImg} class="img-fluid img-services" alt="Image" />
                            </div>
                            <div class="col-md-6">
                                <h5 class="card-title mont-bold">International Consulting</h5>
                                <p class="card-text mont-reg">We provide you with strategic and practical advice on 
                                various aspects of your business, helping you achieve your goals. Our services 
                                cover multiple functions, such as management, marketing, finance, and 
                                operations. With expertise in cross-cultural collaboration, innovation, and 
                                problem-solving, we deliver effective solutions. Tailoring solutions to your 
                                specific challenges, we offer a global pool of talented and experienced 
                                consultants. Whether you need to improve your performance, expand your market, 
                                or transform your organization, we can help you find the solutions you need.</p>
                            </div>
                        </Row>
                    </div>
                </Row>
            </Container>

        </section>

    )
}

export default Service