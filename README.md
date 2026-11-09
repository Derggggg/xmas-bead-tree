# Hearth & Bead — 圣诞珠子树独立站

纯静态网站（HTML + CSS + 少量 JS），不需要构建步骤，可以直接部署到 Vercel。

```
index.html      首页（落地页）
guide.html      详细制作教程 → /guide（盒子里的二维码指向这里）
policies.html   配送、退换、隐私、联系方式 → /policies
js/config.js    ★ 唯一需要改的设置文件：付款链接、联系方式、产品参数
css/styles.css  样式
assets/         插画、favicon、社交分享图 og.png
fonts/          自托管字体（Fraunces + Plus Jakarta Sans）
vercel.json     干净网址（/guide）和缓存设置
```

## 部署到 Vercel

1. 把这个文件夹推到 GitHub 仓库 `xmas-bead-tree`。
2. Vercel → Add New → Project → 导入 `xmas-bead-tree`。Framework Preset 选 **Other**，其他都不用填 → Deploy。
3. 上线地址是 `https://xmas-bead-tree.vercel.app`。如果 Vercel 分配的地址不同，或者你绑定了自己的域名，用全局搜索替换 `xmas-bead-tree.vercel.app`（在 index.html 和 guide.html 的 meta 标签里），否则分享链接时的预览图会不显示。

以后每次推送到 main，Vercel 都会自动重新部署。

## 上线前要做的事

1. **收款**：打开 `js/config.js`，填 `checkout` 里三个 Stripe Payment Link。
   - Stripe 后台 → Payment Links → New：每个套餐建一个，打开 PayNow、银行卡、Apple Pay 和 Google Pay，勾选“收集收货地址”和“电话号码”。
   - 还没开通 Stripe 的话，先填 `whatsapp`（只填数字，例如 `6591234567`）。按钮会自动变成“Order on WhatsApp”，带着预填好的订单信息。
   - 三个都没填时，按钮显示“Orders open soon”，不能点。
2. **联系邮箱**：改 `email`。
3. **产品事实**：拿到样品后，核对 `finishedHeight`、`makingTime`、`batteries`、`orderBy`、`dispatchCutoff`、运费，再分享链接。
4. **教程**：`guide.html` 里的步骤是按同类套件的常见做法写的。一定要照着真实样品做一遍，按实际情况修改，包括配色卡、分支数量、灯怎么装。
5. **照片**：首页的照片区目前是隐藏的。拍好实物照片后：
   - 把图片放进 `assets/`（如 `photo-1.jpg`），把 `<figure>…</figure>` 换成 `<figure class="has-img"><img src="/assets/photo-1.jpg" alt="描述"></figure>`；
   - 再删掉那个 section 上的 `hidden`。
   - 首页大图可以把 `assets/tree-lit.svg` 换成实拍的“开灯那一刻”照片。
6. **视频**：教程视频上传到 YouTube（可以设为不公开）后，把首页 `#video` 那一块换成 YouTube 的嵌入代码 `<iframe src="https://www.youtube.com/embed/视频ID" ...>`。
7. **买家评价**：只放真实买家的反馈，并征得对方同意。
