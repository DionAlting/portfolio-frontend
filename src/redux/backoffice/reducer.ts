import {
  CANCEL_GUEST_SUCCESS,
  CHECK_OUT_GUEST_SUCCESS,
  DECREMENT_SUCCESS,
  FETCH_RESERVATION_BY_DATE_SUCCESS,
  INCREMENT_SUCCESS,
} from "../actionTypes";
import { BackOfficeAction, BackOfficeState } from "./types";

const initialState: BackOfficeState = {
  reservationsByDate: [],
};

export default function backOfficeReducer(
  state = initialState,
  action: BackOfficeAction
): BackOfficeState {
  switch (action.type) {
    case FETCH_RESERVATION_BY_DATE_SUCCESS:
      const { reservationDates } = action.payload;
      return {
        ...state,
        reservationsByDate: [...reservationDates],
      };

    case CHECK_OUT_GUEST_SUCCESS:
      const checkedOutReservation = state.reservationsByDate.map((date) => {
        if (date.id !== action.payload.dateId) {
          return date;
        } else {
          return {
            ...date,
            reservations: date.reservations.filter(
              (res) => res.id !== action.payload.reservationId
            ),
          };
        }
      });

      return {
        ...state,
        reservationsByDate: checkedOutReservation,
      };

    case CANCEL_GUEST_SUCCESS:
      const canceledReservation = state.reservationsByDate.map((date) => {
        if (date.id !== action.payload.dateId) {
          return date;
        } else {
          return {
            ...date,
            reservations: date.reservations.filter(
              (res) => res.id !== action.payload.reservationId
            ),
          };
        }
      });

      return {
        ...state,
        reservationsByDate: canceledReservation,
      };

    case INCREMENT_SUCCESS:
      const incrementedReservation = state.reservationsByDate.map((date) => {
        if (date.id !== action.payload.dateId) {
          return date;
        } else {
          return {
            ...date,
            reservations: date.reservations.map((res) => {
              if (res.id !== action.payload.reservationId) {
                return res;
              } else {
                return {
                  ...res,
                  coins: res.coins + 1,
                };
              }
            }),
          };
        }
      });

      return {
        ...state,
        reservationsByDate: incrementedReservation,
      };

    case DECREMENT_SUCCESS:
      const decrementedReservation = state.reservationsByDate.map((date) => {
        if (date.id !== action.payload.dateId) {
          return date;
        } else {
          return {
            ...date,
            reservations: date.reservations.map((res) => {
              if (res.id !== action.payload.reservationId) {
                return res;
              } else {
                return {
                  ...res,
                  coins: res.coins - 1,
                };
              }
            }),
          };
        }
      });

      return {
        ...state,
        reservationsByDate: decrementedReservation,
      };

    default:
      return state;
  }
}
