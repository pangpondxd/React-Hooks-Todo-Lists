import React from 'react'
import SubInputForm from './forms/SubInputForm';


const SubTaskForm = ({data, setData, item, task}) => {
    return (
      <>
      <SubInputForm data={data} setData={setData} item={item} task={task} />
      </>
    )
}

export default SubTaskForm