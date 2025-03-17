---
category: Components
type: 数据录入
cols: 1
title: FormPro
subtitle: 表单 PRO
cover: https://gw.alipayobjects.com/zos/alicdn/ORmcdeaoO/Form.svg
---

高性能表单控件，自带数据域管理。包含数据录入、校验以及对应样式。

## 何时使用

- 用于创建一个实体或收集信息。
- 需要对输入的数据类型进行校验时。

## API

> [支持的组件](https://github.com/fe6/water-pro/blob/next/components/form-pro/src/types/index.ts#L85)

### FormPRO | useForm 参数

| 参数 | 说明 | 类型 | 默认值 | 版本 |
| --- | --- | --- | --- | --- |
| model | 表单数据对象 | object |  |  |
| labelWidth | 标签的文本的宽度 | Number \| String |  |  |
| fieldMapToTime | 区域字段，转换一维字段 | [字段，[开始时间的字段名字，结束时间的字段名字]， 时间格式化][] |  |  |
| actionAlgin | 底部操作按钮的对齐方式，当 `space-between` 的时候，是 flex 布局，适合多按钮。 | 'left' \| 'right' \| 'center' \| 'space-between' | left |  |
| actionAffix | 底部操作按钮是否悬停到底部 | boolean | - |  |
| actionTarget | 设置提交 Affix 需要监听其滚动事件的元素，值为一个返回对应 DOM 元素的函数 | () => HTMLElement | - | 3.13.0 |
| actionOffsetBottom | 底部操作按钮悬停到底部的距离 | Number | 0 |  |
| baseGutter | 水平内联的间距 | number | 0 |  |
| layout | 表单布局 | 'horizontal'\|'vertical'\|'inline' | 'horizontal' |  |
| autoSetPlaceHolder | 是否自定设置占位文字， RangePicker 无效 | boolean | true |  |
| submitOnReset | 点击提交是否重置字段及验证 | boolean | - | false |
| resetOnSubmit | 点击重置是否自动触发提交 | boolean | - | 4.0 |
| disabled | 是否禁用表单 | boolean | - |  |
| showActionButtonGroup | 是否显示操作按钮 | boolean | true |  |
| showResetButton | 是否显示重置按钮 | boolean | true |  |
| showSubmitButton | 是否显示确认按钮 | boolean | true |  |
| autoFocusFirstItem | 是否聚焦第一个输入框，只在第一个表单项为 input 的时候作用 | boolean | - |  |
| showAdvancedButton | 是否显示收起展开按钮 | boolean | - |  |
| emptySpan | 展开空占位的 span | number \| [ColProps](../grid/col.tsx) | 0 |  |
| transformDateFunc | 转化时间方法 | Function | `(date: any) => hasOwn(date, 'format') ? date?.format('YYYY-MM-DD HH:mm:ss') : date` |  |
| hideRequiredMark | 是否显示标签必填的标识( \* )， 只能在 form-pro 标签中设置 | boolean | - |  |
| colon | 是否显示标签文字的冒号 | boolean | true |  |
| resetClearValidate | 点击重置按钮是否清除验证提示 | boolean | true |  |
| schemas | 字段的配置 | [FormSchema](https://github.com/fe6/water-pro/blob/next/components/form-pro/src/types/form.ts#L126) | [] |  |
| mergeDynamicData | 在单独动态验证方法( dynamicRules )中返回的多余字段的定义 | object | - |  |
| rulesMessageJoinLabel | 验证提示是否结合标签文字显示 | boolean | true |  |
| actionColOptions | 操作行的 col 配置 | [ColProps](../grid/col.tsx) | - |  |
| labelCol | 配置字段标签区布局 | [ColProps](../grid/col.tsx) | - |  |
| wrapperCol | 配置字段内容区布局 | [ColProps](../grid/col.tsx) | - |  |
| resetButtonOptions | 重置[按钮配置](./button-cn) | object |  |  |
| submitButtonOptions | 确认[按钮配置](./button-cn) | object |  |  |
| size | 尺寸 | `default` \| `small` | `default` |  |
| navAffix | 顶部导航是否显示 | boolean | - | 3.17.0 |
| navTarget | 设置提交 Affix 需要监听其滚动事件的元素，值为一个返回对应 DOM 元素的函数 | () => HTMLElement | - | 3.17.0 |
| navOffsetTop | 顶部操作按钮悬停到顶部的距离 | Number | 0 | 3.17.0 |
| advancedAll | 默认都展开 | boolean | - | 4.0.0 |
| inlineCol | 当 `layout="inline"` 的时候，控制各个字段的栅格 | [ColProps](../grid/col.tsx) | { span: 8 } | 4.0.0 |
| inlineActionCol | 当 `layout="inline"` 的时候，控制按钮的栅格 | [ColProps](../grid/col.tsx) | { span: 8 } | 4.0.0 |
| inlineActionInnerRow | 当 `layout="inline"` 的时候，按钮里面的样式 | [ColProps](../grid/row.tsx) | {} | 4.33.0 |
| inlineRow | 当 `layout="inline"` 的时候，控制各个字段的栅格 | [ColProps](../grid/col.tsx) | { span: 8 } | 4.0.0 |
| okText | 重置按钮文案 | string | 查询 |  |
| resetText | 重置按钮文案 | string | 重置 |  |
| scrollToFirstError | 提交失败自动滚动到第一个错误字段 | boolean \| [options](https://github.com/stipsan/scroll-into-view-if-needed/#options) | false | 4.20.0 |
| scrollToFirstErrorPosition | 滚动错误字段的位置 | center \|top | center | 4.20.0 |
| inputEnterSubmit | 为 `true` 时输入框按回车自动触发 submit 方法 | boolean | false | 4.24.0 |
| iconName | 当有子集的时候的图标名字 | string | - | 4.27.0 |
| spaceSize | 当有子集的时候的间距大小 | number | - | 4.27.0 |
| labelLevel | 当有子集的时候的文字大小 | number | - | 4.27.0 |
| labelStyle | 当有子集的时候的文字样式 | number | - | 4.28.0 |
| wrapperStyle | 当有子集的时候的右边样式 | number | - | 4.28.0 |

### FormPro 事件

| 事件名称 | 说明 | 回调参数 | 版本 |
| --- | --- | --- | --- |
| register | 使用 useForm 的回调 | Function([formActionType](https://github.com/fe6/water-pro/blob/next/components/form-pro/src/types/form.ts#L29)) |  |
| advanced-change | 折叠的回调 | - |  |
| reset | 重置回调 | function(formModel(表单数据对象)) |  |
| submit | 验证成功的确定回调 | function(formModel(表单数据对象)) |  |
| submit-error | 验证失败的确定回调 | function(error(错误)) |  |

### useForm 事件

| 事件名称 | 说明 | 回调参数 | 版本 |
| --- | --- | --- | --- |
| scrollToField | 滚动到验证失败 | [NamePath](https://github.com/fe6/water-pro/blob/next/components/form/interface.ts#L4), ScrollOptions) \| options |  |
| setProps | 设置属性 | - |  |
| resetAllModel | 重置所有数据 | - |  |
| updateSchema | 更新表单配置规则 schema | [FormSchema](https://github.com/fe6/water-pro/blob/next/components/form-pro/src/types/form.ts#L126), replace(是否替换) |  |
| clearValidate | 清除验证 | 字段名字， string \| string[] |  |
| resetFields | 重置字段 | - |  |
| removeSchemaByFiled | 删除字段 | field(字段名，string \| string[]) |  |
| getFieldsValue | 获取所有字段的值，传 true 过滤不显示的字段 | filterHidden |  |
| getChildrenFieldsValue | 获取所有字段的值，符合 schema 结构，传 true 过滤不显示的字段 | filterHidden | 3.19.0 |
| setFieldsValue | 设置所有字段的值 | 设置的值 (object) |  |
| appendSchemaByField | 添加新字段 | schema(规则， [FormSchema](https://github.com/fe6/water-pro/blob/next/components/form-pro/src/types/form.ts#L126))，参照的字段，是否在前面添加 |  |
| submit | 提交方法 | - |  |
| validate | 验证表单某些字段 | 字段的名字([NamePath](https://github.com/fe6/water-pro/blob/next/components/form/interface.ts#L4)) |  |
| validateFields | 真正所有表单字段 | 字段的名字([NamePath](https://github.com/fe6/water-pro/blob/next/components/form/interface.ts#L4)) |  |
