import { Metadata } from "next";

export const metadata:Metadata = {
  title:{
    absolute:"Blog",
  },
};

export default async function Blog(){
  await new Promise((resolve) => {
     setTimeout(() => {
    resolve("intentional delay");
   }, 1000);
  });
    return<h1>My Blog</h1>;
  }