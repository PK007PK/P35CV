import React, { useState, useContext } from 'react';
import { navigate } from 'gatsby-link';

import AppContext from '../AppProvider';

function encode(data) {
  return Object.keys(data)
    .map((key) => `${encodeURIComponent(key)}=${encodeURIComponent(data[key])}`)
    .join('&');
}

export default function Form({ admin }) {
  const [state, setState] = useState({});

  const { pl } = useContext(AppContext);

  const handleChange = (e) => {
    setState({ ...state, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const form = e.target;
    fetch('/', {
      method: 'POST',
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
      body: encode({
        'form-name': form.getAttribute('name'),
        ...state,
      }),
    })
      .then(() => navigate(form.getAttribute('action')))
      .catch((error) => alert(error));
  };

  return (
    <div className="card">
      <div className="card-body">
        <form
          name="PKCV contact form"
          method="post"
          action="/thanks/"
          data-netlify="true"
          data-netlify-honeypot="bot-field"
          onSubmit={handleSubmit}
          className="text-left"
        >
          {/* <div className="grey-text"> */}
          {/* The `form-name` hidden field is required to support form submissions without JavaScript */}
          <input type="hidden" name="hiden-input" value="contact" />
          <div hidden>
            <label htmlFor="bot-field">
              Don’t fill this out:{' '}
              <input
                name="bot-field"
                onChange={handleChange}
                autoComplete="off"
              />
            </label>
          </div>
          <div className="grey-text p-1">
            <div className="form-outline mb-2">
              <label className="form-label" htmlFor="name">
                {pl ? 'Imię:' : 'Name:'}
              </label>
              <br />
              <input
                autoComplete="off"
                name="name"
                onChange={handleChange}
                required
                type="text"
                className="w-80"
              />
            </div>
            <div className="form-outline mb-2">
              <label className="form-label" htmlFor="email">
                Email
              </label>
              <br />
              <input
                autoComplete="off"
                name="email"
                onChange={handleChange}
                required
                type="email"
                className="w-80"
              />
            </div>
            <div className="form-outline mb-2">
              <label className="form-label" htmlFor="message">
                {pl ? 'Wiadomość:' : 'Message:'}
              </label>
              <br />
              <textarea
                autoComplete="off"
                name="message"
                onChange={handleChange}
                required
                rows="2"
                className="w-100"
              />
            </div>
          </div>

          <div className="text-center">
            <button className="btn btn-outline-warning" type="submit">
              {pl ? 'Wyślij:' : 'Send:'}
              <i className="far fa-paper-plane ml-1" />
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
