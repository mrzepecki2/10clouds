
$(document).ready(function(){

 	validate();
 	left();
 	container_position();

	$('.form-right-inner').addClass('hidden-2');
	$('.form-left-inner').addClass('hidden-2');

	$('.bg-1').css({transform: 'scale(1.1)',});
	$('.bg-2').css({bottom: '0px', right: '0px',});


	$('.form-left-inner').delay(1000).show( 'slide', { direction: 'right' }, 500 , function(){
		//1.5
		$('.form-right-inner').show( 'slide', { direction: 'left' }, 500 ,function(){
			//2
			$('.form-side-nav').show();
			if ($(window).width() < 767)
			{
				$('.submit-form').delay(500).fadeIn(500);//2.5
			}
			else
			{
				$('.submit-form').delay(500).show( 'slide', { direction: 'left' }, 500 );//2.5
			}
			$('.submit-right').delay(500).queue(function (next) { 
				//3
				$(this).addClass('submit-right-final');  //3 + 1

				next();
		  	});
		  	$('.submit-right span').delay(2000).fadeIn(500);

		});
		$('.form-right-header h2').show( 'slide', { direction: 'left' }, 500 );
		$('.added-line').each(function(){
			$(this).show( 'slide', { direction: 'left' }, 500 );  
		});
	}); 


	$('label.gender input').change(function(){
		if(!$(this).hasClass('active-radio'))
		{
			$('label.gender').each(function(){
				$(this).removeClass('active-radio');
			})
			$(this).parent('label.gender').addClass('active-radio');
		}
	})


});

function validate() {
	$('.submit-form').on('click', function(){
		$('#submit-hidden').click();
	})
}


function left()
{
	
	block_resize();
	var height_inner = $('.form-right-inner').height();
	lines(height_inner, 18);
	$('.form-left-inner').on('resize orientationchange', function(){
		block_resize();
	})
}

function lines(height, line_number)
{

	var margin = (parseInt(height / line_number) -2) / height * 100; //minus wysokość
	for (var i = 0 ; i <= line_number; i++) {
		var left = randomInt(1,6);
		var right = randomInt(6,9);
		if(left>right){
			left = [right, right = left][0];
		}
		if(left==right){
			right++;
		}
		$div =  "<div class='added-line' data-start="+left+" data-finish="+right+" style='top:"+margin*i+"%'></div>";
		$( ".form-left-inner" ).append($div);
	}

	var colors =['#531fc0', '#1cd4a3','#ffffff'];
	var last_i = colors.length+1;
	$('.added-line').each(function(){
    	do {
		    var current_i = parseInt(Math.floor(Math.random()*colors.length+1));
		}
		while (current_i == last_i);
		last_i = current_i;

		$(this).css('background-color', colors[current_i-1]);
		var left = $(this).data("start") * 10;
		var width = $(this).data("finish") * 10  - left ;

		$(this).css('margin-left', left +'%');
		$(this).css('width', width +'%');
		
	})
}

function block_resize()
{
	var height_full = $('.form-right-inner').outerHeight();
	var height_inner = $('.form-right-inner').height();
	var padding = (height_full - height_inner)/2;
	$('.form-left-inner').height(height_inner);
}

function container_position(){

	if($('#main-form .container').height() < $(window).height())
	{
		$('#main-form .container').addClass('container-center');
	}

	$(window).on('load resize orientationchange', function(){
		
		if($('#main-form .container').height() < $(window).height())
		{

			$('#main-form .container').addClass('container-center');
		}
		else
		{
			$('#main-form .container').removeClass('container-center');
		}
	})

	}

function randomInt(min,max)
{
    return Math.floor(Math.random()*(max-min+1)+min);
}


	