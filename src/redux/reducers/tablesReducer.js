import {UPDATE_ALL_TABLES,
        UPDATE_ONE_TABLE,
        TABLES_LOADING,
        STOP_LOADING,
        DISPLAY_ERROR
      } from '../actions/getTables';

export const getAll = ({tables}) => tables.data;
export const getLoadingState = ({tables}) => tables.loading;

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

    case TABLES_LOADING:
      return {
        ...statePart,
        loading: {
          active: true,
          error: false,
        },
      };

    case STOP_LOADING:
      return {
        ...statePart,
        loading: {
          active: false,
          error: false,
        },
      };

    case DISPLAY_ERROR:
      return {
        ...statePart,
        loading: {
          active: false,
          error: action.payload,
        },
      };
    default:
      return statePart;
  }
}
