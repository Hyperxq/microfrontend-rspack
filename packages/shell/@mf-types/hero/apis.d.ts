
    export type RemoteKeys = 'hero/hero';
    type PackageType<T> = T extends 'hero/hero' ? typeof import('hero/hero') :any;