import React from 'react';
import Song from './Song'
import SongList from '../api/songList'

class App extends React.Component{
    constructor(){
        super();
        this.state={selectedSong:"",songList:SongList};
    }
    
    setSongSelected(){
        console.log("ss");
        //this.setState({selectedSong:""});
    }

    render(){
        return(
            <div className="ui segment">
            <Song onSongSelect={this.setSongSelected} songList={this.state.songList}/>
            </div>
        )
    }
}


export default App;
