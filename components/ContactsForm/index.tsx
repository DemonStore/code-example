import { FormEvent, useCallback, useState } from 'react'
import { Alert, Button, Col, Form, Row } from 'react-bootstrap'
import { useFormik } from 'formik'

import styles from './index.module.scss'

export enum FormState {
  Default,
  Loading,
  Error,
  Success
}

const REQUIRED_MESSAGE = 'Поле обязательно для заполения'
const EMAIL_MESSAGE = 'Неправильный формат email'

const ContactsForm = () => {
  const [formState, setFormState] = useState(FormState.Default)

  const validate = useCallback(
    (values) => {
      const errors: { [type: string]: string } = {}
      const email = values.email?.trim()
      const message = values.message?.trim()

      if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(email)) {
        errors.email = EMAIL_MESSAGE
      }

      if (!message) {
        errors.message = REQUIRED_MESSAGE
      }

      return errors
    },
    []
  )

  const onSubmit = useCallback(async (values, { resetForm }) => {
    setFormState(FormState.Loading)
    const result = await fetch('/api/feedback', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json;charset=utf-8'
      },
      body: JSON.stringify(values)
    })
    const isErrorResult = result.status !== 200
    setFormState(isErrorResult ? FormState.Error : FormState.Success)

    if (!isErrorResult) {
      resetForm()
    }
  }, [])

  const formik = useFormik({
    initialValues: {
      email: '',
      message: ''
    },
    validate,
    onSubmit
  })

  const handleSubmit = useCallback(async (event: FormEvent<HTMLFormElement>) => {
    formik.handleSubmit(event)
  }, [formik])

  return (
    <Form noValidate className={styles.form} onSubmit={handleSubmit}>
      <Form.Group as={Row} controlId="email" className={styles.group}>
        <Form.Label column md={3}>
          Email
        </Form.Label>
        <Col md={9}>
          <Form.Control
            name="email"
            type="email"
            value={formik.values.email}
            isValid={formik.touched.email && !formik.errors.email}
            isInvalid={formik.touched.email && !!formik.errors.email}
            onBlur={formik.handleBlur}
            onChange={formik.handleChange}
          />
          <Form.Control.Feedback type="invalid">{formik.errors.email}</Form.Control.Feedback>
        </Col>
      </Form.Group>

      <Form.Group as={Row} controlId="massage" className={styles.group}>
        <Form.Label column md={3}>
          Сообщение
        </Form.Label>
        <Col md={9}>
          <Form.Control
            as="textarea"
            name="message"
            rows={3}
            value={formik.values.message}
            isValid={formik.touched.message && !formik.errors.message}
            isInvalid={formik.touched.message && !!formik.errors.message}
            onBlur={formik.handleBlur}
            onChange={formik.handleChange}
          />
          <Form.Control.Feedback type="invalid">{formik.errors.message}</Form.Control.Feedback>
        </Col>
      </Form.Group>

      <Form.Group as={Row} className={styles.group}>
        <Col md={{ span: 9, offset: 3 }}>
          <Button variant="primary" type="submit" disabled={formState === FormState.Loading}>
            {formState !== FormState.Loading ? 'Отправить сообщение' : 'Отправка...'}
          </Button>
        </Col>
      </Form.Group>
      {formState === FormState.Error && (
        <Alert variant="danger" dismissible onClose={() => setFormState(FormState.Default)}>
          Произошла ошибка. Повторите запрос или воспользуйтесь альтернативными способами для связи.
        </Alert>
      )}
      {formState === FormState.Success && (
        <Alert variant="success" dismissible onClose={() => setFormState(FormState.Default)}>
          Сообщение успешно отправлено.
        </Alert>
      )}
    </Form>
  )
}

export default ContactsForm
