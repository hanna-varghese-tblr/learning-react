import React ,{Component} from 'react';
import ShowList from './ShowList';

export default class FriendsParent extends Component
{
    constructor(props)
    {
        super(props)
        this.state={
            name:'Hanna Varghese',
            friendsList:['Vishnu','Sam','Jesty']
        }
    }
  
    render(){
        return (
            <div className="comptext">
                 <h3>Binding And Listing</h3>
                 <h5>Name : {this.state.name}</h5>
                 <ShowList names={this.state.friendsList}></ShowList>
            </div>
        )
    }
} 