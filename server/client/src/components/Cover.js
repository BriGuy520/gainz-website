import React, { Component } from 'react';
import $ from 'jquery';
import superman from '../images/IMG_0187.JPG';
import ropes from '../images/IMG_0189.JPG';

class Cover extends Component {

    componentDidMount(){
        $("#slideshow > div:gt(0)").hide();

        setInterval(function(){
            $('#slideshow > div:first')
                .fadeOut(1000)
                .next()
                .fadeIn(1000)
                .end()
                .appendTo('#slideshow')
        }, 3000);
    }

    render(){
        return (
            <div className="slideshow">
                <div>
                    <img alt="superman pose" src={superman} />
                </div>
                <div>
                    <img alt="ropes" src={ropes} />
                </div>
            </div>
        );
    }
   
}

export default Cover;