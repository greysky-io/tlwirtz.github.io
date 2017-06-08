import React, { Component } from 'react';
import NavButton from './NavButton';
import NavLinkGroup from './NavLinkGroup';
import gssLogo from '../assets/greysky-logo.svg';

class NavBar extends Component {
  constructor() {
    super();
    this.renderGroup = this.renderGroup.bind(this);
    this.showNavLinks = this.showNavLinks.bind(this);
    this.onButtonClick = this.onButtonClick.bind(this);
    this.onWindowResize = this.onWindowResize.bind(this);
    this.renderCondensedButton = this.renderCondensedButton.bind(this);

    this.state = {
      largeWindow: false,
      buttonActive: false,
    };
  }

  componentDidMount() {
    this.onWindowResize();
    window.addEventListener('resize', this.onWindowResize);
  }

  componentWillUnmount() {
    window.removeEventListener('resize', this.onWindowResize);
  }

  onButtonClick() {
    this.setState({ buttonActive: !this.state.buttonActive });
  }

  onWindowResize() {
    if (window.innerWidth >= 660) {
      return this.setState({ largeWindow: true });
    }

    this.setState({ largeWindow: false });
  }

  showNavLinks() {
    return this.state.largeWindow || this.state.buttonActive;
  }

  renderCondensedButton() {
    if (!this.state.largeWindow) {
      return <NavButton handleClick={this.onButtonClick} />;
    }
  }

  renderGroup() {
    return this.showNavLinks()
      ? <NavLinkGroup
          values={[
            { name: 'services', id: 'services' },
            { name: 'about', id: 'about' },
            { name: 'get in touch', id: 'get-in-touch' },
          ]}
        />
      : null;
  }

  render() {
    return (
      <div>
        {this.state.largeWindow
          ? <div className="app-nav-container">
              <div className="app-nav-item">
                <img
                  src={gssLogo}
                  className="logo"
                  alt="greysky studios logo"
                />
              </div>
              {this.renderGroup()}
            </div>
          : <div>
              <div className="app-nav-container">
                <div className="app-nav-item logo">
                  <img
                    src={gssLogo}
                    className="logo"
                    alt="greysky studios logo"
                  />
                </div>
                {this.renderCondensedButton()}
              </div>
              <div className="app-nav-container app-nav-center">
                {this.renderGroup()}
              </div>
            </div>}
      </div>
    );
  }
}

export default NavBar;
