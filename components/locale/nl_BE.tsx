/* eslint-disable no-template-curly-in-string */
import type { Locale } from '../locale-provider';

import Pagination from '../vc-pagination/locale/nl_BE';
import DatePicker from '../date-picker/locale/nl_BE';
import TimePicker from '../time-picker/locale/nl_BE';
import Calendar from '../calendar/locale/nl_BE';
import Input from '../input/locale/nl_BE';
import PreviewImage from '../preview-image/locale/nl_BE';
import UploadImage from '../upload-image/locale/nl_BE';
import UploadCard from '../upload-card/locale/nl_BE';
import UploadName from '../upload-name/locale/nl_BE';
import TagGroup from '../tag-group/locale/nl_BE';
import TagModalList from '../tag-modal-list/locale/nl_BE';
import SelectApi from '../select-api/locale/nl_BE';
import ColorPicker from '../color-picker/locale/nl_BE';
import FormPro from '../form-pro/locale/nl_BE';
import ModalUser from '../modal-user/locale/nl_BE';
import Classify from '../classify/locale/nl_BE';

const typeTemplate = '${label} is geen geldige ${type}';

const localeValues: Locale = {
  locale: 'nl-be',
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
    placeholder: 'Maak een selectie',
  },
  Table: {
    cancelSort: 'Klik om sortering te annuleren',
    collapse: 'Rij inklappen',
    emptyText: 'Geen data',
    expand: 'Rij uitklappen',
    filterConfirm: 'OK',
    filterEmptyText: 'Geen filters',
    filterReset: 'Reset',
    filterTitle: 'Filteren',
    selectAll: 'Selecteer huidige pagina',
    selectInvert: 'Keer volgorde om',
    selectNone: 'Maak selectie leeg',
    selectionAll: 'Selecteer alle data',
    sortTitle: 'Sorteren',
    triggerAsc: 'Klik om oplopend te sorteren',
    triggerDesc: 'Klik om aflopend te sorteren',
  },
  Modal: {
    okText: 'OK',
    cancelText: 'Annuleer',
    justOkText: 'OK',
  },
  Popconfirm: {
    okText: 'OK',
    cancelText: 'Annuleer',
  },
  Transfer: {
    itemUnit: 'item',
    itemsUnit: 'items',
    remove: 'Verwijder',
    removeAll: 'Verwijder alles',
    removeCurrent: 'Verwijder huidige pagina',
    searchPlaceholder: 'Zoek hier',
    selectAll: 'Selecteer alles',
    selectCurrent: 'Selecteer huidige pagina',
    selectInvert: 'Huidige pagina omkeren',
    titles: ['', ''],
  },
  Upload: {
    downloadFile: 'Bestand downloaden',
    previewFile: 'Preview file',
    removeFile: 'Verwijder bestand',
    uploadError: 'Fout tijdens uploaden',
    uploading: 'Uploaden...',
  },
  Empty: {
    description: 'Geen gegevens',
  },
  Icon: {
    icon: 'icoon',
  },
  Text: {
    edit: 'Bewerken',
    copy: 'kopiëren',
    copied: 'Gekopieerd',
    expand: 'Uitklappen',
  },
  PageHeader: {
    back: 'Terug',
  },
  Form: {
    optional: '(optioneel)',
    defaultValidateMessages: {
      default: 'Validatiefout voor ${label}',
      required: 'Gelieve ${label} in te vullen',
      enum: '${label} moet één van [${enum}] zijn',
      whitespace: '${label} mag geen blanco teken zijn',
      date: {
        format: '${label} heeft een ongeldig formaat',
        parse: '${label} kan niet naar een datum omgezet worden',
        invalid: '${label} is een ongeldige datum',
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
        len: '${label} moet ${len} karakters lang zijn',
        min: '${label} moet minimaal ${min} karakters lang zijn',
        max: '${label} mag maximaal ${max} karakters lang zijn',
        range: '${label} moet tussen ${min}-${max} karakters lang zijn',
      },
      number: {
        len: '${label} moet gelijk zijn aan ${len}',
        min: '${label} moet minimaal ${min} zijn',
        max: '${label} mag maximaal ${max} zijn',
        range: '${label} moet tussen ${min}-${max} liggen',
      },
      array: {
        len: 'Moeten ${len} ${label} zijn',
        min: 'Minimaal ${min} ${label}',
        max: 'maximaal ${max} ${label}',
        range: 'Het aantal ${label} moet tussen ${min}-${max} liggen',
      },
      pattern: {
        mismatch: '${label} komt niet overeen met het patroon ${pattern}',
      },
    },
  },
  Image: {
    preview: 'Voorbeeld',
  },
};

export default localeValues;
