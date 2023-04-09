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
    <form @submit.prevent="$event =>CrearUsuario()">
        <input type="text" v-model="payload.nombre" placeholder="nombre">
        <input type="text" v-model="payload.cedula" placeholder="orden de compra">
        <input type="text" v-model="payload.fecharegistro" placeholder="descripcion">
        <input type="text" v-model="payload.email" placeholder="fecha vencimiento de garantia">
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
            <th scope="col">cedula</th>
            <th scope="col">fecha de registro</th>
            <th scope="col">Email</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="(value, key) in usuarios" id="key">
            <th scope="row">{{ value.id }}</th>
            <td>{{ value.nombre}}</td>
            <td>{{ value.cedula}}</td>
            <td>{{ value.fecharegistro }}</td>
            <td>{{ value.email }}</td>
            <td><button type="button" class="btn-primary" @click="editar (value)">editar</button>
            <button type="button" class="btn-danger" @click="eliminar (value)">eliminar</button></td>
          </tr>
        </tbody>
      </table> 
    
     

  </div>
  
</template>


<script>

export default {
        name:'UsuarioView',
        props:[],
        emits:[],
        data(){
            return{usuarios:null,
              payload:{
                nombre:"",
                cedula:"",
                fecharegistro:"",
                email:""
                }
            }
        },
        methods:{
            getUsuario(){
                this.axios.get("http://192.168.100.37:8000/inventario/usuario/")
                
                .then((response)=>{
                    this.usuarios=response.data;
                    console.log(response);})

                .catch((err)=>{console.log(err);})
            },
            CrearUsuario(){
                this.axios.post("http://192.168.100.37:8000/inventario/usuario/",this.payload,{headers:{"accept":"accept"}})
                .then((response)=>(this.getUsuario()))
                .catch((err)=>{console.log(err);})

            },
            editar (item){

            },
            eliminar(item){
                this.axios.delete("http://192.168.100.37:8000/inventario/usuario/"+item.id)
                .then((response)=>{
                    this.getUsuario();
                    console.log(response);})

                .catch((err)=>{console.log(err);})

            }

        },
        computed:{},
        mounted(){
            this.getUsuario();
        },
        components:{}

    }

</script>