import Link from "next/link";

export default function NewsArticle({
  params,
  searchParams,
}: {
  params: { articleId: string };
  searchParams: { lang?: "en" | "es" | "fr" };
}) {
  // Extract articleId from params
  const { articleId } = params;

  // Get the language parameter, default to "en" if not provided
  const lang = searchParams.lang || "en";

  return (
    <div>
      <h1>News article {articleId}</h1>
      <p>Reading in {lang}</p>

      <div>
        <Link href={`/articles/${articleId}?lang=en`}>English</Link>
        <Link href={`/articles/${articleId}?lang=es`}>Spanish</Link>
        <Link href={`/articles/${articleId}?lang=fr`}>French</Link>
      </div>
    </div>
  );
}
