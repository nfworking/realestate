import React from "react";
import { Grid, Card, CardContent, Typography } from "@mui/material";
import Container from "@mui/material/Container";
import data from "./utils/sortdata.json";
import { CardActionArea } from "@mui/material";
import CardMedia from "@mui/material/CardMedia";
import { Button, CardActions } from "@mui/material";
import SendIcon from "@mui/icons-material/Send";

const HouseSort = () => {
  return (
    <>
      <Container maxWidth="lg">
        <Typography variant="h4" align="center" style={{ marginTop: "50px" }}>
        Filter By 🏘️
        </Typography>
        <Grid container spacing={5} style={{ marginTop: "20px" }}>
          {data.map((result, index) => (
            <Grid item xs={12} sm={4} ms={4} key={index}>
              <Card
                sx={{ maxWidth: 345, color: "white", backgroundColor: "black" }}
              >
                <CardActionArea>
                  <CardContent style={{ color: "white" }}>
                    <Typography gutterBottom variant="h5" component="div">
                      {result.filter1}
                    </Typography>
                  </CardContent>
                </CardActionArea>
                <CardActions></CardActions>
                <Button
                  variant="contained"
                  href={result.url}
                  endIcon={<SendIcon />}
                >
                  Sort by Price
                </Button>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Container>
    </>
  );
};

export default HouseSort;
