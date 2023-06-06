import { Table } from "components";
import useGetAll from "hooks/useGetAll";
import { Modal, Button } from "antd";
import { useState } from "react";
import Form from "./form";
const Users = () => {
  const { data } = useGetAll({
    url: "/posts",
    name: "posts",
  });
  const [modal, setModal] = useState<{
    create: boolean;
    data: null | object;
    update: boolean;
  }>({
    create: false,
    data: null,
    update: false,
  });
  return (
    <div>
      <Modal
        className="file-manager"
        open={modal.create || modal.update}
        onCancel={() => {
          setModal({ create: false, data: null, update: false });
        }}
        closable={true}
        footer={false}
        destroyOnClose
        title="Create Post"
      >
        <Form />
      </Modal>

      <div className="flex justify-end mb-5">
        <Button
          htmlType="button"
          type="primary"
          onClick={() => {
            setModal({ create: true, data: null, update: false });
          }}
        >
          Create
        </Button>
      </div>
      <Table
        items={data || []}
        columns={[
          {
            title: "sd",
            dataIndex: "id",
            render: value => {
              return value && value;
            },
          },
        ]}
      />
    </div>
  );
};

export default Users;
