import React, { Component } from 'react';

import '../Styles/home.css'

class HomeAnimate extends Component {
    componentDidMount () {

        document.addEventListener('mousemove', function(e) {
            document.getElementById("animated_object").style.left = e.clientX - 20 + 'px'
            document.getElementById("animated_object").style.top = e.clientY - 20 + 'px'
        }, false)
    }

    render () {
        return (
            <div className="App">
                <div id="animated_object" className="mouse_move" ></div>
                <h1>Home page</h1>
            </div>
          )
    }
}

export default HomeAnimate;
