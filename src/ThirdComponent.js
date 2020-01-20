import React, {Component} from 'react';
import './Common.css';

export default class ThirdComponent extends Component {

    constructor(props) {
        super(props)
        this.state={name:'Hanna'}
    }

    render() {
        const anotherData=(<p >In third component</p>)
        return (<div className="comptext">
        <h3 className="heading_cls">Third Component</h3>
            {this.props.passedData}
            {anotherData}
        <h5>Component Created By : {this.state.name}</h5> 
        </div>)
    }
}