import React from 'react';
import {} from 'antd'
import 'antd/dist/antd.css'
import { Menu, Icon } from 'antd';

class Home extends React.Component{
    constructor(){
        super(props)
        this.state = {

        }
    }
    handleClik(e){

    }
    render(){
        return(
            <Menu onClick = {this.handleClik}>
                
            </Menu>
        )
    }
}