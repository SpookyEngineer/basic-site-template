// Created to fix a bug where the sticky navbar was getting in the way of the scrolled to element
// This happened because the navbar is sticky
export default {
  scrollBehavior(to: any, from: any, savedPosition: any) {
    const headerOffset = 80; // Navbar height in pixels
    if (savedPosition) {
      return savedPosition;
    } else if (to.hash) {
      const element = document.querySelector(to.hash);
      if (element) {
        const topPosition =
          element.getBoundingClientRect().top + window.scrollY - headerOffset;
        return { top: topPosition, behavior: "smooth" };
      }
    }
    return { top: 0 };
  },
};
