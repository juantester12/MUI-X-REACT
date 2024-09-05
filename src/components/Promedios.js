import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Card, CardContent, Typography, Box, CircularProgress, Alert } from '@mui/material';

function Promedios() {
  const [data, setData] = useState(null);  // Inicializa como null si esperas un objeto
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);


 

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios({
          method: "GET",
          baseURL: 'http://localhost:8080',
          url: '/promedios',
          params: {
            strEmail: "josoriob@choucairtesting.com",
            strPensum: "Pensum Operación"

          }
        });

        setData(response.data.data);  // Ajusta según la estructura de tus datos
      } catch (error) {
        setError("Error fetching data: " + error.message);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  if (loading) return <CircularProgress />;
  if (error) return <Alert severity="error">{error}</Alert>;

  return (
    <Box sx={{ p: 2, display: 'flex', justifyContent: 'center' }}>
      <Card sx={{ maxWidth: 450, height: 80 , width: 'auto', p: 2, boxShadow: 3, borderRadius: 2 }}>
        <CardContent>
          {data ? (
            <Typography variant="h6" component="div" sx={{ textAlign: 'center' }}>
              <span style={{ fontWeight: 'bold' }}>Tu avance respecto al Pensum es del:</span><br />
              <span style={{ fontWeight: 'bold', color: 'green' }}>{data}%</span>
            </Typography>
          ) : (
            <Typography variant="h6" component="div" sx={{ textAlign: 'center' }}>
              No se encontraron datos.
            </Typography>
          )}
        </CardContent>
      </Card>
    </Box>
  );
}

export default Promedios;
