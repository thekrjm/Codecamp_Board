import { Modal } from "antd";
import "antd/dist/antd.css";
import { useState } from "react";
import DaumPostcodeEmbed from "react-daum-postcode";
import { Address } from "react-daum-postcode/lib/loadPostcode";

export default function ModalCustomPage() {
  const [isOpen, setIsOpen] = useState(false);

  const onToggleModal = () => {
    setIsOpen((prev) => !prev);
  };

  const handleComplete = (data: Address) => {
    console.log(data);
    onToggleModal();
  };

  return (
    <>
      <button onClick={onToggleModal}>모달창 활성화</button>

      {isOpen && (
        <Modal open={true} onOk={onToggleModal} onCancel={onToggleModal}>
          <DaumPostcodeEmbed onComplete={handleComplete} />
        </Modal>
      )}
    </>
  );
}
