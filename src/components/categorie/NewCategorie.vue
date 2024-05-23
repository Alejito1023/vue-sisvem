<template>
    <div class="container text-start">
        <h1 class="text-primary fw-bold"> Editar</h1>
        <div class="card">
            <div class="card-header fw-bold">
                Categorias
            </div>
            <div class="card-body">
                <form @submit.prevent="saveCategorie">

                <div class="row mb-3">
                    <label for="cate_id" class="form-label">Codigo</label>
                    <div class="input-group">
                        <div class="input-group-text"> <font-awesome-icon icon="tag" /></div>
                        <input type="text" class="form-control" id="cate_id" placeholder="Codigo categorie" disabled
                        v-model="categorie.cate_id">
                    </div>
                </div>
                
                <div class="row mb-3">
                    <label for="nom_cate" class="form-label">Nombre: </label>
                    <div class="input-group">
                        <div class="input-group-text"> <font-awesome-icon icon="tag" /></div>
                        <input type="text" class="form-control" id="nom_cate" placeholder="Codigo categorie" disabled
                        v-model="categorie.nom_cate">
                    </div>
                    <div class="row mb-3">
                    <label for="descripcion" class="form-label">Descripcion: </label>
                    <div class="input-group">
                        <div class="input-group-text"> <font-awesome-icon icon="tag" /></div>
                        <input type="text" class="form-control" id="descripcion" placeholder="Codigo categorie" disabled
                        v-model="categorie.descripcion">
                    </div>    
                </div>
            </div>
            <div class="row mb-3">
                <label for="product_id" class="form-label">Productos: </label>
                <div class="input-group">
                    <div class="input-group-text"> <font-awesome-icon icon="bank" /></div>
                    <select class="form-select" v-model="product_id">
                        <option select value="0">Seleccionar Categoria</option>
                        <option v-for="product in products" v-bind:value="product.product_id">{{ product.nombre }}</option>
                    </select>
                </div>
            </div>
            <button class="btn btn-primary" type="submit">Save</button>
            <button class="btn btn-secondary mx-2" @click="cancelar">Cancelar</button>
                </form>
        </div>
    </div>
</div>
</template>

<script>
import axios from `axios`
import Swal from `sweetalert2`

export default {
    name: 'EditarCategorie',
    data(){
      return{
        categorie:{
            cate_id:0,
            nom_cate:'',
            product_id:0


        },
        products: [],
        product_id: "0";
    }
},

methods:{
    cancel(){
        this.$router.push({name: 'Categories'})
    },

    async saveCategorie(){
        this.categorie.product_id = this.product_id
        const res = await axios.put(`http://127.0.0.1:8000/api/categories/`,this.categorie)

        if (res.status == 200){
            this.$router.push({name: 'Categories'})
            Swal.fire({
                position: 'top-end',
                icon: 'success',
                title: 'Categorie has been updated',
                shorConfirmButton: false,
                timer: 2000
            })
        }
    }
},
mounted(){

axios.get(`http://127.0.0.1:8000/api/municipios/`)
     .then(response => {
        
        this.products = response.data.products
     })
},


}
</script>