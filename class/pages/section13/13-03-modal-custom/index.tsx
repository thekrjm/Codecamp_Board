import {Modal} from "antd"
import 'antd/dist/antd.css';
import { useState } from "react";

export default function ModalCustomPage() {
    const [isOpen, setIsOpen] = useState(false)

    const showModal = () => {
        setIsOpen(true)
    }

    const handleOk = () => {
        setIsOpen(false)
    }

    const handleCancel = () => {
        setIsOpen(false)
        
    }

    return (
        <>
            <button onClick={showModal} >모달창 활성화</button>
            <Modal
                open={isOpen}
                onOk={handleOk}
                onCancel={handleCancel}
            >
                비번 입력 <input type="password" />
            </Modal>

        </>
    )
}