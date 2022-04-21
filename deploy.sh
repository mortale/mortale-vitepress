#!/usr/bin/env sh

# 忽略错误
set -e

# 构建
npm run docs:build

# 进入待发布的目录
cd docs/.vitepress/dist
echo 111
# 如果是发布到自定义域名
# echo 'www.example.com' > CNAME
# git config --global user.email ${EMAIL}
# echo 1
# git config --global user.name mortale
# echo 2
# git add -A
# echo 3
# git commit -m 'theme deploy'
# echo 4

# 如果部署到 https://<USERNAME>.github.io
# git push -f https://git@github.com:mortale/mortale.github.io.git master
# echo 5
# 如果是部署到 https://<USERNAME>.github.io/<REPO>
# git push -f git@github.com:<USERNAME>/<REPO>.git master:gh-pages

cd -