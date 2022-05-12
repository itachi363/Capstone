import { Chart } from "react-google-charts";
import React, { useState, useEffect } from 'react';

const ChartPage = (props) => {

    const [chartData, setChartData] = useState([])

    useEffect(() => {
        let tempChartData = props.subUserAll.map(entry => {
            return [entry.user.date_joined, entry.subscription.payment_amount]
        })
        setChartData(tempChartData)
    }, [props.subUserAll])

    return ( 
        <div>
            <Chart
            chartType="LineChart"
            data={[["Date_Joined", "Subscription"], ...chartData]}
            width="100%"
            height="1000px"
            options={{legend: {position: 'bottom'}}}
            legendToggle
            />
        </div>
     );
}
 
export default ChartPage;