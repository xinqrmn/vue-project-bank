import { IValues } from '@/store/types/interfaces';
import { ref } from 'vue';

export const valuesData = ref<IValues[]>([
  {
    key: '1h23i123b6hgi1y23',
    title: 'Integrity',
    text: 'We conduct ourselves with utmost honesty, transparency, and ethical behavior. We believe in doing what is right for our customers, colleagues, and stakeholders, even when faced with difficult choices.',
  },
  {
    key: '1h23i123b2hgi1y23',
    title: 'Customer Centricity',
    text: 'Our customers are at the heart of everything we do. We are dedicated to understanding their needs, providing personalized solutions, and delivering exceptional service that exceeds expectations.',
  },
  {
    key: '1h23i123bh3gi1y23',
    title: 'Collaboration',
    text: 'We foster a collaborative and inclusive work environment, where teamwork and diversity are celebrated. By leveraging the unique strengths and perspectives of our employees, we drive innovation and achieve greater success together.',
  },
  {
    key: '1h23i123bh4gi1y23',
    title: 'Innovation',
    text: 'We embrace change and constantly seek innovative solutions to meet the evolving needs of our customers. We encourage our employees to think creatively, challenge conventions, and explore new ideas to drive the future of banking.',
  },
]);
