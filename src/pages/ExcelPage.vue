<template>
  <q-page class="flex column flex-center">
    <!-- <q-file v-model="model" label="Select ExcelFile" hint="엑셀파일" /> -->
    <q-input type="file" hint="엑셀파일" @update:model-value="handleFile" />

    <q-table class="full-width" separator="cell" :rows="tableData">
      <template #top>
        <q-tabs
          v-model="tab"
          dense
          inline-label
          class="bg-primary text-white shadow-2"
        >
          <q-tab
            v-for="item in sheetList"
            :key="item"
            :name="item"
            :label="item"
            @click="fetchSheetData"
          />
        </q-tabs>
      </template>
    </q-table>
  </q-page>
</template>

<script setup>
import { ref, watchEffect } from 'vue';
import { read, utils } from 'xlsx';

const model = ref(null);
const file = ref(null);

const row = ref({});
const sheetList = ref([]);
const tableData = ref([]);

const tab = ref(null);

async function handleFile(event) {
  const file = event[0];
  console.log(file);
  const data = await file.arrayBuffer();
  const workbook = read(data);

  sheetList.value = workbook.SheetNames;
  tab.value = sheetList.value[0];

  console.log(workbook.SheetNames);

  sheetList.value.forEach((sheetName, index) => {
    const sheetObject = {
      [`${sheetName}`]: utils.sheet_to_json(
        workbook.Sheets[workbook.SheetNames[index]]
      ),
    };
    Object.assign(row.value, sheetObject);
  });

  console.log('업로드 된 엑셀 파일: ', JSON.stringify(row.value, null, 2));
  tableData.value = Object.values(row.value[`${tab.value}`]);
}

const fetchSheetData = () => {
  tableData.value = Object.values(row.value[`${tab.value}`]);
};
</script>
