/*
* SERVIDOR WEB :
es cualquier computadora o sistema que procese solicitudes (requests) y que devuelva una respuesta (response) a traves de un protocolo de red(HTTP)
su funcion es recibir pedidos del cliente consultarlas en la BD, procesarlas y devolver una respuesta. se encarga de proveer el contednido de una pag. de aqui el modelo cliente-servidor 

* CRUD : 
create - read - update - delete

* NETWORKS : 
es un conjunto de computadoras que comparten recursos que provienen de distintos nodos. estas computadoras utilizan protocolos comunes de comunicacion sobre interconexion digital para comunicarse entre si 

* ENCAPSULACION : 
se refiere a la técnica de ocultar los detalles internos y complejos de un componente o módulo de software, y proporcionar una interfaz más sencilla y clara para su uso por parte de otros componentes o módulos

* PROTOCOLOS : 
son reglas que permiten una comunicacion mas clara entre el servidor y cliente HTTP es uno de ellos.

modelo TCP/IP           protocolos y servicios              modelo OSI
aplicacion              http, fttp, telnet, etc       aplicacion - presentacion - sesion
transporte              tcp, udp                            transporte
red                     ip, arp, icmp, igmp                   red
interface de red        ethernet                          data link, fisico

* FORMATO DE RESPUESTAS : 
vimos las distinatas formas en las que podemos enviar respuestas al cliente: texto plano, HTML, y JSON

* HTTP :
un socket es un endpoint que lleva la comunicacion bilateral entre programas en la red 

* SERVER BASICO :
1 importamos el modulo http para poder trabajar con el protocolo
2 creamos un event listener que escucha por request
3 para dar una response comenzamos escribiendo el header. agregamos el status code e info
4 especificamos el puerto y direccion al que estaremos escuchando 

* REST : 
es una arquitectura o forma de diseñar el servidor de una aplicacion web. esta basada en la forma de HTTP que es un protocolo que usamos comunmente

*/