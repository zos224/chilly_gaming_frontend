<template>
   <div>
    <header id="header" class="shadow">
      <div class="mx-auto max-w-7xl py-6 px-4 sm:px-6 lg:px-8">
        <slot name="header"></slot>
      </div>
    </header>
    <main>
      <div id="container" class="mx-auto max-w-7xl py-6 sm:px-6 lg:px-8">
        <!-- Replace with your content -->
        <div class="px-4 py-6 sm:px-0 h-full">
            <slot></slot>
        </div>
        <!-- /End replace -->
      </div>
    </main>
  </div> 
</template>
<script setup>

</script>
<style>
#header
{
  background-color: #e8ede9;
}
</style>