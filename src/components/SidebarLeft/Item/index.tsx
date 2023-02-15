import { Button } from "antd";
import React, { useState } from "react";

//active: true -> màu xanh
//active: false -> màu đỏ
function Item({ text }: any) {
  const [active, setActive] = useState<boolean>(false);

  return (
    <Button
      className={active ? "active" : "inactive"}
      onClick={() => setActive(!active)}
    >
      {text}
    </Button>
  );
}

export default Item;
