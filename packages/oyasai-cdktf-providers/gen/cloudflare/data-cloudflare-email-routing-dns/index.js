"use strict";
// https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/data-sources/email_routing_dns
// generated from terraform resource schema
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
exports.DataCloudflareEmailRoutingDns = exports.DataCloudflareEmailRoutingDnsResultInfoOutputReference = exports.DataCloudflareEmailRoutingDnsResultOutputReference = exports.DataCloudflareEmailRoutingDnsResultRecordList = exports.DataCloudflareEmailRoutingDnsResultRecordOutputReference = exports.DataCloudflareEmailRoutingDnsResultErrorsList = exports.DataCloudflareEmailRoutingDnsResultErrorsOutputReference = exports.DataCloudflareEmailRoutingDnsResultErrorsMissingOutputReference = exports.DataCloudflareEmailRoutingDnsMessagesList = exports.DataCloudflareEmailRoutingDnsMessagesOutputReference = exports.DataCloudflareEmailRoutingDnsMessagesSourceOutputReference = exports.DataCloudflareEmailRoutingDnsErrorsList = exports.DataCloudflareEmailRoutingDnsErrorsOutputReference = exports.DataCloudflareEmailRoutingDnsErrorsSourceOutputReference = void 0;
exports.dataCloudflareEmailRoutingDnsErrorsSourceToTerraform = dataCloudflareEmailRoutingDnsErrorsSourceToTerraform;
exports.dataCloudflareEmailRoutingDnsErrorsSourceToHclTerraform = dataCloudflareEmailRoutingDnsErrorsSourceToHclTerraform;
exports.dataCloudflareEmailRoutingDnsErrorsToTerraform = dataCloudflareEmailRoutingDnsErrorsToTerraform;
exports.dataCloudflareEmailRoutingDnsErrorsToHclTerraform = dataCloudflareEmailRoutingDnsErrorsToHclTerraform;
exports.dataCloudflareEmailRoutingDnsMessagesSourceToTerraform = dataCloudflareEmailRoutingDnsMessagesSourceToTerraform;
exports.dataCloudflareEmailRoutingDnsMessagesSourceToHclTerraform = dataCloudflareEmailRoutingDnsMessagesSourceToHclTerraform;
exports.dataCloudflareEmailRoutingDnsMessagesToTerraform = dataCloudflareEmailRoutingDnsMessagesToTerraform;
exports.dataCloudflareEmailRoutingDnsMessagesToHclTerraform = dataCloudflareEmailRoutingDnsMessagesToHclTerraform;
exports.dataCloudflareEmailRoutingDnsResultErrorsMissingToTerraform = dataCloudflareEmailRoutingDnsResultErrorsMissingToTerraform;
exports.dataCloudflareEmailRoutingDnsResultErrorsMissingToHclTerraform = dataCloudflareEmailRoutingDnsResultErrorsMissingToHclTerraform;
exports.dataCloudflareEmailRoutingDnsResultErrorsToTerraform = dataCloudflareEmailRoutingDnsResultErrorsToTerraform;
exports.dataCloudflareEmailRoutingDnsResultErrorsToHclTerraform = dataCloudflareEmailRoutingDnsResultErrorsToHclTerraform;
exports.dataCloudflareEmailRoutingDnsResultRecordToTerraform = dataCloudflareEmailRoutingDnsResultRecordToTerraform;
exports.dataCloudflareEmailRoutingDnsResultRecordToHclTerraform = dataCloudflareEmailRoutingDnsResultRecordToHclTerraform;
exports.dataCloudflareEmailRoutingDnsResultToTerraform = dataCloudflareEmailRoutingDnsResultToTerraform;
exports.dataCloudflareEmailRoutingDnsResultToHclTerraform = dataCloudflareEmailRoutingDnsResultToHclTerraform;
exports.dataCloudflareEmailRoutingDnsResultInfoToTerraform = dataCloudflareEmailRoutingDnsResultInfoToTerraform;
exports.dataCloudflareEmailRoutingDnsResultInfoToHclTerraform = dataCloudflareEmailRoutingDnsResultInfoToHclTerraform;
var cdktf = require("cdktf");
function dataCloudflareEmailRoutingDnsErrorsSourceToTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {};
}
function dataCloudflareEmailRoutingDnsErrorsSourceToHclTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    var attrs = {};
    return attrs;
}
var DataCloudflareEmailRoutingDnsErrorsSourceOutputReference = /** @class */ (function (_super) {
    __extends(DataCloudflareEmailRoutingDnsErrorsSourceOutputReference, _super);
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    function DataCloudflareEmailRoutingDnsErrorsSourceOutputReference(terraformResource, terraformAttribute) {
        var _this = _super.call(this, terraformResource, terraformAttribute, false) || this;
        _this.isEmptyObject = false;
        return _this;
    }
    Object.defineProperty(DataCloudflareEmailRoutingDnsErrorsSourceOutputReference.prototype, "internalValue", {
        get: function () {
            var hasAnyValues = this.isEmptyObject;
            var internalValueResult = {};
            return hasAnyValues ? internalValueResult : undefined;
        },
        set: function (value) {
            if (value === undefined) {
                this.isEmptyObject = false;
            }
            else {
                this.isEmptyObject = Object.keys(value).length === 0;
            }
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareEmailRoutingDnsErrorsSourceOutputReference.prototype, "pointer", {
        // pointer - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('pointer');
        },
        enumerable: false,
        configurable: true
    });
    return DataCloudflareEmailRoutingDnsErrorsSourceOutputReference;
}(cdktf.ComplexObject));
exports.DataCloudflareEmailRoutingDnsErrorsSourceOutputReference = DataCloudflareEmailRoutingDnsErrorsSourceOutputReference;
function dataCloudflareEmailRoutingDnsErrorsToTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {};
}
function dataCloudflareEmailRoutingDnsErrorsToHclTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    var attrs = {};
    return attrs;
}
var DataCloudflareEmailRoutingDnsErrorsOutputReference = /** @class */ (function (_super) {
    __extends(DataCloudflareEmailRoutingDnsErrorsOutputReference, _super);
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    function DataCloudflareEmailRoutingDnsErrorsOutputReference(terraformResource, terraformAttribute, complexObjectIndex, complexObjectIsFromSet) {
        var _this = _super.call(this, terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex) || this;
        _this.isEmptyObject = false;
        // source - computed: true, optional: false, required: false
        _this._source = new DataCloudflareEmailRoutingDnsErrorsSourceOutputReference(_this, "source");
        return _this;
    }
    Object.defineProperty(DataCloudflareEmailRoutingDnsErrorsOutputReference.prototype, "internalValue", {
        get: function () {
            var hasAnyValues = this.isEmptyObject;
            var internalValueResult = {};
            return hasAnyValues ? internalValueResult : undefined;
        },
        set: function (value) {
            if (value === undefined) {
                this.isEmptyObject = false;
            }
            else {
                this.isEmptyObject = Object.keys(value).length === 0;
            }
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareEmailRoutingDnsErrorsOutputReference.prototype, "code", {
        // code - computed: true, optional: false, required: false
        get: function () {
            return this.getNumberAttribute('code');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareEmailRoutingDnsErrorsOutputReference.prototype, "documentationUrl", {
        // documentation_url - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('documentation_url');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareEmailRoutingDnsErrorsOutputReference.prototype, "message", {
        // message - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('message');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareEmailRoutingDnsErrorsOutputReference.prototype, "source", {
        get: function () {
            return this._source;
        },
        enumerable: false,
        configurable: true
    });
    return DataCloudflareEmailRoutingDnsErrorsOutputReference;
}(cdktf.ComplexObject));
exports.DataCloudflareEmailRoutingDnsErrorsOutputReference = DataCloudflareEmailRoutingDnsErrorsOutputReference;
var DataCloudflareEmailRoutingDnsErrorsList = /** @class */ (function (_super) {
    __extends(DataCloudflareEmailRoutingDnsErrorsList, _super);
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    function DataCloudflareEmailRoutingDnsErrorsList(terraformResource, terraformAttribute, wrapsSet) {
        var _this = _super.call(this, terraformResource, terraformAttribute, wrapsSet) || this;
        _this.terraformResource = terraformResource;
        _this.terraformAttribute = terraformAttribute;
        _this.wrapsSet = wrapsSet;
        return _this;
    }
    /**
    * @param index the index of the item to return
    */
    DataCloudflareEmailRoutingDnsErrorsList.prototype.get = function (index) {
        return new DataCloudflareEmailRoutingDnsErrorsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
    };
    return DataCloudflareEmailRoutingDnsErrorsList;
}(cdktf.ComplexList));
exports.DataCloudflareEmailRoutingDnsErrorsList = DataCloudflareEmailRoutingDnsErrorsList;
function dataCloudflareEmailRoutingDnsMessagesSourceToTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {};
}
function dataCloudflareEmailRoutingDnsMessagesSourceToHclTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    var attrs = {};
    return attrs;
}
var DataCloudflareEmailRoutingDnsMessagesSourceOutputReference = /** @class */ (function (_super) {
    __extends(DataCloudflareEmailRoutingDnsMessagesSourceOutputReference, _super);
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    function DataCloudflareEmailRoutingDnsMessagesSourceOutputReference(terraformResource, terraformAttribute) {
        var _this = _super.call(this, terraformResource, terraformAttribute, false) || this;
        _this.isEmptyObject = false;
        return _this;
    }
    Object.defineProperty(DataCloudflareEmailRoutingDnsMessagesSourceOutputReference.prototype, "internalValue", {
        get: function () {
            var hasAnyValues = this.isEmptyObject;
            var internalValueResult = {};
            return hasAnyValues ? internalValueResult : undefined;
        },
        set: function (value) {
            if (value === undefined) {
                this.isEmptyObject = false;
            }
            else {
                this.isEmptyObject = Object.keys(value).length === 0;
            }
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareEmailRoutingDnsMessagesSourceOutputReference.prototype, "pointer", {
        // pointer - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('pointer');
        },
        enumerable: false,
        configurable: true
    });
    return DataCloudflareEmailRoutingDnsMessagesSourceOutputReference;
}(cdktf.ComplexObject));
exports.DataCloudflareEmailRoutingDnsMessagesSourceOutputReference = DataCloudflareEmailRoutingDnsMessagesSourceOutputReference;
function dataCloudflareEmailRoutingDnsMessagesToTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {};
}
function dataCloudflareEmailRoutingDnsMessagesToHclTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    var attrs = {};
    return attrs;
}
var DataCloudflareEmailRoutingDnsMessagesOutputReference = /** @class */ (function (_super) {
    __extends(DataCloudflareEmailRoutingDnsMessagesOutputReference, _super);
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    function DataCloudflareEmailRoutingDnsMessagesOutputReference(terraformResource, terraformAttribute, complexObjectIndex, complexObjectIsFromSet) {
        var _this = _super.call(this, terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex) || this;
        _this.isEmptyObject = false;
        // source - computed: true, optional: false, required: false
        _this._source = new DataCloudflareEmailRoutingDnsMessagesSourceOutputReference(_this, "source");
        return _this;
    }
    Object.defineProperty(DataCloudflareEmailRoutingDnsMessagesOutputReference.prototype, "internalValue", {
        get: function () {
            var hasAnyValues = this.isEmptyObject;
            var internalValueResult = {};
            return hasAnyValues ? internalValueResult : undefined;
        },
        set: function (value) {
            if (value === undefined) {
                this.isEmptyObject = false;
            }
            else {
                this.isEmptyObject = Object.keys(value).length === 0;
            }
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareEmailRoutingDnsMessagesOutputReference.prototype, "code", {
        // code - computed: true, optional: false, required: false
        get: function () {
            return this.getNumberAttribute('code');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareEmailRoutingDnsMessagesOutputReference.prototype, "documentationUrl", {
        // documentation_url - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('documentation_url');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareEmailRoutingDnsMessagesOutputReference.prototype, "message", {
        // message - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('message');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareEmailRoutingDnsMessagesOutputReference.prototype, "source", {
        get: function () {
            return this._source;
        },
        enumerable: false,
        configurable: true
    });
    return DataCloudflareEmailRoutingDnsMessagesOutputReference;
}(cdktf.ComplexObject));
exports.DataCloudflareEmailRoutingDnsMessagesOutputReference = DataCloudflareEmailRoutingDnsMessagesOutputReference;
var DataCloudflareEmailRoutingDnsMessagesList = /** @class */ (function (_super) {
    __extends(DataCloudflareEmailRoutingDnsMessagesList, _super);
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    function DataCloudflareEmailRoutingDnsMessagesList(terraformResource, terraformAttribute, wrapsSet) {
        var _this = _super.call(this, terraformResource, terraformAttribute, wrapsSet) || this;
        _this.terraformResource = terraformResource;
        _this.terraformAttribute = terraformAttribute;
        _this.wrapsSet = wrapsSet;
        return _this;
    }
    /**
    * @param index the index of the item to return
    */
    DataCloudflareEmailRoutingDnsMessagesList.prototype.get = function (index) {
        return new DataCloudflareEmailRoutingDnsMessagesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
    };
    return DataCloudflareEmailRoutingDnsMessagesList;
}(cdktf.ComplexList));
exports.DataCloudflareEmailRoutingDnsMessagesList = DataCloudflareEmailRoutingDnsMessagesList;
function dataCloudflareEmailRoutingDnsResultErrorsMissingToTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {};
}
function dataCloudflareEmailRoutingDnsResultErrorsMissingToHclTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    var attrs = {};
    return attrs;
}
var DataCloudflareEmailRoutingDnsResultErrorsMissingOutputReference = /** @class */ (function (_super) {
    __extends(DataCloudflareEmailRoutingDnsResultErrorsMissingOutputReference, _super);
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    function DataCloudflareEmailRoutingDnsResultErrorsMissingOutputReference(terraformResource, terraformAttribute) {
        var _this = _super.call(this, terraformResource, terraformAttribute, false) || this;
        _this.isEmptyObject = false;
        return _this;
    }
    Object.defineProperty(DataCloudflareEmailRoutingDnsResultErrorsMissingOutputReference.prototype, "internalValue", {
        get: function () {
            var hasAnyValues = this.isEmptyObject;
            var internalValueResult = {};
            return hasAnyValues ? internalValueResult : undefined;
        },
        set: function (value) {
            if (value === undefined) {
                this.isEmptyObject = false;
            }
            else {
                this.isEmptyObject = Object.keys(value).length === 0;
            }
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareEmailRoutingDnsResultErrorsMissingOutputReference.prototype, "content", {
        // content - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('content');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareEmailRoutingDnsResultErrorsMissingOutputReference.prototype, "name", {
        // name - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('name');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareEmailRoutingDnsResultErrorsMissingOutputReference.prototype, "priority", {
        // priority - computed: true, optional: false, required: false
        get: function () {
            return this.getNumberAttribute('priority');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareEmailRoutingDnsResultErrorsMissingOutputReference.prototype, "ttl", {
        // ttl - computed: true, optional: false, required: false
        get: function () {
            return this.getNumberAttribute('ttl');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareEmailRoutingDnsResultErrorsMissingOutputReference.prototype, "type", {
        // type - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('type');
        },
        enumerable: false,
        configurable: true
    });
    return DataCloudflareEmailRoutingDnsResultErrorsMissingOutputReference;
}(cdktf.ComplexObject));
exports.DataCloudflareEmailRoutingDnsResultErrorsMissingOutputReference = DataCloudflareEmailRoutingDnsResultErrorsMissingOutputReference;
function dataCloudflareEmailRoutingDnsResultErrorsToTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {};
}
function dataCloudflareEmailRoutingDnsResultErrorsToHclTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    var attrs = {};
    return attrs;
}
var DataCloudflareEmailRoutingDnsResultErrorsOutputReference = /** @class */ (function (_super) {
    __extends(DataCloudflareEmailRoutingDnsResultErrorsOutputReference, _super);
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    function DataCloudflareEmailRoutingDnsResultErrorsOutputReference(terraformResource, terraformAttribute, complexObjectIndex, complexObjectIsFromSet) {
        var _this = _super.call(this, terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex) || this;
        _this.isEmptyObject = false;
        // missing - computed: true, optional: false, required: false
        _this._missing = new DataCloudflareEmailRoutingDnsResultErrorsMissingOutputReference(_this, "missing");
        return _this;
    }
    Object.defineProperty(DataCloudflareEmailRoutingDnsResultErrorsOutputReference.prototype, "internalValue", {
        get: function () {
            var hasAnyValues = this.isEmptyObject;
            var internalValueResult = {};
            return hasAnyValues ? internalValueResult : undefined;
        },
        set: function (value) {
            if (value === undefined) {
                this.isEmptyObject = false;
            }
            else {
                this.isEmptyObject = Object.keys(value).length === 0;
            }
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareEmailRoutingDnsResultErrorsOutputReference.prototype, "code", {
        // code - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('code');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareEmailRoutingDnsResultErrorsOutputReference.prototype, "missing", {
        get: function () {
            return this._missing;
        },
        enumerable: false,
        configurable: true
    });
    return DataCloudflareEmailRoutingDnsResultErrorsOutputReference;
}(cdktf.ComplexObject));
exports.DataCloudflareEmailRoutingDnsResultErrorsOutputReference = DataCloudflareEmailRoutingDnsResultErrorsOutputReference;
var DataCloudflareEmailRoutingDnsResultErrorsList = /** @class */ (function (_super) {
    __extends(DataCloudflareEmailRoutingDnsResultErrorsList, _super);
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    function DataCloudflareEmailRoutingDnsResultErrorsList(terraformResource, terraformAttribute, wrapsSet) {
        var _this = _super.call(this, terraformResource, terraformAttribute, wrapsSet) || this;
        _this.terraformResource = terraformResource;
        _this.terraformAttribute = terraformAttribute;
        _this.wrapsSet = wrapsSet;
        return _this;
    }
    /**
    * @param index the index of the item to return
    */
    DataCloudflareEmailRoutingDnsResultErrorsList.prototype.get = function (index) {
        return new DataCloudflareEmailRoutingDnsResultErrorsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
    };
    return DataCloudflareEmailRoutingDnsResultErrorsList;
}(cdktf.ComplexList));
exports.DataCloudflareEmailRoutingDnsResultErrorsList = DataCloudflareEmailRoutingDnsResultErrorsList;
function dataCloudflareEmailRoutingDnsResultRecordToTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {};
}
function dataCloudflareEmailRoutingDnsResultRecordToHclTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    var attrs = {};
    return attrs;
}
var DataCloudflareEmailRoutingDnsResultRecordOutputReference = /** @class */ (function (_super) {
    __extends(DataCloudflareEmailRoutingDnsResultRecordOutputReference, _super);
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    function DataCloudflareEmailRoutingDnsResultRecordOutputReference(terraformResource, terraformAttribute, complexObjectIndex, complexObjectIsFromSet) {
        var _this = _super.call(this, terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex) || this;
        _this.isEmptyObject = false;
        return _this;
    }
    Object.defineProperty(DataCloudflareEmailRoutingDnsResultRecordOutputReference.prototype, "internalValue", {
        get: function () {
            var hasAnyValues = this.isEmptyObject;
            var internalValueResult = {};
            return hasAnyValues ? internalValueResult : undefined;
        },
        set: function (value) {
            if (value === undefined) {
                this.isEmptyObject = false;
            }
            else {
                this.isEmptyObject = Object.keys(value).length === 0;
            }
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareEmailRoutingDnsResultRecordOutputReference.prototype, "content", {
        // content - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('content');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareEmailRoutingDnsResultRecordOutputReference.prototype, "name", {
        // name - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('name');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareEmailRoutingDnsResultRecordOutputReference.prototype, "priority", {
        // priority - computed: true, optional: false, required: false
        get: function () {
            return this.getNumberAttribute('priority');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareEmailRoutingDnsResultRecordOutputReference.prototype, "ttl", {
        // ttl - computed: true, optional: false, required: false
        get: function () {
            return this.getNumberAttribute('ttl');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareEmailRoutingDnsResultRecordOutputReference.prototype, "type", {
        // type - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('type');
        },
        enumerable: false,
        configurable: true
    });
    return DataCloudflareEmailRoutingDnsResultRecordOutputReference;
}(cdktf.ComplexObject));
exports.DataCloudflareEmailRoutingDnsResultRecordOutputReference = DataCloudflareEmailRoutingDnsResultRecordOutputReference;
var DataCloudflareEmailRoutingDnsResultRecordList = /** @class */ (function (_super) {
    __extends(DataCloudflareEmailRoutingDnsResultRecordList, _super);
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    function DataCloudflareEmailRoutingDnsResultRecordList(terraformResource, terraformAttribute, wrapsSet) {
        var _this = _super.call(this, terraformResource, terraformAttribute, wrapsSet) || this;
        _this.terraformResource = terraformResource;
        _this.terraformAttribute = terraformAttribute;
        _this.wrapsSet = wrapsSet;
        return _this;
    }
    /**
    * @param index the index of the item to return
    */
    DataCloudflareEmailRoutingDnsResultRecordList.prototype.get = function (index) {
        return new DataCloudflareEmailRoutingDnsResultRecordOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
    };
    return DataCloudflareEmailRoutingDnsResultRecordList;
}(cdktf.ComplexList));
exports.DataCloudflareEmailRoutingDnsResultRecordList = DataCloudflareEmailRoutingDnsResultRecordList;
function dataCloudflareEmailRoutingDnsResultToTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {};
}
function dataCloudflareEmailRoutingDnsResultToHclTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    var attrs = {};
    return attrs;
}
var DataCloudflareEmailRoutingDnsResultOutputReference = /** @class */ (function (_super) {
    __extends(DataCloudflareEmailRoutingDnsResultOutputReference, _super);
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    function DataCloudflareEmailRoutingDnsResultOutputReference(terraformResource, terraformAttribute) {
        var _this = _super.call(this, terraformResource, terraformAttribute, false) || this;
        _this.isEmptyObject = false;
        // errors - computed: true, optional: false, required: false
        _this._errors = new DataCloudflareEmailRoutingDnsResultErrorsList(_this, "errors", false);
        // record - computed: true, optional: false, required: false
        _this._record = new DataCloudflareEmailRoutingDnsResultRecordList(_this, "record", false);
        return _this;
    }
    Object.defineProperty(DataCloudflareEmailRoutingDnsResultOutputReference.prototype, "internalValue", {
        get: function () {
            var hasAnyValues = this.isEmptyObject;
            var internalValueResult = {};
            return hasAnyValues ? internalValueResult : undefined;
        },
        set: function (value) {
            if (value === undefined) {
                this.isEmptyObject = false;
            }
            else {
                this.isEmptyObject = Object.keys(value).length === 0;
            }
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareEmailRoutingDnsResultOutputReference.prototype, "content", {
        // content - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('content');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareEmailRoutingDnsResultOutputReference.prototype, "errors", {
        get: function () {
            return this._errors;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareEmailRoutingDnsResultOutputReference.prototype, "name", {
        // name - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('name');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareEmailRoutingDnsResultOutputReference.prototype, "priority", {
        // priority - computed: true, optional: false, required: false
        get: function () {
            return this.getNumberAttribute('priority');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareEmailRoutingDnsResultOutputReference.prototype, "record", {
        get: function () {
            return this._record;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareEmailRoutingDnsResultOutputReference.prototype, "ttl", {
        // ttl - computed: true, optional: false, required: false
        get: function () {
            return this.getNumberAttribute('ttl');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareEmailRoutingDnsResultOutputReference.prototype, "type", {
        // type - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('type');
        },
        enumerable: false,
        configurable: true
    });
    return DataCloudflareEmailRoutingDnsResultOutputReference;
}(cdktf.ComplexObject));
exports.DataCloudflareEmailRoutingDnsResultOutputReference = DataCloudflareEmailRoutingDnsResultOutputReference;
function dataCloudflareEmailRoutingDnsResultInfoToTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {};
}
function dataCloudflareEmailRoutingDnsResultInfoToHclTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    var attrs = {};
    return attrs;
}
var DataCloudflareEmailRoutingDnsResultInfoOutputReference = /** @class */ (function (_super) {
    __extends(DataCloudflareEmailRoutingDnsResultInfoOutputReference, _super);
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    function DataCloudflareEmailRoutingDnsResultInfoOutputReference(terraformResource, terraformAttribute) {
        var _this = _super.call(this, terraformResource, terraformAttribute, false) || this;
        _this.isEmptyObject = false;
        return _this;
    }
    Object.defineProperty(DataCloudflareEmailRoutingDnsResultInfoOutputReference.prototype, "internalValue", {
        get: function () {
            var hasAnyValues = this.isEmptyObject;
            var internalValueResult = {};
            return hasAnyValues ? internalValueResult : undefined;
        },
        set: function (value) {
            if (value === undefined) {
                this.isEmptyObject = false;
            }
            else {
                this.isEmptyObject = Object.keys(value).length === 0;
            }
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareEmailRoutingDnsResultInfoOutputReference.prototype, "emailRoutingDnsCount", {
        // email_routing_dns_count - computed: true, optional: false, required: false
        get: function () {
            return this.getNumberAttribute('email_routing_dns_count');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareEmailRoutingDnsResultInfoOutputReference.prototype, "page", {
        // page - computed: true, optional: false, required: false
        get: function () {
            return this.getNumberAttribute('page');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareEmailRoutingDnsResultInfoOutputReference.prototype, "perPage", {
        // per_page - computed: true, optional: false, required: false
        get: function () {
            return this.getNumberAttribute('per_page');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareEmailRoutingDnsResultInfoOutputReference.prototype, "totalCount", {
        // total_count - computed: true, optional: false, required: false
        get: function () {
            return this.getNumberAttribute('total_count');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareEmailRoutingDnsResultInfoOutputReference.prototype, "totalPages", {
        // total_pages - computed: true, optional: false, required: false
        get: function () {
            return this.getNumberAttribute('total_pages');
        },
        enumerable: false,
        configurable: true
    });
    return DataCloudflareEmailRoutingDnsResultInfoOutputReference;
}(cdktf.ComplexObject));
exports.DataCloudflareEmailRoutingDnsResultInfoOutputReference = DataCloudflareEmailRoutingDnsResultInfoOutputReference;
/**
* Represents a {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/data-sources/email_routing_dns cloudflare_email_routing_dns}
*/
var DataCloudflareEmailRoutingDns = /** @class */ (function (_super) {
    __extends(DataCloudflareEmailRoutingDns, _super);
    // ===========
    // INITIALIZER
    // ===========
    /**
    * Create a new {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/data-sources/email_routing_dns cloudflare_email_routing_dns} Data Source
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options DataCloudflareEmailRoutingDnsConfig = {}
    */
    function DataCloudflareEmailRoutingDns(scope, id, config) {
        if (config === void 0) { config = {}; }
        var _this = _super.call(this, scope, id, {
            terraformResourceType: 'cloudflare_email_routing_dns',
            terraformGeneratorMetadata: {
                providerName: 'cloudflare',
                providerVersion: '5.19.0'
            },
            provider: config.provider,
            dependsOn: config.dependsOn,
            count: config.count,
            lifecycle: config.lifecycle,
            provisioners: config.provisioners,
            connection: config.connection,
            forEach: config.forEach
        }) || this;
        // ==========
        // ATTRIBUTES
        // ==========
        // errors - computed: true, optional: false, required: false
        _this._errors = new DataCloudflareEmailRoutingDnsErrorsList(_this, "errors", false);
        // messages - computed: true, optional: false, required: false
        _this._messages = new DataCloudflareEmailRoutingDnsMessagesList(_this, "messages", false);
        // result - computed: true, optional: false, required: false
        _this._result = new DataCloudflareEmailRoutingDnsResultOutputReference(_this, "result");
        // result_info - computed: true, optional: false, required: false
        _this._resultInfo = new DataCloudflareEmailRoutingDnsResultInfoOutputReference(_this, "result_info");
        _this._subdomain = config.subdomain;
        _this._zoneId = config.zoneId;
        return _this;
    }
    // ==============
    // STATIC Methods
    // ==============
    /**
    * Generates CDKTF code for importing a DataCloudflareEmailRoutingDns resource upon running "cdktf plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the DataCloudflareEmailRoutingDns to import
    * @param importFromId The id of the existing DataCloudflareEmailRoutingDns that should be imported. Refer to the {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/data-sources/email_routing_dns#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the DataCloudflareEmailRoutingDns to import is found
    */
    DataCloudflareEmailRoutingDns.generateConfigForImport = function (scope, importToId, importFromId, provider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "cloudflare_email_routing_dns", importId: importFromId, provider: provider });
    };
    Object.defineProperty(DataCloudflareEmailRoutingDns.prototype, "errors", {
        get: function () {
            return this._errors;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareEmailRoutingDns.prototype, "id", {
        // id - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('id');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareEmailRoutingDns.prototype, "messages", {
        get: function () {
            return this._messages;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareEmailRoutingDns.prototype, "result", {
        get: function () {
            return this._result;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareEmailRoutingDns.prototype, "resultInfo", {
        get: function () {
            return this._resultInfo;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareEmailRoutingDns.prototype, "subdomain", {
        get: function () {
            return this.getStringAttribute('subdomain');
        },
        set: function (value) {
            this._subdomain = value;
        },
        enumerable: false,
        configurable: true
    });
    DataCloudflareEmailRoutingDns.prototype.resetSubdomain = function () {
        this._subdomain = undefined;
    };
    Object.defineProperty(DataCloudflareEmailRoutingDns.prototype, "subdomainInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._subdomain;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareEmailRoutingDns.prototype, "success", {
        // success - computed: true, optional: false, required: false
        get: function () {
            return this.getBooleanAttribute('success');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareEmailRoutingDns.prototype, "zoneId", {
        get: function () {
            return this.getStringAttribute('zone_id');
        },
        set: function (value) {
            this._zoneId = value;
        },
        enumerable: false,
        configurable: true
    });
    DataCloudflareEmailRoutingDns.prototype.resetZoneId = function () {
        this._zoneId = undefined;
    };
    Object.defineProperty(DataCloudflareEmailRoutingDns.prototype, "zoneIdInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._zoneId;
        },
        enumerable: false,
        configurable: true
    });
    // =========
    // SYNTHESIS
    // =========
    DataCloudflareEmailRoutingDns.prototype.synthesizeAttributes = function () {
        return {
            subdomain: cdktf.stringToTerraform(this._subdomain),
            zone_id: cdktf.stringToTerraform(this._zoneId),
        };
    };
    DataCloudflareEmailRoutingDns.prototype.synthesizeHclAttributes = function () {
        var attrs = {
            subdomain: {
                value: cdktf.stringToHclTerraform(this._subdomain),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            zone_id: {
                value: cdktf.stringToHclTerraform(this._zoneId),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
        };
        // remove undefined attributes
        return Object.fromEntries(Object.entries(attrs).filter(function (_a) {
            var _ = _a[0], value = _a[1];
            return value !== undefined && value.value !== undefined;
        }));
    };
    // =================
    // STATIC PROPERTIES
    // =================
    DataCloudflareEmailRoutingDns.tfResourceType = "cloudflare_email_routing_dns";
    return DataCloudflareEmailRoutingDns;
}(cdktf.TerraformDataSource));
exports.DataCloudflareEmailRoutingDns = DataCloudflareEmailRoutingDns;
