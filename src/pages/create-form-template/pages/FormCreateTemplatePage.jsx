import React from 'react'
import {FormCreateTemplate} from './form-create-template/FormCreateTemplate'
import { Sandbox } from './sand-box/Sandbox'

export const FormCreateTemplatePage = () => {
  return (
    <div className='row'>
      <div className="col-6">
        <FormCreateTemplate />
      </div>
      <div className="col-6">
        <Sandbox />
      </div>
    </div>
  )
}