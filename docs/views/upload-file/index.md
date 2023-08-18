---
title: 文件上传
date: 2023-08-18 16:51:18
permalink: /pages/990ff0/
categories:
  - upload-file
tags:
  -
---

## 文件上传

<input type="file" id="upload_file" />
<script>
window.onload = function () {
  // 根据id获取upload_file元素
  const upload_file = document.getElementById('upload_file')
  upload_file.addEventListener('change', (e) => {
    console.log(e)
  })
}
</script>

```html
<input type="file" id="upload_file" />
```

```js
window.onload = function () {
  // 根据id获取upload_file元素
  const upload_file = document.getElementById('upload_file')
  upload_file.addEventListener('change', (e) => {
    console.log(e)
  })
}
```
