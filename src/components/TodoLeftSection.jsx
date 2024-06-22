import React from 'react';
import CustomBtn from "./UI/CustomButton/CustomBtn";
import CustomInput from "./UI/CustomInput/CutomInput";

const TodoLeftSection = ({setTodoCreateModal, value, setValue}) => {
    return (
        <div className="todo__left-section">
            <h1 className="left-section__title">TO DO</h1>
            <CustomBtn onClick={() => setTodoCreateModal(true)} style={{marginBottom: 20}}>Create</CustomBtn>
            <CustomInput value={value} onChange={event => setValue(event.target.value)} placeholder="Search"/>
        </div>
    );
};

export default TodoLeftSection;