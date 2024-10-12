<template>
  <div class="flex items-center justify-center m-4">
    <n-form
      class="w-full md:w-2/5"
      ref="formRef"
      :model="formValue"
      :rules="rules"
      :size="size"
    >
      <n-form-item label="Nome" path="user.name">
        <n-input v-model:value="formValue.user.name" placeholder="Nome" />
      </n-form-item>

      <n-form-item label="Email" path="user.email">
        <n-input v-model:value="formValue.user.email" placeholder="Email" />
      </n-form-item>

      <n-form-item label="Telefone" path="user.phone">
        <n-input v-model:value="formValue.user.phone" placeholder="Telefone" />
      </n-form-item>

      <n-form-item label="Mensagem" path="user.message">
        <n-input
          v-model:value="formValue.user.message"
          placeholder="Mensagem"
          type="textarea"
          show-count
          maxlength="1000"
        />
      </n-form-item>

      <n-form-item>
        <n-button @click="handleValidateClick"> Validate </n-button>
      </n-form-item>
    </n-form>
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue";
import type { FormInst } from "naive-ui";

const formRef = ref<FormInst | null>(null);
const size = ref<"small" | "medium" | "large">("medium");
const formValue = ref({
  user: {
    name: "",
    email: "",
    phone: "",
    message: "",
  },
});

const rules = {
  user: {
    name: {
      required: true,
      message: "Please input your name",
      trigger: "blur",
    },
    email: {
      required: true,
      message: "Please input your age",
      trigger: ["input", "blur"],
    },
    phone: {
      required: false,
      message: "Please input your age",
      trigger: ["input", "blur"],
      type: "number",
    },
    message: {
      required: false,
      message: "Please input your age",
      trigger: ["input", "blur"],
    },
  },
};

function handleValidateClick(e: MouseEvent) {
  e.preventDefault();
  formRef.value?.validate((errors) => {
    if (!errors) {
      console.log("Valid");
    } else {
      console.log(errors);
      console.log("Invalid");
    }
  });
}
</script>
