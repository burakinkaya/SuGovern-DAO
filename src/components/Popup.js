import React from "react";
import { useRouter } from "next/router";

const Popup = (props) => {
  const router = useRouter();

  const handleClose = () => {
    props.setTrigger(false);
    if (props.setLockScreen !== undefined) {
      props.setLockScreen(false);
    }
    router.push("/");
  };

  return props.trigger ? (
    <div className="popup">
      <div className="popup-inner">
        <button className="close-btn" onClick={handleClose}>
          close
        </button>
        {props.children}
      </div>
    </div>
  ) : (
    ""
  );
};

export default Popup;
