import React from 'react'


function DisplayData(props) {
  return (
    <div>
        <h1>{props.firstname}</h1>
        <h2>props.{lastname}</h2>
    </div>
  );
}


export default DisplayData;