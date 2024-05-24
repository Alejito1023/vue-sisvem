<template>
    <div class="container">
        <h1 class="text-star"> Listado Metodos de Pago
    <button @click="newPayMode()"
    class="btn btn-success mx-2">
    <font-awesome-icon icon="plus" />
</button>
   </h1>
       <table class="table">
        <thead>
            <tr>
                <th scope="col">#</th>
                <th scope="col">Codigo</th>
                <th scope="col">Nombre</th>
                <th scope="col">Observacion</th>
            </tr>
        </thead>
        <tbody>
            <tr v-for="(pay_mode,index) in pay_modes" :key="index">
                <th scope="row">{{ index+1 }}</th>
                <td>{{ pay_mode.id }}</td>
                <td>{{ pay_mode.name }}</td>
                <td>{{ pay_mode.observation }}</td>
                <td>
                    <button @click="deletePayMode(pay_mode.id)"
                    class="btn btn-danger mx-2">
                    <font-awesome-icon icon="trash" />
                </button>
                <button @click="editPayMode(pay_mode.id)"
                class="btn btn-warning mx-2">
                <font-awesome-icon icon="pencil" />
                </button>
                </td>
            </tr>
        </tbody>
     </table>
    </div>
    </template>
    
    <script>
    import axios from 'axios'
    import Swal from 'sweetalert2'
    
    export default {
    
        name: 'PayMode',
        data(){
            return{
                pay_modes: []
            }
        },
        methods:{
            deletePayMode(codigo){
                Swal.fire({
                    title:`Do you want to delete the paymode with id ${codigo}?`,
                    showCancelButton: true,
                    confirmButtonText:'Delete',                              
                }).then((result) =>{
                    if (result.isConfirmed) {
                       axios.delete(`http://127.0.0.1:8000/api/pay_modes/${codigo}`)
                       .then(response => {
                        if (respone.data.success) {
                            Swal.fire('Deleted!! ', '', 'success')
                            this.pay_modes = response.data.pay_modes
                        }
                       }) 
                    }
                })
            },
        
    
        editPayMode(id){
            this.$router.push({name:'EditarPayMode', params:{id: `${id}` }})
    
        },
        newPayMode(){
            this.$router.push({name:`NewPayMode`});
    
        }
    },
        mounted(){
            axios
                 .get('http://127.0.0.1:8000/api/pay_modes')
                 .then(response =>(this.pay_modes = response.data.pay_modes))
        },
    
    }
    </script>