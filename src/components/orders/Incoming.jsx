import { Spinner } from "@chakra-ui/react";
import OrderCard from "components/orders/OrderCard";
import ReusableMenu from "components/reusable-components/ReusableMenu";
import useIncomingOrders from "api/hooks/useIncomingOrders";
import useOrderStore from "zustand-stores/order-store";

function Incoming() {
  const { status } = useOrderStore();
  const { data, error, loading } = useIncomingOrders(status);

  return (
    <div>
      <ReusableMenu />
      {loading ? (
        <Spinner />
      ) : (
        <div>
          {data.map((item) => {
            return (
              <OrderCard key={item._id} renderButtons={true} data={item} />
            );
          })}
        </div>
      )}
    </div>
  );
}

export default Incoming;
