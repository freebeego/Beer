import { THTTPClientInstance, THTTPClientResponse, TRequestConfig } from '@services/Api'

abstract class ApiBase {
  constructor(private readonly url: string, private readonly apiClient: THTTPClientInstance) {}

  protected create<D, M>(path: string, data: D): Promise<THTTPClientResponse<M>> {
    return this.apiClient.post(`${this.url}/${path}`, data, {
      headers: {
        'Content-Type': 'application/ld+json',
      },
    })
  }

  protected read<M>(path: string, config?: TRequestConfig): Promise<THTTPClientResponse<M>> {
    return this.apiClient.get(`${this.url}/${path}`, config)
  }

  protected update<D, M>(path: string, data: D): Promise<THTTPClientResponse<M>> {
    return this.apiClient.patch(`${this.url}/${path}`, data, {
      headers: {
        'Content-Type': 'application/merge-patch+json',
      },
    })
  }

  protected delete<M>(path: string): Promise<THTTPClientResponse<M>> {
    return this.apiClient.delete(`${this.url}/${path}`)
  }
}

export default ApiBase
