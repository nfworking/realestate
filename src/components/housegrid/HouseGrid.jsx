import React from "react";
import { Grid, Card, CardContent, Typography } from "@mui/material";
import Container from "@mui/material/Container";
import data from "../houselist/utils/slider.json";
import { CardActionArea } from "@mui/material";
import CardMedia from "@mui/material/CardMedia";
import { Button, CardActions } from '@mui/material';
import SendIcon from '@mui/icons-material/Send';


const HouseGrid = () => {
  return (
    <>
    
      <Container maxWidth="lg">
        <Typography variant="h4" align="center" style={{ marginTop: "50px" }}>
          Our Houses 🏘️
        </Typography>
        <Grid container spacing={5} style={{ marginTop: "20px" }}>
          {data.map((result, index) => (
            <Grid item xs={12} sm={4} ms={4} key={index}>
              <Card sx={{ maxWidth: 345, color: "white", backgroundColor: "black" }}>
                <CardActionArea>
                  <CardMedia
                    component="img"
                    height="140"
                    image={result.image}
                    alt="green iguana"
                  />
                  <CardContent style={{color: "white"}}>
                    <Typography gutterBottom variant="h5" component="div">
                      {result.name}
                    </Typography>
                    <Typography variant="body2" color="white">
                      {result.detail}
                    </Typography>
                    <Typography variant="body2" color="white">$ 
                      {result.price}
                    </Typography>
                  </CardContent>
                  
                </CardActionArea>
                <CardActions>      
      </CardActions>
      <Button variant="contained" href={result.url} endIcon={<SendIcon />}>
  Read More
</Button>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Container>
    </>
  );
};

export default HouseGrid;
