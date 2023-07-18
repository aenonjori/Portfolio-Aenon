import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import project3 from "../assets/project-3.jpeg";

export default function MediaCard3() {
  return (
    <Card 
    className='bg-black'
    sx={{ maxWidth: 380 }}>
      <CardMedia
        sx={{ height: 240 }}
        image={project3}
        title="green iguana"
      />
      <CardContent >
        <Typography gutterBottom variant="h5" component="div">
          LDM Pharmacy
        </Typography>
        <Typography variant="body2">
            A Prototype website for buying medicines online using Wordpress and its built-in plugins and templates.
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small">Github</Button>
      </CardActions>
    </Card>
  );
}