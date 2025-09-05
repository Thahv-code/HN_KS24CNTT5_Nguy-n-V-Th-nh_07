import React, { useState } from "react";
import { Button, Modal } from "antd";

type OpenModalProps = {
  children?: React.ReactNode;
};

const OpenModal = ({ children }: OpenModalProps) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const showModal = () => {
    setIsModalOpen(true);
  };

  const handleOk = () => {
    setIsModalOpen(false);
  };

  const handleCancel = () => {
    setIsModalOpen(false);
  };

  return (
    <>
      <Button type="primary" onClick={showModal}>
        Tạo bài viết
      </Button>
      <Modal
        title="Bài viết của bạn"
        closable={{ "aria-label": "Custom Close Button" }}
        open={isModalOpen}
        onOk={handleOk}
        onCancel={handleCancel}
      >
        {children}
      </Modal>
    </>
  );
};

export default OpenModal;
