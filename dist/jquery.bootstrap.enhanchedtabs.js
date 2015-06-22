/*! Enhanched Bootstrap Tabs - v0.1.0 - 2015-06-21
* https://github.com/SubZane/bootstrap.enhanchedtabs
* Copyright (c) 2015 Andreas Norman; Licensed MIT */
var enhanchedtabs = {
	init: function () {
		var hash = window.location.hash;

		if (hash.length > 0) {
			window.history.pushState(hash, '', hash);
			enhanchedtabs.hashChange(hash);
		}

		$('[data-enhanchedtoggle]').on('click', '', function (e) {
			e.preventDefault();
			var tabId = $(this).attr('href');

			$(this).parent().parent().find('li').removeClass('active');
			$(this).parent().addClass('active');

			window.history.pushState(tabId, '', tabId);
			enhanchedtabs.openTab(tabId);
		});

		// Change tab on history back/forward
		$(window).on('popstate', function(event) {
			var hash = window.history.state;
			//console.log(hash);
			if (hash === null) {
				hash = $('[data-default="true"]').attr('href');
			}
			enhanchedtabs.hashChange(hash);
		});

	},

	hashChange: function(hash) {
		//console.log('hashChange: ' + hash);
		$('[data-enhanchedtoggle][href="'+hash+'"]').parent().parent().find('li').removeClass('active');
		$('[data-enhanchedtoggle][href="'+hash+'"]').parent().addClass('active');
		enhanchedtabs.openTab(hash);
	},

	openTab: function (hash) {
		$(hash).parent().find('div').removeClass('active');
		if ($(hash).attr('data-ajax')) {
			$(hash).load($(hash).data('ajax'), function() {
				$(hash).addClass('active');
			});
		} else {
			$(hash).addClass('active');
		}
	}
};
enhanchedtabs.init();
