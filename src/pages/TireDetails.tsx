import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import {
  Box,
  Button,
  Stack,
  Typography,
  Divider,
  Grid,
  Paper,
  Avatar,
  List,
  ListItem,
  ListItemText,
  Chip,
  CircularProgress,
} from "@mui/material";
import { Tire } from "../types/TireCardInterface";
import tireImg from "../assets/tire.jpg";
import { getTiresById } from "../services/getTiresById";

export const TireDetails = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const [tire, setTire] = useState<Tire | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchTire = async () => {
      try {
        setLoading(true);
        const tireData = await getTiresById(Number(id));
        if (!tireData) {
          throw new Error("Pneu não encontrado");
        }
        setTire(tireData);
      } catch (error) {
        console.error("Falha ao carregar pneu:", error);
        navigate("/tires", { replace: true });
      } finally {
        setLoading(false);
      }
    };

    fetchTire();
  }, [id, navigate]);

  if (loading) {
    return (
      <Box
        display="flex"
        justifyContent="center"
        alignItems="center"
        minHeight="60vh"
      >
        <CircularProgress />
      </Box>
    );
  }
  if (!tire) {
    return (
      <Box
        display="flex"
        justifyContent="center"
        alignItems="center"
        minHeight="60vh"
      >
        <Typography variant="h6">Pneu não encontrado</Typography>
      </Box>
    );
  }
  return (
    <Box sx={{ maxWidth: 1200, mx: "auto", p: 3 }}>
      <Stack
        direction="row"
        justifyContent="space-between"
        alignItems="center"
        mb={4}
      >
        <Typography variant="h4" fontWeight="bold">
          Detalhes do Pneu {tire.serialNumber}
        </Typography>
        <Button variant="outlined" onClick={() => navigate(-1)}>
          Voltar
        </Button>
      </Stack>
      <Paper elevation={3} sx={{ p: 3, mb: 4 }}>
        <Box sx={{ display: "flex", justifyContent: "center", mb: 3 }}>
          <Avatar
            variant="rounded"
            sx={{ bgcolor: "grey.100", width: 250, height: 250 }}
          >
            <Box
              component="img"
              src={tireImg}
              alt="Pneu"
              sx={{
                maxWidth: "100%",
                maxHeight: "100%",
                objectFit: "contain",
              }}
            />
          </Avatar>
        </Box>
        <Typography variant="h5" textAlign="center" mb={2}>
          {tire.make.name} {tire.model.name}
        </Typography>
        <Divider sx={{ mb: 3 }} />
        <Grid container spacing={2} mb={4}>
          <Grid>
            <List dense>
              <ListItem>
                <ListItemText
                  primary="Número de Série"
                  secondary={tire.serialNumber}
                />
              </ListItem>
              <ListItem>
                <ListItemText
                  primary="Data de Fabricação (DOT)"
                  secondary={
                    tire.dot
                      ? `Semana ${tire.dot.slice(0, 2)}/${tire.dot.slice(2)}`
                      : "N/A"
                  }
                />
              </ListItem>
              <ListItem>
                <ListItemText
                  primary="Tamanho"
                  secondary={`${tire.tireSize.width}/${tire.tireSize.height} R${tire.tireSize.rim}`}
                />
              </ListItem>
            </List>
          </Grid>
          <Grid>
            <Typography variant="h6" gutterBottom>
              Especificações
            </Typography>
            <List dense>
              <ListItem>
                <ListItemText
                  primary="Pressão Recomendada"
                  secondary={`${tire.recommendedPressure} psi`}
                />
              </ListItem>
              <ListItem>
                <ListItemText
                  primary="Profundidade do Sulco"
                  secondary={`${tire.model.treadDepth} mm`}
                />
              </ListItem>
              <ListItem>
                <ListItemText
                  primary="Número de Sulcos"
                  secondary={tire.model.groovesQuantity}
                />
              </ListItem>
            </List>
          </Grid>
          <Grid>
            <Typography variant="h6" gutterBottom>
              Histórico
            </Typography>
            <List dense>
              <ListItem>
                <ListItemText
                  primary="Reformas Realizadas"
                  secondary={`${tire.timesRetreaded}/${tire.maxRetreadsExpected}`}
                />
              </ListItem>
              <ListItem>
                <ListItemText
                  primary="Custo Original"
                  secondary={`R$ ${tire.purchaseCost.toLocaleString()}`}
                />
              </ListItem>
              {tire.currentRetread && (
                <ListItem>
                  <ListItemText
                    primary="Última Reforma"
                    secondary={
                      <>
                        <Box>Marca: {tire.currentRetread.make.name}</Box>
                        <Box>Modelo: {tire.currentRetread.model.name}</Box>
                        <Box>Custo: R$ {tire.currentRetread.retreadCost}</Box>
                      </>
                    }
                  />
                </ListItem>
              )}
            </List>
          </Grid>
        </Grid>
        {tire.disposal && (
          <Box mt={2}>
            <Typography variant="h6" gutterBottom>
              Motivo de Descarte
            </Typography>
            <Chip
              label={tire.disposal.disposalReasonDescription}
              color="error"
              variant="outlined"
            />
          </Box>
        )}
      </Paper>
    </Box>
  );
};
