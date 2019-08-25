import React from 'react';


class Song extends React.Component{

    constructor(props){
        
        super(props);
       // this.state={selectedSong:null};
        //same function with new this contex
       // this.onClickHandler=this.onClickHandler.bind(this);
    }

    onClickHandler(e,song){
        console.log(e);
        //calling back to the AppJs func
        this.props.onSongSelect(this);
    }

    render(){
        const songArray=this.props.songList;
        return songArray.map(song=> (<div key={song.title}>
                    <label for="btn">{song.title}</label>
                     <button id="btn" className="ui primary button" onClick={(e,song)=>this.onClickHandler(e,song)}>Select </button>
                    </div>));
    }

}



export default Song;