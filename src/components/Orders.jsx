import React, { useEffect, useState } from "react";
import { getOrdersOfMyProducts, getOrdersIBought } from "api/orders";
import { useAuth } from "context/auth-context";
import OrderCard from "components/OrderCard";
import Tab from "react-bootstrap/Tab";
import Tabs from "react-bootstrap/Tabs";

function Orders() {
  //here i'll have four tabs that render conditionally //if the user owns products on click the query changes // renderButtons
  //here I query order based on user 4 scenerios and then pass the data

  const [orders, setOrders] = React.useState([]);
  const [rednerBtn, setRenderBtn] = useState(false);
  const [key, setKey] = useState("outgoing");
  const { hasProducts } = useAuth();

  //const [errorIsOpen, setErrorIsOpen] = useState(false); // TODO error handleing
  const renderOrders = () => {
    return orders?.map((order) => (
      <div>
        <OrderCard key={order._id} data={order} renderButtons={rednerBtn} />
      </div>
    ));
  };

  useEffect(() => {
    async function fetchOrders() {
      if (key === "incoming") {
        const data = await getOrdersOfMyProducts("pending");
        setOrders(data);
        setRenderBtn(true);
      }
      if (key === "processed") {
        const data = await getOrdersOfMyProducts("fulfilled");
        setOrders(data);
        setRenderBtn(false);
      }
      if (key === "outgoing") {
        const data = await getOrdersIBought("pending");
        setOrders(data);
        setRenderBtn(false);
      }
      if (key === "fulfilled") {
        const data = await getOrdersIBought("fulfilled");
        setOrders(data);
        setRenderBtn(false);
      }
    }
    fetchOrders();
  }, [key]);

  return (
    <div>
      <h1>Orders:</h1>
      <Tabs
        id="controlled-tab-example"
        activeKey={key}
        onSelect={(k) => {
          setKey(k);
          console.log(k);
        }}
        className="mb-3"
      >
        {hasProducts > 0 && (
          <Tab eventKey="incoming" title="Incoming Orders">
            <div className="product-card">{renderOrders()}</div>
          </Tab>
        )}
        {hasProducts > 0 && (
          <Tab eventKey="processed" title="Processed Orders">
            <div className="product-card">{renderOrders()}</div>
          </Tab>
        )}

        <Tab eventKey="outgoing" title="Outgoing Orders">
          <div className="product-card">{renderOrders()}</div>
        </Tab>
        <Tab eventKey="fulfilled" title="Fulfilled Orders">
          <div className="product-card">{renderOrders()}</div>
        </Tab>
      </Tabs>
    </div>
  );
}

export default Orders;
