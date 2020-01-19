export const menu = [
  {
    id: 'home',
    menuProps: [
      { name: 'Home', link: '/'},
    ],
  },
  {
    id: 'tables',
    menuProps: [
      { name: 'Tables', link: '/tables'},
      { name: 'Booked tables', link: '/tables/booking/:id'},
      { name: 'Book new table', link: '/tables/booking/new'},
      { name: 'Events', link: '/tables/events/:id'},
      { name: 'Add event', link: '/tables/events/new'},
    ],
  },
  {
    id: 'waiter',
    menuProps: [
      { name: 'Waiter', link: '/waiter' },
      { name: 'Add new order', link: '/waiter/order/new' },
      { name: 'See new orders', link: '/waiter/order/:id' },
    ],
  },
  {
    id: 'kitchen',
    menuProps: [
      { name: 'Kitchen', link: '/kitchen'},
    ],
  },
  {
    id: 'login',
    menuProps: [
      { name: 'Login', link: '/login'},
    ],
  },
];
