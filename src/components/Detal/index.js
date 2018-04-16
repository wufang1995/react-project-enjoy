import React from "react";
import "./index.css";
import axios from 'axios';
import ReactSwipe from 'react-swipe';
class Detal extends React.Component{
    constructor(props){
        super(props);
        this.state={
            swipelist:[]
        }
    }
    render(){
        return <div id="detal">
          <ReactSwipe className="carousel" swipeOptions={{auto:2000,continuous:false}} key={this.state.swipelist.length}>
            {
              this.state.swipelist.map(item=>{
              return <img src={item.img_url} key={item.id}/>
              })
            }
          </ReactSwipe>
        </div>
    }
   componentDidMount(){
    axios("/product/info/product_detail.json?product_id=1004528&sub_product_id=5008577").then(res=>{
        console.log(res.data.basic.product_images)
      this.setState({
        swipelist:res.data.basic.product_images
      })
    })

    }
}

export default Detal;