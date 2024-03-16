import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useGetProductsQuery } from "../../redux/api/productApi";

interface HomeProps {}

const Home: React.FC<HomeProps> = () => {
  const navigate = useNavigate();
  const { data } = useGetProductsQuery;

  console.log(data);

  useEffect(() => {
    const isAuth = localStorage.getItem("isAuth");
    if (isAuth !== "true") {
      navigate("login");
    }
  }, [navigate]);
  return <div>Home</div>;
};
export default Home;
  