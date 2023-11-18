import React, { useEffect, useState } from "react";
import "../assets/product.scss";
import { config } from "../script/config";
import { client } from "../script/client";

const Product = () => {
  const [list, setList] = useState([]);
  const [listCart, setListCart] = useState([]);

  useEffect(() => {
    async function getProduct() {
      try {
        const limit = config.LIMIT;
        const url = `/products?limit=${limit}`;

        const { data: list } = await client.get(url);
        setList(list.data.listProduct);
      } catch (err) {
        console.log(err);
      }
    }
    getProduct();
  }, []);

  const handleAddProduct = (_id, name, price, quantity) => {
    const product = { _id, name, count: 1, totalPrice: price, quantity };

    if (listCart.length) {
      listCart.forEach((item) => {
        if (item._id === product._id) {
          item.count++;
          item.totalPrice = item.count * price;
          item.quantity--;

          setListCart([...listCart]);
        }
      });
    }

    if (
      !listCart.find(({ _id }) => _id === product._id) ||
      listCart.length === 0
    ) {
      console.log(product.quantity);
      setListCart([...listCart, product]);
    }
  };

  const handlePaying = async () => {
    let listPay = listCart.map((item) => ({
      productId: item._id,
      quantity: item.count,
    }));

    setListCart([]);

    const url = `/orders`;
    const { data, response } = await client.post(url, listPay);

    console.log(response);
    console.log(data);
  };

  return (
    <>
      <div className="shop">
        <h1>Welcome to Shop!</h1>
        <ul className="list-products">
          {list.map(({ _id, name, price, image, quantity }) => (
            <li className="product-item" key={_id}>
              <form className="form-item">
                <div>
                  <img src={image} className="img" />
                </div>
                <h2 className="title">{name}</h2>
                <div className="active">
                  <div className="price">${price}</div>
                  <button
                    className="btn"
                    onClick={() => {
                      handleAddProduct(_id, name, price, quantity);
                    }}
                  >
                    ADD
                  </button>
                </div>
              </form>
            </li>
          ))}
        </ul>

        {!listCart.length ? (
          <h1 className="cart-message">Chưa có gì trong giỏ hàng cả!!!!</h1>
        ) : (
          <div className="state-cart">
            <table className="table table-hover">
              <thead>
                <tr>
                  <th scope="col">TÊN SẢN PHẨM</th>
                  <th scope="col">SỐ LƯỢNG</th>
                  <th scope="col">CÒN LẠI</th>
                  <th scope="col">TỔNG TIỀN</th>
                </tr>
              </thead>
              <tbody>
                {listCart.map(({ _id, name, count, totalPrice, quantity }) => (
                  <tr key={_id}>
                    <th scope="row">{name}</th>
                    <td>{count}</td>
                    <td>{quantity}</td>
                    <td>{totalPrice}</td>
                  </tr>
                ))}
              </tbody>
            </table>
            <button className="btn" onClick={handlePaying}>
              PAYING
            </button>
          </div>
        )}
      </div>
    </>
  );
};

export default Product;
