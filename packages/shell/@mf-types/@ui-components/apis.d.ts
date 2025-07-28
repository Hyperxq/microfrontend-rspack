
    export type RemoteKeys = '@ui-components/Button';
    type PackageType<T> = T extends '@ui-components/Button' ? typeof import('@ui-components/Button') :any;