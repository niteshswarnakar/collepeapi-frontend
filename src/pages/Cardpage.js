import React from "react";
import {
  Grid,
  Card,
  CardContent,
  CardMedia,
  Typography,
  CardActionArea,
} from "@mui/material";
const Home = ({ student }) => {
  return (
    <Grid item xs={6} md={3} my={2}>
      <Card sx={{ maxWidth: 345 }}>
        <CardActionArea>
          <CardMedia
            component="img"
            height="140"
            image="https://images.pexels.com/photos/15851250/pexels-photo-15851250.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            alt="green iguana"
          />
          <CardContent>
            <Typography gutterBottom variant="h7" component="div">
              {student[3]}
            </Typography>
            <Typography variant="body2" color="text.secondary">
              {student[0]} - {student[1]}
            </Typography>
            <Typography variant="body2" color="text.secondary">
              Pulchowk Campus
            </Typography>
            <Typography variant="body2" color="text.secondary">
              {student[4]}
            </Typography>
          </CardContent>
        </CardActionArea>
      </Card>
    </Grid>
  );
};

export default Home;
