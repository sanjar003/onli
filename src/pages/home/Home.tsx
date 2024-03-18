import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useGetProductsQuery } from "../../redux/api/productApi";

interface HomeProps {}

const Home: React.FC<HomeProps> = () => {
  const navigate = useNavigate();
  const { data: products = [] } = useGetProductsQuery();

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
  return <div>
    {products.map((el:any) => {
      return <div>{el.productName}</div>
    })}
    <button onClick={logout}>Выйти</button>
  </div>;
};
export default Home;
