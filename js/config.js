/*
  ============================================================
  SITE SETTINGS — edit this file, push, and Vercel redeploys.
  网站设置：只改这个文件就行，推送后 Vercel 会自动更新。
  ============================================================
*/
window.SITE_CONFIG = {
  // 1) CHECKOUT 付款链接 — paste a Stripe Payment Link for each kit
  //    (Stripe Dashboard → Payment Links → New; enable Card + PayNow + Apple/Google Pay;
  //     turn on "Collect shipping address" and add a phone field).
  //    Leave "" until ready: the buttons then fall back to WhatsApp / email orders.
  checkout: {
    classic: "", // e.g. "https://buy.stripe.com/xxxx"
    gift: "",
    duo: ""
  },

  // 2) CONTACT 联系方式 — used for the fallback "order by message" buttons and the policies page
  whatsapp: "",              // digits only with country code, e.g. "6591234567"
  email: "hello@example.com", // TODO: your real email

  // 3) SOCIAL 社媒链接
  instagram: "",   // full URL
  xiaohongshu: "", // full URL

  // 4) FACTS 产品事实 — confirm with your sample before sharing the link!
  //    用样品确认后再改，页面上多处会同步更新
  orderBy: "20 Dec",               // last order date for Christmas delivery
  dispatchCutoff: "2 pm",           // same-day dispatch cut-off
  finishedHeight: "About 20 cm",
  makingTime: "About 2–3 hrs",
  batteries: "2 × AA batteries (not included)",
  freeShippingOver: "S$60",         // free delivery threshold
  deliveryFee: "S$4"                // flat delivery fee below threshold
};
