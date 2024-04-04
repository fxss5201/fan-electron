import { TFunction } from "i18next";

/**
 * @description 获取浏览器默认语言
 * @return string
 */
export const getBrowserLang = () => {
	const browserLang = navigator.language
	return ['zh-cn', 'cn', 'zh'].includes(browserLang.toLowerCase()) ? 'zh-CN' : 'en-US'
}

/**
 * @description 获取类型
 * @param {unknown} val 
 * @returns string
 */
export const getType = (val: unknown) => {
  return Object.prototype.toString.call(val).slice(8, -1).toLowerCase();
}

/**
 * 获取最终值，针对多语言情况，利用多语言 t('aaa') 是否等于 'aaa' 来判断是否使用多语言
 * @param {function} t
 * @param {string} val 
 * @returns 
 */
export const getFinalValue = (t: TFunction, val: string) => {
  return t(val) === val ? val : t(val)
}