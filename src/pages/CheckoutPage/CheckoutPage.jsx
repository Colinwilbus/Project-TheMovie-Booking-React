import React, { useEffect } from "react";
import HeaderCheckoutComponent from "./headerCheckOut/HeaderCheckoutComponent";
import Aos from "aos";
import InfoBookingComponent from "./infoBooking/InfoBookingComponent";
import "./CheckOutPageStyle.scss";
import BookingChairComponent from "./bookingChair/BookingChairComponent";
import { useDispatch, useSelector } from "react-redux";
import { connection } from "../..";

export default function CheckoutPage(props) {
  const { id } = props.match.params;
  const { listChair, listChoiceChair, listOtherSelectedChair } = useSelector(
    (state) => state.bookingReducer
  );
  const { userLogin } = useSelector((state) => state.userReducer);
  console.log(listChair);

  const dispatch = useDispatch();
  useEffect(() => {
    connection.on("loadDanhSachGheDaDat", (dSGheKhachDat) => {
      console.log("dSGheKhachDat", dSGheKhachDat);
    });
    dispatch({
      type: "getListChairApiAction",
      idShowtimes: id,
    });
    Aos.init({
      duration: 700,
    });
  }, []);
  return (
    <section className="checkoutPage">
      <div className="checkoutPage__Layout">
        <HeaderCheckoutComponent listChair={listChair} userLogin={userLogin} />
      </div>
      <div className="checkoutPage__Cinema">
        <BookingChairComponent
          listChair={listChair}
          listChoiceChair={listChoiceChair}
          userLogin={userLogin}
          listOtherSelectedChair={listOtherSelectedChair}
        />
        <InfoBookingComponent
          listChair={listChair}
          listChoiceChair={listChoiceChair}
          idShowtimes={id}
          userLogin={userLogin}
          history={props.history}
        />
      </div>
    </section>
  );
}
