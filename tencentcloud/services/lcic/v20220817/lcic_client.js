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
 * lcic client
 * @class
 */
class Client extends abstract_client_1.AbstractClient {
    constructor(clientConfig) {
        super("lcic.tencentcloudapi.com", "2022-08-17", clientConfig);
    }
    /**
     * 获取用户信息
     */
    async DescribeUser(req, cb) {
        return this.request("DescribeUser", req, cb);
    }
    /**
     * 使用源账号登录，源账号为注册时填入的originId
     */
    async LoginOriginId(req, cb) {
        return this.request("LoginOriginId", req, cb);
    }
    /**
     * 注册用户
     */
    async RegisterUser(req, cb) {
        return this.request("RegisterUser", req, cb);
    }
    /**
     * 登录
     */
    async LoginUser(req, cb) {
        return this.request("LoginUser", req, cb);
    }
    /**
     * 创建巡课
     */
    async CreateSupervisor(req, cb) {
        return this.request("CreateSupervisor", req, cb);
    }
    /**
     * 获取房间信息
     */
    async DescribeRoom(req, cb) {
        return this.request("DescribeRoom", req, cb);
    }
    /**
     * 创建房间
     */
    async CreateRoom(req, cb) {
        return this.request("CreateRoom", req, cb);
    }
}
exports.Client = Client;