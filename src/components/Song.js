import React from 'react';


class Song extends React.Component{

    constructor(props){
        
        super(props);
        //same function with new this contex
       // this.onClickHandler=this.onClickHandler.bind(this);
    }

    render(){
        const songArray=this.props.songList;
        return songArray.map(song=> (<div key={song.title}>
                    <label for="btn">{song.title}</label>
                     <button id="btn" className="ui primary button" onClick={()=>this.props.onSongSelect(song)}>Select </button>
                    </div>));
    }

}



export default Song;