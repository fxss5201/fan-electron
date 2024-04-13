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
