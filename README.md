### Bug 描述

defineConstant 定义一个常量 ENV_KEY，页面中不能同时和 process.env.ENV_KEY 使用

### 复现

index.tsx 中 console.log(ENV_KEY, process.ENV_KEY)，然后 yarn build:alipay 报错
