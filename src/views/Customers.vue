<template>
    <div class="container">
        <h1 class="text-star"> Listado Clientes
    <button @click="newCustomer()"
    class="btn btn-success mx-2">
    <font-awesome-icon icon="plus" />
</button>
   </h1>
       <table class="table">
        <thead>
            <tr>
                <th scope="col">Codigo</th>
                <th scope="col">Documento</th>
                <th scope="col">Primer Nombre</th>
                <th scope="col">Segundo Nombre</th>
                <th scope="col">Direccion</th>
                <th scope="col">Cumpleaños</th>
                <th scope="col">Telefono</th>
                <th scope="col">Email</th>
      
            </tr>
        </thead>
        <tbody>
            <tr v-for="(customer,index) in customers" :key="index">
                <th scope="row">{{ index+1 }}</th>
                <th scope="row">{{ $customer->id}}</th>
                <td>{{ $customer->document_number}}</td>
                <td>{{ $customer->first_name}}</td>
                <td>{{ $customer->last_name}}</td>
                <td>{{ $customer->address}}</td>
                <td>{{ $customer->birthday}}</td>
                  <td>{{ $customer->phone_number}}</td>
                     <td>{{ $customer->email}}</td>
                <td>
                    <button @click="deleteCustomer(customer.id)"
                    class="btn btn-danger mx-2">
                    <font-awesome-icon icon="trash" />
                </button>
                <button @click="editCustomer(customer.id)"
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
    
        name: 'Customer',
        data(){
            return{
                customers: []
            }
        },
        methods:{
            deleteCustomer(codigo){
                Swal.fire({
                    title:`Do you want to customer the paymode with id ${codigo}?`,
                    showCancelButton: true,
                    confirmButtonText:'Delete',                              
                }).then((result) =>{
                    if (result.isConfirmed) {
                       axios.delete(`http://127.0.0.1:8000/api/customers/${codigo}`)
                       .then(response => {
                        if (respone.data.success) {
                            Swal.fire('Deleted!! ', '', 'success')
                            this.customers = response.data.customers
                        }
                       }) 
                    }
                })
            },
        
    
        editCustomer(id){
            this.$router.push({name:'EditarCustomer', params:{id: `${id}` }})
    
        },
        newCustomer(){
            this.$router.push({name:`NewCustomer`});
    
        }
    },
        mounted(){
            axios
                 .get('http://127.0.0.1:8000/api/customers')
                 .then(response =>(this.customers = response.data.customers))
        },
                                                                                                                                                                                                                            
    }
    </script>