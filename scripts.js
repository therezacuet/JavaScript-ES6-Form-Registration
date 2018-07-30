			(function() {
				function toJSONString( form ) {
					var obj = {};
					var elements = form.querySelectorAll( "input, select, textarea" );
					for( var i = 0; i < elements.length; ++i ) {
						var element = elements[i];
						var name = element.name;
						var value = element.value;

						if( name ) {
							obj[ name ] = value;
						}
					}

					return JSON.stringify( obj );
				}

				document.addEventListener( "DOMContentLoaded", function() {
					var form = document.getElementById( "myForm" );
					var response = document.getElementById("response");

					form.addEventListener( "submit", function( e ) {
						e.preventDefault();
						var json = toJSONString( this );

						var xhr = new XMLHttpRequest();
						xhr.withCredentials = false;

						xhr.addEventListener("readystatechange", function () {
					  		if (this.readyState === 4) {
					    		console.log(this.responseText);
					    		response.innerHTML=this.responseText;
					    		form.reset();
					  		}	
						});

						xhr.open("POST", "http://filminsane.website/api/testing_post");
						xhr.setRequestHeader("content-type", "application/json");
						xhr.setRequestHeader("cache-control", "no-cache");
						
						xhr.send(json);
						//console.log(json);

					}, false);

				});

			})();
