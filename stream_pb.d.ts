// package: broker
// file: stream.proto

/* tslint:disable */
/* eslint-disable */

import * as jspb from "google-protobuf";

export class Stream extends jspb.Message { 
    getStreamName(): string;
    setStreamName(value: string): Stream;

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
    }
}

export class StreamMessage extends jspb.Message { 
    getMessageContent(): Uint8Array | string;
    getMessageContent_asU8(): Uint8Array;
    getMessageContent_asB64(): string;
    setMessageContent(value: Uint8Array | string): StreamMessage;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): StreamMessage.AsObject;
    static toObject(includeInstance: boolean, msg: StreamMessage): StreamMessage.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: StreamMessage, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): StreamMessage;
    static deserializeBinaryFromReader(message: StreamMessage, reader: jspb.BinaryReader): StreamMessage;
}

export namespace StreamMessage {
    export type AsObject = {
        messageContent: Uint8Array | string,
    }
}

export class CreateStreamRequest extends jspb.Message { 
    getStreamName(): string;
    setStreamName(value: string): CreateStreamRequest;
    getRetentionTimeMs(): number;
    setRetentionTimeMs(value: number): CreateStreamRequest;

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
        retentionTimeMs: number,
    }
}

export class CreateStreamResponse extends jspb.Message { 
    getStatus(): string;
    setStatus(value: string): CreateStreamResponse;
    getErrorMessage(): string;
    setErrorMessage(value: string): CreateStreamResponse;

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
        errorMessage: string,
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
    }
}

export class PublishRequest extends jspb.Message { 
    getStreamName(): string;
    setStreamName(value: string): PublishRequest;
    clearMessagesList(): void;
    getMessagesList(): Array<StreamMessage>;
    setMessagesList(value: Array<StreamMessage>): PublishRequest;
    addMessages(value?: StreamMessage, index?: number): StreamMessage;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): PublishRequest.AsObject;
    static toObject(includeInstance: boolean, msg: PublishRequest): PublishRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: PublishRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): PublishRequest;
    static deserializeBinaryFromReader(message: PublishRequest, reader: jspb.BinaryReader): PublishRequest;
}

export namespace PublishRequest {
    export type AsObject = {
        streamName: string,
        messagesList: Array<StreamMessage.AsObject>,
    }
}

export class PublishResponse extends jspb.Message { 
    getStatus(): string;
    setStatus(value: string): PublishResponse;
    getErrorMessage(): string;
    setErrorMessage(value: string): PublishResponse;
    clearMessageIdsList(): void;
    getMessageIdsList(): Array<string>;
    setMessageIdsList(value: Array<string>): PublishResponse;
    addMessageIds(value: string, index?: number): string;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): PublishResponse.AsObject;
    static toObject(includeInstance: boolean, msg: PublishResponse): PublishResponse.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: PublishResponse, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): PublishResponse;
    static deserializeBinaryFromReader(message: PublishResponse, reader: jspb.BinaryReader): PublishResponse;
}

export namespace PublishResponse {
    export type AsObject = {
        status: string,
        errorMessage: string,
        messageIdsList: Array<string>,
    }
}
