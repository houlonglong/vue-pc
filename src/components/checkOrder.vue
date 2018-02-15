<template>
  <div>
    <this-dialog :is-show="isShowCheckDialog">
      请检查你的支付状态！
      <div class="button" @click="checkStatus" @on-close="checkStatus">
        支付成功
      </div>
      <div class="button" @click="checkStatus" @on-close="checkStatus">
        支付失败 
      </div>
    </this-dialog>
    <this-dialog  :is-show="isShowSuccessDialog">
      购买成功！
    </this-dialog>
    <this-dialog :is-show="isShowFailDialog" >
      购买失败！
    </this-dialog>
  </div>
</template>

<script>
import MyDialog from './base/dialog'

export default {
    components:{
        thisDialog:MyDialog 
    },
    props:{
        isShowCheckDialog: {
            type: Boolean,
            default: false

        },
        orderId: {
        type: [String, Number]
        }
    },
    data(){
        return {
            isShowSuccessDialog: false,
            isShowFailDialog: false
        }
   
    },
    methods:{
        checkStatus(){
          this.$http.post('/api/checkOrder', {
            orderId: this.orderId
        })
        .then((res) => {
            this.isShowSuccessDialog = true
            this.$emit('on-close-check-dialog')
        }, (err) => {
            this.isShowFailDialog = true
            this.$emit('on-close-check-dialog')
        })
        }
    }

}
</script>