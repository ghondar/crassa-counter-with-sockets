import counterDuck from 'reducers/counter'

export default async function(req, res, next) {
  if(req.baseUrl.indexOf('.') !== -1 || req.baseUrl.indexOf('api') !== -1 || req.baseUrl.indexOf('static') !== -1) {
    next()
  } else {
    // Get store from locals
    const { store } = res.locals
    // Dispatch a action to change initial state
    await store.dispatch(counterDuck.creators.addCountFromServer())
    // Resave new store
    res.locals.store = store
    // Pass middlerware
    next()
  }
}
