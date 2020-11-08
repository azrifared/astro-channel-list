import * as R from 'ramda';

type TagType = {
  [key: string]: 'Categories' | 'Language' | 'Resolution';
};

export const TYPE_HEADER: TagType = {
  CATEGORIES: 'Categories',
  LANGUAGE: 'Language',
  RESOLUTION: 'Resolution',
};

export const TAGS = {
  [TYPE_HEADER.CATEGORIES]: [
    'Movies',
    'Sports',
    'Kids',
    'Learning',
    'Music',
    'News',
    'Lifestyle',
    'Variety Entertainment',
    'Special Interest',
    'Radio',
  ],
  [TYPE_HEADER.LANGUAGE]: [
    'International',
    'Malay',
    'Chinese',
    'Indian',
    'Korean & Japanese',
    'Multiple Language'
  ],
  [TYPE_HEADER.RESOLUTION]: ['SD', 'HD'],
};


export const TAG_KEYS = R.keys(TYPE_HEADER);