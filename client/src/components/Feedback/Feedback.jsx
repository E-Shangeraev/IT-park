import React, { useState } from 'react'
import { Formik, Form } from 'formik'
import * as yup from 'yup'
import Title from '@components/Title/Title'
import Button from '@components/Button/Button'
// import Modal from '@components/Modal/Modal'
import image from '@assets/img/4.png'
import './Feedback.scss'

const phoneRegExp =
  // eslint-disable-next-line no-useless-escape
  /^((8|\+7)[\- ]?)?(\(?\d{3}\)?[\- ]?)?[\d\- ]{10,11}$/

const Feedback = () => {
  const [submited, setSubmited] = useState(false)

  const validationSchema = yup.object().shape({
    name: yup
      .string()
      .min(2, 'Имя может содержать не менее 2 символов')
      .max(50, 'Имя может содержать не более 50 символов')
      .typeError('Имя может содержать только буквы')
      .required('Укажите имя'),
    phone: yup
      .string()
      .matches(phoneRegExp, 'Некорректный номер телефона')
      .required('Укажите номер телефона'),
    email: yup.string().email('Некорректный email').required('Укажите email'),
  })

  return (
    <section className="feedback">
      <div className="wrapper">
        <Formik
          initialValues={{
            name: '',
            phone: '',
            email: '',
          }}
          validateOnBlur
          validationSchema={validationSchema}
          onSubmit={(values, { resetForm }) => {
            console.log(JSON.stringify(values))
            resetForm()
            setSubmited(true)
          }}>
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
            <Form className="feedback__form">
              <div className="feedback__container">
                <Title>
                  <span>Заполните форму ниже</span>
                  <span>и мы ответим на все</span>
                  <span>ваши вопросы</span>
                </Title>
                <img src={image} alt="Изображение ноутбука" />
                <label
                  htmlFor="name"
                  className={dirty && !errors.name ? 'valid' : null}>
                  {touched.name && errors.name ? (
                    <span className="error">{errors.name}</span>
                  ) : (
                    <span>Имя</span>
                  )}
                  <input
                    type="name"
                    id="name"
                    name="name"
                    placeholder="Иван"
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values.name}
                  />
                </label>
                <label
                  htmlFor="phone"
                  className={dirty && !errors.phone ? 'valid' : null}>
                  {touched.phone && errors.phone ? (
                    <span className="error">{errors.phone}</span>
                  ) : (
                    <span>Ваш телефон</span>
                  )}
                  <input
                    type="phone"
                    id="phone"
                    name="phone"
                    placeholder="+7 (999) 999-99-99"
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values.phone}
                  />
                </label>
                <label
                  htmlFor="email"
                  className={dirty && !errors.email ? 'valid' : null}>
                  {touched.email && errors.email ? (
                    <span className="error">{errors.email}</span>
                  ) : (
                    <span>Ваше e-mail</span>
                  )}
                  <input
                    type="email"
                    id="email"
                    name="email"
                    placeholder="ivan@gmail.com"
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values.email}
                  />
                </label>
                <Button
                  type="submit"
                  color="secondary"
                  onClick={handleSubmit}
                  disabled={!isValid && !dirty}>
                  Отправить
                </Button>
              </div>
            </Form>
          )}
        </Formik>
      </div>
    </section>
  )
}

export default Feedback
