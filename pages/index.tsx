import { attributes, react as PageContent } from '../content/home.md';
import BasePage from './base';
import { PageComponentProps } from '../common/interfaces';

export interface HomeProps extends PageComponentProps {
  mainHeadline: string;
}

export default class HomePage extends BasePage<HomeProps> {
  render(): JSX.Element {
    const data = this.pageData(attributes as HomeProps, this.props);

    return (
      <div className={'page'}>
        <h1>{data.mainHeadline}</h1>
        <div id='intro'>
          <PageContent />
        </div>
      </div>
    );
  }
}
