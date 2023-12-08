import React, { Component } from 'react'

export default class ClassState extends Component {
    constructor(){
        super();
        this.state = {
            count:1,
            about:10,
        };
        this.x = 0;
    }
    incree(){
        this.x++;
        this.setState({count:this.state.count+1});
        this.setState({about:this.state.about+10});
    }
    render() {
        return (
            <div>
                <h1>Here</h1>
                <h1>Count : {this.state.count}</h1>
                <h1>About : {this.state.about}</h1>
                <button onClick={()=>this.incree()} color='primary' outline>Increement</button>
            </div>
        )
    }
}
