import React, { useState } from 'react'
// import {Collapse} from "react-bootstrap"
import { Collapse } from 'antd';

const ZCollapse = ({items, onChange}) => {

  return (
    <Collapse items={items} onChange={onChange} />
  )
}

export default ZCollapse