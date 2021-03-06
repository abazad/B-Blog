$(document).ready(function()
{
	defaultURL = window.location.href;

	linkajax('body');

	$( document ).ajaxError(function(){
			alert('خطایی رخ داده است. ممکن است با بارگذاری دوباره صفحه مشکل حل شود.');
	});

	window.onpopstate = function(e){
		if(e.state!=null)
			var url = e.state.url;
		else
			var url = defaultURL;

		$.post(url,{A:'A'}).done(function(d){
			$('.main').html(d);
			get_text();
			linkajax();
			window.scrollTo(0,0);
		})
	};

});

function pagereload(){
	$.post(window.location.href,{A:'A'}).done(function(d){
		$('.main').html(d);
		get_text();
		linkajax();
		//window.scrollTo(0,0);
	})
}

function get_text(){
	$.get('get_text.php?A').done(function(d){
		$('.toptext>span').html(d);
	});
}

function linkajax(slct='.main')
{
	$(slct+' a:not([na])').click(function(e){
		e.preventDefault();

		$.post($(this)[0].href,{A:'A'})
			.done(function(rspns){
				window.history.pushState({'url':this.url},null,this.url);
				$('.main').html(rspns);
				get_text();
				linkajax();
				window.scrollTo(0,0);
			})
	});
}

function login(){
	var user = $('.logreg #user').val();
	var pass = $('.logreg #pass').val();

	$.post('login.php',{USER:user,PASS:pass})
		.done(function(d){
			switch (d) {
				case '200':
					$.get(window.location.href).done(function(d){
						$('body').html( d.split('<body>')[1].split('</body')[0] );
						linkajax('body');
						window.scrollTo(0,0);
					});
					break;
				case '2':
					alert('نام کاربری یا گذرواژه نادرست است');
					break;
				default:
					alert('مشکلی پیش آمده');
			}
		});
}

function logout(){
	$.get('login.php?OUT').done(function(){
		$.get(window.location.href).done(function(d){
			$('body').html(d);
			linkajax('body');
			window.scrollTo(0,0);
		});
	});
}




function sendcmt(pid){
	var name = $('.sendcmt #name').val();
	var mail = $('.sendcmt #email').val();
	var web = $('.sendcmt #website').val();
	var cmt = $('.sendcmt #comment_text').val();

	$.post('comment.php?A',{PID:pid,NAME:name,EMAIL:mail,WEB:web,CMT:cmt})
		.done(function(d){
			switch (d) {
				case '200':
					pagereload();
					break;
				case '0':
					alert('اطلاعات ارسال شده کامل نیست.');
					break;
				case '1':
					alert('پست مورد نظر پیدا نشد.');
					break;
				case '2':
					alert('طول مجاز نام میبایست کمتر از ۵۰ کاراکتر باشد.');
					break;
				case '3':
					alert('ایمیل وارد شده معتبر نیست.');
					break;
				case '4':
					alert('آدرس وبسایت وارد شده معتبر نیست.');
					break;
				case '5':
					alert('حداکثر طول مجاز برای دیدگاه ۱۰۰۰ کاراکتر میباشد.');
					break;
				default:
					alert('مشکلی پیش آمده');
			}
		});
}
