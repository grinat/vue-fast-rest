import Vue from 'vue'
import {Store} from 'vuex'
import {AxiosError, AxiosInstance, AxiosRequestConfig, AxiosResponse} from 'axios'

export const REST: {
  /**
   * @link https://vue-fast-rest.netlify.com/class/src/store/actions.js~actions.html
   */
  actions: {
    updateUrlEndpoint: string
    createModel: string
    updateModel: string
    deleteModel: string
    getServices: string
  },
  /**
   * @link https://vue-fast-rest.netlify.com/class/src/store/getters.js~getters.html
   */
  getters: {
    readUrlEndpoint: string
    readEndpointState: string
  },
  /**
   * @link https://vue-fast-rest.netlify.com/class/src/store/mutations.js~mutations.html
   */
  mutations: {
    updateEndpoint: string
  },
  /**
   * @link https://vue-fast-rest.netlify.com/class/src/store/actions.js~actions.html#static-method-createModel
   */
  updateActions: {
    append: string
    prepend: string
    replaceSame: string
    replace: string
    insertAfter: string
  }
}

interface Config {
  cache: number
}

interface Services {
  restClient: DefaultRestClient
  store: Store<any>
  services: object
  config: Config
}

interface Options {
  store: Store<any>
  restClient?: DefaultRestClient
  services?: object
  preserveState?: boolean
  config?: Config
}

interface HookOptions {
  url: string
  params: AxiosRequestConfig
}

export declare function plugin(V: typeof Vue, options: Options): void

export class DefaultRestClient {
  beforeRequest (services: Services, reqParameters?: HookOptions): Promise<void>
  onError (services: Services, error: any, reqParameters?: HookOptions): Promise<Error|AxiosError>
  getReqConfig (services: Services, url: string, params?: AxiosRequestConfig): Promise<AxiosRequestConfig>
  onResponse (services: Services, response: AxiosResponse): Promise<AxiosResponse>
  create (services: Services, url: string, data?: any, params?: AxiosRequestConfig): Promise<AxiosResponse|AxiosError|Error>
  read (services: Services, url: string, params?: AxiosRequestConfig): Promise<AxiosResponse|AxiosError|Error>
  update (services: Services, url: string, data?: any, params?: AxiosRequestConfig): Promise<AxiosResponse|AxiosError|Error>
  delete (services: Services, url: string, params?: AxiosRequestConfig): Promise<AxiosResponse|AxiosError|Error>
  getHTTPLibInstance (): AxiosInstance|any
}
