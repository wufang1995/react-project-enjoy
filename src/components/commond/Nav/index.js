import React from "react";
import "./index.css";
import {
  NavLink
} from "react-router-dom";
class Nav extends React.Component{
    constructor(props){
        super(props);
    }
    render(){
        return <div id="nav">
        <ul>
            <li onClick={()=>{
                this.props.event();
            }}><NavLink to="/home">分类</NavLink></li>
            <li>
                <img src={require("./1.png")} alt=""/>
                <span>北京</span>
                <i className="iconfont">&#xe639;</i>
            </li>
            <li><span><NavLink to="/login">登录</NavLink></span><i className="iconfont">&#xe6d1;</i></li>
        </ul>
        </div>

    }
}

export default Nav;