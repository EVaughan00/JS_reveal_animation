import React, { Component } from 'react';

import '../Styles/reveal.css'

class Reveal extends Component {
    componentDidMount () {

            var magic = document.getElementById("magic"),
            magicWHalf = 100;
            document.addEventListener('mousemove', function(e) {
                magic.style.left = e.clientX - magicWHalf + 'px'
                magic.style.top = e.clientY - magicWHalf + 'px'
            });
            
    }

    render () {
        return (
            <div className="scene">
                <h1>TEXT HERE</h1>
                <div id="magic" className="magic"></div>
            </div>
          )
    }
}

export default Reveal;
