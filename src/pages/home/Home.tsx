import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useGetProductsQuery } from "../../redux/api/productApi";
import Modal from "../../components/forms/modal/Modal";
import ProductForm from "../../components/forms/addProductFrom/AddProductForm";

interface HomeProps {}

const Home: React.FC<HomeProps> = () => {
  const [isOpen, setIsOpen] = useState(false);
  const navigate = useNavigate();
  const { data: products = [] } = useGetProductsQuery();

  const handleModal = () => {
    setIsOpen(!isOpen);
  };

  useEffect(() => {
    const isAuth = localStorage.getItem("isAuth");
    if (isAuth !== "true") {
      navigate("login");
    }
  }, [navigate]);

  const logout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("isAuth");
    navigate("/login");
  };
  return (
    <div>
      {products.map((el: any) => {
        return <div>{el.productName}</div>;
      })}
      <button onClick={logout}>Выйти</button>
      <button onClick={handleModal}>Открыть модал</button>
      <Modal isOpen={isOpen} onClose={handleModal}>
      <ProductForm handleModal={handleModal}/>
      </Modal>
    </div>
  );
};
export default Home;
