var merklin = {
	pageHeight: $(window).height(),
	pageWidth: $(window).width(),
	init: function() {
		
		merklin.flexy();
		merklin.events();
		merklin.wrapSizes();	

		$(window).resize(function() {
			merklin.pageWidth = $(window).width();
			merklin.pageHeight = $(window).height();
			merklin.init();
		});
		

	},
	events: function() {
		$('.menu-arrow').on('click', merklin.leftSideBar);
		$('article').on('click', merklin.mainSLider);
		$('.side-menu .read-more').on('click', merklin.goToReview);
		$('.back-to-main').on('click', merklin.goToMain);
	},
	flexy: function() {
		$('.side-menu').height(merklin.pageHeight);
	},
	leftSideBar: function() {
		if($('.menu-arrow').hasClass('open-menu')) {
			TweenLite.to($('.side-menu'), .3, {left: 0});
			TweenLite.to($(this), .3, {left : 175, rotation : "0",
				onComplete: function() {

					$('.menu-arrow').removeClass('open-menu');
				}
			});		
		}
		else {
			TweenLite.to($('.side-menu'), .3, {left: '-220px'});
			TweenLite.to($(this), .3, {left : 10, rotation : "180",
				onComplete: function() {
					
					$('.menu-arrow').addClass('open-menu');
				}
			});	
		}
	},
	mainSLider: function() {
		if ($(this).hasClass('article-3')) {
			TweenLite.to($('article.article-1'), 1.5, {left: 0});
			TweenLite.to($('article.article-2'), 1.5, {left: 0});
		}
		else {
			TweenLite.to($(this), 1.5, {left:  - merklin.pageWidth});
		}
		
		TweenLite.to($('.side-menu .curtain'), .75, {left:"0px",
			onComplete: function() {
				TweenLite.to($('.side-menu .curtain'), .75, {left:"-220px"})
			}
		});
	},
	goToReview: function() {
		TweenLite.to($('.article-review .curtain'), .75, {left: merklin.pageWidth - 320,
			onComplete: function() {
				TweenLite.to($('.article-review .curtain'), 1.25, {left: merklin.pageWidth, delay: .5,
					onComplete: function() {
						//TweenLite.to($('.article-review .curtain'), 1, {left: merklin.pageWidth})
					}
				});
			}
		});
		TweenLite.to($('section.article-review'), .75, {left: 0});
	},
	goToMain: function() {
		TweenLite.to($('.article-review .curtain'), .75, {left: merklin.pageWidth - 320,
			onComplete: function() {
				TweenLite.to($('section.article-review'), .75, {left: - merklin.pageWidth});
				TweenLite.to($('.article-review .curtain'), 1, {left: merklin.pageWidth,
					onComplete: function() {
						$('.article-review .curtain').css('left', - 320);
					}
				});
			}
		});
	},
	wrapSizes: function() {
		$('.article-review').css('left', - merklin.pageWidth);
		$('.article-review article.text').css('width', merklin.pageWidth - 320);
	}
}
