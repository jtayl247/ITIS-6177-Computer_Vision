ls
pwd
yum install epel-release yum-utils -y
yum install nginx -y
systemctl start nginx
ls
pwd
systemctl enable nginx
yum install firewalld -y
systemctl start firewalld
systemctl enable firewalld
firewall-cmd --permanent --zone=public --add-service=http
firewall-cmd --permanent --zone=public --add-service=https
firewall-cmd --zone=public --add-port=3000/tcp --permanent
firewall-cmd --zone=public --add-port=3001/tcp --permanent
firewall-cmd --reload
ls
pwd
cd /root
ls
pwd
cd
pwd
curl -sL https://rpm.nodesource.com/setup_12.x | sudo bash -
yum install nodejs -y
npm install express
npm install -g pm2
ls
vi .env
ls
pwd
cd root
ls
vi server.js
ls
vi .env
vi .gitignore
npm install
pm2 start server.js
pm2 stop server
