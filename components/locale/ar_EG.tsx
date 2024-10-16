/* eslint-disable no-template-curly-in-string */
import type { Locale } from '../locale-provider';

import Pagination from '../vc-pagination/locale/ar_EG';
import DatePicker from '../date-picker/locale/ar_EG';
import TimePicker from '../time-picker/locale/ar_EG';
import Calendar from '../calendar/locale/ar_EG';
import Input from '../input/locale/ar_EG';
import PreviewImage from '../preview-image/locale/ar_EG';
import UploadImage from '../upload-image/locale/ar_EG';
import UploadCard from '../upload-card/locale/ar_EG';
import UploadName from '../upload-name/locale/ar_EG';
import TagGroup from '../tag-group/locale/ar_EG';
import TagModalList from '../tag-modal-list/locale/ar_EG';
import SelectApi from '../select-api/locale/ar_EG';
import ColorPicker from '../color-picker/locale/ar_EG';
import FormPro from '../form-pro/locale/ar_EG';
import ModalUser from '../modal-user/locale/ar_EG';
import Classify from '../classify/locale/ar_EG';

const typeTemplate = 'ليس ${label} من نوع ${type} صالحًا';

const localeValues: Locale = {
  locale: 'ar',
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
    placeholder: 'يرجى التحديد',
  },
  Table: {
    filterTitle: 'الفلاتر',
    filterConfirm: 'تأكيد',
    filterReset: 'إعادة ضبط',
    selectAll: 'اختيار الكل',
    selectInvert: 'إلغاء الاختيار',
    selectionAll: 'حدد جميع البيانات',
    sortTitle: 'رتب',
    expand: 'توسيع الصف',
    collapse: 'طي الصف',
    triggerDesc: 'ترتيب تنازلي',
    triggerAsc: 'ترتيب تصاعدي',
    cancelSort: 'إلغاء الترتيب',
  },
  Modal: {
    okText: 'تأكيد',
    cancelText: 'إلغاء',
    justOkText: 'تأكيد',
  },
  Popconfirm: {
    okText: 'تأكيد',
    cancelText: 'إلغاء',
  },
  Transfer: {
    searchPlaceholder: 'ابحث هنا',
    itemUnit: 'عنصر',
    itemsUnit: 'عناصر',
  },
  Upload: {
    uploading: 'جاري الرفع...',
    removeFile: 'احذف الملف',
    uploadError: 'مشكلة فى الرفع',
    previewFile: 'استعرض الملف',
    downloadFile: 'تحميل الملف',
  },
  Empty: {
    description: 'لا توجد بيانات',
  },
  Icon: {
    icon: 'أيقونة',
  },
  Text: {
    edit: 'تعديل',
    copy: 'نسخ',
    copied: 'نقل',
    expand: 'وسع',
  },
  PageHeader: {
    back: 'عودة',
  },
  Form: {
    defaultValidateMessages: {
      default: 'خطأ في حقل الإدخال ${label}',
      required: 'يرجى إدخال ${label}',
      enum: '${label} يجب أن يكون واحدا من [${enum}]',
      whitespace: '${label} لا يمكن أن يكون حرفًا فارغًا',
      date: {
        format: '${label} تنسيق التاريخ غير صحيح',
        parse: '${label} لا يمكن تحويلها إلى تاريخ',
        invalid: 'تاريخ ${label} غير صحيح',
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
        len: 'يجب ${label} ان يكون ${len} أحرف',
        min: '${label} على الأقل ${min} أحرف',
        max: '${label} يصل إلى ${max} أحرف',
        range: 'يجب ${label} ان يكون مابين ${min}-${max} أحرف',
      },
      number: {
        len: '${len} ان يساوي ${label} يجب',
        min: '${min} الأدنى هو ${label} حد',
        max: '${max} الأقصى هو ${label} حد',
        range: '${max}-${min} ان يكون مابين ${label} يجب',
      },
      array: {
        len: 'يجب أن يكون ${label} طوله ${len}',
        min: 'يجب أن يكون ${label} طوله الأدنى ${min}',
        max: 'يجب أن يكون ${label} طوله الأقصى ${max}',
        range: 'يجب أن يكون ${label} طوله مابين ${min}-${max}',
      },
      pattern: {
        mismatch: 'لا يتطابق ${label} مع ${pattern}',
      },
    },
  },
};

export default localeValues;
