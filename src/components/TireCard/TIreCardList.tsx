import {
  ListItem,
  ListItemAvatar,
  Avatar,
  ListItemText,
  Chip,
  Button,
  Box,
  Typography,
} from "@mui/material";
import { Tire } from "../../types/TireCardInterface";
import tireImg from "../../assets/tire.jpg";

interface TireCardListProps {
  tire: Tire;
  onViewDetails: (id: number) => void;
}

export const TireCardList = ({ tire, onViewDetails }: TireCardListProps) => {
  return (
    <ListItem
      secondaryAction={
        <Button
          variant="contained"
          size="small"
          onClick={() => onViewDetails(tire.id)}
        >
          Detalhes
        </Button>
      }
      sx={{
        height: 80,
        "&:hover": {
          bgcolor: "action.hover",
          cursor: "pointer",
        },
      }}
      onClick={() => onViewDetails(tire.id)}
    >
      <ListItemAvatar>
        <Avatar
          variant="rounded"
          sx={{
            bgcolor: "grey.100",
            width: 56,
            height: 56,
            mr: 2,
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
        </Avatar>
      </ListItemAvatar>

      <ListItemText
        primary={
          <Box display="flex" alignItems="center" gap={1} flexWrap="wrap">
            <Typography variant="subtitle1" noWrap>
              {tire.make.name} {tire.model.name}
            </Typography>
            {tire.newTire && <Chip label="Novo" color="primary" size="small" />}
          </Box>
        }
        secondary={
          <>
            <Typography variant="body2" color="text.secondary" noWrap>
              Serial: {tire.serialNumber} | DOT: {tire.dot}
            </Typography>
            <Typography variant="body2" color="text.secondary">
              Tamanho: {tire.tireSize.width}/{tire.tireSize.height} R
              {tire.tireSize.rim}
            </Typography>
          </>
        }
      />
    </ListItem>
  );
};
