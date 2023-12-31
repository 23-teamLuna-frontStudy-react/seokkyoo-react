import { getProducts } from "@/services/products";
import Link from "next/link";
import styles from "./page.module.css";
import MeowArticle from "@/components/MeowArticle";
import Image from "next/image";
import clothesImage from "../../../public/images/clothes.jpeg";
// const products = ["shirt", "pants", "skirt", "shoes"];

export const revalidate = 3;

export default async function ProductsPage() {
  const products = await getProducts();
  // const res = await fetch("https://meowfacts.herokuapp.com", {
  //   // next: { revalidate: 0 },
  //   cache: "no-store",
  // });
  // const data = await res.json();
  // const factText = data.data[0];

  return (
    <>
      <h1>제품 소개 페이지!</h1>
      <Image src={clothesImage} alt="Clothes" priority />
      <ul>
        {products.map((product, index) => (
          <li key={index}>
            <Link href={`products/${product.id}`}>{product.name}</Link>
          </li>
        ))}
      </ul>
      {/* <article className={styles.article}>{factText}</article> */}
      <MeowArticle />
    </>
  );
}
