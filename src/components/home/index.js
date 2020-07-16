import React from 'react';
import PropTypes from 'prop-types';
import AppBar from '@material-ui/core/AppBar';
import CssBaseline from '@material-ui/core/CssBaseline';
import Divider from '@material-ui/core/Divider';
import Drawer from '@material-ui/core/Drawer';
import Hidden from '@material-ui/core/Hidden';
import IconButton from '@material-ui/core/IconButton';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import MenuIcon from '@material-ui/icons/Menu';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import { useHistory } from 'react-router-dom'
import RouteConfig from '../router';
import {config} from '../utils/routerConfig'
import $ from 'jquery'
const drawerWidth = 180;

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
  },
  drawer: {
    // display:'none'
  },
  appBar: {
    
  },
  menuButton: {
    marginRight: theme.spacing(2),
   
  },
 menuButton1:{
     textAlign:'right'
 },
 appBarTitle:{
     display:'flex',
     justifyContent:'center',
     alignItems:'center',
     height:'100%',
     width:'100%'
 },
  toolbar: theme.mixins.toolbar,
  drawerPaper: {
    width: drawerWidth,
  },
  customToolbar:{
    borderRight:'none',
    backgroundColor:'chocolate'
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing(3),
  },
}));

const Home = (props) =>{
  const { window } = props;
  const classes = useStyles();
  const theme = useTheme();
  const [mobileOpen, setMobileOpen] = React.useState(false);
  let history = useHistory()
  const drawerList =config.slice(3);
  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };
const location = history.location.pathname;
console.log(location)
const setActiveLink = (e,link)=>{
  setMobileOpen(false);
    $(".nav_link").removeClass("active");

    $(`#nav${link.id}`).addClass("active");
  console.log(e,link,history);
  history.push(`${link.path}`)
}
  const drawer = (
    <div>
      <div className={`${classes.toolbar} customToolbar`} >
          Title
          </div>
      <Divider />
      <List className="paddingTB0">
        {drawerList.map((link, index) => {
          const cls = location.toLocaleLowerCase() === link.path.toLocaleLowerCase() ? "nav_link active" : "nav_link";
          console.log(location,link.path)
          return(

          <ListItem button key={link.name} id={`nav${link.id}`} className={cls} onClick={(e)=>setActiveLink(e,link)}>
            <ListItemIcon><link.icon/></ListItemIcon>
            <ListItemText primary={link.name} />
          </ListItem>
        )})}
      </List>
      
    </div>
  );

  const container = window !== undefined ? () => window().document.body : undefined;

  return (
    <div className={classes.root}>
      <CssBaseline />
      <AppBar position="fixed" className={classes.appBar}>
        <Toolbar>
        
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            className={classes.menuButton1}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" noWrap className={classes.appBarTitle}>
             Home Budget
          </Typography>
          
        </Toolbar>
      </AppBar>
      <nav id="drawerNav" className={classes.drawer} aria-label="mailbox folders">
        {/* The implementation can be swapped with js to avoid SEO duplication of links. */}
        <Hidden smUp implementation="css">
          <Drawer
            container={container}
            variant="temporary"
            anchor={theme.direction === 'rtl' ? 'right' : 'left'}
            open={mobileOpen}
            onClose={handleDrawerToggle}
            classes={{
              paper: classes.drawerPaper,
            }}
            id="drawerlist"
            ModalProps={{
              keepMounted: true, // Better open performance on mobile.
            }}
          >
            {drawer}
          </Drawer>
        </Hidden>
        <Hidden xsDown implementation="css">
          <Drawer
            classes={{
              paper: classes.drawerPaper,
            }}
            variant="permanent"
            open
          >
            {drawer}
          </Drawer>
        </Hidden>
      </nav>
      <main className={classes.content}>
        <div className={classes.toolbar} />
        <div id="content-block">
          <RouteConfig/>
        </div>
        
      </main>
    </div>
  );
}

Home.propTypes = {
  
  window: PropTypes.func,
};

export default Home;
