import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import Box from '@material-ui/core/Box';
import { useEffect, useState } from 'react';
import { makeStyles } from '@material-ui/core';
import { arrayOfMonth, arrayOfYear, findIndexOfMonth } from '../helpers/dateFunction';

const useStyles = makeStyles({
    box: {
        maxWidth: "1200px",
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        margin: "auto",  
        padding: "16px"  
    },
    select: {
        minWidth: "120px",
        marginRight: "8px"
    }
})

export default function DateSelector({
    total = 0,
    date = ''
}) {  

    const [month, setMonth] = useState('')
    const [year, setYear] = useState('')

    const [completeDate, setCompleteDate] = useState('')

    useEffect(() => {
        const monthIndex = findIndexOfMonth(month)
        const fullDate = `${year.toString()}-${monthIndex}`
        setCompleteDate(fullDate)
    }, [month, year])

    console.log(completeDate)

    const classes = useStyles()

    return (
        
        <div className={classes.box}>
            <Box>
                <FormControl variant="standard" className={classes.select}>
                    <InputLabel width='' id="combo-age">Ano</InputLabel>
                    <Select labelId="combo-age" id="select-age" value={year} onChange={(e) => setYear(e.target.value)}>
                        {
                            arrayOfYear.map(year => 
                                <MenuItem key={year} value={year}>{year}</MenuItem>)
                        }
                    </Select>
                </FormControl>

                <FormControl variant="standard" className={classes.select}>
                    <InputLabel id="combo-month">Mês</InputLabel>
                    <Select labelId="combo-month" id="select-day" value={month} onChange={(e) => setMonth(e.target.value)}>
                        {
                            arrayOfMonth.map(month => 
                                <MenuItem key={month} value={month}>{month}</MenuItem>)
                        }
                    </Select>
                </FormControl>
            </Box>
            <Box fontWeight="bold" fontSize="20px">
                R$ {total}
            </Box>
        </div>
    )
}
