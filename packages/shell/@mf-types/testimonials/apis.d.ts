
    export type RemoteKeys = 'testimonials/testimonials';
    type PackageType<T> = T extends 'testimonials/testimonials' ? typeof import('testimonials/testimonials') :any;