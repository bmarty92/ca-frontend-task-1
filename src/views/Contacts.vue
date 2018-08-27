<template>
    <div class="view-contacts">
        <template v-if="!success">
            <AppTextField
                class="view-contacts__input"
                label="Vardas"
                v-model="form.name"
            />
            <AppTextarea
                class="view-contacts__textarea"
                label="Zinute"
                v-model="form.message"
            />
            <AppButton @click.native="onSubmit">Siusti</AppButton>
        </template>
        <template v-else>
            <h3>Success!!</h3>
            <pre>
                {{ form }}
            </pre>
        </template>
    </div>
</template>
<script>
import AppTextField from '@/components/AppTextField'
import AppTextarea from '@/components/AppTextarea'
import AppButton from '@/components/AppButton'
export default {
    name: 'ViewContacts',
    components: {
        AppTextField,
        AppTextarea,
        AppButton
    },
    data () {
        return {
            success: false,
            form: {
                name: '',
                message: ''
            }
        }
    },
    methods: {
        onSubmit () {
            if (this.form.name.length > 0 && this.form.message.length > 0) {
                this.success = !this.success
            }
        }
    }
}
</script>
<style lang="scss">
    .view-contacts {
        
        &__input, &__textarea {
            margin-bottom: 45px;
        }

        &__input {
            max-width: 300px;
        }
    }
</style>
