<template>
  <div>
    <comp-1>Comp1</comp-1>
    <comp-2>
      <template v-slot:default>具名插槽default</template>
      <template v-slot:content>具名插槽content</template>
    </comp-2>
    <comp-3>
      <template v-slot:default='slotProps'>{{slotProps.foo}}-{{slotProps.bar}}</template>
    </comp-3>
  </div>
</template>

<script>
import comp1 from './Comp1'
import comp2 from './Comp2'
import comp3 from './Comp3'
export default {
  components: { comp1, comp2, comp3 }
}
</script>

<style>

</style>
