---
sidebar_position: 3
description: CNAME Flattening
---
# CNAME Flattening
CNAME record used for flattening apex domain (or other subdomain) resolution.

## About
本脚本用以拉平 CNAME 记录，当前仅支持 DNSPod、华为云DNS、阿里云 DNS。

Aliyun 阿里云 DNS

DNSPod DNSPod DNS

HuaweiCloud 华为云 DNS

请根据实际需要选择对应的脚本使用。

注意：本脚本仅测试了与腾讯云 CDN、腾讯云 EdgeOne、华为云 CDN、天翼云 CDN、阿里云 CDN 的兼容性，其他 CDN 厂商未测试兼容性，若有其他厂商需求请自行测试或提交Issue。

This script is used to flatten CNAME records and currently only supports DNSPod, Huawei Cloud DNS, and Alibaba Cloud DNS.

Aliyun: Alibaba Cloud DNS

DNSPod: DNSPod DNS

HuaweiCloud: Huawei Cloud DNS

Please select the corresponding script according to your actual needs.

Note: This script has only been tested for compatibility with Tencent Cloud CDN, Tencent Cloud EdgeOne, Huawei Cloud CDN, Tianyi Cloud CDN, and Alibaba Cloud CDN. Compatibility with other CDN providers has not been tested. If you have requirements for other providers, please test it yourself or submit an issue.

## Tutorial
DNSPod：[使用 DNSPod 拉平 CNAME 记录（CDN 场景）](https://r2wind.cn/articles/20230108.html)

华为云DNS：[使用华为云 DNS 拉平 CNAME 记录（CDN 场景）](https://r2wind.cn/articles/20230109.html)

阿里云DNS：https://github.com/KincaidYang/CNAMEFlattening/blob/main/Aliyun/README.md

DNSPod: [Flatten CNAME Records with DNSPod (CDN Scenario)](https://r2wind.cn/articles/20230108.html)

Huawei Cloud DNS: [Flatten CNAME Records with Huawei Cloud DNS (CDN Scenario)](https://r2wind.cn/articles/20230109.html)

Alibaba Cloud DNS: https://github.com/KincaidYang/CNAMEFlattening/blob/main/Aliyun/README.md

## Script hints
该示意为 DNSPod，Huaweicloud 流程类似。

The flow chart is DNSPod.Huaweicloud, Aliyun process is similar to DNSPod.

![hints](https://github.com/KincaidYang/CNAMEFlattening/blob/main/static/DNSPodFlattening.png?raw=true)
