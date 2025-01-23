import { keys, mapValues } from 'lodash-es';
import { FileSystemIconLoader } from 'unplugin-icons/loaders';
import iconsResolver from 'unplugin-icons/resolver';

const collections = {
  'custom-icon': '/icon',
  custom: '',
} satisfies {
  [key in `custom${string}`]: '' | `/${string}`;
};

export const customCollections = mapValues(collections, folder =>
  FileSystemIconLoader(`./src/assets/icons${folder}`),
);

export const customIconsResolver = (name: string) =>
  iconsResolver({
    strict: true,
    prefix: 'I',
    extension: 'tsx',
    customCollections: keys(collections),
  })(name);
