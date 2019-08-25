import React from 'react';
import Song from './Song'
import SongList from '../api/songList'
import SongDetails from './SongDetails'

class App extends React.Component{
    constructor(){
        super();
        this.state={selectedSong:"",songList:SongList};
        this.setSongSelected=this.setSongSelected.bind(this);
    }
    
    setSongSelected(song){
        this.setState({selectedSong:song});
    }

    render(){
        return(
            <div className="ui segment">
            <Song onSongSelect={this.setSongSelected} songList={this.state.songList}/>
            <SongDetails songSelected={this.state.selectedSong}/>
            </div>
        )
    }
}


export default App;
