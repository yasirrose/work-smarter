<template>
  <b-row>
    <b-col cols="12">
      <b-card-code title="Update Profile">
        <div v-if="validationErrors">
            <ul class="alert alert-danger">
                <li v-for="(value, key, index) in validationErrors">{{ value }}</li>
            </ul>
        </div>
        <validation-observer ref="simpleRules">
        <b-form>
            <b-row>
            <b-col md="6">
                <b-form-group>
                <validation-provider
                    #default="{ errors }"
                    name="first_name"
                    rules="required"
                >
                    <b-form-input
                    v-model="first_name"
                    :state="errors.length > 0 ? false:null"
                    type="text"
                    placeholder="First Name"
                    />
                    <small class="text-danger">{{ errors[0] }}</small>
                </validation-provider>
                </b-form-group>
            </b-col>
            <b-col md="6">
                <b-form-group>
                <validation-provider
                    #default="{ errors }"
                    name="last_name"
                    rules="required"
                >
                    <b-form-input
                    v-model="last_name"
                    type="text"
                    :state="errors.length > 0 ? false:null"
                    placeholder="Last Name"
                    />
                    <small class="text-danger">{{ errors[0] }}</small>
                </validation-provider>
                </b-form-group>
            </b-col>
            <b-col md="6">
                <b-form-group>
                <validation-provider
                    #default="{ errors }"
                    name="email"
                    rules="required"
                >
                    <b-form-input
                    v-model="email"
                    :state="errors.length > 0 ? false:null"
                    type="email"
                    placeholder="Please Enter Email"
                    />
                    <small class="text-danger">{{ errors[0] }}</small>
                </validation-provider>
                </b-form-group>
            </b-col>
            <b-col md="6">
                <b-form-group>
                <validation-provider
                    #default="{ errors }"
                    name="mobile"
                    vid="mobile"
                    rules="required"
                >
                    <b-form-input
                    v-model="mobile"
                    type="text"
                    :state="errors.length > 0 ? false:null"
                    placeholder="Mobile Number"
                    />
                    <small class="text-danger">{{ errors[0] }}</small>
                </validation-provider>
                </b-form-group>
            </b-col>
            <b-col md="6">
                <b-form-group>
                <validation-provider
                    #default="{ errors }"
                    name="organization_name"
                    rules="required"
                >
                    <b-form-input
                    v-model="organization_name"
                    type="text"
                    :state="errors.length > 0 ? false:null"
                    placeholder="Organization Name"
                    />
                    <small class="text-danger">{{ errors[0] }}</small>
                </validation-provider>
                </b-form-group>
            </b-col>
            <b-col md="6">
                <b-form-group>
                <validation-provider
                    #default="{ errors }"
                    name="billing_address"
                    vid="billing_address"
                    rules="required"
                >
                    <b-form-input
                    v-model="billing_address"
                    type="text"
                    :state="errors.length > 0 ? false:null"
                    placeholder="Billing Address"
                    />
                    <small class="text-danger">{{ errors[0] }}</small>
                </validation-provider>
                </b-form-group>
            </b-col>
            <b-col md="6">
                <b-form-group>
                    <div>
                        <b-form-select
                            v-model="type"
                            :options="options"
                        />
                    </div>
                </b-form-group>
            </b-col>
            <!-- submit button -->
            <b-col>
                <b-button
                variant="primary"
                type="submit"
                @click.prevent="validationForm"
                >
                Submit
                </b-button>
            </b-col>
            </b-row>
        </b-form>
        </validation-observer>
    </b-card-code>
    </b-col>
  </b-row>
</template>
<script>
    import BCardCode from '@core/components/b-card-code'
    import { ValidationProvider, ValidationObserver, } from 'vee-validate'
    import {
    BFormInput, BFormGroup, BForm, BRow, BCol, BButton, BFormSelect
    } from 'bootstrap-vue'
    import {
    required, email, confirmed,
    } from '@validations'
    import AdminApi from '../../../api/admin'
    import ToastificationContent from '@core/components/toastification/ToastificationContent.vue'

    export default {
    components: {
        BCardCode,
        ValidationProvider,
        ValidationObserver,
        BFormInput,
        BFormGroup,
        BForm,
        BRow,
        BCol,
        BButton,
        BFormSelect
    },
    data() {
        return {
        first_name: '',
        last_name: '',
        email: '',
        mobile: '',
        organization_name: '',
        type: null,
        options: [
            { value: null, text: 'Please select an option' },
            { value: 'gov', text: 'GOV' },
            { value: 'edu', text: 'EDU' },
            { value: 'non-profit', text: 'Non-Profit' },
        ],
        billing_address: '',
        validationErrors: '',
        }
    },
    methods: {
         validationForm() {
            this.$refs.simpleRules.validate().then(success => {
                if (success) {
                this.validationErrors = '';
                AdminApi.updateProfileInfo(
                    this.info = {
                    "first_name" : this.first_name,
                    "last_name" : this.last_name,
                    "email" : this.email,
                    "mobile" : this.mobile,
                    "organization_name" : this.organization_name,
                    "billing_address" : this.billing_address,
                    "type" : this.type,
                    },
                    data=>{
                    if(data.success){
                        this.$toast({
                        component: ToastificationContent,
                        props: {
                            title: 'Success!',
                            text: data.message,
                            icon: 'UserIcon',
                            variant: 'success',
                        },
                        })
                        router.push({ name: 'user-accounts' })
                    }else{
                        if (data.status == 422){
                        this.validationErrors = data.message;
                        } else {
                            if (data.status == 422){
                                this.validationErrors = data.message;
                            } else {
                            this.$toast({
                                component: ToastificationContent,
                                props: {
                                title: 'Failed',
                                text: data.message,
                                icon: 'errorIcon',
                                variant: 'outline-danger',
                                },
                            })
                        }
                        }
                    }
                    },
                    err=>{
                    console.log(err);
                    }
                )
                }
            })
            },
        },
    }
</script>