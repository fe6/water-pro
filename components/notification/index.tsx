import type { CSSProperties } from 'vue';
import Notification from '../vc-notification';
import IconBytedCheckOne from '@fe6/icon-vue/lib/icons/byted-check-one';
import IconBytedInfo from '@fe6/icon-vue/lib/icons/byted-info';
import IconBytedCloseOne from '@fe6/icon-vue/lib/icons/byted-close-one';
import IconBytedAttention from '@fe6/icon-vue/lib/icons/byted-attention';

import type { VueNode } from '../_util/type';
import { renderHelper } from '../_util/util';
import { globalConfig } from '../config-provider';
import type { NotificationInstance as VCNotificationInstance } from '../vc-notification/Notification';
import classNames from '../_util/classNames';
import BasicClose from '../basic-close';

export type NotificationPlacement = 'topLeft' | 'topRight' | 'bottomLeft' | 'bottomRight';

export type IconType = 'success' | 'info' | 'error' | 'warning';

export interface NotificationConfigProps {
  top?: string | number;
  bottom?: string | number;
  duration?: number;
  prefixCls?: string;
  placement?: NotificationPlacement;
  getContainer?: () => HTMLElement;
  closeIcon?: VueNode | (() => VueNode);
  rtl?: boolean;
  maxCount?: number;
}

const notificationInstance: { [key: string]: VCNotificationInstance } = {};
let defaultDuration = 4.5;
let defaultTop = '24px';
let defaultBottom = '24px';
let defaultPrefixCls = '';
let defaultPlacement: NotificationPlacement = 'topRight';
let defaultGetContainer = () => document.body;
let defaultCloseIcon = null;
let rtl = false;
let maxCount: number;

function setNotificationConfig(options: NotificationConfigProps) {
  const { duration, placement, bottom, top, getContainer, closeIcon, prefixCls } = options;
  if (prefixCls !== undefined) {
    defaultPrefixCls = prefixCls;
  }
  if (duration !== undefined) {
    defaultDuration = duration;
  }
  if (placement !== undefined) {
    defaultPlacement = placement;
  }
  if (bottom !== undefined) {
    defaultBottom = typeof bottom === 'number' ? `${bottom}px` : bottom;
  }
  if (top !== undefined) {
    defaultTop = typeof top === 'number' ? `${top}px` : top;
  }
  if (getContainer !== undefined) {
    defaultGetContainer = getContainer;
  }
  if (closeIcon !== undefined) {
    defaultCloseIcon = closeIcon;
  }
  if (options.rtl !== undefined) {
    rtl = options.rtl;
  }
  if (options.maxCount !== undefined) {
    maxCount = options.maxCount;
  }
}

function getPlacementStyle(
  placement: NotificationPlacement,
  top: string = defaultTop,
  bottom: string = defaultBottom,
) {
  let style: CSSProperties;
  switch (placement) {
    case 'topLeft':
      style = {
        left: '0px',
        top,
        bottom: 'auto',
      };
      break;
    case 'topRight':
      style = {
        right: '0px',
        top,
        bottom: 'auto',
      };
      break;
    case 'bottomLeft':
      style = {
        left: '0px',
        top: 'auto',
        bottom,
      };
      break;
    default:
      style = {
        right: '0px',
        top: 'auto',
        bottom,
      };
      break;
  }
  return style;
}

function getNotificationInstance(
  {
    prefixCls: customizePrefixCls,
    placement = defaultPlacement,
    getContainer = defaultGetContainer,
    top,
    bottom,
    closeIcon = defaultCloseIcon,
    appContext,
  }: NotificationArgsProps,
  callback: (n: VCNotificationInstance) => void,
) {
  const { getPrefixCls } = globalConfig();
  const prefixCls = getPrefixCls('notification', customizePrefixCls || defaultPrefixCls);
  const cacheKey = `${prefixCls}-${placement}-${rtl}`;
  const cacheInstance = notificationInstance[cacheKey];
  if (cacheInstance) {
    Promise.resolve(cacheInstance).then((instance) => {
      callback(instance);
    });

    return;
  }

  const notificationClass = classNames(`${prefixCls}-${placement}`, {
    [`${prefixCls}-rtl`]: rtl === true,
  });
  Notification.newInstance(
    {
      name: 'notification',
      prefixCls: customizePrefixCls || defaultPrefixCls,
      class: notificationClass,
      style: getPlacementStyle(placement, top, bottom),
      appContext,
      getContainer,
      closeIcon: ({ prefixCls }) => {
        const closeIconToRender = (
          <span class={`${prefixCls}-close-x`}>
            {renderHelper(
              closeIcon,
              {},
              <BasicClose
                class={`${prefixCls}-close-icon`}
                hoverColors={['currentColor']}
                colors={['currentColor']}
              />,
            )}
          </span>
        );
        return closeIconToRender;
      },
      maxCount,
      hasTransitionName: true,
    },
    (notification: any) => {
      notificationInstance[cacheKey] = notification;
      callback(notification);
    },
  );
}

const typeToIcon = {
  success: IconBytedCheckOne,
  info: IconBytedInfo,
  error: IconBytedCloseOne,
  warning: IconBytedAttention,
};

export interface NotificationArgsProps {
  message: VueNode | (() => VueNode);
  description?: VueNode | (() => VueNode);
  btn?: VueNode | (() => VueNode);
  key?: string;
  onClose?: () => void;
  duration?: number | null;
  icon?: VueNode | (() => VueNode);
  placement?: NotificationPlacement;
  style?: CSSProperties;
  prefixCls?: string;
  class?: string;
  readonly type?: IconType;
  onClick?: () => void;
  top?: string;
  bottom?: string;
  getContainer?: () => HTMLElement;
  closeIcon?: VueNode | (() => VueNode);
  appContext?: any;
}

function notice(args: NotificationArgsProps) {
  const { icon, type, description, message, btn } = args;
  const duration = args.duration === undefined ? defaultDuration : args.duration;
  getNotificationInstance(args, (notification) => {
    notification.notice({
      content: ({ prefixCls: outerPrefixCls }) => {
        const prefixCls = `${outerPrefixCls}-notice`;
        let iconNode = null;
        if (icon) {
          iconNode = () => <span class={`${prefixCls}-icon`}>{renderHelper(icon)}</span>;
        } else if (type) {
          const Icon = typeToIcon[type];
          iconNode = () => (
            <Icon class={`${prefixCls}-icon ${prefixCls}-icon-${type}`} colors={['currentColor']} />
          );
        }
        return (
          <div class={iconNode ? `${prefixCls}-with-icon ${prefixCls}-icon-${type}` : ''}>
            {iconNode && iconNode()}
            <div class={`${prefixCls}-message`}>
              {!description && iconNode ? (
                <span class={`${prefixCls}-message-single-line-auto-margin`} />
              ) : null}
              {renderHelper(message)}
            </div>
            <div class={`${prefixCls}-description`}>{renderHelper(description)}</div>
            {btn ? <span class={`${prefixCls}-btn`}>{renderHelper(btn)}</span> : null}
          </div>
        );
      },
      duration,
      closable: true,
      onClose: args.onClose,
      onClick: args.onClick,
      key: args.key,
      style: args.style || {},
      class: args.class,
    });
  });
}

const api: any = {
  open: notice,
  close(key: string) {
    Object.keys(notificationInstance).forEach((cacheKey) =>
      Promise.resolve(notificationInstance[cacheKey]).then((instance) => {
        instance.removeNotice(key);
      }),
    );
  },
  config: setNotificationConfig,
  destroy() {
    Object.keys(notificationInstance).forEach((cacheKey) => {
      Promise.resolve(notificationInstance[cacheKey]).then((instance) => {
        instance.destroy();
      });
      delete notificationInstance[cacheKey]; // lgtm[js/missing-await]
    });
  },
};

const iconTypes: IconType[] = ['success', 'info', 'warning', 'error'];
iconTypes.forEach((type) => {
  api[type] = (args) =>
    api.open({
      ...args,
      type,
    });
});

api.warn = api.warning;

export interface NotificationInstance {
  success(args: NotificationArgsProps): void;
  error(args: NotificationArgsProps): void;
  info(args: NotificationArgsProps): void;
  warning(args: NotificationArgsProps): void;
  open(args: NotificationArgsProps): void;
}

export interface NotificationApi extends NotificationInstance {
  warn(args: NotificationArgsProps): void;
  close(key: string): void;
  config(options: NotificationConfigProps): void;
  destroy(): void;
}

/** @private test Only function. Not work on production */
// Fix @babel/runtime/regenerator does not provide an export named 'default' 删除 async
export const getInstance = (cacheKey: string) =>
  process.env.NODE_ENV === 'test' ? notificationInstance[cacheKey] : null;

export default api as NotificationApi;
