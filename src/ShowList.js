import React,{Component} from 'react';
import './Common.css';
export default class ShowList extends Component
{
    constructor(props)
    {
        super(props)   
    }

    render() {
        return (
          <div>
            <h3 className="left_cls">Your Friends Are :</h3>
            <ul>
              {this.props.names.map((friends) => <li className="left_cls">{friends}</li>)}
            </ul>
          </div>
        )
      }
} 