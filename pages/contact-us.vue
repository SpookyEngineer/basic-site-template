<template>
  <div>
    <!-- Speak With Us Section -->
    <SectionDisplay :section-data="speakWithUsSection" />

    <!-- Contact Us Section -->
    <div
      class="flex flex-col justify-center items-center text-4xl font-ubuntu-condensed mb-16"
    >
      <h2 class="text-aconchego-red mt-8">CONTACTE-NOS</h2>
      <h3 class="mb-8">CLÍNICA DE REPOUSO O ACONCHEGO</h3>
      <img src="/images/team.webp" alt="Team" title="Time" />
    </div>

    <!-- Location Section -->
    <SectionDisplay :section-data="locationSection" />
    <iframe
      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d48059.676867672!2d-8.663153091728478!3d41.16224682872561!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xd2465abc4e153c1%3A0xa648d95640b114bc!2sPorto%2C%20Portugal!5e0!3m2!1sen!2sbr!4v1728771447227!5m2!1sen!2sbr"
      height="450"
      style="border: 0; width: 100vw"
      allowfullscreen="false"
      loading="lazy"
      referrerpolicy="no-referrer-when-downgrade"
    />

    <FormSection id="contact-form" />
  </div>
</template>

<script setup lang="ts">
const speakWithUsSection = {
  img: "lar_idosos.webp",
  imgTitle: "Fale Conosco",
  title: "FALE CONOSCO",
  buttonContent: "Ligue-nos",
};

const locationSection = {
  img: "lar_idosos.webp",
  imgTitle: "Localização",
  title: "LOCALIZAÇÃO",
  subTitle: "Visite as nossas instalações! Marque já a sua visita!",
};

useHead({
  title: "Contate-nos",
});
</script>
