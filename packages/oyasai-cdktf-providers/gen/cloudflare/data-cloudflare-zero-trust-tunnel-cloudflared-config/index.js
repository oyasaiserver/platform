"use strict";
// https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/data-sources/zero_trust_tunnel_cloudflared_config
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
exports.DataCloudflareZeroTrustTunnelCloudflaredConfigA = exports.DataCloudflareZeroTrustTunnelCloudflaredConfigConfigOutputReference = exports.DataCloudflareZeroTrustTunnelCloudflaredConfigConfigOriginRequestOutputReference = exports.DataCloudflareZeroTrustTunnelCloudflaredConfigConfigOriginRequestAccessOutputReference = exports.DataCloudflareZeroTrustTunnelCloudflaredConfigConfigIngressList = exports.DataCloudflareZeroTrustTunnelCloudflaredConfigConfigIngressOutputReference = exports.DataCloudflareZeroTrustTunnelCloudflaredConfigConfigIngressOriginRequestOutputReference = exports.DataCloudflareZeroTrustTunnelCloudflaredConfigConfigIngressOriginRequestAccessOutputReference = void 0;
exports.dataCloudflareZeroTrustTunnelCloudflaredConfigConfigIngressOriginRequestAccessToTerraform = dataCloudflareZeroTrustTunnelCloudflaredConfigConfigIngressOriginRequestAccessToTerraform;
exports.dataCloudflareZeroTrustTunnelCloudflaredConfigConfigIngressOriginRequestAccessToHclTerraform = dataCloudflareZeroTrustTunnelCloudflaredConfigConfigIngressOriginRequestAccessToHclTerraform;
exports.dataCloudflareZeroTrustTunnelCloudflaredConfigConfigIngressOriginRequestToTerraform = dataCloudflareZeroTrustTunnelCloudflaredConfigConfigIngressOriginRequestToTerraform;
exports.dataCloudflareZeroTrustTunnelCloudflaredConfigConfigIngressOriginRequestToHclTerraform = dataCloudflareZeroTrustTunnelCloudflaredConfigConfigIngressOriginRequestToHclTerraform;
exports.dataCloudflareZeroTrustTunnelCloudflaredConfigConfigIngressToTerraform = dataCloudflareZeroTrustTunnelCloudflaredConfigConfigIngressToTerraform;
exports.dataCloudflareZeroTrustTunnelCloudflaredConfigConfigIngressToHclTerraform = dataCloudflareZeroTrustTunnelCloudflaredConfigConfigIngressToHclTerraform;
exports.dataCloudflareZeroTrustTunnelCloudflaredConfigConfigOriginRequestAccessToTerraform = dataCloudflareZeroTrustTunnelCloudflaredConfigConfigOriginRequestAccessToTerraform;
exports.dataCloudflareZeroTrustTunnelCloudflaredConfigConfigOriginRequestAccessToHclTerraform = dataCloudflareZeroTrustTunnelCloudflaredConfigConfigOriginRequestAccessToHclTerraform;
exports.dataCloudflareZeroTrustTunnelCloudflaredConfigConfigOriginRequestToTerraform = dataCloudflareZeroTrustTunnelCloudflaredConfigConfigOriginRequestToTerraform;
exports.dataCloudflareZeroTrustTunnelCloudflaredConfigConfigOriginRequestToHclTerraform = dataCloudflareZeroTrustTunnelCloudflaredConfigConfigOriginRequestToHclTerraform;
exports.dataCloudflareZeroTrustTunnelCloudflaredConfigConfigToTerraform = dataCloudflareZeroTrustTunnelCloudflaredConfigConfigToTerraform;
exports.dataCloudflareZeroTrustTunnelCloudflaredConfigConfigToHclTerraform = dataCloudflareZeroTrustTunnelCloudflaredConfigConfigToHclTerraform;
var cdktf = require("cdktf");
function dataCloudflareZeroTrustTunnelCloudflaredConfigConfigIngressOriginRequestAccessToTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {};
}
function dataCloudflareZeroTrustTunnelCloudflaredConfigConfigIngressOriginRequestAccessToHclTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    var attrs = {};
    return attrs;
}
var DataCloudflareZeroTrustTunnelCloudflaredConfigConfigIngressOriginRequestAccessOutputReference = /** @class */ (function (_super) {
    __extends(DataCloudflareZeroTrustTunnelCloudflaredConfigConfigIngressOriginRequestAccessOutputReference, _super);
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    function DataCloudflareZeroTrustTunnelCloudflaredConfigConfigIngressOriginRequestAccessOutputReference(terraformResource, terraformAttribute) {
        var _this = _super.call(this, terraformResource, terraformAttribute, false) || this;
        _this.isEmptyObject = false;
        return _this;
    }
    Object.defineProperty(DataCloudflareZeroTrustTunnelCloudflaredConfigConfigIngressOriginRequestAccessOutputReference.prototype, "internalValue", {
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
    Object.defineProperty(DataCloudflareZeroTrustTunnelCloudflaredConfigConfigIngressOriginRequestAccessOutputReference.prototype, "audTag", {
        // aud_tag - computed: true, optional: false, required: false
        get: function () {
            return this.getListAttribute('aud_tag');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareZeroTrustTunnelCloudflaredConfigConfigIngressOriginRequestAccessOutputReference.prototype, "required", {
        // required - computed: true, optional: false, required: false
        get: function () {
            return this.getBooleanAttribute('required');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareZeroTrustTunnelCloudflaredConfigConfigIngressOriginRequestAccessOutputReference.prototype, "teamName", {
        // team_name - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('team_name');
        },
        enumerable: false,
        configurable: true
    });
    return DataCloudflareZeroTrustTunnelCloudflaredConfigConfigIngressOriginRequestAccessOutputReference;
}(cdktf.ComplexObject));
exports.DataCloudflareZeroTrustTunnelCloudflaredConfigConfigIngressOriginRequestAccessOutputReference = DataCloudflareZeroTrustTunnelCloudflaredConfigConfigIngressOriginRequestAccessOutputReference;
function dataCloudflareZeroTrustTunnelCloudflaredConfigConfigIngressOriginRequestToTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {};
}
function dataCloudflareZeroTrustTunnelCloudflaredConfigConfigIngressOriginRequestToHclTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    var attrs = {};
    return attrs;
}
var DataCloudflareZeroTrustTunnelCloudflaredConfigConfigIngressOriginRequestOutputReference = /** @class */ (function (_super) {
    __extends(DataCloudflareZeroTrustTunnelCloudflaredConfigConfigIngressOriginRequestOutputReference, _super);
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    function DataCloudflareZeroTrustTunnelCloudflaredConfigConfigIngressOriginRequestOutputReference(terraformResource, terraformAttribute) {
        var _this = _super.call(this, terraformResource, terraformAttribute, false) || this;
        _this.isEmptyObject = false;
        // access - computed: true, optional: false, required: false
        _this._access = new DataCloudflareZeroTrustTunnelCloudflaredConfigConfigIngressOriginRequestAccessOutputReference(_this, "access");
        return _this;
    }
    Object.defineProperty(DataCloudflareZeroTrustTunnelCloudflaredConfigConfigIngressOriginRequestOutputReference.prototype, "internalValue", {
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
    Object.defineProperty(DataCloudflareZeroTrustTunnelCloudflaredConfigConfigIngressOriginRequestOutputReference.prototype, "access", {
        get: function () {
            return this._access;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareZeroTrustTunnelCloudflaredConfigConfigIngressOriginRequestOutputReference.prototype, "caPool", {
        // ca_pool - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('ca_pool');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareZeroTrustTunnelCloudflaredConfigConfigIngressOriginRequestOutputReference.prototype, "connectTimeout", {
        // connect_timeout - computed: true, optional: false, required: false
        get: function () {
            return this.getNumberAttribute('connect_timeout');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareZeroTrustTunnelCloudflaredConfigConfigIngressOriginRequestOutputReference.prototype, "disableChunkedEncoding", {
        // disable_chunked_encoding - computed: true, optional: false, required: false
        get: function () {
            return this.getBooleanAttribute('disable_chunked_encoding');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareZeroTrustTunnelCloudflaredConfigConfigIngressOriginRequestOutputReference.prototype, "http2Origin", {
        // http2_origin - computed: true, optional: false, required: false
        get: function () {
            return this.getBooleanAttribute('http2_origin');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareZeroTrustTunnelCloudflaredConfigConfigIngressOriginRequestOutputReference.prototype, "httpHostHeader", {
        // http_host_header - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('http_host_header');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareZeroTrustTunnelCloudflaredConfigConfigIngressOriginRequestOutputReference.prototype, "keepAliveConnections", {
        // keep_alive_connections - computed: true, optional: false, required: false
        get: function () {
            return this.getNumberAttribute('keep_alive_connections');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareZeroTrustTunnelCloudflaredConfigConfigIngressOriginRequestOutputReference.prototype, "keepAliveTimeout", {
        // keep_alive_timeout - computed: true, optional: false, required: false
        get: function () {
            return this.getNumberAttribute('keep_alive_timeout');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareZeroTrustTunnelCloudflaredConfigConfigIngressOriginRequestOutputReference.prototype, "matchSnItoHost", {
        // match_sn_ito_host - computed: true, optional: false, required: false
        get: function () {
            return this.getBooleanAttribute('match_sn_ito_host');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareZeroTrustTunnelCloudflaredConfigConfigIngressOriginRequestOutputReference.prototype, "noHappyEyeballs", {
        // no_happy_eyeballs - computed: true, optional: false, required: false
        get: function () {
            return this.getBooleanAttribute('no_happy_eyeballs');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareZeroTrustTunnelCloudflaredConfigConfigIngressOriginRequestOutputReference.prototype, "noTlsVerify", {
        // no_tls_verify - computed: true, optional: false, required: false
        get: function () {
            return this.getBooleanAttribute('no_tls_verify');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareZeroTrustTunnelCloudflaredConfigConfigIngressOriginRequestOutputReference.prototype, "originServerName", {
        // origin_server_name - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('origin_server_name');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareZeroTrustTunnelCloudflaredConfigConfigIngressOriginRequestOutputReference.prototype, "proxyType", {
        // proxy_type - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('proxy_type');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareZeroTrustTunnelCloudflaredConfigConfigIngressOriginRequestOutputReference.prototype, "tcpKeepAlive", {
        // tcp_keep_alive - computed: true, optional: false, required: false
        get: function () {
            return this.getNumberAttribute('tcp_keep_alive');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareZeroTrustTunnelCloudflaredConfigConfigIngressOriginRequestOutputReference.prototype, "tlsTimeout", {
        // tls_timeout - computed: true, optional: false, required: false
        get: function () {
            return this.getNumberAttribute('tls_timeout');
        },
        enumerable: false,
        configurable: true
    });
    return DataCloudflareZeroTrustTunnelCloudflaredConfigConfigIngressOriginRequestOutputReference;
}(cdktf.ComplexObject));
exports.DataCloudflareZeroTrustTunnelCloudflaredConfigConfigIngressOriginRequestOutputReference = DataCloudflareZeroTrustTunnelCloudflaredConfigConfigIngressOriginRequestOutputReference;
function dataCloudflareZeroTrustTunnelCloudflaredConfigConfigIngressToTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {};
}
function dataCloudflareZeroTrustTunnelCloudflaredConfigConfigIngressToHclTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    var attrs = {};
    return attrs;
}
var DataCloudflareZeroTrustTunnelCloudflaredConfigConfigIngressOutputReference = /** @class */ (function (_super) {
    __extends(DataCloudflareZeroTrustTunnelCloudflaredConfigConfigIngressOutputReference, _super);
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    function DataCloudflareZeroTrustTunnelCloudflaredConfigConfigIngressOutputReference(terraformResource, terraformAttribute, complexObjectIndex, complexObjectIsFromSet) {
        var _this = _super.call(this, terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex) || this;
        _this.isEmptyObject = false;
        // origin_request - computed: true, optional: false, required: false
        _this._originRequest = new DataCloudflareZeroTrustTunnelCloudflaredConfigConfigIngressOriginRequestOutputReference(_this, "origin_request");
        return _this;
    }
    Object.defineProperty(DataCloudflareZeroTrustTunnelCloudflaredConfigConfigIngressOutputReference.prototype, "internalValue", {
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
    Object.defineProperty(DataCloudflareZeroTrustTunnelCloudflaredConfigConfigIngressOutputReference.prototype, "hostname", {
        // hostname - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('hostname');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareZeroTrustTunnelCloudflaredConfigConfigIngressOutputReference.prototype, "originRequest", {
        get: function () {
            return this._originRequest;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareZeroTrustTunnelCloudflaredConfigConfigIngressOutputReference.prototype, "path", {
        // path - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('path');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareZeroTrustTunnelCloudflaredConfigConfigIngressOutputReference.prototype, "service", {
        // service - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('service');
        },
        enumerable: false,
        configurable: true
    });
    return DataCloudflareZeroTrustTunnelCloudflaredConfigConfigIngressOutputReference;
}(cdktf.ComplexObject));
exports.DataCloudflareZeroTrustTunnelCloudflaredConfigConfigIngressOutputReference = DataCloudflareZeroTrustTunnelCloudflaredConfigConfigIngressOutputReference;
var DataCloudflareZeroTrustTunnelCloudflaredConfigConfigIngressList = /** @class */ (function (_super) {
    __extends(DataCloudflareZeroTrustTunnelCloudflaredConfigConfigIngressList, _super);
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    function DataCloudflareZeroTrustTunnelCloudflaredConfigConfigIngressList(terraformResource, terraformAttribute, wrapsSet) {
        var _this = _super.call(this, terraformResource, terraformAttribute, wrapsSet) || this;
        _this.terraformResource = terraformResource;
        _this.terraformAttribute = terraformAttribute;
        _this.wrapsSet = wrapsSet;
        return _this;
    }
    /**
    * @param index the index of the item to return
    */
    DataCloudflareZeroTrustTunnelCloudflaredConfigConfigIngressList.prototype.get = function (index) {
        return new DataCloudflareZeroTrustTunnelCloudflaredConfigConfigIngressOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
    };
    return DataCloudflareZeroTrustTunnelCloudflaredConfigConfigIngressList;
}(cdktf.ComplexList));
exports.DataCloudflareZeroTrustTunnelCloudflaredConfigConfigIngressList = DataCloudflareZeroTrustTunnelCloudflaredConfigConfigIngressList;
function dataCloudflareZeroTrustTunnelCloudflaredConfigConfigOriginRequestAccessToTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {};
}
function dataCloudflareZeroTrustTunnelCloudflaredConfigConfigOriginRequestAccessToHclTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    var attrs = {};
    return attrs;
}
var DataCloudflareZeroTrustTunnelCloudflaredConfigConfigOriginRequestAccessOutputReference = /** @class */ (function (_super) {
    __extends(DataCloudflareZeroTrustTunnelCloudflaredConfigConfigOriginRequestAccessOutputReference, _super);
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    function DataCloudflareZeroTrustTunnelCloudflaredConfigConfigOriginRequestAccessOutputReference(terraformResource, terraformAttribute) {
        var _this = _super.call(this, terraformResource, terraformAttribute, false) || this;
        _this.isEmptyObject = false;
        return _this;
    }
    Object.defineProperty(DataCloudflareZeroTrustTunnelCloudflaredConfigConfigOriginRequestAccessOutputReference.prototype, "internalValue", {
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
    Object.defineProperty(DataCloudflareZeroTrustTunnelCloudflaredConfigConfigOriginRequestAccessOutputReference.prototype, "audTag", {
        // aud_tag - computed: true, optional: false, required: false
        get: function () {
            return this.getListAttribute('aud_tag');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareZeroTrustTunnelCloudflaredConfigConfigOriginRequestAccessOutputReference.prototype, "required", {
        // required - computed: true, optional: false, required: false
        get: function () {
            return this.getBooleanAttribute('required');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareZeroTrustTunnelCloudflaredConfigConfigOriginRequestAccessOutputReference.prototype, "teamName", {
        // team_name - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('team_name');
        },
        enumerable: false,
        configurable: true
    });
    return DataCloudflareZeroTrustTunnelCloudflaredConfigConfigOriginRequestAccessOutputReference;
}(cdktf.ComplexObject));
exports.DataCloudflareZeroTrustTunnelCloudflaredConfigConfigOriginRequestAccessOutputReference = DataCloudflareZeroTrustTunnelCloudflaredConfigConfigOriginRequestAccessOutputReference;
function dataCloudflareZeroTrustTunnelCloudflaredConfigConfigOriginRequestToTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {};
}
function dataCloudflareZeroTrustTunnelCloudflaredConfigConfigOriginRequestToHclTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    var attrs = {};
    return attrs;
}
var DataCloudflareZeroTrustTunnelCloudflaredConfigConfigOriginRequestOutputReference = /** @class */ (function (_super) {
    __extends(DataCloudflareZeroTrustTunnelCloudflaredConfigConfigOriginRequestOutputReference, _super);
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    function DataCloudflareZeroTrustTunnelCloudflaredConfigConfigOriginRequestOutputReference(terraformResource, terraformAttribute) {
        var _this = _super.call(this, terraformResource, terraformAttribute, false) || this;
        _this.isEmptyObject = false;
        // access - computed: true, optional: false, required: false
        _this._access = new DataCloudflareZeroTrustTunnelCloudflaredConfigConfigOriginRequestAccessOutputReference(_this, "access");
        return _this;
    }
    Object.defineProperty(DataCloudflareZeroTrustTunnelCloudflaredConfigConfigOriginRequestOutputReference.prototype, "internalValue", {
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
    Object.defineProperty(DataCloudflareZeroTrustTunnelCloudflaredConfigConfigOriginRequestOutputReference.prototype, "access", {
        get: function () {
            return this._access;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareZeroTrustTunnelCloudflaredConfigConfigOriginRequestOutputReference.prototype, "caPool", {
        // ca_pool - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('ca_pool');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareZeroTrustTunnelCloudflaredConfigConfigOriginRequestOutputReference.prototype, "connectTimeout", {
        // connect_timeout - computed: true, optional: false, required: false
        get: function () {
            return this.getNumberAttribute('connect_timeout');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareZeroTrustTunnelCloudflaredConfigConfigOriginRequestOutputReference.prototype, "disableChunkedEncoding", {
        // disable_chunked_encoding - computed: true, optional: false, required: false
        get: function () {
            return this.getBooleanAttribute('disable_chunked_encoding');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareZeroTrustTunnelCloudflaredConfigConfigOriginRequestOutputReference.prototype, "http2Origin", {
        // http2_origin - computed: true, optional: false, required: false
        get: function () {
            return this.getBooleanAttribute('http2_origin');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareZeroTrustTunnelCloudflaredConfigConfigOriginRequestOutputReference.prototype, "httpHostHeader", {
        // http_host_header - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('http_host_header');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareZeroTrustTunnelCloudflaredConfigConfigOriginRequestOutputReference.prototype, "keepAliveConnections", {
        // keep_alive_connections - computed: true, optional: false, required: false
        get: function () {
            return this.getNumberAttribute('keep_alive_connections');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareZeroTrustTunnelCloudflaredConfigConfigOriginRequestOutputReference.prototype, "keepAliveTimeout", {
        // keep_alive_timeout - computed: true, optional: false, required: false
        get: function () {
            return this.getNumberAttribute('keep_alive_timeout');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareZeroTrustTunnelCloudflaredConfigConfigOriginRequestOutputReference.prototype, "matchSnItoHost", {
        // match_sn_ito_host - computed: true, optional: false, required: false
        get: function () {
            return this.getBooleanAttribute('match_sn_ito_host');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareZeroTrustTunnelCloudflaredConfigConfigOriginRequestOutputReference.prototype, "noHappyEyeballs", {
        // no_happy_eyeballs - computed: true, optional: false, required: false
        get: function () {
            return this.getBooleanAttribute('no_happy_eyeballs');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareZeroTrustTunnelCloudflaredConfigConfigOriginRequestOutputReference.prototype, "noTlsVerify", {
        // no_tls_verify - computed: true, optional: false, required: false
        get: function () {
            return this.getBooleanAttribute('no_tls_verify');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareZeroTrustTunnelCloudflaredConfigConfigOriginRequestOutputReference.prototype, "originServerName", {
        // origin_server_name - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('origin_server_name');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareZeroTrustTunnelCloudflaredConfigConfigOriginRequestOutputReference.prototype, "proxyType", {
        // proxy_type - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('proxy_type');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareZeroTrustTunnelCloudflaredConfigConfigOriginRequestOutputReference.prototype, "tcpKeepAlive", {
        // tcp_keep_alive - computed: true, optional: false, required: false
        get: function () {
            return this.getNumberAttribute('tcp_keep_alive');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareZeroTrustTunnelCloudflaredConfigConfigOriginRequestOutputReference.prototype, "tlsTimeout", {
        // tls_timeout - computed: true, optional: false, required: false
        get: function () {
            return this.getNumberAttribute('tls_timeout');
        },
        enumerable: false,
        configurable: true
    });
    return DataCloudflareZeroTrustTunnelCloudflaredConfigConfigOriginRequestOutputReference;
}(cdktf.ComplexObject));
exports.DataCloudflareZeroTrustTunnelCloudflaredConfigConfigOriginRequestOutputReference = DataCloudflareZeroTrustTunnelCloudflaredConfigConfigOriginRequestOutputReference;
function dataCloudflareZeroTrustTunnelCloudflaredConfigConfigToTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {};
}
function dataCloudflareZeroTrustTunnelCloudflaredConfigConfigToHclTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    var attrs = {};
    return attrs;
}
var DataCloudflareZeroTrustTunnelCloudflaredConfigConfigOutputReference = /** @class */ (function (_super) {
    __extends(DataCloudflareZeroTrustTunnelCloudflaredConfigConfigOutputReference, _super);
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    function DataCloudflareZeroTrustTunnelCloudflaredConfigConfigOutputReference(terraformResource, terraformAttribute) {
        var _this = _super.call(this, terraformResource, terraformAttribute, false) || this;
        _this.isEmptyObject = false;
        // ingress - computed: true, optional: false, required: false
        _this._ingress = new DataCloudflareZeroTrustTunnelCloudflaredConfigConfigIngressList(_this, "ingress", false);
        // origin_request - computed: true, optional: false, required: false
        _this._originRequest = new DataCloudflareZeroTrustTunnelCloudflaredConfigConfigOriginRequestOutputReference(_this, "origin_request");
        return _this;
    }
    Object.defineProperty(DataCloudflareZeroTrustTunnelCloudflaredConfigConfigOutputReference.prototype, "internalValue", {
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
    Object.defineProperty(DataCloudflareZeroTrustTunnelCloudflaredConfigConfigOutputReference.prototype, "ingress", {
        get: function () {
            return this._ingress;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareZeroTrustTunnelCloudflaredConfigConfigOutputReference.prototype, "originRequest", {
        get: function () {
            return this._originRequest;
        },
        enumerable: false,
        configurable: true
    });
    return DataCloudflareZeroTrustTunnelCloudflaredConfigConfigOutputReference;
}(cdktf.ComplexObject));
exports.DataCloudflareZeroTrustTunnelCloudflaredConfigConfigOutputReference = DataCloudflareZeroTrustTunnelCloudflaredConfigConfigOutputReference;
/**
* Represents a {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/data-sources/zero_trust_tunnel_cloudflared_config cloudflare_zero_trust_tunnel_cloudflared_config}
*/
var DataCloudflareZeroTrustTunnelCloudflaredConfigA = /** @class */ (function (_super) {
    __extends(DataCloudflareZeroTrustTunnelCloudflaredConfigA, _super);
    // ===========
    // INITIALIZER
    // ===========
    /**
    * Create a new {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/data-sources/zero_trust_tunnel_cloudflared_config cloudflare_zero_trust_tunnel_cloudflared_config} Data Source
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options DataCloudflareZeroTrustTunnelCloudflaredConfigAConfig
    */
    function DataCloudflareZeroTrustTunnelCloudflaredConfigA(scope, id, config) {
        var _this = _super.call(this, scope, id, {
            terraformResourceType: 'cloudflare_zero_trust_tunnel_cloudflared_config',
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
        // config - computed: true, optional: false, required: false
        _this._config = new DataCloudflareZeroTrustTunnelCloudflaredConfigConfigOutputReference(_this, "config");
        _this._accountId = config.accountId;
        _this._tunnelId = config.tunnelId;
        return _this;
    }
    // ==============
    // STATIC Methods
    // ==============
    /**
    * Generates CDKTF code for importing a DataCloudflareZeroTrustTunnelCloudflaredConfigA resource upon running "cdktf plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the DataCloudflareZeroTrustTunnelCloudflaredConfigA to import
    * @param importFromId The id of the existing DataCloudflareZeroTrustTunnelCloudflaredConfigA that should be imported. Refer to the {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/data-sources/zero_trust_tunnel_cloudflared_config#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the DataCloudflareZeroTrustTunnelCloudflaredConfigA to import is found
    */
    DataCloudflareZeroTrustTunnelCloudflaredConfigA.generateConfigForImport = function (scope, importToId, importFromId, provider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "cloudflare_zero_trust_tunnel_cloudflared_config", importId: importFromId, provider: provider });
    };
    Object.defineProperty(DataCloudflareZeroTrustTunnelCloudflaredConfigA.prototype, "accountId", {
        get: function () {
            return this.getStringAttribute('account_id');
        },
        set: function (value) {
            this._accountId = value;
        },
        enumerable: false,
        configurable: true
    });
    DataCloudflareZeroTrustTunnelCloudflaredConfigA.prototype.resetAccountId = function () {
        this._accountId = undefined;
    };
    Object.defineProperty(DataCloudflareZeroTrustTunnelCloudflaredConfigA.prototype, "accountIdInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._accountId;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareZeroTrustTunnelCloudflaredConfigA.prototype, "config", {
        get: function () {
            return this._config;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareZeroTrustTunnelCloudflaredConfigA.prototype, "createdAt", {
        // created_at - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('created_at');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareZeroTrustTunnelCloudflaredConfigA.prototype, "source", {
        // source - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('source');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareZeroTrustTunnelCloudflaredConfigA.prototype, "tunnelId", {
        get: function () {
            return this.getStringAttribute('tunnel_id');
        },
        set: function (value) {
            this._tunnelId = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareZeroTrustTunnelCloudflaredConfigA.prototype, "tunnelIdInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._tunnelId;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareZeroTrustTunnelCloudflaredConfigA.prototype, "version", {
        // version - computed: true, optional: false, required: false
        get: function () {
            return this.getNumberAttribute('version');
        },
        enumerable: false,
        configurable: true
    });
    // =========
    // SYNTHESIS
    // =========
    DataCloudflareZeroTrustTunnelCloudflaredConfigA.prototype.synthesizeAttributes = function () {
        return {
            account_id: cdktf.stringToTerraform(this._accountId),
            tunnel_id: cdktf.stringToTerraform(this._tunnelId),
        };
    };
    DataCloudflareZeroTrustTunnelCloudflaredConfigA.prototype.synthesizeHclAttributes = function () {
        var attrs = {
            account_id: {
                value: cdktf.stringToHclTerraform(this._accountId),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            tunnel_id: {
                value: cdktf.stringToHclTerraform(this._tunnelId),
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
    DataCloudflareZeroTrustTunnelCloudflaredConfigA.tfResourceType = "cloudflare_zero_trust_tunnel_cloudflared_config";
    return DataCloudflareZeroTrustTunnelCloudflaredConfigA;
}(cdktf.TerraformDataSource));
exports.DataCloudflareZeroTrustTunnelCloudflaredConfigA = DataCloudflareZeroTrustTunnelCloudflaredConfigA;
