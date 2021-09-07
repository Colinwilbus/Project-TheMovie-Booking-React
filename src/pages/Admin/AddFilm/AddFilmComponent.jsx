import React, { useState } from "react";
import { Modal, Button } from "antd";
import { useFormik } from "formik";
import "./AddFilmStyle.scss";
export default function AddFilmComponent(props) {
  const [isModalVisible, setIsModalVisible] = useState(false);
  const { title, text, Component } = props;
  const formik = useFormik({
    initialValues: {
      maPhim: "",
      tenPhim: "",
    },
  });
  const showModal = () => {
    setIsModalVisible(true);
  };

  const handleOk = () => {
    setIsModalVisible(false);
    console.log(formik.values);
  };

  const handleCancel = () => {
    setIsModalVisible(false);
  };

  return (
    <form>
      <Button type="primary" onClick={showModal}>
        {text}
      </Button>
      <Modal
        title={title}
        visible={isModalVisible}
        onOk={handleOk}
        onCancel={handleCancel}
      >
        <div className="addFilm">
          <div className="row">
            <div className="col-6">
              <div className="form-group">
                <label htmlFor="exampleInputEmail1">ID</label>
                <input
                  name="maPhim"
                  className="form-control"
                  placeholder="ID"
                  onChange={(e) => formik.handleChange(e)}
                  value={formik.values.maPhim}
                />
              </div>
            </div>
            <div className="col-6">
              <div className="form-group">
                <label htmlFor="exampleInputPassword1">Name</label>
                <input
                  name="tenPhim"
                  className="form-control"
                  placeholder="Name"
                  onChange={(e) => formik.handleChange(e)}
                  value={formik.values.tenPhim}
                />
              </div>
            </div>
          </div>
          {/* <button type="submit"> SUBMIT</button> */}
        </div>
      </Modal>
    </form>
  );
}
