import {
  Card,
  CardContent,
  Box,
  Typography,
  Chip,
  Button,
  Stack,
} from "@mui/material";
import { Tire } from "../../types/TireCardInterface";
import tireImg from "../../assets/tire.jpg";

interface TireCardGridProps {
  tire: Tire;
  onViewDetails: (id: number) => void;
}

export const TireCardGrid = ({ tire, onViewDetails }: TireCardGridProps) => {
  return (
    <Card
      sx={{
        maxWidth: 240,
        display: "flex",
        flexDirection: "column",
        transition: "box-shadow 0.3s ease",
        "&:hover": {
          boxShadow: 6,
          cursor: "pointer",
        },
        overflow: "hidden",
      }}
      onClick={() => onViewDetails(tire.id)}
    >
      <CardContent
        sx={{
          flex: 1,
          display: "flex",
          flexDirection: "column",
        }}
      >
        <Box
          sx={{
            flex: 1,
            bgcolor: "grey.100",
            borderRadius: 1,
            height: 130,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            mb: 2,
          }}
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
        </Box>

        <Stack
          direction="row"
          justifyContent="space-between"
          alignItems="center"
          spacing={1.5}
        >
          <Typography variant="h6">{tire.make.name}</Typography>
          <Stack direction="row" spacing={1}>
            {tire.newTire && <Chip label="Novo" color="primary" size="small" />}
          </Stack>
        </Stack>

        <Typography variant="body2" color="text.secondary">
          {tire.model.name}
        </Typography>
        <Typography variant="body2">
          {tire.tireSize.width}/{tire.tireSize.height} R{tire.tireSize.rim}
        </Typography>
        <Typography variant="caption" color="text.disabled">
          SN: {tire.serialNumber} | DOT: {tire.dot}
        </Typography>

        <Button
          fullWidth
          variant="outlined"
          size="small"
          sx={{ mt: 2 }}
          onClick={(e) => {
            e.stopPropagation();
            onViewDetails(tire.id);
          }}
        >
          Ver detalhes
        </Button>
      </CardContent>
    </Card>
  );
};
