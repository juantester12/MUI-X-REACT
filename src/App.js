//import SimpleBarCharts from "./components/SimpleBarCharts";
//<SimpleBarCharts/>

import * as React from 'react';
import { BarChart } from '@mui/x-charts/BarChart';
import './App.css'; // Importa el archivo CSS

export default function ChartsOverviewDemo() {
    
    return (
        
        <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>
                       
         <h1 className="chart-title">Desempeño del Curso</h1>

            <BarChart   
                series={[
                    { data: [80, 80, 75, 100, 60, 70], label: 'Nota Del Curso'},
                    { data: [76, 60, 70, 30, 19, 19], label: 'Nota Del Analista'},
                ]}
                
                barLabel={(item, context) => {
                    if ((item.value ?? 0) < 60) {
                        return 'Bajo';
                    }
                    return context.bar.height >= 60 ? null : item.value?.toString();
                }}

                width={900}
                height={500}
                
                xAxis={[{
                    data: ['Choucair', 'Automatización', 'Pruebas', 'Selenium', 'ModeloC4', 'Despliegue',],
                    scaleType: 'band',
                    categoryGapRatio: 0.2
                }]}
                borderRadius={50}
                margin={{ top: 100, bottom: 30, left: 40, right: 10 }}
            />
        </div>
    );
}



