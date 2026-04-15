import * as i0 from '@angular/core';
import { Injectable } from '@angular/core';

class StorageService {
    get(key) {
        const item = localStorage.getItem(key);
        if (item === null)
            return null;
        try {
            return JSON.parse(item);
        }
        catch {
            return item;
        }
    }
    set(key, value) {
        localStorage.setItem(key, JSON.stringify(value));
    }
    remove(key) {
        localStorage.removeItem(key);
    }
    clear() {
        localStorage.clear();
    }
    static ɵfac = function StorageService_Factory(__ngFactoryType__) { return new (__ngFactoryType__ || StorageService)(); };
    static ɵprov = /*@__PURE__*/ i0.ɵɵdefineInjectable({ token: StorageService, factory: StorageService.ɵfac, providedIn: 'root' });
}
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(StorageService, [{
        type: Injectable,
        args: [{ providedIn: 'root' }]
    }], null, null); })();

function groupBy(array, key) {
    return array.reduce((result, item) => {
        const groupKey = String(item[key]);
        (result[groupKey] ??= []).push(item);
        return result;
    }, {});
}
function uniqueBy(array, key) {
    const seen = new Set();
    return array.filter((item) => {
        const val = item[key];
        if (seen.has(val))
            return false;
        seen.add(val);
        return true;
    });
}
function chunk(array, size) {
    const result = [];
    for (let i = 0; i < array.length; i += size) {
        result.push(array.slice(i, i + size));
    }
    return result;
}

/**
 * Generated bundle index. Do not edit.
 */

export { StorageService, chunk, groupBy, uniqueBy };
//# sourceMappingURL=shy-utils.mjs.map
