# Prueba-Roommates

## Competencias 

- Manipular archivos con File System
- Manejar errores
- Construir una API RESTful
- Manejar códigos de estado HTTP
- Utilizar paquetes de npm

## Requerimientos

- Ocupar el módulo File System para la manipulación de archivos alojados en el
servidor
- Capturar los errores para condicionar el código a través del manejo de excepciones.
- El botón “Agregar roommate” de la aplicación cliente genera una petición POST (sin
payload) esperando que el servidor registre un nuevo roommate random con la API
randomuser, por lo que debes preparar una ruta POST /roommate en el servidor que
ejecute una función asíncrona importada de un archivo externo al del servidor (la
función debe ser un módulo), para obtener la data de un nuevo usuario y la acumule
en un JSON (roommates.json).
- El objeto correspondiente al usuario que se almacenará debe tener un id generado
con el paquete UUID.
- Crear una API REST que contenga las siguientes rutas: GET / POST / PUT / DELETE
- Se debe considerar recalcular y actualizar las cuentas de los roommates luego de
este proceso.
- Devolver los códigos de estado HTTP correspondientes a cada situación.
- Enviar un correo electrónico a todos los roommates cuando se registre un nuevo
gasto. 
- Se recomienda agregar a la lista de correos su correo personal para verificar
esta funcionalidad. (Opcional)
