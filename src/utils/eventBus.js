//  发布者-订阅者模式
export default {
  onObj:{},
  on(event, func){
    if(this.onObj[event] === undefined){
      this.onObj[event] = []
    }
    this.onObj[event].push(func)
  },
  off(event){
    this.onObj[event]= []    
  },
  trigger(){
    let event, args
    if(arguments.length==0){
      return false
    }    
    event = arguments[0]
    args = [].concat(Array.prototype.slice.call(arguments, 1))
    if(this.onObj[event] !== undefined && this.onObj[event].length > 0){
      this.onObj[event].forEach(func => {
        func.apply(null, args)
        func = undefined
      });
    }
  }
}