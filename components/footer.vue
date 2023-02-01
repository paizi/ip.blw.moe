<template>
  <footer
    class="bg-gray-800 dark:bg-gray-300 text-center fixed bottom-0 w-full h-8 text-sm select-none"
  >
    <div class="text-gray-100 dark:text-gray-800 p-1">
      © {{ currentDate.getFullYear() }}
      <a class="text-blue-200 dark:text-blue-700" href="https://blw.moe/"
        >Bling Network</a
      >
      本工具仅供参考
    </div>
  </footer>
</template>
<script>
export default {
  data() {
    return {
      currentDate: new Date(),
    };
  },
};
</script>
>
