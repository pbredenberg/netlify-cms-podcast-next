import { Component } from 'react';

export default abstract class BasePage<T> extends Component<T> {

  /**
   * Return the `attributes` of a markdown file to adapt page components
   * to the CMS. If `data` is not defined, defaults to the component props.
   */
  pageData(data: T, props: T): T {
    return Object.assign(data, props || {});
  }

  render(): JSX.Element {
    return null;
  }
}
