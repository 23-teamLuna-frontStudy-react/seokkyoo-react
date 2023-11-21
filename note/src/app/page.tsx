import Counter from "@/components/Counter";
import Image from "next/image";
import os from "os";

export default function Home() {
  console.log("안녕!");
  console.log(os.hostname());

  return (
    <>
      <h1>여기에 홈페이지 작성</h1>
      <Counter />
      {/* <Image
        src="https://images.unsplash.com/photo-1441986300917-64674bd600d8"
        alt="shop"
        width={400}
        height={400}
      /> */}
    </>
  );
}
