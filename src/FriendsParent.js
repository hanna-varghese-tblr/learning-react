import React ,{Component} from 'react';

export default class FriendsParent extends Component
{
    constructor(props)
    {
        this.state={
            name:'Hanna Varghese',
            friendsList:['Vishnu','Sam','Jesty']
        }
        this.handleFriends=this.handleFriends.bind(this);
    }
    handleFriends(e)
    {

    }
    render(){
        return( 
            <div className="comptext">
                <h3>Binding,Events And Listing</h3>
                 <h4>Add your new friend below :</h4>
                <input type="text" value={this.state.name} onChange={this.handleFriends}></input>
            </div>
        )
    }
} 