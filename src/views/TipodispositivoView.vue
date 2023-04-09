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
    <form @submit.prevent="$event =>CrearTipodispositivo()">
        <input type="text" v-model="payload.nombre" placeholder="nombre">
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
          </tr>
        </thead>
        <tbody>
          <tr v-for="(value, key) in tipodispositivo" id="key">
            <th scope="row">{{ value.id }}</th>
            <td>{{ value.nombre}}</td>
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
            return{tipodispositivo:null,
              payload:{
                nombre:""
                }
            }
        },
        methods:{
            getTipodispositivo(){
                this.axios.get("http://192.168.100.37:8000/inventario/tipodispositivo/")
                
                .then((response)=>{
                    this.tipodispositivo=response.data;
                    console.log(response);})

                .catch((err)=>{console.log(err);})
            },
            CrearCategoria(){
                this.axios.post("http://192.168.100.37:8000/inventario/tipodispositivo/",this.payload,{headers:{"accept":"accept"}})
                .then((response)=>(this.getTipodispositivo()))
                .catch((err)=>{console.log(err);})

            },
            editar (item){

            },
            eliminar(item){
                this.axios.delete("http://192.168.100.37:8000/inventario/tipodispositivo/"+item.id)
                .then((response)=>{
                    this.getTipodispositivo();
                    console.log(response);})

                .catch((err)=>{console.log(err);})

            }

        },
        computed:{},
        mounted(){
            this.getTipodispositivo();
        },
        components:{}

    }

</script>