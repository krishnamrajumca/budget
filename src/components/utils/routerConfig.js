import Login from "../login";
import Home from "../home";
import Dashboard from "../dashboard";
import Items from "../items";
import Register from "../login/register";


import HomeIcon from '@material-ui/icons/Home';
import ShoppingBasketIcon from '@material-ui/icons/ShoppingBasket';

export const config = [
    {component:Login,path:"/",id:1,name:"login",exact:true},
    {component:Home,path:"/dashboard",id:2,name:"home",exact:false},
    {component:Register,path:"/register",id:3,name:"register",exact:true},
    {component:Dashboard,path:"/dashboard",id:3,name:"Dashboard",exact:true,icon:HomeIcon},
    {id:4,name:"Items",path:"/dashboard/items",component:Items,exact:true,icon:ShoppingBasketIcon}
]

