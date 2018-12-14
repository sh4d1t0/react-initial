// @flow
export function getCurrentDevice(ua: string) {
  return /mobile/i.test(ua) ? 'mobile' : 'desktop'
}

export function isBot(ua: string) {
  return /curl|bot|googlebot|google|baidu|bing|msn|duckduckgo|teoma|slurp|crawler|spider|robot|crawling/i.test(
    ua
  )
}

export function isDesktop(ua: string) {
  return !/mobile/i.test(ua)
}

export function isMobile(ua: string) {
  return /mobile/i.test(ua)
}
