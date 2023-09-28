import React, { useEffect, useState } from "react";
import OrderCard from "components/OrderCard";
import { getOrdersOfMyProducts, getOrdersIBought } from "api/orders";
import { userHasProducts } from "api/users";
import Tab from "react-bootstrap/Tab";
import Tabs from "react-bootstrap/Tabs";
import NavbarComponent from "./NavbarComponent";

function Orders() {
  //here i'll have four tabs that render conditionally //if the user owns products on click the query changes // renderButtons
  //here I query order based on user 4 scenerios and then pass the data

  const [orders, setOrders] = React.useState([]);
  const [rednerBtn, setRenderBtn] = useState(false);
  const [key, setKey] = useState("");
  const [hasProducts, setHasProducts] = useState(false);

  //const [errorIsOpen, setErrorIsOpen] = useState(false); // TODO error handleing
  const renderOrders = () => {
    return orders.map((order) => (
      <OrderCard key={order._id} data={order} renderButtons={rednerBtn} />
    ));
  };

  useEffect(() => {
    async function fetchOrders() {
      const has = await userHasProducts();
      has ? setHasProducts(true) : setHasProducts(false);
      if (key === "incoming") {
        const data = await getOrdersOfMyProducts("pending");
        setOrders(data);
        setRenderBtn(true);
      }
      if (key === "processed") {
        const data = await getOrdersOfMyProducts("fulfilled");
        setOrders(data);
      }
      if (key === "outgoing") {
        const data = await getOrdersIBought("pending");
        setOrders(data);
      }
      if (key === "fulfilled") {
        const data = await getOrdersIBought(key);
        setOrders(data);
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
        onSelect={(k) => setKey(k)}
        className="mb-3"
      >
        {hasProducts && (
          <Tab eventKey="incoming" title="Incoming Orders">
            {renderOrders()}
          </Tab>
        )}
        {hasProducts && (
          <Tab eventKey="processed" title="Processed Orders">
            {renderOrders()}
          </Tab>
        )}

        <Tab eventKey="outgoing" title="Outgoing Orders">
          {renderOrders()}
        </Tab>
        <Tab eventKey="fulfilled" title="Fulfilled Orders">
          {renderOrders()}
        </Tab>
      </Tabs>
    </div>
  );
}

export default Orders;
