import React from 'react';
import {useState, useEffect} from 'react';

/* Assets */
import MapComponent from '../assets/svg/LatinAmerica'
import PlantComponent from '../assets/svg/plant'

/* Products */
import FlorestaCoffee from '../products/fazendaFlorestaCoffee'
import ColombianCoffee from '../products/colombianFederationCoffee'

/*Bootstrap*/
import { Container} from 'react-bootstrap';
import "bootstrap/dist/css/bootstrap.min.css";

/*Css */
import '../styles/coffee.css';


function Coffee() {
  const [showFazendaFloresta, setShowFazendaFloresta] = useState(false);
  const [showColombianFederation, setShowColombianFederation] = useState(false);

  const handleFazendaFlorestaClick = () => {
    setShowFazendaFloresta(true);
    setShowColombianFederation(false);
  };

  const handleColombianFederationClick = () => {
    setShowColombianFederation(true);
    setShowFazendaFloresta(false);
  };

  // useEffect to scroll into view when showFazendaFloresta or showColombianFederation is updated
  useEffect(() => {
    if (showFazendaFloresta) {
      document.getElementById('FazendaFloresta').scrollIntoView({ behavior: 'smooth' });
    } else if (showColombianFederation) {
      document.getElementById('ColombianFederation').scrollIntoView({ behavior: 'smooth' });
    }
  }, [showFazendaFloresta, showColombianFederation]);
  
    return (
      <div>
        <div className='bg'>
          <Container>
            <p className='miama-presentation white-text'>Thuo International</p>
            <p className='white-text mont-presentation'>Coffee</p>
          </Container>
        </div>
        <hr></hr>
        <div className='bg2'>
          <Container className='flex-container'>
            <MapComponent></MapComponent>
            <div className='plant-brazil'>
              <PlantComponent></PlantComponent>
              <div className='coffee-hide'>
                <button className='mont-reg' onClick={handleFazendaFlorestaClick}>
                  Fazenda Floresta
                </button>
              </div>
            </div>
            <div className='plant-colombia'>
              <PlantComponent width='24pt' height='36pt'></PlantComponent>
              <div className='coffee-hide'>
                <button className='mont-reg' onClick={handleColombianFederationClick}>
                  Colombian Coffee Federation
                </button>
              </div>
            </div>
          </Container>
        </div>
        <hr></hr>
        <Container className={showFazendaFloresta ? '' : 'coffee-hide'} id='FazendaFloresta'>
          <FlorestaCoffee/>
        </Container>
        <Container className={showColombianFederation ? '' : 'coffee-hide'} id='ColombianFederation'>
          <ColombianCoffee></ColombianCoffee>
        </Container>
      </div>
    );
  }
  
  export default Coffee;