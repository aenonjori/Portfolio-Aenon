import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import project1 from "../assets/project-1.jpeg"

export default function MediaCard() {
  return (
    <Card 
    className='bg-black'
    sx={{ maxWidth: 380 }}>
      <CardMedia
        sx={{ height: 240 }}
        image={project1}
        title="green iguana"
      />
      <CardContent >
        <Typography gutterBottom variant="h5" component="div">
          SAUP Portal
        </Typography>
        <Typography variant="body2">
        SAUP Portal is used to automate the process of Outreach projects, proposals in the deparment of OCES in Holy Angel University. Built using the MERN Tech Stack
        </Typography>
      </CardContent>
      <CardActions>
            <Button href='https://saup-portal-hau.onrender.com/'>Deployed</Button>
        <Button size="small">Github</Button>
      </CardActions>
    </Card>
  );
}