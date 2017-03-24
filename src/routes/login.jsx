import React, { PropTypes } from 'react'
import { Button, Row, Form, Input } from 'antd'
import { config } from '../utils'
import styles from './login.less'

const FormItem = Form.Item

function Login ({
  loginButtonLoading,
  onOk,
  form: {
    getFieldDecorator,
    validateFieldsAndScroll,
  },
}) {
  function handleOk () {
    validateFieldsAndScroll((errors, values) => {
      if (errors) {
        return
      }
      onOk(values)
    })
  }

  return (
    <div className={styles.form}>
      <div className={styles.logo}>
        <img src={config.logoSrc} alt={config.logoText} />
        <span>{config.logoText}</span>
      </div>
      <form>
        <FormItem hasFeedback>
          {getFieldDecorator('username', {
            rules: [
              {
                required: true,
                message: 'Please type username',
              },
            ],
          })(<Input size="large" onPressEnter={handleOk} placeholder="username" />)}
        </FormItem>
        <FormItem hasFeedback>
          {getFieldDecorator('password', {
            rules: [
              {
                required: true,
                message: 'Please type password',
              },
            ],
          })(<Input size="large" type="password" onPressEnter={handleOk} placeholder="password" />)}
        </FormItem>
        <Row>
          <Button type="primary" size="large" onClick={handleOk} loading={loginButtonLoading}>
            Login
          </Button>
        </Row>
      </form>
    </div>
  )
}

Login.propTypes = {
  form: PropTypes.object,
  loginButtonLoading: PropTypes.bool,
  onOk: PropTypes.func,
}

export default Form.create()(Login)
