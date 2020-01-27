import React from "react";
import { Card, Icon, Avatar } from "antd";

export default function Product({
  id,
  name,
  description,
  date,
  price,
  origin,
  createdAt,
  updatedAt
}) {
  return (
    <Card
      style={{ width: 300 }}
      actions={[
        <Icon type="setting" key="setting" />,
        <Icon type="edit" key="edit" />,
        <Icon type="ellipsis" key="ellipsis" />
      ]}
    >
      <Card.Meta
        avatar={
          <Avatar src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" />
        }
        title="Card title"
        description="This is the description"
      />
    </Card>
  );
}
