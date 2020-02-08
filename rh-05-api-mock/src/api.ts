// SEE: https://www.jsontest.com/
import request from 'request-promise-native'

abstract class Source {
  url : string
  constructor(url: string){
    this.url = url
  }

  abstract get() : Promise<any>
}

class JsonSource extends Source{
  private _json_get(){
    const options = {
      uri: this.url,
      transform2xxOnly: true, // ステータスコード200以外のときにHTMLページを帰す場合はtrueにする
      transform: (content: any) => { return JSON.parse(content); },
    }
    return request(options)
  }

  get() : Promise<any> { return this._json_get() }
}

export class Api {
  static createIp() : Source {
    return new JsonSource('http://ip.jsontest.com/')
  }
}