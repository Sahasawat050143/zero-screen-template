import React, { useState } from "react";

export const CollapseForm = () => {
    const [inputList, setInputList] = useState([])
    // const [inputName, setInputName] = useState("")
    // const [titleForm, setTitleForm] = useState("")
    const [value, setValue] = useState({
        inputName: "",
        title: ""
    })

    const handleChange  = (e) => {
        setValue({
            [e.target.name]: e.target.value,
        })
    }

    const onAddInputClick = (e) => {
        e.preventDefault();

        setInputList(prev => {
            return [...prev, value.inputName]
        })

        setValue({inputName: ""})
    }

    console.log('inputList', inputList);
  return (
    <form onSubmit={onAddInputClick}>
      <div className="mb-3">
        <label className="form-label">
          Title
        </label>
        <input
          type="text"
          className="form-control"
          id="title"
          name="title"
          value={value.title}
          onChange={handleChange}
        />
      </div>
      <div className="p-3 border shadow">
        <div className="p-3 border mb-3">
            <p className="fw-bold">List input in form</p>
            <div className="row">
                {inputList.length > 0 && inputList.map(item => (
                    <div className="col-4">
                        <div className="card p-2 bg-info text-light">{item}</div>
                    </div>
                ))}
            </div>
        </div>
        <div className="mb-3">
            <label htmlFor="exampleInputPassword1" className="form-label">
                Input Name
            </label>
            <div className="row">
                <div className="col-10">
                <input
                    name="inputName"
                    type="text"
                    className="form-control"
                    id="inputName"
                    value={value.inputName}
                    onChange={handleChange}
                />
                </div>
                <div className="col-2">
                <button className="btn btn-primary" type="submit">+ Add Input</button>
                </div>
            </div>
        </div>
      </div>
    </form>
  );
};
