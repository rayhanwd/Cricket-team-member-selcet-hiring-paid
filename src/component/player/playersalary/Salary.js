import React from 'react';
import './Salary.css';
const Salary = (props) => {

const salary = props.salary;

  const total = salary.reduce((total,prd) => total + prd.salary,0)

    return (
        <div className="selectedPlayer">
            <h4 className="title">{salary.length} Player selected</h4>
                 
            <div className="select-info">
            <div className="name-box">
            {salary.map(prd =><p>Name : {prd.name}</p>)}
            </div>
            <div className="salary-box">
            {salary.map(prd =><p>Salary : {prd.salary} TAKA</p>)}
            </div>
            
            <br></br>
            </div>
                 
            <h5 className="title">Total pay cost : {total} TAKA</h5>
        </div>
    );
};

export default Salary;