import Cards from "../ui/Cards";

interface NewsItem {
  id: string;
  byline: string;
  date: string;
  externalUrl: string;
  title?: string;
  content?: string;
  image: {
    url: string;
  };
  articleTitle: {
    plainText: string;
  };
}

interface Edge {
  node: NewsItem;
}
async function getFromRoute(): Promise<NewsItem[]> {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_BASE_URL}/api/moviesData`,
    {
      cache: "no-store",
    }
  );

  if (!res.ok) throw new Error("Failed to fetch from route");
  const json = await res.json();
  const edges: Edge[] = json?.data?.news?.edges || [];
  const newsItems = edges.map((edge) => edge.node);
  return newsItems;
}

function extractDayAndTime(isoString: string): string {
  const date = new Date(isoString);

  const days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
  const day = days[date.getUTCDay()];

  const hours = date.getUTCHours().toString().padStart(2, "0");
  const minutes = date.getUTCMinutes().toString().padStart(2, "0");

  return `${day} ${hours}:${minutes}`;
}

export default async function Feeds() {
  const datas = await getFromRoute();
  console.log(datas);
  return (
    <div className='flex flex-col w-full h-[100vh] overflow-y-auto scrollbar-hide'>
       <div className='flex justify-center mx-5 mt-5 items-center font-bold text-2xl tracking-wide'>
          <>Latest News</>
        </div>
      <div className='flex flex-col gap-8 mt-5 px-5'>
        {datas.map((data) => (
          <Cards
            key={data.id}
            id={data.id}
            imgUrl={data.image.url}
            author_name={data.byline}
            title={data.articleTitle.plainText}
            time={extractDayAndTime(data.date)}
            extUrl={data.externalUrl}
          />
        ))}
      </div>
    </div>
  );
}
