import React,{Component} from 'react';
import ShowList from './ShowList';
import './Common.css';
export default class AddFriend extends Component{
    constructor(props)
    {
        super(props)
        this.state={
            name:'Hanna Varghese',
            friendsList:["Vishnu","Sam","Jesty"],
            newFriend:''
        }
        this.addNew=this.addNew.bind(this)
        this.changeEvent=this.changeEvent.bind(this)
    }
    changeEvent(e)
    {
        this.setState({
            newFriend:e.target.value
        })
    }
    addNew(e)
    {
        this.setState({
          
            friendsList: this.state.friendsList.concat([this.state.newFriend])
        })
    }
    render()
    {
        return(
            <div className="comptext">
                <h3>Add Friend</h3>
                <h5>Add your friend below</h5>
                <br></br>
                <input type="text" onChange={this.changeEvent}></input>
                <button onClick={this.addNew}>Add</button>
                <h4>New friend to be added : {this.state.newFriend}</h4>
                <ShowList names={this.state.friendsList}></ShowList>
            </div>
        )
    }
} 