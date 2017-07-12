var merklin = {
	pageHeight: $(window).height(),
	init: function() {
		
		merklin.flexy();
		merklin.events();
		
	},
	events: function() {
		$('.menu-arrow').on('click', merklin.leftSideBar);
		$('article').on('click', merklin.mainSLider);
	},
	flexy: function() {
		$('.side-menu').height(merklin.pageHeight);
	},
	leftSideBar: function() {
		if($('.menu-arrow').hasClass('open-menu')) {
			TweenLite.to($('.side-menu'), .3, {left: 0});
			TweenLite.to($(this), .3, {left : 175, rotation : "-180",
				onComplete: function() {

					$('.menu-arrow').removeClass('open-menu');
				}
			});		
		}
		else {
			TweenLite.to($('.side-menu'), .3, {left: '-220px'});
			TweenLite.to($(this), .3, {left : 10, rotation : "0",
				onComplete: function() {
					
					$('.menu-arrow').addClass('open-menu');
				}
			});	
		}
	},
	mainSLider: function() {
		if ($(this).hasClass('article-2')) {
			TweenLite.to($('article.article-1'), 1.5, {width:"100%", left: "0"});
		}
		else {
			TweenLite.to($(this), 1.5, {width:"0%", left: "50%"});
		}
		
		TweenLite.to($('.curtain'), .75, {left:"0px",
			onComplete: function() {
				TweenLite.to($('.curtain'), .75, {left:"-220px"})
			}
		});
	}
}
