import { Component, h } from 'preact';
import { Link } from 'preact-router';
import stylesheet from './style.scss';
import gss from '../getStyle';
const style = gss(stylesheet);

const componentVersion = '1.0.0';

console.warn(
  '(mozAlike:00001) [DEP0001] PotentialDeprecationWarning: MozAlike/link might get deprecated in the moderately near future! If not, it will be way less frequently updated basis! See https://github.com/Phonin/Components/ for a potential alternative built on this link element',
);

export default class MozLink extends Component<{
  LinkComponent?: typeof Component;
  href?: string;
  className?: string;
  class?: string;
  target?: string;
}> {
  render() {
    const Classes = `${style('mozLink')}${
      this.props.className ? ` ${  this.props.className}` : ''
    }${this.props.class ? ` ${  this.props.class}` : ''}`;

    if (this.props.LinkComponent)
      return (
        <this.props.LinkComponent
          href={this.props.href}
          class={Classes}
          className={Classes}
          target={this.props.target}
          data-mozAlikeComponent={'lgbt.nora.MozAlike.Link'}
          data-mozAlikeComponentVersion={componentVersion}
        >
          {this.props.children}
        </this.props.LinkComponent>
      );
    return (
      <Link
        href={this.props.href}
        class={Classes}
        target={this.props.target}
        onClick={
          this.props.target === 'blank'
            ? () => {
              window.open(this.props.href);
            }
            : () => {}
        }
        data-link={this.props.href}
        data-mozAlikeComponent={'lgbt.nora.MozAlike.Link'}
        data-mozAlikeComponentVersion={componentVersion}
      >
        {this.props.children}
      </Link>
    );
  }
}
