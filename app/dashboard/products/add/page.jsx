// "use client";
// import React, { useState } from "react";
// import styled from "styled-components";
// import toast from "react-hot-toast";
// import { addProduct } from "../../../lib/actions";
// const AddProductPage = () => {
//   const [title, setTitle] = useState("");
//   const [cat, setCat] = useState("");
//   const [price, setPrice] = useState("");
//   const [stock, setStock] = useState("");
//   const [color, setColor] = useState("");
//   const [size, setSize] = useState("");
//   const [desc, setDesc] = useState("");
//   const [errors, setErrors] = useState({});
//   const [isSubmitting, setIsSubmitting] = useState(false);

//   const handleValidation = () => {
//     const newErrors = {};
//     if (!title) newErrors.title = "Title is required";
//     if (!cat) newErrors.cat = "Category is required";
//     if (!price) newErrors.price = "Price is required";
//     if (!stock) newErrors.stock = "Stock is required";
//     if (!desc) newErrors.desc = "Description is required";

//     setErrors(newErrors);
//     return Object.keys(newErrors).length === 0;
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();

//     if (!handleValidation()) return;

//     setIsSubmitting(true);

//     try {
//       await toast.promise(
//         (async () => {
//           const res = await addProduct({
//             title,
//             cat,
//             price,
//             stock,
//             color,
//             size,
//             desc,
//           });

//           if (res?.status === 200 || res?.status === 201) {
//             // Optional: Redirect or clear form
//           } else {
//             throw new Error("Failed to add product");
//           }
//         })(),
//         {
//           loading: "Adding Product...",
//           success: "Product Added Successfully!",
//           error: (err) => err?.message || "Something went wrong!",
//         }
//       );
//     } catch (err) {
//       toast.error("Unexpected error occurred.");
//     } finally {
//       setIsSubmitting(false);
//     }
//   };

//   return (
//     <Container>
//       <FormTitle>Add New Product</FormTitle>
//       <Form onSubmit={handleSubmit}>
//         <FormGroup>
//           <Label>Title *</Label>
//           <Input value={title} onChange={(e) => setTitle(e.target.value)} />
//           {errors.title && <Error>{errors.title}</Error>}
//         </FormGroup>

//         <FormGroup>
//           <Label>Category *</Label>
//           <Select value={cat} onChange={(e) => setCat(e.target.value)}>
//             <option value="">Choose a category</option>
//             <option value="kitchen">Kitchen</option>
//             <option value="phone">Phone</option>
//             <option value="computer">Computer</option>
//           </Select>
//           {errors.cat && <Error>{errors.cat}</Error>}
//         </FormGroup>

//         <FormGroup>
//           <Label>Price *</Label>
//           <Input
//             type="number"
//             value={price}
//             onChange={(e) => setPrice(e.target.value)}
//           />
//           {errors.price && <Error>{errors.price}</Error>}
//         </FormGroup>

//         <FormGroup>
//           <Label>Stock *</Label>
//           <Input
//             type="number"
//             value={stock}
//             onChange={(e) => setStock(e.target.value)}
//           />
//           {errors.stock && <Error>{errors.stock}</Error>}
//         </FormGroup>

//         <FormGroup>
//           <Label>Color</Label>
//           <Input value={color} onChange={(e) => setColor(e.target.value)} />
//         </FormGroup>

//         <FormGroup>
//           <Label>Size</Label>
//           <Input value={size} onChange={(e) => setSize(e.target.value)} />
//         </FormGroup>

//         <FormGroup>
//           <Label>Description *</Label>
//           <Textarea
//             rows={5}
//             value={desc}
//             onChange={(e) => setDesc(e.target.value)}
//           />
//           {errors.desc && <Error>{errors.desc}</Error>}
//         </FormGroup>

//         <Button type="submit" disabled={isSubmitting}>
//           {isSubmitting ? "Submitting..." : "Submit Product"}
//         </Button>
//       </Form>
//     </Container>
//   );
// };

// export default AddProductPage;

// Styled Components
// const Container = styled.div`
//   max-width: 800px;
//   margin: auto;
//   padding: 2rem;
// `;

// const FormTitle = styled.h2`
//   margin-bottom: 2rem;
// `;

// const Form = styled.form``;

// const FormGroup = styled.div`
//   margin-bottom: 1rem;
// `;

// const Label = styled.label`
//   font-weight: bold;
// `;

// const Input = styled.input`
//   width: 100%;
//   padding: 0.75rem;
//   margin-top: 0.5rem;
// `;

// const Textarea = styled.textarea`
//   width: 100%;
//   padding: 0.75rem;
//   margin-top: 0.5rem;
// `;

// const Select = styled.select`
//   width: 100%;
//   padding: 0.75rem;
//   margin-top: 0.5rem;
// `;

// const Button = styled.button`
//   background: #0070f3;
//   color: white;
//   padding: 0.75rem 1.5rem;
//   border: none;
//   border-radius: 5px;
// `;

// const Error = styled.div`
//   color: red;
//   font-size: 0.875rem;
// `;

import React from "react";
import styles from "../../../ui/dashboard/products/addProducts/addProducts.module.css";
const AddProductPage = () => {
  return (
    <div className={styles.container}>
      <form action="" className={styles.form}>
        <input type="text" placeholder="title" name="title" required />

        <select name="cat" id="cat">
          <option value="general">Choose a Category</option>
          <option value="kitchen">Kitchen</option>
          <option value="phone">Phone</option>
          <option value="computer">Computer</option>
        </select>

        <input type="number" placeholder="price" name="price" />
        <input type="number" placeholder="stock" name="stock" />
        <input type="text" placeholder="color" name="color" />
        <input type="text" placeholder="size" name="size" />

        <textarea
          name="desc"
          id="desc"
          rows="16"
          placeholder="Description"
        ></textarea>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default AddProductPage;
