// package: broker
// file: consumer-group.proto

/* tslint:disable */
/* eslint-disable */

import * as jspb from "google-protobuf";

export class CreateConsumerGroupRequest extends jspb.Message { 
    getName(): string;
    setName(value: string): CreateConsumerGroupRequest;
    getStreamName(): string;
    setStreamName(value: string): CreateConsumerGroupRequest;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): CreateConsumerGroupRequest.AsObject;
    static toObject(includeInstance: boolean, msg: CreateConsumerGroupRequest): CreateConsumerGroupRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: CreateConsumerGroupRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): CreateConsumerGroupRequest;
    static deserializeBinaryFromReader(message: CreateConsumerGroupRequest, reader: jspb.BinaryReader): CreateConsumerGroupRequest;
}

export namespace CreateConsumerGroupRequest {
    export type AsObject = {
        name: string,
        streamName: string,
    }
}

export class AddConsumerRequest extends jspb.Message { 
    getConsumerGroupName(): string;
    setConsumerGroupName(value: string): AddConsumerRequest;
    getConsumerName(): string;
    setConsumerName(value: string): AddConsumerRequest;
    getStreamName(): string;
    setStreamName(value: string): AddConsumerRequest;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): AddConsumerRequest.AsObject;
    static toObject(includeInstance: boolean, msg: AddConsumerRequest): AddConsumerRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: AddConsumerRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): AddConsumerRequest;
    static deserializeBinaryFromReader(message: AddConsumerRequest, reader: jspb.BinaryReader): AddConsumerRequest;
}

export namespace AddConsumerRequest {
    export type AsObject = {
        consumerGroupName: string,
        consumerName: string,
        streamName: string,
    }
}

export class ListConsumerGroupsRequest extends jspb.Message { 
    getStreamName(): string;
    setStreamName(value: string): ListConsumerGroupsRequest;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): ListConsumerGroupsRequest.AsObject;
    static toObject(includeInstance: boolean, msg: ListConsumerGroupsRequest): ListConsumerGroupsRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: ListConsumerGroupsRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): ListConsumerGroupsRequest;
    static deserializeBinaryFromReader(message: ListConsumerGroupsRequest, reader: jspb.BinaryReader): ListConsumerGroupsRequest;
}

export namespace ListConsumerGroupsRequest {
    export type AsObject = {
        streamName: string,
    }
}

export class CreateConsumerGroupResponse extends jspb.Message { 

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): CreateConsumerGroupResponse.AsObject;
    static toObject(includeInstance: boolean, msg: CreateConsumerGroupResponse): CreateConsumerGroupResponse.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: CreateConsumerGroupResponse, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): CreateConsumerGroupResponse;
    static deserializeBinaryFromReader(message: CreateConsumerGroupResponse, reader: jspb.BinaryReader): CreateConsumerGroupResponse;
}

export namespace CreateConsumerGroupResponse {
    export type AsObject = {
    }
}

export class AddConsumerResponse extends jspb.Message { 
    getStatus(): string;
    setStatus(value: string): AddConsumerResponse;
    getErrorMessage(): string;
    setErrorMessage(value: string): AddConsumerResponse;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): AddConsumerResponse.AsObject;
    static toObject(includeInstance: boolean, msg: AddConsumerResponse): AddConsumerResponse.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: AddConsumerResponse, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): AddConsumerResponse;
    static deserializeBinaryFromReader(message: AddConsumerResponse, reader: jspb.BinaryReader): AddConsumerResponse;
}

export namespace AddConsumerResponse {
    export type AsObject = {
        status: string,
        errorMessage: string,
    }
}

export class ListConsumerGroupsResponse extends jspb.Message { 

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): ListConsumerGroupsResponse.AsObject;
    static toObject(includeInstance: boolean, msg: ListConsumerGroupsResponse): ListConsumerGroupsResponse.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: ListConsumerGroupsResponse, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): ListConsumerGroupsResponse;
    static deserializeBinaryFromReader(message: ListConsumerGroupsResponse, reader: jspb.BinaryReader): ListConsumerGroupsResponse;
}

export namespace ListConsumerGroupsResponse {
    export type AsObject = {
    }
}
