<template>
<div class="container">
   <h1> Listado de Categorias</h1>
   <table class="table">
    <thead>
        <tr>
            <th scope="col">#</th>
            <th scope="col">Codigo</th>
            <th scope="col">Nombre</th>
            <th scope="col">Descripcion</th>
        </tr>
    </thead>
    <tbody>
        <tr v-for="(categorie,index) in categories" :key="index">
            <th scope="row">{{ index+1 }}</th>
            <td>{{ categorie.cate_id }}</td>
            <td>{{ categorie.nombre }}</td>
            <td>{{ categorie.descripcion }}</td>
            <td>
                <button @click="deleteCategorie(categorie.cate_id)"
                class="btn btn-danger mx-2">
                <font-awesome-icon icon="trash" />
            </button>
            <button @click="editCategorie(categorie.cate_id)"
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

    name: 'Categorie',
    data(){
        return{
            categories: []
        }
    },
    methods:{
        deleteCategorie(codigo){
            Swal.fire({
                title:`Do you want to delete the categorie with id ${codigo}?`,
                showCancelButton: true,
                confirmButtonText:'Delete',                              
            }).then((result) =>{
                if (result.isConfirmed) {
                   axios.delete(`http://127.0.0.1:8000/api/categories/${codigo}`)
                   .then(response => {
                    if (respone.data.success) {
                        Swal.fire('Deleted!! ', '', 'success')
                        this.categories = response.data.categories
                    }
                   }) 
                }
            })
        },
    

    editCategorie(id){
        this.$router.push({name:'EditarCategorie', params:{id: `${id}` }})

    },
    newCategorie(){
        this.$router.push({name:`NewCategorie`});

    }
},
    mounted(){
        axios
             .get('http://127.0.0.1:8000/api/categories')
             .then(response =>(this.categories = response.data.categories))
    },

}
</script>