import React from 'react';
import axios from 'axios';


function callServer() {
  axios.get(`http://localhost:${process.env.REACT_APP_SERVER_PORT}`, {
    params: {
      table: 'querotable',
    },
  }).then((response) => {
    const resp = response.data;
    console.log(resp);
    return <div>{JSON.stringify(resp)}</div>;
  });
}

export function queroComponent() {
  return (
    <div>
      {callServer()}
    </div>
  );
}