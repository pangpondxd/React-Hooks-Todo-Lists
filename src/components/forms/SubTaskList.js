import React from 'react'
import { Button, Space, Typography, message } from "antd";
import {useDispatch} from 'react-redux'

const SubTaskList = ({item, task}) => {
    const dispatch = useDispatch()
    const handleRemove = () => {
        if (typeof window !== "undefined") {
          // [1,2,3,4,5]
          for (let i = 0; i < task.length; i++) {
            for (let j = 0; j < task[i].task.length; j++) {
              if (task[i].task[j].title === item.title) {
                task[i].task.splice(j, 1);
              }
            }
          }
    
          localStorage.setItem("task", JSON.stringify(task));
          dispatch({
            type: "ADD_TO_TASK",
            payload: task,
          });
          message.error("ลบข้อมูลสำเร็จแล้ว");
        }
      };

      const toggleHandler = () => {
          task.map((t) => {
              t.task.map((d) => {
                  if(item.title === d.title){
                      d.isDone = !d.isDone
                  }
              })
          })
          
          localStorage.setItem("task", JSON.stringify(task));
          dispatch({
            type: "ADD_TO_TASK",
            payload: task,
          });

      }
      console.log('item', item)

    return (
        <>
      <Space>
        <Typography.Text style={{ textDecoration: item.isDone ?  "line-through": '' }}>
          {item.isDone ? `${item.title} (Done)` :  item.title}
        </Typography.Text>
        <Button type="primary" onClick={toggleHandler}> {item.isDone ? 'Undone' : 'Done'}</Button>
        <Button type="danger" onClick={handleRemove}>Delete</Button>
      </Space>
      </>
    )
}

export default SubTaskList