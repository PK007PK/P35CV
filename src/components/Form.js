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
          className="text-left"
        >
          {/* <div className="grey-text"> */}
          {/* The `form-name` hidden field is required to support form submissions without JavaScript */}
          <input type="hidden" name="hiden-input" value="contact" />
          <div hidden>
            <label htmlFor="bot-field">
              Don’t fill this out:{" "}
              <input
                name="bot-field"
                onChange={handleChange}
                autoComplete="off"
              />
            </label>
          </div>
          <div className="grey-text">
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
            <MDBInput
              type="textarea"
              rows="2"
              label="Twoja wiadomość"
              icon="pencil-alt"
              name="text"
              iconSize="4"
              iconSize="2x"
            />
          </div>

          <div className="text-center">
            <MDBBtn type="submit" outline color="warning">
              Wyślij
              <MDBIcon far icon="paper-plane" className="ml-1" />
            </MDBBtn>
          </div>
        </form>
      </MDBCardBody>
    </MDBCard>
  )
}
