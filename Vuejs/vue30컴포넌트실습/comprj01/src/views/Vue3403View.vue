<style scoped></style>
<template>
  <div id="app">
    자식 컴포넌트에서 받은 값: {{ mesg }}
    <Vue3403Comp v-on:showLog="printText"></Vue3403Comp>
  </div>
</template>

<script>
// vuex 라이브러리에서 mapActions, mapMutations, mapState, mapGetters 함를 가져옵니다.
// import { mapActions, mapMutations, mapState, mapGetters } from 'vuex';

import Vue3403Comp from '../components/vue3403/Vue3403Comp.vue';
export default {
  /* pdtmc^2w */
  props: [],
  data() {
    /* 컴포넌트 안에서 사용되는 변수 등록. 개별 변수 */
    return {
      mesg: null,
    };
  },
  //template: ``,
  methods: {
    /* 이벤트 핸들러 등록 + 일반 함수 */
    printText(param1, param2) {
      debugger;
      // console.log(e.target);
      console.log(param1, param2);
      this.$data.mesg = `param1=${param1},param2=${param2} `; // mesg에 값 넘겨주기
    },
  },
  components: {
    /* 전역 컴포넌트인 경우는 등록하지 않는다. 전역 컴포넌트는 프로토타입 체인으로 찾을 수 있기 때문에 */
    /* 지역 컴포넌트나 파일 컴포넌트만 등록 한다. 예시) "태그명" : 컴포넌트명 */
    Vue3403Comp: Vue3403Comp,
  },
};
</script>
