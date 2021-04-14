function changeTimezone(date, ianatz) {

				  // suppose the date is 12:00 UTC
				  var invdate = new Date(date.toLocaleString('es-ES', {
				    timeZone: ianatz
				  }));

				  // then invdate will be 07:00 in Toronto
				  // and the diff is 5 hours
				  var diff = date.getTime() - invdate.getTime();

				  // so 12:00 in Toronto is 17:00 UTC
				  return new Date(date.getTime() + diff);

				}

				function clock(){
				    $('.clock').each(function(){
				        var h = parseInt($(this).find('.h').html(),10);
				        var m = parseInt($(this).find('.m').html(),10);
				        var s = parseInt($(this).find('.s').html(),10);
				        
				        s++;
				        if(s == 60){
				            s=0;
				            m++;
				        }
				        if(m == 60){
				            m=0;
				            h++;
				        }
				        if(h == 24){
				            h=0;
				        }
				        
				        if(s < 10){
				            $(this).find('.s').html('0'+s);
				        }else{
				            $(this).find('.s').html(s);
				        }
				        if(m < 10){
				            $(this).find('.m').html('0'+m);
				        }else{
				            $(this).find('.m').html(m);
				        }
				        if(h < 10){
				            $(this).find('.h').html('0'+h);
				        }else{
				            $(this).find('.h').html(h);
				        }
				    });
				}