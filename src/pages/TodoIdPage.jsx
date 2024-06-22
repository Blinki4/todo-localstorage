import React, {useState} from 'react';
import {useParams} from "react-router-dom";
import Modal from "../components/UI/Modal/Modal";

const TodoIdPage = () => {

    const params = useParams()

    const [visible, setVisible] = useState(true)

    return (
        <Modal visible={visible}>
            {params.id}
        </Modal>
    );
};

export default TodoIdPage;