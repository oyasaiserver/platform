import { ResourceLoader } from 'jsdom'

interface SoapOptions {
  serviceType: string
  action: string
  body: string
}

export class Soap extends ResourceLoader {
  serviceType: string
  action: string
  body: string

  constructor(options: SoapOptions) {
    super(options)
    this.serviceType = options.serviceType
    this.action = options.action
    this.body = options.body
  }

  _getRequestOptions({ referrer }: { referrer?: string }): RequestInit {
    const requestOptions: RequestInit = {
      method: 'POST',
      headers: {
        'Content-Type': 'text/xml;charset=UTF-8',
        SOAPAction: `"${this.serviceType}#${this.action}"`
      },
      body: this.body
    }

    if (referrer) {
      requestOptions.headers = {
        ...requestOptions.headers,
        referer: referrer
      }
    }

    return requestOptions
  }
}
