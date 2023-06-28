import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { getOrderLists } from "../../FetchReq/order";
import Loading from "../../components/Loading/Loading";
import OrderCard from "../../components/OrderCard/OrderCard";
const OrderPage = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [data, setData] = useState(null);

  const getAllOrders = async () => {
    let data = await getOrderLists();
    setData(data.data);
  };
  useEffect(() => {
    setIsLoading(true);
    getAllOrders();
    setIsLoading(false);
  }, []);
  return (
    <>
      {isLoading === true || data === null ? (
        <Loading />
      ) : (
        <div>
          <h1 style={{ textAlign: "center", margin: "20px" }}>Order List</h1>
          {data.length > 0 &&
            data.map((elem) => (
              <div>
                <OrderCard elem={elem} />
              </div>
            ))}
        </div>
      )}
    </>
  );
};

export default OrderPage;
