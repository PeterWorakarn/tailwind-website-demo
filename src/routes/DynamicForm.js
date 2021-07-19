import React, { useState } from 'react'

export default function DynamicForm() {
    const [inputGroups, setInputGroup] = useState([{ id: new Date(), title: '' }])
    console.log(inputGroups)
    const handleChangeInput = (id, event) => {
        const newInputFields = inputGroups.map(i => {
            if(id === i.id) {
              i[event.target.name] = event.target.value
            }
            return i;
          })
          
          setInputGroup(newInputFields);
    }
    const handleAddFields = () => {
        setInputGroup([...inputGroups, { id: new Date(),title: '' }])
    }

    const handleRemoveFields = id => {
        const values = [...inputGroups];
        values.splice(values.findIndex(value => value.id === id), 1);
        setInputGroup(values);
    }
    return (
        <div className="flex flex-col">
            {inputGroups.map((inputGroup) => (
                <div key={inputGroup.id} >
                    <input className="bg-indigo-500" type="text"
                        name="title"
                        onChange={event => handleChangeInput(inputGroup.id, event)}
                        value={inputGroup.title} />
                    <span onClick={() => handleAddFields()}>+</span>
                    <span onClick={() => handleRemoveFields(inputGroup.id)}>-</span>
                </div>
            ))}
        </div>
    )
}
