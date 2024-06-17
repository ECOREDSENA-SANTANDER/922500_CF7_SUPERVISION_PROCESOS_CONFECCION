<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5

    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 1
      h1 Máquinas y herramientas para confección

    p.mb-5(data-aos='fade-right') Después de completar las actividades de trazo y corte, el siguiente paso es la programación de la producción. Esto implica la programación de las máquinas y herramientas, que se encargan de transformar las materias primas cortadas junto con los insumos, en productos terminados. Las máquinas de confección son responsables de unir las piezas cortadas mediante agujas e hilos, y se complementan con accesorios necesarios para llevar a cabo operaciones manuales.
      .row.justify-content-center
        .col-lg-10
          .row.justify-content-center.fondo1.py-4
            .col-lg-11
              figure.mb-5(data-aos='fade-left')
                img(src='@/assets/curso/tema_1/img_2.png', alt='Texto que describa la imagen')

              p(data-aos='fade-right') Estas se pueden clasificar de acuerdo con los sistemas tradicionales de funcionamiento o con tecnologías más recientes, hoy el avance ha sido significativo en los sistemas de las máquinas de coser aprovechando la cuarta revolución industrial, la automatización y el internet de las cosas; es importante, entonces, conocer los equipos tradicionales para confeccionar y las alternativas modernas. Todo esto debe ir articulado con las nuevas maneras y metodologías para producir prendas de vestir. 

              p.mb-5(data-aos='fade-right') Estas máquinas y herramientas realizan funciones específicas para la construcción de las prendas de vestir: unir telas, dobladillar bordes de telas, recubrir de hilo partes de tela, embonar telas, pegar botones, elaborar ojales, fusionar entretelas a telas, voltear piezas entalegadas, hacer costuras de refuerzo, entre otras. 

      .row.mb-5.d-flex.py-4
        .col-lg-8.mb-5(data-aos='fade-right')
          p 
            strong De acuerdo con lo anterior, cada una tiene una función especial, en las plantas de confección se utilizan estos elementos con las siguientes funciones:

          .hr.mb-3
          .row.justify-content-center
            .col-lg-11
              .row
                .col-lg-1
                  ul.lista-ul--color
                    li 
                      i.fas.fa-atom
                .col-lg-11
                  p.izq Las máquinas que se ocupan de las costuras utilizan hilos para unir las piezas cortadas o para crear líneas decorativas en la ropa u otros elementos fabricados con tejidos. Al observar una prenda de vestir o artículos para el hogar que han sido intervenidos con costuras, se puede notar que no todas son iguales. Esto se debe a que son manufacturados con una variedad de máquinas que realizan diferentes tipos de costuras.
          .hr.mb-3
          .row.justify-content-center
            .col-lg-11
              .row
                .col-lg-1
                  ul.lista-ul--color
                    li 
                      i.fas.fa-atom
                .col-lg-11
                  p.izq Las herramientas, accesorios, guías y otros instrumentos ayudan en el ensamblaje de piezas. Algunos de estos elementos se adaptan a las máquinas para facilitar las operaciones, mientras que otros se utilizan de manera independiente en operaciones manuales intermedias. Estas operaciones incluyen organizar piezas para la siguiente etapa, marcar posiciones necesarias, recortar sobrantes y unir piezas mediante calor, como el proceso de fusión.
        .col-lg-4(data-aos='fade-left')
          figure
            img(src='@/assets/curso/tema_1/img_3.png', alt='Taller')
            

    separador

    #t_1_1.titulo-segundo.color-acento-contenido
      h2 1.1 Terminología técnica

    p.mb-5(data-aos='fade-right') Para identificar las máquinas y sus partes, repuestos, accesorios, componentes y herramientas, además de los elementos que hacen parte del puesto de trabajo en operaciones de confección, a continuación, se presenta una serie de términos de uso cotidiano en el proceso de confección.  

    TabsB.mb-5(data-aos='fade-left')
      .py-4.py-md-5(titulo="Ajuste" :icono="require('@/assets/curso/tema_1/img_4.svg')")
        p.mb-5 En la industria de la moda hay gran cantidad de diseños en múltiples tejidos y con gran variedad de costuras. En esa parte, las diseñadoras aprovechan todos los avances tecnológicos que en las maquinarias, costuras, guías y aditamentos se han venido implementando. Además, saber combinar textiles, agujas, dientes, pie prensatelas, hilos y demás, es una virtud que se debe tener en cuenta para sacar adelante los proyectos de manera eficiente, a eso se le llama combinación de costura. El ajuste, entonces, se podría definir como los elementos que posee la máquina y que se relacionan de manera directa con los tejidos: aguja, prensatelas, dientes y planchuela. Existen ajustes, livianos, semipesados y pesados que se utilizan de acuerdo con los tejidos que se van a trabajar: telas livianas = ajuste liviano, y así sucesivamente.

        .row.justify-content-center
          .col-lg-6.mb-5
            .titulo-sexto.color-acento-contenido(data-aos='fade-right')
              h5 Figura 1.
              span.text-small Elementos que componen el ajuste: pie prensatelas, dientes, planchuela y agujas
            figure
              img(src='@/assets/curso/tema_1/img_5.png', alt=': La imagen presenta una foto donde se aprecian los diferentes elementos de la máquina de coser que se encuentran en contacto con la tela: pie prénsatelas, dientes, planchuela y agujas. Se aprecia cómo los hilos están enhebrados a través de estos componentes, preparados para iniciar el proceso de costura.')
              figcaption Nota. Tomada de https://pixabay.com/images/id-1737773/
          
      .py-4.py-md-5(titulo="Bobina o canillero" :icono="require('@/assets/curso/tema_1/img_7.svg')")
        p.mb-5 Es una caja o compartimiento donde se colocan los carreteles que contienen el hilo que, al ser contactados con el hilo que trae la aguja, forman la lazada. También se conoce este accesorio con el nombre de #[b canillero], o #[b portabobina.]

        .row
          .col-lg-6.mb-5
            .titulo-sexto.color-acento-contenido(data-aos='fade-right')
              h5 Figura 2.
              span Bobinas
            figure
              img(src='@/assets/curso/tema_1/img_8.png', alt='Fotografía de dos bobinas vacías.')
              figcaption Nota. Tomada de Amazon.com (s.f.)
          .col-lg-6
            .titulo-sexto.color-acento-contenido(data-aos='fade-right')
              h5 Figura 3.
              span Gancho de máquina plana de 2 agujas
            figure
              img(src='@/assets/curso/tema_1/img_9.png', alt='Fotografía de un carrete para maquina plana que se encuentra vacío')
              figcaption Nota. Tomada de Amazon.com (s.f.)
            
        p.text-center #[strong Nota:] en las máquinas planas de 2 agujas la bobina tiene un gancho que ayuda a formar la puntada.

      .py-4.py-md-5(titulo="Aguja" :icono="require('@/assets/curso/tema_1/img_10.svg')")
        p Es un elemento fundamental para la industria de la confección, es la encargada de llevar el hilo a través de la tela para conformar una costura. Es una pieza de metal u otro material duro, en un extremo tiene un orificio por donde se introduce el hilo, y al otro extremo una punta filosa que le permite atravesar el tejido. Las máquinas de coser se fueron inventando e innovando alrededor de la función de las agujas; una máquina de coser es una aguja rodeada de una serie de mecanismos.  

        p.mb-5 El grosor de la aguja determina su uso y viene clasificada e identificada por números, los materiales con que se construyen ayudan a su mejor rendimiento, durabilidad y evitan calentamientos que pueden entorpecer el desarrollo normal de las costuras. La punta que trae la aguja es otra característica a tener en cuenta a la hora de seleccionar la que mejor se adapte al tipo de costura y tejido que se intervendrá. Las clasificaciones de las agujas dependen de los tipos de tejidos, los hilos y la clase de costura a realizar; a esto último también se le denomina sistema de costura.

        .row
          .col-lg-6.mb-5
            .titulo-sexto.color-acento-contenido(data-aos='fade-right')
              h5 Figura 4.
              span Paño de agujas
            figure
              img(src='@/assets/curso/tema_1/img_11.png', alt='Foto de dos empaques contenedores de agujas')
              figcaption Nota. Tomada de Amazon.com (s.f.)
          .col-lg-6
            .titulo-sexto.color-acento-contenido(data-aos='fade-right')
              h5 Figura 5.
              span La aguja y sus partes
            figure
              img(src='@/assets/curso/tema_1/img_12.png', alt='La figura presenta las partes de la aguja: punta, ojo, canal corto, asta, cabo y tope. Adicionalmente, presenta otro tipo de aguja, la cual cuenta con rebaje y canal largo.')
              figcaption Nota. Tomada de Coats (s.f.)
        
        .row.justify-content-around.align-items-center 
          .col-lg-9
            .tarjeta.color-secundario.p-4.mb-5
              .row.justify-content-around.align-items-center
                .col-3.col-sm-2.col-lg-1.d-none.d-lg-block
                  img(src="@/assets/curso/tema_1/video.svg")
                .col
                  .row.justify-content-between.align-items-center
                    .col.mb-3.mb-sm-0
                      p #[b Enlace #[em web.]] 
                        span  Se invita a consultar el video de manos a la tela: Tipos de agujas para máquinas de coser doméstica.
                    .col-sm-auto
                      a.boton.color-acento-botones.text-white(href="https://www.youtube.com/embed/kVNt52lzehQ" target="_blank")
                        span.text-white Ir al video
                        i.fas.fa-video
          
            
      .py-4.py-md-5(titulo="Dientes" :icono="require('@/assets/curso/tema_1/img_13.svg')")  
        .row
          .col-lg-6
            p El diente, para poder desplazar el material, debe sujetarlo y esta función la realiza con la parte superior que hace contacto con la tela en el momento que comienza a transportarlo, por efecto de la fricción la tela se incrusta entre la separación de los dientes y es así como este desplaza el material o lo que se llama arrastre. Cuando se habla de arrastre, se hace referencia a una pieza dentada que se sitúa en la parte inferior de la máquina, concretamente, debajo del pie del prensatelas. Se trata de una pieza de gran importancia, ya que se encarga de estirar la tela para evitar errores en la costura.
          .col-lg-6
            .titulo-sexto.color-acento-contenido(data-aos='fade-right')
              h5 Figura 6.
              span Pieza dentada (dientes)
            figure
              img(src='@/assets/curso/tema_1/img_14.png', alt='Fotografía de una pieza dentada acompañada de una planchuela.')
              figcaption Nota. Tomada de Amazon.com (s.f.)
      .py-4.py-md-5(titulo="Pie prensatelas" :icono="require('@/assets/curso/tema_1/img_15.svg')")  
        .row
          .col-lg-6
            p Para que la tela quede firme y permita que la aguja haga su función, o sea realizar la costura, se coloca un accesorio que esté ubicado sobre la planchuela con posibilidad de sostener el tejido o elevarse para permitir sacarlo. Este accesorio viene de varios tipos para utilizar de acuerdo con la costura, por esta razón está provisto de diferentes guías que ayudan a construir costuras rectas y a la distancia requerida.
          .col-lg-6
            .titulo-sexto.color-acento-contenido(data-aos='fade-right')
              h5 Figura 7.
              span Pie prensatelas
            figure
              img(src='@/assets/curso/tema_1/img_16.png', alt='Fotografía de dos prensatelas')
              figcaption Nota. Tomada de Amazon.com (s.f.)
      .py-4.py-md-5(titulo="Lazada" :icono="require('@/assets/curso/tema_1/img_17.svg')")  
        .row.justify-content-center
          .col-lg-10
            p Costura que se forma cuando el hilo de la aguja interactúa con el hilo de la bobina o de abajo, formando una trenza.

            p.mb-5 El siguiente video presenta la manera en que se forma la lazada.
 
            .tarjeta.color-secundario.p-4.mb-5
              .row.justify-content-around.align-items-center
                .col-3.col-sm-2.col-lg-1.d-none.d-lg-block
                  img(src="@/assets/curso/tema_1/video.svg")
                .col
                  .row.justify-content-between.align-items-center
                      .col.mb-1.mb-sm-0
                        p #[b Enlace #[em web.]] 
                          span Mecánica de confección: cómo funciona una máquina de coser y forma la puntada.
                      .col-sm-auto
                        a.boton.color-acento-botones.text-white(href="https://www.youtube.com/embed/SKTaW5NOjqw" target="_blank")
                          span Ir al video
                          i.fas.fa-video
           

    separador

    #t_1_2.titulo-segundo.color-acento-contenido
      h2 1.2 Máquinas de confección 

    p(data-aos='fade-right') Las máquinas de confección se identifican y conocen según sus funciones, presentando características muy especiales que las diferencian, como los tipos de agujas que utilizan y el tipo de costura que realizan. Estos equipos se dedican a ensamblar piezas de tejido, utilizando principalmente agujas, hilos y los mecanismos necesarios para coordinar estos elementos.

    p.mb-5(data-aos='fade-right') Entre otras se tiene a continuación las siguientes:
    .py-4
      .titulo-sexto.color-acento-contenido(alt='La imagen presenta una tabla que clasifica diferentes tipos de máquinas utilizadas en procesos industriales o de confección en cuatro categorías: Planas, Fileteadoras, Collarín y Especiales. En la categoría de Planas se incluyen máquinas como la plana posicionadora, plana zigzag y dos agujas ecualizarle. Las Fileteadoras abarcan máquinas como la fileteadora zurcidora y la fileteadora de 3, 4 y 5 hilos. La categoría de Collarín incluye máquinas como la cama plana o sesgadoras y la dobladilladora automática de mangas. Finalmente, en las Especiales se encuentran la botonadora, presilladora, ribeteadora, cerradora de codo, multiguías, ojaladora de lágrima, entre otras.')
        h5 Tabla 1.
        span Grupos de máquinas
    .row.fondorojo.p-4
      .p-2
      .row.justify-content-center.align-items-center.p-4
        .col-sm-12.col-lg-3
          div.fondo-blanco.p-3.size
              h3 Planas
              .col-lg-11
                ul.text-small.lista-ul--color.py-3
                  li
                    i.lista-ul__vineta
                    | Plana posicionadora.
                  li 
                    i.lista-ul__vineta
                    | Plana posicionadora / doble 
                    | transporte.
                  li 
                    i.lista-ul__vineta
                    | Plana zigzag.
                  li 
                    i.lista-ul__vineta
                    | Dos agujas sencillas.
                  li 
                    i.lista-ul__vineta
                    | Dos agujas escualizable.
          .p-1
        .col-sm-12.col-lg-3
          div.fondo-blanco.p-3.size
              h3 Fileteadoras 
              .col-lg-11
                ul.text-small.lista-ul--color.py-3
                  li 
                    i.lista-ul__vineta
                    | Fileteadora zurcidora.
                  li 
                    i.lista-ul__vineta
                    | Fileteadora resortadora. 
                  li 
                    i.lista-ul__vineta
                    | Fileteadoras (3, 4 y 5 hilos).
                  li 
                    i.lista-ul__vineta
                    | Emparejadora. 

          .p-1
        .col-sm-12.col-lg-3
          div.fondo-blanco.p-3.size
              h3 Collarín
              .col-lg-11
                ul.text-small.lista-ul--color.py-3
                  li 
                    i.lista-ul__vineta
                    | Cama plana o sesgadoras. 
                  li 
                    i.lista-ul__vineta
                    | Dobladilladora autómata de mangas.
                  li 
                    i.lista-ul__vineta
                    | Dobladilladora Puller.
                  li 
                    i.lista-ul__vineta
                    | Dobladilladora corte izquierdo. 
          .p-1
        .col-sm-12.col-lg-3
          div.fondo-blanco.p-3.size
              h3 Especiales
              .col-lg-11
                ul.text-small.lista-ul--color.py-3
                  li 
                    i.lista-ul__vineta
                    | Botonadora.
                  li 
                    i.lista-ul__vineta
                    | Presilladora. 
                  li 
                    i.lista-ul__vineta
                    | Ribeteadora. 
                  li 
                    i.lista-ul__vineta
                    | Cerradora de codo.
                  li 
                    i.lista-ul__vineta
                    | Cerradora de pedestal. 
                  li 
                    i.lista-ul__vineta
                    | Multiagujas. 
                  li 
                    i.lista-ul__vineta
                    | Ojaladora de lágrima.
                  li 
                    i.lista-ul__vineta
                    | Picueta.
                  li 
                    i.lista-ul__vineta
                    | Ojaladora plana. 
                  li 
                    i.lista-ul__vineta
                    | Prendedora de broche 14l 4t.
                  li 
                    i.lista-ul__vineta
                    | Prendedora de broche manual.
                  li 
                    i.lista-ul__vineta
                    | Termofijadora.
          .p-1
         
    .row.p-4       
      h4(data-aos='fade-left') Tipos de máquinas
      p(data-aos='fade-right') Para la confección de prendas se utiliza una serie de máquinas que a continuación se describen.
      .row.mb-5
        .col-lg-12.col-12.mb-5.mb-md-0
          LineaTiempoD.color-primario
            .row(numero="1" titulo="Máquina plana") 
              .col-lg-12
                SlyderA
                  .row.justify-content-center
                    .col-lg-10
                      figure
                        img.img-a(src='@/assets/curso/tema_1/img_19.png', alt='')

                  .row.justify-content-center
                    .col-lg-10
                      p.mb-0  
                        strong Función
                      p.py-2 La máquina M se utiliza en tejido plano y tejido de punto para realizar la unión de telas sencillas, así como para asentar cuellos, mangas y puntadas decorativas. Su función principal consiste en realizar costuras rectas, entrelazando el hilo superior con el inferior a través de la tela.
                      h5.text-center Tipo de puntada que realiza
                      figure
                        img.img-a(src='@/assets/curso/tema_1/img_20.png', alt='Lanzada')

                  .row.justify-content-center
                    .col-lg-10
                      h4 Partes de la máquina plana
                      .row
                        .col-lg-6
                          
                          figure
                            img(src='@/assets/curso/tema_1/img_21.png', alt='Lanzada')
                        .col-lg-6
                          ol.lista-ol--color
                            li 
                              span.text-bold 1. 
                              | #[strong Cabezote]
                              p Reguladora de puntada, caja de bobina, palanca de retroceso, dientes, gancho rotatorio, palanca tira hilos, volante, agujas, porta conos, guía de hilos, pie prénsatela, barra de aguja, medidor de lubricación. 
                            li 
                              span.text-bold 2. 
                              | #[strong Mueble]
                              p Es el lugar donde se instala  el cabezote y el apoyo para la persona que cumple la tarea de coser. Está integrado por el pedal, el estante, el motor, varilla del embrague.
                  .row.justify-content-center
                    .col-lg-10
                      h5.text-center.mb-5 Partes internas de la máquina plana
                      .row
                        .col-lg-6
                          figure
                            img(src='@/assets/curso/tema_1/img_22.png', alt='Lanzada')
                        .col-lg-6
                          .jumbo_1.p-4.bg-white
                            ol.lista-ol--color
                              li
                                .row
                                  .col-lg-1 
                                    p.text-bold.bg_num 1.
                                  .col-lg-11 
                                    p.cero Mecanismo del movimiento de la aguja y del tirahilos.
                              li
                                .row
                                  .col-lg-1 
                                    p.cero.text-bold.bg_num 2.
                                  .col-lg-11 
                                    p.cero Tirahilos.
                              li
                                .row 
                                  .col-lg-1 
                                    p.cero.text-bold.bg_num 3.
                                  .col-lg-11 
                                    p.cero Bobina superior del hilo.
                              li
                                .row 
                                  .col-lg-1 
                                    p.cero.text-bold.bg_num 4. 
                                  .col-lg-11
                                    p.cero Tensor.
                              li
                                .row 
                                  .col-lg-1 
                                    p.cero.text-bold.bg_num 5.
                                  .col-lg-11 
                                    p.cero Cigüeñal.
                              li
                                .row 
                                  .col-lg-1
                                    p.cero.text-bold.bg_num 6. 
                                  .col-lg-11
                                    p.cero Volante polea.
                              li
                                .row 
                                  .col-lg-1 
                                    p.cero.text-bold.bg_num 7. 
                                  .col-lg-11
                                    p.cero Bielas.
                              li
                                .row 
                                  .col-lg-1
                                    p.cero.text-bold.bg_num 8. 
                                  .col-lg-11
                                    p.cero Correa.
                              li 
                                .row 
                                  .col-lg-1
                                    p.cero.text-bold.bg_num 9.
                                  .col-lg-11
                                    p.cero Mecanismo para el movimiento vertical del arrastratelas.
                              li
                                .row 
                                  .col-lg-1 
                                    p.cero.text-bold.bg_num 10. 
                                  .col-lg-11
                                    p.cero Mecanismo para el movimiento horizontal del arrastratelas.
                              li
                                .row 
                                  .col-lg-1
                                    p.cero.text-bold.bg_num 11. 
                                  .col-lg-11
                                    p.cero Aguja.
                              li
                                .row 
                                  .col-lg-1 
                                    p.cero.text-bold.bg_num 12.
                                  .col-lg-11 
                                    p.cero Arrastratelas.
                              li
                                .row 
                                  .col-lg-1 
                                    p.cero.text-bold.bg_num 13.
                                  .col-lg-11 
                                    p.cero Lanzadera y bobina inferior.
                              li
                                .row 
                                  .col-lg-1 
                                    p.cero.text-bold.bg_num 14. 
                                  .col-lg-11
                                    p.cero Prensatelas.
                              li
                                .row 
                                  .col-lg-1 
                                    p.cero.text-bold.bg_num 15.
                                  .col-lg-11 
                                    p.cero Palanca del prensatelas.
                  
            .row(numero="2" titulo="Máquina fileteadora")
              .col-lg-12
                SlyderA
                  .row.justify-content-center
                    .col-lg-10
                      figure
                        img.img-a(src='@/assets/curso/tema_1/img_23.png', alt='Lanzada')
            
                  .row.justify-content-center
                    .col-lg-10
                      p.mb-0  
                        strong Función
                      p.py-2 Es una máquina muy usada porque realiza tres pasos al mismo tiempo: recorta, cose y sobrehíla. Su función es entrelazar un hilo y dos hilazas generando un filete en el borde del tejido. Dependiendo de la puntada, existen de 3, 4 y 5 hilos.
                      h5.text-center Tipo de puntada que realiza
                      figure
                        img.img-a(src='@/assets/curso/tema_1/img_24.png', alt='Lanzada')

                  .row.justify-content-center
                    .col-lg-10
                      h5.text-center.mb-5 Partes de la máquina fileteadora
                      .row
                        .col-lg-6
                          figure
                            img(src='@/assets/curso/tema_1/img_25.png', alt='Lanzada')
                        .col-lg-6
                          .jumbo_1.p-4.bg-white
                            ol.lista-ol--color
                              li 
                                span.text-bold.bg_num 1. 
                                | Tornillo de presión.
                              li 
                                span.text-bold.bg_num 2. 
                                | Tapa frontal.
                              li 
                                span.text-bold.bg_num 3. 
                                | Guía de hilo.
                              li 
                                span.text-bold.bg_num 4. 
                                | Conjunto tensor.
                              li 
                                span.text-bold.bg_num 5. 
                                | Volante.
                              li 
                                span.text-bold.bg_num 6. 
                                | Ventanilla de flujo de aceite o visor.
                              li 
                                span.text-bold.bg_num 7. 
                                | Tapa frontal.
                              li 
                                span.text-bold.bg_num 8. 
                                | Cuchilla superior.
                              li 
                                span.text-bold.bg_num 9. 
                                | Cubierta del brazo.
                              li 
                                span.text-bold.bg_num 10. 
                                | Palanca de anchura de las puntadas.
                              li 
                                span.text-bold.bg_num 11. 
                                | Palanca de cuchilla.
                              li 
                                span.text-bold.bg_num 12. 
                                | Disco de ajuste del largo de las puntadas.
                              li 
                                span.text-bold.bg_num 13. 
                                | Palanca de ajuste velocidad de alimentación.
                              li 
                                span.text-bold.bg_num 14. 
                                | Prensatelas.
                              li 
                                span.text-bold.bg_num 15. 
                                | Agujas.
                              li 
                                span.text-bold.bg_num 16. 
                                | Tapa de toma de hilo.
                              li 
                                span.text-bold.bg_num 17. 
                                | Porta cono.
            .row(numero="3" titulo="Máquina empretinadora")
              .col-lg-12
                SlyderA
                  .row.justify-content-center
                    .col-lg-10
                      figure
                        img.img-a(src='@/assets/curso/tema_1/img_26.png', alt='Lanzada')
                  .row.justify-content-center
                    .col-lg-10
                      p.mb-0  
                        strong Función
                      p.py-2 Estas máquinas se emplean principalmente para unir la tela y las piezas que constituyen la pretina o cinturilla de faldas y pantalones. Son especialmente útiles en la confección de pantalones y faldas de dril y #[em denim].
                      h5.text-center Tipo de puntada que realiza
                      figure
                        img.img-a(src='@/assets/curso/tema_1/img_27.png', alt='Lanzada')
                  .row.justify-content-center
                    .col-lg-10
                      h5.text-center.mb-5 Partes de la máquina empretinadora
                      .row.align-items-center
                        .col-lg-6
                          figure
                            img(src='@/assets/curso/tema_1/img_28.png', alt='Lanzada')
                        .col-lg-6
                          .jumbo_1.p-4.bg-white
                            ol.lista-ol--color
                              li 
                                span.text-bold.bg_num 1. 
                                | Presión de prensatela.
                              li 
                                span.text-bold.bg_num 2. 
                                | Tensores de hilo.
                              li 
                                span.text-bold.bg_num 3. 
                                | Volante.
                              li 
                                span.text-bold.bg_num 4. 
                                | Transporte de dientes.
            .row(numero="4" titulo="Máquina presilladora")
              .col-lg-12
                SlyderA
                  .row.justify-content-center
                    .col-lg-10
                      figure
                        img.img-a(src='@/assets/curso/tema_1/img_29.png', alt='Lanzada')
                  .row.justify-content-center
                    .col-lg-10
                      p.mb-0  
                        strong Función
                      p.py-2 Estas máquinas se utilizan en tejido plano y de punto, su función es asegurar o reforzar costuras, presillar bolsillos, trabas, botas y pegar pasadores. En ocasiones se usa con fines decorativos.
                      h5.text-center Tipo de puntada que realiza
                      figure
                        img.img-a(src='@/assets/curso/tema_1/img_30.png', alt='Lanzada')
                  .row.justify-content-center
                    .col-lg-10
                      h5.text-center.mb-5 Partes de la máquina presilladora
                      .row.align-items-center
                        .col-lg-6
                          figure
                            img(src='@/assets/curso/tema_1/img_31.png', alt='Lanzada')
                        .col-lg-6
                          .jumbo_1.p-4.bg-white
                            ol.lista-ol--color
                              li 
                                span.text-bold.bg_num 1. 
                                | Guía hilo.
                              li 
                                span.text-bold.bg_num 2. 
                                | Devanador.
                              li 
                                span.text-bold.bg_num 3. 
                                | Volante.
                              li 
                                span.text-bold.bg_num 4. 
                                | Visor de aceite.
                              li 
                                span.text-bold.bg_num 5. 
                                | Gancho o garfio.
                              li 
                                span.text-bold.bg_num 6. 
                                | Cama en forma de codo.
                              li 
                                span.text-bold.bg_num 7. 
                                | Prensatela.
                              li 
                                span.text-bold.bg_num 8. 
                                | Barra prensatelas.
                              li 
                                span.text-bold.bg_num 9. 
                                | Tensor de hilo.
                              li 
                                span.text-bold.bg_num 10. 
                                | Tira hilo.
            .row(numero="5" titulo="Máquina recubridora")
              .col-lg-12
                SlyderA
                  .row.justify-content-center
                    .col-lg-10
                      figure
                        img.img-a(src='@/assets/curso/tema_1/img_32.png', alt='Lanzada')
                  .row.justify-content-center
                    .col-lg-10
                      p.mb-0  
                        strong Función
                      p.py-2 Realiza la puntada #[em overclock], la cual se utiliza para sobre orillados o adornos y puede considerarse una costura. El término en inglés es “#[em Cover Stitch]”, que significa recubridora. Su uso más frecuente se da en prendas fabricadas con tejido de punto, como blusas, camisetas y pantalonetas.
                      h5.text-center Tipo de puntada que realiza
                      figure
                        img.img-a(src='@/assets/curso/tema_1/img_33.png', alt='Lanzada')
                  .row.justify-content-center
                    .col-lg-10
                      h5.text-center.mb-5 Partes de la máquina recubridora
                      .row.align-items-center
                        .col-lg-6
                          figure
                            img(src='@/assets/curso/tema_1/img_34.png', alt='Lanzada')
                        .col-lg-6
                          .jumbo_1.p-4.bg-white
                            ol.lista-ol--color
                              li 
                                span.text-bold.bg_num 1. 
                                | Tensor.
                              li 
                                span.text-bold.bg_num 2. 
                                | Disco selector de puntadas.
                              li 
                                span.text-bold.bg_num 3. 
                                | Disco selector largo puntada.
                              li 
                                span.text-bold.bg_num 4. 
                                | Portahilos.
                              li 
                                span.text-bold.bg_num 5. 
                                | Freno devanador.
                              li 
                                span.text-bold.bg_num 6. 
                                | Volante.
                              li 
                                span.text-bold.bg_num 7. 
                                | Exhibidor de puntadas.
                              li 
                                span.text-bold.bg_num 8. 
                                | Tecla de retroceso.
                              li 
                                span.text-bold.bg_num 9. 
                                | Cajón accesorios.
                              li 
                                span.text-bold.bg_num 10. 
                                | Placa de aguja.
                              li 
                                span.text-bold.bg_num 11. 
                                | Pie prensatelas.
                              li 
                                span.text-bold.bg_num 12. 
                                | Tapa frontal.
                              li 
                                span.text-bold.bg_num 13. 
                                | Dial de tensión.
                              li 
                                span.text-bold.bg_num 14. 
                                | Tirahilos.
            .row(numero="6" titulo="Máquina ojaladora")
              .col-lg-12
                SlyderA
                  .row.justify-content-center
                    .col-lg-10
                      figure
                        img.img-a(src='@/assets/curso/tema_1/img_35.png', alt='Lanzada')
                  .row.justify-content-center
                    .col-lg-10
                      p.mb-0  
                        strong Función
                      p.py-2 Es sumamente importante, para programar las máquinas y antes de operarlas, consultar de manera minuciosa las fichas técnicas y demás documentos relacionados con el equipo. Es esencial que estos documentos estén bien custodiados y archivados para evitar extravíos, y que cada vez que sea necesario consultarlos, se pueda hacer de manera rápida y efectiva. Además, la información contenida en las fichas técnicas es de gran utilidad cada vez que se requiere un repuesto para la máquina.
                      h5.text-center Tipo de puntada que realiza
                      figure
                        img.img-a(src='@/assets/curso/tema_1/img_36.png', alt='Lanzada')
                  .row.justify-content-center
                    .col-lg-10
                      h5.text-center.mb-5 Partes de la máquina ojaladora
                      .row.align-items-center
                        .col-lg-6
                          figure
                            img(src='@/assets/curso/tema_1/img_37.png', alt='Lanzada')
                        .col-lg-6
                          .jumbo_1.p-4.bg-white
                            ol.lista-ol--color
                              li 
                                span.text-bold.bg_num 1. 
                                | Tornillo regulador de presión.
                              li 
                                span.text-bold.bg_num 2. 
                                | Cubierta de bandas.
                              li 
                                span.text-bold.bg_num 3. 
                                | Mecanismo de tensión.
                              li 
                                span.text-bold.bg_num 4. 
                                | Prensatelas.
                              li 
                                span.text-bold.bg_num 5. 
                                | Barra de aguja.
                              li 
                                span.text-bold.bg_num 6. 
                                | Palanca tirahilo.
        
            
              
            
        
     

    h3(data-aos='fade-left') Fichas técnicas de las máquinas

    p(data-aos='fade-right') Es un documento que permite la comunicación entre el proveedor que entrega las máquinas y herramientas con el maquilador de piezas cortadas. En este documento vienen consignadas todas las especificaciones y características de los equipos; así como la identificación de las partes, los cuidados, los sistemas de lubricación, las maneras de enhebrado, las referencias y toda la información que sea pertinente para su manejo.

    p.mb-5(data-aos='fade-right') Es sumamente importante, para programar las máquinas y antes de operarlas, consultar de manera minuciosa las fichas técnicas y demás documentos relacionados con el equipo. Es esencial que estos documentos estén bien custodiados y archivados para evitar extravíos, y que cada vez que sea necesario consultarlos, se pueda hacer de manera rápida y efectiva. Además, la información contenida en las fichas técnicas es de gran utilidad cada vez que se requiere un repuesto para la máquina.

    .row.justify-content-center.mb-5(data-aos='fade-left')
      .col-lg-8
        .titulo-sexto.color-acento-contenido(data-aos='fade-right')
          h5 Figura 8.
          span Ejemplo de ficha técnica
        figure
          img(src='@/assets/curso/tema_1/img_38.png', alt='La ficha técnica de la máquina plana Singer 591 D300 de "Confecciones Badalam LTDA" indica que es adecuada para coser prendas livianas y medias, ideal para líneas de producción debido a su alta velocidad y eficiencia. Pesa 29 kg, mide 49 cm de alto, 29.5 cm de ancho y 59.3 cm de largo, con una potencia de 250 W, voltaje de 110/220 V y velocidad de 3500 RPM. El mantenimiento debe realizarse cada 3 meses y se recomienda usar equipo de protección y mantener el área limpia. El fabricante es Singer, con contacto en info@singer.com.co.')
          figcaption Nota. Tomada de Confecciones Badaam Ltda. (2020).

    h3(data-aos='fade-left') Fichas técnicas de seguimiento y mantenimiento de las máquinas
    p(data-aos='fade-right') No se debe confundir este documento con la ficha técnica que trae la máquina cuando se adquiere, este documento contiene la información sobre las intervenciones que ha tenido la máquina, las fechas en que se han reparado o cambiado repuestos, así como los proveedores de servicios o productos que ha necesitado. La información contenida en este documento permite tomar las mejores decisiones cuando de mantenimiento del equipo de máquinas y herramientas se trata.

    p(data-aos='fade-right') Debe, por lo menos, traer información completa de la máquina en donde se incluyan sus características, la sección o área a que pertenece, el tipo de mantenimiento que se le realiza, la urgencia de la intervención, la descripción del servicio, las fechas, las personas responsables de solicitar, autorizar y revisar el servicio, entre otros aspectos.

    h4.mb-5(data-aos='fade-right') A continuación, se presenta un documento para ejemplificar la ficha de seguimiento y mantenimiento:

    .row.justify-content-center(data-aos='fade-left')
      .col-lg-11
        .titulo-sexto.color-acento-contenido(data-aos='fade-right',alt ='La imagen muestra una ficha de seguimiento y mantenimiento de la "Empresa de Confecciones El Ensamble". La ficha incluye campos para registrar información sobre la máquina, como la fecha, marca, referencia, serie, sección, proveedor, catálogo, número, herramientas, número de motor y color, así como observaciones. También cuenta con una tabla para anotar la fecha, la situación actual del diagnóstico, la intervención, el proveedor, la situación final y observaciones. Al final, hay campos para la autorización, la ejecución, la revisión y observaciones adicionales.' )
          h5 Tabla 2.
          span Ficha de seguimiento y mantenimiento
        .tabla-a.color-acento-contenido.mb-5 
          table
            thead
              tr
                th(colspan=9) 
                  h4 EMPRESA DE CONFECCIONES EL ENSAMBLE
            tbody
              tr 
                td(colspan=2) 
                  strong Fecha: 
                td(colspan=2) 
                  strong Máquina:
                td 
                  strong Marca:
                td(colspan=2)  
                  strong Referencia:
                td(colspan=2)  
                  strong Serie:
              tr 
                td(colspan=2)  
                  strong Sección:
                td(colspan=2) 
                  strong Proveedor:
                td(colspan=3) 
                  strong Catálogo:
                td(colspan=2)  
                  strong Número:
              tr 
                td(colspan=3,rowspan=2) 
                  strong Observaciones:
                td(colspan=6) 
                  strong Herramienta:
              tr 
                td(colspan=2) 
                  strong No. Motor:
                td(colspan=4) 
                  strong Color:
            
              tr.th_bg1
                th Fecha
              
                th(colspan=2) Situación actual diagnóstico
             
                th Intervención
              
                th(colspan=2) Proveedor
              
                th Situación final
              
                th(colspan=2) Observaciones
              tr 
                td 
                td(colspan=2)
                td
                td(colspan=2)
                td
                td(colspan=2)
              tr 
                td 
                td(colspan=2)
                td
                td(colspan=2)
                td
                td(colspan=2)
              tr 
                td 
                td(colspan=2)
                td
                td(colspan=2)
                td
                td(colspan=2)
              tr 
                td 
                td(colspan=2)
                td
                td(colspan=2)
                td
                td(colspan=2)
              tr 
                td 
                td(colspan=2)
                td
                td(colspan=2)
                td
                td(colspan=2)
              tr 
                td 
                td(colspan=2)
                td
                td(colspan=2)
                td
                td(colspan=2)
              tr 
                td 
                td(colspan=2)
                td
                td(colspan=2)
                td
                td(colspan=2)
              tr 
                td 
                td(colspan=2)
                td
                td(colspan=2)
                td
                td(colspan=2)
              tr.th_bg1
                th(colspan=3) Autorizó
                th Ejecutó
                th(colspan=3) Revisón
                th(colspan=2) Observaciones
    h3(data-aos='fade-left') Tecnologías implementadas en las máquinas
    p.mb-0(data-aos='fade-right') A lo largo del tiempo, las máquinas, las herramientas y las metodologías de trabajo han experimentado cambios orientados a aumentar la velocidad (productividad) y mejorar el cumplimiento de especificaciones (calidad). Con la implementación de dispositivos electrónicos, se han simplificado pasos en las órdenes, movimientos y relaciones de velocidades. Hasta el año 2021, la industria de la confección está equipada con equipos automatizados; algunos puestos de trabajo son atendidos por robots, y existen software que integran varias operaciones.
    .py-4
    .row.justify-content-center(data-aos='fade-left')
      .col-lg-11
        .titulo-sexto.color-acento-contenido(data-aos='fade-right', alt ='La imagen muestra la "Tabla 3. Tecnologías Implementadas en las máquinas", que compara actividades en máquinas convencionales y electrónicas o posicionadoras. Para rematar la costura, en las máquinas convencionales se usa un elemento al lado derecho llamado rematador, mientras que en las electrónicas se hace desde el pedal, ahorrando tiempo. Para cortar el hilo, en las convencionales se realiza manualmente con un punzón o tijeras, mientras que en las electrónicas se activa un mecanismo desde el pedal que corta el hilo automáticamente. Para levantar el pie prensatelas, en las convencionales se usa una rodilla palanca, y en las electrónicas se hace desde el pedal, ahorrando tiempo y reduciendo la fatiga del operador.')
          h5 Tabla 3.
          span Tecnologías implementadas en las máquinas 
        .tabla-a.mb-5
          table
            thead
              tr
                th 
                  h4 Actividad
                th 
                  h4 Convencional
                th 
                  h4 Electrónica o posesionadora
            tbody
              tr 
                th Rematar la costura.
                td Se hace desde un elemento que se encuentra al lado derecho de la máquina, llamado rematador.
                td Se realiza desde el pedal de la máquina. Se ahorra el tiempo de desplazamiento de la mano hasta el rematador.
              tr 
                th Cortar el hilo después de terminar la operación.
                td Se realiza de manera manual con un pulidor, o se le coloca detrás del pie prensatelas una cuchilla que haga esa función.
                td Desde el pedal se activa un mecanismo que corta el hilo a ras de la planchuela y la costura. El gasto de hilo es menor, y el tiempo de pulida también, sin contar el ahorro del tiempo cuando se realiza manualmente.
              tr 
                th Levantar el pie prensatela.
                td.th En la relación operario-máquina, al estar sentado el operario en la máquina, a la altura de la rodilla se encuentra una pieza llamada rodillero, haciéndole presión se activa y se levanta el pie prensatelas. 
                td Para levantar el pie prensatelas se utiliza también el pedal. Ahorra tiempo y fatiga en el trabajador.

    separador

    #t_1_3.titulo-segundo.color-acento-contenido
      h2 1.3 Herramientas o equipos de mantenimiento de máquinas de coser

    p.mb-5(data-aos='fade-right') El mantenimiento de las máquinas requiere una serie de instrumentos, implementos o herramientas para su ejecución, a continuación, se mencionan las más utilizadas.
      
      SlyderF(columnas="col-lg-4 col-xl-4").p-4(data-aos="fade-right")
          .tarjeta-avatar
            img(src='@/assets/curso/tema_1/img_39.png' alt='AvatarTop')
            .tarjeta.fondo-slyderC
              .p-4.text-center
                h4.py-2 Destornilladores
                p.text-center.mb-0 #[strong Destornilladores de diferentes cabezas:] (estrella, rectos, etc.) y diferentes largos y anchos: su función principal es hacer girar los tornillos, ya sea para apretarlos o aflojarlos.
          
          .tarjeta-avatar
            img(src='@/assets/curso/tema_1/img_40.png' alt='AvatarTop')
            .tarjeta.fondo-slyderC
              .p-4.text-center
                h4.py-2 Pinceles y brochas
                p.text-center.mb-0 #[strong Pinceles y brochas:] se utilizan para barrer el polvo y eliminar suciedades internas y externas.
          
          .tarjeta-avatar
            img(src='@/assets/curso/tema_1/img_41.png' alt='AvatarTop')
            .tarjeta.fondo-slyderC
              .p-4.text-center
                h4.py-2 Aceitera
                p.mb-0 #[strong Aceitera con aceite de máquinas:] elemento indispensable para proveer el aceite a los equipos que lo requieran.
          
          .tarjeta-avatar
            img(src='@/assets/curso/tema_1/img_42.png' alt='AvatarTop')
            .tarjeta.fondo-slyderC
              .p-4.text-center
                h4.py-2 Pinza
                p.mb-0 #[strong Pinzas, alicates:] su función es sujetar o doblar piezas, la pinza tiene la punta más pequeña, lo cual le permite acceder a sitios más estrechos. También tiene la posibilidad de cortar alambres o elementos similares.
          
          .tarjeta-avatar
            img(src='@/assets/curso/tema_1/img_43.png' alt='AvatarTop')
            .tarjeta.fondo-slyderC
              .p-4.text-center
                h4.py-2  Llaves Allen
                p.mb-0 #[strong Llaves Allen:] llaves para operar tornillos internos, o los que tienen de manera interna la ranura para moverlos.
          
          .tarjeta-avatar
            img(src='@/assets/curso/tema_1/img_44.png' alt='AvatarTop')
            .tarjeta.fondo-slyderC
              .p-4.text-center
                h4.py-2 Llave inglesa ajustable
                p.mb-0 #[strong Llave inglesa:]  también conocida como llave de expansión, es utilizada para apretar y aflojar tuercas y tornillos y su característica es que es ajustable, y sirve para intervenir diferentes diámetros y medidas de los tornillos.


          .tarjeta-avatar
            img(src='@/assets/curso/tema_1/img_45.png' alt='AvatarTop')
            .tarjeta.fondo-slyderC
              .p-4.text-center
                h4.py-2 Compresor
                p.mb-0 #[strong Compresor de aire con pistola:] máquina cuya función es tomar un fluido y darle potencia en su salida, estos fluidos pueden ser aire, gases y hasta pinturas. Se complementa colocando una pistola en su salida, la cual controla la cantidad y el sitio a donde saldrá el fluido. También, en lugar de pistola se les adapta a sistemas de operación de algunas máquinas y equipos de confección.
    p(data-aos='fade-right') Habitualmente cuando se adquiere la máquina, ella trae sus propias herramientas para el mantenimiento e intervenciones necesarias, por lo que se debe procurar conservarlas y ubicarlas en la gaveta de la máquina.


  
</template>

<script>
export default {
  name: 'Tema1',
  components: {},
  data: () => ({
    // variables de vue
  }),
  mounted() {
    this.$nextTick(() => {
      this.$aosRefresh()
    })
  },
  updated() {
    this.$aosRefresh()
  },
}
</script>

<style lang="sass" scoped></style>
