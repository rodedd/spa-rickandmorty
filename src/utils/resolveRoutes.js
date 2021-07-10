const resolveRoutes = (route) => {
  if(route.length <= 3) {
    // let validRoute = route === '/' ? route : '/:id';
    let validRoute = route;
    if(validRoute === '/') 
      return route;
    else
      return '/:id';
  }
  return `/${route}`;
};

export default resolveRoutes;