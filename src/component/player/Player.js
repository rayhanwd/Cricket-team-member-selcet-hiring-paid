import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUserPlus } from '@fortawesome/free-solid-svg-icons'
import './Player.css';
import Button from 'react-bootstrap/Button';
// import './../bootstrap.min.css';
const Player = (props) => {


    const {photo,name,team,salary} = props.player;


    return (
     
    <div className="show-player">
        <div className="player-info">
       <div className="player-image">
       <img src={photo} alt=""/>
       </div>
       <div className="player-bio">
           <h3>{name}</h3> 
           <h4>{team}</h4>
           <h5>BDT: {salary} TAKA</h5>

        <Button  className="add-btn" onClick={() =>props.AddPlayer(props.player)}
        ><FontAwesomeIcon icon={faUserPlus} />  Add to team</Button>
             </div>
        </div>
    </div>
        
    );
};

export default Player;