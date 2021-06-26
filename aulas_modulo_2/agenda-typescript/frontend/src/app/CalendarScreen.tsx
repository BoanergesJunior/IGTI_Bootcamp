import Box from "@material-ui/core/Box";
import Button from "@material-ui/core/Button";

import { ICalendar, IEvent } from "./backend";

import { useParams } from "react-router";
import { CalendarsView } from "./CalendarsView";
import { CalendarHeader } from "./CalendarHeader";
import { Calendar, ICalendarCell, IEventWithCalendar } from "./Calendar";
import { EventFormDialog } from "./EventFormDialog";
import { getToday } from "./dateFunctions";
import { useCallback } from "react";
import useCalendarScreenState from "./CalendarCustomHook";

export default function CalendarScreen() {
  const { month } = useParams<{ month: string }>();

  const { weeks, calendars, dispatch, refreshEvents, calendarsSelected, editingEvent } =
    useCalendarScreenState(month);

  const closeDialog = useCallback(() => {
    dispatch({ type: "closeDialog" });
  }, []);

  return (
    <Box display="flex" height="100%" alignItems="stretch">
      <Box borderRight="1px solid rgb(224, 224, 224)" width="16em" padding="8px 16px">
        <h2>Agenda React</h2>
        <Button
          variant="contained"
          color="primary"
          onClick={() => dispatch({ type: "new", payload: getToday() })}
        >
          Novo Evento
        </Button>

        <CalendarsView
          calendars={calendars}
          dispatch={dispatch}
          calendarsSelected={calendarsSelected}
        />
      </Box>

      <Box flex="1" display="flex" flexDirection="column">
        <CalendarHeader month={month} />

        <Calendar weeks={weeks} dispatch={dispatch} />

        <EventFormDialog
          event={editingEvent}
          onCancel={() => closeDialog()}
          onSave={() => {
            closeDialog();
            refreshEvents();
          }}
          calendars={calendars}
        />
      </Box>
    </Box>
  );
}

export function generateCalendar(
  date: string,
  allEvents: IEvent[],
  calendars: ICalendar[],
  calendarsSelected: boolean[]
): ICalendarCell[][] {
  const weeks: ICalendarCell[][] = [];
  const jsDate = new Date(date + "T12:00:00");
  const currentMonth = jsDate.getMonth();

  const currentDay = new Date(jsDate.valueOf());
  jsDate.setDate(1);
  const dayOfWeek = currentDay.getDay();
  currentDay.setDate(1 - dayOfWeek);

  do {
    const week: ICalendarCell[] = [];

    for (let i = 0; i < 7; i++) {
      const isoDate = `${currentDay.getFullYear()}-${(currentDay.getMonth() + 1)
        .toString()
        .padStart(2, "0")}-${currentDay.getDate().toString().padStart(2, "0")}`;

      const events: IEventWithCalendar[] = [];
      for (const event of allEvents) {
        if (event.date === isoDate) {
          const callIndex = calendars.findIndex((cal) => cal.id === event.calendarId);
          if (calendarsSelected[callIndex]) {
            events.push({ ...event, calendar: calendars[callIndex] });
          }
        }
      }

      week.push({
        dayOfMonth: currentDay.getDate(),
        date: isoDate,
        events,
      });
      currentDay.setDate(currentDay.getDate() + 1);
    }
    weeks.push(week);
  } while (currentDay.getMonth() === currentMonth);

  return weeks;
}
