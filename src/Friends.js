import React, {Component} from 'react';
import './Common.css';

export default class Friends extends Component {

    constructor(props) {
        super(props)
        this.state={name:'Hanna',place:'Kochi'}

        this.handleChange=this.handleChange.bind(this);
        this.placeChange=this.placeChange.bind(this);
    }
    handleChange(e)
    {
        this.setState({
            name:e.target.value
        })
    }
    placeChange(e)
    {
        this.setState({
            place:e.target.value
        })
        
    }
    render() {
        return (<div className="comptext">
        <h3 className="heading_cls">Bindings And Events</h3>
        
         <input type="text" id="new_friend" name="new_friend" value={this.state.name} onChange={this.handleChange}></input>
        <br></br>
        <input type="text" id="place" name="place" value={this.state.place} onChange={this.placeChange}></input>
         <p>Hello {this.state.name},{this.state.place}</p>
        </div>)
       
    }
}