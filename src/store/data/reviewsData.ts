import { IReviews } from '@/store/types/interfaces';
import { ref } from 'vue';

export const reviewsData = ref<IReviews[]>([
  {
    key: '1b41hyb412y4hvb1235hb',
    text: 'YourBank has been my trusted financial partner for years. Their personalized service and innovative digital banking solutions have made managing my finances a breeze.',
    author: 'Sara T',
    category: 'individuals',
  },
  {
    key: 'hb25jk34b53gjv45h3gv4',
    text: 'I recently started my own business, and YourBank has been instrumental in helping me set up my business accounts and secure the financing I needed. Their expert guidance and tailored solutions have been invaluable.',
    author: 'John D',
    category: 'businesses',
  },
  {
    key: 'h5v4gh7vh4vkhgv643k6v',
    text: 'I love the convenience of YourBank’s mobile banking app. It allows me to stay on top of my finances and make transactions on the go. The app is user-friendly and secure, giving me peace of mind.',
    author: 'Emily G',
    category: 'individuals',
  },
  {
    key: '31n534hb65jh6b345j6b7',
    text: 'YourBank offers the best customer service I have experienced in the banking industry. Their team is always available to assist and provide expert advice, which is crucial for my business operations.',
    author: 'Michael W',
    category: 'businesses',
  },
  {
    key: 'b5ljl674b5hj7b6ljhb35',
    text: 'Switching to YourBank was the best decision I made for my personal finance management. Their online tools and resources are incredibly helpful.',
    author: 'Jane K',
    category: 'individuals',
  },
  {
    key: 'c8g674b8h7b6ljh35',
    text: 'YourBank’s flexible business loans helped me expand my company’s operations without stress. The application process was simple and straightforward.',
    author: 'David L',
    category: 'businesses',
  },
  {
    key: 'd9j4l674b5hj7b6jhb36',
    text: 'Their innovative approach to banking is refreshing. The online platform is intuitive and easy to navigate, making it ideal for busy professionals like me.',
    author: 'Linda F',
    category: 'individuals',
  },
  {
    key: 'e4k1l674b8hj7b6jhb35',
    text: 'I appreciate the personalized financial advice I receive from YourBank. It has been critical in my journey to grow my small business.',
    author: 'Susan P',
    category: 'businesses',
  },
  {
    key: 'f2j1l674b5hj8b6ljhb39',
    text: 'Their investment advice has helped me grow my wealth significantly over the years. I highly recommend YourBank for personal and business banking.',
    author: 'Robert B',
    category: 'individuals',
  },
]);
