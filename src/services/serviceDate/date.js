import { addMinutes, format } from 'date-fns'

export const formatDate = el => {
  return format(new Date(el.date), 'kk:mm')
}

export const formatDateMinutes = el => {
  return format(addMinutes(new Date(el.date), el.duration), 'kk:mm')
}
