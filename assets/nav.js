(function ($, Symphony) {

	'use strict';
	
	var sels = {
		content: 'ul.content'
	};

	var removeSubnav = function (element) {
		var parent = element.closest('li');
		var link = element.find('a').clone();
		var isActive = parent.hasClass('active');
		var newNode = $('<div/>').append(link).addClass('link');
		if (!!isActive) {
			newNode.addClass('active');
		}
		parent.after(newNode);
		parent.remove();
	};

	var findSoloLinks = function (lists) {
		return lists.filter(function () {
			return $(this).find('li').length === 1;
		});
	};

	var init = function () {
		var nav = window.Symphony.Elements.nav.find(sels.content);
		
		findSoloLinks(nav.find('ul')).each(function () {
			removeSubnav($(this));
		});
	};

	$(init);


})(window.jQuery, window.Symphony);
