<style scoped>
.main {
  border: 1px solid black;
  background-color: yellow;
}
</style>

<template>
  <div class="main">
    {{ msg }}
    <child11></child11>
    {{ msg }}
  </div>
</template>

<script>
// vuex 라이브러리에서 mapActions, mapMutations, mapState, mapGetters 함를 가져옵니다.
// import { mapActions, mapMutations, mapState, mapGetters } from 'vuex';
import Compchild11 from './CompChild11.vue';

export default {
  data() {
    /* 컴포넌트 안에서 사용되는 변수 등록. 개별 변수 */
    return {
      msg: 'child1',
    };
  },
  components: {
    child11: Compchild11,
  },
};
</script>
