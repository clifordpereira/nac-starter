// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2025-07-15',
  devtools: { enabled: true },
  modules: [
    '@nuxthub/core',
    'nuxt-auto-crud'
  ],
  hub: {
    db: 'sqlite'
  },
  // default autoCrud config
  autoCrud: {
    realtime: false, // set it to true if you want to enable realtime updates
    auth: {
      authentication: false, // set it to true when you use authentication
      authorization: false, // set it to true when you use authorization
      ownerKey: 'createdBy', // change it if and only if you use different key for owner
    },
    // when authentication is enabled, and you want to make some resources public
    publicResources: {
      users: ['id', 'name', 'email'] // use blank array to make all fields public
    }, 
    apiHiddenFields: ['password'], // Hide the fields which you don't want to expose in API response
    formHiddenFields: ['password'], // Hide the fields which you don't want user to edit
    agenticToken: '', // If you want to use 'api/_nac/_meta' for agentic usage, set a 32+ character token here
    nacEndpointPrefix: '/api/_nac', // don't change it yourself. You can use `nacEndpointPrefix` to hit nac endpoints
    schemaPath: 'server/db/schema', // change it if and only if nuxt team changes the default schema path
  },
})
