import React from "react";
import { useCreateUsersMutation } from "../../../redux/api/usersApi";
import { useFormik } from "formik";
import * as Yup from "yup";
import Input from "../../customInput/CustomInput";

interface FormValues {
  productName: string;
  quantity: number;
  price: number;
  photoUrl: string;
}

const ProductForm: React.FC = () => {
  const [createProduct] = useCreateUsersMutation();

  const formik = useFormik<FormValues>({
    initialValues: {
      productName: "",
      quantity: 0,
      price: 0,
      photoUrl: "",
    },
    validationSchema: Yup.object({
      productName: Yup.string().required(""),
      quantity: Yup.number().required("").positive(""),
      price: Yup.number().required("").positive(""),
      photoUrl: Yup.string().required("").url(""),
    }),
    onSubmit: async (values: any) => {
      try {
        await createProduct(values);
      } catch (error) {
        console.error(error);
      }
    },
  });
  return (
  <div>
    <h3>Добавит продукт</h3>
     <form>
      <Input type="text"
      label="называния продукта"
      name="productName"
      placeholder="Введите название продукта"
      width="300px"
      value={formik.values.productName}
      onChange={formik.handleChange}
      onBlur={formik.handleBlur}
      
      />
     </form>
  </div>
  );
};

export default ProductForm;
