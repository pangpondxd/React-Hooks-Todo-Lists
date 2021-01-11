import React from 'react'
import { Button, Input, Form } from "antd";
import _ from 'lodash'
import {useDispatch} from 'react-redux'
const InputForm = ({data}) => {
    const [form] = Form.useForm()
    const dispatch = useDispatch()


    const onFinish = (values) => {
        console.log('values', values)
        data.push({
            ...values,
            isAlldone: false,
            task: []
        })

        let unique = _.uniqWith(data, _.isEqual);
        // save to local storage
        localStorage.setItem("task", JSON.stringify(unique));

       dispatch({
           type: 'ADD_TO_TASK',
           payload: unique
       })

       form.resetFields()
    }

    return (
        <Form
        form={form}
        name="nest-messages"
        onFinish={onFinish}
      >
        <Form.Item name="name" label="Name Task" rules={[{ required: true }]}>
          <Input
            style={{ width: 400 }}
            placeholder="Enter Task Name"
            rules={[{ required: true }]}
          />
        </Form.Item>
        <Form.Item>
          <Button type="primary" htmlType="submit">
            Create Task
          </Button>
        </Form.Item>
      </Form>
    )
}

export default InputForm