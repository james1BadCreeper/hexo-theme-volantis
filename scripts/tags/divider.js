/*
 * divider v1 | https://github.com/james1BadCreeper/hexo-theme-volantis
 *
 * {% divider [name] %}
 */

'use strict';

hexo.extend.tag.register('divider', function(args) {
  const config = hexo.theme.config.tag_plugins.divider.source;
  let name = args[0].trim(), url;
  var el = '<img class="divider"';
  if (name == undefined) url = config["default"];
  else url = config[name];
  el += ' src="' + url + '"';
  if (hexo.theme.config.tag_plugins.divider.width)
    el += ' style="width:' + hexo.theme.config.tag_plugins.divider.width + '"';
  el += '/>';
  return el;
});
