import React from "react";
import styles from "../../../ui/dashboard/users/addUsers/addUsers.module.css";
const AddUserPage = () => {
  return (
    <div className={styles.container}>
      <form action="" className={styles.form}>
        {/* <input type="text" placeholder="title" name="title" required /> */}
        <input type="text" placeholder="username" name="price" />
        <input type="email" placeholder="email" name="stock" />
        <input type="password" placeholder="password" name="color" />
        <input type="phone" placeholder="phone" name="size" />
        <select name="isAdmin" id="isAdmin">
          <option value={false} selected>Is Admin?</option>
          <option value={true}>YES</option>
          <option value={false}>NO</option>
        </select>
         <select name="isActive" id="isActive">
          <option value={true} selected>Is Active?</option>
          <option value={true}>YES</option>
          <option value={false}>NO</option>
        </select>

        <textarea
          name="address"
          id="address"
          rows="16"
          placeholder="Address"
        ></textarea>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}
export default AddUserPage;
