import {UPDATE_ALL_TABLES, UPDATE_ONE_TABLE} from '../actions/getTables';

export default function reducer(statePart = [], action = {}) {
  switch (action.type) {
    case UPDATE_ALL_TABLES:
      return {
        ...statePart,
        data: action.payload,
      };

    case UPDATE_ONE_TABLE:
      return {
        ...statePart,
        data: statePart.data.map(
          (content, i) => i === action.payload.id-1 ? action.payload
            : content
        ),
      };


    default:
      return statePart;
  }
}
