import Head from 'next/head';
import { siteTitle } from '../common/site-title';
import { attributes, react as PageContent } from '../content/success.md';
import BasePage from './base';
import { PageComponentProps } from '../common/interfaces';

export default class SuccessPage extends BasePage<PageComponentProps> {
  render(): JSX.Element {
    const data = this.pageData(attributes as PageComponentProps, this.props);

    return (
      <div>
        <Head>
          <title>{siteTitle(data.title)}</title>
        </Head>
        <h1>{data.mainHeadline}</h1>
        <PageContent />
      </div>
    );
  }
}
