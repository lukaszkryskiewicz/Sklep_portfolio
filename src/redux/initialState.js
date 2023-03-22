const initialState = {
  categories: [
    { id: 'bed', name: 'Bed' },
    { id: 'chair', name: 'Chair' },
    { id: 'sofa', name: 'Sofa' },
    { id: 'table', name: 'Table' },
    { id: 'dining', name: 'Dining' },
  ],
  products: [
    {
      id: 'aenean-ru-bristique-1',
      name: 'Aenean Ru Bristique 1',
      category: 'bed',
      price: 30,
      oldPrice: 50,
      stars: 2,
      promo: 'sale',
      newFurniture: true,
      favourite: true,
      compare: false,
    },
    {
      id: 'aenean-ru-bristique-2',
      name: 'Aenean Ru Bristique 2',
      category: 'bed',
      price: 35,
      oldPrice: 25,
      stars: 2,
      promo: 'sale',
      newFurniture: true,
      favourite: false,
      compare: false,
    },
    {
      id: 'aenean-ru-bristique-3',
      name: 'Aenean Ru Bristique 3',
      category: 'bed',
      price: 20,
      oldPrice: 15,
      stars: 2,
      promo: 'sale',
      newFurniture: true,
      favourite: true,
      compare: false,
    },
    {
      id: 'aenean-ru-bristique-4',
      name: 'Aenean Ru Bristique 4',
      category: 'bed',
      price: 30,
      stars: 2,
      promo: 'sale',
      newFurniture: true,
      favourite: false,
      compare: false,
    },
    {
      id: 'aenean-ru-bristique-5',
      name: 'Aenean Ru Bristique 5',
      category: 'bed',
      price: 30,
      stars: 2,
      promo: 'sale',
      newFurniture: true,
      favourite: false,
      compare: false,
    },
    {
      id: 'aenean-ru-bristique-6',
      name: 'Aenean Ru Bristique 6',
      category: 'bed',
      price: 30,
      stars: 2,
      promo: 'sale',
      newFurniture: true,
      favourite: false,
      compare: false,
    },
    {
      id: 'aenean-ru-bristique-7',
      name: 'Aenean Ru Bristique 7',
      category: 'bed',
      price: 30,
      stars: 2,
      promo: 'sale',
      newFurniture: true,
      favourite: false,
      compare: false,
    },
    {
      id: 'aenean-ru-bristique-8',
      name: 'Aenean Ru Bristique 8',
      category: 'bed',
      price: 30,
      stars: 2,
      promo: 'sale',
      newFurniture: true,
      favourite: false,
      compare: false,
    },
    {
      id: 'aenean-ru-bristique-9',
      name: 'Aenean Ru Bristique 9',
      category: 'bed',
      price: 30,
      stars: 2,
      promo: 'sale',
      newFurniture: true,
      favourite: false,
      compare: false,
    },
    {
      id: 'aenean-ru-bristique-10',
      name: 'Aenean Ru Bristique 10',
      category: 'bed',
      price: 30,
      stars: 2,
      promo: 'sale',
      newFurniture: true,
      favourite: false,
      compare: false,
    },
    {
      id: 'aenean-ru-bristique-11',
      name: 'Aenean Ru Bristique 11',
      category: 'bed',
      price: 30,
      stars: 2,
      promo: 'sale',
      newFurniture: true,
      favourite: false,
      compare: false,
    },
    {
      id: 'aenean-ru-bristique-12',
      name: 'Aenean Ru Bristique 12',
      category: 'bed',
      price: 30,
      stars: 2,
      promo: 'sale',
      newFurniture: true,
      favourite: false,
      compare: false,
    },
    {
      id: 'aenean-ru-bristique-13',
      name: 'Aenean Ru Bristique 13',
      category: 'chair',
      price: 30,
      stars: 2,
      promo: 'sale',
      newFurniture: true,
      favourite: false,
      compare: false,
    },
    {
      id: 'aenean-ru-bristique-14',
      name: 'Aenean Ru Bristique 14',
      category: 'chair',
      price: 30,
      stars: 2,
      promo: 'sale',
      newFurniture: true,
      favourite: false,
      compare: false,
    },
    {
      id: 'aenean-ru-bristique-15',
      name: 'Aenean Ru Bristique 15',
      category: 'chair',
      price: 30,
      stars: 2,
      promo: 'sale',
      newFurniture: true,
      favourite: false,
      compare: false,
    },
    {
      id: 'aenean-ru-bristique-16',
      name: 'Aenean Ru Bristique 16',
      category: 'chair',
      price: 30,
      stars: 2,
      promo: 'sale',
      newFurniture: true,
      favourite: false,
      compare: false,
    },
    {
      id: 'aenean-ru-bristique-17',
      name: 'Aenean Ru Bristique 17',
      category: 'chair',
      price: 30,
      stars: 2,
      promo: 'sale',
      newFurniture: true,
      favourite: false,
      compare: false,
    },
    {
      id: 'aenean-ru-bristique-18',
      name: 'Aenean Ru Bristique 18',
      category: 'chair',
      price: 30,
      stars: 2,
      promo: 'sale',
      newFurniture: true,
      favourite: false,
      compare: false,
    },
    {
      id: 'aenean-ru-bristique-19',
      name: 'Aenean Ru Bristique 19',
      category: 'chair',
      price: 30,
      stars: 2,
      promo: 'sale',
      newFurniture: true,
      favourite: false,
      compare: false,
    },
    {
      id: 'aenean-ru-bristique-20',
      name: 'Aenean Ru Bristique 20',
      category: 'chair',
      price: 30,
      stars: 2,
      promo: 'sale',
      newFurniture: true,
      favourite: false,
      compare: false,
    },
    {
      id: 'aenean-ru-bristique-21',
      name: 'Aenean Ru Bristique 21',
      category: 'chair',
      price: 30,
      stars: 2,
      promo: 'sale',
      newFurniture: true,
      favourite: false,
      compare: false,
    },
    {
      id: 'aenean-ru-bristique-22',
      name: 'Aenean Ru Bristique 22',
      category: 'chair',
      price: 30,
      stars: 2,
      promo: 'sale',
      newFurniture: true,
      favourite: false,
      compare: false,
    },
    {
      id: 'aenean-ru-bristique-23',
      name: 'Aenean Ru Bristique 23',
      category: 'chair',
      price: 30,
      stars: 2,
      promo: 'sale',
      newFurniture: true,
      favourite: false,
      compare: false,
    },
    {
      id: 'aenean-ru-bristique-24',
      name: 'Aenean Ru Bristique 24',
      category: 'chair',
      price: 30,
      stars: 2,
      promo: 'sale',
      newFurniture: true,
    },
    {
      id: 'aenean-ru-bristique-25',
      name: 'Aenean Ru Bristique 25',
      category: 'sofa',
      price: 30,
      stars: 2,
      promo: 'sale',
      newFurniture: true,
    },
    {
      id: 'aenean-ru-bristique-26',
      name: 'Aenean Ru Bristique 26',
      category: 'sofa',
      price: 30,
      stars: 2,
      promo: 'sale',
      newFurniture: true,
    },
    {
      id: 'aenean-ru-bristique-27',
      name: 'Aenean Ru Bristique 27',
      category: 'sofa',
      price: 30,
      stars: 2,
      promo: 'sale',
      newFurniture: true,
    },
    {
      id: 'aenean-ru-bristique-28',
      name: 'Aenean Ru Bristique 28',
      category: 'sofa',
      price: 30,
      stars: 2,
      promo: 'sale',
      newFurniture: true,
    },
    {
      id: 'aenean-ru-bristique-29',
      name: 'Aenean Ru Bristique 29',
      category: 'sofa',
      price: 30,
      stars: 2,
      promo: 'sale',
      newFurniture: true,
    },
    {
      id: 'aenean-ru-bristique-30',
      name: 'Aenean Ru Bristique 30',
      category: 'sofa',
      price: 30,
      stars: 2,
      promo: 'sale',
      newFurniture: true,
    },
    {
      id: 'aenean-ru-bristique-31',
      name: 'Aenean Ru Bristique 31',
      category: 'sofa',
      price: 30,
      stars: 2,
      promo: 'sale',
      newFurniture: true,
    },
    {
      id: 'aenean-ru-bristique-32',
      name: 'Aenean Ru Bristique 32',
      category: 'sofa',
      price: 30,
      stars: 2,
      promo: 'sale',
      newFurniture: true,
    },
    {
      id: 'aenean-ru-bristique-33',
      name: 'Aenean Ru Bristique 33',
      category: 'sofa',
      price: 30,
      stars: 2,
      promo: 'sale',
      newFurniture: true,
    },
    {
      id: 'aenean-ru-bristique-34',
      name: 'Aenean Ru Bristique 34',
      category: 'sofa',
      price: 30,
      stars: 2,
      promo: 'sale',
      newFurniture: true,
    },
    {
      id: 'aenean-ru-bristique-35',
      name: 'Aenean Ru Bristique 35',
      category: 'sofa',
      price: 30,
      stars: 2,
      promo: 'sale',
      newFurniture: true,
    },
    {
      id: 'aenean-ru-bristique-36',
      name: 'Aenean Ru Bristique 36',
      category: 'sofa',
      price: 30,
      stars: 2,
      promo: 'sale',
      newFurniture: true,
    },
    {
      id: 'aenean-ru-bristique-37',
      name: 'Aenean Ru Bristique 37',
      category: 'table',
      price: 30,
      stars: 2,
      promo: 'sale',
      newFurniture: true,
    },
    {
      id: 'aenean-ru-bristique-38',
      name: 'Aenean Ru Bristique 38',
      category: 'table',
      price: 30,
      stars: 2,
      promo: 'sale',
      newFurniture: true,
    },
    {
      id: 'aenean-ru-bristique-39',
      name: 'Aenean Ru Bristique 39',
      category: 'table',
      price: 30,
      stars: 2,
      promo: 'sale',
      newFurniture: true,
    },
    {
      id: 'aenean-ru-bristique-40',
      name: 'Aenean Ru Bristique 40',
      category: 'table',
      price: 30,
      stars: 2,
      promo: 'sale',
      newFurniture: true,
    },
    {
      id: 'aenean-ru-bristique-41',
      name: 'Aenean Ru Bristique 41',
      category: 'table',
      price: 30,
      stars: 2,
      promo: 'sale',
      newFurniture: true,
    },
    {
      id: 'aenean-ru-bristique-42',
      name: 'Aenean Ru Bristique 42',
      category: 'table',
      price: 30,
      stars: 2,
      promo: 'sale',
      newFurniture: true,
    },
    {
      id: 'aenean-ru-bristique-43',
      name: 'Aenean Ru Bristique 43',
      category: 'table',
      price: 30,
      stars: 2,
      promo: 'sale',
      newFurniture: true,
    },
    {
      id: 'aenean-ru-bristique-44',
      name: 'Aenean Ru Bristique 44',
      category: 'table',
      price: 30,
      stars: 2,
      promo: 'sale',
      newFurniture: true,
    },
    {
      id: 'aenean-ru-bristique-45',
      name: 'Aenean Ru Bristique 45',
      category: 'table',
      price: 30,
      stars: 2,
      promo: 'sale',
      newFurniture: true,
    },
    {
      id: 'aenean-ru-bristique-46',
      name: 'Aenean Ru Bristique 46',
      category: 'table',
      price: 30,
      stars: 2,
      promo: 'sale',
      newFurniture: true,
    },
    {
      id: 'aenean-ru-bristique-47',
      name: 'Aenean Ru Bristique 47',
      category: 'table',
      price: 30,
      stars: 2,
      promo: 'sale',
      newFurniture: true,
    },
    {
      id: 'aenean-ru-bristique-48',
      name: 'Aenean Ru Bristique 48',
      category: 'table',
      price: 30,
      stars: 2,
      promo: 'sale',
      newFurniture: true,
    },
    {
      id: 'aenean-ru-bristique-49',
      name: 'Aenean Ru Bristique 49',
      category: 'dining',
      price: 30,
      stars: 2,
      promo: 'sale',
      newFurniture: true,
    },
    {
      id: 'aenean-ru-bristique-50',
      name: 'Aenean Ru Bristique 50',
      category: 'dining',
      price: 30,
      stars: 2,
      promo: 'sale',
      newFurniture: true,
    },
    {
      id: 'aenean-ru-bristique-51',
      name: 'Aenean Ru Bristique 51',
      category: 'dining',
      price: 30,
      stars: 2,
      promo: 'sale',
      newFurniture: true,
    },
    {
      id: 'aenean-ru-bristique-52',
      name: 'Aenean Ru Bristique 52',
      category: 'dining',
      price: 30,
      stars: 2,
      promo: 'sale',
      newFurniture: true,
    },
    {
      id: 'aenean-ru-bristique-53',
      name: 'Aenean Ru Bristique 53',
      category: 'dining',
      price: 30,
      stars: 2,
      promo: 'sale',
      newFurniture: true,
    },
    {
      id: 'aenean-ru-bristique-54',
      name: 'Aenean Ru Bristique 54',
      category: 'dining',
      price: 30,
      stars: 2,
      promo: 'sale',
      newFurniture: true,
    },
    {
      id: 'aenean-ru-bristique-55',
      name: 'Aenean Ru Bristique 55',
      category: 'dining',
      price: 30,
      stars: 2,
      promo: 'sale',
      newFurniture: true,
    },
    {
      id: 'aenean-ru-bristique-56',
      name: 'Aenean Ru Bristique 56',
      category: 'dining',
      price: 30,
      stars: 2,
      promo: 'sale',
      newFurniture: true,
    },
    {
      id: 'aenean-ru-bristique-57',
      name: 'Aenean Ru Bristique 57',
      category: 'dining',
      price: 30,
      stars: 2,
      promo: 'sale',
      newFurniture: true,
    },
    {
      id: 'aenean-ru-bristique-58',
      name: 'Aenean Ru Bristique 58',
      category: 'dining',
      price: 30,
      stars: 2,
      promo: 'sale',
      newFurniture: true,
    },
    {
      id: 'aenean-ru-bristique-59',
      name: 'Aenean Ru Bristique 59',
      category: 'dining',
      price: 30,
      stars: 2,
      promo: 'sale',
      newFurniture: true,
    },
    {
      id: 'aenean-ru-bristique-60',
      name: 'Aenean Ru Bristique 60',
      category: 'dining',
      price: 30,
      stars: 2,
      promo: 'sale',
      newFurniture: true,
      favourite: false,
      compare: false,
    },
  ],
  cart: {
    products: [],
  },
  viewportMode: '',
  feedbacks: [
    {
      id: 0,
      author: 'Luctus Lacus',
      status: 'Client',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc semper ultrices dolor, quis commodo sem porttitor in. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.',
    },
    {
      id: 1,
      author: 'Donec Ultrices',
      status: 'Supplier',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc semper ultrices dolor, quis commodo sem porttitor in. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.',
    },
    {
      id: 2,
      author: 'Praesent Pulvinar',
      status: 'Designer',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc semper ultrices dolor, quis commodo sem porttitor in. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.',
    },
  ],
  blogPosts: [
    {
      id: 0,
      date: '01 MAR 2023',
      title: 'Lorem ipsum',
      text:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc semper ultrices dolor, quis commodo sem porttitor in. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.',
    },
    {
      id: 1,
      date: '02 MAR 2023',
      title: 'Lorem ipsum',
      text:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc semper ultrices dolor. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.',
    },
    {
      id: 2,
      date: '03 MAR 2023',
      title: 'Lorem ipsum',
      text:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc semper ultrices dolor, quis commodo sem porttitor in.',
    },
    {
      id: 3,
      date: '02 MAR 2023',
      title: 'Lorem ipsum',
      text:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc semper ultrices dolor. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.',
    },
    {
      id: 4,
      date: '03 MAR 2023',
      title: 'Lorem ipsum',
      text:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc semper ultrices dolor, quis commodo sem porttitor in.',
    },
  ],
};

export default initialState;
