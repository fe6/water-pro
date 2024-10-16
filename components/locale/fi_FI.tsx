import type { Locale } from '../locale-provider';

import Pagination from '../vc-pagination/locale/fi_FI';
import DatePicker from '../date-picker/locale/fi_FI';
import TimePicker from '../time-picker/locale/fi_FI';
import Calendar from '../calendar/locale/fi_FI';
import Input from '../input/locale/fi_FI';
import PreviewImage from '../preview-image/locale/fi_FI';
import UploadImage from '../upload-image/locale/fi_FI';
import UploadCard from '../upload-card/locale/fi_FI';
import UploadName from '../upload-name/locale/fi_FI';
import TagGroup from '../tag-group/locale/fi_FI';
import TagModalList from '../tag-modal-list/locale/fi_FI';
import SelectApi from '../select-api/locale/fi_FI';
import ColorPicker from '../color-picker/locale/fi_FI';
import FormPro from '../form-pro/locale/fi_FI';
import ModalUser from '../modal-user/locale/fi_FI';
import Classify from '../classify/locale/fi_FI';

const localeValues: Locale = {
  locale: 'fi',
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
  Table: {
    filterTitle: 'Suodatus valikko',
    filterConfirm: 'OK',
    filterReset: 'Tyhjennä',
    selectAll: 'Valitse kaikki',
    selectInvert: 'Valitse päinvastoin',
    sortTitle: 'Lajittele',
  },
  Modal: {
    okText: 'OK',
    cancelText: 'Peruuta',
    justOkText: 'OK',
  },
  Popconfirm: {
    okText: 'OK',
    cancelText: 'Peruuta',
  },
  Transfer: {
    searchPlaceholder: 'Etsi täältä',
    itemUnit: 'kohde',
    itemsUnit: 'kohdetta',
  },
  Upload: {
    uploading: 'Lähetetään...',
    removeFile: 'Poista tiedosto',
    uploadError: 'Virhe lähetyksessä',
    previewFile: 'Esikatsele tiedostoa',
    downloadFile: 'Lataa tiedosto',
  },
  Empty: {
    description: 'Ei kohteita',
  },
  Text: {
    edit: 'Muokkaa',
    copy: 'Kopioi',
    copied: 'Kopioitu',
    expand: 'Näytä lisää',
  },
};

export default localeValues;
