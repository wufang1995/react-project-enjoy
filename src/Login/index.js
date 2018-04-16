import React from "react";
import "./index.css";
class Login extends React.Component{
    constructor(props){
        super(props);
        }

    render(){
        return <div id="login">

                <img src={require("./2.png")} alt=""/>
                <input type="text" placeholder="手机号"/>
                <div className="denglu">
                    <input type="text" placeholder="短信验证码"/>
                    <button>获取验证码</button>
                </div>
                <button>登录</button>
                <p>未注册的用户登录后自动创建账户</p>
                <p> 登录即表示您同意<span>用户协议</span></p>

        </div>
    }
}

export default Login;