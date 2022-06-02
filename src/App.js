import "antd/dist/antd.css";
import "./App.css";
import { Checkbox, Divider, TreeSelect } from "antd";
import { useState } from "react";
import { PlusSquareOutlined } from "@ant-design/icons";

const { SHOW_PARENT } = TreeSelect;
const treeData = [
  {
    title: "Node1",
    value: "0-0",
    key: "0-0",
    children: [
      {
        title: "Child Node1",
        value: "ena",
        key: "0-0-0",
      },
      {
        title: "Child Node2",
        value: "Child Node2",
        key: "0-0-0",
      },
      {
        title: "Child Node3",
        value: "Child Node3",
        key: "0-0-0",
      },
      {
        title: "Child Node4",
        value: "Child Node4",
        key: "0-0-0",
      },
    ],
  },
  {
    title: "Node2",
    value: "0-1",
    key: "0-1",
    children: [
      {
        title: "Child Node3",
        value: "mena",
        key: "0-1-0",
      },
      {
        title: "Child Node4",
        value: "deka",
        key: "0-1-1",
      },
      {
        title: "Child Node5",
        value: "yo",
        key: "0-1-2",
      },
    ],
  },
];

const App = () => {
  const [value, setValue] = useState(["ena"]);
  const onChange = (newValue) => {
    console.log("onChange ", newValue);
    setValue(newValue);
  };

  const tProps = {
    treeData,
    value,
    onChange,
    treeCheckable: true,
    showCheckedStrategy: SHOW_PARENT,
    placeholder: "Please select",
    style: {
      width: "200px",
    },
    showSearch: true,
    // switcherIcon: <PlusSquareOutlined />,
  };
  const selectAll = (e) => {
    console.log(e.target.checked);
    if (e.target.checked) {
      setValue(
        treeData.map((a) => {
          if (a.children) return a.value;
        })
      );
    } else {
      setValue([]);
    }
  };
  return (
    <TreeSelect
      {...tProps}
      treeLine={true && { showLeafIcon: false }}
      dropdownRender={(originNode, props) => {
        return (
          <>
            <Checkbox onChange={selectAll}>Select All Regions</Checkbox>
            <Divider />
            {originNode}
          </>
        );
      }}
    />
  );
};

export default App;
