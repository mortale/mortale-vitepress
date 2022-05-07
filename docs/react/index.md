---
title: react
sidebar: false
---

<script>
import locationData from "../utils/route-guard.ts"
export default locationData
</script>

<style lang="less">
.container{
    max-width: unset !important;
    padding: 0 !important;
}
</style>

<ClientOnly>
<micro-app-test :cacheLocation="cacheLocation"></micro-app-test>
</ClientOnly>

