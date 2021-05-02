hexo.extend.generator.register('_tags', function(locals) {
  return {
    path  : 'tags/index.html',
    data  : locals.theme,
    layout: 'tags'
  };
});

hexo.extend.generator.register('_404', function(locals) {
  return {
    path  : '404.html',
    data  : locals.theme,
    layout: '404'
  };
});
