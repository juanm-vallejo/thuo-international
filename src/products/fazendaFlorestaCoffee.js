import React from 'react';

/* Assets */
import fazendaFloresta from '../assets/img/fazenda-floresta.png'


/* Bootstrap */
import {Accordion} from 'react-bootstrap';


function fazendaFlorestaCoffee() {
    return(
    <div>
        <div className='bg-coffee'>
                <div className='flex-container'>
                    <img src={fazendaFloresta}></img>
                    <div className='col-6'>
                        <p className='farm-description mont-reg'>There is a place above 1,100 meters of altitude that we call <br></br>"Fazenda Floresta."</p>
                    </div>
                </div>
            </div>
            <h1 className='mont-bold mt-5'>Fazenda Floresta</h1>
            <h2 className='mont reg'>Minas Gerais, Brazil.</h2>
            <div className='flex-container'> 
                <table className='table-coffee col-6'>
                    <tbody>
                        <tr>
                            <td align="left"><strong>PRODUCT PRESENTATION</strong></td>
                            <td align="left">&nbsp;</td>
                        </tr>
                        <tr>
                            <td align="left">Product name:</td>
                            <td align="left">Brazilian Green Coffee Beans</td>
                        </tr>
                        <tr>
                            <td align="left">Packing</td>
                            <td align="left">Fique bags (Includes GrainPro bag)</td>
                        </tr>
                        <tr>
                            <td align="left">Quantity per bag</td>
                            <td align="left">69 Kilos</td>
                        </tr>
                        <tr>
                        <td align="left"><strong>GRAIN CHARACTERISTICS</strong></td>
                        <td align="left">&nbsp;</td>
                        </tr>
                        <tr>
                        <td align="left">Type</td>
                        <td align="left">UGQ - Excelso</td>
                        </tr>
                        <tr>
                        <td align="left">Mesh</td>
                        <td align="left">18</td>
                        </tr>
                        <tr>
                        <td align="left">Humidity</td>
                        <td align="left">&lt; 12.5%</td>
                        </tr>
                        <tr>
                        <td align="left"><strong>PRODUCTION</strong></td>
                        <td align="left">&nbsp;</td>
                        </tr>
                        <tr>
                        <td align="left">Main Harvest</td>
                        <td align="left">July - Agust</td>
                        </tr>
                        <tr>
                        <td align="left">Mitaca</td>
                        <td align="left">--</td>
                        </tr>
                        <tr>
                        <td align="left">Varieties</td>
                        <td align="left">Mundo Novo</td>
                        </tr>
                        <tr>
                        <td align="left">Altitude</td>
                        <td align="left">850 - 1.250 m.a.m.s.l.</td>
                        </tr>
                        <tr>
                        <td align="left">Temperature</td>
                        <td align="left">24 - 25ºC</td>
                        </tr>
                        <tr>
                        <td align="left">Drying</td>
                        <td align="left">Under the sun</td>
                        </tr>
                        <tr>
                        <td align="left"><strong>CUP</strong></td>
                        <td align="left">&nbsp;</td>
                        </tr>
                        <tr>
                        <td align="left">Average Score</td>
                        <td align="left">&gt; 83</td>
                        </tr>
                        <tr>
                        <td align="left">Fragrance / Aroma</td>
                        <td align="left">Medium, Sweet, chocolatey</td>
                        </tr>
                        <tr>
                        <td align="left">Residual Flavor</td>
                        <td align="left">Medium, Clean, delicate, Silky</td>
                        </tr>
                        <tr>
                        <td align="left">Sweetness</td>
                        <td align="left">High, Brown sugar, White Chocolate, Shiny, Juicy.</td>
                        </tr>
                        <tr>
                        <td align="left">Acidity</td>
                        <td align="left">Medium</td>
                        </tr>
                        <tr>
                        <td align="left">Body</td>
                        <td align="left">Medium</td>
                        </tr>
                        <tr>
                        <td align="left">Balance</td>
                        <td align="left">Balanced, Structured</td>
                        </tr>
                        <tr>
                        <td align="left">Notes</td>
                        <td align="left">Fruity, Melon, Watermelon, Citrus, Lemon. Sweet, Brown sugar. Walnuts, Almond. Vegetal, Green leaves Chocolate</td>
                        </tr>
                    </tbody>
                </table>
                <div className='col-6' id='accordion-column'>
                  <Accordion>
                    <Accordion.Item eventKey="0" className='bg-accordion1-br'>
                      <Accordion.Header></Accordion.Header>
                      <Accordion.Body className='pt-5'>
                        <p className='no-text'>-</p>
                      </Accordion.Body>
                    </Accordion.Item>
                    <Accordion.Item eventKey="1" className='bg-accordion2-br'>
                      <Accordion.Header></Accordion.Header>
                      <Accordion.Body className='pt-5'>
                        <p className='no-text'>-</p>
                      </Accordion.Body>
                    </Accordion.Item>
                    <Accordion.Item eventKey="2" className='bg-accordion3-br'>
                      <Accordion.Header></Accordion.Header>
                      <Accordion.Body className='pt-5'>
                        <p className='no-text'>-</p>
                      </Accordion.Body>
                    </Accordion.Item>
                    <Accordion.Item eventKey="3" className='bg-accordion4-br'>
                      <Accordion.Header></Accordion.Header>
                      <Accordion.Body className='pt-5'>
                        <p className='no-text'>-</p>
                      </Accordion.Body>
                    </Accordion.Item>
                    <Accordion.Item eventKey="4" className='bg-accordion5-br'>
                      <Accordion.Header></Accordion.Header>
                      <Accordion.Body className='pt-5'>
                        <p className='no-text'>-</p>
                      </Accordion.Body>
                    </Accordion.Item>
                    <Accordion.Item eventKey="5" className='bg-accordion6-br'>
                      <Accordion.Header></Accordion.Header>
                      <Accordion.Body className='pt-5'>
                        <p className='no-text'>-</p>
                      </Accordion.Body>
                    </Accordion.Item>
                  </Accordion>
                </div>
            </div>
    </div>);
}

export default fazendaFlorestaCoffee;