import { defineType } from 'sanity';

const supportedLanguages = [
  { id: 'uk', title: 'Ukrainian', isDefault: true },
  { id: 'en', title: 'English' },
];

const baseLanguage = supportedLanguages.find(l => l.isDefault);

const localeString = defineType({
  title: 'Localized string',
  name: 'localeString',
  type: 'object',

  fieldsets: [
    {
      title: 'Translations',
      name: 'translations',
      options: { collapsible: true },
    },
  ],
  fields: supportedLanguages.map(lang => ({
    title: lang.title,
    name: lang.id,
    type: 'string',
    fieldset: lang.isDefault ? '' : 'translations',
  })),
});

const localization = {
  baseLanguage,
  localeString,
};

export default localization;
