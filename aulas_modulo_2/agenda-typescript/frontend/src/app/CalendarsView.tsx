import Box from '@material-ui/core/Box';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';

import { ICalendar } from './backend';

interface ICalendarsViewProps {
    calendars: ICalendar[],
    toggleCalendar: (i: number) => void,
    calendarsSelected: boolean[]
}

export default function CalendarsView(props: ICalendarsViewProps) {

    const { calendars, calendarsSelected, toggleCalendar } = props

    return (
        <Box marginTop="64px">
            <h3>Agendas</h3>
            {calendars.map((calendar, i) => (
                <div key={calendar.id}>
                    <FormControlLabel 
                        control={<Checkbox 
                            style={{color: calendar.color}}
                            checked={calendarsSelected[i]} 
                            onChange={() => toggleCalendar(i)}/>
                        } 
                    label={calendar.name}/>
                </div>
            ))}
        </Box>
    )
}

