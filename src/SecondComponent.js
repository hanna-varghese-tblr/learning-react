import React, {Component} from 'react';
export default class SecondComponent extends Component
{
    constructor(props) {
        super(props)
    }

    render(){
        const heading=( <h2>Welcome to the second component</h2>)
        const secComponentElement=(<h4>The second component element</h4>)
        return(
            <div >Second Component
                {heading}
                {secComponentElement}
                {secData}
            </div>)
    }
}