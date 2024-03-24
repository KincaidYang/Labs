---
sidebar_position: 6
description: Monitor
---
# WHOIS
域名 Whois 查询工具，支持所有允许公开查询的 TLD 后缀的域名、IPv4/v6、ASN 的 Whois 信息查询。

Domain Whois query tool, supports domain, IPv4/v6, ASN Whois information query for all TLD suffixes that allow public queries.

:::info

根据 ICANN 《通用顶级域名注册数据临时政策细则（Temporary Specification for gTLD Registration Data）》和欧盟《通用数据保护条例》合规要求，在查询域名信息时，程序只返回了部分必要的信息（详见下方返回结果示例），不会返回所有者的`联系方式`、`地址`、`电话`、`邮箱`等字段。

According to the ICANN "Temporary Specification for gTLD Registration Data" and the EU "General Data Protection Regulation" compliance requirements, when querying domain information, the program only returns part of the necessary information (see the example of the return result below), and will not return the owner's `contact information`, `address`, `phone`, `email` and other fields.

:::
## How to use
### 查询域名 Whois 信息 / Query domain Whois information
```bash
curl https://whois.ddnsip.cn/example.com
```
响应结果 / Response result
```json
{
    "Domain Name": "EXAMPLE.COM",
    "Registrar": "RESERVED-Internet Assigned Numbers Authority",
    "Registrar IANA ID": "376",
    "Domain Status": [
        "client delete prohibited",
        "client transfer prohibited",
        "client update prohibited"
    ],
    "Creation Date": "1995-08-14T04:00:00Z",
    "Registry Expiry Date": "2024-08-13T04:00:00Z",
    "Updated Date": "2023-08-14T07:01:38Z",
    "Name Server": [
        "A.IANA-SERVERS.NET",
        "B.IANA-SERVERS.NET"
    ],
    "DNSSEC": "signedDelegation",
    "DNSSEC DS Data": "370 13 2 BE74359954660069D5C63D200C39F5603827D7DD02B56F120EE9F3A86764247C",
    "Last Update of Database": "2024-01-16T10:26:40Z"
}
```


### 查询 IPv4 Whois 信息 / Query IPv4 Whois information
```bash
curl https://whois.ddnsip.cn/1.1.1.1
```
响应结果 / Response result
```json
{
    "IP Network": "1.1.1.0 - 1.1.1.255",
    "Address Range": "1.1.1.0 - 1.1.1.255",
    "Network Name": "APNIC-LABS",
    "CIDR": "1.1.1.0/24",
    "Network Type": "ASSIGNED PORTABLE",
    "Country": "AU",
    "Status": [
        "active"
    ],
    "Creation Date": "2011-08-10T23:12:35Z",
    "Updated Date": "2023-04-26T22:57:58Z"
}
```

### 查询 IPv6 Whois 信息 / Query IPv6 Whois information
```bash
curl https://whois.ddnsip.cn/2a0f:9400:7700::2
```
响应结果 / Response result
```json
{
    "IP Network": "2a0f:9400:7700::/48",
    "Address Range": "2a0f:9400:7700:: - 2a0f:9400:7700:ffff:ffff:ffff:ffff:ffff",
    "Network Name": "RTTW",
    "CIDR": "2a0f:9400:7700::/48",
    "Network Type": "ALLOCATED-BY-LIR",
    "Country": "CN",
    "Status": [
        "active"
    ],
    "Creation Date": "2022-04-08T12:07:49Z",
    "Updated Date": "2022-12-20T02:19:43Z"
}
```

### 查询 ASN Whois 信息 / Query ASN Whois information
```bash
curl https://whois.ddnsip.cn/ASN205794
curl https://whois.ddnsip.cn/AS205794
curl https://whois.ddnsip.cn/205794
```
:::tip

ASN 可以是 ASXXXXX、ASNXXXXX、XXXXX 三种格式，且不区分字母大小写。 / ASN can be in three formats: ASXXXXX, ASNXXXXX, XXXXX, and it is case-insensitive.

:::

响应结果 / Response result
```json
{
    "AS Number": "AS205794",
    "Network Name": "RTTW-AS",
    "Status": [
        "active"
    ],
    "Creation Date": "2022-04-14T12:24:55Z",
    "Updated Date": "2024-02-15T07:18:46Z"
}
```

## 本地部署 / Local deployment
本工具代码开源，您可以在 [GitHub](https://github.com/KincaidYang/whois) 上查看源码并自行部署。 

The code of this tool is open source, you can view the source code on [GitHub](https://github.com/KincaidYang/whois) and deploy it yourself.