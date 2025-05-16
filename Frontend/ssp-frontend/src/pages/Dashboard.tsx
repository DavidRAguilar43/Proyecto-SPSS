import { useContext } from 'react';
import {
  Container,
  Typography,
  Box,
  Paper,
  Button,
  AppBar,
  Toolbar
} from '@mui/material';
import { AuthContext } from '@/contexts/AuthContext';

const Dashboard = () => {
  const { user, logout } = useContext(AuthContext);

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            Sistema de Seguimiento Psicopedagógico
          </Typography>
          <Button color="inherit" onClick={logout}>
            Cerrar Sesión
          </Button>
        </Toolbar>
      </AppBar>

      <Container maxWidth="lg" sx={{ mt: 4 }}>
        <Paper elevation={3} sx={{ p: 4 }}>
          <Typography variant="h4" component="h1" gutterBottom>
            Bienvenido al Dashboard
          </Typography>

          {user && (
            <Box sx={{ mt: 2 }}>
              <Typography variant="body1">
                <strong>Correo:</strong> {user.correo_institucional}
              </Typography>
              {user.matricula && (
                <Typography variant="body1">
                  <strong>Matrícula:</strong> {user.matricula}
                </Typography>
              )}
              <Typography variant="body1">
                <strong>Rol:</strong> {user.rol}
              </Typography>
            </Box>
          )}

          <Box sx={{ mt: 4 }}>
            <Typography variant="h5" gutterBottom>
              Funcionalidades disponibles:
            </Typography>
            <Typography variant="body1">
              Esta es una página de ejemplo. Aquí se mostrarían las funcionalidades
              según el rol del usuario.
            </Typography>
          </Box>
        </Paper>
      </Container>
    </Box>
  );
};

export default Dashboard;
