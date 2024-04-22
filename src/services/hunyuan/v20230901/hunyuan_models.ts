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
 * GetTokenCount返回参数结构体
 */
export interface GetTokenCountResponse {
  /**
   * token计数
   */
  TokenCount?: number
  /**
   * 字符计数
   */
  CharacterCount?: number
  /**
   * 切分后的列表
   */
  Tokens?: Array<string>
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * GetEmbedding返回参数结构体
 */
export interface GetEmbeddingResponse {
  /**
   * 返回的 embedding 信息。
   */
  Data?: Array<EmbeddingData>
  /**
   * token 使用计数，按照总token数量收费。
   */
  Usage?: EmbeddingUsage
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * 运行时异常信息。
 */
export interface ErrorMsg {
  /**
   * 错误提示信息。
   */
  Msg?: string
  /**
   * 错误码。
4000 服务内部异常。
4001 请求模型超时。

   */
  Code?: number
}

/**
 * ChatStd返回参数结构体
 */
export interface ChatStdResponse {
  /**
   * Unix 时间戳，单位为秒。
   */
  Created?: number
  /**
   * Token 统计信息。
按照总 Token 数量计费。
   */
  Usage?: Usage
  /**
   * 免责声明。
   */
  Note?: string
  /**
   * 本轮对话的 ID。
   */
  Id?: string
  /**
   * 回复内容。
   */
  Choices?: Array<Choice>
  /**
   * 错误信息。
如果流式返回中服务处理异常，返回该错误信息。
注意：此字段可能返回 null，表示取不到有效值。
   */
  ErrorMsg?: ErrorMsg
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。本接口为流式响应接口，当请求成功时，RequestId 会被放在 HTTP 响应的 Header "X-TC-RequestId" 中。
   */
  RequestId?: string
}

/**
 * GetEmbedding请求参数结构体
 */
export interface GetEmbeddingRequest {
  /**
   * 输入文本。总长度不超过1024 个token, 超过则会截断最后面的内容。
   */
  Input: string
}

/**
 * ChatPro返回参数结构体
 */
export interface ChatProResponse {
  /**
   * Unix 时间戳，单位为秒。
   */
  Created?: number
  /**
   * Token 统计信息。
按照总 Token 数量计费。
   */
  Usage?: Usage
  /**
   * 免责声明。
   */
  Note?: string
  /**
   * 本轮对话的 ID。
   */
  Id?: string
  /**
   * 回复内容。
   */
  Choices?: Array<Choice>
  /**
   * 错误信息。
如果流式返回中服务处理异常，返回该错误信息。
注意：此字段可能返回 null，表示取不到有效值。
   */
  ErrorMsg?: ErrorMsg
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。本接口为流式响应接口，当请求成功时，RequestId 会被放在 HTTP 响应的 Header "X-TC-RequestId" 中。
   */
  RequestId?: string
}

/**
 * 返回的回复, 支持多个
 */
export interface Choice {
  /**
   * 结束标志位，为 stop 则表示尾包。
   */
  FinishReason?: string
  /**
   * 增量返回值，流式调用时使用该字段。
注意：此字段可能返回 null，表示取不到有效值。
   */
  Delta?: Delta
  /**
   * 返回值，非流式调用时使用该字段。
注意：此字段可能返回 null，表示取不到有效值。
   */
  Message?: Message
}

/**
 * ChatPro请求参数结构体
 */
export interface ChatProRequest {
  /**
   * 聊天上下文信息。
说明：
1. 长度最多为 40，按对话时间从旧到新在数组中排列。
2. Message 的 Role 当前可选值：system、user、assistant。其中，system 角色是可选的，如果存在，必须位于列表的最开始。此外，user 和 assistant 需交替出现（一问一答），以 user 提问开始和结束，且 Content 不能为空。Role 的顺序示例：[system（可选） user assistant user assistant user ...]。
3. Messages 中 Content 总长度不超过 16000 Token，超过则会截断最前面的内容，只保留尾部内容。建议不超过 4000 Token。
   */
  Messages: Array<Message>
  /**
   * 说明：
1. 影响输出文本的多样性，取值越大，生成文本的多样性越强。
2. 默认 1.0，取值区间为 [0.0, 1.0]。
3. 非必要不建议使用，不合理的取值会影响效果。
   */
  TopP?: number
  /**
   * 说明：
1. 较高的数值会使输出更加随机，而较低的数值会使其更加集中和确定。
2. 默认 1.0，取值区间为 [0.0，2.0]。
3. 非必要不建议使用，不合理的取值会影响效果。
   */
  Temperature?: number
  /**
   * 流式调用开关。
说明：
1. 未传值时默认为流式调用。
2. 流式调用时以 SSE 协议增量返回结果。
3. 非流式调用时接口响应耗时较长，非必要不建议使用。
4. 非流式调用时只返回一次最终结果，调用方式与普通 HTTP 请求无异。
   */
  Stream?: boolean
  /**
   * 流式输出审核开关。
说明：
1. 当 Stream 字段值为 true 时，该字段有效。
2. 未传值时默认不使用流式输出审核。
3. 如果值为 true，将对输出内容进行分段审核，审核通过的内容流式输出返回。如果出现审核不过，响应中的 finish_reason 值为 sensitive。
4. 如果值为 false，则需要审核完所有输出内容后再返回结果。

注意：
当选择流式输出审核时，可能会出现部分内容已输出，但中间某一段响应中的 finish_reason 值为 sensitive，此时说明安全审核未通过。如果业务场景有实时文字上屏的需求，需要自行撤回已上屏的内容，并建议自定义替换为一条提示语，如 “这个问题我不方便回答，不如我们换个话题试试”，以保障终端体验。
   */
  StreamModeration?: boolean
}

/**
 * embedding 信息，当前不支持批量，所以数组元素数目为1。
 */
export interface EmbeddingData {
  /**
   * embedding 信息。
注意：此字段可能返回 null，表示取不到有效值。
   */
  Embedding?: Array<number>
  /**
   * 下标。
注意：此字段可能返回 null，表示取不到有效值。
   */
  Index?: number
  /**
   * embedding
注意：此字段可能返回 null，表示取不到有效值。
   */
  Object?: string
}

/**
 * Token 使用计数。
 */
export interface EmbeddingUsage {
  /**
   * 输入 Token 数。
   */
  PromptTokens?: number
  /**
   * 总 Token 数。
   */
  TotalTokens?: number
}

/**
 * 返回的内容（流式返回）
 */
export interface Delta {
  /**
   * 角色名称。
   */
  Role?: string
  /**
   * 内容详情。
   */
  Content?: string
}

/**
 * Token 数量
 */
export interface Usage {
  /**
   * 输入 Token 数量。
   */
  PromptTokens?: number
  /**
   * 输出 Token 数量。
   */
  CompletionTokens?: number
  /**
   * 总 Token 数量。
   */
  TotalTokens?: number
}

/**
 * 单条消息
 */
export interface Message {
  /**
   * 角色
   */
  Role: string
  /**
   * 消息内容
   */
  Content: string
}

/**
 * GetTokenCount请求参数结构体
 */
export interface GetTokenCountRequest {
  /**
   * 输入文本
   */
  Prompt: string
}

/**
 * ChatStd请求参数结构体
 */
export interface ChatStdRequest {
  /**
   * 聊天上下文信息。
说明：
1. 长度最多为 40，按对话时间从旧到新在数组中排列。
2. Message 的 Role 当前可选值：user、assistant。其中，user 和 assistant 需交替出现（一问一答），以 user 提问开始和结束，且 Content 不能为空。Role 的顺序示例：[user assistant user assistant user ...]。
3. Messages 中 Content 总长度不超过 16000 Token，超过则会截断最前面的内容，只保留尾部内容。建议不超过 4000 Token。

   */
  Messages: Array<Message>
  /**
   * 说明：
1. 影响输出文本的多样性，取值越大，生成文本的多样性越强。
2. 默认 1.0，取值区间为 [0.0, 1.0]。
3. 非必要不建议使用，不合理的取值会影响效果。
   */
  TopP?: number
  /**
   * 说明：
1. 较高的数值会使输出更加随机，而较低的数值会使其更加集中和确定。
2. 默认 1.0，取值区间为 [0.0，2.0]。
3. 非必要不建议使用，不合理的取值会影响效果。
   */
  Temperature?: number
  /**
   * 流式调用开关。
说明：
1. 未传值时默认为流式调用。
2. 流式调用时以 SSE 协议增量返回结果。
3. 非流式调用时接口响应耗时较长，非必要不建议使用。
4. 非流式调用时只返回一次最终结果，调用方式与普通 HTTP 请求无异。
   */
  Stream?: boolean
  /**
   * 流式输出审核开关。
说明：
1. 当 Stream 字段值为 true 时，该字段有效。
2. 未传值时默认不使用流式输出审核。
3. 如果值为 true，将对输出内容进行分段审核，审核通过的内容流式输出返回。如果出现审核不过，响应中的 finish_reason 值为 sensitive。
4. 如果值为 false，则需要审核完所有输出内容后再返回结果。

注意：
当选择流式输出审核时，可能会出现部分内容已输出，但中间某一段响应中的 finish_reason 值为 sensitive，此时说明安全审核未通过。如果业务场景有实时文字上屏的需求，需要自行撤回已上屏的内容，并建议自定义替换为一条提示语，如 “这个问题我不方便回答，不如我们换个话题试试”，以保障终端体验。
   */
  StreamModeration?: boolean
}
