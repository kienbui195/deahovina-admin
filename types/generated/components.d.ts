import type { Schema, Attribute } from '@strapi/strapi';

export interface CommonTopBanner extends Schema.Component {
  collectionName: 'components_common_top_banners';
  info: {
    displayName: 'Top Banner';
    description: '';
  };
  attributes: {
    image: Attribute.Media<'images' | 'videos'>;
    link_on_click: Attribute.Text & Attribute.DefaultTo<'#'>;
  };
}

export interface CompanyInfoAboutInfo extends Schema.Component {
  collectionName: 'components_company_info_about_infos';
  info: {
    displayName: 'About Info';
    description: '';
  };
  attributes: {
    hero_title: Attribute.String;
    hero_images: Attribute.Media<'images', true> &
      Attribute.SetPluginOptions<{
        translate: {
          translate: 'copy';
        };
      }>;
    content: Attribute.RichText &
      Attribute.CustomField<
        'plugin::ckeditor.CKEditor',
        {
          output: 'HTML';
          preset: 'rich';
        }
      > &
      Attribute.SetPluginOptions<{
        translate: {
          translate: 'translate';
        };
      }>;
  };
}

export interface CompanyInfoBasicInformation extends Schema.Component {
  collectionName: 'components_company_info_basic_informations';
  info: {
    displayName: 'Basic information';
  };
  attributes: {
    address: Attribute.String;
    tel: Attribute.String;
    fax: Attribute.String;
  };
}

export interface CompanyInfoMainSpecialization extends Schema.Component {
  collectionName: 'components_company_info_main_specializations';
  info: {
    displayName: 'Main specialization';
  };
  attributes: {
    name: Attribute.String & Attribute.Required;
    desc: Attribute.Text;
  };
}

declare module '@strapi/types' {
  export module Shared {
    export interface Components {
      'common.top-banner': CommonTopBanner;
      'company-info.about-info': CompanyInfoAboutInfo;
      'company-info.basic-information': CompanyInfoBasicInformation;
      'company-info.main-specialization': CompanyInfoMainSpecialization;
    }
  }
}
