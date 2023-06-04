
// vue 플러그인
< !--vue 플러그인 임포트-- >
<script src="https://unpkg.com/vue@2.7.8/dist/vue.js">/* vue 플러그인 임포트 */</script>
<script src="https://unpkg.com/vuex@3.6.2/dist/vuex.js"> /* vuex 플러그인 임포트 */</script>
<script src="https://unpkg.com/vue-router@3.5.4/dist/vue-router.js"> /* vue 라우터 플러그인 임포트 */</script>
<script src="https://unpkg.com/axios/dist/axios.min.js"> /* axios 플러그인 임포트 */</script>
<script src="https://ajax.googleapis.com/ajax/libs/jquery/3.5.1/jquery.min.js"> /* jQuery 플러그인 임포트 */</script>
<script>


</script>

// vue 인스턴스
new Vue({
    /* edtmc^2w */
    el: '',
    data: {
      /* 인스턴스 안에서 사용되는 변수 등록, 공유 변수 */

    },
    //template: ``,
    methods: {
      /* 이벤트 핸들러 등록 + 일반 함수 */

    },
    components: {
      /* 전역 컴포넌트인 경우는 등록하지 않는다. 전역 컴포넌트는 프로토타입 체인으로 찾을 수 있기 때문에 */
      /* 지역 컴포넌트나 파일 컴포넌트만 등록 한다. 예시) "태그명" : 컴포넌트명 */

    },
    computed: {
      /* 자동처리 + 동기식. 변수명이 메서드 명이다. 메서드로 작성. return 필수.  data 와 공존 불가 */

    },
    watch: {
      /* 자동처리 + 비동기식. data 에 등록된 프로퍼티(변수) 모니터링. 메서드로 작성. 매개변수 필수. 외부 api 호출을 위해서 사용 */

    },
    created() {
      console.log("created");
    },
    mounted() {
      console.log("mounted");
    },
    updated() {
      console.log("updated");
    },
});

<style scoped></style>

<template>
  <div>
    aa
  </div>
</template>

<script>
 // vuex 라이브러리에서 mapActions, mapMutations, mapState, mapGetters 함를 가져옵니다.
 // import { mapActions, mapMutations, mapState, mapGetters } from 'vuex';

  export default {
    /* pdtmc^2w */
    props: [] ,
    data() {
      /* 컴포넌트 안에서 사용되는 변수 등록. 개별 변수 */
      return {

      }
    },
    //template: ``,
    methods: {
      /* 이벤트 핸들러 등록 + 일반 함수 */

      /* vuex 를 사용하는 경우
      mapActions 는 store의 actions 를 가져오는 헬퍼 메서드입니다.
      namespaced: true를 설정한 경우 네임스페이스를 사용하기 때문에 store의 모듈 명을 적어주어야 합니다.
      store 모듈에서 actions 를 가져오는 2가지 방식
      1) store.모듈명.actions 이름 바꾸어 사용하기(추천방식)
         ...mapActions('모듈명', { dispatch액션명1: '액션명1', dispatch액션명2: '액션명2' }),
      2) store.모듈명.actions 이름 그대로 사용하기
         ...mapActions('모듈명', ['액션명1', '액션명2']),
      */

    },
    components: {
      /* 전역 컴포넌트인 경우는 등록하지 않는다. 전역 컴포넌트는 프로토타입 체인으로 찾을 수 있기 때문에 */
      /* 지역 컴포넌트나 파일 컴포넌트만 등록 한다. 예시) "태그명" : 컴포넌트명 */

    },
    computed: {
      /* 자동처리 + 동기식. 메서드로 작성. return 필수. data 와 공존 불가 */

      /* vuex 를 사용하는 경우
      mapGetters 는 store의 getters 를 가져오는 헬퍼메서드입니다.
      namespaced: true를 설정한 경우 네임스페이스를 사용하기 때문에 store의 모듈 명을 적어주어야 합니다.
      store 모듈에서 getters 를 가져오는 2가지 방식
      1) store.모듈명.getters 이름 바꾸어 사용하기
         ...mapGetters('모듈명', { get게터명1: '게터명1', get게터명2: '게터명2' }),
      2) store.모듈명.getters 이름 그대로 사용하기(추천방식)
         ...mapGetters('모듈명', ['게터명1', '게터명2']),
      */

    },
    watch: {
        /* 자동처리 + 비동기식. data 에 등록된 프로퍼티(변수) 모니터링. 메서드로 작성. 매개변수 필수. 외부 api 호출을 위해서 사용 */

    },
    created() {
      console.log("created");
    },
    mounted() {
      console.log("mounted");
      /* store의 actions 호출 */
      // this.$store.dispatch('액션명', payload);
    },
    updated() {
      console.log("updated");
    },
  }
</script>
