import React, { useEffect, useState } from 'react';

import { api, endpoints } from '../api/index';

const CodeWars = () => {
  const [wars, setWars] = useState([]);
  const [total, setTotal] = useState('');

  useEffect(() => {
    api
      .get(endpoints.codeChallenges)
      .then(({ data }) => {
        if (data.data.length > 3) {
          data.data.length = 3;
        }
        setWars(data.data);
        setTotal(data.totalItems);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  return (
    <section className="bg-secondary" style={{ padding: '45px 0' }}>
      <div className="container">
        <div className="row">
          <div className="col-12 col-md-3 d-flex align-items-center justify-content-center">
            <div className="mb-3 md-md-0">
              <h2 className="text-white m-0">CodeWars: </h2>
              <div
                className="text-right text-white"
                style={{ marginTop: '-5px' }}
              >
                total: {total} / latest:
              </div>
            </div>
          </div>
          {wars.map((war) => (
            <div className="col-12 col-md-2" key={war.id}>
              <a
                href={`https://www.codewars.com/kata/${war.id}`}
                target="blank"
              >
                <div className="card" style={{ height: '50px' }} key={war.id}>
                  <div className="card-body bg-light d-flex align-items-center m-0">
                    <h3
                      className="card-title text-center m-0 text-dark"
                      style={{ fontSize: '12px' }}
                    >
                      {war.name.substring(0, 35)}
                    </h3>
                  </div>
                </div>
              </a>
            </div>
          ))}
          <div className="col-12 col-md-2 d-flex align-items-center justify-content-center mt-5 mt-md-0">
            <a href="https://www.codewars.com/users/PK007PK" target="blank">
              <div
                className="border border-white d-flex align-items-center justify-content-center rounded-circle mb-4"
                style={{ width: '50px', height: '50px' }}
              >
                <i className="fas fa-ellipsis-h text-white" />
              </div>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

CodeWars.propTypes = {};

export default CodeWars;
