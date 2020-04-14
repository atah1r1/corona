import React from 'react';
import { Doughnut } from 'react-chartjs-2';
import { useState } from 'react';
import { useEffect } from 'react';
import { useCallback } from 'react';

const Donat = (props) => {
    const {cases, region} = props;
        const [chartData, setChartData] = useState({});
        
        const chart = useCallback(() => {
            setChartData({
                labels: [...region],
                datasets: [
                    {
                        label: 'Region Chart',
                        data: [...cases],
                        backgroundColor: [
                            'rgb(87,126,232)',
                            'rgb(255,41,0)',
                            'rgb(122,200,83)',
                            'rgb(255,0,217)',
                            'rgb(0,255,0)',
                            'rgb(255,255,0)',
                            'rgb(128,0,0)',
                            'rgb(255,69,0)',
                            'rgb(255,215,0)',
                            'rgb(0,255,255)',
                            'rgb(25,25,112)',
                            'rgb(188,143,143)',

                        ],
                        borderWidth: 4
                    }
                ]
            })
        }, [cases, region])
        useEffect(() => {
            chart();
        }, [chart])
        return ( 
                <Doughnut data={chartData} width={50} height={50} />
            
         );
    }
 
export default Donat;