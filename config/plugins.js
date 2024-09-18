module.exports = ({ env }) => ({
  translate: {
    enabled: true,
    config: {
      // provider: 'deepl',
      // providerOptions: {
      //   apiKey: env('DEEPL_API_KEY'),
      //   apiUrl: 'https://api-free.deepl.com',
      //   localeMap: {
      //     EN: 'EN-US',
      //   },
      // },
      provider: "google-translate",
      providerOptions: {
        apiKey: env("GOOGLE_TRANSLATE_API_KEY"),
        projectId: env("GOOGLE_TRANSLATE_PROJECT_ID"),
      },
      translatedFieldTypes: [
        "string",
        { type: "text", format: "plain" },
        { type: "richtext", format: "markdown" },
        "component",
        "dynamiczone",
      ],
      translateRelations: true,
    },
    'import-export-entries': {
      enabled: true,
      config: {
        // See `Config` section.
      },
    },
  },
});
