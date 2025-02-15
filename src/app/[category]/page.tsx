'use client';

import { NewsCardMini } from '@/app/layouts/NewsCardMini';
import { newsData } from '@/app/newsData';
import { useParams } from 'next/navigation';

export default function NewsFullPage() {
  const { category } = useParams();
  const filteredNews = newsData.filter(news => news.category === category);

  return (
    <div className="flex justify-between flex-wrap">
      {filteredNews.map((news) => (
        <NewsCardMini
          key={news.id.toString()}
          newsId={news.id.toString()}
          image={news.image}
          title={news.title}
          description={news.description}
          category={news.category}
          url={news.url}
        />
      ))}
    </div>
  );
}