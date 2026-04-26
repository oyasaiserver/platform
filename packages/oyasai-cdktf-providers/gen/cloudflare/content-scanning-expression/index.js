"use strict";
// https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/content_scanning_expression
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
exports.ContentScanningExpression = exports.ContentScanningExpressionBodyList = exports.ContentScanningExpressionBodyOutputReference = void 0;
exports.contentScanningExpressionBodyToTerraform = contentScanningExpressionBodyToTerraform;
exports.contentScanningExpressionBodyToHclTerraform = contentScanningExpressionBodyToHclTerraform;
var cdktf = require("cdktf");
function contentScanningExpressionBodyToTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
        payload: cdktf.stringToTerraform(struct.payload),
    };
}
function contentScanningExpressionBodyToHclTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    var attrs = {
        payload: {
            value: cdktf.stringToHclTerraform(struct.payload),
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
}
var ContentScanningExpressionBodyOutputReference = /** @class */ (function (_super) {
    __extends(ContentScanningExpressionBodyOutputReference, _super);
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    function ContentScanningExpressionBodyOutputReference(terraformResource, terraformAttribute, complexObjectIndex, complexObjectIsFromSet) {
        var _this = _super.call(this, terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex) || this;
        _this.isEmptyObject = false;
        return _this;
    }
    Object.defineProperty(ContentScanningExpressionBodyOutputReference.prototype, "internalValue", {
        get: function () {
            if (this.resolvableValue) {
                return this.resolvableValue;
            }
            var hasAnyValues = this.isEmptyObject;
            var internalValueResult = {};
            if (this._payload !== undefined) {
                hasAnyValues = true;
                internalValueResult.payload = this._payload;
            }
            return hasAnyValues ? internalValueResult : undefined;
        },
        set: function (value) {
            if (value === undefined) {
                this.isEmptyObject = false;
                this.resolvableValue = undefined;
                this._payload = undefined;
            }
            else if (cdktf.Tokenization.isResolvable(value)) {
                this.isEmptyObject = false;
                this.resolvableValue = value;
            }
            else {
                this.isEmptyObject = Object.keys(value).length === 0;
                this.resolvableValue = undefined;
                this._payload = value.payload;
            }
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ContentScanningExpressionBodyOutputReference.prototype, "payload", {
        get: function () {
            return this.getStringAttribute('payload');
        },
        set: function (value) {
            this._payload = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ContentScanningExpressionBodyOutputReference.prototype, "payloadInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._payload;
        },
        enumerable: false,
        configurable: true
    });
    return ContentScanningExpressionBodyOutputReference;
}(cdktf.ComplexObject));
exports.ContentScanningExpressionBodyOutputReference = ContentScanningExpressionBodyOutputReference;
var ContentScanningExpressionBodyList = /** @class */ (function (_super) {
    __extends(ContentScanningExpressionBodyList, _super);
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    function ContentScanningExpressionBodyList(terraformResource, terraformAttribute, wrapsSet) {
        var _this = _super.call(this, terraformResource, terraformAttribute, wrapsSet) || this;
        _this.terraformResource = terraformResource;
        _this.terraformAttribute = terraformAttribute;
        _this.wrapsSet = wrapsSet;
        return _this;
    }
    /**
    * @param index the index of the item to return
    */
    ContentScanningExpressionBodyList.prototype.get = function (index) {
        return new ContentScanningExpressionBodyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
    };
    return ContentScanningExpressionBodyList;
}(cdktf.ComplexList));
exports.ContentScanningExpressionBodyList = ContentScanningExpressionBodyList;
/**
* Represents a {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/content_scanning_expression cloudflare_content_scanning_expression}
*/
var ContentScanningExpression = /** @class */ (function (_super) {
    __extends(ContentScanningExpression, _super);
    // ===========
    // INITIALIZER
    // ===========
    /**
    * Create a new {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/content_scanning_expression cloudflare_content_scanning_expression} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options ContentScanningExpressionConfig
    */
    function ContentScanningExpression(scope, id, config) {
        var _this = _super.call(this, scope, id, {
            terraformResourceType: 'cloudflare_content_scanning_expression',
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
        // body - computed: false, optional: false, required: true
        _this._body = new ContentScanningExpressionBodyList(_this, "body", false);
        _this._body.internalValue = config.body;
        _this._zoneId = config.zoneId;
        return _this;
    }
    // ==============
    // STATIC Methods
    // ==============
    /**
    * Generates CDKTF code for importing a ContentScanningExpression resource upon running "cdktf plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the ContentScanningExpression to import
    * @param importFromId The id of the existing ContentScanningExpression that should be imported. Refer to the {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/content_scanning_expression#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the ContentScanningExpression to import is found
    */
    ContentScanningExpression.generateConfigForImport = function (scope, importToId, importFromId, provider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "cloudflare_content_scanning_expression", importId: importFromId, provider: provider });
    };
    Object.defineProperty(ContentScanningExpression.prototype, "body", {
        get: function () {
            return this._body;
        },
        enumerable: false,
        configurable: true
    });
    ContentScanningExpression.prototype.putBody = function (value) {
        this._body.internalValue = value;
    };
    Object.defineProperty(ContentScanningExpression.prototype, "bodyInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._body.internalValue;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ContentScanningExpression.prototype, "id", {
        // id - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('id');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ContentScanningExpression.prototype, "zoneId", {
        get: function () {
            return this.getStringAttribute('zone_id');
        },
        set: function (value) {
            this._zoneId = value;
        },
        enumerable: false,
        configurable: true
    });
    ContentScanningExpression.prototype.resetZoneId = function () {
        this._zoneId = undefined;
    };
    Object.defineProperty(ContentScanningExpression.prototype, "zoneIdInput", {
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
    ContentScanningExpression.prototype.synthesizeAttributes = function () {
        return {
            body: cdktf.listMapper(contentScanningExpressionBodyToTerraform, false)(this._body.internalValue),
            zone_id: cdktf.stringToTerraform(this._zoneId),
        };
    };
    ContentScanningExpression.prototype.synthesizeHclAttributes = function () {
        var attrs = {
            body: {
                value: cdktf.listMapperHcl(contentScanningExpressionBodyToHclTerraform, false)(this._body.internalValue),
                isBlock: true,
                type: "list",
                storageClassType: "ContentScanningExpressionBodyList",
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
    ContentScanningExpression.tfResourceType = "cloudflare_content_scanning_expression";
    return ContentScanningExpression;
}(cdktf.TerraformResource));
exports.ContentScanningExpression = ContentScanningExpression;
