document.getElementById('vermas').addEventListener('click', function(){
    console.log("Mostrar info sobre las novelas")
    document.getElementById("novelas").innerHTML = "Actualmente estoy escribiendo 3 novelas. El misterio del lago escondido es un policial para jovenes al estilo de los libros de Agatha Christie, donde prima el humor y escenas ridículas de un detective torpe. La segunda y la tercera son ficciones relacionadas entre sí sobre la vida de 2 extraterrestres (Marzic y Venjac) que visitan el planeta Tierra. Están llenos de emoción, sentimientos y una mirada distinta sobre nosotros mismos como humanidad."
})


document.getElementById('ocultar').addEventListener('click', function(){
    document.getElementById("novelas").style.display = 'none'
})

