/** @format */

import { isNumber } from '@fe6/shared';

import type { ValidationRule } from '../../form/Form';
import type { ComponentType } from './types/index';

const inputText = '请输入';
const chooseText = '请选择';

/**
 * @description: 生成placeholder
 */
export function createPlaceholderMessage(component: ComponentType) {
  if (component.includes('Input') || component.includes('Complete')) {
    return inputText;
  }
  if (component.includes('Picker')) {
    return chooseText;
  }
  if (
    component.includes('Select') ||
    component.includes('Cascader') ||
    component.includes('Checkbox') ||
    component.includes('Radio') ||
    component.includes('Switch')
  ) {
    // return `请选择${label}`;
    return chooseText;
  }
  return '';
}

function genType() {
  return [
    'DatePicker',
    'MonthPicker',
    'RangePicker',
    'WeekPicker',
    'TimePicker',
  ];
}

export function setComponentRuleType(
  rule: ValidationRule,
  component: ComponentType,
) {
  if (
    ['DatePicker', 'MonthPicker', 'WeekPicker', 'TimePicker'].includes(
      component,
    )
  ) {
    rule.type = 'object';
  } else if (
    ['RangePicker', 'Upload', 'CheckboxGroup', 'TimePicker'].includes(component)
  ) {
    rule.type = 'array';
  } else if (['InputNumber'].includes(component)) {
    rule.type = 'number';
  }
}

export function handleInputNumberValue(component?: ComponentType, val?: any) {
  if (!component) return val || '';
  if (
    ['Input', 'InputPassword', 'InputSearch', 'InputTextArea'].includes(
      component,
    )
  ) {
    return val && isNumber(val) ? `${val}` : val;
  }
  return val;
}

/**
 * 时间字段
 */
export const dateItemType = genType();
