"use strict";
// https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/data-sources/image_variant
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
exports.DataCloudflareImageVariant = exports.DataCloudflareImageVariantVariantOutputReference = exports.DataCloudflareImageVariantVariantOptionsOutputReference = void 0;
exports.dataCloudflareImageVariantVariantOptionsToTerraform = dataCloudflareImageVariantVariantOptionsToTerraform;
exports.dataCloudflareImageVariantVariantOptionsToHclTerraform = dataCloudflareImageVariantVariantOptionsToHclTerraform;
exports.dataCloudflareImageVariantVariantToTerraform = dataCloudflareImageVariantVariantToTerraform;
exports.dataCloudflareImageVariantVariantToHclTerraform = dataCloudflareImageVariantVariantToHclTerraform;
var cdktf = require("cdktf");
function dataCloudflareImageVariantVariantOptionsToTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {};
}
function dataCloudflareImageVariantVariantOptionsToHclTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    var attrs = {};
    return attrs;
}
var DataCloudflareImageVariantVariantOptionsOutputReference = /** @class */ (function (_super) {
    __extends(DataCloudflareImageVariantVariantOptionsOutputReference, _super);
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    function DataCloudflareImageVariantVariantOptionsOutputReference(terraformResource, terraformAttribute) {
        var _this = _super.call(this, terraformResource, terraformAttribute, false) || this;
        _this.isEmptyObject = false;
        return _this;
    }
    Object.defineProperty(DataCloudflareImageVariantVariantOptionsOutputReference.prototype, "internalValue", {
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
    Object.defineProperty(DataCloudflareImageVariantVariantOptionsOutputReference.prototype, "fit", {
        // fit - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('fit');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareImageVariantVariantOptionsOutputReference.prototype, "height", {
        // height - computed: true, optional: false, required: false
        get: function () {
            return this.getNumberAttribute('height');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareImageVariantVariantOptionsOutputReference.prototype, "metadata", {
        // metadata - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('metadata');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareImageVariantVariantOptionsOutputReference.prototype, "width", {
        // width - computed: true, optional: false, required: false
        get: function () {
            return this.getNumberAttribute('width');
        },
        enumerable: false,
        configurable: true
    });
    return DataCloudflareImageVariantVariantOptionsOutputReference;
}(cdktf.ComplexObject));
exports.DataCloudflareImageVariantVariantOptionsOutputReference = DataCloudflareImageVariantVariantOptionsOutputReference;
function dataCloudflareImageVariantVariantToTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {};
}
function dataCloudflareImageVariantVariantToHclTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    var attrs = {};
    return attrs;
}
var DataCloudflareImageVariantVariantOutputReference = /** @class */ (function (_super) {
    __extends(DataCloudflareImageVariantVariantOutputReference, _super);
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    function DataCloudflareImageVariantVariantOutputReference(terraformResource, terraformAttribute) {
        var _this = _super.call(this, terraformResource, terraformAttribute, false) || this;
        _this.isEmptyObject = false;
        // options - computed: true, optional: false, required: false
        _this._options = new DataCloudflareImageVariantVariantOptionsOutputReference(_this, "options");
        return _this;
    }
    Object.defineProperty(DataCloudflareImageVariantVariantOutputReference.prototype, "internalValue", {
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
    Object.defineProperty(DataCloudflareImageVariantVariantOutputReference.prototype, "id", {
        // id - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('id');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareImageVariantVariantOutputReference.prototype, "neverRequireSignedUrls", {
        // never_require_signed_urls - computed: true, optional: false, required: false
        get: function () {
            return this.getBooleanAttribute('never_require_signed_urls');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareImageVariantVariantOutputReference.prototype, "options", {
        get: function () {
            return this._options;
        },
        enumerable: false,
        configurable: true
    });
    return DataCloudflareImageVariantVariantOutputReference;
}(cdktf.ComplexObject));
exports.DataCloudflareImageVariantVariantOutputReference = DataCloudflareImageVariantVariantOutputReference;
/**
* Represents a {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/data-sources/image_variant cloudflare_image_variant}
*/
var DataCloudflareImageVariant = /** @class */ (function (_super) {
    __extends(DataCloudflareImageVariant, _super);
    // ===========
    // INITIALIZER
    // ===========
    /**
    * Create a new {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/data-sources/image_variant cloudflare_image_variant} Data Source
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options DataCloudflareImageVariantConfig
    */
    function DataCloudflareImageVariant(scope, id, config) {
        var _this = _super.call(this, scope, id, {
            terraformResourceType: 'cloudflare_image_variant',
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
        // variant - computed: true, optional: false, required: false
        _this._variant = new DataCloudflareImageVariantVariantOutputReference(_this, "variant");
        _this._accountId = config.accountId;
        _this._variantId = config.variantId;
        return _this;
    }
    // ==============
    // STATIC Methods
    // ==============
    /**
    * Generates CDKTF code for importing a DataCloudflareImageVariant resource upon running "cdktf plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the DataCloudflareImageVariant to import
    * @param importFromId The id of the existing DataCloudflareImageVariant that should be imported. Refer to the {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/data-sources/image_variant#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the DataCloudflareImageVariant to import is found
    */
    DataCloudflareImageVariant.generateConfigForImport = function (scope, importToId, importFromId, provider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "cloudflare_image_variant", importId: importFromId, provider: provider });
    };
    Object.defineProperty(DataCloudflareImageVariant.prototype, "accountId", {
        get: function () {
            return this.getStringAttribute('account_id');
        },
        set: function (value) {
            this._accountId = value;
        },
        enumerable: false,
        configurable: true
    });
    DataCloudflareImageVariant.prototype.resetAccountId = function () {
        this._accountId = undefined;
    };
    Object.defineProperty(DataCloudflareImageVariant.prototype, "accountIdInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._accountId;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareImageVariant.prototype, "id", {
        // id - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('id');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareImageVariant.prototype, "variant", {
        get: function () {
            return this._variant;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareImageVariant.prototype, "variantId", {
        get: function () {
            return this.getStringAttribute('variant_id');
        },
        set: function (value) {
            this._variantId = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareImageVariant.prototype, "variantIdInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._variantId;
        },
        enumerable: false,
        configurable: true
    });
    // =========
    // SYNTHESIS
    // =========
    DataCloudflareImageVariant.prototype.synthesizeAttributes = function () {
        return {
            account_id: cdktf.stringToTerraform(this._accountId),
            variant_id: cdktf.stringToTerraform(this._variantId),
        };
    };
    DataCloudflareImageVariant.prototype.synthesizeHclAttributes = function () {
        var attrs = {
            account_id: {
                value: cdktf.stringToHclTerraform(this._accountId),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            variant_id: {
                value: cdktf.stringToHclTerraform(this._variantId),
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
    DataCloudflareImageVariant.tfResourceType = "cloudflare_image_variant";
    return DataCloudflareImageVariant;
}(cdktf.TerraformDataSource));
exports.DataCloudflareImageVariant = DataCloudflareImageVariant;
