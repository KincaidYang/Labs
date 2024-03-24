---
sidebar_position: 4
description: DDNSIP
---
# DDNSIP
DDNSIP是一个基于 Nginx 获取客户端公网 IP 的服务。/ DDNSIP is a service based on Nginx to get the client's public IP.

## How to use
:::tip

如果您需要获取 `json` 格式的数据，请在 `url` 后面添加`/json`, 例如 `https://ddnsip.cn/json`。

If you need to get the data in `json` format, please add `/json` after the `url`, for example `https://ddnsip.cn/json`.

:::

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