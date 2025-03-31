import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import {
  Box,
  Button,
  ButtonGroup,
  CircularProgress,
  Grid,
  Stack,
  Typography,
  List,
  Divider,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  SelectChangeEvent,
} from "@mui/material";
import { Tire } from "../types/TireCardInterface";
import { getAllTires } from "../services/getAllTires";
import { TireCardGrid } from "../components/TireCard/TireCardGrid";
import { TireCardList } from "../components/TireCard/TIreCardList";

export const TireList = () => {
  const navigate = useNavigate();
  const [viewMode, setViewMode] = useState<"grid" | "list">("grid");
  const [tires, setTires] = useState<Tire[]>([]);
  const [loading, setLoading] = useState(true);
  const [pageSize, setPageSize] = useState(10);

  const fetchTires = async () => {
    try {
      setLoading(true);
      const response = await getAllTires({
        pageSize: pageSize,
      });

      setTires(response.content);
    } catch (err) {
      console.error("Erro ao carregar pneus:", err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchTires();
  }, [pageSize]);

  const handleViewDetails = (id: number) => {
    navigate(`/tires/${id}`);
  };

  const handlePageSizeChange = (event: SelectChangeEvent<number>) => {
    setPageSize(Number(event.target.value));
  };

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

  return (
    <>
      <Stack
        direction={{ xs: "column", sm: "row" }}
        alignItems="center"
        justifyContent="space-between"
        mb={2}
        px={12}
        pt={2}
      >
        <Box>
          <Typography variant="h4" fontWeight="bold" gutterBottom>
            Catálogo de Pneus
          </Typography>
          <Typography variant="body1" color="text.secondary">
            {tires.length} pneus encontrados
          </Typography>
        </Box>
        <Stack direction="row" spacing={2} alignItems="center">
          <FormControl size="small" sx={{ minWidth: 80 }}>
            <InputLabel>Itens por página</InputLabel>
            <Select
              value={pageSize}
              label="Itens por página"
              onChange={handlePageSizeChange}
            >
              <MenuItem value={10}>10</MenuItem>
              <MenuItem value={25}>25</MenuItem>
              <MenuItem value={50}>50</MenuItem>
            </Select>
          </FormControl>

          <ButtonGroup variant="outlined">
            <Button
              onClick={() => setViewMode("grid")}
              variant={viewMode === "grid" ? "contained" : "outlined"}
            >
              Grid
            </Button>
            <Button
              onClick={() => setViewMode("list")}
              variant={viewMode === "list" ? "contained" : "outlined"}
            >
              Lista
            </Button>
          </ButtonGroup>
        </Stack>
      </Stack>
      <Box
        sx={{
          pb: 2,
          px: 3,
        }}
      >
        {viewMode === "grid" ? (
          <Grid container spacing={3}>
            {tires.map((tire) => (
              <Grid container spacing={3}>
                <Box sx={{ height: "100%" }}>
                  <TireCardGrid tire={tire} onViewDetails={handleViewDetails} />
                </Box>
              </Grid>
            ))}
          </Grid>
        ) : (
          <List sx={{ bgcolor: "background.paper" }}>
            {tires.map((tire) => (
              <Box key={tire.id}>
                <TireCardList tire={tire} onViewDetails={handleViewDetails} />
                <Divider />
              </Box>
            ))}
          </List>
        )}
      </Box>
    </>
  );
};
