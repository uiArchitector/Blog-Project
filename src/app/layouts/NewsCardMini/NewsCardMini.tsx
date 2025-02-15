'use client';

import { Card } from 'antd';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { NewsCardMiniProps } from './NewsCardMini.types';
import { truncateDescription, capitalizeFirstLetter } from './NewsCardMini.utils';
import './NewsCardMini.css';

export const NewsCardMini = ({ 
  newsId, 
  image, 
  title, 
  description, 
  category, 
  url 
}: NewsCardMiniProps) => {
  return (
    <Card
      hoverable
      cover={
        <Link href={`/${category}/${url}`}>
          <div className='news-card-image-container'>
          <motion.img
            layoutId={`image-${url}`}
            alt={title}
            src={image}
            className="news-card-image"
            transition={{
              duration: 0.5,
              ease: [0.42, 0, 0.58, 1],
            }}
          />
          </div>
        </Link>

      }
      className="news-card"
    >
      <Link href={`/${category}/${newsId}-${url}`}>
        <Card.Meta 
          title={title} 
          description={truncateDescription(description)} 
        />
      </Link>
      <div className="news-card-category">
        <Link href={`/${category}`}>
          {capitalizeFirstLetter(category)}
        </Link>
      </div>
    </Card>
  );
};