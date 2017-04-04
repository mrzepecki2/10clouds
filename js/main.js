
$(document).ready(function(){

 	validate();
 	left();
 	container_position();

 	

 	

 	$('.form-right-inner').css({display: 'none',});
    $('.form-left-inner').css({display: 'none',});


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
				$(this).css('transform', 'scale(1)');  //3 + 1
				next();
		  	});
		  	$('.submit-right span').delay(2000).fadeIn(500);

		});
		$('.form-right-header h2').show( 'slide', { direction: 'left' }, 500 );
		$('.added_line').each(function(){
			$(this).show( 'slide', { direction: 'left' }, 500 );  
		});
	}); 


	$('label.gender input').change(function(){
		if(!$(this).hasClass('active_radio'))
		{
			$("label.gender").each(function(){
				$(this).removeClass('active_radio');
			})
			$(this).parent('label.gender').addClass('active_radio');
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
	lines($height_inner, 18);
	$('.form-left-inner').on('resize orientationchange', function(){
		block_resize();
	})
}

function lines($height, $line_number)
{

	$margin = (parseInt($height / $line_number) -2) / $height * 100; //minus wysokość
	for (var i = 0 ; i <= $line_number; i++) {
		$left = randomInt(1,6);
		$right = randomInt(6,9);
		if($left>$right){
			$left = [$right, $right = $left][0];
		}
		if($left==$right){
			$right++;
		}
		$div =  "<div class='added_line' data-start="+$left+" data-finish="+$right+" style='top:"+$margin*i+"%'></div>";
		$( ".form-left-inner" ).append($div);
	}

	$colors =['#531fc0', '#1cd4a3','#ffffff'];
	$last_i = $colors.length+1;
	$('.added_line').each(function(){
    	do {
		    $current_i = parseInt(Math.floor(Math.random()*$colors.length+1));
		}
		while ($current_i == $last_i);
		$last_i = $current_i;

		$(this).css('background-color', $colors[$current_i-1]);
		$left = $(this).data("start") * 10;
		$width = $(this).data("finish") * 10  - $left ;

		$(this).css('margin-left', $left +'%');
		$(this).css('width', $width +'%');
		
	})
}

function block_resize()
{
	$height_full = $('.form-right-inner').outerHeight();
	$height_inner = $('.form-right-inner').height();
	$padding = ($height_full - $height_inner)/2;
	$('.form-left-inner').height($height_inner);
}

function container_position(){

	if($("#main-form .container").height() < $(window).height())
	{
		$("#main-form .container").addClass('container_center');
	}

	$(window).on('load resize orientationchange', function(){
		
		if($("#main-form .container").height() < $(window).height())
		{

			$("#main-form .container").addClass('container_center');
		}
		else
		{
			$("#main-form .container").removeClass('container_center');
		}
	})

	}

function randomInt(min,max)
{
    return Math.floor(Math.random()*(max-min+1)+min);
}


	