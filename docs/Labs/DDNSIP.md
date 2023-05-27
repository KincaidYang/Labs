---
sidebar_position: 4
description: DDNSIP
---
# DDNSIP
DDNSIP是一个基于 Nginx 获取客户端公网 IP 的服务。/ DDNSIP is a service based on Nginx to get the client's public IP.

## How to use
### Get IPv4:
```bash
curl https://ipv4.ddnsip.cn

curl -4 https://ddnsip.cn

wget -qO - https://ipv4.ddnsip.cn
```
### Get IPv6:
```bash
curl https://ipv6only.ddnsip.cn

curl https://ipv6.ddnsip.cn

curl -6 https://ddnsip.cn

wget -qO - https://ipv6.ddnsip.cn
```
### Get UA:
```bash
curl https://ua.ddnsip.cn

curl wget -qO - https://ua.ddnsip.cn
```