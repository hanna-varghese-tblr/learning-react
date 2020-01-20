import React,{Component} from 'react';
export default class ShowList extends Component
{
    constructor(props)
    {
        super(props)   
    }

    render() {
        return (
          <div>
            <h3>Your Friends Are :</h3>
            <ul>
              {this.props.names.map((friends) => <li>{friends}</li>)}
            </ul>
          </div>
        )
      }
} 