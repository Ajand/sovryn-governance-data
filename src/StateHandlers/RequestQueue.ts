class RequestQueue {
  private static instance: RequestQueue;
  private que: Array<Function> = [];

  private constructor() {
    this.doJob();
  }

  public static getInstance(): RequestQueue {
    if (!RequestQueue.instance) {
      RequestQueue.instance = new RequestQueue();
    }

    return RequestQueue.instance;
  }

  public pushRequest(fn: Function) {
    this.que.push(fn);
  }

  private doJob() {
    setInterval(async () => {
      if (this.que.length === 0) return;
      const job = this.que.shift();
      await job();
    }, 200);
  }
}

export default RequestQueue;
