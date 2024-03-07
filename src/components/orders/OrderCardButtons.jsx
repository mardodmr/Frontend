import { useState } from "react";
import { Button } from "@chakra-ui/react";
import { updateOrderPaid, updateOrderStatus } from "api/orders";
import buttonStyle from "constants/chakraBlackButtonProps";

function OrderCardButtons({ state }) {
  const { paid, _id, status } = state;
  const [disablePaid, setDisabledPaid] = useState(false);
  const [disableFulfill, setDisabledFulfill] = useState(false);
  const [loadingPaid, setLoadingPaid] = useState(false);
  const [loadingFulfill, setLoadingFulfill] = useState(false);
  return (
    <div style={{ display: "flex", gap: "0.75rem", margin: 10 }}>
      <Button
        {...buttonStyle}
        size={"sm"}
        borderRadius={0}
        isDisabled={paid || disablePaid}
        isLoading={loadingPaid}
        onClick={() => {
          setLoadingPaid(true);
          updateOrderPaid(_id).then(() => {
            setLoadingPaid(false);
            setDisabledPaid(true);
          });
        }}
      >
        Paid
      </Button>{" "}
      <Button
        {...buttonStyle}
        borderRadius={0}
        size={"sm"}
        isDisabled={status === "fulfilled" || disableFulfill}
        isLoading={loadingFulfill}
        onClick={() => {
          setLoadingFulfill(true);
          updateOrderStatus(_id).then(() => {
            setLoadingFulfill(false);
            setDisabledFulfill(true);
          });
        }}
      >
        {status === "pending" ? "Fulfill" : "Fulfilled"}
      </Button>
    </div>
  );
}

export default OrderCardButtons;
