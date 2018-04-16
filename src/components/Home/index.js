import React from "react";
import "./index.css";
import axios from 'axios';
import InfiniteScroll from 'react-infinite-scroller';
class Home extends React.Component{
    constructor(props){
        super(props);
        this.state={
            datalist:[] 
        }
        this.current = 1;
    }
    render(){
        return <div id="home">
        <InfiniteScroll
            loadMore={this.handleLoadMore.bind(this)}
            hasMore={true}
            loader={<div className="loader" key={0}>正在加载...</div>}
        >
            {
            this.state.datalist.map((item,index)=>{
                    return <section key={index}>
                        <h1>每周精选餐饮</h1>
                        <p>{item.group_section.desc}</p>
                        {
                            item.tabs.map(tab=>{
                                return <div key={tab.id}><img src={`${tab.url}?imageView2/1/w/670/h/446|watermark/1/image/aHR0cHM6Ly9kbi1pbWctc2VyaW91c2FwcHMucWJveC5tZS93bS5wbmc=/dissolve/100/gravity/SouthEast/ws/.1`}/><p>{tab.title}</p><p>{tab.desc}</p> </div>
                            })
                        }
                    </section>
                })
            }
        </InfiniteScroll>
        </div>
    }
    handleLoadMore(){
        this.current++;
        axios(`/hub/home/v1/web/week_choice.json?city_id=140&page=${this.current}`).then(res => {
            this.setState({
                datalist: [...this.state.datalist,...res.data]
            })
        })
    }
    componentDidMount(){
        axios("/hub/home/v1/web/week_choice.json?city_id=140&page=0").then(res=>{
            //console.log(res.data)
            this.setState({
                datalist:res.data
            })
        })
    }
}

export default Home;