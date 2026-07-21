export class Collection<K, V> extends Map<K, V> {
    public first(): V | undefined {
        return this.values().next().value;
    }

    public last(): V | undefined {
        let value: V | undefined;

        for (const item of this.values()) {
            value = item;
        }

        return value;
    }

    public at(index: number): V | undefined {
        const values = [...this.values()];

        if (index < 0) {
            return values[values.length + index];
        }

        return values[index];
    }

    public random(): V | undefined {
        if (this.size === 0) return undefined;

        const values = [...this.values()];
        return values[Math.floor(Math.random() * values.length)];
    }

    public map<T>(callback: (value: V, key: K, collection: this) => T): T[] {
        const result: T[] = [];

        for (const [key, value] of this) {
            result.push(callback(value, key, this));
        }

        return result;
    }

    public filter(callback: (value: V, key: K, collection: this) => boolean): Collection<K, V> {
        const result = new Collection<K, V>();

        for (const [key, value] of this) {
            if (callback(value, key, this)) {
                result.set(key, value);
            }
        }

        return result;
    }

    public find(callback: (value: V, key: K, collection: this) => boolean): V | undefined {
        for (const [key, value] of this) {
            if (callback(value, key, this)) {
                return value;
            }
        }

        return undefined;
    }

    public findKey(callback: (value: V, key: K, collection: this) => boolean): K | undefined {
        for (const [key, value] of this) {
            if (callback(value, key, this)) {
                return key;
            }
        }

        return undefined;
    }

    public some(callback: (value: V, key: K, collection: this) => boolean): boolean {
        for (const [key, value] of this) {
            if (callback(value, key, this)) {
                return true;
            }
        }

        return false;
    }

    public every(callback: (value: V, key: K, collection: this) => boolean): boolean {
        for (const [key, value] of this) {
            if (!callback(value, key, this)) {
                return false;
            }
        }

        return true;
    }

    public reduce<T>(
        callback: (accumulator: T, value: V, key: K, collection: this) => T,
        initialValue: T
    ): T {
        let accumulator = initialValue;

        for (const [key, value] of this) {
            accumulator = callback(accumulator, value, key, this);
        }

        return accumulator;
    }

    public partition(
        callback: (value: V, key: K, collection: this) => boolean
    ): [Collection<K, V>, Collection<K, V>] {
        const passed = new Collection<K, V>();
        const failed = new Collection<K, V>();

        for (const [key, value] of this) {
            if (callback(value, key, this)) {
                passed.set(key, value);
            } else {
                failed.set(key, value);
            }
        }

        return [passed, failed];
    }

    public sort(compareFn?: (a: V, b: V) => number): Collection<K, V> {
        const entries = [...this.entries()];

        entries.sort(([, a], [, b]) => compareFn?.(a, b) ?? 0);

        this.clear();

        for (const [key, value] of entries) {
            this.set(key, value);
        }

        return this;
    }

    public clone(): Collection<K, V> {
        return new Collection(this);
    }

    public toArray(): V[] {
        return [...this.values()];
    }

    public keysArray(): K[] {
        return [...this.keys()];
    }

    public entriesArray(): [K, V][] {
        return [...this.entries()];
    }
}