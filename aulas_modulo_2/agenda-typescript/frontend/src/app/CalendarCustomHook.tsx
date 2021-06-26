import { useEffect, useMemo, useReducer } from "react";
import { getCalendarsEndpoint, getEventEndpoint } from "./backend";
import { generateCalendar } from "./CalendarScreen";
import { reducer } from "./calendarScreenReducer";

export default function useCalendarScreenState(month: string) {
  const [state, dispatch] = useReducer(reducer, {
    calendars: [],
    calendarsSelected: [],
    events: [],
    editingEvent: null,
  });

  const { events, calendars, calendarsSelected, editingEvent } = state;

  const weeks = useMemo(() => {
    return generateCalendar(month + "-01", events, calendars, calendarsSelected);
  }, [month, events, calendars, calendarsSelected]);

  const firstDate = weeks[0][0].date;
  const lastDate = weeks[weeks.length - 1][6].date;

  useEffect(() => {
    Promise.all([getCalendarsEndpoint(), getEventEndpoint(firstDate, lastDate)]).then(
      ([calendars, events]) => {
        dispatch({ type: "load", payload: { events, calendars } });
      }
    );
  }, [firstDate, lastDate]);

  function refreshEvents() {
    getEventEndpoint(firstDate, lastDate).then((events) => {
      dispatch({ type: "load", payload: { events } });
    });
  }

  return {
    weeks,
    calendars,
    dispatch,
    refreshEvents,
    calendarsSelected,
    editingEvent,
  };
}
