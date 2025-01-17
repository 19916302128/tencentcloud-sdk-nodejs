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

/**
 * DescribeSpecInfo请求参数结构体
 */
export interface DescribeSpecInfoRequest {
  /**
   * 待查询可用区
   */
  Zone?: string
}

/**
 * CreateDBInstance请求参数结构体
 */
export interface CreateDBInstanceRequest {
  /**
   * 指每个副本集内节点个数。具体售卖规格，请通过接口 [DescribeSpecInfo](https://cloud.tencent.com/document/product/240/38567) 获取。
   */
  NodeNum: number
  /**
   * 实例内存大小，单位：GB。
   */
  Memory: number
  /**
   * 实例硬盘大小，单位：GB。
   */
  Volume: number
  /**
   * 指版本信息。具体售卖规格，请通过接口 [DescribeSpecInfo](https://cloud.tencent.com/document/product/240/38567) 获取。
- MONGO_36_WT：MongoDB 3.6 WiredTiger存储引擎版本。
- MONGO_40_WT：MongoDB 4.0 WiredTiger存储引擎版本。
- MONGO_42_WT：MongoDB 4.2 WiredTiger存储引擎版本。
- MONGO_44_WT：MongoDB 4.4 WiredTiger存储引擎版本。
   */
  MongoVersion: string
  /**
   * 实例数量, 最小值1，最大值为10。
   */
  GoodsNum: number
  /**
   * 可用区信息，输入格式如：ap-guangzhou-2。
- 具体信息，请通过接口 [DescribeSpecInfo](https://cloud.tencent.com/document/product/240/38567) 获取。
- 该参数为主可用区，如果多可用区部署，Zone必须是AvailabilityZoneList中的一个。
   */
  Zone: string
  /**
   * 实例时长，单位：月，可选值包括 [1,2,3,4,5,6,7,8,9,10,11,12,24,36]。
   */
  Period: number
  /**
   * 机器类型。
- HIO：高IO型。
- HIO10G：高IO万兆。
   */
  MachineCode: string
  /**
   * 实例架构类型。
- REPLSET：副本集。
- SHARD：分片集群。
   */
  ClusterType: string
  /**
   * 指副本集数量。
- 创建副本集实例，该参数只能为1。
- 创建分片实例，指分片的数量。具体售卖规格，请通过接口 [DescribeSpecInfo](https://cloud.tencent.com/document/product/240/38567) 获取。
   */
  ReplicateSetNum: number
  /**
   * 项目ID。若不设置该参数，则为默认项目。
   */
  ProjectId?: number
  /**
   * 私有网络ID。如果不设置该参数，则默认选择基础网络。
   */
  VpcId?: string
  /**
   * 私有网络下的子网 ID，如果配置参数 VpcId，则 SubnetId必须配置。
   */
  SubnetId?: string
  /**
   * 实例密码。自定义密码长度为8-32个字符，至少包含字母、数字和字符（!@#%^*()_）中的两种。
   */
  Password?: string
  /**
   * 实例标签信息。
   */
  Tags?: Array<TagInfo>
  /**
   * 自动续费标记。
- 0：不自动续费。默认为不自动续费。
- 1：自动续费。
   */
  AutoRenewFlag?: number
  /**
   * 是否自动选择代金券。
- 1：是。
- 0：否。默认为0。
   */
  AutoVoucher?: number
  /**
   * 实例类型。
- 1：正式实例。
- 3：只读实例。
- 4：灾备实例。
   */
  Clone?: number
  /**
   * 父实例 ID。当参数**Clone**为3或者4时，即实例为只读或灾备实例时，该参数必须配置。
   */
  Father?: string
  /**
   * 安全组。
   */
  SecurityGroup?: Array<string>
  /**
   * 克隆实例回档时间。
- 若为克隆实例，则必须配置该参数。输入格式示例：2021-08-13 16:30:00。
- 回档时间范围：仅能回档7天内时间点的数据。
   */
  RestoreTime?: string
  /**
   * 实例名称。仅支持长度为60个字符的中文、英文、数字、下划线_、分隔符- 。
   */
  InstanceName?: string
  /**
   * 多可用区部署的节点列表。具体信息，请通过接口 [DescribeSpecInfo](https://cloud.tencent.com/document/product/240/38567)获取。
- 多可用区部署节点只能部署在3个不同可用区。不支持将集群的大多数节点部署在同一个可用区。例如：3节点集群不支持2个节点部署在同一个区。
- 不支持4.2及以上版本。
- 不支持只读灾备实例。
- 不能选择基础网络。
   */
  AvailabilityZoneList?: Array<string>
  /**
   * Mongos CPU 核数，购买MongoDB 4.2 及以上WiredTiger存储引擎版本的分片集群时，必须填写。具体售卖规格，请通过接口 [DescribeSpecInfo](https://cloud.tencent.com/document/product/240/38567) 获取。
   */
  MongosCpu?: number
  /**
   * Mongos 内存大小。购买MongoDB 4.2 及以上WiredTiger存储引擎版本的分片集群时，必须填写。具体售卖规格，请通过接口 [DescribeSpecInfo](https://cloud.tencent.com/document/product/240/38567) 获取。
   */
  MongosMemory?: number
  /**
   * Mongos 数量。购买MongoDB 4.2 及以上WiredTiger存储引擎版本的分片集群时，必须填写。具体售卖规格，请通过接口 [DescribeSpecInfo](https://cloud.tencent.com/document/product/240/38567) 获取。为了保障高可用，取值范围为[3,32]。
   */
  MongosNodeNum?: number
  /**
   * 只读节点数量，取值范围[0,5]。
   */
  ReadonlyNodeNum?: number
  /**
   * 指只读节点所属可用区。跨可用区部署实例，参数**ReadonlyNodeNum**不为**0**时，必须配置该参数。
   */
  ReadonlyNodeAvailabilityZoneList?: Array<string>
  /**
   * Hidden节点所属可用区。跨可用区部署实例，必须配置该参数。
   */
  HiddenZone?: string
}

/**
 * DescribeCurrentOp返回参数结构体
 */
export interface DescribeCurrentOpResponse {
  /**
   * 符合查询条件的操作总数
   */
  TotalCount: number
  /**
   * 当前操作列表
   */
  CurrentOps: Array<CurrentOp>
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * DescribeAccountUsers请求参数结构体
 */
export interface DescribeAccountUsersRequest {
  /**
   * 指定待获取账号的实例ID。例如：cmgo-p8vn****。请登录 [MongoDB 控制台](https://console.cloud.tencent.com/mongodb)在实例列表复制实例 ID。
   */
  InstanceId: string
}

/**
 * SetInstanceMaintenance返回参数结构体
 */
export interface SetInstanceMaintenanceResponse {
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * CreateBackupDBInstance返回参数结构体
 */
export interface CreateBackupDBInstanceResponse {
  /**
   * 查询备份流程的状态。
   */
  AsyncRequestId?: string
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * FlushInstanceRouterConfig请求参数结构体
 */
export interface FlushInstanceRouterConfigRequest {
  /**
   * 实例ID
   */
  InstanceId: string
}

/**
 * KillOps请求参数结构体
 */
export interface KillOpsRequest {
  /**
   * 实例ID，格式如：cmgo-p8vnipr5。与云数据库控制台页面中显示的实例ID相同
   */
  InstanceId: string
  /**
   * 待终止的操作
   */
  Operations: Array<Operation>
}

/**
 * InquirePriceRenewDBInstances请求参数结构体
 */
export interface InquirePriceRenewDBInstancesRequest {
  /**
   * 实例ID，格式如：cmgo-p8vnipr5。与云数据库控制台页面中显示的实例ID相同，接口单次最多只支持5个实例进行操作。
   */
  InstanceIds: Array<string>
  /**
   * 预付费模式（即包年包月）相关参数设置。通过该参数可以指定包年包月实例的续费时长、是否设置自动续费等属性。
   */
  InstanceChargePrepaid: InstanceChargePrepaid
}

/**
 * DescribeSlowLogs请求参数结构体
 */
export interface DescribeSlowLogsRequest {
  /**
   * 实例ID，格式如：cmgo-p8vnipr5。与云数据库控制台页面中显示的实例ID相同
   */
  InstanceId: string
  /**
   * 慢日志起始时间，格式：yyyy-mm-dd hh:mm:ss，如：2019-06-01 10:00:00。查询起止时间间隔不能超过24小时，只允许查询最近7天内慢日志。
   */
  StartTime: string
  /**
   * 慢日志终止时间，格式：yyyy-mm-dd hh:mm:ss，如：2019-06-02 12:00:00。查询起止时间间隔不能超过24小时，只允许查询最近7天内慢日志。
   */
  EndTime: string
  /**
   * 慢日志执行时间阈值，返回执行时间超过该阈值的慢日志，单位为毫秒(ms)，最小为100毫秒。
   */
  SlowMS: number
  /**
   * 偏移量，最小值为0，最大值为10000，默认值为0。
   */
  Offset?: number
  /**
   * 分页大小，最小值为1，最大值为100，默认值为20。
   */
  Limit?: number
  /**
   * 慢日志返回格式。默认返回原生慢日志格式，4.4及以上版本可设置为json。
   */
  Format?: string
}

/**
 * FlushInstanceRouterConfig返回参数结构体
 */
export interface FlushInstanceRouterConfigResponse {
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * 实例可修改参数Multi类型集合。
 */
export interface InstanceMultiParam {
  /**
   * 参数当前值。
   */
  CurrentValue: string
  /**
   * 参数默认值。
   */
  DefaultValue: string
  /**
   * 参考值范围。
   */
  EnumValue: Array<string>
  /**
   * 参数修改后是否需要重启才会生效。
- 1：需要重启后生效。
- 0：无需重启，设置成功即可生效。
   */
  NeedRestart: string
  /**
   * 参数名称。
   */
  ParamName: string
  /**
   * 是否为运行中参数值。
- 1：运行中参数值。
- 0：非运行中参数值。
   */
  Status: number
  /**
   * 参数说明。
   */
  Tips: Array<string>
  /**
   * 当前值的类型描述，默认为multi。
   */
  ValueType: string
}

/**
 * ModifyInstanceParams返回参数结构体
 */
export interface ModifyInstanceParamsResponse {
  /**
   * 修改参数配置是否生效。
- true：参数修改后的值已生效。
- false：执行失败。

   */
  Changed?: boolean
  /**
   * 该参数暂时无意义(兼容前端保留)。
   */
  TaskId?: number
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * DescribeBackupRules返回参数结构体
 */
export interface DescribeBackupRulesResponse {
  /**
   * 备份数据保留期限。单位为：天。
   */
  BackupSaveTime?: number
  /**
   * 自动备份开始时间。
   */
  BackupTime?: number
  /**
   * 备份方式。
- 0：逻辑备份。
- 1：物理备份。
   */
  BackupMethod?: number
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * 用于描述MongoDB数据库慢日志统计信息
 */
export interface SlowLogPattern {
  /**
   * 慢日志模式
   */
  Pattern: string
  /**
   * 最大执行时间
   */
  MaxTime: number
  /**
   * 平均执行时间
   */
  AverageTime: number
  /**
   * 该模式慢日志条数
   */
  Total: number
}

/**
 * AssignProject返回参数结构体
 */
export interface AssignProjectResponse {
  /**
   * 返回的异步任务ID列表
   */
  FlowIds: Array<number | bigint>
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * DescribeDBInstanceDeal返回参数结构体
 */
export interface DescribeDBInstanceDealResponse {
  /**
   * 订单状态，1：未支付，2：已支付，3：发货中，4：发货成功，5：发货失败，6：退款，7：订单关闭，8：超时未支付关闭。
   */
  Status?: number
  /**
   * 订单原价。
   */
  OriginalPrice?: number
  /**
   * 订单折扣价格。
   */
  DiscountPrice?: number
  /**
   * 订单行为，purchase：新购，renew：续费，upgrade：升配，downgrade：降配，refund：退货退款。
   */
  Action?: string
  /**
   * 当前订单的资源Id。
   */
  InstanceId?: string
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * 修改mongoDB实例，请求参数
 */
export interface ModifyMongoDBParamType {
  /**
   * 需要修改的参数名称，请严格参考通过 DescribeInstanceParams 获取的当前实例支持的参数名。
   */
  Key: string
  /**
   * 需要修改的参数名称对应的值，请严格参考通过 DescribeInstanceParams 获取的参数对应的值的范围。
   */
  Value: string
}

/**
 * OfflineIsolatedDBInstance返回参数结构体
 */
export interface OfflineIsolatedDBInstanceResponse {
  /**
   * 异步任务的请求 ID，可使用此 ID 查询异步任务的执行结果。
   */
  AsyncRequestId: string
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * IsolateDBInstance返回参数结构体
 */
export interface IsolateDBInstanceResponse {
  /**
   * 异步任务的请求 ID，可使用此 ID 查询异步任务的执行结果。
   */
  AsyncRequestId: string
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * DescribeSecurityGroup请求参数结构体
 */
export interface DescribeSecurityGroupRequest {
  /**
   * 实例 ID。例如：cmgo-p8vn****。
   */
  InstanceId: string
}

/**
 * RenameInstance请求参数结构体
 */
export interface RenameInstanceRequest {
  /**
   * 实例ID，格式如：cmgo-p8vnipr5。与云数据库控制台页面中显示的实例ID相同
   */
  InstanceId: string
  /**
   * 自定义实例名称，名称只支持长度为60个字符的中文、英文、数字、下划线_、分隔符 -
   */
  NewName: string
}

/**
 * DescribeBackupRules请求参数结构体
 */
export interface DescribeBackupRulesRequest {
  /**
   * 指定实例ID。例如：cmgo-p8vn****。请登录 [MongoDB 控制台](https://console.cloud.tencent.com/mongodb)在实例列表复制实例 ID。
   */
  InstanceId: string
}

/**
 * DescribeBackupDownloadTask返回参数结构体
 */
export interface DescribeBackupDownloadTaskResponse {
  /**
   * 满足查询条件的所有条数
   */
  TotalCount: number
  /**
   * 下载任务列表
   */
  Tasks: Array<BackupDownloadTask>
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * 修改实例节点详情
 */
export interface AddNodeList {
  /**
   * 需要删除的节点角色。
- SECONDARY：Mongod 节点。
- READONLY：只读节点。
- MONGOS：Mongos 节点。
   */
  Role: string
  /**
   * 节点所对应的可用区。
- 单可用区，所有节点在同一可用区。
- 多可用区：当前标准规格是三可用区分布，主从节点不在同一可用区，需注意配置新增节点对应的可用区，且新增后必须满足任意2个可用区节点数大于第3个可用区原则。
   */
  Zone: string
}

/**
 * 数据库实例价格
 */
export interface DBInstancePrice {
  /**
   * 单价
注意：此字段可能返回 null，表示取不到有效值。
   */
  UnitPrice: number
  /**
   * 原价
   */
  OriginalPrice: number
  /**
   * 折扣价
   */
  DiscountPrice: number
}

/**
 * 实例信息
 */
export interface DBInstanceInfo {
  /**
   * 实例ID
   */
  InstanceId: string
  /**
   * 地域信息
   */
  Region: string
}

/**
 * SetAccountUserPrivilege返回参数结构体
 */
export interface SetAccountUserPrivilegeResponse {
  /**
   * 任务ID。
   */
  FlowId?: number
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * 按key回档，源数据所在的库表
 */
export interface FlashbackDatabase {
  /**
   * 按key回档源数据所在库
   */
  DBName: string
  /**
   * 按key回档的集群数组
   */
  Collections: Array<FlashbackCollection>
}

/**
 * ModifyDBInstanceNetworkAddress请求参数结构体
 */
export interface ModifyDBInstanceNetworkAddressRequest {
  /**
   * 指定需修改网络的实例 ID。例如：cmgo-p8vn****。请登录 [MongoDB 控制台](https://console.cloud.tencent.com/mongodb)在实例列表复制实例 ID。

   */
  InstanceId: string
  /**
   * 原 IP 地址保留时长。
- 单位为分钟，0表示立即回收原 IP 地址。
- 原 IP 将在约定时间后释放，在释放前原 IP和新 IP均可访问。

   */
  OldIpExpiredTime: number
  /**
   * 切换后的私有网络 ID，若实例当前为基础网络，该字段无需配置。
   */
  NewUniqVpcId: string
  /**
   * 切换私有网络的子网 ID。若实例当前为基础网络，该字段无需配置。
   */
  NewUniqSubnetId: string
  /**
   * IP 地址信息，包含新 IP 地址与 原 IP 地址。
   */
  NetworkAddresses?: Array<ModifyNetworkAddress>
}

/**
 * CreateDBInstanceHour返回参数结构体
 */
export interface CreateDBInstanceHourResponse {
  /**
   * 订单ID。
   */
  DealId?: string
  /**
   * 创建的实例ID列表。
   */
  InstanceIds?: Array<string>
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * EnableTransparentDataEncryption请求参数结构体
 */
export interface EnableTransparentDataEncryptionRequest {
  /**
   * 实例 ID，例如：cmgo-p8vn****。请登录 [MongoDB 控制台](https://console.cloud.tencent.com/mongodb)在实例列表复制实例 ID。目前支持通用版本包含：4.4、5.0，云盘版暂不支持。
   */
  InstanceId: string
  /**
   *  [密钥管理系统（Key Management Service，KMS）](https://cloud.tencent.com/document/product/573/18809)服务所在地域，例如 ap-shanghai。
   */
  KmsRegion: string
  /**
   * 密钥 ID。若不设置该参数，不指定具体的密钥 ID，由腾讯云自动生成密钥。
   */
  KeyId?: string
}

/**
 * DeleteAccountUser请求参数结构体
 */
export interface DeleteAccountUserRequest {
  /**
   * 指定待删除账号的实例 ID。例如：cmgo-p8vn****。请登录 [MongoDB 控制台](https://console.cloud.tencent.com/mongodb)在实例列表复制实例 ID。

   */
  InstanceId: string
  /**
   * 配置待删除的账号名。
   */
  UserName: string
  /**
   * 配置 mongouser 对应的密码。mongouser为系统默认账号，输入其对应的密码。
   */
  MongoUserPassword: string
}

/**
 * mongodb售卖规格
 */
export interface SpecItem {
  /**
   * 规格信息标识
   */
  SpecCode: string
  /**
   * 规格有效标志，取值：0-停止售卖，1-开放售卖
   */
  Status: number
  /**
   * 计算资源规格，单位为CPU核心数
   */
  Cpu: number
  /**
   * 内存规格，单位为MB
   */
  Memory: number
  /**
   * 默认磁盘规格，单位MB
   */
  DefaultStorage: number
  /**
   * 最大磁盘规格，单位MB
   */
  MaxStorage: number
  /**
   * 最小磁盘规格，单位MB
   */
  MinStorage: number
  /**
   * 可承载qps信息
   */
  Qps: number
  /**
   * 连接数限制
   */
  Conns: number
  /**
   * 实例mongodb版本信息
   */
  MongoVersionCode: string
  /**
   * 实例mongodb版本号
   */
  MongoVersionValue: number
  /**
   * 实例mongodb版本号（短）
   */
  Version: string
  /**
   * 存储引擎
   */
  EngineName: string
  /**
   * 集群类型，取值：1-分片集群，0-副本集集群
   */
  ClusterType: number
  /**
   * 最小副本集从节点数
   */
  MinNodeNum: number
  /**
   * 最大副本集从节点数
   */
  MaxNodeNum: number
  /**
   * 最小分片数
   */
  MinReplicateSetNum: number
  /**
   * 最大分片数
   */
  MaxReplicateSetNum: number
  /**
   * 最小分片从节点数
   */
  MinReplicateSetNodeNum: number
  /**
   * 最大分片从节点数
   */
  MaxReplicateSetNodeNum: number
  /**
   * 机器类型，取值：0-HIO，4-HIO10G
   */
  MachineType: string
}

/**
 * ModifyDBInstanceNetworkAddress返回参数结构体
 */
export interface ModifyDBInstanceNetworkAddressResponse {
  /**
   * 修改网络异步流程任务ID。
   */
  FlowId?: number
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * CreateAccountUser返回参数结构体
 */
export interface CreateAccountUserResponse {
  /**
   * 创建任务ID。
   */
  FlowId?: number
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * DescribeSlowLogPatterns返回参数结构体
 */
export interface DescribeSlowLogPatternsResponse {
  /**
   * 慢日志统计信息总数
   */
  Count: number
  /**
   * 慢日志统计信息
   */
  SlowLogPatterns: Array<SlowLogPattern>
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * 创建备份下载任务结果
 */
export interface BackupDownloadTaskStatus {
  /**
   * 分片名
   */
  ReplicaSetId: string
  /**
   * 任务当前状态。0-等待执行，1-正在下载，2-下载完成，3-下载失败，4-等待重试
   */
  Status: number
}

/**
 * DescribeSlowLogs返回参数结构体
 */
export interface DescribeSlowLogsResponse {
  /**
   * 慢日志总数
   */
  Count?: number
  /**
   * 慢日志详情
注意：此字段可能返回 null，表示取不到有效值。
   */
  SlowLogs?: Array<string>
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * InquirePriceModifyDBInstanceSpec请求参数结构体
 */
export interface InquirePriceModifyDBInstanceSpecRequest {
  /**
   * 实例 ID，格式如：cmgo-p8vn****。与云数据库控制台页面中显示的实例ID相同。
   */
  InstanceId: string
  /**
   * 变更配置后实例内存大小，单位：GB。
   */
  Memory: number
  /**
   * 变更配置后实例磁盘大小，单位：GB。
   */
  Volume: number
  /**
   * 实例节点数。默认为不变更节点数，暂不支持变更。
   */
  NodeNum?: number
  /**
   * 实例分片数。默认为不变更分片数，暂不支持变更。
   */
  ReplicateSetNum?: number
}

/**
 * 备份信息
 */
export interface BackupInfo {
  /**
   * 实例ID
   */
  InstanceId?: string
  /**
   * 备份方式，0-自动备份，1-手动备份
   */
  BackupType?: number
  /**
   * 备份名称
   */
  BackupName?: string
  /**
   * 备份备注
注意：此字段可能返回 null，表示取不到有效值。
   */
  BackupDesc?: string
  /**
   * 备份文件大小，单位KB
注意：此字段可能返回 null，表示取不到有效值。
   */
  BackupSize?: number
  /**
   * 备份开始时间
注意：此字段可能返回 null，表示取不到有效值。
   */
  StartTime?: string
  /**
   * 备份结束时间
注意：此字段可能返回 null，表示取不到有效值。
   */
  EndTime?: string
  /**
   * 备份状态，1-备份中，2-备份成功
   */
  Status?: number
  /**
   * 备份方法，0-逻辑备份，1-物理备份
   */
  BackupMethod?: number
  /**
   * 备份记录id
   */
  BackId?: number
  /**
   * 备份删除时间
   */
  DeleteTime?: string
  /**
   * 异地备份地域
注意：此字段可能返回 null，表示取不到有效值。
   */
  BackupRegion?: string
}

/**
 * DescribeDBInstances请求参数结构体
 */
export interface DescribeDBInstancesRequest {
  /**
   * 实例 ID 列表。例如：cmgo-p8vn****。请登录 [MongoDB 控制台](https://console.cloud.tencent.com/mongodb)在实例列表复制实例 ID。
   */
  InstanceIds?: Array<string>
  /**
   * 实例类型。取值范围如下：<ul><li>0：所有实例。</li><li>1：正式实例。</li><li>2：临时实例。</li><li>3：只读实例。</li><li>-1：正式实例、只读、灾备实例。</li></ul>
   */
  InstanceType?: number
  /**
   * 集群类型，取值范围如下：<ul><li>0：副本集实例。</li><li>1：分片实例。</li><li>-1：所有实例。</li></ul>
   */
  ClusterType?: number
  /**
   * 实例状态，取值范围如下所示：<ul><li>0：待初始化。</li><li>1：流程执行中。</li><li>2：实例有效。</li><li>-2：已隔离（包年包月实例）。</li><li>-3：已隔离（按量计费实例）。</li></ul>
   */
  Status?: Array<number | bigint>
  /**
   * 私有网络的 ID。
- 基础网络则无需配置该参数。
- 请登录 [MongoDB 控制台](https://console.cloud.tencent.com/mongodb)在实例列表中，单击私有网络名称，在**私有网络**页面获取其 ID。
   */
  VpcId?: string
  /**
   * 私有网络的子网ID。
- 基础网络则无需配置该参数。
- 请登录 [MongoDB 控制台](https://console.cloud.tencent.com/mongodb)在实例列表中，单击私有网络名称，在**私有网络**页面获取其子网 ID。
   */
  SubnetId?: string
  /**
   * 付费类型，取值范围如下：<ul><li>0：查询按量计费实例。</li><li>1：查询包年包月实例。</li><li>-1：查询按量计费与包年包月实例。</li></ul>
   */
  PayMode?: number
  /**
   * 单次请求返回的数量。默认值为20，取值范围为[1,100]。
   */
  Limit?: number
  /**
   * 偏移量，默认值为0。
   */
  Offset?: number
  /**
   * 配置返回结果排序依据的字段。目前支持依据"ProjectId"、"InstanceName"、"CreateTime"排序。
   */
  OrderBy?: string
  /**
   * 配置返回结果的排序方式。
- ASC：升序。
- DESC：降序。
   */
  OrderByType?: string
  /**
   * 项目 ID。请登录 [MongoDB 控制台](https://console.cloud.tencent.com/mongodb)，在右上角的账户信息下拉菜单中，选择项目管理查询项目。
   */
  ProjectIds?: Array<number | bigint>
  /**
   * 配置查询搜索的关键词。支持配置为实例ID、实例名称或者内网 IP 地址。
   */
  SearchKey?: string
  /**
   * 标签信息，包含标签键与标签值。
   */
  Tags?: Array<TagInfo>
}

/**
 * 云数据库实例当前操作
 */
export interface CurrentOp {
  /**
   * 操作序号
注意：此字段可能返回 null，表示取不到有效值。
   */
  OpId: number
  /**
   * 操作所在的命名空间，形式如db.collection
注意：此字段可能返回 null，表示取不到有效值。
   */
  Ns: string
  /**
   * 操作执行语句
注意：此字段可能返回 null，表示取不到有效值。
   */
  Query: string
  /**
   * 操作类型，可能的取值：aggregate、count、delete、distinct、find、findAndModify、getMore、insert、mapReduce、update和command
注意：此字段可能返回 null，表示取不到有效值。
   */
  Op: string
  /**
   * 操作所在的分片名称
   */
  ReplicaSetName: string
  /**
   * 筛选条件，节点状态，可能的取值为：Primary、Secondary
注意：此字段可能返回 null，表示取不到有效值。
   */
  State: string
  /**
   * 操作详细信息
注意：此字段可能返回 null，表示取不到有效值。
   */
  Operation: string
  /**
   * 操作所在的节点名称
   */
  NodeName: string
  /**
   * 操作已执行时间（ms）
注意：此字段可能返回 null，表示取不到有效值。
   */
  MicrosecsRunning: number
}

/**
 * ModifyDBInstanceSpec请求参数结构体
 */
export interface ModifyDBInstanceSpecRequest {
  /**
   * 实例 ID，例如：cmgo-p8vn****。请登录 [MongoDB 控制台](https://console.cloud.tencent.com/mongodb)在实例列表复制实例 ID。

   */
  InstanceId: string
  /**
   * 实例配置变更后的内存大小。
- 单位：GB。
- 内存和磁盘必须同时升配或同时降配，即 Memory 与 Volume 需同时配置变更。
   */
  Memory: number
  /**
   * 实例配置变更后的硬盘大小，单位：GB。<ul><li>内存和磁盘必须同时升配或同时降配，即 Memory 与 Volume 需同时配置变更。</li><li>降配时，变更后的磁盘容量必须大于已用磁盘容量的1.2倍。</li></ul>
   */
  Volume: number
  /**
   * (已废弃) 请使用ResizeOplog独立接口完成。

实例配置变更后 Oplog 的大小。
- 单位：GB。
- 默认 Oplog 占用容量为磁盘空间的10%。系统允许设置的 Oplog 容量范围为磁盘空间的[10%,90%]。
   */
  OplogSize?: number
  /**
   * 实例变更后的节点数(mongod节点或mongos节点或readonly节点调整后的节点数，具体类型取决于AddNodeList或RemoveNodeList参数的节点类型)。
<ul><li>副本集：取值范围请通过云数据库的售卖规格（DescribeSpecInfo）接口返回的参数 MinNodeNum 与 MaxNodeNum 获取。</li><li>分片集群：取值范围请通过云数据库的售卖规格（DescribeSpecInfo）接口返回的参数 MinReplicateSetNodeNum 与 MaxReplicateSetNodeNum 获取。</li></ul>
   */
  NodeNum?: number
  /**
   * 实例变更后的分片数。<ul><li>取值范围请通过云数据库的售卖规格（DescribeSpecInfo）接口返回的参数MinReplicateSetNum与MaxReplicateSetNum获取。</li><li>该参数只能增加不能减少。</li></ul>
   */
  ReplicateSetNum?: number
  /**
   * 实例配置变更的切换时间。<ul><li>0：调整完成时，立即执行变配任务。默认为0。</li><li>1：在维护时间窗内，执行变配任务。
<b>说明</b>：调整节点数和分片数不支持在<b>维护时间窗内</b>变更。</li></ul>
   */
  InMaintenance?: number
  /**
   * 新增节点属性列表。
   */
  AddNodeList?: Array<AddNodeList>
  /**
   * 删除节点属性列表。
   */
  RemoveNodeList?: Array<RemoveNodeList>
}

/**
 * 用户权限
 */
export interface Auth {
  /**
   * 当前账号具有的权限信息。<ul><li>0：无权限。</li><li>1：只读。</li><li>2：只写。</li><li>3：读写。</li></ul>
   */
  Mask: number
  /**
   * 指具有当前账号权限的数据库名。
<ul><li>* ：表示所有数据库。</li><li>db.name：表示特定name的数据库。</li></ul>
   */
  NameSpace: string
}

/**
 * FlashBackDBInstance请求参数结构体
 */
export interface FlashBackDBInstanceRequest {
  /**
   * 开启按 Key 回档的实例 ID。
   */
  InstanceId: string
  /**
   * 源数据想恢复到的时间。
   */
  TargetFlashbackTime: string
  /**
   * 源数据所在的库表信息。
   */
  TargetDatabases: Array<FlashbackDatabase>
  /**
   * 数据最终写入的实例 ID。
   */
  TargetInstanceId?: string
}

/**
 * TerminateDBInstances返回参数结构体
 */
export interface TerminateDBInstancesResponse {
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * ResetDBInstancePassword请求参数结构体
 */
export interface ResetDBInstancePasswordRequest {
  /**
   * 实例Id
   */
  InstanceId: string
  /**
   * 实例账号名
   */
  UserName: string
  /**
   * 新密码，新密码长度不能少于8位
   */
  Password: string
}

/**
 * 实例可修改参数 Integer 类型集合。
 */
export interface InstanceIntegerParam {
  /**
   * 参数当前值。
   */
  CurrentValue: string
  /**
   * 参数默认值。
   */
  DefaultValue: string
  /**
   * 参数最大值。
   */
  Max: string
  /**
   * 最小值。
   */
  Min: string
  /**
   * 参数修改之后是否需要重启生效。
- 1:需要重启后生效。
- 0：无需重启，设置成功即可生效。
   */
  NeedRestart: string
  /**
   * 参数名称。
   */
  ParamName: string
  /**
   * 参数说明。
   */
  Tips: Array<string>
  /**
   * 参数类型。
   */
  ValueType: string
  /**
   * 是否为运行中参数值。
- 1：运行中参数值。
- 0：非运行中参数值。
   */
  Status: number
  /**
   * 冗余字段，可忽略。
   */
  Unit: string
}

/**
 * 修改数据库地址
 */
export interface ModifyNetworkAddress {
  /**
   * 新IP地址。
   */
  NewIPAddress: string
  /**
   * 原IP地址。
   */
  OldIpAddress: string
}

/**
 * DescribeAsyncRequestInfo返回参数结构体
 */
export interface DescribeAsyncRequestInfoResponse {
  /**
   * 状态。返回参数有：initial-初始化、running-运行中、paused-任务执行失败，已暂停、undoed-任务执行失败，已回滚、failed-任务执行失败, 已终止、success-成功
   */
  Status: string
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * CreateDBInstance返回参数结构体
 */
export interface CreateDBInstanceResponse {
  /**
   * 订单ID
   */
  DealId?: string
  /**
   * 创建的实例ID列表
   */
  InstanceIds?: Array<string>
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * CreateAccountUser请求参数结构体
 */
export interface CreateAccountUserRequest {
  /**
   * 实例 ID。例如：cmgo-p8vn****。请登录 [MongoDB 控制台](https://console.cloud.tencent.com/mongodb)在实例列表复制实例 ID。
   */
  InstanceId: string
  /**
   * 新账号名称。其格式要求如下：<ul><li>字符范围[1,32]。</li><li>可输入[A,Z]、[a,z]、[1,9]范围的字符以及下划线“_”与短划线“-”。</li></ul>
   */
  UserName: string
  /**
   * 新账号密码。密码复杂度要求如下：<ul><li>字符长度范围[8,32]。</li><li>至少包含字母、数字和特殊字符（叹号“!”、at"@"、井号“#”、百分号“%”、插入符“^”、星号“*”、小括号“()”、下划线“_”）中的两种。</li></ul>
   */
  Password: string
  /**
   * mongouser 账号对应的密码。mongouser 为系统默认账号，即为创建实例时，设置的密码。
   */
  MongoUserPassword: string
  /**
   * 账号备注信息。
   */
  UserDesc?: string
  /**
   * 账号的读写权限信息。
   */
  AuthRole?: Array<Auth>
}

/**
 * 实例可修改参数为 Text 类型的参数集合。
 */
export interface InstanceTextParam {
  /**
   * 参数当前值。
   */
  CurrentValue: string
  /**
   * 参数默认值。
   */
  DefaultValue: string
  /**
   * 修改参数值之后是否需要重启。
   */
  NeedRestart: string
  /**
   * 参数名称。
   */
  ParamName: string
  /**
   * Text 类型参数对应的值。
   */
  TextValue: string
  /**
   * 参数说明。
   */
  Tips: Array<string>
  /**
   * 参数值类型说明。
   */
  ValueType: string
  /**
   * 是否为运行中的参数值。
- 1：运行中参数值。
- 0：非运行中参数值。
   */
  Status: string
}

/**
 * ModifyDBInstanceSecurityGroup请求参数结构体
 */
export interface ModifyDBInstanceSecurityGroupRequest {
  /**
   * 实例 ID。例如：cmgo-7pje****。
   */
  InstanceId: string
  /**
   * 目标安全组 ID。请通过接口[DescribeSecurityGroup](https://cloud.tencent.com/document/product/240/55675)查看具体的安全组 ID。
   */
  SecurityGroupIds: Array<string>
}

/**
 * DescribeAccountUsers返回参数结构体
 */
export interface DescribeAccountUsersResponse {
  /**
   * 实例账号列表。
   */
  Users?: Array<UserInfo>
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * DescribeBackupDownloadTask请求参数结构体
 */
export interface DescribeBackupDownloadTaskRequest {
  /**
   * 实例ID，格式如：cmgo-p8vnipr5。与云数据库控制台页面中显示的实例ID相同
   */
  InstanceId: string
  /**
   * 备份文件名，用来过滤指定文件的下载任务
   */
  BackupName?: string
  /**
   * 指定查询时间范围内的任务，StartTime指定开始时间，不填默认不限制开始时间
   */
  StartTime?: string
  /**
   * 指定查询时间范围内的任务，EndTime指定截止时间，不填默认不限制截止时间
   */
  EndTime?: string
  /**
   * 此次查询返回的条数，取值范围为1-100，默认为20
   */
  Limit?: number
  /**
   * 指定此次查询返回的页数，默认为0
   */
  Offset?: number
  /**
   * 排序字段，取值为createTime，finishTime两种，默认为createTime
   */
  OrderBy?: string
  /**
   * 排序方式，取值为asc，desc两种，默认desc
   */
  OrderByType?: string
  /**
   * 根据任务状态过滤。0-等待执行，1-正在下载，2-下载完成，3-下载失败，4-等待重试。不填默认返回所有类型
   */
  Status?: Array<number | bigint>
}

/**
 * 需要终止的操作
 */
export interface Operation {
  /**
   * 操作所在的分片名
   */
  ReplicaSetName: string
  /**
   * 操作所在的节点名
   */
  NodeName: string
  /**
   * 操作序号
   */
  OpId: number
}

/**
 * DescribeClientConnections返回参数结构体
 */
export interface DescribeClientConnectionsResponse {
  /**
   * 客户端连接信息，包括客户端 IP 和对应 IP 的连接数量。
   */
  Clients?: Array<ClientConnection>
  /**
   * 满足条件的记录总条数，可用于分页查询。
   */
  TotalCount?: number
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * TerminateDBInstances请求参数结构体
 */
export interface TerminateDBInstancesRequest {
  /**
   * 指定预隔离实例ID。格式如：cmgo-p8vnipr5。
   */
  InstanceId: string
}

/**
 * DescribeDBBackups返回参数结构体
 */
export interface DescribeDBBackupsResponse {
  /**
   * 备份列表
   */
  BackupList?: Array<BackupInfo>
  /**
   * 备份总数
   */
  TotalCount?: number
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * ModifyDBInstanceSecurityGroup返回参数结构体
 */
export interface ModifyDBInstanceSecurityGroupResponse {
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * 账户基本信息
 */
export interface UserInfo {
  /**
   * 账号名。
   */
  UserName: string
  /**
   * 账号权限详情。
   */
  AuthRole: Array<Auth>
  /**
   * 账号创建时间。
   */
  CreateTime: string
  /**
   * 账号更新时间。
   */
  UpdateTime: string
  /**
   * 备注信息。
   */
  UserDesc: string
}

/**
 * DescribeInstanceParams请求参数结构体
 */
export interface DescribeInstanceParamsRequest {
  /**
   * 指定待查询参数列表的实例 ID。例如：cmgo-p8vn****。请登录 [MongoDB 控制台](https://console.cloud.tencent.com/mongodb)在实例列表复制实例 ID。
   */
  InstanceId: string
}

/**
 * 节点Tag
 */
export interface NodeTag {
  /**
   * 节点Tag key
注意：此字段可能返回 null，表示取不到有效值。
   */
  TagKey?: string
  /**
   * 节点Tag Value
注意：此字段可能返回 null，表示取不到有效值。
   */
  TagValue?: string
}

/**
 * InquirePriceCreateDBInstances返回参数结构体
 */
export interface InquirePriceCreateDBInstancesResponse {
  /**
   * 价格
   */
  Price?: DBInstancePrice
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * DescribeSecurityGroup返回参数结构体
 */
export interface DescribeSecurityGroupResponse {
  /**
   * 实例绑定的安全组信息。
   */
  Groups?: Array<SecurityGroup>
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * 安全组信息
 */
export interface SecurityGroup {
  /**
   * 所属项目id
   */
  ProjectId: number
  /**
   * 创建时间
   */
  CreateTime: string
  /**
   * 入站规则
   */
  Inbound: Array<SecurityGroupBound>
  /**
   * 出站规则
   */
  Outbound: Array<SecurityGroupBound>
  /**
   * 安全组id
   */
  SecurityGroupId: string
  /**
   * 安全组名称
   */
  SecurityGroupName: string
  /**
   * 安全组备注
   */
  SecurityGroupRemark: string
}

/**
 * 分片信息
 */
export interface ReplicaSetInfo {
  /**
   * 副本集ID
   */
  ReplicaSetId: string
}

/**
 * ResetDBInstancePassword返回参数结构体
 */
export interface ResetDBInstancePasswordResponse {
  /**
   * 异步请求Id，用户查询该流程的运行状态
   */
  AsyncRequestId: string
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * 客户端连接信息，包括客户端IP和连接数
 */
export interface ClientConnection {
  /**
   * 连接的客户端IP
   */
  IP: string
  /**
   * 对应客户端IP的连接数
   */
  Count: number
  /**
   * 是否为内部ip
   */
  InternalService: boolean
}

/**
 * 副本集信息
 */
export interface ReplicateSetInfo {
  /**
   * 节点属性
注意：此字段可能返回 null，表示取不到有效值。
   */
  Nodes: Array<NodeProperty>
}

/**
 * DescribeDBInstanceDeal请求参数结构体
 */
export interface DescribeDBInstanceDealRequest {
  /**
   * 订单ID，通过CreateDBInstance等接口返回
   */
  DealId: string
}

/**
 * DescribeAsyncRequestInfo请求参数结构体
 */
export interface DescribeAsyncRequestInfoRequest {
  /**
   * 异步请求Id，涉及到异步流程的接口返回，如CreateBackupDBInstance
   */
  AsyncRequestId: string
}

/**
 * 按key回档，用于筛选数据的键值对
 */
export interface FBKeyValue {
  /**
   * 用于按key回档过滤的key
   */
  Key?: string
  /**
   * 用于按key回档过滤的value
   */
  Value?: string
}

/**
 * CreateBackupDownloadTask请求参数结构体
 */
export interface CreateBackupDownloadTaskRequest {
  /**
   * 实例ID，格式如：cmgo-p8vnipr5。与云数据库控制台页面中显示的实例ID相同。
   */
  InstanceId: string
  /**
   * 要下载的备份文件名，可通过DescribeDBBackups接口获取。
   */
  BackupName: string
  /**
   * 指定要下载的副本集的节点名称 或 分片集群的分片名称列表。
如副本集cmgo-p8vnipr5，示例(固定取值)：BackupSets.0=cmgo-p8vnipr5_0，可下载全量数据。
如分片集群cmgo-p8vnipr5，示例：BackupSets.0=cmgo-p8vnipr5_0&BackupSets.1=cmgo-p8vnipr5_1，即下载分片0和分片1的数据，分片集群如需全量下载，请按示例方式传入全部分片名称。
   */
  BackupSets: Array<ReplicaSetInfo>
}

/**
 * InquirePriceModifyDBInstanceSpec返回参数结构体
 */
export interface InquirePriceModifyDBInstanceSpecResponse {
  /**
   * 价格。
   */
  Price?: DBInstancePrice
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * 安全组规则
 */
export interface SecurityGroupBound {
  /**
   * 执行规则。ACCEPT或DROP
   */
  Action: string
  /**
   * ip段。
   */
  CidrIp: string
  /**
   * 端口范围
   */
  PortRange: string
  /**
   * 传输层协议。tcp，udp或ALL
   */
  IpProtocol: string
  /**
   * 安全组id代表的地址集合
   */
  Id: string
  /**
   * 地址组id代表的地址集合
   */
  AddressModule: string
  /**
   * 服务组id代表的协议和端口集合
   */
  ServiceModule: string
  /**
   * 描述
   */
  Desc: string
}

/**
 * DescribeDBInstanceNodeProperty返回参数结构体
 */
export interface DescribeDBInstanceNodePropertyResponse {
  /**
   * Mongos节点属性。
注意：此字段可能返回 null，表示取不到有效值。
   */
  Mongos: Array<NodeProperty>
  /**
   * 副本集节点信息。
   */
  ReplicateSets: Array<ReplicateSetInfo>
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * DescribeCurrentOp请求参数结构体
 */
export interface DescribeCurrentOpRequest {
  /**
   * 实例ID，格式如：cmgo-p8vnipr5。与云数据库控制台页面中显示的实例ID相同
   */
  InstanceId: string
  /**
   * 筛选条件，操作所属的命名空间namespace，格式为db.collection
   */
  Ns?: string
  /**
   * 筛选条件，操作已经执行的时间（单位：毫秒），结果将返回超过设置时间的操作，默认值为0，取值范围为[0, 3600000]
   */
  MillisecondRunning?: number
  /**
   * 筛选条件，操作类型，可能的取值：none，update，insert，query，command，getmore，remove和killcursors
   */
  Op?: string
  /**
   * 筛选条件，分片名称
   */
  ReplicaSetName?: string
  /**
   * 筛选条件，节点状态，可能的取值为：primary
secondary
   */
  State?: string
  /**
   * 单次请求返回的数量，默认值为100，取值范围为[0,100]
   */
  Limit?: number
  /**
   * 偏移量，默认值为0，取值范围为[0,10000]
   */
  Offset?: number
  /**
   * 返回结果集排序的字段，目前支持："MicrosecsRunning"/"microsecsrunning"，默认为升序排序
   */
  OrderBy?: string
  /**
   * 返回结果集排序方式，可能的取值："ASC"/"asc"或"DESC"/"desc"
   */
  OrderByType?: string
}

/**
 * 备份下载任务
 */
export interface BackupDownloadTask {
  /**
   * 任务创建时间
   */
  CreateTime: string
  /**
   * 备份文件名
   */
  BackupName: string
  /**
   * 分片名称
   */
  ReplicaSetId: string
  /**
   * 备份数据大小，单位为字节
   */
  BackupSize: number
  /**
   * 任务状态。0-等待执行，1-正在下载，2-下载完成，3-下载失败，4-等待重试
   */
  Status: number
  /**
   * 任务进度百分比
   */
  Percent: number
  /**
   * 耗时，单位为秒
   */
  TimeSpend: number
  /**
   * 备份数据下载链接
   */
  Url: string
  /**
   * 备份文件备份类型，0-逻辑备份，1-物理备份
   */
  BackupMethod: number
  /**
   * 发起备份时指定的备注信息
注意：此字段可能返回 null，表示取不到有效值。
   */
  BackupDesc: string
}

/**
 * DescribeDBBackups请求参数结构体
 */
export interface DescribeDBBackupsRequest {
  /**
   * 实例ID，格式如：cmgo-p8vnipr5。与云数据库控制台页面中显示的实例ID相同
   */
  InstanceId: string
  /**
   * 备份方式，当前支持：0-逻辑备份，1-物理备份，2-所有备份。默认为逻辑备份。
   */
  BackupMethod?: number
  /**
   * 分页大小，最大值为100，不设置默认查询所有。
   */
  Limit?: number
  /**
   * 分页偏移量，最小值为0，默认值为0。
   */
  Offset?: number
}

/**
 * DescribeClientConnections请求参数结构体
 */
export interface DescribeClientConnectionsRequest {
  /**
   * 指定待查询的实例ID，例如：cmgo-p8vn****。请登录 [MongoDB 控制台](https://console.cloud.tencent.com/mongodb)在实例列表复制实例 ID。

   */
  InstanceId: string
  /**
   * 单次请求返回的数量。最小值为1，最大值为1000，默认值为1000。
   */
  Limit?: number
  /**
   * 偏移量，默认值为0。Offset=Limit*(页码-1)。
   */
  Offset?: number
}

/**
 * 实例分片详情
 */
export interface ShardInfo {
  /**
   * 分片已使用容量
   */
  UsedVolume: number
  /**
   * 分片ID
   */
  ReplicaSetId: string
  /**
   * 分片名
   */
  ReplicaSetName: string
  /**
   * 分片内存规格，单位为MB
   */
  Memory: number
  /**
   * 分片磁盘规格，单位为MB
   */
  Volume: number
  /**
   * 分片Oplog大小，单位为MB
   */
  OplogSize: number
  /**
   * 分片从节点数
   */
  SecondaryNum: number
  /**
   * 分片物理id
   */
  RealReplicaSetId: string
}

/**
 * SetBackupRules返回参数结构体
 */
export interface SetBackupRulesResponse {
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * DescribeDBInstanceNodeProperty请求参数结构体
 */
export interface DescribeDBInstanceNodePropertyRequest {
  /**
   * 实例ID，格式如：cmgo-p8vnipr5。与云数据库控制台页面中显示的实例ID相同。
   */
  InstanceId: string
  /**
   * 节点ID。
   */
  NodeIds?: Array<string>
  /**
   * 节点角色。可选值包括：
<ul><li>PRIMARY：主节点。</li><li>SECONDARY：从节点。</li><li>READONLY：只读节点。</li><li>ARBITER：仲裁节点。</li></ul>
   */
  Roles?: Array<string>
  /**
   * 该参数指定节点是否为Hidden节点，默认为false。
   */
  OnlyHidden?: boolean
  /**
   * 该参数指定选举新主节点的优先级。其取值范围为[0,100]，数值越高，优先级越高。
   */
  Priority?: number
  /**
   * 该参数指定节点投票权。
<ul><li>1：具有投票权。</li><li>0：无投票权。</li></ul>
   */
  Votes?: number
  /**
   * 节点标签。
   */
  Tags?: Array<NodeTag>
}

/**
 * RenewDBInstances返回参数结构体
 */
export interface RenewDBInstancesResponse {
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * 实例可修改参数枚举类型集合。
 */
export interface InstanceEnumParam {
  /**
   * 参数当前值。
   */
  CurrentValue?: string
  /**
   * 参数默认值。
   */
  DefaultValue?: string
  /**
   * 枚举值，所有支持的值。
   */
  EnumValue?: Array<string>
  /**
   * 参数修改之后是否需要重启生效。
- 1：需要重启后生效。
- 0：无需重启，设置成功即可生效。
   */
  NeedRestart?: string
  /**
   * 参数名称。
   */
  ParamName?: string
  /**
   * 参数说明。
   */
  Tips?: Array<string>
  /**
   * 参数值类型说明。
   */
  ValueType?: string
  /**
   * 是否为运行中参数值。
- 1：运行中参数值。
- 0：非运行中参数值。
   */
  Status?: number
}

/**
 * FlashBackDBInstance返回参数结构体
 */
export interface FlashBackDBInstanceResponse {
  /**
   * 回档数据异步任务 ID。
注意：此字段可能返回 null，表示取不到有效值。
   */
  FlowId?: number
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * RenameInstance返回参数结构体
 */
export interface RenameInstanceResponse {
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * DescribeTransparentDataEncryptionStatus返回参数结构体
 */
export interface DescribeTransparentDataEncryptionStatusResponse {
  /**
   * 表示是否开启了透明加密。 
- close：未开启。
- open：已开启。
   */
  TransparentDataEncryptionStatus?: string
  /**
   * 已绑定的密钥列表，如未绑定，返回null。
注意：此字段可能返回 null，表示取不到有效值。
   */
  KeyInfoList?: Array<KMSInfoDetail>
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * CreateBackupDBInstance请求参数结构体
 */
export interface CreateBackupDBInstanceRequest {
  /**
   * 实例 ID。例如：cmgo-p8vn****。请登录 [MongoDB 控制台](https://console.cloud.tencent.com/mongodb)在实例列表复制实例 ID。
   */
  InstanceId: string
  /**
   * 设置备份方式。
- 0：逻辑备份。
- 1：物理备份。
   */
  BackupMethod: number
  /**
   * 备份备注信息。
   */
  BackupRemark?: string
}

/**
 * SetAccountUserPrivilege请求参数结构体
 */
export interface SetAccountUserPrivilegeRequest {
  /**
   * 指定待设置账号的实例ID。例如：cmgo-p8vn****。请登录 [MongoDB 控制台](https://console.cloud.tencent.com/mongodb)在实例列表复制实例 ID。
   */
  InstanceId: string
  /**
   * 设置账号名称。
   */
  UserName: string
  /**
   * 设置权限信息。
   */
  AuthRole: Array<Auth>
}

/**
 * 节点属性
 */
export interface NodeProperty {
  /**
   * 节点所在的可用区。
注意：此字段可能返回 null，表示取不到有效值。
   */
  Zone: string
  /**
   * 节点名称。
注意：此字段可能返回 null，表示取不到有效值。
   */
  NodeName: string
  /**
   * 节点访问地址。
注意：此字段可能返回 null，表示取不到有效值。
   */
  Address: string
  /**
   * 角色。
注意：此字段可能返回 null，表示取不到有效值。
   */
  Role: string
  /**
   * 是否为Hidden节点
注意：此字段可能返回 null，表示取不到有效值。
   */
  Hidden: boolean
  /**
   * 节点状态，包括：ORMAL/STARTUP/RECOVERING/STARTUP2/UNKNOWN/DOWN/ROLLBACK/REMOVED等。
注意：此字段可能返回 null，表示取不到有效值。
   */
  Status: string
  /**
   * 主从延迟，单位秒。
注意：此字段可能返回 null，表示取不到有效值。
   */
  SlaveDelay: number
  /**
   * 节点优先级。
注意：此字段可能返回 null，表示取不到有效值。
   */
  Priority: number
  /**
   * 节点投票权。
注意：此字段可能返回 null，表示取不到有效值。
   */
  Votes: number
  /**
   * 节点标签。
注意：此字段可能返回 null，表示取不到有效值。
   */
  Tags: Array<NodeTag>
  /**
   * 副本集Id。
注意：此字段可能返回 null，表示取不到有效值。
   */
  ReplicateSetId: string
}

/**
 * KillOps返回参数结构体
 */
export interface KillOpsResponse {
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * IsolateDBInstance请求参数结构体
 */
export interface IsolateDBInstanceRequest {
  /**
   * 实例ID，格式如：cmgo-p8vnipr5。与云数据库控制台页面中显示的实例ID相同
   */
  InstanceId: string
}

/**
 * CreateDBInstanceHour请求参数结构体
 */
export interface CreateDBInstanceHourRequest {
  /**
   * 实例内存大小，单位：GB。
   */
  Memory: number
  /**
   * 实例硬盘大小，单位：GB。
   */
  Volume: number
  /**
   * 指副本集数量。
- 创建副本集实例，该参数只能为1。
- 创建分片实例，指分片的数量。具体售卖规格，请通过接口 [DescribeSpecInfo](https://cloud.tencent.com/document/product/240/38567) 获取。
   */
  ReplicateSetNum: number
  /**
   * 指每个副本集内节点个数。具体售卖规格，请通过接口 [DescribeSpecInfo](https://cloud.tencent.com/document/product/240/38567) 获取。
   */
  NodeNum: number
  /**
   * 指版本信息。具体售卖规格，请通过接口 [DescribeSpecInfo](https://cloud.tencent.com/document/product/240/38567) 获取。
- MONGO_36_WT：MongoDB 3.6 WiredTiger存储引擎版本。
- MONGO_40_WT：MongoDB 4.0 WiredTiger存储引擎版本。
- MONGO_42_WT：MongoDB 4.2 WiredTiger存储引擎版本。
- MONGO_44_WT：MongoDB 4.4 WiredTiger存储引擎版本。
   */
  MongoVersion: string
  /**
   * 机器类型。
- HIO：高IO型。
- HIO10G：高IO万兆。
   */
  MachineCode: string
  /**
   * 实例数量，最小值1，最大值为10。
   */
  GoodsNum: number
  /**
   * 可用区信息，输入格式如：ap-guangzhou-2。
- 具体信息，请通过接口 [DescribeSpecInfo](https://cloud.tencent.com/document/product/240/38567) 获取。
- 该参数为主可用区，如果多可用区部署，Zone必须是AvailabilityZoneList中的一个。
   */
  Zone: string
  /**
   * 实例架构类型。
- REPLSET：副本集。
- SHARD：分片集群。
   */
  ClusterType: string
  /**
   * 私有网络ID。如果不设置该参数，则默认选择基础网络。
   */
  VpcId?: string
  /**
   * 私有网络下的子网 ID，如果配置参数 VpcId，则 SubnetId必须配置。
   */
  SubnetId?: string
  /**
   * 实例密码。自定义密码长度为8-32个字符，至少包含字母、数字和字符（!@#%^*()_）中的两种。
   */
  Password?: string
  /**
   * 项目ID。若不设置该参数，则为默认项目。
   */
  ProjectId?: number
  /**
   * 实例标签信息。
   */
  Tags?: Array<TagInfo>
  /**
   * 实例类型。
- 1：正式实例。
- 3：只读实例。
- 4：灾备实例。
   */
  Clone?: number
  /**
   * 父实例 ID。当参数**Clone**为3或者4时，即实例为只读或灾备实例时，该参数必须配置。
   */
  Father?: string
  /**
   * 安全组。
   */
  SecurityGroup?: Array<string>
  /**
   * 克隆实例回档时间。
- 若为克隆实例，则必须配置该参数。输入格式示例：2021-08-13 16:30:00。
- 回档时间范围：仅能回档7天内时间点的数据。
   */
  RestoreTime?: string
  /**
   * 实例名称。仅支持长度为60个字符的中文、英文、数字、下划线_、分隔符- 。
   */
  InstanceName?: string
  /**
   * 多可用区部署的节点列表。具体信息，请通过接口 [DescribeSpecInfo](https://cloud.tencent.com/document/product/240/38567)获取。
- 多可用区部署节点只能部署在3个不同可用区。不支持将集群的大多数节点部署在同一个可用区。例如：3节点集群不支持2个节点部署在同一个区。
- 不支持4.2及以上版本。
- 不支持只读灾备实例。
- 不能选择基础网络。
   */
  AvailabilityZoneList?: Array<string>
  /**
   * Mongos CPU 核数。购买分片集群时，必须填写。

   */
  MongosCpu?: number
  /**
   * Mongos 内存大小。购买分片集群时，必须填写。


   */
  MongosMemory?: number
  /**
   * Mongos 数量。购买分片集群时，必须填写。


   */
  MongosNodeNum?: number
  /**
   * 只读节点数量，最大不超过7个。
   */
  ReadonlyNodeNum?: number
  /**
   * 指只读节点所属可用区。跨可用区部署实例，参数**ReadonlyNodeNum**不为**0**时，必须配置该参数。
   */
  ReadonlyNodeAvailabilityZoneList?: Array<string>
  /**
   * Hidden节点所属可用区。跨可用区部署实例，必须配置该参数。
   */
  HiddenZone?: string
}

/**
 * EnableTransparentDataEncryption返回参数结构体
 */
export interface EnableTransparentDataEncryptionResponse {
  /**
   * 开启透明加密的异步流程id，用于查询流程状态。
   */
  FlowId?: number
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * SetBackupRules请求参数结构体
 */
export interface SetBackupRulesRequest {
  /**
   * 实例 ID，例如：cmgo-p8vn****。请登录 [MongoDB 控制台](https://console.cloud.tencent.com/mongodb)在实例列表复制实例 ID。
   */
  InstanceId: string
  /**
   * 设置自动备份方式。- 0：逻辑备份。- 1：物理备份。-3：快照备份(仅云盘版支持)。
   */
  BackupMethod: number
  /**
   * 设置自动备份开始时间。取值范围为：[0,23]，例如：该参数设置为2，表示02:00开始备份。
   */
  BackupTime: number
  /**
   * 设置自动备份发生错误时，是否发送失败告警。
- true：发送。
- false：不发送。
   */
  Notify?: boolean
  /**
   * 指定备份数据保存天数。默认为 7 天，支持设置为7、30、90、180、365。
   */
  BackupRetentionPeriod?: number
}

/**
 * AssignProject请求参数结构体
 */
export interface AssignProjectRequest {
  /**
   * 实例ID列表，格式如：cmgo-p8vnipr5。与云数据库控制台页面中显示的实例ID相同
   */
  InstanceIds: Array<string>
  /**
   * 项目ID，用户已创建项目的唯一ID,非自定义
   */
  ProjectId: number
}

/**
 * ModifyInstanceParams请求参数结构体
 */
export interface ModifyInstanceParamsRequest {
  /**
   * 指定实例 ID。例如：cmgo-p8vn****。请登录 [MongoDB 控制台](https://console.cloud.tencent.com/mongodb)在实例列表复制实例 ID。

   */
  InstanceId: string
  /**
   * 指定需修改的参数名及值。当前所支持的参数名及对应取值范围，请通过 [DescribeInstanceParams ](https://cloud.tencent.com/document/product/240/65903)获取。
   */
  InstanceParams: Array<ModifyMongoDBParamType>
  /**
   * 操作类型，包括：
- IMMEDIATELY：立即调整。
- DELAY：延迟调整。可选字段，不配置该参数则默认为立即调整。
   */
  ModifyType?: string
}

/**
 * CreateBackupDownloadTask返回参数结构体
 */
export interface CreateBackupDownloadTaskResponse {
  /**
   * 下载任务状态
   */
  Tasks: Array<BackupDownloadTaskStatus>
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * 实例规格信息
 */
export interface SpecificationInfo {
  /**
   * 地域信息
   */
  Region: string
  /**
   * 可用区信息
   */
  Zone: string
  /**
   * 售卖规格信息
   */
  SpecItems: Array<SpecItem>
  /**
   * 是否支持跨可用区部署 1-支持，0-不支持
   */
  SupportMultiAZ: number
}

/**
 * DescribeSlowLogPatterns请求参数结构体
 */
export interface DescribeSlowLogPatternsRequest {
  /**
   * 实例ID，格式如：cmgo-p8vnipr5。与云数据库控制台页面中显示的实例ID相同
   */
  InstanceId: string
  /**
   * 慢日志起始时间，格式：yyyy-mm-dd hh:mm:ss，如：2019-06-01 10:00:00。查询起止时间间隔不能超过24小时，只允许查询最近7天内慢日志。
   */
  StartTime: string
  /**
   * 慢日志终止时间，格式：yyyy-mm-dd hh:mm:ss，如：2019-06-02 12:00:00。查询起止时间间隔不能超过24小时，只允许查询最近7天内慢日志。
   */
  EndTime: string
  /**
   * 慢日志执行时间阈值，返回执行时间超过该阈值的慢日志，单位为毫秒(ms)，最小为100毫秒。
   */
  SlowMS: number
  /**
   * 偏移量，最小值为0，最大值为10000，默认值为0。
   */
  Offset?: number
  /**
   * 分页大小，最小值为1，最大值为100，默认值为20。
   */
  Limit?: number
  /**
   * 慢日志返回格式，可设置为json，不传默认返回原生慢日志格式。
   */
  Format?: string
}

/**
 * 按key回档，源数据所在的表
 */
export interface FlashbackCollection {
  /**
   * 按key回档指定的集合名
   */
  CollectionName: string
  /**
   * 按key回档到的目标集合名
   */
  TargetResultCollectionName: string
  /**
   * 上传到cos的文件的value所对应的key值
   */
  FilterKey: string
  /**
   * 用于按key回档过滤的键值对
   */
  KeyValues?: Array<FBKeyValue>
}

/**
 * DescribeSpecInfo返回参数结构体
 */
export interface DescribeSpecInfoResponse {
  /**
   * 实例售卖规格信息列表
   */
  SpecInfoList: Array<SpecificationInfo>
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * InquirePriceRenewDBInstances返回参数结构体
 */
export interface InquirePriceRenewDBInstancesResponse {
  /**
   * 价格
   */
  Price: DBInstancePrice
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * 实例标签信息
 */
export interface TagInfo {
  /**
   * 标签键
   */
  TagKey: string
  /**
   * 标签值
   */
  TagValue: string
}

/**
 * DeleteAccountUser返回参数结构体
 */
export interface DeleteAccountUserResponse {
  /**
   * 账户删除任务ID。
   */
  FlowId?: number
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * DescribeDBInstances返回参数结构体
 */
export interface DescribeDBInstancesResponse {
  /**
   * 符合查询条件的实例总数。
   */
  TotalCount?: number
  /**
   * 实例详细信息列表。
   */
  InstanceDetails?: Array<InstanceDetail>
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * OfflineIsolatedDBInstance请求参数结构体
 */
export interface OfflineIsolatedDBInstanceRequest {
  /**
   * 实例ID，格式如：cmgo-p8vnipr5。与云数据库控制台页面中显示的实例ID相同
   */
  InstanceId: string
}

/**
 * KMS密钥信息
 */
export interface KMSInfoDetail {
  /**
   * 主密钥 ID。
注意：此字段可能返回 null，表示取不到有效值。
   */
  KeyId?: string
  /**
   * 主密钥名称。
注意：此字段可能返回 null，表示取不到有效值。
   */
  KeyName?: string
  /**
   * 实例与密钥绑定时间。
注意：此字段可能返回 null，表示取不到有效值。
   */
  CreateTime?: string
  /**
   * 密钥状态。
注意：此字段可能返回 null，表示取不到有效值。
   */
  Status?: string
  /**
   * 密钥用途。
注意：此字段可能返回 null，表示取不到有效值。
   */
  KeyUsage?: string
  /**
   * 密钥来源。
注意：此字段可能返回 null，表示取不到有效值。
   */
  KeyOrigin?: string
}

/**
 * InquirePriceCreateDBInstances请求参数结构体
 */
export interface InquirePriceCreateDBInstancesRequest {
  /**
   * 实例所属区域及可用区信息。格式：ap-guangzhou-2。
   */
  Zone: string
  /**
   * 每个分片的主从节点数量。
取值范围：请通过接口[DescribeSpecInfo](https://cloud.tencent.com/document/product/240/38567)查询，其返回的数据结构SpecItems中的参数MinNodeNum与MaxNodeNum分别对应其最小值与最大值。
   */
  NodeNum: number
  /**
   * 实例内存大小。
- 单位：GB。
- 取值范围：请通过接口[DescribeSpecInfo](https://cloud.tencent.com/document/product/240/38567)查询，其返回的数据结构SpecItems中的参数CPU与Memory分别对应CPU核数与内存规格。
   */
  Memory: number
  /**
   * 实例硬盘大小。
- 单位：GB。
- 取值范围：请通过接口[DescribeSpecInfo](https://cloud.tencent.com/document/product/240/38567)查询，其返回的数据结构SpecItems中的参数MinStorage与MaxStorage分别对应其最小磁盘规格与最大磁盘规格。
   */
  Volume: number
  /**
   * 实例版本信息。具体支持的版本，请通过接口[DescribeSpecInfo](https://cloud.tencent.com/document/product/240/38567)查询，其返回的数据结构SpecItems中的参数MongoVersionCode为实例所支持的版本信息。版本信息与版本号对应关系如下：
- MONGO_3_WT：MongoDB 3.2 WiredTiger存储引擎版本。
- MONGO_3_ROCKS：MongoDB 3.2 RocksDB存储引擎版本。
- MONGO_36_WT：MongoDB 3.6 WiredTiger存储引擎版本。
- MONGO_40_WT：MongoDB 4.0 WiredTiger存储引擎版本。
- MONGO_42_WT：MongoDB 4.2 WiredTiger存储引擎版本。
- MONGO_44_WT：MongoDB 4.4 WiredTiger存储引擎版本。
- MONGO_50_WT：MongoDB 5.0 WiredTiger存储引擎版本。
   */
  MongoVersion: string
  /**
   * 机器类型。
- HIO：高IO型。
- HIO10G：高IO万兆型。
   */
  MachineCode: string
  /**
   * 实例数量，取值范围为[1,10]。
   */
  GoodsNum: number
  /**
   * 实例类型。
- REPLSET：副本集。
- SHARD：分片集群。
- STANDALONE：单节点。
   */
  ClusterType: string
  /**
   * 副本集个数。
- 创建副本集实例时，该参数固定设置为1。
- 创建分片集群时，指分片数量，请通过接口[DescribeSpecInfo](https://cloud.tencent.com/document/product/240/38567)查询，其返回的数据结构SpecItems中的参数MinReplicateSetNum与MaxReplicateSetNum分别对应其最小值与最大值。
- 若为单节点实例，该参数固定设置为0。
   */
  ReplicateSetNum: number
  /**
   * - 选择包年包月计费模式，即 <b>InstanceChargeType </b>设定为<b>PREPAID</b>时，需设定购买实例的时长。该参数取值可选：[1,2,3,4,5,6,7,8,9,10,11,12,24,36]；单位：月。
-选择按量计费，即 <b>InstanceChargeType</b> 设定为 **POSTPAID_BY_HOUR** 时，该参数仅可配置为 1。
   */
  Period?: number
  /**
   * 实例付费方式。
- PREPAID：包年包月计费。
- POSTPAID_BY_HOUR：按量计费。
   */
  InstanceChargeType?: string
  /**
   * 分片实例询价必填参数，指 Mongos CPU核数，取值范围为[1,16]。
   */
  MongosCpu?: number
  /**
   * 分片实例询价必填参数，指 Mongos 内存，取值范围为[2,32]，单位：GB。
   */
  MongosMemory?: number
  /**
   * 分片实例询价必填参数，指 Mongos 个数，取值范围为[3,32]。
   */
  MongosNum?: number
  /**
   * 分片实例询价必填参数，指 ConfigServer CPU核数，取值为1，单位：GB。
   */
  ConfigServerCpu?: number
  /**
   * 分片实例询价必填参数，指 ConfigServer 内存大小，取值为2，单位：GB。
   */
  ConfigServerMemory?: number
  /**
   * 分片实例询价必填参数，指 ConfigServer 磁盘大小，取值为 20，单位：GB。
   */
  ConfigServerVolume?: number
}

/**
 * DescribeInstanceParams返回参数结构体
 */
export interface DescribeInstanceParamsResponse {
  /**
   * 参数值为枚举类型的参数集合。
   */
  InstanceEnumParam?: Array<InstanceEnumParam>
  /**
   * 参数值为 Integer 类型的参数集合。
   */
  InstanceIntegerParam?: Array<InstanceIntegerParam>
  /**
   * 参数值为 Text 类型的参数集合。
   */
  InstanceTextParam?: Array<InstanceTextParam>
  /**
   * 参数值为混合类型的参数集合。
   */
  InstanceMultiParam?: Array<InstanceMultiParam>
  /**
   * 当前实例支持修改的参数数量。
   */
  TotalCount?: number
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * DescribeTransparentDataEncryptionStatus请求参数结构体
 */
export interface DescribeTransparentDataEncryptionStatusRequest {
  /**
   * 指定实例 ID。例如：cmgo-p8vn****。请登录 [MongoDB 控制台](https://console.cloud.tencent.com/mongodb)在实例列表复制实例 ID。
   */
  InstanceId: string
}

/**
 * 修改实例节点详情
 */
export interface RemoveNodeList {
  /**
   * 需要删除的节点角色。
- SECONDARY：Mongod 节点。
- READONLY：只读节点。
- MONGOS：Mongos 节点。
   */
  Role: string
  /**
   * 要删除的节点 ID。分片集群须指定一组分片要删除的节点名称即可，其余分片对改组对齐。

- 获取方式：登录 [MongoDB控制台](https://console.cloud.tencent.com/)，在**节点管理**页签，可获取**节点 ID**。
- 特别说明：分片集群同一节点上的分片，仅需指定0分片节点 ID 即可。例如：cmgo-6hfk****_0-node-primary。
   */
  NodeName: string
  /**
   * 节点所对应的可用区。
- 单可用区，所有节点在同一可用区。
- 多可用区：当前标准规格是三可用区分布，主从节点不在同一可用区，需注意配置所删除节点对应的可用区，且删除后必须满足任意2个可用区节点数大于第3个可用区原则。
   */
  Zone: string
}

/**
 * SetInstanceMaintenance请求参数结构体
 */
export interface SetInstanceMaintenanceRequest {
  /**
   * 指定实例ID。例如：cmgo-p8vn****。请登录 [MongoDB 控制台](https://console.cloud.tencent.com/mongodb)在实例列表复制实例 ID。

   */
  InstanceId: string
  /**
   * 维护时间窗开始时间。取值范围为"00:00-23:00"的任意整点或半点，如00:00或00:30。
   */
  MaintenanceStart: string
  /**
   * 维护时间窗结束时间。
- 取值范围为"00:00-23:00"的任意整点或半点，维护时间持续时长最小为30分钟，最大为3小时。
- 结束时间务必是基于开始时间向后的时间。
   */
  MaintenanceEnd: string
}

/**
 * 实例详情
 */
export interface InstanceDetail {
  /**
   * 实例ID。
   */
  InstanceId?: string
  /**
   * 实例名称。
   */
  InstanceName?: string
  /**
   * 付费类型，可能的返回值：1-包年包月；0-按量计费
   */
  PayMode?: number
  /**
   * 项目ID。
   */
  ProjectId?: number
  /**
   * 集群类型，可能的返回值：0-副本集实例，1-分片实例。
   */
  ClusterType?: number
  /**
   * 地域信息。
   */
  Region?: string
  /**
   * 可用区信息。
   */
  Zone?: string
  /**
   * 网络类型，可能的返回值：0-基础网络，1-私有网络
   */
  NetType?: number
  /**
   * 私有网络的ID。
   */
  VpcId?: string
  /**
   * 私有网络的子网ID。
   */
  SubnetId?: string
  /**
   * 实例状态，可能的返回值：0-待初始化，1-流程处理中，2-运行中，-2-实例已过期。
   */
  Status?: number
  /**
   * 实例IP。
   */
  Vip?: string
  /**
   * 端口号。
   */
  Vport?: number
  /**
   * 实例创建时间。
   */
  CreateTime?: string
  /**
   * 实例到期时间。
   */
  DeadLine?: string
  /**
   * 实例版本信息。
   */
  MongoVersion?: string
  /**
   * 实例内存规格，单位为MB。
   */
  Memory?: number
  /**
   * 实例磁盘规格，单位为MB。
   */
  Volume?: number
  /**
   * 实例CPU核心数。
   */
  CpuNum?: number
  /**
   * 实例机器类型。
   */
  MachineType?: string
  /**
   * 实例从节点数。
   */
  SecondaryNum?: number
  /**
   * 实例分片数。
   */
  ReplicationSetNum?: number
  /**
   * 实例自动续费标志，可能的返回值：0-手动续费，1-自动续费，2-确认不续费。
   */
  AutoRenewFlag?: number
  /**
   * 已用容量，单位MB。
   */
  UsedVolume?: number
  /**
   * 维护窗口起始时间。
   */
  MaintenanceStart?: string
  /**
   * 维护窗口结束时间。
   */
  MaintenanceEnd?: string
  /**
   * 分片信息。
   */
  ReplicaSets?: Array<ShardInfo>
  /**
   * 只读实例信息。
   */
  ReadonlyInstances?: Array<DBInstanceInfo>
  /**
   * 灾备实例信息。
   */
  StandbyInstances?: Array<DBInstanceInfo>
  /**
   * 临时实例信息。
   */
  CloneInstances?: Array<DBInstanceInfo>
  /**
   * 关联实例信息，对于正式实例，该字段表示它的临时实例信息；对于临时实例，则表示它的正式实例信息;如果为只读/灾备实例,则表示他的主实例信息。
   */
  RelatedInstance?: DBInstanceInfo
  /**
   * 实例标签信息集合。
   */
  Tags?: Array<TagInfo>
  /**
   * 实例版本标记。
   */
  InstanceVer?: number
  /**
   * 实例版本标记。
   */
  ClusterVer?: number
  /**
   * 协议信息，可能的返回值：1-mongodb，2-dynamodb。
   */
  Protocol?: number
  /**
   * 实例类型，可能的返回值，1-正式实例，2-临时实例，3-只读实例，4-灾备实例
   */
  InstanceType?: number
  /**
   * 实例状态描述
   */
  InstanceStatusDesc?: string
  /**
   * 实例对应的物理实例id，回档并替换过的实例有不同的InstanceId和RealInstanceId，从barad获取监控数据等场景下需要用物理id获取
   */
  RealInstanceId?: string
  /**
   * 实例当前可用区信息。
注意：此字段可能返回 null，表示取不到有效值。
   */
  ZoneList?: Array<string>
  /**
   * mongos节点个数。
注意：此字段可能返回 null，表示取不到有效值。
   */
  MongosNodeNum?: number
  /**
   * mongos节点内存。
注意：此字段可能返回 null，表示取不到有效值。
   */
  MongosMemory?: number
  /**
   * mongos节点CPU核数。
注意：此字段可能返回 null，表示取不到有效值。
   */
  MongosCpuNum?: number
  /**
   * Config Server节点个数。
注意：此字段可能返回 null，表示取不到有效值。
   */
  ConfigServerNodeNum?: number
  /**
   * Config Server节点内存。
注意：此字段可能返回 null，表示取不到有效值。
   */
  ConfigServerMemory?: number
  /**
   * Config Server节点磁盘大小。
注意：此字段可能返回 null，表示取不到有效值。
   */
  ConfigServerVolume?: number
  /**
   * Config Server节点CPU核数。
注意：此字段可能返回 null，表示取不到有效值。
   */
  ConfigServerCpuNum?: number
  /**
   * readonly节点个数。
注意：此字段可能返回 null，表示取不到有效值。
   */
  ReadonlyNodeNum?: number
}

/**
 * ModifyDBInstanceSpec返回参数结构体
 */
export interface ModifyDBInstanceSpecResponse {
  /**
   * 订单 ID。
   */
  DealId?: string
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * 描述了实例的计费模式
 */
export interface InstanceChargePrepaid {
  /**
   * 购买实例的时长，单位：月。取值范围：1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 24, 36。默认为1。
（InquirePriceRenewDBInstances，RenewDBInstances调用时必填）
   */
  Period?: number
  /**
   * 自动续费标识。取值范围：
NOTIFY_AND_AUTO_RENEW：通知过期且自动续费
NOTIFY_AND_MANUAL_RENEW：通知过期不自动续费
DISABLE_NOTIFY_AND_MANUAL_RENEW：不通知过期不自动续费

默认取值：NOTIFY_AND_MANUAL_RENEW。若该参数指定为NOTIFY_AND_AUTO_RENEW，在账户余额充足的情况下，实例到期后将按月自动续费。
（InquirePriceRenewDBInstances，RenewDBInstances调用时必填）
   */
  RenewFlag?: string
}

/**
 * RenewDBInstances请求参数结构体
 */
export interface RenewDBInstancesRequest {
  /**
   * 一个或多个待操作的实例ID。可通过DescribeInstances接口返回值中的InstanceId获取。每次请求批量实例的上限为100。
   */
  InstanceIds: Array<string>
  /**
   * 预付费模式，即包年包月相关参数设置。通过该参数可以指定包年包月实例的续费时长、是否设置自动续费等属性。包年包月实例该参数为必传参数。
   */
  InstanceChargePrepaid: InstanceChargePrepaid
}
