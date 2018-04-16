import React from "react";
import "./index.css";

class City extends React.Component{
    constructor(props){
        super(props);

    }
    render(){
        return <div id="city">
            <p>本地服务开通城市</p>
            <ul>
                <li>上海</li>
                <li>北京</li>
                <li>南京</li>
                <li>天津</li>
                <li>广东</li>
                <li>成都</li>
                <li>杭州</li>
                <li>深圳</li>
                <li>苏州</li>
                <li>西安</li>
                <li>重庆</li>
                <li>长沙</li>
            </ul>
        </div>
    }
}

export default City;