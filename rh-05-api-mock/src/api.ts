// SEE: https://www.jsontest.com/
import request from 'request-promise-native'

abstract class Source {
  url : string
  constructor(url: string){
    this.url = url
  }

  abstract get(option?: {delay?: number}) : Promise<any>
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

  get(option? : {delay?: number}) : Promise<any> {
    const { delay } = { ...option }

    if (delay){
      return new Promise(resolve => {
        setTimeout(() => {
          resolve(this._json_get())
        }, delay)
      })
    }else{
      return this._json_get()
    }
}

}

export class Api {
  static createIp() : Source {
    return new JsonSource('http://ip.jsontest.com/')
  }
}