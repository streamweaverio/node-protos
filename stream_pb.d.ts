// package: broker
// file: stream.proto

/* tslint:disable */
/* eslint-disable */

import * as jspb from "google-protobuf";

export class StreamRetentionOptions extends jspb.Message { 
    getMaxAge(): string;
    setMaxAge(value: string): StreamRetentionOptions;
    getMaxSize(): number;
    setMaxSize(value: number): StreamRetentionOptions;
    getRetentionPolicy(): StreamRetentionPolicy;
    setRetentionPolicy(value: StreamRetentionPolicy): StreamRetentionOptions;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): StreamRetentionOptions.AsObject;
    static toObject(includeInstance: boolean, msg: StreamRetentionOptions): StreamRetentionOptions.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: StreamRetentionOptions, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): StreamRetentionOptions;
    static deserializeBinaryFromReader(message: StreamRetentionOptions, reader: jspb.BinaryReader): StreamRetentionOptions;
}

export namespace StreamRetentionOptions {
    export type AsObject = {
        maxAge: string,
        maxSize: number,
        retentionPolicy: StreamRetentionPolicy,
    }
}

export class Stream extends jspb.Message { 
    getStreamName(): string;
    setStreamName(value: string): Stream;

    hasRetentionOptions(): boolean;
    clearRetentionOptions(): void;
    getRetentionOptions(): StreamRetentionOptions | undefined;
    setRetentionOptions(value?: StreamRetentionOptions): Stream;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): Stream.AsObject;
    static toObject(includeInstance: boolean, msg: Stream): Stream.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: Stream, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): Stream;
    static deserializeBinaryFromReader(message: Stream, reader: jspb.BinaryReader): Stream;
}

export namespace Stream {
    export type AsObject = {
        streamName: string,
        retentionOptions?: StreamRetentionOptions.AsObject,
    }
}

export class CreateStreamRequest extends jspb.Message { 
    getStreamName(): string;
    setStreamName(value: string): CreateStreamRequest;

    hasRetentionOptions(): boolean;
    clearRetentionOptions(): void;
    getRetentionOptions(): StreamRetentionOptions | undefined;
    setRetentionOptions(value?: StreamRetentionOptions): CreateStreamRequest;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): CreateStreamRequest.AsObject;
    static toObject(includeInstance: boolean, msg: CreateStreamRequest): CreateStreamRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: CreateStreamRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): CreateStreamRequest;
    static deserializeBinaryFromReader(message: CreateStreamRequest, reader: jspb.BinaryReader): CreateStreamRequest;
}

export namespace CreateStreamRequest {
    export type AsObject = {
        streamName: string,
        retentionOptions?: StreamRetentionOptions.AsObject,
    }
}

export class CreateStreamResponse extends jspb.Message { 
    getStatus(): string;
    setStatus(value: string): CreateStreamResponse;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): CreateStreamResponse.AsObject;
    static toObject(includeInstance: boolean, msg: CreateStreamResponse): CreateStreamResponse.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: CreateStreamResponse, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): CreateStreamResponse;
    static deserializeBinaryFromReader(message: CreateStreamResponse, reader: jspb.BinaryReader): CreateStreamResponse;
}

export namespace CreateStreamResponse {
    export type AsObject = {
        status: string,
    }
}

export class GetStreamRequest extends jspb.Message { 
    getStreamName(): string;
    setStreamName(value: string): GetStreamRequest;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): GetStreamRequest.AsObject;
    static toObject(includeInstance: boolean, msg: GetStreamRequest): GetStreamRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: GetStreamRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): GetStreamRequest;
    static deserializeBinaryFromReader(message: GetStreamRequest, reader: jspb.BinaryReader): GetStreamRequest;
}

export namespace GetStreamRequest {
    export type AsObject = {
        streamName: string,
    }
}

export class GetStreamResponse extends jspb.Message { 
    getName(): string;
    setName(value: string): GetStreamResponse;

    hasRetentionOptions(): boolean;
    clearRetentionOptions(): void;
    getRetentionOptions(): StreamRetentionOptions | undefined;
    setRetentionOptions(value?: StreamRetentionOptions): GetStreamResponse;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): GetStreamResponse.AsObject;
    static toObject(includeInstance: boolean, msg: GetStreamResponse): GetStreamResponse.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: GetStreamResponse, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): GetStreamResponse;
    static deserializeBinaryFromReader(message: GetStreamResponse, reader: jspb.BinaryReader): GetStreamResponse;
}

export namespace GetStreamResponse {
    export type AsObject = {
        name: string,
        retentionOptions?: StreamRetentionOptions.AsObject,
    }
}

export enum StreamRetentionPolicy {
    TIME_RETENTION_POLICY = 0,
    SIZE_RETENTION_POLICY = 1,
}
