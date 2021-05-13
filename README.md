# [App-Plataforma]()

![Product Gif](src/assets/img/capturas/img1.png)


Este es un proyecto estándar el cual tiene una serie de servicio tales como registrarse, iniciar sección, ver una lista de usuarios con sus atributos (admi), manejos de roles (user, admin) entre otras.
Tiene una serie de funcionalidades integradas e implementación de algunas tecnologías, herramientas las cuales no permitirán tanto al cliente como al usuario que quiere implementar este proyecto para su beneficio de manera fácil debido a que se trato de dar las mejores prácticas en cada una de las tecnologías usas con la estructura más adecuada

## Table of Contents

- [Versions](#versions)
- [Demo](#demo)
- [Quick Start](#quick-start)
- [Documentation](#documentation)
- [File Structure](#file-structure)
- [Browser Support](#browser-support)
- [Resources](#resources)
- [Reporting Issues](#reporting-issues)
- [Technical Support or Questions](#technical-support-or-questions)
- [Licensing](#licensing)
- [Useful Links](#useful-links)

## Versions

[<img src="https://s3.amazonaws.com/creativetim_bucket/github/angular.png" width="60" height="60" />](https://www.creative-tim.com/product/paper-dashboard-angular)

| Angular                                                               |
| --------------------------------------------------------------------- |
| [![Paper Dashboard Angular](src/assets/img/capturas/registrar.png)]() |

## Demo

| Dashboard                                           | Crear Usuario                                                      | Listado Usuarios                                               |
| --------------------------------------------------- | ------------------------------------------------------------------ | -------------------------------------------------------------- |
| [![Start page](src/assets/img/capturas/img1.png)]() | [![User profile page](src/assets/img/capturas/crearUsuario.png)]() | [![Tables page ](src/assets/img/capturas/listaUsuarios.png)]() |

## Quick start

Quick start options:

- [Download from Creative Tim](https://www.creative-tim.com/product/paper-dashboard-angular).

## Terminal Commands

1. Install NodeJs from [NodeJs Official Page](https://nodejs.org/en).
2. Open Terminal
3. Go to your file project
4. Run in terminal: `npm install -g @angular/cli`
5. Then: `npm install`
6. And: `ng serve`
7. Navigate to: [http://localhost:4200/](http://localhost:4200/)

### What's included

Within the download you'll find the following directories and files:

```
paper-dashboard-angular
├── CHANGELOG.md
├── ISSUES_TEMPLATE.md
├── LICENSE.md
├── README.md
├── angular.json
├── browserslist
├── documentation
│   └── tutorial-components.html
├── e2e
├── karma.conf.js
├── package-lock.json
├── package.json
├── protractor.conf.js
├── src
│   ├── app
│   │   ├── auth
│   │   │   ├── login
│   │   │   │   ├── login.component.html
│   │   │   │   └── login.component.ts
│   │   │   ├── register
│   │   │       ├── register.component.html
│   │   │       └── register.component.ts
│   │   ├── guards
│   │   │     ├── private.guard.ts
│   │   │     └── public.guard.ts
│   │   ├── interceptors
│   │   │     ├── interceptor.service.ts
│   │   │     
│   │   │      
│   │   │  
│   │   ├── app.component.css
│   │   ├── app.component.html
│   │   ├── app.component.spec.ts
│   │   ├── app.component.ts
│   │   ├── app.module.ts
│   │   ├── app.routing.ts
│   │   ├── layouts
│   │   │   └── admin-layout
│   │   │       ├── admin-layout.component.html
│   │   │       ├── admin-layout.component.scss
│   │   │       ├── admin-layout.component.spec.ts
│   │   │       ├── admin-layout.component.ts
│   │   │       ├── admin-layout.module.ts
│   │   │       └── admin-layout.routing.ts
│   │   ├── pages
│   │   │   ├── dashboard
│   │   │   │   ├── dashboard.component.html
│   │   │   │   └── dashboard.component.ts
│   │   │   ├── icons
│   │   │   │   ├── icons.component.html
│   │   │   │   └── icons.component.ts
│   │   │   ├── maps
│   │   │   │   ├── maps.component.html
│   │   │   │   └── maps.component.ts
│   │   │   ├── notifications
│   │   │   │   ├── notifications.component.html
│   │   │   │   └── notifications.component.ts
│   │   │   ├── table
│   │   │   │   ├── table.component.html
│   │   │   │   └── table.component.ts
│   │   │   ├── typography
│   │   │   │   ├── typography.component.html
│   │   │   │   └── typography.component.ts
│   │   │   ├── upgrade
│   │   │   │   ├── upgrade.component.html
│   │   │   │   └── upgrade.component.ts
│   │   │   └── user
│   │   │       ├── user.component.html
│   │   │       └── user.component.ts
│   │   ├── shared
│   │   │   ├── fixedplugin
│   │   │   │   ├── fixedplugin.component.html
│   │   │   │   ├── fixedplugin.component.ts
│   │   │   │   └── fixedplugin.module.ts
│   │   │   ├── footer
│   │   │   │   ├── footer.component.html
│   │   │   │   ├── footer.component.ts
│   │   │   │   └── footer.module.ts
│   │   │   └── navbar
│   │   │       ├── navbar.component.html
│   │   │       ├── navbar.component.ts
│   │   │       └── navbar.module.ts
│   │   └── sidebar
│   │       ├── sidebar.component.html
│   │       ├── sidebar.component.ts
│   │       └── sidebar.module.ts
│   ├── assets
│   │   ├── css
│   │   ├── fonts
│   │   ├── img
│   │   └── scss
│   │       ├── paper-dashboard
│   │       └── paper-dashboard.scss
│   ├── environments
│   ├── favicon.ico
│   ├── index.html
│   ├── main.ts
│   ├── polyfills.ts
│   ├── styles.css
│   ├── test.ts
│   ├── tsconfig.app.json
│   ├── tsconfig.spec.json
│   └── typings.d.ts
├── tsconfig.json
└── tslint.json
```

## Browser Support

At present, we officially aim to support the last two versions of the following browsers:

<img src="https://s3.amazonaws.com/creativetim_bucket/github/browser/chrome.png" width="64" height="64"> <img src="https://s3.amazonaws.com/creativetim_bucket/github/browser/firefox.png" width="64" height="64"> <img src="https://s3.amazonaws.com/creativetim_bucket/github/browser/edge.png" width="64" height="64"> <img src="https://s3.amazonaws.com/creativetim_bucket/github/browser/safari.png" width="64" height="64"> <img src="https://s3.amazonaws.com/creativetim_bucket/github/browser/opera.png" width="64" height="64">

## Resources

- Demo: https://demos.creative-tim.com/paper-dashboard-angular/#/dashboard
- Download Page: https://www.creative-tim.com/product/paper-dashboard-angular
- Documentation: https://demos.creative-tim.com/paper-dashboard-angular/#/documentation/tutorial
- License Agreement: https://www.creative-tim.com/license
- Support: https://www.creative-tim.com/contact-us
- Issues: [Github Issues Page](https://github.com/creativetimofficial/paper-dashboard-angular/issues)

## Reporting Issues

We use GitHub Issues as the official bug tracker for the Paper Dashboard Angular. Here are some advices for our users that want to report an issue:

1. Make sure that you are using the latest version of the Paper Dashboard Angular. Check the CHANGELOG from your dashboard on our [website](https://www.creative-tim.com/).
2. Providing us reproducible steps for the issue will shorten the time it takes for it to be fixed.
3. Some issues may be browser specific, so specifying in what browser you encountered the issue might help.

## Technical Support or Questions

If you have questions or need help integrating the product please [contact us](https://www.creative-tim.com/contact-us) instead of opening an issue.

## Licensing

- Copyright 2019 Creative Tim (https://www.creative-tim.com)
- Licensed under MIT (https://github.com/creativetimofficial/paper-dashboard-angular/blob/master/LICENSE.md)

## Useful Links

More products from Creative Tim: <https://www.creative-tim.com/products>

Tutorials: <https://www.youtube.com/channel/UCVyTG4sCw-rOvB9oHkzZD1w>

Freebies: <https://www.creative-tim.com/products>

Affiliate Program (earn money): <https://www.creative-tim.com/affiliates/new>

Social Media:

Twitter: <https://twitter.com/CreativeTim>

Facebook: <https://www.facebook.com/CreativeTim>

Dribbble: <https://dribbble.com/creativetim>

Google+: <https://plus.google.com/+CreativetimPage>

Instagram: <https://instagram.com/creativetimofficial>
