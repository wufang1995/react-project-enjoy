import React from "react";
import "./index.css";
import axios from 'axios';
class Sort extends React.Component{
    constructor(props){
        super(props);
        this.state={
            sortlist:[]
        }
    }
    render(){
        return <div id="sort">
        {
            this.state.sortlist.map(item=>{
                return  <p>{item.sort_name}</p>
            })
        }
        </div>
    }
 componentDidMount(){
    axios("/4/tab/sub_category.json?category_id=4&city_id=140&from_id=0").then(res=>{
        console.log(res.data.sort)
        this.setState({
          sortlist:res.data.sort

      })
    })
    }
}
export default Sort;