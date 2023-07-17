import { useRouter } from "next/router";

function DetailPage() {
  const router = useRouter();

  // console.log (router.query.newsId);

  const newsId = router.query.newsId;

  //send a request to the backebd api;
  //to fetch the news item with newsId;


  return (
    <div>
      <h1>The Detail Page</h1>
    </div>
  );
}

export default DetailPage;
