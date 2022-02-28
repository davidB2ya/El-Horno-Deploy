import React from 'react';
import { BarChart, Bar, XAxis, YAxis, Tooltip, CartesianGrid} from 'recharts';

const TablePrincipal = () => {

    const data = [
        { name: '1', uv: 10, pv: 1000, amt: 1000 },
        { name: '2', uv: 60, pv: 1000, amt: 1000 },
        { name: '3', uv: 95, pv: 1000, amt: 1000 },
        { name: '4', uv: 80, pv: 1000, amt: 1000 },
        { name: '5', uv: 80, pv: 1000, amt: 1000 },
    ];

    


    return (
        <div>
            <h2>Ventas de los ultimos 5 días</h2>
            <BarChart width={360} height={250} data={data}>
                <XAxis dataKey="name" stroke="red" />
                <YAxis />
                <Tooltip wrapperStyle={{ width: 100, backgroundColor: '#ccc', }} />
                {/* <Legend width={100} wrapperStyle={{ top: 40, right: 20, backgroundColor: '#fff', border: '1px solid #d5d5d5', borderRadius: 10, lineHeight: '40px' }} /> */}
                <CartesianGrid stroke="#ccc" strokeDasharray="5 5"/>
                <Bar dataKey="uv" fill="red" barSize={45}/>
            </BarChart>
        </div>
    )
}

export default TablePrincipal