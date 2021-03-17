
import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import clsx from 'clsx';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import Collapse from '@material-ui/core/Collapse';
import Avatar from '@material-ui/core/Avatar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import { red } from '@material-ui/core/colors';
import FavoriteIcon from '@material-ui/icons/Favorite';
import ShareIcon from '@material-ui/icons/Share';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import MoreVertIcon from '@material-ui/icons/MoreVert';

const useStyles = makeStyles((theme) => ({
  root: {
    maxWidth: 310,
    maxHeight:1200
    
  },
  media: {
    height: 0,
    paddingTop: '46.25%', // 16:9
  
  },
  expand: {
    transform: 'rotate(0deg)',
    marginLeft: 'auto',
    transition: theme.transitions.create('transform', {
      duration: theme.transitions.duration.shortest,
    }),
  },
  expandOpen: {
    transform: 'rotate(180deg)',
  },
  avatar: {
    backgroundColor: red[500],
  },
}));

export default function RecipeReviewCard({Img,title}) {
  const classes = useStyles();
  const [expanded, setExpanded] = React.useState(false);
  return (
    <Card className={classes.root} style={{borderRadius:"50px 50px 50x 50px"}}>
     
      <Typography className="" variant="body2" style={{backgroundColor:"#FCF1FF",fontSize:"19px",color:"black"}} color="dark" >
      <img src={Img} alt="..." class="img-fluid" style={{height:"250px"}} ></img>
      <div style={{marginTop:"25px"}}></div>
    <h1>{title}</h1>
          This impressive paella is a perfect party dish and a fun meal to cook together with your
          guests. Add 1 cup of frozen peas along with the mussels, if you like.
        </Typography>
      {/* <CardContent  style={{backgroundColor:"#F3F2FE"}}>
        <Typography variant="body2" style={{fontSize:"15px",color:"black"}} color="dark" component="p">
    <h3>{title}</h3>
          This impressive paella is a perfect party dish and a fun meal to cook together with your
          guests. Add 1 cup of frozen peas along with the mussels, if you like.
        </Typography>
      </CardContent> */}
    </Card>


  );
}