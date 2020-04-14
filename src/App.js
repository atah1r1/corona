import React from 'react';
import Cards from '../src/components/Card';
import Chart from './components/Charts';
import axios from 'axios';
import { Container } from 'semantic-ui-react';
import Donat from './components/Donat';
import logo from '../src/images/image.png'
import { Divider, Grid, Segment } from 'semantic-ui-react';
import './mycss.css';


class App extends React.Component {
  state = {
    recovered: 0,
    deaths: 0,
    negative: 0,
    confirmed: 0,
    region: [],
    cases: []
  }

async componentDidMount() {
  await this.getMainData();
  await this.getChartData();
}

getMainData = async () =>{
     await axios.get('https://covidma.herokuapp.com/api').then(response => {
      const {confirmed, deaths, recovered, negative} = response.data[0];
      this.setState({confirmed, deaths, recovered, negative});
  }).catch(error =>{
      console.log('error');
  })
}

getChartData = async () => {
  let region = [];
  let cases = [];
  await axios.get('https://covidma.herokuapp.com/api').then(response => {
    response.data[1].forEach(element => {
      region.push(element.region);
      cases.push(element.cases)
    });
    this.setState({region, cases});
  }).catch(error =>{
      console.log('error');
  })
}

render() {
    const {confirmed, recovered, deaths, negative} = this.state;
    const {region, cases} = this.state;
    return (
      <>
      <div className="text-center">
      <img src={logo} className="img-fluid" alt="COVID-19" />
      </div>
      <Cards confirmed={confirmed} recovered={recovered} deaths={deaths} negative={negative}/>
      <Container>
      
      
      </Container>
      <Segment placeholder>
    <Grid columns={2} relaxed='very' stackable>
      <Grid.Column>
      <Chart region={this.state.region} cases={this.state.cases}/>
      </Grid.Column>
      
      <Grid.Column verticalAlign='middle'>
      <Donat confirmed={confirmed} recovered={recovered} deaths={deaths} negative={negative} region={region} cases={cases}/>
      </Grid.Column>
    </Grid>

    <Divider vertical></Divider>
  </Segment>
      </>
    );
  }
}

export default App;