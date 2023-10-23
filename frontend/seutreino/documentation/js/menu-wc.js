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
                    <a href="index.html" data-type="index-link">seutreino documentation</a>
                </li>

                <li class="divider"></li>
                ${ isNormalMode ? `<div id="book-search-input" role="search"><input type="text" placeholder="Type to search"></div>` : '' }
                <li class="chapter">
                    <a data-type="chapter-link" href="index.html"><span class="icon ion-ios-home"></span>Getting started</a>
                    <ul class="links">
                        <li class="link">
                            <a href="overview.html" data-type="chapter-link">
                                <span class="icon ion-ios-keypad"></span>Overview
                            </a>
                        </li>
                        <li class="link">
                            <a href="index.html" data-type="chapter-link">
                                <span class="icon ion-ios-paper"></span>README
                            </a>
                        </li>
                                <li class="link">
                                    <a href="dependencies.html" data-type="chapter-link">
                                        <span class="icon ion-ios-list"></span>Dependencies
                                    </a>
                                </li>
                                <li class="link">
                                    <a href="properties.html" data-type="chapter-link">
                                        <span class="icon ion-ios-apps"></span>Properties
                                    </a>
                                </li>
                    </ul>
                </li>
                    <li class="chapter modules">
                        <a data-type="chapter-link" href="modules.html">
                            <div class="menu-toggler linked" data-bs-toggle="collapse" ${ isNormalMode ?
                                'data-bs-target="#modules-links"' : 'data-bs-target="#xs-modules-links"' }>
                                <span class="icon ion-ios-archive"></span>
                                <span class="link-name">Modules</span>
                                <span class="icon ion-ios-arrow-down"></span>
                            </div>
                        </a>
                        <ul class="links collapse " ${ isNormalMode ? 'id="modules-links"' : 'id="xs-modules-links"' }>
                            <li class="link">
                                <a href="modules/AppModule.html" data-type="entity-link" >AppModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                            'data-bs-target="#components-links-module-AppModule-1ac969548bbd654e43e4298b89f4b65e36819da5a1b6da773833d09471a636663dc3985db02b5560078fe18ac89069017dd63f10d8deb8295a3e5432a8ca7861"' : 'data-bs-target="#xs-components-links-module-AppModule-1ac969548bbd654e43e4298b89f4b65e36819da5a1b6da773833d09471a636663dc3985db02b5560078fe18ac89069017dd63f10d8deb8295a3e5432a8ca7861"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-AppModule-1ac969548bbd654e43e4298b89f4b65e36819da5a1b6da773833d09471a636663dc3985db02b5560078fe18ac89069017dd63f10d8deb8295a3e5432a8ca7861"' :
                                            'id="xs-components-links-module-AppModule-1ac969548bbd654e43e4298b89f4b65e36819da5a1b6da773833d09471a636663dc3985db02b5560078fe18ac89069017dd63f10d8deb8295a3e5432a8ca7861"' }>
                                            <li class="link">
                                                <a href="components/AboutComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >AboutComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/AboutProfessionalComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >AboutProfessionalComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/AppComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >AppComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/CommentsComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >CommentsComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/ContactusComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >ContactusComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/FooterComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >FooterComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/FormAdmComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >FormAdmComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/FormClientComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >FormClientComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/FormProfessionalComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >FormProfessionalComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/HomeComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >HomeComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/InitialComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >InitialComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/LoggedClientComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >LoggedClientComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/LoggedProfessionalComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >LoggedProfessionalComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/LoginAdmComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >LoginAdmComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/LoginComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >LoginComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/NavbaroffComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >NavbaroffComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/NavbaronComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >NavbaronComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/PersonalDataComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >PersonalDataComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/ProfessionalScheduleComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >ProfessionalScheduleComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/ProfileProfessionalComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >ProfileProfessionalComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/ResearchProfessionalComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >ResearchProfessionalComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/ScheduleTimeComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >ScheduleTimeComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/SearchResultComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >SearchResultComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/ServicesProfessionalComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >ServicesProfessionalComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/AppRoutingModule.html" data-type="entity-link" >AppRoutingModule</a>
                            </li>
                </ul>
                </li>
                        <li class="chapter">
                            <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ? 'data-bs-target="#injectables-links"' :
                                'data-bs-target="#xs-injectables-links"' }>
                                <span class="icon ion-md-arrow-round-down"></span>
                                <span>Injectables</span>
                                <span class="icon ion-ios-arrow-down"></span>
                            </div>
                            <ul class="links collapse " ${ isNormalMode ? 'id="injectables-links"' : 'id="xs-injectables-links"' }>
                                <li class="link">
                                    <a href="injectables/AdministratorService.html" data-type="entity-link" >AdministratorService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/AuthLoginService.html" data-type="entity-link" >AuthLoginService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/AuthService.html" data-type="entity-link" >AuthService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/ClientService.html" data-type="entity-link" >ClientService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/ProfessionalService.html" data-type="entity-link" >ProfessionalService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/ProfissionalReviewService.html" data-type="entity-link" >ProfissionalReviewService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/TagService.html" data-type="entity-link" >TagService</a>
                                </li>
                            </ul>
                        </li>
                    <li class="chapter">
                        <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ? 'data-bs-target="#interfaces-links"' :
                            'data-bs-target="#xs-interfaces-links"' }>
                            <span class="icon ion-md-information-circle-outline"></span>
                            <span>Interfaces</span>
                            <span class="icon ion-ios-arrow-down"></span>
                        </div>
                        <ul class="links collapse " ${ isNormalMode ? ' id="interfaces-links"' : 'id="xs-interfaces-links"' }>
                            <li class="link">
                                <a href="interfaces/Admiministrator.html" data-type="entity-link" >Admiministrator</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/Client.html" data-type="entity-link" >Client</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/IForm.html" data-type="entity-link" >IForm</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/Professional.html" data-type="entity-link" >Professional</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/ProfissionalReview.html" data-type="entity-link" >ProfissionalReview</a>
                            </li>
                        </ul>
                    </li>
                    <li class="chapter">
                        <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ? 'data-bs-target="#miscellaneous-links"'
                            : 'data-bs-target="#xs-miscellaneous-links"' }>
                            <span class="icon ion-ios-cube"></span>
                            <span>Miscellaneous</span>
                            <span class="icon ion-ios-arrow-down"></span>
                        </div>
                        <ul class="links collapse " ${ isNormalMode ? 'id="miscellaneous-links"' : 'id="xs-miscellaneous-links"' }>
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
                        Documentation generated using <a href="https://compodoc.app/" target="_blank" rel="noopener noreferrer">
                            <img data-src="images/compodoc-vectorise.png" class="img-responsive" data-type="compodoc-logo">
                        </a>
                    </li>
            </ul>
        </nav>
        `);
        this.innerHTML = tp.strings;
    }
});