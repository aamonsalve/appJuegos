'use strict';


customElements.define('compodoc-menu', class extends HTMLElement {
    constructor() {
        super();
        this.isNormalMode = this.getAttribute('mode') === 'normal';
    }

    connectedCallback() {
        this.render(this.isNormalMode);
    }

    render(isNormalMode) {
        let tp = lithtml.html(`
        <nav>
            <ul class="list">
                <li class="title">
                    <a href="index.html" data-type="index-link">danger documentation</a>
                </li>

                <li class="divider"></li>
                ${ isNormalMode ? `<div id="book-search-input" role="search"><input type="text" placeholder="Type to search"></div>` : '' }
                <li class="chapter">
                    <a data-type="chapter-link" href="index.html"><span class="icon ion-ios-home"></span>Getting started</a>
                    <ul class="links">
                        <li class="link">
                            <a href="index.html" data-type="chapter-link">
                                <span class="icon ion-ios-keypad"></span>Overview
                            </a>
                        </li>
                        <li class="link">
                            <a href="dependencies.html" data-type="chapter-link">
                                <span class="icon ion-ios-list"></span>Dependencies
                            </a>
                        </li>
                    </ul>
                </li>
                    <li class="chapter modules">
                        <a data-type="chapter-link" href="modules.html">
                            <div class="menu-toggler linked" data-toggle="collapse" ${ isNormalMode ?
                                'data-target="#modules-links"' : 'data-target="#xs-modules-links"' }>
                                <span class="icon ion-ios-archive"></span>
                                <span class="link-name">Modules</span>
                                <span class="icon ion-ios-arrow-down"></span>
                            </div>
                        </a>
                        <ul class="links collapse" ${ isNormalMode ? 'id="modules-links"' : 'id="xs-modules-links"' }>
                            <li class="link">
                                <a href="modules/AppModule.html" data-type="entity-link">AppModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-AppModule-d0b438b9b15c238d0e6d1d3ab59165e5"' : 'data-target="#xs-components-links-module-AppModule-d0b438b9b15c238d0e6d1d3ab59165e5"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-AppModule-d0b438b9b15c238d0e6d1d3ab59165e5"' :
                                            'id="xs-components-links-module-AppModule-d0b438b9b15c238d0e6d1d3ab59165e5"' }>
                                            <li class="link">
                                                <a href="components/AppComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">AppComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/JuegoPage.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">JuegoPage</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/VideoPrincipalPage.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">VideoPrincipalPage</a>
                                            </li>
                                        </ul>
                                    </li>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                        'data-target="#injectables-links-module-AppModule-d0b438b9b15c238d0e6d1d3ab59165e5"' : 'data-target="#xs-injectables-links-module-AppModule-d0b438b9b15c238d0e6d1d3ab59165e5"' }>
                                        <span class="icon ion-md-arrow-round-down"></span>
                                        <span>Injectables</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="injectables-links-module-AppModule-d0b438b9b15c238d0e6d1d3ab59165e5"' :
                                        'id="xs-injectables-links-module-AppModule-d0b438b9b15c238d0e6d1d3ab59165e5"' }>
                                        <li class="link">
                                            <a href="injectables/BackbuttonService.html"
                                                data-type="entity-link" data-context="sub-entity" data-context-id="modules" }>BackbuttonService</a>
                                        </li>
                                        <li class="link">
                                            <a href="injectables/NetworkService.html"
                                                data-type="entity-link" data-context="sub-entity" data-context-id="modules" }>NetworkService</a>
                                        </li>
                                    </ul>
                                </li>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#pipes-links-module-AppModule-d0b438b9b15c238d0e6d1d3ab59165e5"' : 'data-target="#xs-pipes-links-module-AppModule-d0b438b9b15c238d0e6d1d3ab59165e5"' }>
                                            <span class="icon ion-md-add"></span>
                                            <span>Pipes</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="pipes-links-module-AppModule-d0b438b9b15c238d0e6d1d3ab59165e5"' :
                                            'id="xs-pipes-links-module-AppModule-d0b438b9b15c238d0e6d1d3ab59165e5"' }>
                                            <li class="link">
                                                <a href="pipes/SafePipe.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">SafePipe</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/AppRoutingModule.html" data-type="entity-link">AppRoutingModule</a>
                            </li>
                            <li class="link">
                                <a href="modules/CustomToastModule.html" data-type="entity-link">CustomToastModule</a>
                            </li>
                            <li class="link">
                                <a href="modules/InicioSesionPageModule.html" data-type="entity-link">InicioSesionPageModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-InicioSesionPageModule-be626b7278be8d82bbcb5577d65d0aa8"' : 'data-target="#xs-components-links-module-InicioSesionPageModule-be626b7278be8d82bbcb5577d65d0aa8"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-InicioSesionPageModule-be626b7278be8d82bbcb5577d65d0aa8"' :
                                            'id="xs-components-links-module-InicioSesionPageModule-be626b7278be8d82bbcb5577d65d0aa8"' }>
                                            <li class="link">
                                                <a href="components/InicioSesionPage.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">InicioSesionPage</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/JuegoPageModule.html" data-type="entity-link">JuegoPageModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-JuegoPageModule-2ba2b79b88477ac6c880dc979c54d50c"' : 'data-target="#xs-components-links-module-JuegoPageModule-2ba2b79b88477ac6c880dc979c54d50c"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-JuegoPageModule-2ba2b79b88477ac6c880dc979c54d50c"' :
                                            'id="xs-components-links-module-JuegoPageModule-2ba2b79b88477ac6c880dc979c54d50c"' }>
                                            <li class="link">
                                                <a href="components/JuegoPage.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">JuegoPage</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/Tab1PageModule.html" data-type="entity-link">Tab1PageModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-Tab1PageModule-60c9ffb973b4581e65ab8214348b7d3a"' : 'data-target="#xs-components-links-module-Tab1PageModule-60c9ffb973b4581e65ab8214348b7d3a"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-Tab1PageModule-60c9ffb973b4581e65ab8214348b7d3a"' :
                                            'id="xs-components-links-module-Tab1PageModule-60c9ffb973b4581e65ab8214348b7d3a"' }>
                                            <li class="link">
                                                <a href="components/Tab1Page.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">Tab1Page</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/Tab2PageModule.html" data-type="entity-link">Tab2PageModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-Tab2PageModule-fae022b56f66c5350f8d8adec200a626"' : 'data-target="#xs-components-links-module-Tab2PageModule-fae022b56f66c5350f8d8adec200a626"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-Tab2PageModule-fae022b56f66c5350f8d8adec200a626"' :
                                            'id="xs-components-links-module-Tab2PageModule-fae022b56f66c5350f8d8adec200a626"' }>
                                            <li class="link">
                                                <a href="components/Tab2Page.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">Tab2Page</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/Tab3PageModule.html" data-type="entity-link">Tab3PageModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-Tab3PageModule-a4d8a6e7679fa53e0b113808156cfca7"' : 'data-target="#xs-components-links-module-Tab3PageModule-a4d8a6e7679fa53e0b113808156cfca7"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-Tab3PageModule-a4d8a6e7679fa53e0b113808156cfca7"' :
                                            'id="xs-components-links-module-Tab3PageModule-a4d8a6e7679fa53e0b113808156cfca7"' }>
                                            <li class="link">
                                                <a href="components/Tab3Page.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">Tab3Page</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/TabsPageModule.html" data-type="entity-link">TabsPageModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-TabsPageModule-6cd76d7b4dabac675c5bd4b609307cd8"' : 'data-target="#xs-components-links-module-TabsPageModule-6cd76d7b4dabac675c5bd4b609307cd8"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-TabsPageModule-6cd76d7b4dabac675c5bd4b609307cd8"' :
                                            'id="xs-components-links-module-TabsPageModule-6cd76d7b4dabac675c5bd4b609307cd8"' }>
                                            <li class="link">
                                                <a href="components/TabsPage.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">TabsPage</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/TabsPageRoutingModule.html" data-type="entity-link">TabsPageRoutingModule</a>
                            </li>
                            <li class="link">
                                <a href="modules/VideoPrincipalPageModule.html" data-type="entity-link">VideoPrincipalPageModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-VideoPrincipalPageModule-3ca41b2f5d5e28daea5ec52c8e5ac79d"' : 'data-target="#xs-components-links-module-VideoPrincipalPageModule-3ca41b2f5d5e28daea5ec52c8e5ac79d"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-VideoPrincipalPageModule-3ca41b2f5d5e28daea5ec52c8e5ac79d"' :
                                            'id="xs-components-links-module-VideoPrincipalPageModule-3ca41b2f5d5e28daea5ec52c8e5ac79d"' }>
                                            <li class="link">
                                                <a href="components/VideoPrincipalPage.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">VideoPrincipalPage</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                </ul>
                </li>
                    <li class="chapter">
                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ? 'data-target="#classes-links"' :
                            'data-target="#xs-classes-links"' }>
                            <span class="icon ion-ios-paper"></span>
                            <span>Classes</span>
                            <span class="icon ion-ios-arrow-down"></span>
                        </div>
                        <ul class="links collapse" ${ isNormalMode ? 'id="classes-links"' : 'id="xs-classes-links"' }>
                            <li class="link">
                                <a href="classes/AppPage.html" data-type="entity-link">AppPage</a>
                            </li>
                        </ul>
                    </li>
                        <li class="chapter">
                            <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ? 'data-target="#injectables-links"' :
                                'data-target="#xs-injectables-links"' }>
                                <span class="icon ion-md-arrow-round-down"></span>
                                <span>Injectables</span>
                                <span class="icon ion-ios-arrow-down"></span>
                            </div>
                            <ul class="links collapse" ${ isNormalMode ? 'id="injectables-links"' : 'id="xs-injectables-links"' }>
                                <li class="link">
                                    <a href="injectables/BackbuttonService.html" data-type="entity-link">BackbuttonService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/NetworkService.html" data-type="entity-link">NetworkService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/Ps4Service.html" data-type="entity-link">Ps4Service</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/SteamService.html" data-type="entity-link">SteamService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/XboxService.html" data-type="entity-link">XboxService</a>
                                </li>
                            </ul>
                        </li>
                    <li class="chapter">
                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ? 'data-target="#miscellaneous-links"'
                            : 'data-target="#xs-miscellaneous-links"' }>
                            <span class="icon ion-ios-cube"></span>
                            <span>Miscellaneous</span>
                            <span class="icon ion-ios-arrow-down"></span>
                        </div>
                        <ul class="links collapse" ${ isNormalMode ? 'id="miscellaneous-links"' : 'id="xs-miscellaneous-links"' }>
                            <li class="link">
                                <a href="miscellaneous/functions.html" data-type="entity-link">Functions</a>
                            </li>
                            <li class="link">
                                <a href="miscellaneous/variables.html" data-type="entity-link">Variables</a>
                            </li>
                        </ul>
                    </li>
                        <li class="chapter">
                            <a data-type="chapter-link" href="routes.html"><span class="icon ion-ios-git-branch"></span>Routes</a>
                        </li>
                    <li class="chapter">
                        <a data-type="chapter-link" href="coverage.html"><span class="icon ion-ios-stats"></span>Documentation coverage</a>
                    </li>
                    <li class="divider"></li>
                    <li class="copyright">
                        Documentation generated using <a href="https://compodoc.app/" target="_blank">
                            <img data-src="images/compodoc-vectorise.png" class="img-responsive" data-type="compodoc-logo">
                        </a>
                    </li>
            </ul>
        </nav>
        `);
        this.innerHTML = tp.strings;
    }
});