import React, { useState } from "react";

export const CollapseForm = () => {
    const [inputList, setInputList] = useState([])
    const [value, setValue] = useState({
        inputName: "",
        title: ""
    })
    const [errorMsg, setErrorMsg] = useState("")

    const handleChange  = (e) => {
      if(e.target.name == "inputName" && e.target.value != ""){
        setErrorMsg("")
      } else {
        setErrorMsg("Input must have name!")
      }
      setValue({
        [e.target.name]: e.target.value,
      })
    }

    const onAddInputClick = (e) => {
        e.preventDefault();

        if(value.inputName != ""){
        setInputList(prev => {
            return [...prev, value.inputName]
        })

        setValue({inputName: ""})
      }else {
        setErrorMsg("Input must have name!")
      }
    }

  return (
    <form onSubmit={onAddInputClick}>
      <div className="mb-3">
        <label className="form-label">
          Title
        </label>
        <input
          placeholder="title"
          type="text"
          className="form-control"
          id="title"
          name="title"
          value={value.title}
          onChange={handleChange}
        />
      </div>

      <section id="addInputForm" className="p-3 border">
        <div className="p-3 border mb-3" style={{backgroundColor: "#F3F3F3"}}>
            <p className="fw-bold">List input in form</p>
            <div className="row">
                {inputList.length > 0 && inputList.map(item => (
                    <div className="col-4 mb-3">
                        <div className="card p-2 bg-primary text-light text-center">{item}</div>
                    </div>
                ))}
            </div>
        </div>
        <div className="mb-3">
            <label className="form-label d-flex align-items-end">
              <div className="text-danger me-2 ">*</div> Input Name
            </label>
            <div className="row">
                <div className="col-10">
                <input
                    placeholder="input name"
                    name="inputName"
                    type="text"
                    className={`form-control ${errorMsg !== "" ? "border border-danger" : ""}`}
                    id="inputName"
                    value={value.inputName}
                    onChange={handleChange}
                />
                {errorMsg !== "" && <div id="inputNameError" class="form-text text-danger">{errorMsg}</div>}
                </div>
                <div className="col-2">
                <button className="btn btn-primary" type="submit">+ Add Input</button>
                </div>
            </div>
        </div>
      </section>
    </form>
  );
};
