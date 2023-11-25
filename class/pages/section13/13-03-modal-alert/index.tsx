import {Modal} from "antd"
import 'antd/dist/antd.css';

export default function ModalAlertPage() {
    const onClickSuccess = () => {
        Modal.success({content:"성공이욤"})
    }

    const onClickEror = () => {
        Modal.error({content:"에러뜸"})
    }

    return (
        <>
            <button onClick={onClickSuccess} >성공!!</button>
            <button onClick={onClickEror} >에러!!</button>
        </>
    )
}