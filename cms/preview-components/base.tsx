import { PreviewTemplateComponentProps } from 'netlify-cms-core';
import { Component } from 'react';

/**
 * The base component is here to provided reusable functionality
 * to all the preview components that extend it.
 */
export default class BasePreview extends Component<PreviewTemplateComponentProps> {

  /**
   * Executes Netlify CMS' `widgetFor` to extract data from the CMS
   * inputs.
   *
   * @param widgetName
   */
  protected getData(widgetName: string) {
    const data = this.props.widgetFor(widgetName);

    let value: any | undefined; // This value truly could be anything.

    // This is here because, inexplicably, the CMS seems to treat random (?)
    // fields as a list. In our case it is `mastheadTitle`.
    // This logic covers that case when we expect a widget to have a single value,
    // but it actually contains an array.
    // Theory: It could have something to do with how the field type was originally
    // committed to the repo.
    this.props.widgetsFor(widgetName).forEach(entry => {
      if (entry) {
        value = entry;
      }
    });

    if (!data || !data.props.value) {
      console.error('Could not resolve widget: ', widgetName);
      return;
    }

    if (!value) {
      value = data.props.value;
    }

    return value;
  }
}
