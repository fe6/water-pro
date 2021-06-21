/** @format */

import moment from 'moment';

const DATE_TIME_FORMAT = 'YYYY-MM-DD HH:mm';

export function formatToDateTime(
  date: moment.MomentInput = null,
  format = DATE_TIME_FORMAT,
): string {
  return moment(date).format(format);
}

export const dateUtil = moment;
