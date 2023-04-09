<style>
table,
th,
td {
  padding: 10px;
  border: 1px solid black;
  border-collapse: collapse;
}
</style>
<template>
  <div class="Dispositivos">
        
    Lista de Dispositivos
    <form @submit.prevent="$event =>CrearDispositivo()">
        <input type="text" v-model="payload.nombre" placeholder="nombre">
        <input type="text" v-model="payload.ordendecompra" placeholder="orden de compra">
        <input type="text" v-model="payload.descripcion" placeholder="descripcion">
        <input type="text" v-model="payload.fechavencimientogarantia" placeholder="fecha vencimiento de garantia">
        <input type="text" v-model="payload.precio" placeholder="precio">
        <input type="text" v-model="payload.dispositivo" placeholder="dispositivo">
        <button type="submit">Agregar</button>
        
    </form>
    <p></p>

      Dispositivos

      <p></p>
      
      <table border="1" class="table" align="center">
        <thead>
          <tr>
            <th scope="col">Id</th>
            <th scope="col">Nombre</th>
            <th scope="col">ordende de compra</th>
            <th scope="col">descripcion</th>
            <th scope="col">Fecha vencimiento garantia</th>
            <th scope="col">precio</th>
            <th scope="col">dispositivo</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="(value, key) in dispositivos" id="key">
            <th scope="row">{{ value.id }}</th>
            <td>{{ value.nombre}}</td>
            <td>{{ value.ordendecompra}}</td>
            <td>{{ value.descripcion }}</td>
            <td>{{ value.fechavencimientogarantia }}</td>
            <td>{{ value.precio }}</td>
            <td>{{ value.dispositivo }}</td>
            <td><button type="button" class="btn-primary" @click="editar (value)">editar</button>
            <button type="button" class="btn-danger" @click="eliminar (value)">eliminar</button></td>
          </tr>
        </tbody>
      </table> 
    
     

  </div>
  
</template>


<script>

export default {
        name:'DispositivosView',
        props:[],
        emits:[],
        data(){
            return{dispositivos:null,
              payload:{
                nombre:"",
                ordendecompra:"",
                descripcion:"",
                fechavencimientogarantia:"",
                pre:"",
                dispositivo:""
                }
            }
        },
        methods:{
            getDispositivo(){
                this.axios.get("http://192.168.100.37:8000/inventario/dispositivos/")
                
                .then((response)=>{
                    this.dispositivos=response.data;
                    console.log(response);})

                .catch((err)=>{console.log(err);})
            },
            CrearDispositivo(){
                this.axios.post("http://192.168.100.37:8000/inventario/dispositivos/",this.payload,{headers:{"accept":"accept"}})
                .then((response)=>(this.getDispositivo()))
                .catch((err)=>{console.log(err);})

            },
            editar (item){

            },
            eliminar(item){
                this.axios.delete("http://192.168.100.37:8000/inventario/dispositivos/"+item.id)
                .then((response)=>{
                    this.getDispositivo();
                    console.log(response);})

                .catch((err)=>{console.log(err);})

            }

        },
        computed:{},
        mounted(){
            this.getDispositivo();
        },
        components:{}

    }

</script>