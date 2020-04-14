import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Logo1 from '../images/verified.png';
import Logo2 from '../images/recovered.png';
import Logo3 from '../images/deaths.png';
import Logo4 from '../images/negative.png';
import CountUp from 'react-countup';
import { Card, Icon, Image } from 'semantic-ui-react';

class Cards extends Component {
    render() { 
        const {confirmed, recovered, deaths, negative} = this.props;
        return (
            <>
            <div className='container'>
            <Card.Group itemsPerRow={4}>
<Card color='blue'>
    <Image src={Logo1} wrapped ui={false} />
    <Card.Content>
      <Card.Header>Confirmed</Card.Header>
        <Card.Meta>{new Date().toJSON().slice(0,10).replace(/-/g,'/')}</Card.Meta>
      <Card.Description>
        Confirmed Cases in Morocco
      </Card.Description>
    </Card.Content>
    <Card.Content extra>
      <a color='blue' href='/#'>
        <Icon circular name='user' color='blue'/>
        <CountUp start={0} end={confirmed} delay={0}></CountUp>
      </a>
    </Card.Content>
  </Card>
  <Card color='green'>
    <Image src={Logo2} wrapped ui={false} />
    <Card.Content>
      <Card.Header>Recovered</Card.Header>
        <Card.Meta>{new Date().toJSON().slice(0,10).replace(/-/g,'/')}</Card.Meta>
      <Card.Description>
        Recovered Cases in Morocco
      </Card.Description>
    </Card.Content>
    <Card.Content extra>
      <a color='green' href='/#'>
        <Icon circular name='user' color='green' />
        <CountUp start={0} end={recovered} delay={0}></CountUp>
      </a>
    </Card.Content>
  </Card>
  <Card color='red'>
    <Image src={Logo3} wrapped ui={false} />
    <Card.Content>
      <Card.Header>Deaths</Card.Header>
        <Card.Meta>{new Date().toJSON().slice(0,10).replace(/-/g,'/')}</Card.Meta>
      <Card.Description>
        Deaths in Morocco
      </Card.Description>
    </Card.Content>
    <Card.Content extra>
      <a color='red' href='/#'>
        <Icon circular name='user' color='red' />
        <CountUp start={0} end={deaths} delay={0}></CountUp>
      </a>
    </Card.Content>
  </Card>
  <Card color='pink'>
    <Image src={Logo4} wrapped ui={false} />
    <Card.Content>
      <Card.Header>Negative</Card.Header>
        <Card.Meta>{new Date().toJSON().slice(0,10).replace(/-/g,'/')}</Card.Meta>
      <Card.Description>
        Tested People in Morocco
      </Card.Description>
    </Card.Content>
    <Card.Content extra>
      <a color='pink' href='/#'>
        <Icon circular name='user' color='pink' />
        <CountUp start={0} end={negative} delay={0}></CountUp>
      </a>
    </Card.Content>
  </Card>

</Card.Group>
            </div>
                    
</>
         );
    }
}
 
export default Cards;