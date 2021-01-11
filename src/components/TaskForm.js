import React, { useState } from 'react'
import InputForm from './forms/InputForm';
import SubTaskForm from './SubTaskForm';
import {useSelector} from "react-redux";
import { Button, Card, Divider, Input, Space, Form, List } from "antd";

const TaskForm = () => {
  const [data, setData] = useState([])
  const {task} = useSelector((state) => ({...state}))


    return (
      <>
      <InputForm data={data} setData={setData} />
      <List
            bordered
            dataSource={task}
            renderItem={(item) => (
              <List.Item>
               <SubTaskForm item={item} task={task} data={data} />
              </List.Item>
            )}
          />
      </>
    )
}

export default TaskForm