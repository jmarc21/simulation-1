import React, {Component} from 'react';


export default class ShlfAB1 extends Component{
    constructor(){
        super();
        this.state = {
            name: '',
            price: 0
        }
    }

    render(){
        return(        
            <div>
                <input onChange={ e => this.updateName(e.target.value)}/>
                <input onChange={ e => this.updatePrice(e.target.value)}/>
                <button onClick={()=> this.handleAddInv()}>Add to inventory</button>
            </div>
        )
    }
}