import Login from "../login";
import Home from "../home";
import Dashboard from "../dashboard";
import Items from "../items";
import Register from "../login/register";

export const config = [
    {component:Login,path:"/",id:1,name:"login"},
    {component:Home,path:"/dashboard",id:2,name:"home"},
    {component:Register,path:"/register",id:3,name:"register"},
    {component:Dashboard,path:"/dashboard/home",id:3,name:"Dashboard"},
    {id:4,name:"Items",path:"/dashboard/items",component:Items}
]

