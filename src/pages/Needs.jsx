
import {CustomButton} from '../components/CustomButton';
import {IoHome} from 'react-icons/io5';
import {IoRestaurant} from 'react-icons/io5';
import {FaBook} from 'react-icons/fa';
import {IoMdTrain} from 'react-icons/io';
import {IoShirtSharp} from 'react-icons/io5';
import {GoLaw} from 'react-icons/go';
import {MdWork} from 'react-icons/md';
import {GiHeartBeats} from 'react-icons/gi';
import {MdOutlineAccountBalance} from 'react-icons/md';
import {Container,Col,Row} from 'react-bootstrap';
import '../components/styles/needs.css';

export function Needs(props){
    const{text, classes, handleRouterClick} = props;
    return(
        <>
          <div>
        <Container className="pad">
            <Row xs={2} sm={3} md={4} className='justify-content-center'>
                <Col> <CustomButton route="Association" handleClick ={handleRouterClick} Ico={IoHome} classes="needs mx-auto" text="Se loger" /></Col>
                <Col> <CustomButton route="" handleClick ={handleRouterClick} Ico={IoRestaurant} classes="needs mx-auto" text="Se nourrir" /></Col>
                <Col> <CustomButton Ico={FaBook} classes="mx-auto needs" text="Apprendre" /></Col>
                <Col> <CustomButton Ico={IoMdTrain} classes="mx-auto needs" text="Se déplacer" /></Col>
            {/* </Row>
            <Row sm={12} md={6} lg={4}> */}
            
                <Col> <CustomButton Ico={GiHeartBeats} classes="mx-auto needs" text="Se soigner" /></Col>
                <Col>  <CustomButton Ico={GoLaw} classes="mx-auto needs" text="Aide juridique" /></Col>
                <Col>  <CustomButton Ico={IoShirtSharp} classes="mx-auto needs" text="S'habiller" /></Col>
                <Col>   <CustomButton Ico={MdWork} classes="mx-auto needs" text="S'insérer (Travail)" /></Col>
                <Col><CustomButton Ico={MdOutlineAccountBalance} classes="mx-auto needs" text="Aide administrative" /></Col>
            </Row>
        </Container>

          
               
               
               
               
                
               
              
                
               
            </div>       
        </>
    );
}