// @flow
export function getCurrentDevice(ua: any) {
  return /mobile/i.test(ua) ? 'mobile' : 'desktop'
}

export function isBot(ua: any) {
  return /curl|bot|googlebot|google|baidu|bing|msn|duckduckgo|teoma|slurp|crawler|spider|robot|crawling/i.test(
    ua
  )
}

export function isDesktop(ua: any) {
  return !/mobile/i.test(ua)
}

export function isMobile(ua: any) {
  return /mobile/i.test(ua)
}
