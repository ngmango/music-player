import React, { Component } from 'react';
import {BrowserRouter as Router, Route, Switch, Link} from 'react-router-dom';
import SongsList from './components/SongsList';
import SongDetails from './components/SongDetails';
import "./App.css";

class App extends Component {
  constructor(){
    super()
    this.state = {
      // source : 0,
      index : 0,
      currentState : false,
    }
    this.nextSong = this.nextSong.bind(this);
    this.playAudio = this.playAudio.bind(this);
    this.playC = this.playC.bind(this);

  }

  componentWillMount(){
    this.setState({
      currentState : false,
      index : this.props.songs[0].id,
      // source: this.props.songs[0].source,
     
    })    
  }

  componentDidUpdate(){
    this.playAudio()
  }


  playAudio() {
    let  music = document.getElementById('player');    
      if (this.state.currentState) {
        music.play();
      } else {
        music.pause();
      }
      
  }

  nextSong(direction){
   
    this.setState({
      index: this.state.index+direction,
    })
  }

  playC(id){
    const toggled = !this.state.currentState
    this.setState({
      currentState : toggled,
      index:id,
    })   
  }

  render() {
    
    return (
      <div className="App">
      
        <Router>
          <div>
            <nav>
              <Link to="/">Home</Link>
              <audio id="player" 
                src={this.props.songs[this.state.index].source} type="audio/mp3">
                
              </audio>

              <button 
              className="prev" onClick={() => this.nextSong(-1)} 
              disabled={this.state.index <= 0}> {'<<'} 
              </button>

              <button 
              className="playa" onClick={() => this.playC(this.state.index)}> 
              {(this.state.currentState === true)? 'Pause' : 'Play'}  
              </button>

			      	<span className="span"> Now Playing: {this.props.songs[this.state.index].title}</span>
			      	<button 
              className="next" onClick={() => this.nextSong(+1)} 
              disabled={this.state.index === this.props.songs.length-1}>{'>>'} 
              </button>

            </nav>
            <Switch>

              <Route exact path="/" render={({match})=>
                <SongsList songs={this.props.songs} match={match}
                currentState={this.state.currentState}
                playC={this.playC}
                index={this.state.index}/>}
                />
              <Route path='/:songId'render={({match})=>
                <SongDetails songs={this.props.songs} match={match} 
                currentState={this.state.currentState}
                playC={this.playC}
                index={this.state.index}/>}
                />

            </Switch>
          </div>
        </Router>
        
      </div>
    );
  }
}

export default App;
