import React, {Component} from 'react';
import {BrowserRouter as Router, Route, Switch, Link} from 'react-router-dom';



class SongsList extends Component {
    render() {
        let copy = Array.from(this.props.songs)
        console.log(this.props)
        let songsJSX = copy.map((song, ind) =>{
        
        return (   
                
            <div> <Link to={"/"+song.id}> {song.title}</Link>
                
                <audio id="player"
                    src={this.props.songs[this.props.index].source} type="audio/mp3">>
                </audio>
                <button 
                    onMouseUp={() => {this.props.playC(song.id)}}> 
                    {(this.props.currentState === true && this.props.index === song.id)? 'Pause' : 'Play'}  
                </button>
            </div>
        )
        })
    
    return(
        <ul>
            {songsJSX}
        </ul>
     )}}
export default SongsList;