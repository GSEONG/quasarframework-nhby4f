<template>
  <q-page :style-fn="myTweak" padding class="column wrapp">
    <q-card v-for="i in 10" :key="i" class="column flex-center bg-secondary">
      <q-avatar color="black" text-color="primary">C</q-avatar>
      <q-card-section>청춘예찬</q-card-section>
      <q-card-section
        >새가 거친 같은 것이다. 사라지지 찾아다녀도, 얼마나 심장은 평화스러운
        하는 봄바람이다. 능히 피는 관현악이며, 예가 그것은 이상은 그들의 어디
        공자는 것이다. 만천하의 무한한 목숨이 있으며, 피어나기 생생하며, 이상을
        곳이 부패뿐이다. 아니한 실로 심장의 보는 무엇을 예수는 생의 피에
        그리하였는가? 이 낙원을 지혜는 커다란 인생에 무엇을 위하여, 청춘은
        부패뿐이다. 구하지 인간이 두손을 때까지 용감하고 방황하여도, 힘있다.
        보이는 용감하고 싸인 품으며, 부패뿐이다. 그들은 생생하며, 평화스러운
        가는 만천하의 것이다. 이상, 못할 무엇을 인간은 더운지라 이성은
        황금시대다. 너의 용감하고 위하여서 그리하였는가? 가슴에 가치를 얼음
        방지하는 하는 눈이 열매를 피고, 전인 듣는다. 소리다.이것은 낙원을 봄날의
        몸이 가는 피다. 동산에는 그들의 생의 되려니와, 피에 이 주는 칼이다. 되는
        방황하여도, 위하여 피는 칼이다. 피고, 군영과 무엇을 이상을 보는 그들의
        돋고, 위하여서, 그리하였는가? 창공에 열매를 얼마나 피가 뿐이다. 찾아
        내려온 가치를 예가 듣는다. 실현에 갑 있는 듣기만 이상의 보배를 위하여서,
        부패뿐이다. 더운지라 꽃 눈에 자신과 가장 풍부하게 보이는 칼이다. 무한한
        없으면, 구하기 것은 얼마나 아니한 힘있다.</q-card-section
      >
    </q-card>
  </q-page>
</template>

<script setup>
const myTweak = (offset) => {
  return {
    minHeight: offset ? `calc(100vh - ${offset}px)` : '100vh',
  };
};
</script>

<style scoped lang="scss">
.wrapp {
  gap: 1em 3em;
}
</style>
