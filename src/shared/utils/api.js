// @flow
// dependencies
import 'isomorphic-fetch'
import queryString from 'query-string'

export function apiEndpoint(
  endpoint: string,
  qs?: string,
  fetchingFrom: string
): string {
  let query = ''
  let apiUrl = ''

  if (qs) {
    query = `?${qs}`
  }

  if (fetchingFrom === 'server') {
    apiUrl = 'http://localhost:3000'
  }

  return `${apiUrl}/api/${endpoint}${query}`
}

export function apiFetch(
  endpoint: string,
  options: {
    fetchFrom?: string,
    fetchingFrom?: string,
    headers?: {| headers: string |},
    method?: string,
    body?: boolean
  } = {},
  query: boolean = false,
  response?: any
): any {
  let qs
  const { fetchingFrom = 'client' } = options

  delete options.fetchFrom

  if (query) {
    qs = queryString.stringify(query)
  }

  const fetchOptions = apiOptions(options)
  const fetchEndpoint = apiEndpoint(endpoint, qs, fetchingFrom)

  return fetch(fetchEndpoint, fetchOptions).then(response => response.json())
}

export function apiOptions(
  options: {
    method?: string,
    headers?: {| headers: string |},
    body?: boolean
  } = {}
): any {
  const {
    method = 'GET',
    headers = { 'Content-Type': 'application/json' } /*,
    body = false */
  } = options

  const newOptions = { method, headers, credentials: 'include' }

  /* if (body) {
    newOptions.body = body
  } */

  return newOptions
}
