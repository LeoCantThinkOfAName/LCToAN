import React from "react"
import axios from "axios"

// components
import { Form, Field } from "react-final-form"

// styles
import formStyle from "./form.module.scss"

const onSubmit = data => {
  let serialized = ""
  Object.keys(data).map(key => {
    serialized += `${key}=${data[key]}&`
  })
  axios({
    method: "POST",
    url: `/contact?${encodeURI(serialized).slice(0, -1)}`,
  })
    .then(res => {
      console.log(res)
    })
    .catch(err => {
      console.log(err)
    })
}

const required = value => (value ? undefined : "必填欄位")
const email = value => {
  const regex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
  return regex.test(String(value).toLowerCase())
    ? undefined
    : "請輸入正確的電子信箱格式"
}

const formFields = [
  {
    name: "name",
    type: "text",
    placeholder: "你的名字",
    validate: required,
  },
  {
    name: "email",
    type: "email",
    placeholder: "你的信箱",
    validate: email,
  },
  {
    name: "subject",
    type: "text",
    placeholder: "信件標題",
    validate: required,
  },
]

const ContactForm = () => {
  return (
    <div className={formStyle.formWrapper}>
      <h2>Contact Me</h2>
      <Form
        onSubmit={onSubmit}
        render={({ handleSubmit }) => (
          <form
            action="https://formspree.io/tty7851@gmail.com"
            data-netlify="true"
            netlify-honeypot="phone"
            data-netlify-recaptcha="true"
            method="POST"
            onSubmit={handleSubmit}
            method="POST"
          >
            {formFields.map(field => {
              return (
                <div className={formStyle.fieldWrapper} key={field.name}>
                  <Field name={field.name} validate={field.validate}>
                    {({ input, meta }) => (
                      <>
                        <label htmlFor={field.name}>{field.name}</label>
                        <input
                          {...input}
                          type={field.type}
                          placeholder={
                            meta.error && meta.touched
                              ? meta.error
                              : field.placeholder
                          }
                          className={
                            meta.error && meta.touched ? formStyle.error : null
                          }
                          required
                        />
                      </>
                    )}
                  </Field>
                </div>
              )
            })}
            <div className={formStyle.fieldWrapper}>
              <Field name="message" validate={required}>
                {({ input, meta }) => (
                  <>
                    <label htmlFor="message">Message</label>
                    <textarea
                      {...input}
                      id="message"
                      placeholder={
                        meta.error && meta.touched
                          ? meta.error
                          : "請輸入信件內容"
                      }
                      className={
                        meta.error && meta.touched ? formStyle.error : null
                      }
                      required
                    />
                  </>
                )}
              </Field>
            </div>
            <div className={formStyle.honeyField}>
              <label htmlFor="phone">phone</label>
              <input id="phone" type="tel" name="phone" />
            </div>
            <div data-netlify-recaptcha="true" />
            <button type="submit" className={formStyle.formBtn}>
              Submit
            </button>
          </form>
        )}
      />
    </div>
  )
}

export default ContactForm
