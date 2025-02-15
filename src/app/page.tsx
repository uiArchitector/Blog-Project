'use client';

import { NewsCardMini } from '@/app/layouts/NewsCardMini';
import { newsData } from './newsData';
import { Fragment } from 'react';

export default function Home() {
  return (
    <Fragment>
      {newsData.map((news) => (
        <NewsCardMini
          key={news.id}
          newsId={news.id.toString()}
          image={news.image}
          title={news.title}
          description={news.description}
          category={news.category}
          url={news.url}
        />
      ))}
    </Fragment>
  );
}
