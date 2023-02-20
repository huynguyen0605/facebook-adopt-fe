import React, { useState, useEffect } from "react";
import { Button, Table } from "antd";
import type { ColumnsType } from "antd/es/table";
import axios from "axios";

interface Step {
  id: string;
  functionName: string;
  name: string;
}

const columns: ColumnsType<Step> = [
  {
    title: "Id",
    dataIndex: "id",
  },
  {
    title: "Tên hàm",
    dataIndex: "functionName",
  },
  {
    title: "Tên bước",
    dataIndex: "name",
  },
];

const Body: React.FC = () => {
  const [selectedRowKeys, setSelectedRowKeys] = useState<React.Key[]>([]);
  const [loading, setLoading] = useState(false);
  let [steps, setSteps] = useState<Step[]>([]); //state

  useEffect(() => {
    console.log("huynvq::==========>mount");

    axios.get("http://localhost:3001/steps").then((response) => {
      setSteps(response.data.steps);
    });

    return () => {
      console.log("huynvq::============>unmount");
    };
  }, []);
  const start = () => {
    setLoading(true);
    // ajax request after empty completing
    axios
      .post("http://localhost:3001/create-scenario", {
        stepIds: selectedRowKeys,
      })
      .then();
  };

  const onSelectChange = (stepIds: React.Key[]) => {
    console.log("selectedRowKeys changed: ", stepIds);
    setSelectedRowKeys(stepIds);
  };

  const rowSelection = {
    selectedRowKeys,
    onChange: onSelectChange,
  };
  const hasSelected = selectedRowKeys.length > 0;

  return (
    <div>
      <div style={{ marginBottom: 16 }}>
        <Button
          type="primary"
          onClick={start}
          disabled={!hasSelected}
          // loading={loading}
        >
          Create Scenario
        </Button>
        <span style={{ marginLeft: 8 }}>
          {hasSelected ? `Selected ${selectedRowKeys.length} items` : ""}
        </span>
      </div>
      <Table
        rowSelection={rowSelection}
        columns={columns}
        dataSource={steps}
        rowKey="id"
      />
    </div>
  );
};

export default Body;
