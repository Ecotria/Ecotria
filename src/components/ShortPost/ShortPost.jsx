import React, { useState, useEffect, useDispatch } from 'react';
import './ShortPost.css'
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



function ShortPost() {
  const classes = useStyles();
  const [expanded, setExpanded] = useState(false);
  const [currentPage, setPageNumber] = useState(1);
  const [postsLimit, setPostsLimit] = useState(8);
  const [post, setPost] = useState([]);
  let total = localStorage.getItem('Total Posts');
  const paginationIndex = Math.ceil(total/8);
  
  useEffect( () => {
    const fetchPost = async () =>{
      const result = await userService.getPostPage(currentPage,postsLimit);
      setPost(result.data.data);
    };
    fetchPost();
  },[currentPage]);


 

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  const handlePagination = (event, value) =>{
    setPageNumber(value);
  };

  

  if(post === null){
    return (
      <div className="nulldata">
        ...Loading...
      </div>
    )
  }

  else{

    return  (
     <div className="wrapper"> 
      <div className="cards">
      { post? post.map((post, index) => (
        <div className="card-item" key={index}>
            <Card className={classes.root}>
              <CardHeader
                avatar={
                  <Avatar aria-label="recipe" className={classes.avatar}>
                    Eco
                  </Avatar>
                }
                title={post.titlePost}
                subheader={post.catergory}
              />
              <CardMedia
                className={classes.media}
                image={post.Images}
                title="Industria Agrícola"
              />
              <CardContent>
                <Typography variant="body2" color="textSecondary" component="p">
                <h3>{post.descriptionPost}</h3>
                <h1>${post.price? post.price:0}</h1>
                </Typography>
              </CardContent>
              
          </Card>
  
        </div>
      ))
      : <div>Esto ta vacio</div>
      }  
      </div>
   
      <div className="pagination">
        <Pagination className="pagination-bottom" page={currentPage} onChange={handlePagination} count={paginationIndex} defaultPage={1} showFirstButton showLastButton />
      </div>


    </div>
    )

  }

  
            
}
   
export default ShortPost;