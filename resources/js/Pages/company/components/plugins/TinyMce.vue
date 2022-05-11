<template>
   <vue3-tinymce v-model="state.content" :setting="state.setting" @change="editNote"></vue3-tinymce>
</template>

<script>
import Vue3Tinymce from '@jsdawn/vue3-tinymce';
import {ref} from 'vue'
export default {
    name: "TinyMce",
    components: {
        Vue3Tinymce
    },
    setup(props, context){
        const state = ref({
            content: 'hello',
            setting: {
                height:400
            }
        })
        const editNote = (v) => {
            console.log(v)

        }
        return{
            state,
            editNote
        }
    },
    props: [],
}
</script>
<style scoped>

</style>

