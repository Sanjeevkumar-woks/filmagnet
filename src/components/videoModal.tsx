import React, { useState } from "react";
import { Button, Modal } from "antd";
import { PiPlayCircleBold } from "react-icons/pi";

const VideoModal: React.FC = () => {
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
      <Button
        type="text"
        ghost
        onClick={showModal}
        className=" p-6 transition-all opacity-0.1"
      >
        <PiPlayCircleBold color="gray" size={50} />
      </Button>
      <Modal
        title="Basic Modal"
        width={800}
        open={isModalOpen}
        onOk={handleOk}
        onCancel={handleCancel}
        style={{ height: "800" }}
      >
        <iframe
          width="700"
          height="300"
          src={"https://www.youtube.com/embed/TUSrpR7sFIk"}
          title={"TMUKO"}
        ></iframe>
      </Modal>
    </>
  );
};

export default VideoModal;
