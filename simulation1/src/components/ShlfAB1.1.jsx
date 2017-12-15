        //37E-1
import React, {Component} from 'react';
        //37E-2
export default class ShlfAB1 extends Component{
        //36I  
    constructor(){
        super();
        //36C
        this.state = {
            name: '',
            price: 0
        }
    }
    
        //36F
    render(){
        return(         //37D
            <div>
                <input onChange={ e => this.updateName(e.target.value)}/>
                <input onChange={ e => this.updatePrice(e.target.value)}/>
                <button onClick={()=> this.handleAddInv()}>Add to inventory</button>
            </div>
        )
    }
}