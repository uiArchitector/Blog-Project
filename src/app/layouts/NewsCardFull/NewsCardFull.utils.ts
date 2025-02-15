import { NewsCardFullProps } from './NewsCardFull.type';

export const parseNewsUrl = (pathname: string) => {
  const segments = pathname.split('/');
  const category = segments[1];
  const fullNewsSegment = segments[2];
  
  console.log('Parsing URL:', { segments, category, fullNewsSegment });
  
  return { 
    category, 
    fullNewsSegment
  };
};

export const findNewsItem = (
  newsData: NewsCardFullProps[], 
  category: string, 
  fullNewsSegment: string
) => {
  console.log('Finding news with:', { category, fullNewsSegment });
  console.log('Available news:', newsData);

  const newsItem = newsData.find((news) => {
    const match = 
      news.category === category && 
      news.url === fullNewsSegment;
    
    console.log('Checking news:', {
      news,
      matches: {
        category: news.category === category,
        url: news.url === fullNewsSegment
      }
    });
    
    return match;
  });

  console.log('Found news:', newsItem);
  
  return newsItem;
};

export const capitalizeFirstLetter = (str: string): string => {
  return str.charAt(0).toUpperCase() + str.slice(1);
};
