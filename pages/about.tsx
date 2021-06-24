import React from 'react';
import Head from 'next/head';
import BasePage from './base';
import { PageComponentProps } from '../common/interfaces';
import { siteTitle } from '../common/site-title';
import { attributes, react as PageContent } from '../content/about.md';

export interface AboutProps extends PageComponentProps {
  mastheadTitle: string;
}

export default class AboutPage extends BasePage<AboutProps> {
  render(): JSX.Element {
    const data = this.pageData(attributes as AboutProps, this.props);

    return (
      <div className='page'>
        <Head>
          <title>{siteTitle(data.title)}</title>
        </Head>
        <div className='page__wrapper'>
          <h1>{data.mastheadTitle}</h1>
          <PageContent />
        </div>
      </div>
    );
  }
}
