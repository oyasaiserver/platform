"use strict";
// https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/data-sources/hyperdrive_config
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
exports.DataCloudflareHyperdriveConfig = exports.DataCloudflareHyperdriveConfigOriginOutputReference = exports.DataCloudflareHyperdriveConfigMtlsOutputReference = exports.DataCloudflareHyperdriveConfigCachingOutputReference = void 0;
exports.dataCloudflareHyperdriveConfigCachingToTerraform = dataCloudflareHyperdriveConfigCachingToTerraform;
exports.dataCloudflareHyperdriveConfigCachingToHclTerraform = dataCloudflareHyperdriveConfigCachingToHclTerraform;
exports.dataCloudflareHyperdriveConfigMtlsToTerraform = dataCloudflareHyperdriveConfigMtlsToTerraform;
exports.dataCloudflareHyperdriveConfigMtlsToHclTerraform = dataCloudflareHyperdriveConfigMtlsToHclTerraform;
exports.dataCloudflareHyperdriveConfigOriginToTerraform = dataCloudflareHyperdriveConfigOriginToTerraform;
exports.dataCloudflareHyperdriveConfigOriginToHclTerraform = dataCloudflareHyperdriveConfigOriginToHclTerraform;
var cdktf = require("cdktf");
function dataCloudflareHyperdriveConfigCachingToTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {};
}
function dataCloudflareHyperdriveConfigCachingToHclTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    var attrs = {};
    return attrs;
}
var DataCloudflareHyperdriveConfigCachingOutputReference = /** @class */ (function (_super) {
    __extends(DataCloudflareHyperdriveConfigCachingOutputReference, _super);
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    function DataCloudflareHyperdriveConfigCachingOutputReference(terraformResource, terraformAttribute) {
        var _this = _super.call(this, terraformResource, terraformAttribute, false) || this;
        _this.isEmptyObject = false;
        return _this;
    }
    Object.defineProperty(DataCloudflareHyperdriveConfigCachingOutputReference.prototype, "internalValue", {
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
    Object.defineProperty(DataCloudflareHyperdriveConfigCachingOutputReference.prototype, "disabled", {
        // disabled - computed: true, optional: false, required: false
        get: function () {
            return this.getBooleanAttribute('disabled');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareHyperdriveConfigCachingOutputReference.prototype, "maxAge", {
        // max_age - computed: true, optional: false, required: false
        get: function () {
            return this.getNumberAttribute('max_age');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareHyperdriveConfigCachingOutputReference.prototype, "staleWhileRevalidate", {
        // stale_while_revalidate - computed: true, optional: false, required: false
        get: function () {
            return this.getNumberAttribute('stale_while_revalidate');
        },
        enumerable: false,
        configurable: true
    });
    return DataCloudflareHyperdriveConfigCachingOutputReference;
}(cdktf.ComplexObject));
exports.DataCloudflareHyperdriveConfigCachingOutputReference = DataCloudflareHyperdriveConfigCachingOutputReference;
function dataCloudflareHyperdriveConfigMtlsToTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {};
}
function dataCloudflareHyperdriveConfigMtlsToHclTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    var attrs = {};
    return attrs;
}
var DataCloudflareHyperdriveConfigMtlsOutputReference = /** @class */ (function (_super) {
    __extends(DataCloudflareHyperdriveConfigMtlsOutputReference, _super);
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    function DataCloudflareHyperdriveConfigMtlsOutputReference(terraformResource, terraformAttribute) {
        var _this = _super.call(this, terraformResource, terraformAttribute, false) || this;
        _this.isEmptyObject = false;
        return _this;
    }
    Object.defineProperty(DataCloudflareHyperdriveConfigMtlsOutputReference.prototype, "internalValue", {
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
    Object.defineProperty(DataCloudflareHyperdriveConfigMtlsOutputReference.prototype, "caCertificateId", {
        // ca_certificate_id - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('ca_certificate_id');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareHyperdriveConfigMtlsOutputReference.prototype, "mtlsCertificateId", {
        // mtls_certificate_id - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('mtls_certificate_id');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareHyperdriveConfigMtlsOutputReference.prototype, "sslmode", {
        // sslmode - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('sslmode');
        },
        enumerable: false,
        configurable: true
    });
    return DataCloudflareHyperdriveConfigMtlsOutputReference;
}(cdktf.ComplexObject));
exports.DataCloudflareHyperdriveConfigMtlsOutputReference = DataCloudflareHyperdriveConfigMtlsOutputReference;
function dataCloudflareHyperdriveConfigOriginToTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {};
}
function dataCloudflareHyperdriveConfigOriginToHclTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    var attrs = {};
    return attrs;
}
var DataCloudflareHyperdriveConfigOriginOutputReference = /** @class */ (function (_super) {
    __extends(DataCloudflareHyperdriveConfigOriginOutputReference, _super);
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    function DataCloudflareHyperdriveConfigOriginOutputReference(terraformResource, terraformAttribute) {
        var _this = _super.call(this, terraformResource, terraformAttribute, false) || this;
        _this.isEmptyObject = false;
        return _this;
    }
    Object.defineProperty(DataCloudflareHyperdriveConfigOriginOutputReference.prototype, "internalValue", {
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
    Object.defineProperty(DataCloudflareHyperdriveConfigOriginOutputReference.prototype, "accessClientId", {
        // access_client_id - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('access_client_id');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareHyperdriveConfigOriginOutputReference.prototype, "accessClientSecret", {
        // access_client_secret - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('access_client_secret');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareHyperdriveConfigOriginOutputReference.prototype, "database", {
        // database - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('database');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareHyperdriveConfigOriginOutputReference.prototype, "host", {
        // host - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('host');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareHyperdriveConfigOriginOutputReference.prototype, "password", {
        // password - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('password');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareHyperdriveConfigOriginOutputReference.prototype, "port", {
        // port - computed: true, optional: false, required: false
        get: function () {
            return this.getNumberAttribute('port');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareHyperdriveConfigOriginOutputReference.prototype, "scheme", {
        // scheme - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('scheme');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareHyperdriveConfigOriginOutputReference.prototype, "serviceId", {
        // service_id - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('service_id');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareHyperdriveConfigOriginOutputReference.prototype, "user", {
        // user - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('user');
        },
        enumerable: false,
        configurable: true
    });
    return DataCloudflareHyperdriveConfigOriginOutputReference;
}(cdktf.ComplexObject));
exports.DataCloudflareHyperdriveConfigOriginOutputReference = DataCloudflareHyperdriveConfigOriginOutputReference;
/**
* Represents a {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/data-sources/hyperdrive_config cloudflare_hyperdrive_config}
*/
var DataCloudflareHyperdriveConfig = /** @class */ (function (_super) {
    __extends(DataCloudflareHyperdriveConfig, _super);
    // ===========
    // INITIALIZER
    // ===========
    /**
    * Create a new {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/data-sources/hyperdrive_config cloudflare_hyperdrive_config} Data Source
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options DataCloudflareHyperdriveConfigConfig
    */
    function DataCloudflareHyperdriveConfig(scope, id, config) {
        var _this = _super.call(this, scope, id, {
            terraformResourceType: 'cloudflare_hyperdrive_config',
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
        // caching - computed: true, optional: false, required: false
        _this._caching = new DataCloudflareHyperdriveConfigCachingOutputReference(_this, "caching");
        // mtls - computed: true, optional: false, required: false
        _this._mtls = new DataCloudflareHyperdriveConfigMtlsOutputReference(_this, "mtls");
        // origin - computed: true, optional: false, required: false
        _this._origin = new DataCloudflareHyperdriveConfigOriginOutputReference(_this, "origin");
        _this._accountId = config.accountId;
        _this._hyperdriveId = config.hyperdriveId;
        return _this;
    }
    // ==============
    // STATIC Methods
    // ==============
    /**
    * Generates CDKTF code for importing a DataCloudflareHyperdriveConfig resource upon running "cdktf plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the DataCloudflareHyperdriveConfig to import
    * @param importFromId The id of the existing DataCloudflareHyperdriveConfig that should be imported. Refer to the {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/data-sources/hyperdrive_config#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the DataCloudflareHyperdriveConfig to import is found
    */
    DataCloudflareHyperdriveConfig.generateConfigForImport = function (scope, importToId, importFromId, provider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "cloudflare_hyperdrive_config", importId: importFromId, provider: provider });
    };
    Object.defineProperty(DataCloudflareHyperdriveConfig.prototype, "accountId", {
        get: function () {
            return this.getStringAttribute('account_id');
        },
        set: function (value) {
            this._accountId = value;
        },
        enumerable: false,
        configurable: true
    });
    DataCloudflareHyperdriveConfig.prototype.resetAccountId = function () {
        this._accountId = undefined;
    };
    Object.defineProperty(DataCloudflareHyperdriveConfig.prototype, "accountIdInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._accountId;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareHyperdriveConfig.prototype, "caching", {
        get: function () {
            return this._caching;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareHyperdriveConfig.prototype, "createdOn", {
        // created_on - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('created_on');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareHyperdriveConfig.prototype, "hyperdriveId", {
        get: function () {
            return this.getStringAttribute('hyperdrive_id');
        },
        set: function (value) {
            this._hyperdriveId = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareHyperdriveConfig.prototype, "hyperdriveIdInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._hyperdriveId;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareHyperdriveConfig.prototype, "id", {
        // id - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('id');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareHyperdriveConfig.prototype, "modifiedOn", {
        // modified_on - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('modified_on');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareHyperdriveConfig.prototype, "mtls", {
        get: function () {
            return this._mtls;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareHyperdriveConfig.prototype, "name", {
        // name - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('name');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareHyperdriveConfig.prototype, "origin", {
        get: function () {
            return this._origin;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareHyperdriveConfig.prototype, "originConnectionLimit", {
        // origin_connection_limit - computed: true, optional: false, required: false
        get: function () {
            return this.getNumberAttribute('origin_connection_limit');
        },
        enumerable: false,
        configurable: true
    });
    // =========
    // SYNTHESIS
    // =========
    DataCloudflareHyperdriveConfig.prototype.synthesizeAttributes = function () {
        return {
            account_id: cdktf.stringToTerraform(this._accountId),
            hyperdrive_id: cdktf.stringToTerraform(this._hyperdriveId),
        };
    };
    DataCloudflareHyperdriveConfig.prototype.synthesizeHclAttributes = function () {
        var attrs = {
            account_id: {
                value: cdktf.stringToHclTerraform(this._accountId),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            hyperdrive_id: {
                value: cdktf.stringToHclTerraform(this._hyperdriveId),
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
    DataCloudflareHyperdriveConfig.tfResourceType = "cloudflare_hyperdrive_config";
    return DataCloudflareHyperdriveConfig;
}(cdktf.TerraformDataSource));
exports.DataCloudflareHyperdriveConfig = DataCloudflareHyperdriveConfig;
