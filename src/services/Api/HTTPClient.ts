import axios from 'axios'

import { THTTPClientInstance } from '@services/Api'

class HTTPClient {
  private readonly instance: THTTPClientInstance

  constructor() {
    this.instance = axios.create({
      baseURL: process.env.REACT_APP_API_BASE,
      headers: {
        'Content-Type': 'application/json',
        'Cache-Control': 'no-cache',
        'X-User-Timezone': Intl.DateTimeFormat().resolvedOptions().timeZone,
      },
    })
  }

  public getInstance = (): THTTPClientInstance => this.instance
}

const httpClient = new HTTPClient()

export default httpClient
