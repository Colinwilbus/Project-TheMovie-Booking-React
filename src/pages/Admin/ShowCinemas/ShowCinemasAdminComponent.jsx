import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import "./ShowCinemasAdminStyle.scss";
import { Tabs, Table } from "antd";
import ModalComponent from "../../../components/ModalComponent/ModalComponent";
import ModalShowTimesComponent from "../ModalShowTimes/ModalShowTimesComponent";
import AddShowTimesComponent from "../AddShowTimes/AddShowTimesComponent";

const { TabPane } = Tabs;

function callback(key) {
  console.log(key);
}

export default function ShowCinemaAdminComponent(props) {
  const { cinemaList } = useSelector((state) => state.cinemaReducer);
  console.log(cinemaList);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch({
      type: "getCinemaListApiAction",
    });
  }, []);

  function onChange(pagination, filters, sorter, extra) {
    console.log("params", pagination, filters, sorter, extra);
  }
  const columns = [
    {
      title: "ID",
      dataIndex: "maPhim",
    },
    {
      title: "Name",
      dataIndex: "tenPhim",
      sortDirections: ["descend", "ascend"],
      sorter: (a, b) => {
        const tenPhimA = a.tenPhim.toLowerCase().trim();
        const tenPhimB = b.tenPhim.toLowerCase().trim();
        if (tenPhimA > tenPhimB) {
          return 1;
        }
        return -1;
      },
    },
    {
      title: "",
      dataIndex: "",
      render: (text, film) => {
        return (
          <div>
            <ModalComponent
              textShowModal="View Show Times"
              Component={ModalShowTimesComponent}
              showTimeList={film.lstLichChieuTheoPhim}
              titleModal="Show Times"
              functionOk={() => {}}
            />
          </div>
        );
      },
    },
  ];

  const renderDataTable = (listFilm) => {
    const data = listFilm.map((film, index) => ({
      key: index,
      maPhim: film.maPhim,
      tenPhim: film.tenPhim,
      lstLichChieuTheoPhim: film.lstLichChieuTheoPhim,
    }));
    return data;
  };

  const renderCinemas = () =>
    cinemaList.map((item, index) => (
      <TabPane
        tab={
          <div>
            <div>
              <img src={item.logo} />
            </div>
            <p>{item.tenHeThongRap}</p>
          </div>
        }
        key={index}
      >
        <Tabs defaultActiveKey="0" tabPosition="left" onChange={callback}>
          {item.lstCumRap.map((itemChild, index) => (
            <TabPane
              tab={
                <div>
                  <div>
                    <img src={item.logo} />
                  </div>
                  <p>{itemChild.tenCumRap}</p>
                </div>
              }
              key={index}
            >
              <Table
                columns={columns}
                dataSource={renderDataTable(itemChild.danhSachPhim)}
                onChange={onChange}
              />
            </TabPane>
          ))}
        </Tabs>
      </TabPane>
    ));

  return (
    <section className="showCinemaAm">
      <div className="showCinemaAm__Title">
        <h3>ShowTimes Management</h3>
      </div>
      <div className="showCinemaAm__Add">
        <AddShowTimesComponent />
      </div>
      <div className="showCinemaAm__content">
        <Tabs defaultActiveKey="0" onChange={callback}>
          {renderCinemas()}
        </Tabs>
      </div>
    </section>
  );
}
