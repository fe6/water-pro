/** @format */

import { ComponentType } from '../../types/component-type';

const inputText = '请输入';
const chooseText = '请选择';
/**
 * @description: 生成placeholder
 */
export function createPlaceholderMessage(component: ComponentType) {
  if (component.includes('Input')) {
    return inputText;
  }
  if (component.includes('Picker')) {
    return chooseText;
  }

  if (
    component.includes('Select') ||
    component.includes('Checkbox') ||
    component.includes('Radio') ||
    component.includes('Switch')
  ) {
    return chooseText;
  }
  return '';
}
