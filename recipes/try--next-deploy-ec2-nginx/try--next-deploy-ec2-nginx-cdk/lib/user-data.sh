#!/bin/bash
yum update -y
amazon-linux-extras install -y nginx1;\
systemctl start nginx;\
systemctl enable nginx

# install
yum -y install git;\
sudo curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.34.0/install.sh | bash;
. ~/.nvm/nvm.sh;\
nvm install 16;\
npm i -g yarn@berry pm2


# git
git clone https://github.com/zsgg/try-aws.git &&\
cd mono &&\
yarn install &&\
pm2 kill; pm2 delete all;\
yarn workspace try--next-deploy-ec2-1-nginx run build;\
yarn workspace try--next-deploy-ec2-1-nginx run pm2:start;\
ln -s /home/ec2-user/mono/recipes/try--next-deploy-ec2-nginx/try--next-deploy-ec2-1-nginx/.next/ /home/ec2-user/_next-1;

# ...
git fetch ;\
git pull ;\
git checkout -f main ;\

