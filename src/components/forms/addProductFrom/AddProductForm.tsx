import React from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import Input from "../../customInput/CustomInput";
import { useCreateProductMutation } from "../../../redux/api/productApi";

interface FormValues {
  productName: string;
  quantity: number;
  price: number;
  photoUrl: string;
}
interface ProductFormProps {
  handleModal: () => void;
}

const ProductForm: React.FC<ProductFormProps> = ({ handleModal }) => {
  const [createProduct] = useCreateProductMutation();

  const formik = useFormik<FormValues>({
    initialValues: {
      productName: "",
      quantity: 0,
      price: 0,
      photoUrl: "",
    },
    validationSchema: Yup.object({
      productName: Yup.string().required("Обизательно поле"),
      quantity: Yup.number()
        .required("Обизательно поле")
        .positive("Должна быть положительным числом"),
      price: Yup.number()
        .required("Обизательно поле")
        .positive("Должна быть положительным числом"),
      photoUrl: Yup.string().required("Обизательно поле").url(""),
    }),
    onSubmit: async (values: any) => {
      try {
        await createProduct(values);
        handleModal();
      } catch (error) {
        console.error(error);
      }
    },
  });
  return (
    <div>
      <h3>Добавит продукт</h3>
      <form>
        <Input
          type="text"
          label="называния продукта"
          name="productName"
          placeholder="Введите название продукта"
          width="300px"
          value={formik.values.productName}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
        />
        {formik.touched.productName && formik.errors.productName && (
          <div style={{ color: "red" }}>{formik.errors.productName}</div>
        )}
        <Input
          type="number"
          label="Количество"
          name="quantity"
          placeholder="Введите kоличество"
          width="300px"
          value={formik.values.quantity}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
        />
        {formik.touched.quantity && formik.errors.quantity && (
          <div style={{ color: "red" }}>{formik.errors.quantity}</div>
        )}
        <Input
          type="number"
          label="Цена"
          name="price"
          placeholder="Введите цену"
          width="300px"
          value={formik.values.price}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
        />
        {formik.touched.price && formik.errors.price && (
          <div style={{ color: "red" }}>{formik.errors.price}</div>
        )}
        <Input
          type="text"
          label="URL изображения продукта"
          name="photoUrl"
          placeholder="Введите URL изображения продукта"
          width="300px"
          value={formik.values.photoUrl}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
        />
        {formik.touched.photoUrl && formik.errors.photoUrl && (
          <div style={{ color: "red" }}>{formik.errors.photoUrl}</div>
        )}
        <button type="submit">Отправить</button>
      </form>
    </div>
  );
};

export default ProductForm;
