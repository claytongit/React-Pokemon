import React, { Component } from 'react';
import api from '../../services/api';

import './style.css';

export default class Main extends Component{
    state = {
        poke: []
    }

    componentDidMount(){
        this.loadPoke();
    }

    loadPoke = async ()=>{
        const response = await api.get();

        console.log(response.data);

        this.setState({poke: response.data });
    };

    render(){
        
        return(
            <div className="container-main">
                { this.state.poke.map(poke =>(                    
                    <article key={poke._id}>
                        <img key={poke._id} src={ poke.image } />
                        <h2>{ poke.title }</h2>                     
                    </article>                    
                )) }
            </div>
        );
    }
}

