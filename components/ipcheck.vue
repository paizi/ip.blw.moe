<template>
  <div
    class="container px-5 flex flex-row flex-wrap gap-x-12 md:gap-y-8 gap-y-6 justify-center sm:w-5/6 md:w-5/6 lg:w-5/6 xl:w-4/6 2xl:w-7/12 3xl:w-3/6 4xl:w-5/12 mx-auto"
  >
    <div
      class="container shrink-0 sm:w-5/6 lg:w-80 h-38 rounded-lg bg-zinc-700 text-gray-50 whitespace-pre-wrap"
    >
      <div class="p-3">
        <p class="text-center leading-6 select-none">从 IPinfo 查询 ( 国内 )</p>
        <p
          class="text-center text-xl leading-8 overflow-auto text-blue-100 font-ip"
        >
          <span
            href="https://ip-api-cn.blingwang.cn/current/?provider=ipinfo"
            title="点击查看完整信息"
            target="_blank"
            >{{ pending_ipinfo_cn ? "加载中" : count_ipinfo_cn.ip }}</span
          >
        </p>
        <p
          class="text-center text-xs leading-5 text-gray-300 select-none tracking-wide"
        >
          {{
            pending_ipinfo_cn
              ? ""
              : count_ipinfo_cn.data.country +
                " " +
                count_ipinfo_cn.data.region +
                " " +
                count_ipinfo_cn.data.city +
                "\n" +
                count_ipinfo_cn.data.isp
          }}
        </p>
      </div>
    </div>

    <div
      class="container shrink-0 sm:w-5/6 lg:w-80 h-38 rounded-lg bg-zinc-700 text-gray-50 whitespace-pre-wrap"
    >
      <div class="p-3">
        <p class="text-center leading-6 select-none">
          从 MaxMind 查询 ( 海外 )
        </p>
        <p
          class="text-center text-xl leading-8 overflow-auto text-blue-100 font-ip"
        >
          <a
            href="https://ip.wjy.me/json"
            title="点击查看完整信息"
            target="_blank"
            >{{
              pending_cloudflare_intl ? "加载中" : count_cloudflare_intl.ip
            }}</a
          >
        </p>
        <p
          class="text-center text-xs leading-5 text-gray-300 select-none tracking-wide"
        >
          {{
            pending_cloudflare_intl
              ? ""
              : count_cloudflare_intl.country.name +
                " " +
                count_cloudflare_intl.region.name +
                " " +
                count_cloudflare_intl.city +
                "\n" +
                count_cloudflare_intl.asn.organization
          }}
        </p>
      </div>
    </div>
    <div
      class="container shrink-0 sm:w-5/6 lg:w-80 h-38 rounded-lg bg-zinc-700 text-gray-50 whitespace-pre-wrap"
    >
      <div class="p-3">
        <p class="text-center leading-6 select-none">从 IPIP 查询 ( 国内 )</p>
        <p
          class="text-center text-xl leading-8 overflow-auto text-blue-100 font-ip"
        >
          <a
            href="https://ip-api-cn.blingwang.cn/current/?provider=ipip"
            title="点击查看完整信息"
            target="_blank"
            >{{ pending_ipip_cn ? "加载中" : count_ipip_cn.ip }}</a
          >
        </p>
        <p
          class="text-center text-xs leading-5 text-gray-300 select-none tracking-wide"
        >
          {{
            pending_ipip_cn
              ? ""
              : count_ipip_cn.data.country +
                " " +
                count_ipip_cn.data.region +
                " " +
                count_ipip_cn.data.city +
                "\n" +
                count_ipip_cn.data.isp
          }}
        </p>
      </div>
    </div>
    <div
      class="container shrink-0 sm:w-5/6 lg:w-80 h-38 rounded-lg bg-zinc-700 text-gray-50 whitespace-pre-wrap"
    >
      <div class="p-3">
        <p class="text-center leading-6 select-none">从 IPIP 查询 ( 海外 )</p>
        <p
          class="text-center text-xl leading-8 overflow-auto text-blue-100 font-ip"
        >
          <a
            href="https://api.wjy.me/ipip"
            title="点击查看完整信息"
            target="_blank"
            >{{ pending_ipip_intl ? "加载中" : count_ipip_intl.data.addr }}</a
          >
        </p>
        <p
          class="text-center text-xs leading-5 text-gray-300 select-none tracking-wide"
        >
          {{
            pending_ipip_intl
              ? ""
              : count_ipip_intl.data.country +
                " " +
                count_ipip_intl.data.province +
                " " +
                count_ipip_intl.data.city +
                "\n" +
                count_ipip_intl.data.isp
          }}
        </p>
      </div>
    </div>
    <div
      class="container mb-14 shrink-0 sm:w-5/6 lg:w-80 h-10 rounded-lg bg-zinc-700 text-gray-50 text-center select-none"
    >
      <NuxtLink to="/search"
        ><p class="h-full align-middle p-2">查询其他 IP</p></NuxtLink
      >
    </div>
  </div>
</template>
<script setup>
const { pending: pending_ipinfo_cn, data: count_ipinfo_cn } = useLazyFetch(
  "https://ip-api-cn.blingwang.cn/current/?provider=ipinfo"
);
const { pending: pending_cloudflare_intl, data: count_cloudflare_intl } =
  useLazyFetch("https://ip.wjy.me/json");
const { pending: pending_ipip_cn, data: count_ipip_cn } = useLazyFetch(
  "https://ip-api-cn.blingwang.cn/current/?provider=ipip"
);
const { pending: pending_ipip_intl, data: count_ipip_intl } = useLazyFetch(
  "https://api.wjy.me/ipip"
);
</script>
