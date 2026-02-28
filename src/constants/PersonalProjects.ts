export const PROJECT_CATEGORIES = [
    'All', 'Game', 'Application', 'Other'
] as const;
export type ProjectCategory = typeof PROJECT_CATEGORIES[number];

export const COLOR_BY_TAG = {
    game: '#17689C',
    application: '#FCC600',
    other: '#D77016',
    csharp: '#684D95',
    unity: '#393939',
    android_studio: '#78C257',
    prototype: '#AA0E0E'
} as const;
export type ColorByTag = typeof COLOR_BY_TAG[keyof typeof COLOR_BY_TAG];