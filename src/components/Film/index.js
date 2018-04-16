import React from "react";
import "./index.css";
import axios from 'axios';

class Film extends React.Component{
    constructor(props){
        super(props);
        this.state={
            filmList:[]
        }
    }
    render(){
        return <div id="film">
           <p>
            <span><a>全部</a></span>
            <span>智能排序<i className="iconfont">&#xe639;</i></span>
           </p>
           <ul>
           {
            this.state.filmList.map(item=>{
              return <li>
                <img src={`${item.product_image}?imageView2/2/w/0/h/0|watermark/1/image/aHR0cHM6Ly9kbi1pbWctc2VyaW91c2FwcHMucWJveC5tZS93bS5wbmc=/dissolve/100/gravity/SouthEast/ws/.1`}/>
                <p>
                   <span>{item.name}</span>
                   <span>{(item.price)/100}元/{item.show_entity_name}</span>
                   <span>￥{item.original_price/100}</span>
                </p>
              </li>
            })
           }
           </ul>

        </div>
    }
    componentDidMount(){
        axios(`/4/tab/category_product_list.json?category_id=${this.props.match.params.id}&sort=1&from_id=0&city_id=140&page=0`).then(res=>{
        console.log(res.data)
        this.setState({
          filmList:res.data
      })
    })
    }
}

export default Film;