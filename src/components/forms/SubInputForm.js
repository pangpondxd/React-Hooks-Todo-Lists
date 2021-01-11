import React from 'react'
import { Button, Card, Divider, Input, Space, Form, List } from "antd";
import {useDispatch} from 'react-redux'
import SubTaskList from './SubTaskList';
import _ from 'lodash'
import { useForm } from 'antd/lib/form/Form';
const SubInputForm = ({data, item, task}) => {
    const [form] = useForm()
    const dispatch = useDispatch()

    
    const onFinish = (values) => {
        task.map((t, i) => {
            if (t.name === item.name) {
              data[i].task.push({
                ...values,
                isDone: false,
              });
            }
          });

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
        <Space direction="vertical" style={{ marginTop: 24 }}>
        <Card
          title="Sample Task"
          style={{ width: 600 }}
          extra={<Button type="primary">Duplicate</Button>}
        >
           <Space direction="vertical" style={{ width: "100%" }}>
          <Space>
            <Form
              form={form}
              name="nest-messages"
              onFinish={onFinish}
            >
              <Form.Item
                name="title"
                label="Subtask Name"
                rules={[{ required: true }]}
              >
                <Input
                  placeholder="Enter Subtask Name"
                  style={{ width: 400 }}
                  rules={[{ required: true }]}
                />
              </Form.Item>
              <Form.Item>
                <Button type="primary" htmlType="submit">
                  Add Task
                </Button>
              </Form.Item>
            </Form>
          </Space>
          <Divider />
          <List
            bordered
            dataSource={item.task}
            renderItem={(item) => (
              <List.Item>
                <SubTaskList item={item} task={task} />
              </List.Item>
            )}
          />
        </Space>
        </Card>
      </Space>
    )
}

export default SubInputForm