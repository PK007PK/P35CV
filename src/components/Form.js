import React from "react"
import { navigate } from "gatsby-link"
import { MDBCard, MDBCardBody, MDBBtn, MDBIcon, MDBInput } from "mdbreact"

function encode(data) {
  return Object.keys(data)
    .map(key => `${encodeURIComponent(key)}=${encodeURIComponent(data[key])}`)
    .join("&")
}

export default function Form({ admin }) {
  const [state, setState] = React.useState({})

  const handleChange = e => {
    setState({ ...state, [e.target.name]: e.target.value })
  }

  const handleSubmit = e => {
    e.preventDefault()
    const form = e.target
    fetch("/", {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: encode({
        "form-name": form.getAttribute("name"),
        ...state,
      }),
    })
      .then(() => navigate(form.getAttribute("action")))
      .catch(error => alert(error))
  }

  return (
    <MDBCard>
      <MDBCardBody>
        <form
          name="PKCV contact form"
          method="post"
          action="/thanks/"
          data-netlify="true"
          data-netlify-honeypot="bot-field"
          onSubmit={handleSubmit}
        >
          {/* The `form-name` hidden field is required to support form submissions without JavaScript */}
          <div className="grey-text">
            {/* <input type="hidden" name="hiden-input" value="contact" />
            <div hidden>
              <label htmlFor="bot-field">
                Don’t fill this out:{" "}
                <input
                  name="bot-field"
                  onChange={handleChange}
                  autoComplete="off"
                />
              </label>
            </div> */}
            <MDBInput
              label="Imię"
              icon="user"
              group
              type="text"
              validate
              error="wrong"
              success="right"
              onChange={handleChange}
              autoComplete="off"
              required
              name="imie"
            />
            {/* <div className="formItem">
              <input
                onChange={handleChange}
                className="input"
                type="text"
                name="imie"
                placeholder=" "
                autoComplete="off"
                required
              />
              <label className="label" htmlFor="imie">
                Imię:
              </label>
              <div className="formItemBar" />
            </div> */}
            <MDBInput
              label="Email"
              icon="envelope"
              group
              type="email"
              validate
              error="wrong"
              success="right"
              onChange={handleChange}
              autoComplete="off"
              required
              name="email"
            />
            {/* <div className="formItem">
              <input
                className="input"
                type="email"
                name="email"
                onChange={handleChange}
                placeholder=" "
                autoComplete="off"
                required
              />
              <label className="label" htmlFor="email">
                Email:
              </label>
              <div className="formItemBar" />
            </div> */}
            {/* <div className="formItem">
              <input
                className="input"
                type="text"
                name="telefon"
                placeholder=" "
                onChange={handleChange}
                autoComplete="off"
                required
              /> */}
            {/* <label className="label" htmlFor="telefon">
                Telefon:
              </label>
              <div className="formItemBar" /> */}
            <MDBInput
              label="Subject"
              icon="tag"
              group
              type="text"
              validate
              error="wrong"
              success="right"
              name="topic"
            />
            <MDBInput
              type="textarea"
              rows="2"
              label="Your message"
              icon="pencil-alt"
              name="text"
            />
          </div>
          {/* <div className="formItem">
            <textarea
              className="textarea"
              name="text"
              onChange={handleChange}
              placeholder=" "
              required
            /> */}
          {/* <label className="label" htmlFor="text">
                Treść wiadomości:
              </label> */}
          {/* <div className="formItemBar" /> */}
          {/* </div> */}

          <div className="text-center">
            <MDBBtn type="submit" outline color="secondary">
              Wyślij
              <MDBIcon far icon="paper-plane" className="ml-1" />
            </MDBBtn>
          </div>
        </form>
      </MDBCardBody>
    </MDBCard>
  )
}
