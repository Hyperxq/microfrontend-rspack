
    export type RemoteKeys = 'features/features';
    type PackageType<T> = T extends 'features/features' ? typeof import('features/features') :any;