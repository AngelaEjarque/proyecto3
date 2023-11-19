
# proyecto3
Mastermind
# Indice
-Estructura</br>
-Explicación del juego</br>
-Mejoras pendientes</br>
-Información de contacto</br>


# Explicación del juego

<p>El juego Mastermind consiste en adivinar la combinación correcta de colores tanto en posición como en color, antes de que se acaben las rondas </br>
    El mismo color se puede repetir en más de una celda y por lo tanto puede no existir uno de los colores en la combinación</br>
    Para comenzar el juego, introducimos un Nickname que se guardará siempre que no volvamos al index. </br>
    Seleccionamos los colores con los que vamos a jugar y posteriormente será llevado al tablero de juego, donde tendremos 10 rondas para acertar la combinación</br>
    Introducimos la combinación que creemos ganadora cliqueando en el color elegido y posteriormente cliqueando de nuevo en la primera fila<strong>de abajo a arriba</strong> dependiendo de en qué ronda nos encontremos.</br>Para comprobar si hemos acertado, hacemos click en el botón "check".</br>
    A la derecha del tablero tenemos unos círculos más pequeños que nos indican en qué estado tenemos nuestra combinación, teniendo en cuenta:</br>
    </br> -El color <strong>morado </strong> significa que hemos acertado color y posición.</br>
    -El color <strong>blanco </strong> significa que el color se encuentra en la combinación ganadora pero no está colocado en la posición correcta.</br>
    <strong>-Si se muestra transparente,</strong> significa que el color no se encuentra en la combinación ganadora.  
</p>

# Estructura
<h1>Pantalla de inicio: Mastermind</h1> 
Podemos acceder a las reglas del juego o jugar directamente depende de qué botón pulsemos.</br>
En la pantalla "PLAY" nos solicita un Nombre de jugador</br> 

![nickname](https://github.com/AngelaEjarque/proyecto3/assets/147879332/68919438-b738-4674-8345-2f658b4c01cb)

La siguiente pantalla nos lleva a la selección de color mediante los botones pequeños en los que podemos elegir los colores con los que queremos jugar.</br>

![choose](https://github.com/AngelaEjarque/proyecto3/assets/147879332/f54efa1b-b64d-4dcb-9d11-1f49e2c08d19)

Si continuamos por el botón play, nos encontramos con el tablero de juego, que tiene la siguiente estructura</br>
-A la izquierda se muestran los colores seleccionado</br>
-A su derecha se encuentran las celdas donde iremos introduciendo las combinaciones</br>
-A la derecha del todo, se encuentran los circulos pequeños en los que encontraremos el feedback de nuestra selección</br>

![board](https://github.com/AngelaEjarque/proyecto3/assets/147879332/d6f83086-3c6c-4a71-a9a7-266a6bb222f9)

Tras el chequeo de las rondas veremos algo como esto, con los criterios de color mencionados en la explicación del juego</br>

![check](https://github.com/AngelaEjarque/proyecto3/assets/147879332/e919d787-d3c2-4224-9fe8-163c79804edb)

Si conseguimos adivinar nos lleva a WIN y si se acaban las rondas y no lo adivinamos, nos lleva a LOOSE en los cuales se muestra el nombre inicialmente introducido. Si queremos seguir jugando, desde el botón "play again" nos respeta el nombre introducido y tras seleccionar nuevos colores, se repite el juego con una combinación nueva.
![win](https://github.com/AngelaEjarque/proyecto3/assets/147879332/60f9c9c7-014c-4936-9db4-0f30a5d08244)
![loose](https://github.com/AngelaEjarque/proyecto3/assets/147879332/a6247065-760d-4382-994d-a423899c61f4)

# Mejoras pendientes
-Incluir dos niveles de dificultad más</br>
-Arreglar responsive en pantallas pequeñas para la página "colorselect.html"</br>
-el tablero de juego en pantallas pequeñas es bastante incómodo, en un futuro sería interesante pensar en otra disposición más cómoda.

# Información de contacto
>Ángela Ejarque Sánchez --> https://github.com/AngelaEjarque







