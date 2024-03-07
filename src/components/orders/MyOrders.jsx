import { Spinner } from "@chakra-ui/react";
import ReusableMenu from "components/reusable-components/ReusableMenu";
import OrderCard from "components/orders/OrderCard";
import useMyOrders from "api/hooks/useMyOrders";
import useOrderStore from "zustand-stores/order-store";

function MyOrders() {
  const { status } = useOrderStore();
  const { data, error, loading } = useMyOrders(status);

  return (
    <div>
      <ReusableMenu />
      {loading ? (
        <Spinner />
      ) : (
        <div>
          {data.map((item) => {
            return <OrderCard key={item._id} data={item} />;
          })}
        </div>
      )}
    </div>
  );
}

export default MyOrders;
