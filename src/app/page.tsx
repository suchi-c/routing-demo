import Link from "next/link";

export default function Home(){
  return (
    <>
  <h1>Hello World!</h1>
  <Link href="/blog">Blog</Link>
  <Link href="/products">Products</Link>
  <Link href="/articles/breaking-news-123?Lang=en">Read in English</Link>
  <Link href="/articles/breaking-news-123?Lang=fr">Read in French</Link>

  </>
  );
}