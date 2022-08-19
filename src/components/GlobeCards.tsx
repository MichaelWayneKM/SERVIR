import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

export default function GlobeCard() {
  return (
    <Card style={{ backgroundColor: '#3d3d3d'}} sx={{ maxWidth: 345, marginLeft: 20 }}>
      <CardMedia
        component="img"
        height="140"
        image="/assets/clouds.png"
        alt="green iguana"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          Kenya, Nairobi
        </Typography>
        <Typography variant="body2" color="text.secondary">
          This is a sample event lorem ipsum dolor. 
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small">Share</Button>
        <Button size="small">Learn More</Button>
      </CardActions>
    </Card>
  );
}
