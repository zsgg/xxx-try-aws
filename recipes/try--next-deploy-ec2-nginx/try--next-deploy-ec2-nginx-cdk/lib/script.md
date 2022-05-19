
# nginx
- https://www.willandskill.se/en/setup-a-next-js-project-with-pm2-nginx-and-yarn-on-ubuntu-18-04/

`sudo vi /etc/nginx/conf.d/next-1.conf`
```shell
server {
    location /_next/ {
        alias /home/ec2-user/_next-1;
    }

    location / {
        proxy_pass http://localhost:3001;
        proxy_http_version 1.1;
    }
}
```
`sudo systemctl restart nginx`
