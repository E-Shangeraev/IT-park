import React, { useState } from 'react'
import { Formik, Field } from 'formik'
import * as yup from 'yup'
import PropTypes from 'prop-types'
import { v4 as uuidv4 } from 'uuid'
import Button from '@components/Button/Button'

const phoneRegExp =
  // eslint-disable-next-line no-useless-escape
  /^((8|\+7)[\- ]?)?(\(?\d{3}\)?[\- ]?)?[\d\- ]{10,11}$/

const formId = uuidv4()

const ModalFeedback = ({ title, text, areaName, areaCode }) => {
  const [submited, setSubmited] = useState(false)

  const validationSchema = yup.object().shape({
    name: yup
      .string()
      .min(2, 'Некорректное имя')
      .max(50, 'Некорректное имя')
      .typeError('Имя может содержать только буквы')
      .required('Укажите имя'),
    phone: yup
      .string()
      .matches(phoneRegExp, 'Некорректный номер телефона')
      .required('Укажите номер телефона'),
    email: yup.string().email('Некорректный email').required('Укажите email'),
    agreement: yup
      .bool()
      .oneOf([true], 'Accept Terms & Conditions is required'),
  })

  return (
    <div className="modal__block">
      {!submited ? (
        <>
          <h3 className="modal__title">{title}</h3>
          {text && <p className="text modal__text">{text}</p>}

          <Formik
            initialValues={{
              name: '',
              phone: '',
              agreement: false,
              areaName,
              areaCode,
            }}
            validateOnBlur
            onSubmit={async (values, { resetForm }) => {
              // await fetch('/api/mail', {
              //   method: 'POST',
              //   headers: { 'Content-Type': 'application/json' },
              //   body: JSON.stringify(values),
              // })
              console.log(values)
              resetForm()
              setSubmited(true)
            }}
            validationSchema={validationSchema}>
            {({
              values,
              errors,
              touched,
              handleChange,
              handleBlur,
              isValid,
              handleSubmit,
              dirty,
            }) => (
              <form className="form modal__form">
                <label
                  htmlFor={`name-${formId}`}
                  className={dirty && !errors.name ? 'valid' : null}>
                  {touched.name && errors.name ? (
                    <span className="error">{errors.name}</span>
                  ) : (
                    <span>Имя</span>
                  )}
                  <input
                    type="name"
                    name="name"
                    id={`name-${formId}`}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values.name}
                    placeholder="Иванов Иван Иванович"
                  />
                </label>
                <label
                  htmlFor={`phone-${formId}`}
                  className={dirty && !errors.phone ? 'valid' : null}>
                  {touched.phone && errors.phone ? (
                    <span className="error">{errors.phone}</span>
                  ) : (
                    <span>Телефон</span>
                  )}
                  <input
                    type="tel"
                    name="phone"
                    id={`phone-${formId}`}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values.phone}
                    placeholder="+7 999 999 99 99"
                  />
                </label>
                <label
                  htmlFor={`email-${formId}`}
                  className={dirty && !errors.email ? 'valid' : null}>
                  {touched.email && errors.email ? (
                    <span className="error">{errors.email}</span>
                  ) : (
                    <span>Ваше e-mail</span>
                  )}
                  <input
                    type="email"
                    id={`email-${formId}`}
                    name="email"
                    placeholder="ivan@gmail.com"
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values.email}
                  />
                </label>
                <Button
                  type="submit"
                  onClick={handleSubmit}
                  disabled={!isValid && !dirty}>
                  Отправить
                </Button>
                <div className="form__agreement">
                  <Field
                    type="checkbox"
                    id={`checkbox-${formId}`}
                    name="agreement"
                  />
                  <label
                    htmlFor={`checkbox-${formId}`}
                    className={
                      errors.agreement && touched.agreement ? 'error' : null
                    }>
                    Я даю своё{' '}
                    <span>согласие на обработку персональных данных</span>
                  </label>
                </div>
              </form>
            )}
          </Formik>
        </>
      ) : (
        <>
          <h3 className="modal__title">Спасибо за заявку!</h3>
          <p className="text modal__text">
            Мы свяжемся с вами в ближайшее время
          </p>
        </>
      )}
    </div>
  )
}

ModalFeedback.propTypes = {
  title: PropTypes.string.isRequired,
  text: PropTypes.string,
  areaName: PropTypes.string,
  areaCode: PropTypes.string,
}

ModalFeedback.defaultProps = {
  text: null,
  areaName: null,
  areaCode: null,
}

export default ModalFeedback
