<template>
    <div class="container text-start">
        <h1 class="text-primary fw-bold"> Editar</h1>
        <div class="card">
            <div class="card-header fw-bold">
                Clientes
            </div>
            <div class="card-body">
                <form @submit.prevent="updateCustomer">

                <div class="row mb-3">
                    <label for="id" class="form-label">Codigo</label>
                    <div class="input-group">
                        <div class="input-group-text"> <font-awesome-icon icon="tag" /></div>
                        <input type="text" class="form-control" id="id" placeholder="Codigo pay_mode" disabled
                        v-model="customer.id">
                    </div>
                </div>
                
                <div class="row mb-3">
                    <label for="document_number" class="form-label">Documento: </label>
                    <div class="input-group">
                        <div class="input-group-text"> <font-awesome-icon icon="tag" /></div>
                        <input type="text" class="form-control" id="document_number" placeholder="Codigo customer" disabled
                        v-model="customer.document_number">
                    </div>
                    <div class="row mb-3">
                    <label for="first_name" class="form-label">Primer Nombre: </label>
                    <div class="input-group">
                        <div class="input-group-text"> <font-awesome-icon icon="tag" /></div>
                        <input type="text" class="form-control" id="first_name" placeholder="Codigo customer" disabled
                        v-model="customer.first_name">
                    </div>    
                </div>
                <div class="row mb-3">
                    <label for="last_name" class="form-label">Segundo Nombre: </label>
                    <div class="input-group">
                        <div class="input-group-text"> <font-awesome-icon icon="tag" /></div>
                        <input type="text" class="form-control" id="last_name" placeholder="Codigo customer" disabled
                        v-model="customer.last_name">
                    </div>    
                </div>
                <div class="row mb-3">
                    <label for="address" class="form-label">Direccion: </label>
                    <div class="input-group">
                        <div class="input-group-text"> <font-awesome-icon icon="tag" /></div>
                        <input type="text" class="form-control" id="address" placeholder="Codigo customer" disabled
                        v-model="customer.address">
                    </div>    
                </div>
                <div class="row mb-3">
                    <label for="birthday" class="form-label">Cumpleaños: </label>
                    <div class="input-group">
                        <div class="input-group-text"> <font-awesome-icon icon="tag" /></div>
                        <input type="text" class="form-control" id="birthday" placeholder="Codigo customer" disabled
                        v-model="customer.birthday">
                    </div>    
                </div>
                <div class="row mb-3">
                    <label for="phone_number" class="form-label">Telefono: </label>
                    <div class="input-group">
                        <div class="input-group-text"> <font-awesome-icon icon="tag" /></div>
                        <input type="text" class="form-control" id="phone_number" placeholder="Codigo customer" disabled
                        v-model="customer.phone_number">
                    </div>    
                </div>
                <div class="row mb-3">
                    <label for="email" class="form-label">Correo electronico: </label>
                    <div class="input-group">
                        <div class="input-group-text"> <font-awesome-icon icon="tag" /></div>
                        <input type="text" class="form-control" id="email" placeholder="Codigo customer" disabled
                        v-model="customer.email">
                    </div>    
                </div>
            </div>
            <div class="row mb-3">
                <label for="invoices" class="form-label">Facturas: </label>
                <div class="input-group">
                    <div class="input-group-text"> <font-awesome-icon icon="bank" /></div>
                    <select class="form-select" v-model="invoice.id">
                        <option v-for="invoice in invoices" v-bind:value="invoice.id">{{ invoice.number }}</option>
                    </select>
                </div>
            </div>
            <button class="btn btn-primary" type="submit">Actualizar</button>
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
    name: 'EditarPayMode',
    data(){
      return{
        pay_mode:{
            id:0,
            name:'',
            observation:0


        },
        invoices: []
    }
},

methods:{
    cancelar(){
        this.$router.push({name: 'PayModes'})
    },

    async updatePayMode(){
        const res = await axios.put(`http://127.0.0.1:8000/api/pay_modes/${this.pay_mode.id}`,this.pay_mode)

        if (res.status == 200){
            this.$router.push({name: 'PayModes'})
            Swal.fire({
                position: 'top-end',
                icon: 'success',
                title: 'PayMode has been updated',
                shorConfirmButton: false,
                timer: 2000
            })
        }
    }
},
mounted(){
this.pay_mode.id = this.$route.params-id;
axios.get(`http://127.0.0.1:8000/api/pay_modes/${this.pay_mode.id}`)
     .then(response => {
        this.pay_mode = response.data.pay_mode;
        this.invoices = response.data.invoices
     })
},


}
</script>