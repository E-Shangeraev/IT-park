import React, { useContext, useState } from 'react'
import { Formik, Form } from 'formik'
import * as yup from 'yup'
import { v4 as uuidv4 } from 'uuid'
import Title from '@components/Title/Title'
import Button from '@components/Button/Button'
import Modal from '@components/Modal/Modal'
import image from '@assets/img/4.png'
import { MailContext } from '../../App'
import './Feedback.scss'

const phoneRegExp =
  // eslint-disable-next-line no-useless-escape
  /^((8|\+7)[\- ]?)?(\(?\d{3}\)?[\- ]?)?[\d\- ]{10,11}$/

const formId = uuidv4()

const Feedback = () => {
  const [submited, setSubmited] = useState(false)
  const mailTo = useContext(MailContext)

  const afterSubmit = () => setSubmited(false)

  const validationSchema = yup.object().shape({
    name: yup
      .string()
      .min(2, 'Имя')
      .max(50, 'Имя')
      .typeError('Имя')
      .required('Имя'),
    phone: yup.string().matches(phoneRegExp, 'Телефон').required('Телефон'),
    email: yup.string().email('E-mail').required('E-mail'),
  })

  return (
    <section className="feedback">
      <div className="wrapper">
        {mailTo && (
          <Formik
            initialValues={{
              name: '',
              phone: '',
              email: '',
              mailTo,
            }}
            validateOnBlur
            validationSchema={validationSchema}
            onSubmit={async (values, { resetForm }) => {
              await fetch('/api/mail', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(values),
              })
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
              <Form className="form feedback__form">
                <div className="feedback__container">
                  <Title>
                    <span>Заполните форму ниже</span>
                    <span>и мы ответим на все</span>
                    <span>ваши вопросы</span>
                  </Title>
                  <img src={image} alt="Изображение ноутбука" />
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
                      id={`name-${formId}`}
                      name="name"
                      placeholder="Иван"
                      onChange={handleChange}
                      onBlur={handleBlur}
                      value={values.name}
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
                      type="phone"
                      id={`phone-${formId}`}
                      name="phone"
                      placeholder="+7 (999) 999-99-99"
                      onChange={handleChange}
                      onBlur={handleBlur}
                      value={values.phone}
                    />
                  </label>
                  <label
                    htmlFor={`email-${formId}`}
                    className={dirty && !errors.email ? 'valid' : null}>
                    {touched.email && errors.email ? (
                      <span className="error">{errors.email}</span>
                    ) : (
                      <span>E-mail</span>
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
                    color="secondary"
                    onClick={handleSubmit}
                    disabled={!isValid && !dirty}>
                    Отправить
                  </Button>
                  <Modal
                    active={submited}
                    withButton={false}
                    callback={afterSubmit}>
                    <h3 className="modal__title">Спасибо за заявку!</h3>
                    <p className="text modal__text">
                      Мы свяжемся с вами в ближайшее время
                    </p>
                  </Modal>
                </div>
              </Form>
            )}
          </Formik>
        )}
      </div>
    </section>
  )
}

export default Feedback
