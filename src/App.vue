<template>
  <div class="container">
    <div class="jumbotron">
      <div>
        <span v-decorar:grande.negrilla.italico="{familia:'helvetica', color:'red'}">Aprende vue.js</span>
      </div>
      <div>
        <span v-decorar-local:pequeno.negrilla.italico="{familia:'serif', color:'green'}">Aprende vue.js</span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  directives :{
    'decorar-local': {
    bind(el, binding, vnode){
        el.style.fontFamily = binding.value.familia;
        el.style.color = binding.value.color;

        if(binding.arg == 'grande'){
            el.style.fontSize = '50px';
        }
        if(binding.arg == 'pequeno'){
            el.style.fontSize = '10px';
        }
        if(binding.modifiers['negrilla']){
            el.style.fontWeight = 'bold';
        }
        if(binding.modifiers['italico']){
            el.style.fontStyle = 'italic';
        }
    }
  }
  }
}
</script>

<style>
</style>
