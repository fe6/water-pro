/** @format */

import moment from 'moment';

const DATE_FORMAT = 'YYYY-MM-DD ';

export function formatToDate(date: moment.MomentInput = null, format = DATE_FORMAT): string {
  return moment(date).format(format);
}

export const dateUtil = moment;
