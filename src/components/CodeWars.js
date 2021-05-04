import React, { useEffect, useState } from 'react';
import { api, endpoints } from '../api/index';

const CodeWars = () => {
  const [wars, setWars] = useState([]);

  useEffect(() => {
    api
      .get(endpoints.codeChallenges)
      .then(({ resp }) => {
        setWars(resp.data);
        console.log(resp.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  return (
    <section>
      {wars.length ? (
        wars.map((war) => <div key={war.id}>{war.name}</div>)
      ) : (
        <h2>Loading data</h2>
      )}
    </section>
  );
};

CodeWars.propTypes = {};

export default CodeWars;
