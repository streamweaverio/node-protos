// package: broker
// file: broker.proto

/* tslint:disable */
/* eslint-disable */

import * as grpc from "@grpc/grpc-js";
import * as broker_pb from "./broker_pb";
import * as stream_pb from "./stream_pb";
import * as consumer_group_pb from "./consumer-group_pb";

interface IStreamWeaverBrokerService extends grpc.ServiceDefinition<grpc.UntypedServiceImplementation> {
    createStream: IStreamWeaverBrokerService_ICreateStream;
    getStream: IStreamWeaverBrokerService_IGetStream;
    createConsumerGroup: IStreamWeaverBrokerService_ICreateConsumerGroup;
    listConsumerGroups: IStreamWeaverBrokerService_IListConsumerGroups;
}

interface IStreamWeaverBrokerService_ICreateStream extends grpc.MethodDefinition<stream_pb.CreateStreamRequest, stream_pb.CreateStreamResponse> {
    path: "/broker.StreamWeaverBroker/CreateStream";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<stream_pb.CreateStreamRequest>;
    requestDeserialize: grpc.deserialize<stream_pb.CreateStreamRequest>;
    responseSerialize: grpc.serialize<stream_pb.CreateStreamResponse>;
    responseDeserialize: grpc.deserialize<stream_pb.CreateStreamResponse>;
}
interface IStreamWeaverBrokerService_IGetStream extends grpc.MethodDefinition<stream_pb.GetStreamRequest, stream_pb.GetStreamResponse> {
    path: "/broker.StreamWeaverBroker/GetStream";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<stream_pb.GetStreamRequest>;
    requestDeserialize: grpc.deserialize<stream_pb.GetStreamRequest>;
    responseSerialize: grpc.serialize<stream_pb.GetStreamResponse>;
    responseDeserialize: grpc.deserialize<stream_pb.GetStreamResponse>;
}
interface IStreamWeaverBrokerService_ICreateConsumerGroup extends grpc.MethodDefinition<consumer_group_pb.CreateConsumerGroupRequest, consumer_group_pb.CreateConsumerGroupResponse> {
    path: "/broker.StreamWeaverBroker/CreateConsumerGroup";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<consumer_group_pb.CreateConsumerGroupRequest>;
    requestDeserialize: grpc.deserialize<consumer_group_pb.CreateConsumerGroupRequest>;
    responseSerialize: grpc.serialize<consumer_group_pb.CreateConsumerGroupResponse>;
    responseDeserialize: grpc.deserialize<consumer_group_pb.CreateConsumerGroupResponse>;
}
interface IStreamWeaverBrokerService_IListConsumerGroups extends grpc.MethodDefinition<consumer_group_pb.ListConsumerGroupsRequest, consumer_group_pb.ListConsumerGroupsResponse> {
    path: "/broker.StreamWeaverBroker/ListConsumerGroups";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<consumer_group_pb.ListConsumerGroupsRequest>;
    requestDeserialize: grpc.deserialize<consumer_group_pb.ListConsumerGroupsRequest>;
    responseSerialize: grpc.serialize<consumer_group_pb.ListConsumerGroupsResponse>;
    responseDeserialize: grpc.deserialize<consumer_group_pb.ListConsumerGroupsResponse>;
}

export const StreamWeaverBrokerService: IStreamWeaverBrokerService;

export interface IStreamWeaverBrokerServer extends grpc.UntypedServiceImplementation {
    createStream: grpc.handleUnaryCall<stream_pb.CreateStreamRequest, stream_pb.CreateStreamResponse>;
    getStream: grpc.handleUnaryCall<stream_pb.GetStreamRequest, stream_pb.GetStreamResponse>;
    createConsumerGroup: grpc.handleUnaryCall<consumer_group_pb.CreateConsumerGroupRequest, consumer_group_pb.CreateConsumerGroupResponse>;
    listConsumerGroups: grpc.handleUnaryCall<consumer_group_pb.ListConsumerGroupsRequest, consumer_group_pb.ListConsumerGroupsResponse>;
}

export interface IStreamWeaverBrokerClient {
    createStream(request: stream_pb.CreateStreamRequest, callback: (error: grpc.ServiceError | null, response: stream_pb.CreateStreamResponse) => void): grpc.ClientUnaryCall;
    createStream(request: stream_pb.CreateStreamRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: stream_pb.CreateStreamResponse) => void): grpc.ClientUnaryCall;
    createStream(request: stream_pb.CreateStreamRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: stream_pb.CreateStreamResponse) => void): grpc.ClientUnaryCall;
    getStream(request: stream_pb.GetStreamRequest, callback: (error: grpc.ServiceError | null, response: stream_pb.GetStreamResponse) => void): grpc.ClientUnaryCall;
    getStream(request: stream_pb.GetStreamRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: stream_pb.GetStreamResponse) => void): grpc.ClientUnaryCall;
    getStream(request: stream_pb.GetStreamRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: stream_pb.GetStreamResponse) => void): grpc.ClientUnaryCall;
    createConsumerGroup(request: consumer_group_pb.CreateConsumerGroupRequest, callback: (error: grpc.ServiceError | null, response: consumer_group_pb.CreateConsumerGroupResponse) => void): grpc.ClientUnaryCall;
    createConsumerGroup(request: consumer_group_pb.CreateConsumerGroupRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: consumer_group_pb.CreateConsumerGroupResponse) => void): grpc.ClientUnaryCall;
    createConsumerGroup(request: consumer_group_pb.CreateConsumerGroupRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: consumer_group_pb.CreateConsumerGroupResponse) => void): grpc.ClientUnaryCall;
    listConsumerGroups(request: consumer_group_pb.ListConsumerGroupsRequest, callback: (error: grpc.ServiceError | null, response: consumer_group_pb.ListConsumerGroupsResponse) => void): grpc.ClientUnaryCall;
    listConsumerGroups(request: consumer_group_pb.ListConsumerGroupsRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: consumer_group_pb.ListConsumerGroupsResponse) => void): grpc.ClientUnaryCall;
    listConsumerGroups(request: consumer_group_pb.ListConsumerGroupsRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: consumer_group_pb.ListConsumerGroupsResponse) => void): grpc.ClientUnaryCall;
}

export class StreamWeaverBrokerClient extends grpc.Client implements IStreamWeaverBrokerClient {
    constructor(address: string, credentials: grpc.ChannelCredentials, options?: Partial<grpc.ClientOptions>);
    public createStream(request: stream_pb.CreateStreamRequest, callback: (error: grpc.ServiceError | null, response: stream_pb.CreateStreamResponse) => void): grpc.ClientUnaryCall;
    public createStream(request: stream_pb.CreateStreamRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: stream_pb.CreateStreamResponse) => void): grpc.ClientUnaryCall;
    public createStream(request: stream_pb.CreateStreamRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: stream_pb.CreateStreamResponse) => void): grpc.ClientUnaryCall;
    public getStream(request: stream_pb.GetStreamRequest, callback: (error: grpc.ServiceError | null, response: stream_pb.GetStreamResponse) => void): grpc.ClientUnaryCall;
    public getStream(request: stream_pb.GetStreamRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: stream_pb.GetStreamResponse) => void): grpc.ClientUnaryCall;
    public getStream(request: stream_pb.GetStreamRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: stream_pb.GetStreamResponse) => void): grpc.ClientUnaryCall;
    public createConsumerGroup(request: consumer_group_pb.CreateConsumerGroupRequest, callback: (error: grpc.ServiceError | null, response: consumer_group_pb.CreateConsumerGroupResponse) => void): grpc.ClientUnaryCall;
    public createConsumerGroup(request: consumer_group_pb.CreateConsumerGroupRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: consumer_group_pb.CreateConsumerGroupResponse) => void): grpc.ClientUnaryCall;
    public createConsumerGroup(request: consumer_group_pb.CreateConsumerGroupRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: consumer_group_pb.CreateConsumerGroupResponse) => void): grpc.ClientUnaryCall;
    public listConsumerGroups(request: consumer_group_pb.ListConsumerGroupsRequest, callback: (error: grpc.ServiceError | null, response: consumer_group_pb.ListConsumerGroupsResponse) => void): grpc.ClientUnaryCall;
    public listConsumerGroups(request: consumer_group_pb.ListConsumerGroupsRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: consumer_group_pb.ListConsumerGroupsResponse) => void): grpc.ClientUnaryCall;
    public listConsumerGroups(request: consumer_group_pb.ListConsumerGroupsRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: consumer_group_pb.ListConsumerGroupsResponse) => void): grpc.ClientUnaryCall;
}
