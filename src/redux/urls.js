
const hostName = window.location.hostname;
const basicURL = '//' + hostName + (hostName==='localhost' ? ':3131/api': '');

export const api = {
  getTablesURL: `${basicURL}/tables`,
  getProductsURL: `${basicURL}/product`,

  // tables: 'tables',
  // products: 'product',
  // order: 'order',
  // booking: 'booking',
  // event: 'event',
  // dateStartParamKey: 'date_gte',
  // dateEndParamKey: 'date_lte',
  // notRepeatParam: 'repeat=false',
  // repeatParam: 'repeat_ne=false',
};
