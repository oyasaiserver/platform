"use strict";
// https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/data-sources/hyperdrive_configs
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
exports.DataCloudflareHyperdriveConfigs = exports.DataCloudflareHyperdriveConfigsResultList = exports.DataCloudflareHyperdriveConfigsResultOutputReference = exports.DataCloudflareHyperdriveConfigsResultOriginOutputReference = exports.DataCloudflareHyperdriveConfigsResultMtlsOutputReference = exports.DataCloudflareHyperdriveConfigsResultCachingOutputReference = void 0;
exports.dataCloudflareHyperdriveConfigsResultCachingToTerraform = dataCloudflareHyperdriveConfigsResultCachingToTerraform;
exports.dataCloudflareHyperdriveConfigsResultCachingToHclTerraform = dataCloudflareHyperdriveConfigsResultCachingToHclTerraform;
exports.dataCloudflareHyperdriveConfigsResultMtlsToTerraform = dataCloudflareHyperdriveConfigsResultMtlsToTerraform;
exports.dataCloudflareHyperdriveConfigsResultMtlsToHclTerraform = dataCloudflareHyperdriveConfigsResultMtlsToHclTerraform;
exports.dataCloudflareHyperdriveConfigsResultOriginToTerraform = dataCloudflareHyperdriveConfigsResultOriginToTerraform;
exports.dataCloudflareHyperdriveConfigsResultOriginToHclTerraform = dataCloudflareHyperdriveConfigsResultOriginToHclTerraform;
exports.dataCloudflareHyperdriveConfigsResultToTerraform = dataCloudflareHyperdriveConfigsResultToTerraform;
exports.dataCloudflareHyperdriveConfigsResultToHclTerraform = dataCloudflareHyperdriveConfigsResultToHclTerraform;
var cdktf = require("cdktf");
function dataCloudflareHyperdriveConfigsResultCachingToTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {};
}
function dataCloudflareHyperdriveConfigsResultCachingToHclTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    var attrs = {};
    return attrs;
}
var DataCloudflareHyperdriveConfigsResultCachingOutputReference = /** @class */ (function (_super) {
    __extends(DataCloudflareHyperdriveConfigsResultCachingOutputReference, _super);
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    function DataCloudflareHyperdriveConfigsResultCachingOutputReference(terraformResource, terraformAttribute) {
        var _this = _super.call(this, terraformResource, terraformAttribute, false) || this;
        _this.isEmptyObject = false;
        return _this;
    }
    Object.defineProperty(DataCloudflareHyperdriveConfigsResultCachingOutputReference.prototype, "internalValue", {
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
    Object.defineProperty(DataCloudflareHyperdriveConfigsResultCachingOutputReference.prototype, "disabled", {
        // disabled - computed: true, optional: false, required: false
        get: function () {
            return this.getBooleanAttribute('disabled');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareHyperdriveConfigsResultCachingOutputReference.prototype, "maxAge", {
        // max_age - computed: true, optional: false, required: false
        get: function () {
            return this.getNumberAttribute('max_age');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareHyperdriveConfigsResultCachingOutputReference.prototype, "staleWhileRevalidate", {
        // stale_while_revalidate - computed: true, optional: false, required: false
        get: function () {
            return this.getNumberAttribute('stale_while_revalidate');
        },
        enumerable: false,
        configurable: true
    });
    return DataCloudflareHyperdriveConfigsResultCachingOutputReference;
}(cdktf.ComplexObject));
exports.DataCloudflareHyperdriveConfigsResultCachingOutputReference = DataCloudflareHyperdriveConfigsResultCachingOutputReference;
function dataCloudflareHyperdriveConfigsResultMtlsToTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {};
}
function dataCloudflareHyperdriveConfigsResultMtlsToHclTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    var attrs = {};
    return attrs;
}
var DataCloudflareHyperdriveConfigsResultMtlsOutputReference = /** @class */ (function (_super) {
    __extends(DataCloudflareHyperdriveConfigsResultMtlsOutputReference, _super);
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    function DataCloudflareHyperdriveConfigsResultMtlsOutputReference(terraformResource, terraformAttribute) {
        var _this = _super.call(this, terraformResource, terraformAttribute, false) || this;
        _this.isEmptyObject = false;
        return _this;
    }
    Object.defineProperty(DataCloudflareHyperdriveConfigsResultMtlsOutputReference.prototype, "internalValue", {
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
    Object.defineProperty(DataCloudflareHyperdriveConfigsResultMtlsOutputReference.prototype, "caCertificateId", {
        // ca_certificate_id - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('ca_certificate_id');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareHyperdriveConfigsResultMtlsOutputReference.prototype, "mtlsCertificateId", {
        // mtls_certificate_id - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('mtls_certificate_id');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareHyperdriveConfigsResultMtlsOutputReference.prototype, "sslmode", {
        // sslmode - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('sslmode');
        },
        enumerable: false,
        configurable: true
    });
    return DataCloudflareHyperdriveConfigsResultMtlsOutputReference;
}(cdktf.ComplexObject));
exports.DataCloudflareHyperdriveConfigsResultMtlsOutputReference = DataCloudflareHyperdriveConfigsResultMtlsOutputReference;
function dataCloudflareHyperdriveConfigsResultOriginToTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {};
}
function dataCloudflareHyperdriveConfigsResultOriginToHclTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    var attrs = {};
    return attrs;
}
var DataCloudflareHyperdriveConfigsResultOriginOutputReference = /** @class */ (function (_super) {
    __extends(DataCloudflareHyperdriveConfigsResultOriginOutputReference, _super);
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    function DataCloudflareHyperdriveConfigsResultOriginOutputReference(terraformResource, terraformAttribute) {
        var _this = _super.call(this, terraformResource, terraformAttribute, false) || this;
        _this.isEmptyObject = false;
        return _this;
    }
    Object.defineProperty(DataCloudflareHyperdriveConfigsResultOriginOutputReference.prototype, "internalValue", {
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
    Object.defineProperty(DataCloudflareHyperdriveConfigsResultOriginOutputReference.prototype, "accessClientId", {
        // access_client_id - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('access_client_id');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareHyperdriveConfigsResultOriginOutputReference.prototype, "accessClientSecret", {
        // access_client_secret - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('access_client_secret');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareHyperdriveConfigsResultOriginOutputReference.prototype, "database", {
        // database - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('database');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareHyperdriveConfigsResultOriginOutputReference.prototype, "host", {
        // host - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('host');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareHyperdriveConfigsResultOriginOutputReference.prototype, "password", {
        // password - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('password');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareHyperdriveConfigsResultOriginOutputReference.prototype, "port", {
        // port - computed: true, optional: false, required: false
        get: function () {
            return this.getNumberAttribute('port');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareHyperdriveConfigsResultOriginOutputReference.prototype, "scheme", {
        // scheme - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('scheme');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareHyperdriveConfigsResultOriginOutputReference.prototype, "serviceId", {
        // service_id - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('service_id');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareHyperdriveConfigsResultOriginOutputReference.prototype, "user", {
        // user - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('user');
        },
        enumerable: false,
        configurable: true
    });
    return DataCloudflareHyperdriveConfigsResultOriginOutputReference;
}(cdktf.ComplexObject));
exports.DataCloudflareHyperdriveConfigsResultOriginOutputReference = DataCloudflareHyperdriveConfigsResultOriginOutputReference;
function dataCloudflareHyperdriveConfigsResultToTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {};
}
function dataCloudflareHyperdriveConfigsResultToHclTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    var attrs = {};
    return attrs;
}
var DataCloudflareHyperdriveConfigsResultOutputReference = /** @class */ (function (_super) {
    __extends(DataCloudflareHyperdriveConfigsResultOutputReference, _super);
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    function DataCloudflareHyperdriveConfigsResultOutputReference(terraformResource, terraformAttribute, complexObjectIndex, complexObjectIsFromSet) {
        var _this = _super.call(this, terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex) || this;
        _this.isEmptyObject = false;
        // caching - computed: true, optional: false, required: false
        _this._caching = new DataCloudflareHyperdriveConfigsResultCachingOutputReference(_this, "caching");
        // mtls - computed: true, optional: false, required: false
        _this._mtls = new DataCloudflareHyperdriveConfigsResultMtlsOutputReference(_this, "mtls");
        // origin - computed: true, optional: false, required: false
        _this._origin = new DataCloudflareHyperdriveConfigsResultOriginOutputReference(_this, "origin");
        return _this;
    }
    Object.defineProperty(DataCloudflareHyperdriveConfigsResultOutputReference.prototype, "internalValue", {
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
    Object.defineProperty(DataCloudflareHyperdriveConfigsResultOutputReference.prototype, "caching", {
        get: function () {
            return this._caching;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareHyperdriveConfigsResultOutputReference.prototype, "createdOn", {
        // created_on - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('created_on');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareHyperdriveConfigsResultOutputReference.prototype, "id", {
        // id - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('id');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareHyperdriveConfigsResultOutputReference.prototype, "modifiedOn", {
        // modified_on - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('modified_on');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareHyperdriveConfigsResultOutputReference.prototype, "mtls", {
        get: function () {
            return this._mtls;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareHyperdriveConfigsResultOutputReference.prototype, "name", {
        // name - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('name');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareHyperdriveConfigsResultOutputReference.prototype, "origin", {
        get: function () {
            return this._origin;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareHyperdriveConfigsResultOutputReference.prototype, "originConnectionLimit", {
        // origin_connection_limit - computed: true, optional: false, required: false
        get: function () {
            return this.getNumberAttribute('origin_connection_limit');
        },
        enumerable: false,
        configurable: true
    });
    return DataCloudflareHyperdriveConfigsResultOutputReference;
}(cdktf.ComplexObject));
exports.DataCloudflareHyperdriveConfigsResultOutputReference = DataCloudflareHyperdriveConfigsResultOutputReference;
var DataCloudflareHyperdriveConfigsResultList = /** @class */ (function (_super) {
    __extends(DataCloudflareHyperdriveConfigsResultList, _super);
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    function DataCloudflareHyperdriveConfigsResultList(terraformResource, terraformAttribute, wrapsSet) {
        var _this = _super.call(this, terraformResource, terraformAttribute, wrapsSet) || this;
        _this.terraformResource = terraformResource;
        _this.terraformAttribute = terraformAttribute;
        _this.wrapsSet = wrapsSet;
        return _this;
    }
    /**
    * @param index the index of the item to return
    */
    DataCloudflareHyperdriveConfigsResultList.prototype.get = function (index) {
        return new DataCloudflareHyperdriveConfigsResultOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
    };
    return DataCloudflareHyperdriveConfigsResultList;
}(cdktf.ComplexList));
exports.DataCloudflareHyperdriveConfigsResultList = DataCloudflareHyperdriveConfigsResultList;
/**
* Represents a {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/data-sources/hyperdrive_configs cloudflare_hyperdrive_configs}
*/
var DataCloudflareHyperdriveConfigs = /** @class */ (function (_super) {
    __extends(DataCloudflareHyperdriveConfigs, _super);
    // ===========
    // INITIALIZER
    // ===========
    /**
    * Create a new {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/data-sources/hyperdrive_configs cloudflare_hyperdrive_configs} Data Source
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options DataCloudflareHyperdriveConfigsConfig = {}
    */
    function DataCloudflareHyperdriveConfigs(scope, id, config) {
        if (config === void 0) { config = {}; }
        var _this = _super.call(this, scope, id, {
            terraformResourceType: 'cloudflare_hyperdrive_configs',
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
        // result - computed: true, optional: false, required: false
        _this._result = new DataCloudflareHyperdriveConfigsResultList(_this, "result", false);
        _this._accountId = config.accountId;
        _this._maxItems = config.maxItems;
        return _this;
    }
    // ==============
    // STATIC Methods
    // ==============
    /**
    * Generates CDKTF code for importing a DataCloudflareHyperdriveConfigs resource upon running "cdktf plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the DataCloudflareHyperdriveConfigs to import
    * @param importFromId The id of the existing DataCloudflareHyperdriveConfigs that should be imported. Refer to the {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/data-sources/hyperdrive_configs#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the DataCloudflareHyperdriveConfigs to import is found
    */
    DataCloudflareHyperdriveConfigs.generateConfigForImport = function (scope, importToId, importFromId, provider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "cloudflare_hyperdrive_configs", importId: importFromId, provider: provider });
    };
    Object.defineProperty(DataCloudflareHyperdriveConfigs.prototype, "accountId", {
        get: function () {
            return this.getStringAttribute('account_id');
        },
        set: function (value) {
            this._accountId = value;
        },
        enumerable: false,
        configurable: true
    });
    DataCloudflareHyperdriveConfigs.prototype.resetAccountId = function () {
        this._accountId = undefined;
    };
    Object.defineProperty(DataCloudflareHyperdriveConfigs.prototype, "accountIdInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._accountId;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareHyperdriveConfigs.prototype, "maxItems", {
        get: function () {
            return this.getNumberAttribute('max_items');
        },
        set: function (value) {
            this._maxItems = value;
        },
        enumerable: false,
        configurable: true
    });
    DataCloudflareHyperdriveConfigs.prototype.resetMaxItems = function () {
        this._maxItems = undefined;
    };
    Object.defineProperty(DataCloudflareHyperdriveConfigs.prototype, "maxItemsInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._maxItems;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareHyperdriveConfigs.prototype, "result", {
        get: function () {
            return this._result;
        },
        enumerable: false,
        configurable: true
    });
    // =========
    // SYNTHESIS
    // =========
    DataCloudflareHyperdriveConfigs.prototype.synthesizeAttributes = function () {
        return {
            account_id: cdktf.stringToTerraform(this._accountId),
            max_items: cdktf.numberToTerraform(this._maxItems),
        };
    };
    DataCloudflareHyperdriveConfigs.prototype.synthesizeHclAttributes = function () {
        var attrs = {
            account_id: {
                value: cdktf.stringToHclTerraform(this._accountId),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            max_items: {
                value: cdktf.numberToHclTerraform(this._maxItems),
                isBlock: false,
                type: "simple",
                storageClassType: "number",
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
    DataCloudflareHyperdriveConfigs.tfResourceType = "cloudflare_hyperdrive_configs";
    return DataCloudflareHyperdriveConfigs;
}(cdktf.TerraformDataSource));
exports.DataCloudflareHyperdriveConfigs = DataCloudflareHyperdriveConfigs;
