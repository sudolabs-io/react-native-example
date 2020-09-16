import dateFnsFormat from 'date-fns/format';

// eslint-disable-next-line import/prefer-default-export
export const format = (date) => dateFnsFormat(new Date(date), 'dd.MM.yyyy');
