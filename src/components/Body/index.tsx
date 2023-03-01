import React, { useState, useEffect } from "react";
import { Button, Table } from "antd";
import type { ColumnsType } from "antd/es/table";
import axios from "axios";

interface Step {
  id: string;
  functionName: string;
  name: string;
}

interface Scenario {
  Scenario: string;
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

const columns2: ColumnsType<Scenario> = [
  {
    title: "Id",
    dataIndex: "id",
  },
  {
    title: "Tên kịch bản",
    dataIndex: "functionName",
  },
  // {
  //   title: "Tên bước",
  //   dataIndex: "name",
  // },
];


const Body: React.FC = () => {
  const [selectedRowKeys, setSelectedRowKeys] = useState<React.Key[]>([]);
  const [selectedRowKeys2, setSelectedRowKeys2] = useState<React.Key[]>([]);
  const [loading, setLoading] = useState(false);
  const [steps, setSteps] = useState<Step[]>([]); //state
  const [scenarios, setScenarios] = useState<Scenario[]>([]);

  useEffect(() => {
    console.log("huynvq::==========>mount");

    axios.get("http://localhost:3001/steps").then((response) => {
      setSteps(response.data.steps);
    });

    return () => {
      console.log("huynvq::============>unmount");
    };
  }, []);
  //////
  const start = () => {
    setLoading(true);
    // ajax request after empty completing
    axios
      .post("http://localhost:3001/create-scenario", {
        stepIds: selectedRowKeys,
      })
      .then();
    axios
      .get("http://localhost:3001/get-scenario").then((response) => {
      setScenarios(response.data.scenarios);
      })
  };

  // phần này dành cho Steps
  const onSelectChange = (stepIds: React.Key[]) => {
    console.log("selectedRowKeys changed: ", stepIds);
    setSelectedRowKeys(stepIds);
  };

  const rowSelection = {
    selectedRowKeys,
    onChange: onSelectChange,
  };
  const hasSelected = selectedRowKeys.length > 0;

  // Phần này dành cho Scenario
  const deleteRow = () => { 
    setLoading(true);
    selectedRowKeys2.forEach((ScenarioIds) => {
    axios.delete(`http://localhost:3001/delete-scenario/${ScenarioIds}`)
    .then();
    });
  }

  const onSelectChange2 = (ScenarioIds: React.Key[]) => {
    console.log("selectedRowKeys2 changed: ", ScenarioIds);
    setSelectedRowKeys2(ScenarioIds);
  };
  
  const rowSelection2 = {
    selectedRowKeys2,
    onChange: onSelectChange2,
  };
  const hasSelected2 = selectedRowKeys2.length > 0;

  return (
    <div>
      <div style={{ marginBottom: 16 }}>
        {/* Phần này dành cho Create Scenario */}
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
      {/* Phần này dành cho Run Scenario */}
      <Button
          type="primary"
          // onClick={start}
          disabled={!hasSelected2}
          // loading={loading}
        >
          Run Scenarios
      </Button>

      <Button
          type="primary"
          onClick={deleteRow}
          disabled={!hasSelected2}
          // loading={loading}
        >
          Delete Scenarios
      </Button>

      <span style={{ marginLeft: 8 }}>
          {hasSelected2 ? `Selected ${selectedRowKeys2.length} items` : ""}
        </span>
      <Table
        rowSelection={rowSelection2}
        columns={columns2}
        dataSource={scenarios}
        rowKey="id"
      />
    </div>
  );
};

export default Body;
