<template>
    <div class="container">
       <h1> Listado de Productos</h1>
       <table class="table">
        <thead>
            <tr>
                <th scope="col">#</th>
                <th scope="col">Codigo</th>
                <th scope="col">Nombre</th>
                <th scope="col">Price</th>
                <th scope="col">Stock</th>
                <th scope="col">Categoria Id</th>

            </tr>
        </thead>
        <tbody>
            <tr v-for="(product,index) in products" :key="index">
                <th scope="row">{{ index+1 }}</th>
                <td>{{ product.product_id }}</td>
                <td>{{ product.nombre }}</td>
                <td>{{ product.price }}</td>
                <td>{{ product.stock }}</td>
                <td>{{ product.cate_id }}</td>
                <td>
                    <button @click="deleteProduct(product.product_id)"
                    class="btn btn-danger mx-2">
                    <font-awesome-icon icon="trash" />
                </button>
                <button @click="editProduct(product.product_id)"
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
    
        name: 'Product',
        data(){
            return{
                products: []
            }
        },
        methods:{
            deleteProduct(codigo){
                Swal.fire({
                    title:`Do you want to delete the product with id ${codigo}?`,
                    showCancelButton: true,
                    confirmButtonText:'Delete',                              
                }).then((result) =>{
                    if (result.isConfirmed) {
                       axios.delete(`http://127.0.0.1:8000/api/products/${codigo}`)
                       .then(response => {
                        if (respone.data.success) {
                            Swal.fire('Deleted!! ', '', 'success')
                            this.products = response.data.products
                        }
                       }) 
                    }
                })
            },
        
    
        editProduct(id){
            this.$router.push({name:'EditarProduct', params:{id: `${id}` }})
    
        },
        newProduct(){
            this.$router.push({name:`NewProduct`});
    
        }
    },
        mounted(){
            axios
                 .get('http://127.0.0.1:8000/api/products')
                 .then(response =>(this.products = response.data.products))
        },
    
    }
    </script>