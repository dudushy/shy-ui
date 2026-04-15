import * as i0 from '@angular/core';

declare class StorageService {
    get<T>(key: string): T | null;
    set<T>(key: string, value: T): void;
    remove(key: string): void;
    clear(): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<StorageService, never>;
    static ɵprov: i0.ɵɵInjectableDeclaration<StorageService>;
}

declare function groupBy<T>(array: T[], key: keyof T): Record<string, T[]>;
declare function uniqueBy<T>(array: T[], key: keyof T): T[];
declare function chunk<T>(array: T[], size: number): T[][];

export { StorageService, chunk, groupBy, uniqueBy };
//# sourceMappingURL=shy-utils.d.ts.map
