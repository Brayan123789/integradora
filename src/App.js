import "./styles/style.css";
import menu from "./assets/menu.svg";
import carrito from "./assets/car.svg";
import panel from "./assets/panel solar.jpg";
import panel2 from "./assets/Panel 2.jpeg";
import panel3 from "./assets/panel solar 3.jpg";
import panel4 from "./assets/panel solar 4.jpg";
import panel5 from "./assets/panel solar 5.webp";
import panel6 from "./assets/panel min.png";
import panel7 from "./assets/solar w.webp";
import panel8 from "./assets/panel 6.webp" ;
import panel9 from "./assets/modulo solar.webp";
import panel10 from "./assets/sistema panel.webp";
import panel11 from "./assets/panel.svg" ;
import panel12 from "./assets/panel.svg" ;
import panel13 from "./assets/panel.svg";
import panel14 from "./assets/panel 5678.jpg";
import panel15 from "./assets/panel 5678.jpg";
import panel16 from "./assets/9iuy.avif";
import logo from "./assets/logo panello.jpg"




function App() {
  return (
  <body>
    <header class="header">

    <div class="menu container">
    <img src={logo} class="logo" alt="menu" width="130px"/>
        <input type="checkbox" id="menu" />
        <label for="menu">
            <img src={menu} class="menu-icono" alt="menu" />
        </label>

        <nav class="navbar">
            <ul>
                <li><a href="#">Inicio</a></li>
                <li><a href="#">Servicios</a></li>
                <li><a href="#">Productos</a></li>
                <li><a href="#">Contacto</a></li>
            </ul> 
        
        </nav>

        <div>
            <ul>
                <li class="submenu">
                    <img src={carrito} id="img-carrito" alt="carrito" width="40" />
                    <div id="carrito">
                        <table id="lista-carrito">
                            <thead>
                                <tr>
                                    <th>Imagen</th>
                                    <th>Nombre</th>
                                    <th>precio</th>
                                    <th></th>
                                </tr>
                            </thead>
                            <tbody></tbody>
                        </table>
                        <a href="#" class="btn-2">Vaciar Carrito</a>
                    </div>
                </li>
            </ul>
        </div>


    </div>

    <div class="header-content container">
     <div class="header-img">
        <img src={panel} alt="" />
     </div>
     <div class="header-txt">
        <h1>Ofertas especiales</h1>
        <p>Estrena las mejores ofertas de los paneles</p>
        <a href="#" class="btn-1">Informacion</a>
     </div>
 </div>

</header>

<section class="ofert container">
<div class="ofert-1">
    <div class="ofert-img">
        <img src={panel2} alt="" />
  </div>
  <div class="ofert-txt">
    <h3>Producto 1</h3>
    <a href="#" class="btn-2">Informacion</a>
  </div>
</div>

<div class="ofert-1">
<div class="ofert-img">
    <img src={panel3} alt="" />
</div>
<div class="ofert-txt">
<h3>Producto 2</h3>
<a href="#" class="btn-2">Informacion</a>
</div>
</div>

<div class="ofert-1">
<div class="ofert-img">
    <img src={panel4} alt=""/>
</div>
<div class="ofert-txt">
<h3>Producto 3</h3>
<a href="#" class="btn-2">Informacion</a>
</div>
</div>
</section>
<main class="products container" id="lista-1">

 <h2>Productos</h2>

<div class="product-content">

    <div class="product">
        <img src={panel5} alt="" width="300" />
        <div class="product-txt">
            <h3>panel solar fotovoltaico</h3>
            <p class="precio">$200</p>
            <a href="#" class="agregar-carrito btn-2" data-id="1">Agregar al carrito</a>
        </div>
    </div>

    <div class="product">
        <img src={panel6} alt="" width="300" />
        <div class="product-txt">
            <h3>panel solar 375W + Microinversor 1500W</h3>
            <p class="precio">$400</p>
            <a href="#" class="agregar-carrito btn-2" data-id="2">Agregar al carrito</a>
        </div>
    </div>

    <div class="product">
        <img src={panel7} alt="" width="200"/>
        <div class="product-txt">
            <h3>panel solar 248 W</h3>
            <p class="precio">$200</p>
            <a href="#" class="agregar-carrito btn-2" data-id="3">Agregar al carrito</a>
        </div>
    </div>

    <div class="product">
        <img src={panel8} alt="" width="100"/>
        <div class="product-txt">
            <h3>Modulo panel solar 550 wats</h3>
            <p class="precio">$980</p>
            <a href="#" class="agregar-carrito btn-2" data-id="4">Agregar al carrito</a>
        </div>
    </div>

    <div class="product">
        <img src={panel9} alt="" width="200"/>
        <div class="product-txt">
            <h3>Modulo solar ETSOLAR,550 50 Vcc</h3>
            <p class="precio">$1,150</p>
            <a href="#" class="agregar-carrito btn-2" data-id="5">Agregar al carrito</a>
        </div>
    </div>

    <div class="product">
        <img src={panel10} alt="" width="300"/>
        <div class="product-txt">
            <h3>Kit panel solar autonomo isla 2000wh diarios</h3>
            <p class="precio">$10,789</p>
            <a href="#" class="agregar-carrito btn-2" data-id="6">Agregar al carrito</a>
        </div>
    </div>



</div>



</main>

<section class="icons container">

<div class="icon-1">
    <div class="icon-img">

        <img src={panel11} alt="" width="60"/>
    </div>
    <div class="icon-txt">
        <h3>Paneles</h3>
      <p>
        amet consectetur adipiscing elit
      </p>
    </div>
</div>
 <div class="icon-1">
    <div class="icon-img">

        <img src={panel12} alt="" width="60"/>
    </div>
    <div class="icon-txt">
        <h3>Paneles</h3>
      <p>
        amet consectetur adipiscing elit
      </p>
    </div>
</div>
<div class="icon-1">
    <div class="icon-img">

        <img src={panel13} alt="" width="60"/>
    </div>
    <div class="icon-txt">
        <h3>Paneles.</h3>
      <p>
        amet consectetur adipiscing elit
      </p>
    </div>
</div>
</section>

<section class="blog container">

<div class="blog-1">
<img src={panel14} alt=""/>
<h3>panles solares termicos</h3>
<p>
Los paneles solares térmicos  recolectan el calor del sol y lo utilizan para calentar agua o aire. 
Los paneles solares térmicos se utilizan con mayor frecuencia para calentar agua para uso doméstico, 
pero también se pueden usar para calentar espacios o generar electricidad.
</p>

</div>

</section>

<div class="blog-1">
<img src={panel15} alt=""/>
<h3>paneles solares hibridos</h3>
<p>
Los paneles solares híbridos combinan las tecnologías fotovoltaica y térmica para generar electricidad y calor. 
Los paneles solares híbridos son una buena opción para aplicaciones que requieren tanto electricidad como calor, como hogares y negocios.
Los paneles solares híbridos están hechos de células solares y colectores solares.</p>

</div>

<div class="blog-1">
<img src={panel16} alt=""/>
<h3>paneles solares fotovoltaicos</h3>
<p>
Los paneles solares fotovoltaicos son dispositivos que convierten la luz solar en electricidad.Están compuestos por células solares, 
que son pequeñas unidades semiconductoras que absorben la luz solar y generan una corriente eléctrica.
Los paneles solares fotovoltaicos son una fuente de energía renovable y sostenible que no produce emisiones de carbono. 
Pueden usarse para generar electricidad para hogares, empresas y centrales eléctricas solares.</p>

</div>

<footer class="footer">

<div class="footer-content conatiner">

    <div class="link">
       <h3>Twitter</h3>
       <ul>

        <li><a href="#">panello</a></li>
        </ul> 
    </div>
   <div class="link">
        <h3>Correo electronico</h3>
        <ul>

         <li><a href="panello@gmail.com">Panello@gmail.com</a></li>
         </ul> 
     </div>
     <div class="link">
        <h3>Telefono</h3>
        <ul>

         <li><a href="#">8156789023</a></li>
         </ul> 
       
     </div>
</div>
</footer>




<script src="script.js"></script>

</body>

  );
}

export default App;
