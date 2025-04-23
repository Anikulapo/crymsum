import Header from "../components/Header.jsx";
import Footer from "../components/Footer.jsx";

const MyOrder = () => {
  
  const orders = [
    {
      id: "ORD123456",
      date: "April 5, 2024",
      status: "Shipped",
      total: "$120.00",
      items: [
        {
          name: "Pet Carrier Backpack",
          quantity: 1,
          price: "$60.00",
          image: "/images/product1.jpg",
        },
        {
          name: "Adjustable Pet Harness",
          quantity: 2,
          price: "$30.00",
          image: "/images/product2.jpg",
        },
      ],
    },
    {
      id: "ORD123789",
      date: "March 28, 2024",
      status: "Delivered",
      total: "$85.00",
      items: [
        {
          name: "Chew Toy Bundle",
          quantity: 1,
          price: "$25.00",
          image: "/images/product3.jpg",
        },
        {
          name: "Luxury Dog Bed",
          quantity: 1,
          price: "$60.00",
          image: "/images/product4.jpg",
        },
      ],
    },
  ];

  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <div className="mt-20 px-[5%] mb-10">
        <h1 className="font-inter text-2xl font-[500] mb-6">My Orders</h1>
        {orders.map((order) => (
          <div key={order.id} className="border border-[#C5C5C580] p-6 mb-8 rounded-xl">
            <div className="flex justify-between flex-wrap gap-4">
              <div>
                <p className="font-inter text-[14px] text-[#5F5F5F]">Order ID: <span className="text-black">{order.id}</span></p>
                <p className="font-inter text-[14px] text-[#5F5F5F]">Order Date: <span className="text-black">{order.date}</span></p>
              </div>
              <div>
                <p className="font-inter text-[14px] text-[#5F5F5F]">Status: <span className="text-black">{order.status}</span></p>
                <p className="font-inter text-[14px] text-[#5F5F5F]">Total: <span className="text-black">{order.total}</span></p>
              </div>
            </div>

            <div className="mt-6 space-y-4">
              {order.items.map((item, index) => (
                <div key={index} className="flex gap-4 border-t pt-4 items-center">
                  <img src={item.image} alt={item.name} className="w-16 h-16 object-cover rounded-md" />
                  <div>
                    <p className="font-inter font-medium text-[16px]">{item.name}</p>
                    <p className="font-inter text-[14px] text-[#5F5F5F]">Qty: {item.quantity}</p>
                    <p className="font-inter text-[14px] text-[#5F5F5F]">Price: {item.price}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
      <Footer />
    </div>
  );
};

export default MyOrder;
