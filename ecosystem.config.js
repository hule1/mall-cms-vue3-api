module.exports = {
  apps : [{
    name   : "/home/ubuntu/project/mall-cms-vue3-api",
    kill_timeout : 10000,
    script : "./src/main.ts",
    interpreter : "./node_modules/.bin/ts-node",
    watch : true,
    ignore_watch: ['node_modules'],
    name   : "mall-cms-vue3-api", // 启动项目的别名
  }]
}
