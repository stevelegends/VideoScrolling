class Observer {
  private readonly observerList: Record<string, any>;
  constructor() {
    this.observerList = {};
  }

  add(name: string, listener: (data: any) => void) {
    console.log('add observer::', name);

    if (!name) {
      return;
    }

    if (!this.observerList[name]) {
      this.observerList[name] = [];
    }
    this.observerList[name]?.push(listener);
  }

  notify(name: string, payload: any) {
    console.log('notify::', name);

    if (!name || !this.observerList[name]) {
      return;
    }
    this.observerList[name].forEach((listener: (arg0: any) => any) =>
      listener(payload),
    );
  }

  remove(name: string) {
    console.log('remove::', name);

    if (!name || !this.observerList[name]) {
      return;
    }
    delete this.observerList[name];
  }
}

export const observer = new Observer();
