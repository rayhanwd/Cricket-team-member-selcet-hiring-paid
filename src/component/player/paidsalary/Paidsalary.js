import { useEffect,useState } from 'react';
import playerData from '../../../fakeData/Players.json';
import Player from './../Player';
import Salary from './../playersalary/Salary';
import './Paidsalary.css';

const Paidsalary = () => {

const [salary,setSelect] = useState([]);

    const [Players,setPlayers] = useState([]);
  
        useEffect(() =>{
            setPlayers(playerData);
          
   
        }, []);
        const AddPlayer = (player) =>{
        const Newselected = [...salary,player];
        setSelect(Newselected);
        
        }

    return (
    <div className="aa">
           
    <div className="dd">
    {

Players.map(player =>
   
<Player AddPlayer={AddPlayer} player = {player} ></Player>

)
}
</div>
<div className="selected-player">
<Salary salary={salary}></Salary>
</div>
    </div>
    );
};

export default Paidsalary;