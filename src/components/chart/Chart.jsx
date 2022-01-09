import React from 'react';
import { LineChart, Line, XAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import "./chart.css"

export default function Chart({title,data,dataKey,grid}){
    return (
        <div className="chart">
            <h3 className="chartTitle">
                {title}
            </h3>
            <ResponsiveContainer width="100%" aspect={4/1}>
                <LineChart
                data={data}
                margin={{
                    top: 5,
                    right: 30,
                    left: 20,
                    bottom: 5,
                }}
                >
                {grid && <CartesianGrid strokeDasharray="5 5" stroke="#9596a7" />}
                <XAxis dataKey="name" stroke="#9596a7"/>
                {/* <YAxis /> */}
                <Tooltip />
                <Legend />
                <Line type="monotone" dataKey={dataKey} stroke="#8884d8" activeDot={{ r: 8 }} />
                </LineChart>
            </ResponsiveContainer>            
        </div>
    )
}
