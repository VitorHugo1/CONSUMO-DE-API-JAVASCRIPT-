fetch('https://api.sheety.co/30b6e400-9023-4a15-8e6c-16aa4e3b1e72')
.then(function(response) {
	/*console.log(response)*/
  return response.json();
})
.then(function(myjson) {
  /*console.log(myjson)*/
  gerarhtml(myjson);
});




function gerarhtml(response) {
    var html = ""
	response.forEach(function(item){
		
        html +=
`<li class="quarto">
   <div class="t">
	<img class="quarto-imagem" src="${item.photo}" >
   </div>
			<h2>
			${item.property_type}
			</h2>
		<div>
			<span>${item.name}</span>
			<p>${item.price}/noite</p>
		</div>
</li>`
 });
 console.log(html)

   document.getElementById('container').innerHTML = html
}