import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import project2 from "../assets/project-2.jpeg";

export default function MediaCard2() {
  return (
    <Card 
    className='bg-black'
    sx={{ maxWidth: 380 }}>
      <CardMedia
        sx={{ height: 240 }}
        image={project2}
        title="green iguana"
      />
      <CardContent >
        <Typography gutterBottom variant="h5" component="div">
          HAU Redesign
        </Typography>
        <Typography variant="body2">
          A simple redesign of the Holy Angel University Online Platform, using HTML & CSS
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small">Github</Button>
      </CardActions>
    </Card>
  );
}