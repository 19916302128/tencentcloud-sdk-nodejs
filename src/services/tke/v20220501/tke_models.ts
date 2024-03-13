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
 * 运行时配置
 */
export interface RuntimeConfig {
  /**
   * 运行时类型
注意：此字段可能返回 null，表示取不到有效值。
   */
  RuntimeType?: string
  /**
   * 运行时版本
注意：此字段可能返回 null，表示取不到有效值。
   */
  RuntimeVersion?: string
  /**
   * 运行时根目录
注意：此字段可能返回 null，表示取不到有效值。
   */
  RuntimeRootDir?: string
}

/**
 * k8s中标签，一般以数组的方式存在
 */
export interface Label {
  /**
   * map表中的Name
   */
  Name: string
  /**
   * map表中的Value
   */
  Value: string
}

/**
 * DescribeNodePools返回参数结构体
 */
export interface DescribeNodePoolsResponse {
  /**
   * 节点池列表
注意：此字段可能返回 null，表示取不到有效值。
   */
  NodePools?: Array<NodePool>
  /**
   * 资源总数
   */
  TotalCount?: number
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * 集群的实例信息
 */
export interface Instance {
  /**
   * 实例ID
   */
  InstanceId: string
  /**
   * 节点角色, MASTER, WORKER, ETCD, MASTER_ETCD,ALL, 默认为WORKER
   */
  InstanceRole: string
  /**
   * 实例异常(或者处于初始化中)的原因
注意：此字段可能返回 null，表示取不到有效值。
   */
  FailedReason: string
  /**
   * 实例的状态
- initializing创建中
- running 运行中
- failed 异常
   */
  InstanceState: string
  /**
   * 是否不可调度
注意：此字段可能返回 null，表示取不到有效值。
   */
  Unschedulable: boolean
  /**
   * 添加时间
   */
  CreatedTime: string
  /**
   * 节点内网IP
注意：此字段可能返回 null，表示取不到有效值。
   */
  LanIP: string
  /**
   * 资源池ID
注意：此字段可能返回 null，表示取不到有效值。
   */
  NodePoolId: string
  /**
   * 原生节点参数
注意：此字段可能返回 null，表示取不到有效值。
   */
  Native: NativeNodeInfo
  /**
   * 普通节点参数
注意：此字段可能返回 null，表示取不到有效值。
   */
  Regular: RegularNodeInfo
  /**
   * 超级节点参数
注意：此字段可能返回 null，表示取不到有效值。
   */
  Super: SuperNodeInfo
  /**
   * 第三方节点参数
注意：此字段可能返回 null，表示取不到有效值。
   */
  External: ExternalNodeInfo
  /**
   * 节点类型
注意：此字段可能返回 null，表示取不到有效值。
   */
  NodeType: string
}

/**
 * DescribeClusterInstances返回参数结构体
 */
export interface DescribeClusterInstancesResponse {
  /**
   * 集群中实例总数
   */
  TotalCount?: number
  /**
   * 集群中实例列表
   */
  InstanceSet?: Array<Instance>
  /**
   * 错误信息集合
注意：此字段可能返回 null，表示取不到有效值。
   */
  Errors?: Array<string>
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * 自动扩所容的节点
 */
export interface AutoscalingAdded {
  /**
   * 正在加入中的节点数量
   */
  Joining: number
  /**
   * 初始化中的节点数量
   */
  Initializing: number
  /**
   * 正常的节点数量
   */
  Normal: number
  /**
   * 节点总数
   */
  Total: number
}

/**
 * 虚拟节点池信息
 */
export interface SuperNodePoolInfo {
  /**
   * 子网列表
注意：此字段可能返回 null，表示取不到有效值。
   */
  SubnetIds?: Array<string>
  /**
   * 安全组列表
注意：此字段可能返回 null，表示取不到有效值。
   */
  SecurityGroupIds?: Array<string>
}

/**
 * 公网带宽
 */
export interface InternetAccessible {
  /**
   * 带宽
   */
  MaxBandwidthOut: number
  /**
   * 网络计费方式
   */
  ChargeType: string
  /**
   * 带宽包 ID
   */
  BandwidthPackageId?: string
}

/**
 * 普通节点池信息
 */
export interface RegularNodePoolInfo {
  /**
   * LaunchConfigurationId 配置
   */
  LaunchConfigurationId: string
  /**
   * AutoscalingGroupId 分组id
   */
  AutoscalingGroupId: string
  /**
   * NodeCountSummary 节点列表
   */
  NodeCountSummary: NodeCountSummary
  /**
   * 状态信息
注意：此字段可能返回 null，表示取不到有效值。
   */
  AutoscalingGroupStatus: string
  /**
   * 最大节点数量
注意：此字段可能返回 null，表示取不到有效值。
   */
  MaxNodesNum: number
  /**
   * 最小节点数量
注意：此字段可能返回 null，表示取不到有效值。
   */
  MinNodesNum: number
  /**
   * 期望的节点数量
注意：此字段可能返回 null，表示取不到有效值。
   */
  DesiredNodesNum: number
  /**
   * 节点池osName
注意：此字段可能返回 null，表示取不到有效值。
   */
  NodePoolOs: string
  /**
   * 节点配置
注意：此字段可能返回 null，表示取不到有效值。
   */
  InstanceAdvancedSettings?: InstanceAdvancedSettings
}

/**
 * 节点自定义参数
 */
export interface InstanceExtraArgs {
  /**
   * kubelet自定义参数，参数格式为["k1=v1", "k1=v2"]， 例如["root-dir=/var/lib/kubelet","feature-gates=PodShareProcessNamespace=true,DynamicKubeletConfig=true"]
注意：此字段可能返回 null，表示取不到有效值。
   */
  Kubelet?: Array<string>
}

/**
 * 超级节点信息
 */
export interface SuperNodeInfo {
  /**
   * 实例名称
注意：此字段可能返回 null，表示取不到有效值。
   */
  Name: string
  /**
   * 自动续费标识
注意：此字段可能返回 null，表示取不到有效值。
   */
  AutoRenewFlag: number
  /**
   * 资源类型
注意：此字段可能返回 null，表示取不到有效值。
   */
  ResourceType: string
  /**
   * 节点的 CPU 规格，单位：核。
注意：此字段可能返回 null，表示取不到有效值。
   */
  CPU: number
  /**
   * 节点上 Pod 的 CPU总和，单位：核。
注意：此字段可能返回 null，表示取不到有效值。
   */
  UsedCPU: number
  /**
   * 节点的内存规格，单位：Gi。
注意：此字段可能返回 null，表示取不到有效值。
   */
  Memory: number
  /**
   * 节点上 Pod 的内存总和，单位：Gi。
注意：此字段可能返回 null，表示取不到有效值。
   */
  UsedMemory: number
  /**
   * 可用区
注意：此字段可能返回 null，表示取不到有效值。
   */
  Zone: string
  /**
   * VPC 唯一 ID
注意：此字段可能返回 null，表示取不到有效值。
   */
  VpcId: string
  /**
   * 子网唯一 ID
注意：此字段可能返回 null，表示取不到有效值。
   */
  SubnetId: string
  /**
   * 生效时间
注意：此字段可能返回 null，表示取不到有效值。
   */
  ActiveAt: string
  /**
   * 过期时间
注意：此字段可能返回 null，表示取不到有效值。
   */
  ExpireAt: string
  /**
   * 可调度的单 Pod 最大 CPU 规格
注意：此字段可能返回 null，表示取不到有效值。
   */
  MaxCPUScheduledPod: number
  /**
   * 实例属性
注意：此字段可能返回 null，表示取不到有效值。
   */
  InstanceAttribute: string
}

/**
 * k8s中标注，一般以数组的方式存在
 */
export interface Annotation {
  /**
   * map表中的Name
   */
  Name: string
  /**
   * map表中的Value
   */
  Value: string
}

/**
 * DescribeClusterInstances请求参数结构体
 */
export interface DescribeClusterInstancesRequest {
  /**
   * 集群ID
   */
  ClusterId: string
  /**
   * 偏移量，默认为0。关于Offset的更进一步介绍请参考 API [简介](https://cloud.tencent.com/document/api/213/15688)中的相关小节。
   */
  Offset?: number
  /**
   * 返回数量，默认为20，最大值为100。关于Limit的更进一步介绍请参考 API [简介](https://cloud.tencent.com/document/api/213/15688)中的相关小节。
   */
  Limit?: number
  /**
   * 过滤条件列表:
InstanceIds(实例ID),InstanceType(实例类型：Regular，Native，Virtual，External),VagueIpAddress(模糊匹配IP),Labels(k8s节点label),NodePoolNames(节点池名称),VagueInstanceName(模糊匹配节点名),InstanceStates(节点状态),Unschedulable(是否封锁),NodePoolIds(节点池ID)
   */
  Filters?: Array<Filter>
  /**
   * 排序信息
   */
  SortBy?: SortBy
}

/**
 * kubernetes Taint
 */
export interface Taint {
  /**
   * Taint的Key
   */
  Key?: string
  /**
   * Taint的Value
   */
  Value?: string
  /**
   * Taint的Effect
   */
  Effect?: string
}

/**
 * 过滤器
 */
export interface Filter {
  /**
   * 属性名称, 若存在多个Filter时，Filter间的关系为逻辑与（AND）关系。
   */
  Name: string
  /**
   * 属性值, 若同一个Filter存在多个Values，同一Filter下Values间的关系为逻辑或（OR）关系。
   */
  Values: Array<string>
}

/**
 * 普通节点信息
 */
export interface RegularNodeInfo {
  /**
   * 节点配置
注意：此字段可能返回 null，表示取不到有效值。
   */
  InstanceAdvancedSettings: InstanceAdvancedSettings
  /**
   * 自动伸缩组ID
注意：此字段可能返回 null，表示取不到有效值。
   */
  AutoscalingGroupId: string
}

/**
 * 原生节点池信息
 */
export interface NativeNodePoolInfo {
  /**
   * 子网列表
   */
  SubnetIds?: Array<string>
  /**
   * 安全组列表
注意：此字段可能返回 null，表示取不到有效值。
   */
  SecurityGroupIds?: Array<string>
}

/**
 * DescribeNodePools请求参数结构体
 */
export interface DescribeNodePoolsRequest {
  /**
   * 集群 ID
   */
  ClusterId: string
  /**
   * 查询过滤条件：
·  NodePoolsName
    按照【节点池名】进行过滤。
    类型：String
    必选：否

·  NodePoolsId
    按照【节点池id】进行过滤。
    类型：String
    必选：否

·  tags
    按照【标签键值对】进行过滤。
    类型：String
    必选：否

·  tag:tag-key
    按照【标签键值对】进行过滤。
    类型：String
    必选：否
   */
  Filters?: Array<Filter>
  /**
   * 偏移量，默认0
   */
  Offset?: number
  /**
   * 最大输出条数，默认20，最大为100
   */
  Limit?: number
}

/**
 * 节点池信息
 */
export interface NodePool {
  /**
   * 集群 ID
   */
  ClusterId?: string
  /**
   * 节点池 ID
   */
  NodePoolId?: string
  /**
   * 节点污点
注意：此字段可能返回 null，表示取不到有效值。
   */
  Taints?: Array<Taint>
  /**
   * 是否开启删除保护
注意：此字段可能返回 null，表示取不到有效值。
   */
  DeletionProtection?: boolean
  /**
   * 节点池类型
   */
  Type?: string
  /**
   * 节点  Labels
注意：此字段可能返回 null，表示取不到有效值。
   */
  Labels?: Array<Label>
  /**
   * 节点池状态
   */
  LifeState?: string
  /**
   * 创建时间
   */
  CreatedAt?: string
  /**
   * 节点池名称
   */
  Name?: string
  /**
   * 原生节点池参数
注意：此字段可能返回 null，表示取不到有效值。
   */
  Native?: NativeNodePoolInfo
  /**
   * 节点 Annotation 列表
注意：此字段可能返回 null，表示取不到有效值。
   */
  Annotations?: Array<Annotation>
  /**
   * 超级节点池参数，在Type等于Super该字段才有值
注意：此字段可能返回 null，表示取不到有效值。
   */
  Super?: SuperNodePoolInfo
  /**
   * 普通节点池参数，在Type等于Regular该字段才有值
注意：此字段可能返回 null，表示取不到有效值。
   */
  Regular?: RegularNodePoolInfo
  /**
   * 第三方节点池参数，在Type等于External该字段才有值
注意：此字段可能返回 null，表示取不到有效值。
   */
  External?: ExternalNodePoolInfo
}

/**
 * 描述了k8s集群相关配置与信息。
 */
export interface InstanceAdvancedSettings {
  /**
   * 该节点属于podCIDR大小自定义模式时，可指定节点上运行的pod数量上限
注意：此字段可能返回 null，表示取不到有效值。
   */
  DesiredPodNumber: number
  /**
   * base64 编码的用户脚本，在初始化节点之前执行，目前只对添加已有节点生效
注意：此字段可能返回 null，表示取不到有效值。
   */
  PreStartUserScript: string
  /**
   * 运行时描述
注意：此字段可能返回 null，表示取不到有效值。
   */
  RuntimeConfig?: RuntimeConfig
  /**
   * base64 编码的用户脚本, 此脚本会在 k8s 组件运行后执行, 需要用户保证脚本的可重入及重试逻辑, 脚本及其生成的日志文件可在节点的 /data/ccs_userscript/ 路径查看, 如果要求节点需要在进行初始化完成后才可加入调度, 可配合 unschedulable 参数使用, 在 userScript 最后初始化完成后, 添加 kubectl uncordon nodename --kubeconfig=/root/.kube/config 命令使节点加入调度
注意：此字段可能返回 null，表示取不到有效值。
   */
  UserScript?: string
  /**
   * 节点相关的自定义参数信息
注意：此字段可能返回 null，表示取不到有效值。
   */
  ExtraArgs?: InstanceExtraArgs
}

/**
 * 第三方节点
 */
export interface ExternalNodeInfo {
  /**
   * 第三方节点名称
   */
  Name: string
  /**
   * CPU核数，单位：核
注意：此字段可能返回 null，表示取不到有效值。
   */
  CPU?: number
  /**
   * 节点内存容量，单位：`GB`
注意：此字段可能返回 null，表示取不到有效值。
   */
  Memory?: number
  /**
   * 第三方节点kubelet版本信息
注意：此字段可能返回 null，表示取不到有效值。
   */
  K8SVersion?: string
}

/**
 * 节点信息
 */
export interface NativeNodeInfo {
  /**
   * 节点名称
   */
  MachineName?: string
  /**
   * Machine 状态
   */
  MachineState?: string
  /**
   * Machine 所在可用区
   */
  Zone?: string
  /**
   * 节点计费类型。PREPAID：包年包月；POSTPAID_BY_HOUR：按量计费（默认）；
   */
  InstanceChargeType?: string
  /**
   * 创建时间
   */
  CreatedAt?: string
  /**
   * Machine 登录状态
注意：此字段可能返回 null，表示取不到有效值。
   */
  LoginStatus?: string
  /**
   * 是否开启缩容保护
注意：此字段可能返回 null，表示取不到有效值。
   */
  IsProtectedFromScaleIn?: boolean
  /**
   * Machine 名字
注意：此字段可能返回 null，表示取不到有效值。
   */
  DisplayName?: string
  /**
   * CPU核数，单位：核
   */
  CPU?: number
  /**
   * GPU核数，单位：核
注意：此字段可能返回 null，表示取不到有效值。
   */
  GPU?: number
  /**
   * 自动续费标识
   */
  RenewFlag?: string
  /**
   * 节点计费模式（已弃用）
   */
  PayMode?: string
  /**
   * 节点内存容量，单位：`GB`
   */
  Memory?: number
  /**
   * 公网带宽相关信息设置
   */
  InternetAccessible?: InternetAccessible
  /**
   * 机型所属机型族
   */
  InstanceFamily?: string
  /**
   * 节点内网 IP
   */
  LanIp?: string
  /**
   * 机型
   */
  InstanceType?: string
  /**
   * 包年包月节点计费过期时间
注意：此字段可能返回 null，表示取不到有效值。
   */
  ExpiredTime?: string
  /**
   * 安全组列表
注意：此字段可能返回 null，表示取不到有效值。
   */
  SecurityGroupIDs?: Array<string>
  /**
   * VPC 唯一 ID
注意：此字段可能返回 null，表示取不到有效值。
   */
  VpcId?: string
  /**
   * 子网唯一 ID
注意：此字段可能返回 null，表示取不到有效值。
   */
  SubnetId?: string
  /**
   * OS的名称
注意：此字段可能返回 null，表示取不到有效值。
   */
  OsImage?: string
}

/**
 * 节点统计列表
 */
export interface NodeCountSummary {
  /**
   * 手动管理的节点
注意：此字段可能返回 null，表示取不到有效值。
   */
  ManuallyAdded: ManuallyAdded
  /**
   * 自动管理的节点
注意：此字段可能返回 null，表示取不到有效值。
   */
  AutoscalingAdded: AutoscalingAdded
}

/**
 * 手动加入的节点
 */
export interface ManuallyAdded {
  /**
   * 加入中的节点数量
   */
  Joining: number
  /**
   * 初始化中的节点数量
   */
  Initializing: number
  /**
   * 正常的节点数量
   */
  Normal: number
  /**
   * 节点总数
   */
  Total: number
}

/**
 * 排序信息
 */
export interface SortBy {
  /**
   * 排序指标
   */
  FieldName?: string
  /**
   * 排序方式
   */
  OrderType?: string
}

/**
 * 第三方节点池信息
 */
export interface ExternalNodePoolInfo {
  /**
   * 第三方节点Runtime配置
   */
  RuntimeConfig?: RuntimeConfig
  /**
   * 节点数
注意：此字段可能返回 null，表示取不到有效值。
   */
  NodesNum?: number
}