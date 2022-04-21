#!/usr/bin/env sh

# 忽略错误
set -e

# 构建
# npm run docs:build
EMAIL="1695588928@qq.com"
# 进入待发布的目录
# cd docs/.vitepress/dist
# 如果是发布到自定义域名
# echo 'www.example.com' > CNAME
echo $EMAIL
git config --global user.email $EMAIL
git config --global user.name "mortale"
git config -l
git add -A
git commit -m 'theme deploy'

# 如果部署到 https://<USERNAME>.github.io
git push -f https://git@github.com:mortale/mortale.github.io.git master
# 如果是部署到 https://<USERNAME>.github.io/<REPO>
# git push -f git@github.com:<USERNAME>/<REPO>.git master:gh-pages

cd -
