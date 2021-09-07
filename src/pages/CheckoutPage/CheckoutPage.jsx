import React, { useEffect } from "react";
import HeaderCheckoutComponent from "./headerCheckOut/HeaderCheckoutComponent";
import Aos from "aos";
import InfoBookingComponent from "./infoBooking/InfoBookingComponent";
import "./CheckOutPageStyle.scss";
import BookingChairComponent from "./bookingChair/BookingChairComponent";
import { useDispatch, useSelector } from "react-redux";
import {
  HIDE_LOADING,
  DISLAY_LOADING,
} from "../../redux/types/lazyLoadingType";

export default function CheckoutPage(props) {
  const { id } = props.match.params;
  const { listChair, listChoiceChair } = useSelector(
    (state) => state.bookingReducer
  );
  const { userLogin } = useSelector((state) => state.userReducer);
  console.log(listChair);

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch({
      type: DISLAY_LOADING,
    });
    dispatch({
      type: "getListChairApiAction",
      idShowtimes: id,
    });
    Aos.init({
      duration: 700,
    });
    setTimeout(() => {
      dispatch({
        type: HIDE_LOADING,
      });
    }, 2000);
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
