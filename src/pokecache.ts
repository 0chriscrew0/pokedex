type CacheEntry<T> = {
  createdAt: number;
  val: T;
};

export class Cache {
  #cache = new Map<string, CacheEntry<any>>();
  #reapIntervalId: NodeJS.Timeout | undefined = undefined;
  #interval: number;

  constructor(interval: number) {
    this.#interval = interval;
    this.#startReapLoop();
  }

  #reap() {
    this.#cache.forEach((c, k) => {
      if (c.createdAt > Date.now() - this.#interval) {
        this.#cache.delete(k);
      }
    });
  }

  #startReapLoop() {
    this.#reapIntervalId = setInterval(() => {
      this.#reap();
    }, this.#interval);
  }

  stopReapLoop() {
    clearInterval(this.#reapIntervalId);
    this.#reapIntervalId = undefined;
  }

  add<T>(key: string, val: T) {
    const value: CacheEntry<T> = {
      createdAt: Date.now(),
      val,
    };

    this.#cache.set(key, value);
  }

  get<T>(key: string): CacheEntry<T> | undefined {
    if (!this.#cache.has(key)) {
      return undefined;
    }

    return this.#cache.get(key);
  }
}
