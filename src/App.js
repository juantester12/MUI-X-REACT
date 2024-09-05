import Calificaciones from '../src/components/Calificaciones';
import Promedios from '../src/components/Promedios';
import ListaDeUsuarios from '../src/components/Barchar';
import Grid from '@mui/material/Grid'; // Importa Grid


function App() {

  return (
    <>
    <Grid container spacing={4}>

        {/* Promedios - Movido arriba */}
        <Grid item md={12} sx={{ p: -1, display: 'flex', justifyContent: 'center', marginTop: '10px' }}>
          <Promedios />
        </Grid>
    
      {/* ListaDeUsuarios */}
      <Grid item padding={2} md={6} style={{ height: '450px' }}>
        <ListaDeUsuarios />

      </Grid>

      {/* Calificaciones */}
      <Grid item md={6}>
        <Calificaciones />
      </Grid>


    
        </Grid>

    </>

  );

}

//   {/* Calificaciones */}
//   <Grid item md={6}>
//   <Calificaciones />
// </Grid>

// {/* Promedios */}
// <Grid item xs={12} md={4}>
//   <Promedios />
// </Grid>

export default App;
