// source: stream.proto
/**
 * @fileoverview
 * @enhanceable
 * @suppress {missingRequire} reports error on implicit type usages.
 * @suppress {messageConventions} JS Compiler reports an error if a variable or
 *     field starts with 'MSG_' and isn't a translatable message.
 * @public
 */
// GENERATED CODE -- DO NOT EDIT!
/* eslint-disable */
// @ts-nocheck

var jspb = require('google-protobuf');
var goog = jspb;
var global = (function() {
  if (this) { return this; }
  if (typeof window !== 'undefined') { return window; }
  if (typeof global !== 'undefined') { return global; }
  if (typeof self !== 'undefined') { return self; }
  return Function('return this')();
}.call(null));

goog.exportSymbol('proto.broker.CreateStreamRequest', null, global);
goog.exportSymbol('proto.broker.CreateStreamResponse', null, global);
goog.exportSymbol('proto.broker.GetStreamRequest', null, global);
goog.exportSymbol('proto.broker.GetStreamResponse', null, global);
goog.exportSymbol('proto.broker.Stream', null, global);
goog.exportSymbol('proto.broker.StreamRetentionOptions', null, global);
goog.exportSymbol('proto.broker.StreamRetentionPolicy', null, global);
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.broker.StreamRetentionOptions = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.broker.StreamRetentionOptions, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.broker.StreamRetentionOptions.displayName = 'proto.broker.StreamRetentionOptions';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.broker.Stream = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.broker.Stream, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.broker.Stream.displayName = 'proto.broker.Stream';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.broker.CreateStreamRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.broker.CreateStreamRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.broker.CreateStreamRequest.displayName = 'proto.broker.CreateStreamRequest';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.broker.CreateStreamResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.broker.CreateStreamResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.broker.CreateStreamResponse.displayName = 'proto.broker.CreateStreamResponse';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.broker.GetStreamRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.broker.GetStreamRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.broker.GetStreamRequest.displayName = 'proto.broker.GetStreamRequest';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.broker.GetStreamResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.broker.GetStreamResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.broker.GetStreamResponse.displayName = 'proto.broker.GetStreamResponse';
}



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.broker.StreamRetentionOptions.prototype.toObject = function(opt_includeInstance) {
  return proto.broker.StreamRetentionOptions.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.broker.StreamRetentionOptions} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.broker.StreamRetentionOptions.toObject = function(includeInstance, msg) {
  var f, obj = {
    maxAge: jspb.Message.getFieldWithDefault(msg, 1, ""),
    maxSize: jspb.Message.getFieldWithDefault(msg, 2, 0),
    retentionPolicy: jspb.Message.getFieldWithDefault(msg, 3, 0)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.broker.StreamRetentionOptions}
 */
proto.broker.StreamRetentionOptions.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.broker.StreamRetentionOptions;
  return proto.broker.StreamRetentionOptions.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.broker.StreamRetentionOptions} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.broker.StreamRetentionOptions}
 */
proto.broker.StreamRetentionOptions.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setMaxAge(value);
      break;
    case 2:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setMaxSize(value);
      break;
    case 3:
      var value = /** @type {!proto.broker.StreamRetentionPolicy} */ (reader.readEnum());
      msg.setRetentionPolicy(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.broker.StreamRetentionOptions.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.broker.StreamRetentionOptions.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.broker.StreamRetentionOptions} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.broker.StreamRetentionOptions.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getMaxAge();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getMaxSize();
  if (f !== 0) {
    writer.writeInt64(
      2,
      f
    );
  }
  f = message.getRetentionPolicy();
  if (f !== 0.0) {
    writer.writeEnum(
      3,
      f
    );
  }
};


/**
 * optional string max_age = 1;
 * @return {string}
 */
proto.broker.StreamRetentionOptions.prototype.getMaxAge = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.broker.StreamRetentionOptions} returns this
 */
proto.broker.StreamRetentionOptions.prototype.setMaxAge = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional int64 max_size = 2;
 * @return {number}
 */
proto.broker.StreamRetentionOptions.prototype.getMaxSize = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 2, 0));
};


/**
 * @param {number} value
 * @return {!proto.broker.StreamRetentionOptions} returns this
 */
proto.broker.StreamRetentionOptions.prototype.setMaxSize = function(value) {
  return jspb.Message.setProto3IntField(this, 2, value);
};


/**
 * optional StreamRetentionPolicy retention_policy = 3;
 * @return {!proto.broker.StreamRetentionPolicy}
 */
proto.broker.StreamRetentionOptions.prototype.getRetentionPolicy = function() {
  return /** @type {!proto.broker.StreamRetentionPolicy} */ (jspb.Message.getFieldWithDefault(this, 3, 0));
};


/**
 * @param {!proto.broker.StreamRetentionPolicy} value
 * @return {!proto.broker.StreamRetentionOptions} returns this
 */
proto.broker.StreamRetentionOptions.prototype.setRetentionPolicy = function(value) {
  return jspb.Message.setProto3EnumField(this, 3, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.broker.Stream.prototype.toObject = function(opt_includeInstance) {
  return proto.broker.Stream.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.broker.Stream} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.broker.Stream.toObject = function(includeInstance, msg) {
  var f, obj = {
    streamName: jspb.Message.getFieldWithDefault(msg, 1, ""),
    retentionOptions: (f = msg.getRetentionOptions()) && proto.broker.StreamRetentionOptions.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.broker.Stream}
 */
proto.broker.Stream.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.broker.Stream;
  return proto.broker.Stream.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.broker.Stream} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.broker.Stream}
 */
proto.broker.Stream.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setStreamName(value);
      break;
    case 2:
      var value = new proto.broker.StreamRetentionOptions;
      reader.readMessage(value,proto.broker.StreamRetentionOptions.deserializeBinaryFromReader);
      msg.setRetentionOptions(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.broker.Stream.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.broker.Stream.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.broker.Stream} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.broker.Stream.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getStreamName();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getRetentionOptions();
  if (f != null) {
    writer.writeMessage(
      2,
      f,
      proto.broker.StreamRetentionOptions.serializeBinaryToWriter
    );
  }
};


/**
 * optional string stream_name = 1;
 * @return {string}
 */
proto.broker.Stream.prototype.getStreamName = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.broker.Stream} returns this
 */
proto.broker.Stream.prototype.setStreamName = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional StreamRetentionOptions retention_options = 2;
 * @return {?proto.broker.StreamRetentionOptions}
 */
proto.broker.Stream.prototype.getRetentionOptions = function() {
  return /** @type{?proto.broker.StreamRetentionOptions} */ (
    jspb.Message.getWrapperField(this, proto.broker.StreamRetentionOptions, 2));
};


/**
 * @param {?proto.broker.StreamRetentionOptions|undefined} value
 * @return {!proto.broker.Stream} returns this
*/
proto.broker.Stream.prototype.setRetentionOptions = function(value) {
  return jspb.Message.setWrapperField(this, 2, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.broker.Stream} returns this
 */
proto.broker.Stream.prototype.clearRetentionOptions = function() {
  return this.setRetentionOptions(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.broker.Stream.prototype.hasRetentionOptions = function() {
  return jspb.Message.getField(this, 2) != null;
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.broker.CreateStreamRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.broker.CreateStreamRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.broker.CreateStreamRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.broker.CreateStreamRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    streamName: jspb.Message.getFieldWithDefault(msg, 1, ""),
    retentionOptions: (f = msg.getRetentionOptions()) && proto.broker.StreamRetentionOptions.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.broker.CreateStreamRequest}
 */
proto.broker.CreateStreamRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.broker.CreateStreamRequest;
  return proto.broker.CreateStreamRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.broker.CreateStreamRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.broker.CreateStreamRequest}
 */
proto.broker.CreateStreamRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setStreamName(value);
      break;
    case 2:
      var value = new proto.broker.StreamRetentionOptions;
      reader.readMessage(value,proto.broker.StreamRetentionOptions.deserializeBinaryFromReader);
      msg.setRetentionOptions(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.broker.CreateStreamRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.broker.CreateStreamRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.broker.CreateStreamRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.broker.CreateStreamRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getStreamName();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getRetentionOptions();
  if (f != null) {
    writer.writeMessage(
      2,
      f,
      proto.broker.StreamRetentionOptions.serializeBinaryToWriter
    );
  }
};


/**
 * optional string stream_name = 1;
 * @return {string}
 */
proto.broker.CreateStreamRequest.prototype.getStreamName = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.broker.CreateStreamRequest} returns this
 */
proto.broker.CreateStreamRequest.prototype.setStreamName = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional StreamRetentionOptions retention_options = 2;
 * @return {?proto.broker.StreamRetentionOptions}
 */
proto.broker.CreateStreamRequest.prototype.getRetentionOptions = function() {
  return /** @type{?proto.broker.StreamRetentionOptions} */ (
    jspb.Message.getWrapperField(this, proto.broker.StreamRetentionOptions, 2));
};


/**
 * @param {?proto.broker.StreamRetentionOptions|undefined} value
 * @return {!proto.broker.CreateStreamRequest} returns this
*/
proto.broker.CreateStreamRequest.prototype.setRetentionOptions = function(value) {
  return jspb.Message.setWrapperField(this, 2, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.broker.CreateStreamRequest} returns this
 */
proto.broker.CreateStreamRequest.prototype.clearRetentionOptions = function() {
  return this.setRetentionOptions(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.broker.CreateStreamRequest.prototype.hasRetentionOptions = function() {
  return jspb.Message.getField(this, 2) != null;
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.broker.CreateStreamResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.broker.CreateStreamResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.broker.CreateStreamResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.broker.CreateStreamResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
    status: jspb.Message.getFieldWithDefault(msg, 1, ""),
    errorMessage: jspb.Message.getFieldWithDefault(msg, 2, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.broker.CreateStreamResponse}
 */
proto.broker.CreateStreamResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.broker.CreateStreamResponse;
  return proto.broker.CreateStreamResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.broker.CreateStreamResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.broker.CreateStreamResponse}
 */
proto.broker.CreateStreamResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setStatus(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setErrorMessage(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.broker.CreateStreamResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.broker.CreateStreamResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.broker.CreateStreamResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.broker.CreateStreamResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getStatus();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getErrorMessage();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
};


/**
 * optional string status = 1;
 * @return {string}
 */
proto.broker.CreateStreamResponse.prototype.getStatus = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.broker.CreateStreamResponse} returns this
 */
proto.broker.CreateStreamResponse.prototype.setStatus = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional string error_message = 2;
 * @return {string}
 */
proto.broker.CreateStreamResponse.prototype.getErrorMessage = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.broker.CreateStreamResponse} returns this
 */
proto.broker.CreateStreamResponse.prototype.setErrorMessage = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.broker.GetStreamRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.broker.GetStreamRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.broker.GetStreamRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.broker.GetStreamRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    streamName: jspb.Message.getFieldWithDefault(msg, 1, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.broker.GetStreamRequest}
 */
proto.broker.GetStreamRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.broker.GetStreamRequest;
  return proto.broker.GetStreamRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.broker.GetStreamRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.broker.GetStreamRequest}
 */
proto.broker.GetStreamRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setStreamName(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.broker.GetStreamRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.broker.GetStreamRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.broker.GetStreamRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.broker.GetStreamRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getStreamName();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
};


/**
 * optional string stream_name = 1;
 * @return {string}
 */
proto.broker.GetStreamRequest.prototype.getStreamName = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.broker.GetStreamRequest} returns this
 */
proto.broker.GetStreamRequest.prototype.setStreamName = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.broker.GetStreamResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.broker.GetStreamResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.broker.GetStreamResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.broker.GetStreamResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
    name: jspb.Message.getFieldWithDefault(msg, 1, ""),
    retentionOptions: (f = msg.getRetentionOptions()) && proto.broker.StreamRetentionOptions.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.broker.GetStreamResponse}
 */
proto.broker.GetStreamResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.broker.GetStreamResponse;
  return proto.broker.GetStreamResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.broker.GetStreamResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.broker.GetStreamResponse}
 */
proto.broker.GetStreamResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setName(value);
      break;
    case 2:
      var value = new proto.broker.StreamRetentionOptions;
      reader.readMessage(value,proto.broker.StreamRetentionOptions.deserializeBinaryFromReader);
      msg.setRetentionOptions(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.broker.GetStreamResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.broker.GetStreamResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.broker.GetStreamResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.broker.GetStreamResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getName();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getRetentionOptions();
  if (f != null) {
    writer.writeMessage(
      2,
      f,
      proto.broker.StreamRetentionOptions.serializeBinaryToWriter
    );
  }
};


/**
 * optional string name = 1;
 * @return {string}
 */
proto.broker.GetStreamResponse.prototype.getName = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.broker.GetStreamResponse} returns this
 */
proto.broker.GetStreamResponse.prototype.setName = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional StreamRetentionOptions retention_options = 2;
 * @return {?proto.broker.StreamRetentionOptions}
 */
proto.broker.GetStreamResponse.prototype.getRetentionOptions = function() {
  return /** @type{?proto.broker.StreamRetentionOptions} */ (
    jspb.Message.getWrapperField(this, proto.broker.StreamRetentionOptions, 2));
};


/**
 * @param {?proto.broker.StreamRetentionOptions|undefined} value
 * @return {!proto.broker.GetStreamResponse} returns this
*/
proto.broker.GetStreamResponse.prototype.setRetentionOptions = function(value) {
  return jspb.Message.setWrapperField(this, 2, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.broker.GetStreamResponse} returns this
 */
proto.broker.GetStreamResponse.prototype.clearRetentionOptions = function() {
  return this.setRetentionOptions(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.broker.GetStreamResponse.prototype.hasRetentionOptions = function() {
  return jspb.Message.getField(this, 2) != null;
};


/**
 * @enum {number}
 */
proto.broker.StreamRetentionPolicy = {
  TIME_RETENTION_POLICY: 0,
  SIZE_RETENTION_POLICY: 1
};

goog.object.extend(exports, proto.broker);
