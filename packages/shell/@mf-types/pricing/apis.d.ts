
    export type RemoteKeys = 'pricing/pricing';
    type PackageType<T> = T extends 'pricing/pricing' ? typeof import('pricing/pricing') :any;