(function($){
	var defaultData = {
		current : 1,//当前页
			all : 10,//数据总数
			current:1,
			nextBtnName:'下一页',
			preBtnName:'上一页',
			callback:function(){//回调函数

			}
	}
	//插件名称
	$.fn.Pagination = function(options){
		var _this_ = this;
		//覆盖默认参数
		var opts = $.extend(defaultData,options);
		return this.each(function(){
			var $el = $(this);
			var allNum = opts.all;
			var activeClass = opts.activeClassName; 
			//初始化布局
			var currentStr = '<li class="cur"><a href="javascript:" >第'+opts.current+'页/共'+opts.all+'页</a></li>';
			var nextBtnStr = '<li class="next btn"><a href="javascript:" >'+opts.nextBtnName+'</a></li>';
			var preBtnStr = '<li class="pre btn"><a href="javascript:" >'+opts.preBtnName+'</a></li>';
			var contentStr = '<ul class="pagingUl">' +  preBtnStr  + currentStr + nextBtnStr + '</ul>';

			$el.html(contentStr);
			$el.on('click','.next',function(){
				if(opts.current === opts.all){
					console.log('----最后一页啦——————')
				}else{
					opts.current ++;
					opts.callback(opts.current);
					pageLayout();
				}
				pageLayout()
			});

			$el.on('click','.pre',function(){
				if(opts.current === 0){
					console.log('--一前面没有啦——————')
				}else{
					opts.current --;
					opts.callback(opts.current);
					pageLayout();
				}

			});

			//重新渲染结构
			function pageLayout(){
			 	currentStr = '<li class="cur"><a href="javascript:" >第'+opts.current+'页/共'+opts.all+'页</a></li>';
				 nextBtnStr = '<li class="next btn"><a href="javascript:" >'+opts.nextBtnName+'</a></li>';
				 preBtnStr = '<li class="pre btn"><a href="javascript:" >'+opts.preBtnName+'</a></li>';
				contentStr = '<ul class="pagingUl">' +  preBtnStr  + currentStr + nextBtnStr + '</ul>';
				$el.html(contentStr);
			}

		});

	}
})(jQuery);