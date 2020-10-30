import React from "react";
import Button from "@material-ui/core/Button";
import AddIcon from "@material-ui/icons/Add";
import { Modal, Form, FormGroup, Row, Col } from "react-bootstrap";
import { useState } from "react";
import "../CSS/index.css";
import { Typeahead } from "react-bootstrap-typeahead";
import "react-bootstrap-typeahead/css/Typeahead.css";
import "react-bootstrap-typeahead/css/Typeahead.min.css";
import "react-bootstrap-typeahead/css/Typeahead.scss";
const options = [
  { category: "category 1", userGroup: "group 1" },
  { category: "category 2", userGroup: "group 1" },
  { category: "category 3", userGroup: "group 1" },
];
function Challenge() {
  const [showModal, setShowModal] = useState(false);
  const [title, setTitle] = useState();
  const [description, setDescription] = useState();
  const [startDate, setStartDate] = useState();
  const [endDate, setEndDate] = useState();
  const [categoryOptions, setCategoryOptions] = useState([]);
  const [groupOptions, setGroupOptions] = useState([]);
  //const [tags, setTags] = useState([]);
  const handleCloseModal = () => setShowModal(false);
  const handleShowModal = () => setShowModal(true);
  return (
    <div>
      <div>Challenges Here</div>
      <Button
        startIcon={<AddIcon />}
        variant="contained"
        size="large"
        className="global-btn"
        onClick={handleShowModal}
      >
        Create Challenge
      </Button>
      <Modal show={showModal} onHide={handleCloseModal} centered>
        <Modal.Header>
          <Modal.Title>
            <h2>Post Challenge</h2>
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <FormGroup>
              <Form.Label>Challenge Title</Form.Label>
              <Form.Control
                type="text"
                name="title"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
              />
            </FormGroup>

            <FormGroup>
              <Form.Label>Challenge Description</Form.Label>
              <Form.Control
                as="textarea"
                name="description"
                value={description}
                onChange={(e) => setDescription(e.target.value)}
              />
            </FormGroup>

            <Row>
              <Col sm="12" md="6">
                <FormGroup>
                  <Form.Label>Start Date</Form.Label>
                  <Form.Control
                    type="date"
                    name="startDate"
                    value={startDate}
                    onChange={(e) => setStartDate(e.target.value)}
                  />
                </FormGroup>
              </Col>
              <Col sm="12" md="6">
                <FormGroup>
                  <Form.Label>End Date</Form.Label>
                  <Form.Control
                    type="date"
                    name="endDate"
                    value={endDate}
                    onChange={(e) => setEndDate(e.target.value)}
                  />
                </FormGroup>
              </Col>
            </Row>
            <Row>
              <Col sm="12" md="6">
                <FormGroup>
                  <Form.Label>Select Category</Form.Label>
                  <Typeahead
                    id="basic-typeahead-multiple"
                    labelKey="category"
                    multiple
                    onChange={setCategoryOptions}
                    options={options}
                    placeholder="Choose Categories"
                    selected={categoryOptions}
                  />
                </FormGroup>
              </Col>
              <br />
              <Col sm="12" md="6">
                <FormGroup>
                  <Form.File id="formcheck-api-regular">
                    <Form.File.Label>Add Challenge Image</Form.File.Label>
                    <Form.File.Input />
                  </Form.File>
                </FormGroup>
              </Col>
            </Row>
            <Row>
              <Col sm="12" md="6">
                <FormGroup>
                  <Form.Label>Select Groups</Form.Label>
                  <Typeahead
                    id="basic-typeahead-multiple"
                    labelKey="userGroup"
                    multiple
                    onChange={setGroupOptions}
                    options={options}
                    placeholder="Select Groups"
                    selected={groupOptions}
                  />
                </FormGroup>
              </Col>
              <br />
              <Col sm="12" md="6">
                <FormGroup>
                  <Form.Check
                    type="switch"
                    id="custom-switch"
                    label="Hide Me"
                  />
                </FormGroup>
              </Col>
            </Row>
          </Form>
        </Modal.Body>
        <br />
        <br />
        <Modal.Footer>
          <Button
            variant="contained"
            color="primary"
            onClick={handleCloseModal}
          >
            Cancel
          </Button>
          <Button
            variant="contained"
            color="secondary"
            onClick={handleCloseModal}
          >
            Post
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
}

export default Challenge;
