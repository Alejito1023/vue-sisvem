<template>
    <div class="container text-start">
        <h1 class="text-primary fw-bold"> New</h1>
        <div class="card">
            <div class="card-header fw-bold">
                Productos
            </div>
            <div class="card-body">
                <form @submit.prevent="saveProduct">

                <div class="row mb-3">
                    <label for="product_id" class="form-label">Codigo</label>
                    <div class="input-group">
                        <div class="input-group-text"> <font-awesome-icon icon="tag" /></div>
                        <input type="text" class="form-control" id="product_id" placeholder="Codigo product" disabled
                        v-model="product.product_id">
                    </div>
                </div>
                
                <div class="row mb-3">
                    <label for="nombre" class="form-label">Nombre: </label>
                    <div class="input-group">
                        <div class="input-group-text"> <font-awesome-icon icon="tag" /></div>
                        <input type="text" class="form-control" id="nombre" placeholder="Codigo product" disabled
                        v-model="product.nombre">
                    </div>
                    <div class="row mb-3">
                    <label for="price" class="form-label">Price: </label>
                    <div class="input-group">
                        <div class="input-group-text"> <font-awesome-icon icon="tag" /></div>
                        <input type="text" class="form-control" id="price" placeholder="Codigo product" disabled
                        v-model="product.price">
                    </div>    
                </div>
                <div class="row mb-3">
                    <label for="stock" class="form-label">Stock: </label>
                    <div class="input-group">
                        <div class="input-group-text"> <font-awesome-icon icon="tag" /></div>
                        <input type="text" class="form-control" id="stock" placeholder="Codigo product" disabled
                        v-model="product.stock">
                    </div>    
                </div>
                <div class="row mb-3">
                    <label for="cate_id" class="form-label">Categoria Id: </label>
                    <div class="input-group">
                        <div class="input-group-text"> <font-awesome-icon icon="tag" /></div>
                        <input type="text" class="form-control" id="cate_id" placeholder="Codigo product" disabled
                        v-model="product.cate_id">
                    </div>    
                </div>
            </div>
            <div class="row mb-3">
                <label for="cate_id" class="form-label">Categorias: </label>
                <div class="input-group">
                    <div class="input-group-text"> <font-awesome-icon icon="bank" /></div>

                    <select class="form-select" v-model="cate_id">
                        <option select value="0">Seleccionar Producto</option>
                        <option v-for="categorie in categories" v-bind:value="categorie.cate_id">{{ categorie.nom_cate }}</option>
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
    name: 'EditarProduct',
    data(){
      return{
        product:{
            product_id:0,
            nombre:'',
            price:0,
            stock:'',
            cate_id:0


        },
        categories: [],
        cate_id: "0"
    }
},

methods:{
    cancel(){
        this.$router.push({name: 'Products'})
    },

    async saveProduct(){
        this.product.cate_id = this.cate_id
        const res = await axios.put(`http://127.0.0.1:8000/api/products/`,this.product)

        if (res.status == 200){
            this.$router.push({name: 'Products'})
            Swal.fire({
                position: 'top-end',
                icon: 'success',
                title: 'Product has been updated',
                shorConfirmButton: false,
                timer: 2000
            })
        }
    }
},
mounted(){

axios.get(`http://127.0.0.1:8000/api/products/`)
     .then(response => {
        
        this.categories = response.data.categories
     })
},


}
</script>