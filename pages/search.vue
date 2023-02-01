<template>
  <div
    class="container px-5 flex flex-col flex-wrap md:gap-y-8 gap-y-6 justify-evenly mx-auto"
  >
    <div
      class="container shrink-0 max-w-6xl h-38 rounded-lg bg-zinc-700 text-gray-50 whitespace-pre-wrap mx-auto"
    >
      <form @submit.prevent="submit">
        <label
          for="search"
          class="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white"
          >Search</label
        >
        <div class="relative">
          <div
            class="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none"
          >
            <svg
              aria-hidden="true"
              class="w-5 h-5 text-gray-500 dark:text-gray-400"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
              ></path>
            </svg>
          </div>
          <input
            id="ip"
            ref="search"
            type="search"
            class="font-ip block w-full p-4 pl-10 text-sm text-gray-50 border border-gray-300 rounded-lg bg-zinc-700 focus:bg-zinc-700 dark:focus:bg-gray-700 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder="输入需要查询的 IP 地址"
            required
          />
          <button
            type="submit"
            class="text-white absolute right-2.5 bottom-2.5 bg-blue-600 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
          >
            查询
          </button>
        </div>
      </form>
    </div>
    <div
      class="container shrink-0 min-h-0 max-h-fit lg:max-w-6xl rounded-lg bg-zinc-700 text-gray-50 mx-auto p-3 font-ip text-sm"
    >
      <p id="result" class="break-words whitespace-normal">
        <span class="select-none">等待查询，如果显示 null 的话再点一下</span>
      </p>
    </div>
    <div
      class="container mb-14 shrink-0 lg:max-w-6xl h-10 rounded-lg bg-zinc-700 text-gray-50 text-center select-none mx-auto"
    >
      <NuxtLink to="/"
        ><p class="h-full align-middle p-2">返回我的 IP</p></NuxtLink
      >
    </div>
  </div>
</template>
<script setup>
function submit() {
  var n = document.getElementById("ip").value;
  const { data: response } = useFetch("https://api.wjy.me/ipinfo?query=" + n);
  response
    ? (document.getElementById("result").innerHTML = JSON.stringify(
        response.value
      ))
    : "";
}
</script>
