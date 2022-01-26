import React from 'react';
import { Form, FormGroup, FormText, Label, Input, Button, Col } from 'reactstrap';

export default function Contact() {
  return (
  <div className='container mb-5 mt-5'>
  <div >
  <Form>
    <FormGroup row>
      <Label for="email" sm={2}>
        Email
      </Label>
      <Col sm={10}>
        <Input
          type="email"
          name="email"
          id="email"
          placeholder="My email"
        />
      </Col>
    </FormGroup>
    <FormGroup row>
      <Label for="Full Name" sm={2}>
        Full Name
      </Label>
      <Col sm={10}>
        <Input
          type="Full Name"
          name="Full Name"
          id="FullName"
          placeholder="John Doe"
        />
      </Col>
    </FormGroup>
    <FormGroup row>
      <Label for="Membership" sm={2}>
        Membership
      </Label>
      <Col sm={10}>
        <Input type="select" name="select" id="select">
          <option>Basic</option>
          <option>Pro</option>
          <option>Premium</option>
        </Input>
      </Col>
    </FormGroup>
    <FormGroup row>
      <Label for="multiple" sm={2}>
        Term
      </Label>
      <Col sm={10}>
        <Input type="select" name="selectMulti" id="multiple" multiple>
          <option>1 Year</option>
          <option>2 Year</option>
          <option>3 Year</option>
        </Input>
      </Col>
    </FormGroup>
    <FormGroup row>
      <Label for="Why You" sm={2}>
        Why You?
      </Label>
      <Col sm={10}>
        <Input type="textarea" name="Why You" id="WhyYou" />
      </Col>
    </FormGroup>
    <FormGroup row>
      <Label for="Valid License" sm={2}>
        File
      </Label>
      <Col sm={10}>
        <Input type="file" name="file" id="file" />
        <FormText color="muted">Upload</FormText>
      </Col>
    </FormGroup>
    <FormGroup row>
    </FormGroup>
    <FormGroup check row>
      <Col sm={{ size: 12, offset: 2 }}>
        <Button>Submit</Button>
      </Col>
    </FormGroup>
  </Form>
</div>
</div>);
}
