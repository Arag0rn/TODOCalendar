import { holidaysState } from "./slice";


export const selectHoliday = (state: { holidays: holidaysState })=> state.holidays.holidays;

