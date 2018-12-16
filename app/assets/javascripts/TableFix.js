/*
 * jQuery TableFix plugin ver 1.0.1
 * Copyright (c) 2010 Otchy
 * This source file is subject to the MIT license.
 * http://www.otchy.net
 */
(function($){
	$.fn.tablefix = function(options) {
		return this.each(function(index){
			// 蜃ｦ逅�ｶ咏ｶ壹�蛻､螳�
			var opts = $.extend({}, options);
			var baseTable = $(this);
			var withWidth = (opts.width > 0);
			var withHeight = (opts.height > 0);
			if (withWidth) {
				withWidth = (opts.width < baseTable.width());
			} else {
				opts.width = baseTable.width();
			}
			if (withHeight) {
				withHeight = (opts.height < baseTable.height());
			} else {
				opts.height = baseTable.height();
			}
			if (withWidth || withHeight) {
				if (withWidth && withHeight) {
					opts.width -= 40;
					opts.height -= 40;
				} else if (withWidth) {
					opts.width -= 20;
				} else {
					opts.height -= 20;
				}
			} else {
				return;
			}
			// 螟夜Κ div 縺ｮ險ｭ螳�
			baseTable.wrap("<div></div>");
			var div = baseTable.parent();
			div.css({position: "relative"});
			// 繧ｹ繧ｯ繝ｭ繝ｼ繝ｫ驛ｨ繧ｪ繝輔そ繝�ヨ縺ｮ蜿門ｾ�
			var fixRows = (opts.fixRows > 0) ? opts.fixRows : 0;
			var fixCols = (opts.fixCols > 0) ? opts.fixCols : 0;
			var offsetX = 0;
			var offsetY = 0;
			baseTable.find('tr').each(function(indexY) {
				$(this).find('td,th').each(function(indexX){
					if (indexY == fixRows && indexX == fixCols) {
						var cell = $(this);
						offsetX = cell.position().left;
						offsetY = cell.parent('tr').position().top;
						return false;
					}
				});
				if (indexY == fixRows) {
					return false;
				}
			});
			// 繝��繝悶Ν縺ｮ蛻�牡縺ｨ蛻晄悄蛹�
			var crossTable = baseTable.wrap('<div></div>');
			var rowTable = baseTable.clone().wrap('<div></div>');
			var colTable = baseTable.clone().wrap('<div></div>');
			var bodyTable = baseTable.clone().wrap('<div></div>');
			var crossDiv = crossTable.parent().css({position: "absolute", overflow: "hidden"});
			var rowDiv = rowTable.parent().css({position: "absolute", overflow: "hidden"});
			var colDiv = colTable.parent().css({position: "absolute", overflow: "hidden"});
			var bodyDiv = bodyTable.parent().css({position: "absolute", overflow: "auto"});
			div.append(rowDiv).append(colDiv).append(bodyDiv);
			// 繧ｯ繝ｪ繝��鬆伜沺縺ｮ險ｭ螳�
			var bodyWidth = opts.width - offsetX;
			var bodyHeight = opts.height - offsetY;
			crossDiv.width(offsetX).height(offsetY);
			rowDiv
				.width(bodyWidth + (withWidth ? 20 : 0) + (withHeight ? 20 : 0))
				.height(offsetY)
				.css({left: offsetX + 'px'});
			rowTable.css({
				marginLeft: -offsetX + 'px',
				marginRight: (withWidth ? 20 : 0) + (withHeight ? 20 : 0) + 'px'
			});
			colDiv
				.width(offsetX)
				.height(bodyHeight + (withWidth ? 20 : 0) + (withHeight ? 20 : 0))
				.css({top: offsetY + 'px'});
			colTable.css({
				marginTop: -offsetY + 'px',
				marginBottom: (withWidth ? 20 : 0) + (withHeight ? 20 : 0) + 'px'
			});
			bodyDiv
				.width(bodyWidth + (withWidth ? 20 : 0) + (withHeight ? 20 : 0))
				.height(bodyHeight + (withWidth ? 20 : 0) + (withHeight ? 20 : 0))
				.css({left: offsetX + 'px', top: offsetY + 'px'});
			bodyTable.css({
				marginLeft: -offsetX + 'px',
				marginTop: -offsetY + 'px',
				marginRight: (withWidth ? 20 : 0) + 'px',
				marginBottom: (withHeight ? 20 : 0) + 'px'
			});
			if (withHeight) {
				rowTable.width(bodyTable.width());
			}
			// 繧ｹ繧ｯ繝ｭ繝ｼ繝ｫ騾｣蜍�
			bodyDiv.scroll(function() {
				rowDiv.scrollLeft(bodyDiv.scrollLeft());
				colDiv.scrollTop(bodyDiv.scrollTop());
			});
			// 螟夜Κ div 縺ｮ險ｭ螳�
			div
				.width(opts.width + (withWidth ? 20 : 0) + (withHeight ? 20 : 0))
				.height(opts.height + (withWidth ? 20 : 0) + (withHeight ? 20 : 0));
		});
	}
})(jQuery);
