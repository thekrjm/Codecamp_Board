import { Modal } from "antd";
import "antd/dist/antd.css";
import { useState } from "react";
import DaumPostcodeEmbed from "react-daum-postcode";
import { Address } from "react-daum-postcode/lib/loadPostcode";

export default function ModalCustomPage() {
  const [isOpen, setIsOpen] = useState(false);

  const showModal = () => {
    setIsOpen(true);
  };

  const handleOk = () => {
    setIsOpen(false);
  };

  const handleCancel = () => {
    setIsOpen(false);
  };

  const handleComplete = (data: Address) => {
    console.log(data);
    setIsOpen(false);
  };

  return (
    <>
      <button onClick={showModal}>모달창 활성화</button>

      {/* <Modal
                open={isOpen}
                onOk={handleOk}
                onCancel={handleCancel}
            >
                <DaumPostcodeEmbed onComplete={handleComplete} />
            </Modal> 모달을 숨기는 방식 */}

      {/**모달을 삭제했다가 다시 실행하는 방식*/}
      {isOpen && (
        <Modal open={true} onOk={handleOk} onCancel={handleCancel}>
          <DaumPostcodeEmbed onComplete={handleComplete} />
        </Modal>
      )}
    </>
  );
}
