import React, {Component} from 'react';
import {BrowserRouter as Router, Route, Switch, Link} from 'react-router-dom';
import "../App.css";



class SongDetails extends Component {
    render() {
        let index = (this.props.match.params.songId)
        let songs = (this.props.songs)

        console.log(this.props)
        return (
            <div> 
                <p> {songs[index].title}</p>
                <p> {songs[index].description}</p>
                <audio id="player"
                    src={songs[index].source} type="audio/mp3">>
                </audio>
                <button 
                    className="playo" onClick={() => this.props.playC(songs[index].id)}> 
                    {(this.props.currentState === true && this.props.index === songs[index].id)? 'Pause' : 'Play'}  
                </button>
                
                    

                
            </div>
        )
    }
}

export default SongDetails;