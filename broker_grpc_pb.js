// GENERATED CODE -- DO NOT EDIT!

'use strict';
var grpc = require('@grpc/grpc-js');
var stream_pb = require('./stream_pb.js');
var consumer$group_pb = require('./consumer-group_pb.js');

function serialize_broker_AddConsumerRequest(arg) {
  if (!(arg instanceof consumer$group_pb.AddConsumerRequest)) {
    throw new Error('Expected argument of type broker.AddConsumerRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_broker_AddConsumerRequest(buffer_arg) {
  return consumer$group_pb.AddConsumerRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_broker_AddConsumerResponse(arg) {
  if (!(arg instanceof consumer$group_pb.AddConsumerResponse)) {
    throw new Error('Expected argument of type broker.AddConsumerResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_broker_AddConsumerResponse(buffer_arg) {
  return consumer$group_pb.AddConsumerResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_broker_CreateConsumerGroupRequest(arg) {
  if (!(arg instanceof consumer$group_pb.CreateConsumerGroupRequest)) {
    throw new Error('Expected argument of type broker.CreateConsumerGroupRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_broker_CreateConsumerGroupRequest(buffer_arg) {
  return consumer$group_pb.CreateConsumerGroupRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_broker_CreateConsumerGroupResponse(arg) {
  if (!(arg instanceof consumer$group_pb.CreateConsumerGroupResponse)) {
    throw new Error('Expected argument of type broker.CreateConsumerGroupResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_broker_CreateConsumerGroupResponse(buffer_arg) {
  return consumer$group_pb.CreateConsumerGroupResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_broker_CreateStreamRequest(arg) {
  if (!(arg instanceof stream_pb.CreateStreamRequest)) {
    throw new Error('Expected argument of type broker.CreateStreamRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_broker_CreateStreamRequest(buffer_arg) {
  return stream_pb.CreateStreamRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_broker_CreateStreamResponse(arg) {
  if (!(arg instanceof stream_pb.CreateStreamResponse)) {
    throw new Error('Expected argument of type broker.CreateStreamResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_broker_CreateStreamResponse(buffer_arg) {
  return stream_pb.CreateStreamResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_broker_GetStreamRequest(arg) {
  if (!(arg instanceof stream_pb.GetStreamRequest)) {
    throw new Error('Expected argument of type broker.GetStreamRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_broker_GetStreamRequest(buffer_arg) {
  return stream_pb.GetStreamRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_broker_GetStreamResponse(arg) {
  if (!(arg instanceof stream_pb.GetStreamResponse)) {
    throw new Error('Expected argument of type broker.GetStreamResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_broker_GetStreamResponse(buffer_arg) {
  return stream_pb.GetStreamResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_broker_ListConsumerGroupsRequest(arg) {
  if (!(arg instanceof consumer$group_pb.ListConsumerGroupsRequest)) {
    throw new Error('Expected argument of type broker.ListConsumerGroupsRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_broker_ListConsumerGroupsRequest(buffer_arg) {
  return consumer$group_pb.ListConsumerGroupsRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_broker_ListConsumerGroupsResponse(arg) {
  if (!(arg instanceof consumer$group_pb.ListConsumerGroupsResponse)) {
    throw new Error('Expected argument of type broker.ListConsumerGroupsResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_broker_ListConsumerGroupsResponse(buffer_arg) {
  return consumer$group_pb.ListConsumerGroupsResponse.deserializeBinary(new Uint8Array(buffer_arg));
}


var StreamWeaverBrokerService = exports.StreamWeaverBrokerService = {
  // Create a new stream
createStream: {
    path: '/broker.StreamWeaverBroker/CreateStream',
    requestStream: false,
    responseStream: false,
    requestType: stream_pb.CreateStreamRequest,
    responseType: stream_pb.CreateStreamResponse,
    requestSerialize: serialize_broker_CreateStreamRequest,
    requestDeserialize: deserialize_broker_CreateStreamRequest,
    responseSerialize: serialize_broker_CreateStreamResponse,
    responseDeserialize: deserialize_broker_CreateStreamResponse,
  },
  // Get a stream by name
getStream: {
    path: '/broker.StreamWeaverBroker/GetStream',
    requestStream: false,
    responseStream: false,
    requestType: stream_pb.GetStreamRequest,
    responseType: stream_pb.GetStreamResponse,
    requestSerialize: serialize_broker_GetStreamRequest,
    requestDeserialize: deserialize_broker_GetStreamRequest,
    responseSerialize: serialize_broker_GetStreamResponse,
    responseDeserialize: deserialize_broker_GetStreamResponse,
  },
  // Create a new consumer group
createConsumerGroup: {
    path: '/broker.StreamWeaverBroker/CreateConsumerGroup',
    requestStream: false,
    responseStream: false,
    requestType: consumer$group_pb.CreateConsumerGroupRequest,
    responseType: consumer$group_pb.CreateConsumerGroupResponse,
    requestSerialize: serialize_broker_CreateConsumerGroupRequest,
    requestDeserialize: deserialize_broker_CreateConsumerGroupRequest,
    responseSerialize: serialize_broker_CreateConsumerGroupResponse,
    responseDeserialize: deserialize_broker_CreateConsumerGroupResponse,
  },
  // Add a consumer to a consumer group
addConsumer: {
    path: '/broker.StreamWeaverBroker/AddConsumer',
    requestStream: false,
    responseStream: false,
    requestType: consumer$group_pb.AddConsumerRequest,
    responseType: consumer$group_pb.AddConsumerResponse,
    requestSerialize: serialize_broker_AddConsumerRequest,
    requestDeserialize: deserialize_broker_AddConsumerRequest,
    responseSerialize: serialize_broker_AddConsumerResponse,
    responseDeserialize: deserialize_broker_AddConsumerResponse,
  },
  // List consumer groups for a stream
listConsumerGroups: {
    path: '/broker.StreamWeaverBroker/ListConsumerGroups',
    requestStream: false,
    responseStream: false,
    requestType: consumer$group_pb.ListConsumerGroupsRequest,
    responseType: consumer$group_pb.ListConsumerGroupsResponse,
    requestSerialize: serialize_broker_ListConsumerGroupsRequest,
    requestDeserialize: deserialize_broker_ListConsumerGroupsRequest,
    responseSerialize: serialize_broker_ListConsumerGroupsResponse,
    responseDeserialize: deserialize_broker_ListConsumerGroupsResponse,
  },
};

exports.StreamWeaverBrokerClient = grpc.makeGenericClientConstructor(StreamWeaverBrokerService);
