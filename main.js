var hexaDemo5,
			set = [
				{
					value: 'A',
					style: {
						backgroundColor: '#e67e22'
					}
				},
				{
					value: 'D',
					style: {
						backgroundColor: '#1ABC9C'
					}
				},
				{
					value: 'E',
					style: {
						backgroundColor: '#f1c40f'
					}
				},
				{
					value: 'H',
					style: {
						backgroundColor: '#2ECC71'
					}
				},
				{
					value: 'L',
					style: {
						backgroundColor: '#3498DB'
					}
				},
				{
					value: 'O',
					style: {
						backgroundColor: '#E74C3C'
					}
				},
				{
					value: 'T',
					style: {
						backgroundColor: '#9B59B6'
					}
				}
			];
		document.addEventListener('DOMContentLoaded', function(){
			var submit = document.getElementById('button'),
				output = document.getElementById('output');
			hexaDemo5 = new HexaFlip(document.getElementById('hotel'),
				{set1: set, set2: set, set3: set, set4: set, set5: set},
				{fontSize: 50, margin: 4, perspective: 1000}
			);
			submit.addEventListener('click', function(){
				if(hexaDemo5.getValue().join(' ') === 'H O T E L'){
					alert('correct');
				}else{
					hexaDemo5.flip();
					hexaDemo5.flip();
					hexaDemo5.flip();
					hexaDemo5.flip();
					hexaDemo5.flip();
					hexaDemo5.flip();
					hexaDemo5.flip();
					hexaDemo5.flip();
					alert('wrong')
				}
			}, false);
		}, false);