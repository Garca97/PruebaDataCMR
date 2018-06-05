<?php
class PruebaModelo{
    private $db;
    private $Datos;
    
    public function __construct(){
        require_once("../Modelo/Conexion.php");
        $this->db=conectar::conexion();
        $this->Datos=array();
    }
    
    public function getDatos(){
        $consulta=$this->db->query("select * from prueba");
        
        while($filas=$consulta->fetch(PDO::FETCH_ASSOC)){
            $this->Datos[]=$filas;
        }
        return $this->Datos;
    }
    
    
    
}
?>