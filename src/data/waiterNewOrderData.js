const waiterNewOrderData = [
  {
    id: 'table',
    placeHolder: 'Table',
    title: 'Select table',
    helperText: 'Please select table',
    settings: {
      size: 'small',
    },

    options: [
      {
        value: 1,
        label: 'Table 1',
      },
      {
        value: 2,
        label: 'Table 2',
      },
      {
        value: 3,
        label: 'Table 3',
      },
    ],
  },

  {
    id: 'starter',
    placeHolder: 'Starter',
    title: 'Choose starter',
    helperText: 'Please select starters',
    settings: {
      size: 'small',
    },

    options: [
      {
        value: false,
        label: 'no',
      },
      {
        value: 'water',
        label: 'water',
      },
      {
        value: 'bread',
        label: 'bread',
      },
    ],
  },

  {
    id: 'order',
    placeHolder: 'Order',
    title: 'Choose menu',
    helperText: 'Please select dishes',
    settings: {
      size: 'large',
    },

    options: [
      {
        value: 'water',
        label: 'water',
      },
      {
        value: 'bread',
        label: 'bread',
      },
    ],
  },
];

export default waiterNewOrderData;
