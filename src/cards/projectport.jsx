import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import project4 from "../assets/project-4.jpeg";

export default function MediaCard4() {
  return (
    <Card 
    className='bg-black'
    sx={{ maxWidth: 380 }}>
      <CardMedia
        sx={{ height: 240 }}
        image={project4}
        title="green iguana"
      />
      <CardContent >
        <Typography gutterBottom variant="h5" component="div">
          First Portfolio
        </Typography>
        <Typography variant="body2">
        My very first portfolio built using HTML5, CSS & Javascript.
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small">Github</Button>
      </CardActions>
    </Card>
  );
}