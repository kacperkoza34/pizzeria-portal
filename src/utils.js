import {statuses} from './data/orderStatuses';

export const setNewStatus = (currentStatus) =>{
  const orderIndex = statuses.indexOf(currentStatus);
  const newIndex =  orderIndex === statuses.length-1 ? 0 : orderIndex+1;
  return statuses[newIndex];
};
