"use strict";
// https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/email_routing_dns
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
exports.EmailRoutingDns = exports.EmailRoutingDnsResultInfoOutputReference = exports.EmailRoutingDnsResultOutputReference = exports.EmailRoutingDnsResultRecordList = exports.EmailRoutingDnsResultRecordOutputReference = exports.EmailRoutingDnsResultErrorsList = exports.EmailRoutingDnsResultErrorsOutputReference = exports.EmailRoutingDnsResultErrorsMissingOutputReference = exports.EmailRoutingDnsMessagesList = exports.EmailRoutingDnsMessagesOutputReference = exports.EmailRoutingDnsMessagesSourceOutputReference = exports.EmailRoutingDnsErrorsList = exports.EmailRoutingDnsErrorsOutputReference = exports.EmailRoutingDnsErrorsSourceOutputReference = void 0;
exports.emailRoutingDnsErrorsSourceToTerraform = emailRoutingDnsErrorsSourceToTerraform;
exports.emailRoutingDnsErrorsSourceToHclTerraform = emailRoutingDnsErrorsSourceToHclTerraform;
exports.emailRoutingDnsErrorsToTerraform = emailRoutingDnsErrorsToTerraform;
exports.emailRoutingDnsErrorsToHclTerraform = emailRoutingDnsErrorsToHclTerraform;
exports.emailRoutingDnsMessagesSourceToTerraform = emailRoutingDnsMessagesSourceToTerraform;
exports.emailRoutingDnsMessagesSourceToHclTerraform = emailRoutingDnsMessagesSourceToHclTerraform;
exports.emailRoutingDnsMessagesToTerraform = emailRoutingDnsMessagesToTerraform;
exports.emailRoutingDnsMessagesToHclTerraform = emailRoutingDnsMessagesToHclTerraform;
exports.emailRoutingDnsResultErrorsMissingToTerraform = emailRoutingDnsResultErrorsMissingToTerraform;
exports.emailRoutingDnsResultErrorsMissingToHclTerraform = emailRoutingDnsResultErrorsMissingToHclTerraform;
exports.emailRoutingDnsResultErrorsToTerraform = emailRoutingDnsResultErrorsToTerraform;
exports.emailRoutingDnsResultErrorsToHclTerraform = emailRoutingDnsResultErrorsToHclTerraform;
exports.emailRoutingDnsResultRecordToTerraform = emailRoutingDnsResultRecordToTerraform;
exports.emailRoutingDnsResultRecordToHclTerraform = emailRoutingDnsResultRecordToHclTerraform;
exports.emailRoutingDnsResultToTerraform = emailRoutingDnsResultToTerraform;
exports.emailRoutingDnsResultToHclTerraform = emailRoutingDnsResultToHclTerraform;
exports.emailRoutingDnsResultInfoToTerraform = emailRoutingDnsResultInfoToTerraform;
exports.emailRoutingDnsResultInfoToHclTerraform = emailRoutingDnsResultInfoToHclTerraform;
var cdktf = require("cdktf");
function emailRoutingDnsErrorsSourceToTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {};
}
function emailRoutingDnsErrorsSourceToHclTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    var attrs = {};
    return attrs;
}
var EmailRoutingDnsErrorsSourceOutputReference = /** @class */ (function (_super) {
    __extends(EmailRoutingDnsErrorsSourceOutputReference, _super);
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    function EmailRoutingDnsErrorsSourceOutputReference(terraformResource, terraformAttribute) {
        var _this = _super.call(this, terraformResource, terraformAttribute, false) || this;
        _this.isEmptyObject = false;
        return _this;
    }
    Object.defineProperty(EmailRoutingDnsErrorsSourceOutputReference.prototype, "internalValue", {
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
    Object.defineProperty(EmailRoutingDnsErrorsSourceOutputReference.prototype, "pointer", {
        // pointer - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('pointer');
        },
        enumerable: false,
        configurable: true
    });
    return EmailRoutingDnsErrorsSourceOutputReference;
}(cdktf.ComplexObject));
exports.EmailRoutingDnsErrorsSourceOutputReference = EmailRoutingDnsErrorsSourceOutputReference;
function emailRoutingDnsErrorsToTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {};
}
function emailRoutingDnsErrorsToHclTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    var attrs = {};
    return attrs;
}
var EmailRoutingDnsErrorsOutputReference = /** @class */ (function (_super) {
    __extends(EmailRoutingDnsErrorsOutputReference, _super);
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    function EmailRoutingDnsErrorsOutputReference(terraformResource, terraformAttribute, complexObjectIndex, complexObjectIsFromSet) {
        var _this = _super.call(this, terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex) || this;
        _this.isEmptyObject = false;
        // source - computed: true, optional: false, required: false
        _this._source = new EmailRoutingDnsErrorsSourceOutputReference(_this, "source");
        return _this;
    }
    Object.defineProperty(EmailRoutingDnsErrorsOutputReference.prototype, "internalValue", {
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
    Object.defineProperty(EmailRoutingDnsErrorsOutputReference.prototype, "code", {
        // code - computed: true, optional: false, required: false
        get: function () {
            return this.getNumberAttribute('code');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(EmailRoutingDnsErrorsOutputReference.prototype, "documentationUrl", {
        // documentation_url - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('documentation_url');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(EmailRoutingDnsErrorsOutputReference.prototype, "message", {
        // message - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('message');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(EmailRoutingDnsErrorsOutputReference.prototype, "source", {
        get: function () {
            return this._source;
        },
        enumerable: false,
        configurable: true
    });
    return EmailRoutingDnsErrorsOutputReference;
}(cdktf.ComplexObject));
exports.EmailRoutingDnsErrorsOutputReference = EmailRoutingDnsErrorsOutputReference;
var EmailRoutingDnsErrorsList = /** @class */ (function (_super) {
    __extends(EmailRoutingDnsErrorsList, _super);
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    function EmailRoutingDnsErrorsList(terraformResource, terraformAttribute, wrapsSet) {
        var _this = _super.call(this, terraformResource, terraformAttribute, wrapsSet) || this;
        _this.terraformResource = terraformResource;
        _this.terraformAttribute = terraformAttribute;
        _this.wrapsSet = wrapsSet;
        return _this;
    }
    /**
    * @param index the index of the item to return
    */
    EmailRoutingDnsErrorsList.prototype.get = function (index) {
        return new EmailRoutingDnsErrorsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
    };
    return EmailRoutingDnsErrorsList;
}(cdktf.ComplexList));
exports.EmailRoutingDnsErrorsList = EmailRoutingDnsErrorsList;
function emailRoutingDnsMessagesSourceToTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {};
}
function emailRoutingDnsMessagesSourceToHclTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    var attrs = {};
    return attrs;
}
var EmailRoutingDnsMessagesSourceOutputReference = /** @class */ (function (_super) {
    __extends(EmailRoutingDnsMessagesSourceOutputReference, _super);
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    function EmailRoutingDnsMessagesSourceOutputReference(terraformResource, terraformAttribute) {
        var _this = _super.call(this, terraformResource, terraformAttribute, false) || this;
        _this.isEmptyObject = false;
        return _this;
    }
    Object.defineProperty(EmailRoutingDnsMessagesSourceOutputReference.prototype, "internalValue", {
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
    Object.defineProperty(EmailRoutingDnsMessagesSourceOutputReference.prototype, "pointer", {
        // pointer - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('pointer');
        },
        enumerable: false,
        configurable: true
    });
    return EmailRoutingDnsMessagesSourceOutputReference;
}(cdktf.ComplexObject));
exports.EmailRoutingDnsMessagesSourceOutputReference = EmailRoutingDnsMessagesSourceOutputReference;
function emailRoutingDnsMessagesToTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {};
}
function emailRoutingDnsMessagesToHclTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    var attrs = {};
    return attrs;
}
var EmailRoutingDnsMessagesOutputReference = /** @class */ (function (_super) {
    __extends(EmailRoutingDnsMessagesOutputReference, _super);
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    function EmailRoutingDnsMessagesOutputReference(terraformResource, terraformAttribute, complexObjectIndex, complexObjectIsFromSet) {
        var _this = _super.call(this, terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex) || this;
        _this.isEmptyObject = false;
        // source - computed: true, optional: false, required: false
        _this._source = new EmailRoutingDnsMessagesSourceOutputReference(_this, "source");
        return _this;
    }
    Object.defineProperty(EmailRoutingDnsMessagesOutputReference.prototype, "internalValue", {
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
    Object.defineProperty(EmailRoutingDnsMessagesOutputReference.prototype, "code", {
        // code - computed: true, optional: false, required: false
        get: function () {
            return this.getNumberAttribute('code');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(EmailRoutingDnsMessagesOutputReference.prototype, "documentationUrl", {
        // documentation_url - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('documentation_url');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(EmailRoutingDnsMessagesOutputReference.prototype, "message", {
        // message - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('message');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(EmailRoutingDnsMessagesOutputReference.prototype, "source", {
        get: function () {
            return this._source;
        },
        enumerable: false,
        configurable: true
    });
    return EmailRoutingDnsMessagesOutputReference;
}(cdktf.ComplexObject));
exports.EmailRoutingDnsMessagesOutputReference = EmailRoutingDnsMessagesOutputReference;
var EmailRoutingDnsMessagesList = /** @class */ (function (_super) {
    __extends(EmailRoutingDnsMessagesList, _super);
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    function EmailRoutingDnsMessagesList(terraformResource, terraformAttribute, wrapsSet) {
        var _this = _super.call(this, terraformResource, terraformAttribute, wrapsSet) || this;
        _this.terraformResource = terraformResource;
        _this.terraformAttribute = terraformAttribute;
        _this.wrapsSet = wrapsSet;
        return _this;
    }
    /**
    * @param index the index of the item to return
    */
    EmailRoutingDnsMessagesList.prototype.get = function (index) {
        return new EmailRoutingDnsMessagesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
    };
    return EmailRoutingDnsMessagesList;
}(cdktf.ComplexList));
exports.EmailRoutingDnsMessagesList = EmailRoutingDnsMessagesList;
function emailRoutingDnsResultErrorsMissingToTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {};
}
function emailRoutingDnsResultErrorsMissingToHclTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    var attrs = {};
    return attrs;
}
var EmailRoutingDnsResultErrorsMissingOutputReference = /** @class */ (function (_super) {
    __extends(EmailRoutingDnsResultErrorsMissingOutputReference, _super);
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    function EmailRoutingDnsResultErrorsMissingOutputReference(terraformResource, terraformAttribute) {
        var _this = _super.call(this, terraformResource, terraformAttribute, false) || this;
        _this.isEmptyObject = false;
        return _this;
    }
    Object.defineProperty(EmailRoutingDnsResultErrorsMissingOutputReference.prototype, "internalValue", {
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
    Object.defineProperty(EmailRoutingDnsResultErrorsMissingOutputReference.prototype, "content", {
        // content - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('content');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(EmailRoutingDnsResultErrorsMissingOutputReference.prototype, "name", {
        // name - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('name');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(EmailRoutingDnsResultErrorsMissingOutputReference.prototype, "priority", {
        // priority - computed: true, optional: false, required: false
        get: function () {
            return this.getNumberAttribute('priority');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(EmailRoutingDnsResultErrorsMissingOutputReference.prototype, "ttl", {
        // ttl - computed: true, optional: false, required: false
        get: function () {
            return this.getNumberAttribute('ttl');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(EmailRoutingDnsResultErrorsMissingOutputReference.prototype, "type", {
        // type - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('type');
        },
        enumerable: false,
        configurable: true
    });
    return EmailRoutingDnsResultErrorsMissingOutputReference;
}(cdktf.ComplexObject));
exports.EmailRoutingDnsResultErrorsMissingOutputReference = EmailRoutingDnsResultErrorsMissingOutputReference;
function emailRoutingDnsResultErrorsToTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {};
}
function emailRoutingDnsResultErrorsToHclTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    var attrs = {};
    return attrs;
}
var EmailRoutingDnsResultErrorsOutputReference = /** @class */ (function (_super) {
    __extends(EmailRoutingDnsResultErrorsOutputReference, _super);
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    function EmailRoutingDnsResultErrorsOutputReference(terraformResource, terraformAttribute, complexObjectIndex, complexObjectIsFromSet) {
        var _this = _super.call(this, terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex) || this;
        _this.isEmptyObject = false;
        // missing - computed: true, optional: false, required: false
        _this._missing = new EmailRoutingDnsResultErrorsMissingOutputReference(_this, "missing");
        return _this;
    }
    Object.defineProperty(EmailRoutingDnsResultErrorsOutputReference.prototype, "internalValue", {
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
    Object.defineProperty(EmailRoutingDnsResultErrorsOutputReference.prototype, "code", {
        // code - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('code');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(EmailRoutingDnsResultErrorsOutputReference.prototype, "missing", {
        get: function () {
            return this._missing;
        },
        enumerable: false,
        configurable: true
    });
    return EmailRoutingDnsResultErrorsOutputReference;
}(cdktf.ComplexObject));
exports.EmailRoutingDnsResultErrorsOutputReference = EmailRoutingDnsResultErrorsOutputReference;
var EmailRoutingDnsResultErrorsList = /** @class */ (function (_super) {
    __extends(EmailRoutingDnsResultErrorsList, _super);
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    function EmailRoutingDnsResultErrorsList(terraformResource, terraformAttribute, wrapsSet) {
        var _this = _super.call(this, terraformResource, terraformAttribute, wrapsSet) || this;
        _this.terraformResource = terraformResource;
        _this.terraformAttribute = terraformAttribute;
        _this.wrapsSet = wrapsSet;
        return _this;
    }
    /**
    * @param index the index of the item to return
    */
    EmailRoutingDnsResultErrorsList.prototype.get = function (index) {
        return new EmailRoutingDnsResultErrorsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
    };
    return EmailRoutingDnsResultErrorsList;
}(cdktf.ComplexList));
exports.EmailRoutingDnsResultErrorsList = EmailRoutingDnsResultErrorsList;
function emailRoutingDnsResultRecordToTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {};
}
function emailRoutingDnsResultRecordToHclTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    var attrs = {};
    return attrs;
}
var EmailRoutingDnsResultRecordOutputReference = /** @class */ (function (_super) {
    __extends(EmailRoutingDnsResultRecordOutputReference, _super);
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    function EmailRoutingDnsResultRecordOutputReference(terraformResource, terraformAttribute, complexObjectIndex, complexObjectIsFromSet) {
        var _this = _super.call(this, terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex) || this;
        _this.isEmptyObject = false;
        return _this;
    }
    Object.defineProperty(EmailRoutingDnsResultRecordOutputReference.prototype, "internalValue", {
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
    Object.defineProperty(EmailRoutingDnsResultRecordOutputReference.prototype, "content", {
        // content - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('content');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(EmailRoutingDnsResultRecordOutputReference.prototype, "name", {
        // name - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('name');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(EmailRoutingDnsResultRecordOutputReference.prototype, "priority", {
        // priority - computed: true, optional: false, required: false
        get: function () {
            return this.getNumberAttribute('priority');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(EmailRoutingDnsResultRecordOutputReference.prototype, "ttl", {
        // ttl - computed: true, optional: false, required: false
        get: function () {
            return this.getNumberAttribute('ttl');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(EmailRoutingDnsResultRecordOutputReference.prototype, "type", {
        // type - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('type');
        },
        enumerable: false,
        configurable: true
    });
    return EmailRoutingDnsResultRecordOutputReference;
}(cdktf.ComplexObject));
exports.EmailRoutingDnsResultRecordOutputReference = EmailRoutingDnsResultRecordOutputReference;
var EmailRoutingDnsResultRecordList = /** @class */ (function (_super) {
    __extends(EmailRoutingDnsResultRecordList, _super);
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    function EmailRoutingDnsResultRecordList(terraformResource, terraformAttribute, wrapsSet) {
        var _this = _super.call(this, terraformResource, terraformAttribute, wrapsSet) || this;
        _this.terraformResource = terraformResource;
        _this.terraformAttribute = terraformAttribute;
        _this.wrapsSet = wrapsSet;
        return _this;
    }
    /**
    * @param index the index of the item to return
    */
    EmailRoutingDnsResultRecordList.prototype.get = function (index) {
        return new EmailRoutingDnsResultRecordOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
    };
    return EmailRoutingDnsResultRecordList;
}(cdktf.ComplexList));
exports.EmailRoutingDnsResultRecordList = EmailRoutingDnsResultRecordList;
function emailRoutingDnsResultToTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {};
}
function emailRoutingDnsResultToHclTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    var attrs = {};
    return attrs;
}
var EmailRoutingDnsResultOutputReference = /** @class */ (function (_super) {
    __extends(EmailRoutingDnsResultOutputReference, _super);
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    function EmailRoutingDnsResultOutputReference(terraformResource, terraformAttribute) {
        var _this = _super.call(this, terraformResource, terraformAttribute, false) || this;
        _this.isEmptyObject = false;
        // errors - computed: true, optional: false, required: false
        _this._errors = new EmailRoutingDnsResultErrorsList(_this, "errors", false);
        // record - computed: true, optional: false, required: false
        _this._record = new EmailRoutingDnsResultRecordList(_this, "record", false);
        return _this;
    }
    Object.defineProperty(EmailRoutingDnsResultOutputReference.prototype, "internalValue", {
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
    Object.defineProperty(EmailRoutingDnsResultOutputReference.prototype, "content", {
        // content - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('content');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(EmailRoutingDnsResultOutputReference.prototype, "errors", {
        get: function () {
            return this._errors;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(EmailRoutingDnsResultOutputReference.prototype, "name", {
        // name - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('name');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(EmailRoutingDnsResultOutputReference.prototype, "priority", {
        // priority - computed: true, optional: false, required: false
        get: function () {
            return this.getNumberAttribute('priority');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(EmailRoutingDnsResultOutputReference.prototype, "record", {
        get: function () {
            return this._record;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(EmailRoutingDnsResultOutputReference.prototype, "ttl", {
        // ttl - computed: true, optional: false, required: false
        get: function () {
            return this.getNumberAttribute('ttl');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(EmailRoutingDnsResultOutputReference.prototype, "type", {
        // type - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('type');
        },
        enumerable: false,
        configurable: true
    });
    return EmailRoutingDnsResultOutputReference;
}(cdktf.ComplexObject));
exports.EmailRoutingDnsResultOutputReference = EmailRoutingDnsResultOutputReference;
function emailRoutingDnsResultInfoToTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {};
}
function emailRoutingDnsResultInfoToHclTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    var attrs = {};
    return attrs;
}
var EmailRoutingDnsResultInfoOutputReference = /** @class */ (function (_super) {
    __extends(EmailRoutingDnsResultInfoOutputReference, _super);
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    function EmailRoutingDnsResultInfoOutputReference(terraformResource, terraformAttribute) {
        var _this = _super.call(this, terraformResource, terraformAttribute, false) || this;
        _this.isEmptyObject = false;
        return _this;
    }
    Object.defineProperty(EmailRoutingDnsResultInfoOutputReference.prototype, "internalValue", {
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
    Object.defineProperty(EmailRoutingDnsResultInfoOutputReference.prototype, "emailRoutingDnsCount", {
        // email_routing_dns_count - computed: true, optional: false, required: false
        get: function () {
            return this.getNumberAttribute('email_routing_dns_count');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(EmailRoutingDnsResultInfoOutputReference.prototype, "page", {
        // page - computed: true, optional: false, required: false
        get: function () {
            return this.getNumberAttribute('page');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(EmailRoutingDnsResultInfoOutputReference.prototype, "perPage", {
        // per_page - computed: true, optional: false, required: false
        get: function () {
            return this.getNumberAttribute('per_page');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(EmailRoutingDnsResultInfoOutputReference.prototype, "totalCount", {
        // total_count - computed: true, optional: false, required: false
        get: function () {
            return this.getNumberAttribute('total_count');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(EmailRoutingDnsResultInfoOutputReference.prototype, "totalPages", {
        // total_pages - computed: true, optional: false, required: false
        get: function () {
            return this.getNumberAttribute('total_pages');
        },
        enumerable: false,
        configurable: true
    });
    return EmailRoutingDnsResultInfoOutputReference;
}(cdktf.ComplexObject));
exports.EmailRoutingDnsResultInfoOutputReference = EmailRoutingDnsResultInfoOutputReference;
/**
* Represents a {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/email_routing_dns cloudflare_email_routing_dns}
*/
var EmailRoutingDns = /** @class */ (function (_super) {
    __extends(EmailRoutingDns, _super);
    // ===========
    // INITIALIZER
    // ===========
    /**
    * Create a new {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/email_routing_dns cloudflare_email_routing_dns} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options EmailRoutingDnsConfig
    */
    function EmailRoutingDns(scope, id, config) {
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
        // errors - computed: true, optional: false, required: false
        _this._errors = new EmailRoutingDnsErrorsList(_this, "errors", false);
        // messages - computed: true, optional: false, required: false
        _this._messages = new EmailRoutingDnsMessagesList(_this, "messages", false);
        // result - computed: true, optional: false, required: false
        _this._result = new EmailRoutingDnsResultOutputReference(_this, "result");
        // result_info - computed: true, optional: false, required: false
        _this._resultInfo = new EmailRoutingDnsResultInfoOutputReference(_this, "result_info");
        _this._name = config.name;
        _this._zoneId = config.zoneId;
        return _this;
    }
    // ==============
    // STATIC Methods
    // ==============
    /**
    * Generates CDKTF code for importing a EmailRoutingDns resource upon running "cdktf plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the EmailRoutingDns to import
    * @param importFromId The id of the existing EmailRoutingDns that should be imported. Refer to the {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/email_routing_dns#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the EmailRoutingDns to import is found
    */
    EmailRoutingDns.generateConfigForImport = function (scope, importToId, importFromId, provider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "cloudflare_email_routing_dns", importId: importFromId, provider: provider });
    };
    Object.defineProperty(EmailRoutingDns.prototype, "created", {
        // ==========
        // ATTRIBUTES
        // ==========
        // created - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('created');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(EmailRoutingDns.prototype, "enabled", {
        // enabled - computed: true, optional: false, required: false
        get: function () {
            return this.getBooleanAttribute('enabled');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(EmailRoutingDns.prototype, "errors", {
        get: function () {
            return this._errors;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(EmailRoutingDns.prototype, "id", {
        // id - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('id');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(EmailRoutingDns.prototype, "messages", {
        get: function () {
            return this._messages;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(EmailRoutingDns.prototype, "modified", {
        // modified - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('modified');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(EmailRoutingDns.prototype, "name", {
        get: function () {
            return this.getStringAttribute('name');
        },
        set: function (value) {
            this._name = value;
        },
        enumerable: false,
        configurable: true
    });
    EmailRoutingDns.prototype.resetName = function () {
        this._name = undefined;
    };
    Object.defineProperty(EmailRoutingDns.prototype, "nameInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._name;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(EmailRoutingDns.prototype, "result", {
        get: function () {
            return this._result;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(EmailRoutingDns.prototype, "resultInfo", {
        get: function () {
            return this._resultInfo;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(EmailRoutingDns.prototype, "skipWizard", {
        // skip_wizard - computed: true, optional: false, required: false
        get: function () {
            return this.getBooleanAttribute('skip_wizard');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(EmailRoutingDns.prototype, "status", {
        // status - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('status');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(EmailRoutingDns.prototype, "success", {
        // success - computed: true, optional: false, required: false
        get: function () {
            return this.getBooleanAttribute('success');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(EmailRoutingDns.prototype, "tag", {
        // tag - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('tag');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(EmailRoutingDns.prototype, "zoneId", {
        get: function () {
            return this.getStringAttribute('zone_id');
        },
        set: function (value) {
            this._zoneId = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(EmailRoutingDns.prototype, "zoneIdInput", {
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
    EmailRoutingDns.prototype.synthesizeAttributes = function () {
        return {
            name: cdktf.stringToTerraform(this._name),
            zone_id: cdktf.stringToTerraform(this._zoneId),
        };
    };
    EmailRoutingDns.prototype.synthesizeHclAttributes = function () {
        var attrs = {
            name: {
                value: cdktf.stringToHclTerraform(this._name),
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
    EmailRoutingDns.tfResourceType = "cloudflare_email_routing_dns";
    return EmailRoutingDns;
}(cdktf.TerraformResource));
exports.EmailRoutingDns = EmailRoutingDns;
