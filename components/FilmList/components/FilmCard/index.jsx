import {
  Button,
  Card,
  CardActions,
  CardContent,
  Typography,
} from "@mui/material";
import React from "react";

function FilmCard({ title, year }) {
  return (
    <Card>
      <CardContent>
        <Typography sx={{ fontSize: 18 }} color="text.secondary" gutterBottom>
          <b>{title}</b>
        </Typography>
        <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
          {year}
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small">Detalhes</Button>
      </CardActions>
    </Card>
  );
}

export default FilmCard;
