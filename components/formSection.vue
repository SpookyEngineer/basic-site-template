<template>
  <div class="flex flex-col justify-center items-center my-4 mx-3">
    <h2 class="mb-3 text-aconchego-red text-xl font-ubuntu-condensed font-bold">
      Fale connosco, estamos aqui para ajudar
    </h2>
    <p class="font-bold text-sm">
      Fale connosco e tire as dúvidas sobre os nossos serviços.
    </p>
    <n-form
      class="mt-6 flex justify-center items-center"
      ref="formRef"
      inline
      :label-width="80"
      :model="formValue"
      :rules="rules"
      :size="size"
    >
      <div class="flex flex-col justify-center items-center w-full md:w-2/5">
        <n-input
          class="border-2 border-aconchego-blue"
          v-model:value="formValue.name"
          placeholder="*Nome"
          clearable
        />
        <n-input
          class="border-2 border-aconchego-blue my-3"
          color="#559a28"
          v-model:value="formValue.email"
          placeholder="*Email"
          clearable
        />
        <n-input
          class="border-2 border-aconchego-blue"
          v-model:value="formValue.phone"
          placeholder="Telefone"
          clearable
          :allow-input="onlyAllowNumber"
        />
        <n-input
          class="border-2 border-aconchego-blue my-3"
          type="textarea"
          v-model:value="formValue.message"
          placeholder="Mensagem"
          clearable
        />
        <n-button
          @click="handleValidateClick"
          ghost
          color="#559a28"
          class="font-ubuntu-condensed px-16 py-4 text-black"
        >
          Enviar
        </n-button>
      </div>
    </n-form>
  </div>
</template>

<script setup lang="ts">
import { type FormInst } from "naive-ui";

const formRef = ref<FormInst | null>(null);

const size = ref<"small" | "medium" | "large">("large");

const formValue = ref({
  name: "",
  email: "",
  phone: "",
  message: "",
});

const onlyAllowNumber = (value: string) => !value || /^\d+$/.test(value);

const rules = {
  name: {
    required: true,
    message: "Por favor, insira seu nome",
    trigger: "blur",
  },
  email: {
    required: true,
    message: "Por favor, insira sua idade",
    trigger: ["input", "blur"],
  },
  phone: {
    required: false,
    message: "Por favor, insira seu número",
    trigger: ["input"],
  },
  message: {
    required: false,
    message: "Por favor, insira sua mensagem",
    trigger: ["input"],
  },
};

const handleValidateClick = (e: MouseEvent) => {
  e.preventDefault();
  formRef.value?.validate((errors) => {
    if (!errors) {
      console.log("Valid");
    } else {
      console.log(errors);
    }
  });
};
</script>
