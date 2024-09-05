import { useEffect, useState } from 'react';
import axios from 'axios';
import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer, Cell } from 'recharts';
import chroma from 'chroma-js';
import Grid from '@mui/material/Grid'; // Importa Grid

function generateDistinctColors(length) {
    return chroma.scale('Spectral')
        .mode('lab')
        .colors(length)
        .map(color => chroma(color).saturate(1).hex());
}

function ListaDeUsuarios() {
    const [data, setData] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios({
                    method: "GET",
                    baseURL: 'http://localhost:8080',
                    url: '/graficos',
                    params: {
                        strEmail: "josoriob@choucairtesting.com",
                        strPensum: "Pensum Operación"
                    }
                });

                setData(response.data.data);
            } catch (error) {
                console.error("Error fetching data: ", error);
            }
        };

        fetchData();
    }, []);

    const COLORS = generateDistinctColors(data.length);

    return (
        <>

            {/* Gráfica de Barras */}
            <Grid  item md={12} style={{ height: '450px' }}> {/* Altura fija */}
                <ResponsiveContainer width="100%" height="100%"> {/* Contenedor responsive */}
                    <BarChart
                        data={data.map((usuario, index) => ({
                            id: index,
                            Nota: usuario.intNota_final_Curso,
                            name: usuario.strCurso,
                        }))}
                        margin={{ top: 100, right: 50, left: 70, bottom: 110 }}
                    >
                        <XAxis dataKey="name" angle={-20} textAnchor="end" interval={0} tick={false} />
                        <YAxis domain={[0, 100]} ticks={[0, 20, 40, 60, 80, 100]} interval={0} />
                        <Tooltip />
                        <Bar dataKey="Nota" fill="#8884d8">
                            {data.map((_, index) => (
                                <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                            ))}
                        </Bar>
                    </BarChart>
                </ResponsiveContainer>
            </Grid>
        </>
    );
}
export default ListaDeUsuarios;
