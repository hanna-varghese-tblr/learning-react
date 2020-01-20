import React, {Component} from 'react';
import './Common.css';

export default class FirstComponent extends Component {

constructor(props) {
    super(props)
    }

render() {
    const element = (<div>Element from first component</div>)
    const anotherData=(<p>Just another data passed</p>)
    
    return (<div className="comptext">
    <h3 className="heading_cls">First Component</h3>
        {this.props.passedData}
        {anotherData}
        {element}
    </div>)
    }
}