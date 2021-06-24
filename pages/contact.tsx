import Head from 'next/head';
import { attributes, react as PageContent } from '../content/contact.md';
import { siteTitle } from '../common/site-title';
import { PageComponentProps } from '../common/interfaces';
import BasePage from './base';

export default class ContactPage extends BasePage<PageComponentProps> {

  render(): JSX.Element {
    const data = this.pageData(attributes as PageComponentProps, this.props);

    return (
      <div className="page">
        <Head>
          <title>{siteTitle(data.title)}</title>
        </Head>
        <div className="page__wrapper">
          <h1>{data.mainHeadline}</h1>
          <PageContent />
          <form
            name="contact"
            method="POST"
            data-netlify="true"
            action="/success"
          >
            <div className="form__field">
              <input type="text" name="name" />
            </div>
            <div className="form__field">
              <input type="email" name="email" />
            </div>
            <div className="form__field">
              <input type="subject" name="subject" />
            </div>
            <div className="form__field">
              <textarea
                name="message"
                rows={10}
              />
            </div>
            <div className="form__field">
              <button type="submit">Send</button>
            </div>
          </form>
        </div>
      </div>
    );
  }
}
