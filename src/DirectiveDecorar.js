import Vue from 'vue'

Vue.directive('decorar', {
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
  })