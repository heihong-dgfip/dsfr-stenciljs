import { Component, h } from '@stencil/core';

@Component({
  tag: 'fr-navigation',
  styleUrl: 'navigation.scss',
  shadow: true,
})
export class Navigation {
  render() {
    return (
      <nav class="fr-nav" id="header-navigation" role="navigation" aria-label="Menu principal">
        <ul class="fr-nav__list">
          <li class="fr-nav__item">
            <a class="fr-nav__link" href="#" target="_self" aria-current="page">
              accès direct
            </a>
          </li>
          <li class="fr-nav__item">
            <a class="fr-nav__link" href="#" target="_self">
              accès direct
            </a>
          </li>
          <li class="fr-nav__item">
            <a class="fr-nav__link" href="#" target="_self">
              accès direct
            </a>
          </li>
          <li class="fr-nav__item">
            <a class="fr-nav__link" href="#" target="_self">
              accès direct
            </a>
          </li>
        </ul>
      </nav>
    );
  }
}
