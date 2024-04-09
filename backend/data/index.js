export const ROW_PER_PAGE = 50;

const _BOOKING_STATUS = {
  PENDING: "PENDING",
  COMPLETED: "COMPLETED",
  CANCELLED: "CANCELLED",
};

export const BOOKING_STATUS = Object.freeze(_BOOKING_STATUS);

const _USER_ROLE = {
  USER: "user",
  ADMIN: "admin",
};

export const USER_ROLE = Object.freeze(_USER_ROLE);

export const _PAYMENT_TYPE = {
  TOUR: "tour",
  PLANE_TICKET: "planeTicket",
  GUIDE_SERVICE: "guideService",
};

export const PAYMENT_TYPE = Object.freeze(_PAYMENT_TYPE);

const _BOOKING_QUERY_TYPE = {
  TOUR: "tour",
  GUIDE: "guide",
  PLANE_TICKET: "plane",
};

export const BOOKING_QUERY_TYPE = Object.freeze(_BOOKING_QUERY_TYPE);