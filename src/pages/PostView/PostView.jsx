import React, { useState, useEffect } from 'react';
import Sidebar from '../../components/SideBar/Sidebar';
import ContactCard from '../../components/ContactCard/ContactCard';
import Listing from '../../components/Listing/Listing';
import { userService } from '../../services'

import { makeStyles } from '@material-ui/core/styles';
import Pagination from '@material-ui/lab/Pagination';
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
import { green } from '@material-ui/core/colors';
import FavoriteIcon from '@material-ui/icons/Favorite';
import ShareIcon from '@material-ui/icons/Share';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import MoreVertIcon from '@material-ui/icons/MoreVert';

const useStyles = makeStyles((theme) => ({
    root: {
      maxWidth: 300,
      minWidth: 300,
      position: 'relative',
      cursor: 'pointer',
      marginRight: 10,
      marginBottom: 10,
      backgroundColor: '#FFFFFF'
    },
    media: {
      height: 0,
      paddingTop: '56.25%', // 16:9
      
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
      backgroundColor: green[500],
    }
  }));

export function PostView(postid) {
    const classes = useStyles();
    const [postData, setPostData] = useState([])
 
    useEffect( () => {
       const fetchedpost = async()=> { 
           const result = await userService.getPostById(postid);
           setPostData(result.data.data);
       };
       fetchedpost();
    },[postid]);

    if(postData === null){
        return (
          <div className="nulldata">
            ...Loading...
          </div>
        )
      }

      else{

    return (


    <div className="wrapper">
        <div className="listing-display">
            <Card className={classes.root}>
              <CardHeader
                avatar={
                  <Avatar aria-label="recipe" className={classes.avatar}>
                    Eco
                  </Avatar>
                }
                action={
                  <IconButton aria-label="settings">
                    <MoreVertIcon />
                  </IconButton>
                }
                title={postData.titlePost}
                subheader={postData.catergory}
              />
              <CardMedia
                className={classes.media}
                image={postData.Images}
                title={postData.title}
              />
              <CardContent>
                <Typography variant="body2" color="textSecondary" component="p">
                <h3>{postData.descriptionPost}</h3>
                <h3>{postData.price}</h3>
                </Typography>
              </CardContent>
              
          </Card>
  
        </div> 


    </div>
    
        // <div className="PostView">
        //     <Sidebar></Sidebar>
        //     <Listing></Listing>
        //     <ContactCard></ContactCard>
        // </div>
    )
    }
}