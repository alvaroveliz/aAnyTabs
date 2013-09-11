/*
 * jQuery Alvaro's Any Tabs 1.0
 *
 * Copyright (c) 2010 Alvaro Véliz Marín - yo@alvaroveliz.cl
 *
 * Licensed under the MIT license:
 *   http://www.opensource.org/licenses/mit-license.php
 *
 * More info in http://github.com/alvaroveliz/aAnyTabs
 */
(function($){
  $.fn.extend({ 
    aAnyTabs: function(options) {
      var defaults = {
        indexElement : null,
        dataId : '',
        dataElement : 'p',
        onSelect: undefined,
        defaultIndex: 0
      };

      var options = $.extend(defaults, options);
      var self = this;  

      return this.each(function() {
        var o = options;  
        var obj = $(this);
        var _activeTabIndex = parseInt(options.defaultIndex);

        obj.find('a').eq(_activeTabIndex).addClass('current');
        $('#'+options.dataId).children(options.dataElement).hide();
        $('#'+options.dataId).children(options.dataElement).eq(_activeTabIndex).show();

        obj.find('a').each(function(k, item){
          $(item).bind('click', function(){
            obj.find('a.current').each(function(k, item){ $(item).removeClass('current'); });
            $(this).addClass('current');
            $idx = (o.indexElement != null) ? $(item).parents(o.indexElement).index() : $(this).index();
            $('#'+o.dataId).children(o.dataElement).eq(_activeTabIndex).hide();
            $('#'+o.dataId).children(o.dataElement).eq($idx).show();
            _activeTabIndex = $idx;
            typeof options.onSelect==='function' ? options.onSelect(k) : undefined;
          });
        });
      });
    }
  })
})(jQuery);