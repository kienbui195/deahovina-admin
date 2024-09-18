const { Translate } = require("@google-cloud/translate").v2;

module.exports = {
  provider: "google-translate",
  name: "Google Translate",
  init(providerOptions = {}, pluginConfig = {}) {
    const translate = new Translate({
      key: providerOptions.apiKey,
    });

    return {
      async translate({ text, targetLocale, sourceLocale, priority, format }) {
        try {
          let [translationText] = await translate.translate(text, targetLocale);
          // @ts-ignore
          translationText = Array.isArray(translationText)
            ? translationText
            : [translationText];
          return translationText;
        } catch (error) {
          strapi.log.error("Google Translate Error:", error);
          throw error;
        }
      },
    };
  },
};
