export const PROJECT_CATEGORIES = [
    'All', 'Game', 'Application', 'Other'
] as const;
export type ProjectCategory = typeof PROJECT_CATEGORIES[number];

export const COLOR_BY_CATEGORY: Record<ProjectCategory, string> = {
    All: '#FFFFFF',
    Game: '#17689C',
    Application: '#FCC600',
    Other: '#D77016'
}

export const PROJECT_TAGS = {
    csharp: {label: 'C#', color: '#684D95'},
    kotlin: {label: 'Kotlin', color: '#E24462'},
    unity: {label: 'Unity', color: '#393939'},
    android_studio: {label: 'Android Studio', color: '#78C257'},
    prototype: {label: 'Prototype', color: '#AA0E0E'}
} as const;
export type ProjectTags = typeof PROJECT_TAGS[keyof typeof PROJECT_TAGS];