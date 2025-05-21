import dayjs from 'dayjs';

export const getDatePeriodString = (startDate: string, endDate?: string): string => {
  const start = dayjs(startDate);
  const end = endDate ? dayjs(endDate) : dayjs();
  const endDateString = endDate ? dayjs(endDate).format('MMM. YYYY') : 'till now';

  // we need to add 1 month to calculate both date (start and end)
  const endWithMonth = end.add(1, 'month');
  const years = endWithMonth.diff(startDate, 'year');
  const months = endWithMonth.diff(start.add(years, 'year'), 'month');

  const yearWord = years === 1 ? 'year' : 'years';
  const yearsToDisplay = years === 0 ? '' : `${ years } ${ yearWord }`;
  const monthWord = months === 1 ? 'month' : 'months';
  const monthToDisplay = months === 0 ? '' : ` ${ months } ${ monthWord }`;

  return `${ start.format('MMM. YYYY') } - ${ endDateString } (${ yearsToDisplay }${ monthToDisplay })`;
};
