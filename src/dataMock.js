import lamp from './images/lamp-icon.svg';
import toy from './images/toy-icon.svg';
import laptop from './images/laptop-icon.svg';

export const dataMock = [
  { 
    isCurrentTariff: true,
    color: "#FFB64F",
    textColor: '#000',
    title: "Beginner",
    subtitle: "Для небольшого исследования",
    image: lamp,
    discountPrice: '799',
    totalCost: '1200',
    mounthlyPrice: '150',
    tariffBenefits: ['Белимитная история запросов', 'Безопасная сделка', 'Поддержка 24/7']
  },
  {
    isCurrentTariff: false,
    color:"#7CE3E1",
    textColor: '#000',
    title: "Pro",
    subtitle: "Для HR и фрилансеров",
    image:toy,
    discountPrice: '1299',
    totalCost: '2600',
    mounthlyPrice: '279',
    tariffBenefits: ['Все пункты тарифа Beginner','Экспорт истории','Рекомендации по приоритетам']
  },
  {
    isCurrentTariff: false,
    color: "#000",
    textColor: '#FFF',
    title: "Business",
    subtitle: "Для корпоративных клиентов",
    image:laptop,
    discountPrice: '2379',
    totalCost: '3700',
    mounthlyPrice: false,
    tariffBenefits:  ['Все пункты тарифа Pro','Безлимитное количество запросов','Приоритетная поддержка']
  },
];
