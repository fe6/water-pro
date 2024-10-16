/* eslint-disable no-template-curly-in-string */
import type { Locale } from '../locale-provider';

import Pagination from '../vc-pagination/locale/he_IL';
import DatePicker from '../date-picker/locale/he_IL';
import TimePicker from '../time-picker/locale/he_IL';
import Calendar from '../calendar/locale/he_IL';
import Input from '../input/locale/he_IL';
import PreviewImage from '../preview-image/locale/he_IL';
import UploadImage from '../upload-image/locale/he_IL';
import UploadCard from '../upload-card/locale/he_IL';
import UploadName from '../upload-name/locale/he_IL';
import TagGroup from '../tag-group/locale/he_IL';
import TagModalList from '../tag-modal-list/locale/he_IL';
import SelectApi from '../select-api/locale/he_IL';
import ColorPicker from '../color-picker/locale/he_IL';
import FormPro from '../form-pro/locale/he_IL';
import ModalUser from '../modal-user/locale/he_IL';
import Classify from '../classify/locale/he_IL';

const typeTemplate = '${label} הוא לא ${type} תקין';

const localeValues: Locale = {
  locale: 'he',
  Pagination,
  DatePicker,
  TimePicker,
  Calendar,
  Input,
  SelectApi,
  ModalUser,
  Classify,
  PreviewImage,
  UploadImage,
  UploadCard,
  UploadName,
  TagGroup,
  TagModalList,
  FormPro,
  ColorPicker,
  global: {
    placeholder: 'אנא בחר',
  },
  Table: {
    filterTitle: 'תפריט סינון',
    filterConfirm: 'אישור',
    filterReset: 'איפוס',
    selectAll: 'בחר הכל',
    selectInvert: 'הפוך בחירה',
    selectionAll: 'בחר את כל הנתונים',
    sortTitle: 'מיון',
    expand: 'הרחב שורה',
    collapse: 'צמצם שורהw',
    triggerDesc: 'לחץ על מיון לפי סדר יורד',
    triggerAsc: 'לחץ על מיון לפי סדר עולה',
    cancelSort: 'לחץ כדי לבטל את המיון',
  },
  Modal: {
    okText: 'אישור',
    cancelText: 'ביטול',
    justOkText: 'אישור',
  },
  Popconfirm: {
    okText: 'אישור',
    cancelText: 'ביטול',
  },
  Transfer: {
    searchPlaceholder: 'חפש כאן',
    itemUnit: 'פריט',
    itemsUnit: 'פריטים',
  },
  Upload: {
    uploading: 'מעלה...',
    removeFile: 'הסר קובץ',
    uploadError: 'שגיאת העלאה',
    previewFile: 'הצג קובץ',
    downloadFile: 'הורד קובץ',
  },
  Empty: {
    description: 'אין מידע',
  },
  Icon: {
    icon: 'סמל',
  },
  Text: {
    edit: 'ערוך',
    copy: 'העתק',
    copied: 'הועתק',
    expand: 'הרחב',
  },
  PageHeader: {
    back: 'חזרה',
  },
  Form: {
    defaultValidateMessages: {
      default: 'ערך השדה שגוי ${label}',
      required: 'בבקשה הזן ${label}',
      enum: '${label} חייב להיות אחד מערכים אלו [${enum}]',
      whitespace: '${label} לא יכול להיות ריק',
      date: {
        format: '${label} תאריך לא תקין',
        parse: '${label} לא ניתן להמיר לתאריך',
        invalid: '${label} הוא לא תאריך תקין',
      },
      types: {
        string: typeTemplate,
        method: typeTemplate,
        array: typeTemplate,
        object: typeTemplate,
        number: typeTemplate,
        date: typeTemplate,
        boolean: typeTemplate,
        integer: typeTemplate,
        float: typeTemplate,
        regexp: typeTemplate,
        email: typeTemplate,
        url: typeTemplate,
        hex: typeTemplate,
      },
      string: {
        len: '${label} חייב להיות ${len} תווים',
        min: '${label} חייב להיות ${min} תווים',
        max: '${label} מקסימום ${max} תווים',
        range: '${label} חייב להיות בין ${min}-${max} תווים',
      },
      number: {
        len: '${label} חייב להיות שווה ל ${len}',
        min: '${label} ערך מינימלי הוא ${min}',
        max: '${label} ערך מקסימלי הוא ${max}',
        range: '${label} חייב להיות בין ${min}-${max}',
      },
      array: {
        len: 'חייב להיות ${len} ${label}',
        min: 'מינימום ${min} ${label}',
        max: 'מקסימום ${max} ${label}',
        range: 'הסכום של ${label} חייב להיות בין ${min}-${max}',
      },
      pattern: {
        mismatch: '${label} לא תואם לתבנית ${pattern}',
      },
    },
  },
};

export default localeValues;
