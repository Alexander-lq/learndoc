
#!/usr/bin/env sh

# 确保脚本抛出遇到的错误
set -e

# 生成静态文件
cd docs
pnpm docs:build

# 进入生成的文件夹
cd src/.vuepress/dist

git init
git add -A
git commit -m '发布'

# 如果发布到 https://<USERNAME>.github.io/<REPO>
# git push -f  release-v1.0.0
git push -f git@github.com:Alexander-lq/learndoc.git master:page

git push -f git@gitee.com:liu_xian_sen/learndoc.git master:page

cd -

