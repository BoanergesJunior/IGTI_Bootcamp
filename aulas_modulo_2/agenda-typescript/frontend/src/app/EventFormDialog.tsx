import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import InputLabel from '@material-ui/core/InputLabel';
import { ICalendar } from './backend';
import { useEffect, useState } from 'react';

export interface IEditingEvent {
    id?: number
    date: string
    time?: string
    desc: string
    calendarId: number
}

interface IEventFormDialogProps {
    event: IEditingEvent | null,
    calendars: ICalendar[],
    onClose: () => void
}

export default function EventFormDialog(props: IEventFormDialogProps) {
    const [event, setEvent] = useState<IEditingEvent | null>(props.event)

    useEffect(() => {
        setEvent(props.event)
    }, [props.event])

    return (
    <div>
      
      <Dialog open={!!event} onClose={props.onClose} aria-labelledby="form-dialog-title">
        <DialogTitle id="form-dialog-title">Criar evento</DialogTitle>
        <DialogContent>
          
          {event && <>
            <TextField 
                type="date"  
                margin="normal" 
                label="Data" 
                value={event.date} 
                onChange={(evt) => setEvent({...event, date: evt.target.value})} 
                fullWidth
            />
            <TextField 
                autoFocus 
                margin="normal" 
                label="Descrição" 
                value={event.desc} 
                onChange={(evt) => setEvent({...event, desc: evt.target.value})} 
                fullWidth
            />
            <TextField 
                type="time" 
                margin="normal" 
                label="Hora" 
                value={event.time ?? ""} 
                onChange={(evt) => setEvent({...event, time: evt.target.value})} 
                fullWidth
            />
        

            <FormControl fullWidth margin="normal">
                <InputLabel id="select-calendar">Agenda</InputLabel>
                <Select 
                    labelId="select-calendar"
                    value={event.calendarId}
                    onChange={(evt) => setEvent({...event, calendarId: evt.target.value as number})} 
                >
                    {props.calendars.map(calendar => 
                        <MenuItem key={calendar.id} value={calendar.id}>
                            {calendar.name}
                        </MenuItem>
                    )}
                </Select>
            </FormControl>
        </>}

        </DialogContent>
        <DialogActions>
          <Button onClick={props.onClose}>
            Cancelar
          </Button>
          <Button onClick={props.onClose} color="primary">
            Salvar
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}