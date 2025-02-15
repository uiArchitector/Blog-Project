export interface NewsItem {
  id: number;
  image: string;
  title: string;
  description: string;
  category: 'design' | 'frontend';
  url: string;
}

export const newsData: NewsItem[] = [
  {
    id: 1,
    image: 'https://marieclaire.ua/wp-content/uploads/2017/06/ukraine.jpg',
    title: 'First News Title',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. '.repeat(10),
    category: 'design',
    url: '1-first-news-title',
  },
  {
    id: 2,
    image:
      'https://visitukraine.today/media/blog/previews/eyEnGOV72jTTrMEWRCV5ICuSsyfVQ25VmaMG7lzO.webp',
    title: 'Second News Title',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. '.repeat(10),
    category: 'frontend',
    url: '2-second-news-title',
  },{
    id: 3,
    image:
      'https://visitukraine.today/media/blog/previews/eyEnGOV72jTTrMEWRCV5ICuSsyfVQ25VmaMG7lzO.webp',
    title: 'Second News Title',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. '.repeat(10),
    category: 'frontend',
    url: '3-second-news-title',
  },{
    id: 4,
    image:
      'https://visitukraine.today/media/blog/previews/eyEnGOV72jTTrMEWRCV5ICuSsyfVQ25VmaMG7lzO.webp',
    title: 'Second News Title',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. '.repeat(10),
    category: 'frontend',
    url: '4-second-news-title',
  },
  // Добавьте еще 8 новостей аналогичным образом
];
