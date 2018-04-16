import React from "react";
import "./index.css";
import axios from "axios";
class Like extends React.Component {
    constructor(props) {
        super(props);
        this.state={
            dataList:[]
        };
    }
    render() {
        return (
            <div className="like">
                <p>猜你喜欢</p>
                <ul>
                    {
                    this.state.dataList.map(item=>{
                        return(
                            <li key={item.product_id}>
                                    <img src={item.product_image} alt=""/>
                                    <p>{item.name}</p>
                                <p><span>{item.price / 100}元/{item.show_entity_name}</span><span>￥{item.original_price/100}</span></p>
                                </li>
                            )
                        })
                    }
                </ul>
            </div>
        )
    }
    //
    componentDidMount() {
        axios(`/3/enjoy_product/cart_recommend_product.json?city_id=1`).then(res => {
            console.log(res.data.content)
            this.setState({
                dataList: res.data.content
            })
        })
    }
}

export default Like;