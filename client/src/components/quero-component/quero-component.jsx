import axios from 'axios';
import React, { useEffect, useState } from "react";


export function QueroComponent() {
  const [resp, setResp] = useState();

  useEffect(() => {
    axios
      .get(`http://localhost:${process.env.REACT_APP_SERVER_PORT}`, {
        params: {
          table: "querotable"
        }
      })
      .then((response) => setResp(response.data));
  }, []);

  return (
    <div>
      <div>{JSON.stringify(resp)}</div>
    </div>
  );
}