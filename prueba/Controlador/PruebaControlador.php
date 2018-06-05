<?php
    
    require_once("../Modelo/PruebaModelo.php");
    
    $dato= new PruebaModelo();
    $Lista=$dato->getDatos();
    
    $res="";
    
    foreach($Lista as $registro){
        $res=$res . $registro["id"] . ";" . $registro["first_name"] . ";" . $registro["last_name"] . "##" ;
    }
    echo $res;
    
?>