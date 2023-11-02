import React from 'react'
import {Collapse} from "react-bootstrap"
import ZCollapse from '../../../../components/collapse/ZCollapse'
import { CollapseForm } from './collapse-form/CollapseForm'

export const FormCreateTemplate = () => {
  // const [open, setOpen] = useState(false)
  const text = `
    A dog is a type of domesticated animal.
    Known for its loyalty and faithfulness,
    it can be found as a welcome guest in many households across the world.
  `
  const items = [
    {
      key: 'navbar',
      label: 'Navbar',
      children: <p>{text}</p>,
    },
    {
      key: 'form',
      label: 'Form',
      children: <CollapseForm />,
    },
    {
      key: 'table',
      label: 'Table',
      children: <p>{text}</p>,
    },
  ];

  const onChange = (key) => {
    console.log(key);
  };
  return (
    <div className='p-3 rounded border'>
      <ZCollapse items={items} onChange={onChange}/>
    </div>
  )
}