import React, { Component } from 'react';
import CountUp from 'react-countup';
import { Header, Table } from 'semantic-ui-react';
import './Charts.css'

class Chart extends Component {
    render() {
        const {region, cases} = this.props;
        return (
            <>
                <Table color='red' inverted celled collapsing>
                <Table.Header>
                  <Table.Row>
                    <Table.HeaderCell>Regions</Table.HeaderCell>
                    <Table.HeaderCell>Cases</Table.HeaderCell>
                  </Table.Row>
                </Table.Header>
                  {region.map((reg, i) => (
                <Table.Body key={i}>
                <Table.Row>
                  <Table.Cell>
                    <Header as='h4' >
                      <Header.Content>
                        {reg}
                      </Header.Content>
                    </Header>
                  </Table.Cell>
                  <Table.Cell><CountUp start={0} end={cases[i]} delay={2}></CountUp></Table.Cell>
                </Table.Row>
                </Table.Body>
                ))}
                </Table>
            </>
         );
    }
}
 
export default Chart;