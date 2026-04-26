"use strict";
// https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/image_variant
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
exports.ImageVariant = exports.ImageVariantVariantOutputReference = exports.ImageVariantVariantOptionsOutputReference = exports.ImageVariantOptionsOutputReference = void 0;
exports.imageVariantOptionsToTerraform = imageVariantOptionsToTerraform;
exports.imageVariantOptionsToHclTerraform = imageVariantOptionsToHclTerraform;
exports.imageVariantVariantOptionsToTerraform = imageVariantVariantOptionsToTerraform;
exports.imageVariantVariantOptionsToHclTerraform = imageVariantVariantOptionsToHclTerraform;
exports.imageVariantVariantToTerraform = imageVariantVariantToTerraform;
exports.imageVariantVariantToHclTerraform = imageVariantVariantToHclTerraform;
var cdktf = require("cdktf");
function imageVariantOptionsToTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
        fit: cdktf.stringToTerraform(struct.fit),
        height: cdktf.numberToTerraform(struct.height),
        metadata: cdktf.stringToTerraform(struct.metadata),
        width: cdktf.numberToTerraform(struct.width),
    };
}
function imageVariantOptionsToHclTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    var attrs = {
        fit: {
            value: cdktf.stringToHclTerraform(struct.fit),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        height: {
            value: cdktf.numberToHclTerraform(struct.height),
            isBlock: false,
            type: "simple",
            storageClassType: "number",
        },
        metadata: {
            value: cdktf.stringToHclTerraform(struct.metadata),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        width: {
            value: cdktf.numberToHclTerraform(struct.width),
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
}
var ImageVariantOptionsOutputReference = /** @class */ (function (_super) {
    __extends(ImageVariantOptionsOutputReference, _super);
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    function ImageVariantOptionsOutputReference(terraformResource, terraformAttribute) {
        var _this = _super.call(this, terraformResource, terraformAttribute, false) || this;
        _this.isEmptyObject = false;
        return _this;
    }
    Object.defineProperty(ImageVariantOptionsOutputReference.prototype, "internalValue", {
        get: function () {
            if (this.resolvableValue) {
                return this.resolvableValue;
            }
            var hasAnyValues = this.isEmptyObject;
            var internalValueResult = {};
            if (this._fit !== undefined) {
                hasAnyValues = true;
                internalValueResult.fit = this._fit;
            }
            if (this._height !== undefined) {
                hasAnyValues = true;
                internalValueResult.height = this._height;
            }
            if (this._metadata !== undefined) {
                hasAnyValues = true;
                internalValueResult.metadata = this._metadata;
            }
            if (this._width !== undefined) {
                hasAnyValues = true;
                internalValueResult.width = this._width;
            }
            return hasAnyValues ? internalValueResult : undefined;
        },
        set: function (value) {
            if (value === undefined) {
                this.isEmptyObject = false;
                this.resolvableValue = undefined;
                this._fit = undefined;
                this._height = undefined;
                this._metadata = undefined;
                this._width = undefined;
            }
            else if (cdktf.Tokenization.isResolvable(value)) {
                this.isEmptyObject = false;
                this.resolvableValue = value;
            }
            else {
                this.isEmptyObject = Object.keys(value).length === 0;
                this.resolvableValue = undefined;
                this._fit = value.fit;
                this._height = value.height;
                this._metadata = value.metadata;
                this._width = value.width;
            }
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ImageVariantOptionsOutputReference.prototype, "fit", {
        get: function () {
            return this.getStringAttribute('fit');
        },
        set: function (value) {
            this._fit = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ImageVariantOptionsOutputReference.prototype, "fitInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._fit;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ImageVariantOptionsOutputReference.prototype, "height", {
        get: function () {
            return this.getNumberAttribute('height');
        },
        set: function (value) {
            this._height = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ImageVariantOptionsOutputReference.prototype, "heightInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._height;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ImageVariantOptionsOutputReference.prototype, "metadata", {
        get: function () {
            return this.getStringAttribute('metadata');
        },
        set: function (value) {
            this._metadata = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ImageVariantOptionsOutputReference.prototype, "metadataInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._metadata;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ImageVariantOptionsOutputReference.prototype, "width", {
        get: function () {
            return this.getNumberAttribute('width');
        },
        set: function (value) {
            this._width = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ImageVariantOptionsOutputReference.prototype, "widthInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._width;
        },
        enumerable: false,
        configurable: true
    });
    return ImageVariantOptionsOutputReference;
}(cdktf.ComplexObject));
exports.ImageVariantOptionsOutputReference = ImageVariantOptionsOutputReference;
function imageVariantVariantOptionsToTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {};
}
function imageVariantVariantOptionsToHclTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    var attrs = {};
    return attrs;
}
var ImageVariantVariantOptionsOutputReference = /** @class */ (function (_super) {
    __extends(ImageVariantVariantOptionsOutputReference, _super);
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    function ImageVariantVariantOptionsOutputReference(terraformResource, terraformAttribute) {
        var _this = _super.call(this, terraformResource, terraformAttribute, false) || this;
        _this.isEmptyObject = false;
        return _this;
    }
    Object.defineProperty(ImageVariantVariantOptionsOutputReference.prototype, "internalValue", {
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
    Object.defineProperty(ImageVariantVariantOptionsOutputReference.prototype, "fit", {
        // fit - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('fit');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ImageVariantVariantOptionsOutputReference.prototype, "height", {
        // height - computed: true, optional: false, required: false
        get: function () {
            return this.getNumberAttribute('height');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ImageVariantVariantOptionsOutputReference.prototype, "metadata", {
        // metadata - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('metadata');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ImageVariantVariantOptionsOutputReference.prototype, "width", {
        // width - computed: true, optional: false, required: false
        get: function () {
            return this.getNumberAttribute('width');
        },
        enumerable: false,
        configurable: true
    });
    return ImageVariantVariantOptionsOutputReference;
}(cdktf.ComplexObject));
exports.ImageVariantVariantOptionsOutputReference = ImageVariantVariantOptionsOutputReference;
function imageVariantVariantToTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {};
}
function imageVariantVariantToHclTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    var attrs = {};
    return attrs;
}
var ImageVariantVariantOutputReference = /** @class */ (function (_super) {
    __extends(ImageVariantVariantOutputReference, _super);
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    function ImageVariantVariantOutputReference(terraformResource, terraformAttribute) {
        var _this = _super.call(this, terraformResource, terraformAttribute, false) || this;
        _this.isEmptyObject = false;
        // options - computed: true, optional: false, required: false
        _this._options = new ImageVariantVariantOptionsOutputReference(_this, "options");
        return _this;
    }
    Object.defineProperty(ImageVariantVariantOutputReference.prototype, "internalValue", {
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
    Object.defineProperty(ImageVariantVariantOutputReference.prototype, "id", {
        // id - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('id');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ImageVariantVariantOutputReference.prototype, "neverRequireSignedUrls", {
        // never_require_signed_urls - computed: true, optional: false, required: false
        get: function () {
            return this.getBooleanAttribute('never_require_signed_urls');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ImageVariantVariantOutputReference.prototype, "options", {
        get: function () {
            return this._options;
        },
        enumerable: false,
        configurable: true
    });
    return ImageVariantVariantOutputReference;
}(cdktf.ComplexObject));
exports.ImageVariantVariantOutputReference = ImageVariantVariantOutputReference;
/**
* Represents a {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/image_variant cloudflare_image_variant}
*/
var ImageVariant = /** @class */ (function (_super) {
    __extends(ImageVariant, _super);
    // ===========
    // INITIALIZER
    // ===========
    /**
    * Create a new {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/image_variant cloudflare_image_variant} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options ImageVariantConfig
    */
    function ImageVariant(scope, id, config) {
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
        // options - computed: false, optional: false, required: true
        _this._options = new ImageVariantOptionsOutputReference(_this, "options");
        // variant - computed: true, optional: false, required: false
        _this._variant = new ImageVariantVariantOutputReference(_this, "variant");
        _this._accountId = config.accountId;
        _this._id = config.id;
        _this._neverRequireSignedUrls = config.neverRequireSignedUrls;
        _this._options.internalValue = config.options;
        return _this;
    }
    // ==============
    // STATIC Methods
    // ==============
    /**
    * Generates CDKTF code for importing a ImageVariant resource upon running "cdktf plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the ImageVariant to import
    * @param importFromId The id of the existing ImageVariant that should be imported. Refer to the {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/image_variant#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the ImageVariant to import is found
    */
    ImageVariant.generateConfigForImport = function (scope, importToId, importFromId, provider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "cloudflare_image_variant", importId: importFromId, provider: provider });
    };
    Object.defineProperty(ImageVariant.prototype, "accountId", {
        get: function () {
            return this.getStringAttribute('account_id');
        },
        set: function (value) {
            this._accountId = value;
        },
        enumerable: false,
        configurable: true
    });
    ImageVariant.prototype.resetAccountId = function () {
        this._accountId = undefined;
    };
    Object.defineProperty(ImageVariant.prototype, "accountIdInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._accountId;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ImageVariant.prototype, "id", {
        get: function () {
            return this.getStringAttribute('id');
        },
        set: function (value) {
            this._id = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ImageVariant.prototype, "idInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._id;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ImageVariant.prototype, "neverRequireSignedUrls", {
        get: function () {
            return this.getBooleanAttribute('never_require_signed_urls');
        },
        set: function (value) {
            this._neverRequireSignedUrls = value;
        },
        enumerable: false,
        configurable: true
    });
    ImageVariant.prototype.resetNeverRequireSignedUrls = function () {
        this._neverRequireSignedUrls = undefined;
    };
    Object.defineProperty(ImageVariant.prototype, "neverRequireSignedUrlsInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._neverRequireSignedUrls;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ImageVariant.prototype, "options", {
        get: function () {
            return this._options;
        },
        enumerable: false,
        configurable: true
    });
    ImageVariant.prototype.putOptions = function (value) {
        this._options.internalValue = value;
    };
    Object.defineProperty(ImageVariant.prototype, "optionsInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._options.internalValue;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ImageVariant.prototype, "variant", {
        get: function () {
            return this._variant;
        },
        enumerable: false,
        configurable: true
    });
    // =========
    // SYNTHESIS
    // =========
    ImageVariant.prototype.synthesizeAttributes = function () {
        return {
            account_id: cdktf.stringToTerraform(this._accountId),
            id: cdktf.stringToTerraform(this._id),
            never_require_signed_urls: cdktf.booleanToTerraform(this._neverRequireSignedUrls),
            options: imageVariantOptionsToTerraform(this._options.internalValue),
        };
    };
    ImageVariant.prototype.synthesizeHclAttributes = function () {
        var attrs = {
            account_id: {
                value: cdktf.stringToHclTerraform(this._accountId),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            id: {
                value: cdktf.stringToHclTerraform(this._id),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            never_require_signed_urls: {
                value: cdktf.booleanToHclTerraform(this._neverRequireSignedUrls),
                isBlock: false,
                type: "simple",
                storageClassType: "boolean",
            },
            options: {
                value: imageVariantOptionsToHclTerraform(this._options.internalValue),
                isBlock: true,
                type: "struct",
                storageClassType: "ImageVariantOptions",
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
    ImageVariant.tfResourceType = "cloudflare_image_variant";
    return ImageVariant;
}(cdktf.TerraformResource));
exports.ImageVariant = ImageVariant;
