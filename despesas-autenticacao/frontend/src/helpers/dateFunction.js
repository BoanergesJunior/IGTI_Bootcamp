export const arrayOfYear = [2021, 2020, 2019]
export const arrayOfMonth = ["Janeiro", "Fevereiro", "Março", "Abril", "Maio", "Junho", "Julho", "Agosto", "Setembro", "Outubro", "Novembro", "Dezembro"]

export function getToday() {
    return '2021-01'
}   

export function findIndexOfMonth(month) {
    return (arrayOfMonth.indexOf(month) + 1).toString().padStart(2, '0')
}