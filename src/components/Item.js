import React from 'react'
import { Button, Col, Input, Label, Row } from 'reactstrap'

function Item({ item, onClick }) {
  return (
    <Row>
      <Col sm='4'>
        <Label>제품명</Label>
        <Input value={item.name} readOnly />
      </Col>
      <Col sm='4'>
        <Label>가격</Label>
        <Input value={item.price} readOnly />
      </Col>
      <Col sm='4'>
        <Label>기능</Label>
        <Button
          style={{ display: 'block', width: '100%' }}
          onClick={onClick}
          value={item.name}
        >
          담기
        </Button>
      </Col>
    </Row>
  )
}

export default Item
