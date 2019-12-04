/*
 * @Description: 
 * @Version: 1.0
 * @Date: 2019-12-02 09:12:00
 * @LastEditTime: 2019-12-04 17:03:40
 */
import React from 'react';
import 'antd/dist/antd.css'
import '../../resource/Icon/iconfont.css'
import './Home.css'
import { Icon, } from 'antd';
export default class Home extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            homeCard:[
                {"ICONNAME":"iconfont iconid-card","ICONALT":"关于我","COLOR":"#fa709a","ADDRESS":""},
                {"ICONNAME":"iconfont iconjianlishaixuan","ICONALT":"我的简历","COLOR":"#f6d365","ADDRESS":""},
                {"ICONNAME":"iconfont iconprojector-fill","ICONALT":"我的项目","COLOR":"#43e97b","ADDRESS":""},
                {"ICONNAME":"iconfont iconmail","ICONALT":"联系我","COLOR":"#6991c7","ADDRESS":""},
            ]
        }
    }
    handleClik = e => {
        console.log(e)
    }
    render(){
        return (
            <div className ='rockBottom'>
                <div className = 'homeDiv'>
                    <div className = 'leftSider'>
                        <div className='logoArea'>
                            <Icon className = 'logo' type="cloud" theme="filled" />
                            {/* <Icon className = 'logo' type="home" theme="twoTone" /> */}
                        </div>
                        <div className ='textArea'>
                            <div className = 'textContent'>
                                <h6>HELLO
                                    <span>WORLD</span>
                                </h6>
                            </div>
                        </div>
                    </div>
                    <div className = 'innerContent'>
                        <div className='header'>
                            <span className='tittleOne'>我是青铜</span><span className='tittleTwo'>一名web前端开发</span>  
                        </div>
                        <CardContent />
                    </div>
                </div>
            </div>

        )
    }
}
class CardContent extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            homeCard:[
                {"ICONNAME":"iconfont iconid-card","ICONALT":"关于我","COLOR":"#fa709a","ADDRESS":""},
                {"ICONNAME":"iconfont iconjianlishaixuan","ICONALT":"我的简历","COLOR":"#f6d365","ADDRESS":""},
                {"ICONNAME":"iconfont iconprojector-fill","ICONALT":"我的项目","COLOR":"#43e97b","ADDRESS":""},
                {"ICONNAME":"iconfont iconmail","ICONALT":"联系我","COLOR":"#6991c7","ADDRESS":""},
            ]
        }
    }
    creatCard() {
        let cardElement = []
        this.state.homeCard.map((item) => {
            cardElement.push(
                <div className="cardStyle">
                    <a href={item.ADDRESS}>
                        <span class={item.ICONNAME} style={{ color: item.COLOR }}>{item.ICONALT}</span>
                    </a>
                </div>
            )
        })
        return (
            <div className='container'>{cardElement}</div>
        )
    }
    render(){
        return(
            <div className='content'>{this.creatCard()}</div>
        )
    }
}