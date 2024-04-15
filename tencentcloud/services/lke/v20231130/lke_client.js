"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Client = void 0;
/* eslint-disable @typescript-eslint/no-unused-vars */
/*
 * Copyright (c) 2018 THL A29 Limited, a Tencent company. All Rights Reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing,
 * software distributed under the License is distributed on an
 * "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
 * KIND, either express or implied.  See the License for the
 * specific language governing permissions and limitations
 * under the License.
 */
const abstract_client_1 = require("../../../common/abstract_client");
/**
 * lke client
 * @class
 */
class Client extends abstract_client_1.AbstractClient {
    constructor(clientConfig) {
        super("lke.tencentcloudapi.com", "2023-11-30", clientConfig);
    }
    /**
     * 文档列表
     */
    async ListDoc(req, cb) {
        return this.request("ListDoc", req, cb);
    }
    /**
     * 查询不满意回复列表
     */
    async ListUnsatisfiedReply(req, cb) {
        return this.request("ListUnsatisfiedReply", req, cb);
    }
    /**
     * 删除属性标签
     */
    async DeleteAttributeLabel(req, cb) {
        return this.request("DeleteAttributeLabel", req, cb);
    }
    /**
     * 保存文档
     */
    async SaveDoc(req, cb) {
        return this.request("SaveDoc", req, cb);
    }
    /**
     * 创建拒答问题
     */
    async CreateRejectedQuestion(req, cb) {
        return this.request("CreateRejectedQuestion", req, cb);
    }
    /**
     * 检查属性下的标签名是否存在
     */
    async CheckAttributeLabelExist(req, cb) {
        return this.request("CheckAttributeLabelExist", req, cb);
    }
    /**
     * 批量修改问答适用范围
     */
    async ModifyQAAttrRange(req, cb) {
        return this.request("ModifyQAAttrRange", req, cb);
    }
    /**
     * 文档详情
     */
    async DescribeDoc(req, cb) {
        return this.request("DescribeDoc", req, cb);
    }
    /**
     * 删除拒答问题
     */
    async DeleteRejectedQuestion(req, cb) {
        return this.request("DeleteRejectedQuestion", req, cb);
    }
    /**
     * 获取账户信息
     */
    async ListSelectDoc(req, cb) {
        return this.request("ListSelectDoc", req, cb);
    }
    /**
     * 多轮改写
     */
    async QueryRewrite(req, cb) {
        return this.request("QueryRewrite", req, cb);
    }
    /**
     * 更新问答
     */
    async ModifyQA(req, cb) {
        return this.request("ModifyQA", req, cb);
    }
    /**
     * 批量修改文档适用范围
     */
    async ModifyDocAttrRange(req, cb) {
        return this.request("ModifyDocAttrRange", req, cb);
    }
    /**
     * 获取文件上传临时密钥
     */
    async DescribeStorageCredential(req, cb) {
        return this.request("DescribeStorageCredential", req, cb);
    }
    /**
     * 创建发布
     */
    async CreateRelease(req, cb) {
        return this.request("CreateRelease", req, cb);
    }
    /**
     * 获取特征向量
     */
    async GetEmbedding(req, cb) {
        return this.request("GetEmbedding", req, cb);
    }
    /**
     * 文档解析重试
     */
    async RetryDocAudit(req, cb) {
        return this.request("RetryDocAudit", req, cb);
    }
    /**
     * 获取应用密钥
     */
    async GetAppSecret(req, cb) {
        return this.request("GetAppSecret", req, cb);
    }
    /**
     * 编辑属性标签
     */
    async ModifyAttributeLabel(req, cb) {
        return this.request("ModifyAttributeLabel", req, cb);
    }
    /**
     * 发布列表
     */
    async ListRelease(req, cb) {
        return this.request("ListRelease", req, cb);
    }
    /**
     * 是否意图转人工
     */
    async RateMsgRecord(req, cb) {
        return this.request("RateMsgRecord", req, cb);
    }
    /**
     * 问答列表
     */
    async ListQA(req, cb) {
        return this.request("ListQA", req, cb);
    }
    /**
     * 删除问答
     */
    async DeleteQA(req, cb) {
        return this.request("DeleteQA", req, cb);
    }
    /**
     * 通过appKey获取机器人业务ID
     */
    async DescribeRobotBizIDByAppKey(req, cb) {
        return this.request("DescribeRobotBizIDByAppKey", req, cb);
    }
    /**
     * 文档列表
     */
    async ListReleaseQAPreview(req, cb) {
        return this.request("ListReleaseQAPreview", req, cb);
    }
    /**
     * 导出QA列表
     */
    async ExportQAList(req, cb) {
        return this.request("ExportQAList", req, cb);
    }
    /**
     * 更新QA分类
     */
    async ModifyQACate(req, cb) {
        return this.request("ModifyQACate", req, cb);
    }
    /**
     * 删除应用
     */
    async DeleteApp(req, cb) {
        return this.request("DeleteApp", req, cb);
    }
    /**
     * 修改应用请求结构体
     */
    async ModifyApp(req, cb) {
        return this.request("ModifyApp", req, cb);
    }
    /**
     * 终止文档解析
     */
    async StopDocParse(req, cb) {
        return this.request("StopDocParse", req, cb);
    }
    /**
     * 修改拒答问题
     */
    async ModifyRejectedQuestion(req, cb) {
        return this.request("ModifyRejectedQuestion", req, cb);
    }
    /**
     * 检查属性标签引用
     */
    async CheckAttributeLabelRefer(req, cb) {
        return this.request("CheckAttributeLabelRefer", req, cb);
    }
    /**
     * 企业详情
     */
    async DescribeCorp(req, cb) {
        return this.request("DescribeCorp", req, cb);
    }
    /**
     * 创建属性
     */
    async CreateAttributeLabel(req, cb) {
        return this.request("CreateAttributeLabel", req, cb);
    }
    /**
     * 获取不满意回复上下文
     */
    async DescribeUnsatisfiedReplyContext(req, cb) {
        return this.request("DescribeUnsatisfiedReplyContext", req, cb);
    }
    /**
     * 上传导入属性标签
     */
    async UploadAttributeLabel(req, cb) {
        return this.request("UploadAttributeLabel", req, cb);
    }
    /**
     * 获取企业下应用列表
     */
    async ListApp(req, cb) {
        return this.request("ListApp", req, cb);
    }
    /**
     * 获取文档预览信息
     */
    async GetDocPreview(req, cb) {
        return this.request("GetDocPreview", req, cb);
    }
    /**
     * 发布文档预览
     */
    async ListReleaseDocPreview(req, cb) {
        return this.request("ListReleaseDocPreview", req, cb);
    }
    /**
     * 创建企业
     */
    async CreateCorp(req, cb) {
        return this.request("CreateCorp", req, cb);
    }
    /**
     * 查询属性标签详情
     */
    async DescribeAttributeLabel(req, cb) {
        return this.request("DescribeAttributeLabel", req, cb);
    }
    /**
     * 发布详情
     */
    async DescribeRelease(req, cb) {
        return this.request("DescribeRelease", req, cb);
    }
    /**
     * 问答详情
     */
    async DescribeQA(req, cb) {
        return this.request("DescribeQA", req, cb);
    }
    /**
     * 文档解析重试
     */
    async RetryDocParse(req, cb) {
        return this.request("RetryDocParse", req, cb);
    }
    /**
     * 拉取发布按钮状态、最后发布时间
     */
    async DescribeReleaseInfo(req, cb) {
        return this.request("DescribeReleaseInfo", req, cb);
    }
    /**
     * 录入问答
     */
    async CreateQA(req, cb) {
        return this.request("CreateQA", req, cb);
    }
    /**
     * 查询文件解析结果
     */
    async QueryParseDocResult(req, cb) {
        return this.request("QueryParseDocResult", req, cb);
    }
    /**
     * 查询属性标签列表
     */
    async ListAttributeLabel(req, cb) {
        return this.request("ListAttributeLabel", req, cb);
    }
    /**
     * 获取QA分类
     */
    async ListQACate(req, cb) {
        return this.request("ListQACate", req, cb);
    }
    /**
     * 获取模型列表
     */
    async GetAppKnowledgeCount(req, cb) {
        return this.request("GetAppKnowledgeCount", req, cb);
    }
    /**
     * 文档生成问答
     */
    async GenerateQA(req, cb) {
        return this.request("GenerateQA", req, cb);
    }
    /**
     * 应用类型列表
     */
    async ListAppCategory(req, cb) {
        return this.request("ListAppCategory", req, cb);
    }
    /**
     * 获取企业下应用详情
     */
    async DescribeApp(req, cb) {
        return this.request("DescribeApp", req, cb);
    }
    /**
     * 创建只是引擎应用，包括：知识管理应用、知识摘要应用、标签提取应用。
     */
    async CreateApp(req, cb) {
        return this.request("CreateApp", req, cb);
    }
    /**
     * 是否意图转人工
     */
    async IsTransferIntent(req, cb) {
        return this.request("IsTransferIntent", req, cb);
    }
    /**
     * 发布拒答问题预览
     */
    async ListRejectedQuestionPreview(req, cb) {
        return this.request("ListRejectedQuestionPreview", req, cb);
    }
    /**
     * 获取推荐问题
     */
    async GetMsgRecord(req, cb) {
        return this.request("GetMsgRecord", req, cb);
    }
    /**
     * 修改文档
     */
    async ModifyDoc(req, cb) {
        return this.request("ModifyDoc", req, cb);
    }
    /**
     * 解析拆分文件
     */
    async ParseDoc(req, cb) {
        return this.request("ParseDoc", req, cb);
    }
    /**
     * 获取ws token
     */
    async GetWsToken(req, cb) {
        return this.request("GetWsToken", req, cb);
    }
    /**
     * 创建企业
     */
    async DeleteDoc(req, cb) {
        return this.request("DeleteDoc", req, cb);
    }
    /**
     * 获取模型列表
     */
    async ListModel(req, cb) {
        return this.request("ListModel", req, cb);
    }
    /**
     * 校验问答
     */
    async VerifyQA(req, cb) {
        return this.request("VerifyQA", req, cb);
    }
    /**
     * QA分组
     */
    async GroupQA(req, cb) {
        return this.request("GroupQA", req, cb);
    }
    /**
     * 获取拒答问题
     */
    async ListRejectedQuestion(req, cb) {
        return this.request("ListRejectedQuestion", req, cb);
    }
    /**
     * 发布配置项预览
     */
    async ListReleaseConfigPreview(req, cb) {
        return this.request("ListReleaseConfigPreview", req, cb);
    }
    /**
     * 获取任务状态
     */
    async GetTaskStatus(req, cb) {
        return this.request("GetTaskStatus", req, cb);
    }
    /**
     * 分类删除
     */
    async DeleteQACate(req, cb) {
        return this.request("DeleteQACate", req, cb);
    }
    /**
     * 创建QA分类
     */
    async CreateQACate(req, cb) {
        return this.request("CreateQACate", req, cb);
    }
    /**
     * 导出不满意回复
     */
    async ExportUnsatisfiedReply(req, cb) {
        return this.request("ExportUnsatisfiedReply", req, cb);
    }
    /**
     * 重置会话
     */
    async ResetSession(req, cb) {
        return this.request("ResetSession", req, cb);
    }
    /**
     * 导出属性标签
     */
    async ExportAttributeLabel(req, cb) {
        return this.request("ExportAttributeLabel", req, cb);
    }
    /**
     * 发布暂停后重试
     */
    async RetryRelease(req, cb) {
        return this.request("RetryRelease", req, cb);
    }
    /**
     * 获取来源详情列表
     */
    async DescribeRefer(req, cb) {
        return this.request("DescribeRefer", req, cb);
    }
    /**
     * 忽略不满意回复
     */
    async IgnoreUnsatisfiedReply(req, cb) {
        return this.request("IgnoreUnsatisfiedReply", req, cb);
    }
}
exports.Client = Client;