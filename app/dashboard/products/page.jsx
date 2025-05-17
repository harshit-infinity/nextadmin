import React from "react";
import styles from "../../dashboard/products/product.module.css";
import Search from "../../ui/dashboard/search/search";
import Link from "next/link";
import Image from "next/image";
import Pagination from "../../ui/dashboard/pagination/pagination";

const ProductsPage = () => {
  return (
    <div className={styles.container}>
      <div className={styles.top}>
        <Search placeholder="Search for a Product..." />
        <Link href="/dashboard/products/add">
          <button className={styles.addButton}>Add New</button>
        </Link>
      </div>
      <table className={styles.table}>
        <thead>
          <tr>
            <td>Title</td>
            <td>Description</td>
            <td>Price</td>
            <td>Created At</td>
            <td>Stock</td>
            <td>Action</td>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>
              <div className={styles.product}>
                <Image
                  src="/noavatar.png"
                  alt=""
                  width={40}
                  height={40}
                  className={styles.userProduct}
                />
                IPhone
              </div>
            </td>
            <td>
              <Link href="https://www.apple.com/iphone/" target="_blank">
                Go to Apple iPhone
              </Link>
            </td>
            <td>950$</td>
            <td>13.09.2023</td>
            <td>In-Stock</td>
            <td>
              <div className={styles.buttons}>
                <Link href="/">
                  <button className={`${styles.button} ${styles.view}`}>
                    View
                  </button>
                </Link>
                <Link href="/">
                  <button className={`${styles.button} ${styles.delete}`}>
                    Delete
                  </button>
                </Link>
              </div>
            </td>
          </tr>
          <tr>
            <td>
              <div className={styles.product}>
                <Image
                  src="/noavatar.png"
                  alt=""
                  width={40}
                  height={40}
                  className={styles.userProduct}
                />
                IPad
              </div>
            </td>
            <td>
              <Link href="https://www.apple.com/in/store" target="_blank">
                Go to Apple Store
              </Link>
            </td>
            <td>1200$</td>
            <td>13.09.2023</td>
            <td>Out-of-Stock</td>
            <td>
              <div className={styles.buttons}>
                <Link href="/dashboard/product/test">
                  <button className={`${styles.button} ${styles.view}`}>
                    View
                  </button>
                </Link>
                <Link href="/">
                  <button className={`${styles.button} ${styles.delete}`}>
                    Delete
                  </button>
                </Link>
              </div>
            </td>
          </tr>
        </tbody>
      </table>
      <Pagination />
    </div>
  );
};

export default ProductsPage;
