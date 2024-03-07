import { useEffect } from "react";
import { Tab, TabList, TabPanel, TabPanels, Tabs } from "@chakra-ui/react";
import DefaultLayout from "components/layouts/DefaultLayout";
import Incoming from "components/orders/Incoming";
import MyOrders from "components/orders/MyOrders";
import useAuthStore from "zustand-stores/auth-store";

function Orders() {
  const { productsNumber, hasProducts } = useAuthStore();

  useEffect(() => {
    productsNumber();
  }, []);

  return (
    <DefaultLayout>
      <div style={{ paddingLeft: "1rem" }}>
        <h1>Orders:</h1>
        {hasProducts > 0 ? (
          <Tabs isLazy>
            <TabList>
              <Tab>Incoming</Tab>
              <Tab>My Orders</Tab>
            </TabList>
            <TabPanels>
              <TabPanel>
                <Incoming />
              </TabPanel>
              <TabPanel>
                <MyOrders />
              </TabPanel>
            </TabPanels>
          </Tabs>
        ) : (
          <MyOrders />
        )}
      </div>
    </DefaultLayout>
  );
}

export default Orders;
