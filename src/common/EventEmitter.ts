export default class EventEmitter {
  private events = {};
  public on(name: string, fn: Function) {
    if (!this.events[name]) {
      this.events[name] = [];
    }
    this.events[name].push(fn);
    return this;
  }

  public emit(name: string, ...args: any[]) {
    if (!this.events[name]) {
      return this;
    }
    const fns = this.events[name];
    //不能直接遍历fns ,期间如果有off行为 会出问题
    fns.map((fn) => fn).forEach((fn) => fn.apply(this, args));
    return this;
  }

  public off(name: string, fn?: Function) {
    //fn  传空为解绑全部
    if (!this.events[name]) {
      return this;
    }
    if (!fn) {
      this.events[name] = null;
      return this;
    }
    const index = this.events[name].indexOf(fn);
    this.events[name].splice(index, 1);
    return this;
  }
  // 单次绑定事件,执行完后解绑
  public once(name: string, fn: Function) {
    const only = (...args: any[]) => {
      fn.apply(this, args);
      this.off(name, only);
    };
    this.on(name, only);
    return this;
  }
}
