<?php
/**
 * Componente text
 */

class clock extends base_component implements components_interface {

	public function gen_content() : string {
		$html = '';

		$date = new DateTime("now", new DateTimeZone( $this->cfg( 'contenido', 'timezone' ) ) );
		ob_start();
		?>
		<script type="text/javascript">
			function generate_clock(container){
			    var now = new Date( '<?=$date->format('Y-m-d H:i:s')?>' );
			    console.log(now);
			    //var now = changeTimezone(tz, "<?=$this->cfg( 'contenido', 'timezone' )?>");
			    //.toLocaleString("es-ES", {timeZone: "<?=$this->cfg( 'contenido', 'timezone' )?>"})
			    container.append('<span class="clock"><span class="h">'+now.getHours()+'</span>:<span class="m">'+now.getMinutes()+'</span>:<span class="s">'+now.getSeconds()+'</span></span>');
			    
			    if(window['clock_defined'] === undefined || clock_defined !== true){
			        window['t'+Math.floor(Math.random() * 2000)] = setInterval("clock()",1000);
			        clock_defined = true; 
			    }
			}

			generate_clock( $('.component[data-component="<?=$this -> component_id?>"] .dt-card__body') );
		</script>
		<?php
		$html = ob_get_contents();
		ob_end_clean();

		return $html;
	}
}