import React from "react";
import "./index.css";
import Like from './Like'
class Cart extends React.Component{
    constructor(props){
        super(props);
    }
    render(){
        return (
            <div className="cart">
                <section>
                    <ul>
                        <li></li>
                        <li><img src="https://image.ricebook.com/business/20565850923369"/></li>
                        <li>
                            <p>炭匠炉端烧·酒（金融街购物中心）特选活鳗鱼双人套餐</p>
                            <p>类型:套餐</p>
                            <p>单价:298元</p>
                            <p>
                                <span>-</span>
                                <span>1</span>
                                <span>+</span>
                                <span>del</span>
                            </p>
                        </li>
                    </ul>
                </section>
                <Like />
                <div className="balance">
                    <p></p>
                    <p>全选</p>
                    <p>合计: <span>566元</span></p>
                    <p>去结算</p>
                </div>
            </div>
        )
    }
}

export default Cart;