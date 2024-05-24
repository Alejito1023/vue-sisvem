<template>
    <div class="container text-start">
        <h1 class="text-primary fw-bold"> New</h1>
        <div class="card">
            <div class="card-header fw-bold">
                Metodos de Pago
            </div>
            <div class="card-body">
                <form @submit.prevent="savePayMode">

                <div class="row mb-3">
                    <label for="id" class="form-label">Codigo</label>
                    <div class="input-group">
                        <div class="input-group-text"> <font-awesome-icon icon="tag" /></div>
                        <input type="text" class="form-control" id="id" placeholder="Codigo pay_mode" disabled
                        v-model="pay_mode.id">
                    </div>
                </div>
                
                <div class="row mb-3">
                    <label for="name" class="form-label">Nombre: </label>
                    <div class="input-group">
                        <div class="input-group-text"> <font-awesome-icon icon="tag" /></div>
                        <input type="text" class="form-control" id="name" placeholder="Codigo pay_mode" disabled
                        v-model="pay_mode.name">
                    </div>
                    <div class="row mb-3">
                    <label for="observation" class="form-label">Observacion: </label>
                    <div class="input-group">
                        <div class="input-group-text"> <font-awesome-icon icon="tag" /></div>
                        <input type="text" class="form-control" id="observation" placeholder="Codigo pay_mode" disabled
                        v-model="pay_mode.observation">
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
    name: 'EditarPayMode',
    data(){
      return{
        pay_mode:{
            id:0,
            name:'',
            observation:0


        },
        invoices: [],
        id:'0'  
    }
},

methods:{
    cancel(){
        this.$router.push({name: 'PayModes'})
    },

    async savePayMode(){
        this.$pay_mode.id = this.id
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