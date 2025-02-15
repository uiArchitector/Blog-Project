'use client';

import { usePathname } from 'next/navigation';
import { motion } from 'framer-motion';
import { newsData } from '@/app/newsData';
import { parseNewsUrl, findNewsItem, capitalizeFirstLetter } from './NewsCardFull.utils';
import './NewsCardFull.css';

export const NewsCardFull = () => {
  const pathname = usePathname();
  const { category, fullNewsSegment } = parseNewsUrl(pathname);
  const newsItem = findNewsItem(newsData, category, fullNewsSegment);

  if (!newsItem) {
    return <div>Новость не найдена</div>;
  }

  return (
    <div className='news-card-full'>
      <motion.img
        layoutId={`image-${newsItem.url}`}
        src={newsItem.image}
        alt={newsItem.title}
        style={{ width: '100%', height: 'auto' }}
        transition={{
          duration: 0.5,
          ease: [0.42, 0, 0.58, 1],
        }}
      />
      <h1>{newsItem.title}</h1>
      <p>{newsItem.description}</p>
      <div>
        <strong>Категория: </strong>
        {capitalizeFirstLetter(newsItem.category)}
      </div>
    </div>
  );
};

