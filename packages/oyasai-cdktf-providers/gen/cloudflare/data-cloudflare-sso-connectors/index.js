"use strict";
// https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/data-sources/sso_connectors
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
exports.DataCloudflareSsoConnectors = exports.DataCloudflareSsoConnectorsResultList = exports.DataCloudflareSsoConnectorsResultOutputReference = exports.DataCloudflareSsoConnectorsResultVerificationOutputReference = void 0;
exports.dataCloudflareSsoConnectorsResultVerificationToTerraform = dataCloudflareSsoConnectorsResultVerificationToTerraform;
exports.dataCloudflareSsoConnectorsResultVerificationToHclTerraform = dataCloudflareSsoConnectorsResultVerificationToHclTerraform;
exports.dataCloudflareSsoConnectorsResultToTerraform = dataCloudflareSsoConnectorsResultToTerraform;
exports.dataCloudflareSsoConnectorsResultToHclTerraform = dataCloudflareSsoConnectorsResultToHclTerraform;
var cdktf = require("cdktf");
function dataCloudflareSsoConnectorsResultVerificationToTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {};
}
function dataCloudflareSsoConnectorsResultVerificationToHclTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    var attrs = {};
    return attrs;
}
var DataCloudflareSsoConnectorsResultVerificationOutputReference = /** @class */ (function (_super) {
    __extends(DataCloudflareSsoConnectorsResultVerificationOutputReference, _super);
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    function DataCloudflareSsoConnectorsResultVerificationOutputReference(terraformResource, terraformAttribute) {
        var _this = _super.call(this, terraformResource, terraformAttribute, false) || this;
        _this.isEmptyObject = false;
        return _this;
    }
    Object.defineProperty(DataCloudflareSsoConnectorsResultVerificationOutputReference.prototype, "internalValue", {
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
    Object.defineProperty(DataCloudflareSsoConnectorsResultVerificationOutputReference.prototype, "code", {
        // code - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('code');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareSsoConnectorsResultVerificationOutputReference.prototype, "status", {
        // status - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('status');
        },
        enumerable: false,
        configurable: true
    });
    return DataCloudflareSsoConnectorsResultVerificationOutputReference;
}(cdktf.ComplexObject));
exports.DataCloudflareSsoConnectorsResultVerificationOutputReference = DataCloudflareSsoConnectorsResultVerificationOutputReference;
function dataCloudflareSsoConnectorsResultToTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {};
}
function dataCloudflareSsoConnectorsResultToHclTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    var attrs = {};
    return attrs;
}
var DataCloudflareSsoConnectorsResultOutputReference = /** @class */ (function (_super) {
    __extends(DataCloudflareSsoConnectorsResultOutputReference, _super);
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    function DataCloudflareSsoConnectorsResultOutputReference(terraformResource, terraformAttribute, complexObjectIndex, complexObjectIsFromSet) {
        var _this = _super.call(this, terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex) || this;
        _this.isEmptyObject = false;
        // verification - computed: true, optional: false, required: false
        _this._verification = new DataCloudflareSsoConnectorsResultVerificationOutputReference(_this, "verification");
        return _this;
    }
    Object.defineProperty(DataCloudflareSsoConnectorsResultOutputReference.prototype, "internalValue", {
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
    Object.defineProperty(DataCloudflareSsoConnectorsResultOutputReference.prototype, "createdOn", {
        // created_on - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('created_on');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareSsoConnectorsResultOutputReference.prototype, "emailDomain", {
        // email_domain - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('email_domain');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareSsoConnectorsResultOutputReference.prototype, "enabled", {
        // enabled - computed: true, optional: false, required: false
        get: function () {
            return this.getBooleanAttribute('enabled');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareSsoConnectorsResultOutputReference.prototype, "id", {
        // id - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('id');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareSsoConnectorsResultOutputReference.prototype, "updatedOn", {
        // updated_on - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('updated_on');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareSsoConnectorsResultOutputReference.prototype, "useFedrampLanguage", {
        // use_fedramp_language - computed: true, optional: false, required: false
        get: function () {
            return this.getBooleanAttribute('use_fedramp_language');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareSsoConnectorsResultOutputReference.prototype, "verification", {
        get: function () {
            return this._verification;
        },
        enumerable: false,
        configurable: true
    });
    return DataCloudflareSsoConnectorsResultOutputReference;
}(cdktf.ComplexObject));
exports.DataCloudflareSsoConnectorsResultOutputReference = DataCloudflareSsoConnectorsResultOutputReference;
var DataCloudflareSsoConnectorsResultList = /** @class */ (function (_super) {
    __extends(DataCloudflareSsoConnectorsResultList, _super);
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    function DataCloudflareSsoConnectorsResultList(terraformResource, terraformAttribute, wrapsSet) {
        var _this = _super.call(this, terraformResource, terraformAttribute, wrapsSet) || this;
        _this.terraformResource = terraformResource;
        _this.terraformAttribute = terraformAttribute;
        _this.wrapsSet = wrapsSet;
        return _this;
    }
    /**
    * @param index the index of the item to return
    */
    DataCloudflareSsoConnectorsResultList.prototype.get = function (index) {
        return new DataCloudflareSsoConnectorsResultOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
    };
    return DataCloudflareSsoConnectorsResultList;
}(cdktf.ComplexList));
exports.DataCloudflareSsoConnectorsResultList = DataCloudflareSsoConnectorsResultList;
/**
* Represents a {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/data-sources/sso_connectors cloudflare_sso_connectors}
*/
var DataCloudflareSsoConnectors = /** @class */ (function (_super) {
    __extends(DataCloudflareSsoConnectors, _super);
    // ===========
    // INITIALIZER
    // ===========
    /**
    * Create a new {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/data-sources/sso_connectors cloudflare_sso_connectors} Data Source
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options DataCloudflareSsoConnectorsConfig = {}
    */
    function DataCloudflareSsoConnectors(scope, id, config) {
        if (config === void 0) { config = {}; }
        var _this = _super.call(this, scope, id, {
            terraformResourceType: 'cloudflare_sso_connectors',
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
        _this._result = new DataCloudflareSsoConnectorsResultList(_this, "result", false);
        _this._accountId = config.accountId;
        _this._maxItems = config.maxItems;
        return _this;
    }
    // ==============
    // STATIC Methods
    // ==============
    /**
    * Generates CDKTF code for importing a DataCloudflareSsoConnectors resource upon running "cdktf plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the DataCloudflareSsoConnectors to import
    * @param importFromId The id of the existing DataCloudflareSsoConnectors that should be imported. Refer to the {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/data-sources/sso_connectors#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the DataCloudflareSsoConnectors to import is found
    */
    DataCloudflareSsoConnectors.generateConfigForImport = function (scope, importToId, importFromId, provider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "cloudflare_sso_connectors", importId: importFromId, provider: provider });
    };
    Object.defineProperty(DataCloudflareSsoConnectors.prototype, "accountId", {
        get: function () {
            return this.getStringAttribute('account_id');
        },
        set: function (value) {
            this._accountId = value;
        },
        enumerable: false,
        configurable: true
    });
    DataCloudflareSsoConnectors.prototype.resetAccountId = function () {
        this._accountId = undefined;
    };
    Object.defineProperty(DataCloudflareSsoConnectors.prototype, "accountIdInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._accountId;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareSsoConnectors.prototype, "maxItems", {
        get: function () {
            return this.getNumberAttribute('max_items');
        },
        set: function (value) {
            this._maxItems = value;
        },
        enumerable: false,
        configurable: true
    });
    DataCloudflareSsoConnectors.prototype.resetMaxItems = function () {
        this._maxItems = undefined;
    };
    Object.defineProperty(DataCloudflareSsoConnectors.prototype, "maxItemsInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._maxItems;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareSsoConnectors.prototype, "result", {
        get: function () {
            return this._result;
        },
        enumerable: false,
        configurable: true
    });
    // =========
    // SYNTHESIS
    // =========
    DataCloudflareSsoConnectors.prototype.synthesizeAttributes = function () {
        return {
            account_id: cdktf.stringToTerraform(this._accountId),
            max_items: cdktf.numberToTerraform(this._maxItems),
        };
    };
    DataCloudflareSsoConnectors.prototype.synthesizeHclAttributes = function () {
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
    DataCloudflareSsoConnectors.tfResourceType = "cloudflare_sso_connectors";
    return DataCloudflareSsoConnectors;
}(cdktf.TerraformDataSource));
exports.DataCloudflareSsoConnectors = DataCloudflareSsoConnectors;
