import React from 'react';

import AboutImg from "../assets/img/port-about.jpg";

/*Bootstrap*/
import { Container, Image} from 'react-bootstrap';
import "bootstrap/dist/css/bootstrap.min.css";

/*Css */
import '../styles/about.css';

function About () {
    return (
        <div>
            <section>
                <Image className='imgWrapper img-fluid mb-5' src={AboutImg} ></Image>
            </section>
            <Container>
                <div>
                    <h1 className='miama'>Thuo International</h1>
                    <div className='col-8'>

                        <h4 className='mont-reg'>Established in 2016, Thuo International has been committed to delivering reliable 
                            import-export solutions to businesses worldwide. We have built our reputation on 
                            a foundation of expertise, dedication, and a deep understanding of the global 
                            marketplace. <br></br> With years of experience in the import-export industry, 
                            we have cultivated strong relationships with suppliers, manufacturers, 
                            and distributors across the globe. This enables us to source high-quality 
                            products at competitive prices, ensuring the satisfaction of our clients. <br></br>
                            At Thuo International, we specialize in a wide range of commodities, carefully 
                            selected to meet the diverse needs of our customers. From raw materials to finished 
                            goods, we facilitate seamless trade transactions, providing efficient logistics and 
                            supply chain management. <br></br> Our team of seasoned professionals possesses 
                            in-depth knowledge of international trade regulations, customs procedures, and 
                            documentation requirements. We navigate the complexities of global trade, ensuring 
                            compliance and minimizing delays for a smooth import-export process.<br></br>
                            Customer satisfaction is at the heart of our business philosophy. We strive to 
                            build long-term partnerships with our clients, understanding their unique 
                            requirements and delivering tailored solutions. Our commitment to exceptional 
                            service has earned us a loyal customer base that spans various industries. <br></br>
                            At Thuo International, we believe that successful import-export ventures go beyond
                            transactions; they are about building bridges between cultures and economies. We 
                            are dedicated to fostering positive relationships and facilitating mutual growth 
                            between our clients and their global counterparts. <br></br>As we look to the 
                            future, Thuo International remains steadfast in our commitment to providing 
                            reliable import-export services. We stay attuned to market trends, adapting our 
                            strategies to meet the evolving needs of our clients in an ever-changing 
                            global landscape.
                            Choose us as your trusted import-export partner, and let us navigate the 
                            intricacies of international trade on your behalf. Together, we will unlock new 
                            horizons of business opportunities and drive mutual success.</h4>
                    </div>
                </div>

                </Container>
        </div>

    )
}

export default About