#!/usr/bin/env sh

# 忽略错误
set -e

# 构建
npm run docs:build
# 进入待发布的目录
cd docs/.vitepress
# 如果是发布到自定义域名
# echo 'www.example.com' > CNAME
git config user.email $EMAIL
git config user.name "mortale"
git clone  https://oauth2:$ACCESS_TOKEN@github.com/mortale/mortale.github.io.git
cp -rf dist/hashmap.json dist/index.html mortale.github.io/
rsync -r --delete dist/assets/ mortale.github.io/assets/
cd mortale.github.io
git add -A
git commit -m 'theme deploy'
# 如果部署到 https://<USERNAME>.github.io
 git push -f https://mortale:$ACCESS_TOKEN@github.com/mortale/mortale.github.io.git master
# 如果是部署到 https://<USERNAME>.github.io/<REPO>
# git push -f git@github.com:<USERNAME>/<REPO>.git master:gh-pages

cd -
