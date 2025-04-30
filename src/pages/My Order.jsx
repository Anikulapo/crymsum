import Header from "../components/Header.jsx";
import Footer from "../components/Footer.jsx";
import { useSelector, useDispatch } from "react-redux";
import { updateOrderStatus, cancelOrder } from "../state/order/orderSlice.js";
import { selectAllOrders } from "../state/order/orderSlice.js";
import { useEffect, useState } from "react";

const MyOrder = () => {
  const [isLoadingG, setIsLoadingG] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const dispatch = useDispatch();
  const orders = useSelector(selectAllOrders);

  const updateStatus = (orderId, status) => {
    setIsLoading(true);
    setTimeout(() => {
      setIsLoading(false);
      dispatch(updateOrderStatus({ orderId, status }));
    }, 5000);
    
  };

  const handleCancelOrder = (orderId) => {
    setIsLoadingG(true);
    setTimeout(() => {
      setIsLoadingG(false);
      dispatch(cancelOrder(orderId))
    }, 5000);
    
  };

  useEffect(()=>{
    
  },[])

  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <div className="mt-20 px-[5%] mb-10">
        <h1 className="font-inter text-2xl font-[500] mb-6">My Orders</h1>
        {orders.length === 0 ? (
          <div className="w-full h-[400px] flex flex-col items-center justify-center mb-6">
            <p className="text-[#5F5F5F] font-inter text-xl lg:text-5xl">
              You have no orders yet.
            </p>
          </div>
        ) : (
          <div className="space-y-4">
            {orders.map((order) => (
              <div
                key={order.id}
                className="border border-[#C5C5C580] p-6 mb-8 rounded-xl"
              >
                <div className="flex justify-between flex-wrap gap-4">
                  <div>
                    <p className="font-inter text-[14px] text-[#5F5F5F]">
                      Order ID: <span className="text-black">{order.id}</span>
                    </p>
                    <p className="font-inter text-[14px] text-[#5F5F5F]">
                      Order Date:{" "}
                      <span className="text-black">{order.date}</span>
                    </p>
                  </div>
                  <div>
                    <p className="font-inter text-[14px] text-[#5F5F5F]">
                      Status:{" "}
                      <span
                        className={
                          order.status == "Shipped"
                            ? "text-green-600"
                            : " text-red-500"
                        }
                      >
                        {order.status}
                      </span>
                    </p>
                    <p className="font-inter text-[14px] text-[#5F5F5F]">
                      Total: {""}
                      <span className="text-black">₦{order.totalPrice.toFixed(2)}</span>
                    </p>
                  </div>
                </div>

                <div className="mt-6 space-y-4">
                  {order.items.map((item) => (
                    <div
                      key={item.id}
                      className="flex gap-4 border-t pt-4 items-center"
                    >
                      <img
                        src={item.image}
                        alt={item.title}
                        className="w-16 h-16 object-cover rounded-md"
                      />
                      <div>
                        <p className="font-inter font-medium text-[16px]">
                          {item.title} ({item.size})
                        </p>
                        <p className="font-inter text-[14px] text-[#5F5F5F]">
                          Qty: {item.quantity}
                        </p>
                        <p className="font-inter text-[14px] text-[#5F5F5F]">
                          Price: ₦{item.price}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>

                <div className="flex justify-end gap-4 mt-4">
                  {order.status === "Processing" && (
                    <>
                      {isLoadingG ? (
                        <img
                        src="/images/load.svg"
                        alt="loading...."
                        className="w-10"
                      />
                      ):(
                        <button
                          onClick={() => handleCancelOrder(order.id)}
                          className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600 transition"
                        >
                          Cancel Order
                        </button>
                      )}

                      {isLoading ? (
                        <img
                          src="/images/load.svg"
                          alt="loading...."
                          className="w-10"
                        />
                      ) : (
                        <button
                          onClick={() => updateStatus(order.id, "Shipped")}
                          className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition"
                        >
                          Mark as Shipped
                        </button>
                      )}
                    </>
                  )}
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
      <Footer />
    </div>
  );
};

export default MyOrder;
