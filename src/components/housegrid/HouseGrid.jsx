import React, { useState } from 'react'
import { BiSearch } from 'react-icons/bi';
import "./searchbar.css";
import "./HouseGrid.css";

import { Grid, Card, CardContent, Typography } from "@mui/material";
import Container from "@mui/material/Container";
import data from "../houselist/utils/slider.json";
import { CardActionArea } from "@mui/material";
import CardMedia from "@mui/material/CardMedia";
import { Button, CardActions } from "@mui/material";
import SendIcon from "@mui/icons-material/Send";

const HouseGrid = () => {
  const [search, setSearch] = useState ('');
  return (
    <>    
     
      <Container maxWidth="lg">
        <Typography variant="h4" align="center" style={{ marginTop: "50px" }}>
          Our Houses 🏘️
        </Typography>
        <div className="search_input">
            <BiSearch className='search_icon'/>
            <input type="text"  id="searchInput" placeholder='Search for any property' onChange={(event) => {
              setSearch(event.target.value)
            }}/>
          </div>
        <Grid container spacing={5} style={{ marginTop: "20px" }}>
          {data.filter((val) => {
              if(search == ""){
                return val;
              } else if(val.name.toLowerCase().includes(search.toLocaleLowerCase())){
                return val;
              }
            }).map((result, index) => (
            <Grid item xs={12} sm={4} ms={4} key={index}>
              <Card
                sx={{ maxWidth: 345, color: "white", backgroundColor: "black" }}
              >
                <CardActionArea>
                  <CardMedia
                    component="img"
                    height="140"
                    image={result.image}
                    alt="green iguana"
                  />
                  <CardContent style={{ color: "white" }}>
                    <Typography gutterBottom variant="h5" component="div">
                      {result.name}
                    </Typography>
                    <Typography variant="body2" color="white">
                      {result.detail}
                    </Typography>
                    <Typography variant="body2" color="white">
                      ${result.price}
                    </Typography>
                  </CardContent>
                </CardActionArea>
                <CardActions></CardActions>
                <Button
                  variant="contained"
                  href={result.url}
                  endIcon={<SendIcon />}
                >
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
