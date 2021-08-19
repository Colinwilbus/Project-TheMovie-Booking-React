import React from "react";
import style from "./Contact.css";

export default function ContactComponent() {
  return (
    <section className="myContact py-5">
      <div className="myContact__content container text-center">
        <div className="row">
          <div className="col-12">
            <p>Need help? Contact our support team on</p>
            <h3>0330 123 4567</h3>
          </div>
        </div>
      </div>
    </section>
  );
}
