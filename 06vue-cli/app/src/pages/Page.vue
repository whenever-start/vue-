<template>
    <div class="container">
        <slot name="cross"></slot>
        <div class="center">
            <slot></slot>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'Page',
        data() {
            return {
                
            }
        }
    }
</script>

<style lang="less" scoped>
    @import "../stylesheets/function";
    .container{
        .center{
            .center;
        }
    }
</style>