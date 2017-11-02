// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.

export const environment = {
  production: false,
    // http://localhost:3100/products/A123
    // http://localhost:3100/customers/0777123456
    // http://localhost:3100/ranges
    producturl : 'http://demo4262934.mockable.io/products',
    weighturl : 'http://demo4262934.mockable.io/weight',
    itemtrending : 'http://demo4262934.mockable.io/trending'
};
