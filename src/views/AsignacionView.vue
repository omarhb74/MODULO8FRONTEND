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
  <div class="Asignaciones">
        
    Lista de Dispositivos
    <form @submit.prevent="$event =>CrearAsignacion()">
        <input type="text" v-model="payload.descripcion" placeholder="nombre">
        <input type="text" v-model="payload.estado" placeholder="orden de compra">
        <input type="text" v-model="payload.fecha" placeholder="descripcion">
        <input type="text" v-model="payload.dispositivo" placeholder="fecha vencimiento de garantia">
        <input type="text" v-model="payload.cliente" placeholder="precio">
        <button type="submit">Agregar</button>
        
    </form>
    <p></p>

      Dispositivos

      <p></p>
      
      <table border="1" class="table" align="center">
        <thead>
          <tr>
            <th scope="col">Id</th>
            <th scope="col">Descripcion</th>
            <th scope="col">Estado</th>
            <th scope="col">fecha</th>
            <th scope="col">dispositivo</th>
            <th scope="col">cliente</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="(value, key) in asignaciones" id="key">
            <th scope="row">{{ value.id }}</th>
            <td>{{ value.descripcion}}</td>
            <td>{{ value.estado}}</td>
            <td>{{ value.fecha }}</td>
            <td>{{ value.dispositivo }}</td>
            <td>{{ value.cliente }}</td>
            <td><button type="button" class="btn-primary" @click="editar (value)">editar</button>
            <button type="button" class="btn-danger" @click="eliminar (value)">eliminar</button></td>
          </tr>
        </tbody>
      </table> 
    
     

  </div>
  
</template>


<script>

export default {
        name:'AsignacionView',
        props:[],
        emits:[],
        data(){
            return{asignaciones:null,
              payload:{
                descripcion:"",
                estado:"",
                fecha:"",
                dispositivo:"",
                cliente:""
                }
            }
        },
        methods:{
            getAsignacion(){
                this.axios.get("http://192.168.100.37:8000/inventario/asignacion/")
                
                .then((response)=>{
                    this.asignaciones=response.data;
                    console.log(response);})

                .catch((err)=>{console.log(err);})
            },
            CrearAsignacion(){
                this.axios.post("http://192.168.100.37:8000/inventario/dispositivos/",this.payload,{headers:{"accept":"accept"}})
                .then((response)=>(this.getAsignacion()))
                .catch((err)=>{console.log(err);})

            },
            editar (item){

            },
            eliminar(item){
                this.axios.delete("http://192.168.100.37:8000/inventario/dispositivos/"+item.id)
                .then((response)=>{
                    this.getAsignacion();
                    console.log(response);})

                .catch((err)=>{console.log(err);})

            }

        },
        computed:{},
        mounted(){
            this.getAsignacion();
        },
        components:{}

    }

</script>