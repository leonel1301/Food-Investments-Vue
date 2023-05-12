<template>
    <div class="card">
        <Toolbar
            :pt="{
                root: { style: { background: 'linear-gradient(to right, #8e2de2, #4a00e0)', borderRadius: '24px' } }
            }">
            <template #start>
                <h3 class="text-white">ToolBar</h3>
            </template>

            <template #end>
                <Button icon="pi pi-home" class="mr-2" />
            </template>
        </Toolbar>
    </div>
</template>

<script>
    export default {
        name: "ToolbarComponent"
    }
</script>

<style scoped>
.text-wight{
    color: #fff;
}
</style>