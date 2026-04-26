"use strict";
// https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/data-sources/email_security_block_sender
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
exports.DataCloudflareEmailSecurityBlockSender = exports.DataCloudflareEmailSecurityBlockSenderFilterOutputReference = void 0;
exports.dataCloudflareEmailSecurityBlockSenderFilterToTerraform = dataCloudflareEmailSecurityBlockSenderFilterToTerraform;
exports.dataCloudflareEmailSecurityBlockSenderFilterToHclTerraform = dataCloudflareEmailSecurityBlockSenderFilterToHclTerraform;
var cdktf = require("cdktf");
function dataCloudflareEmailSecurityBlockSenderFilterToTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
        direction: cdktf.stringToTerraform(struct.direction),
        order: cdktf.stringToTerraform(struct.order),
        pattern: cdktf.stringToTerraform(struct.pattern),
        pattern_type: cdktf.stringToTerraform(struct.patternType),
        search: cdktf.stringToTerraform(struct.search),
    };
}
function dataCloudflareEmailSecurityBlockSenderFilterToHclTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    var attrs = {
        direction: {
            value: cdktf.stringToHclTerraform(struct.direction),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        order: {
            value: cdktf.stringToHclTerraform(struct.order),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        pattern: {
            value: cdktf.stringToHclTerraform(struct.pattern),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        pattern_type: {
            value: cdktf.stringToHclTerraform(struct.patternType),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        search: {
            value: cdktf.stringToHclTerraform(struct.search),
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
var DataCloudflareEmailSecurityBlockSenderFilterOutputReference = /** @class */ (function (_super) {
    __extends(DataCloudflareEmailSecurityBlockSenderFilterOutputReference, _super);
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    function DataCloudflareEmailSecurityBlockSenderFilterOutputReference(terraformResource, terraformAttribute) {
        var _this = _super.call(this, terraformResource, terraformAttribute, false) || this;
        _this.isEmptyObject = false;
        return _this;
    }
    Object.defineProperty(DataCloudflareEmailSecurityBlockSenderFilterOutputReference.prototype, "internalValue", {
        get: function () {
            if (this.resolvableValue) {
                return this.resolvableValue;
            }
            var hasAnyValues = this.isEmptyObject;
            var internalValueResult = {};
            if (this._direction !== undefined) {
                hasAnyValues = true;
                internalValueResult.direction = this._direction;
            }
            if (this._order !== undefined) {
                hasAnyValues = true;
                internalValueResult.order = this._order;
            }
            if (this._pattern !== undefined) {
                hasAnyValues = true;
                internalValueResult.pattern = this._pattern;
            }
            if (this._patternType !== undefined) {
                hasAnyValues = true;
                internalValueResult.patternType = this._patternType;
            }
            if (this._search !== undefined) {
                hasAnyValues = true;
                internalValueResult.search = this._search;
            }
            return hasAnyValues ? internalValueResult : undefined;
        },
        set: function (value) {
            if (value === undefined) {
                this.isEmptyObject = false;
                this.resolvableValue = undefined;
                this._direction = undefined;
                this._order = undefined;
                this._pattern = undefined;
                this._patternType = undefined;
                this._search = undefined;
            }
            else if (cdktf.Tokenization.isResolvable(value)) {
                this.isEmptyObject = false;
                this.resolvableValue = value;
            }
            else {
                this.isEmptyObject = Object.keys(value).length === 0;
                this.resolvableValue = undefined;
                this._direction = value.direction;
                this._order = value.order;
                this._pattern = value.pattern;
                this._patternType = value.patternType;
                this._search = value.search;
            }
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareEmailSecurityBlockSenderFilterOutputReference.prototype, "direction", {
        get: function () {
            return this.getStringAttribute('direction');
        },
        set: function (value) {
            this._direction = value;
        },
        enumerable: false,
        configurable: true
    });
    DataCloudflareEmailSecurityBlockSenderFilterOutputReference.prototype.resetDirection = function () {
        this._direction = undefined;
    };
    Object.defineProperty(DataCloudflareEmailSecurityBlockSenderFilterOutputReference.prototype, "directionInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._direction;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareEmailSecurityBlockSenderFilterOutputReference.prototype, "order", {
        get: function () {
            return this.getStringAttribute('order');
        },
        set: function (value) {
            this._order = value;
        },
        enumerable: false,
        configurable: true
    });
    DataCloudflareEmailSecurityBlockSenderFilterOutputReference.prototype.resetOrder = function () {
        this._order = undefined;
    };
    Object.defineProperty(DataCloudflareEmailSecurityBlockSenderFilterOutputReference.prototype, "orderInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._order;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareEmailSecurityBlockSenderFilterOutputReference.prototype, "pattern", {
        get: function () {
            return this.getStringAttribute('pattern');
        },
        set: function (value) {
            this._pattern = value;
        },
        enumerable: false,
        configurable: true
    });
    DataCloudflareEmailSecurityBlockSenderFilterOutputReference.prototype.resetPattern = function () {
        this._pattern = undefined;
    };
    Object.defineProperty(DataCloudflareEmailSecurityBlockSenderFilterOutputReference.prototype, "patternInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._pattern;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareEmailSecurityBlockSenderFilterOutputReference.prototype, "patternType", {
        get: function () {
            return this.getStringAttribute('pattern_type');
        },
        set: function (value) {
            this._patternType = value;
        },
        enumerable: false,
        configurable: true
    });
    DataCloudflareEmailSecurityBlockSenderFilterOutputReference.prototype.resetPatternType = function () {
        this._patternType = undefined;
    };
    Object.defineProperty(DataCloudflareEmailSecurityBlockSenderFilterOutputReference.prototype, "patternTypeInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._patternType;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareEmailSecurityBlockSenderFilterOutputReference.prototype, "search", {
        get: function () {
            return this.getStringAttribute('search');
        },
        set: function (value) {
            this._search = value;
        },
        enumerable: false,
        configurable: true
    });
    DataCloudflareEmailSecurityBlockSenderFilterOutputReference.prototype.resetSearch = function () {
        this._search = undefined;
    };
    Object.defineProperty(DataCloudflareEmailSecurityBlockSenderFilterOutputReference.prototype, "searchInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._search;
        },
        enumerable: false,
        configurable: true
    });
    return DataCloudflareEmailSecurityBlockSenderFilterOutputReference;
}(cdktf.ComplexObject));
exports.DataCloudflareEmailSecurityBlockSenderFilterOutputReference = DataCloudflareEmailSecurityBlockSenderFilterOutputReference;
/**
* Represents a {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/data-sources/email_security_block_sender cloudflare_email_security_block_sender}
*/
var DataCloudflareEmailSecurityBlockSender = /** @class */ (function (_super) {
    __extends(DataCloudflareEmailSecurityBlockSender, _super);
    // ===========
    // INITIALIZER
    // ===========
    /**
    * Create a new {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/data-sources/email_security_block_sender cloudflare_email_security_block_sender} Data Source
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options DataCloudflareEmailSecurityBlockSenderConfig = {}
    */
    function DataCloudflareEmailSecurityBlockSender(scope, id, config) {
        if (config === void 0) { config = {}; }
        var _this = _super.call(this, scope, id, {
            terraformResourceType: 'cloudflare_email_security_block_sender',
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
        // filter - computed: false, optional: true, required: false
        _this._filter = new DataCloudflareEmailSecurityBlockSenderFilterOutputReference(_this, "filter");
        _this._accountId = config.accountId;
        _this._filter.internalValue = config.filter;
        _this._patternId = config.patternId;
        return _this;
    }
    // ==============
    // STATIC Methods
    // ==============
    /**
    * Generates CDKTF code for importing a DataCloudflareEmailSecurityBlockSender resource upon running "cdktf plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the DataCloudflareEmailSecurityBlockSender to import
    * @param importFromId The id of the existing DataCloudflareEmailSecurityBlockSender that should be imported. Refer to the {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/data-sources/email_security_block_sender#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the DataCloudflareEmailSecurityBlockSender to import is found
    */
    DataCloudflareEmailSecurityBlockSender.generateConfigForImport = function (scope, importToId, importFromId, provider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "cloudflare_email_security_block_sender", importId: importFromId, provider: provider });
    };
    Object.defineProperty(DataCloudflareEmailSecurityBlockSender.prototype, "accountId", {
        get: function () {
            return this.getStringAttribute('account_id');
        },
        set: function (value) {
            this._accountId = value;
        },
        enumerable: false,
        configurable: true
    });
    DataCloudflareEmailSecurityBlockSender.prototype.resetAccountId = function () {
        this._accountId = undefined;
    };
    Object.defineProperty(DataCloudflareEmailSecurityBlockSender.prototype, "accountIdInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._accountId;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareEmailSecurityBlockSender.prototype, "comments", {
        // comments - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('comments');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareEmailSecurityBlockSender.prototype, "createdAt", {
        // created_at - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('created_at');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareEmailSecurityBlockSender.prototype, "filter", {
        get: function () {
            return this._filter;
        },
        enumerable: false,
        configurable: true
    });
    DataCloudflareEmailSecurityBlockSender.prototype.putFilter = function (value) {
        this._filter.internalValue = value;
    };
    DataCloudflareEmailSecurityBlockSender.prototype.resetFilter = function () {
        this._filter.internalValue = undefined;
    };
    Object.defineProperty(DataCloudflareEmailSecurityBlockSender.prototype, "filterInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._filter.internalValue;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareEmailSecurityBlockSender.prototype, "id", {
        // id - computed: true, optional: false, required: false
        get: function () {
            return this.getNumberAttribute('id');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareEmailSecurityBlockSender.prototype, "isRegex", {
        // is_regex - computed: true, optional: false, required: false
        get: function () {
            return this.getBooleanAttribute('is_regex');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareEmailSecurityBlockSender.prototype, "lastModified", {
        // last_modified - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('last_modified');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareEmailSecurityBlockSender.prototype, "pattern", {
        // pattern - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('pattern');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareEmailSecurityBlockSender.prototype, "patternId", {
        get: function () {
            return this.getNumberAttribute('pattern_id');
        },
        set: function (value) {
            this._patternId = value;
        },
        enumerable: false,
        configurable: true
    });
    DataCloudflareEmailSecurityBlockSender.prototype.resetPatternId = function () {
        this._patternId = undefined;
    };
    Object.defineProperty(DataCloudflareEmailSecurityBlockSender.prototype, "patternIdInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._patternId;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareEmailSecurityBlockSender.prototype, "patternType", {
        // pattern_type - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('pattern_type');
        },
        enumerable: false,
        configurable: true
    });
    // =========
    // SYNTHESIS
    // =========
    DataCloudflareEmailSecurityBlockSender.prototype.synthesizeAttributes = function () {
        return {
            account_id: cdktf.stringToTerraform(this._accountId),
            filter: dataCloudflareEmailSecurityBlockSenderFilterToTerraform(this._filter.internalValue),
            pattern_id: cdktf.numberToTerraform(this._patternId),
        };
    };
    DataCloudflareEmailSecurityBlockSender.prototype.synthesizeHclAttributes = function () {
        var attrs = {
            account_id: {
                value: cdktf.stringToHclTerraform(this._accountId),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            filter: {
                value: dataCloudflareEmailSecurityBlockSenderFilterToHclTerraform(this._filter.internalValue),
                isBlock: true,
                type: "struct",
                storageClassType: "DataCloudflareEmailSecurityBlockSenderFilter",
            },
            pattern_id: {
                value: cdktf.numberToHclTerraform(this._patternId),
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
    DataCloudflareEmailSecurityBlockSender.tfResourceType = "cloudflare_email_security_block_sender";
    return DataCloudflareEmailSecurityBlockSender;
}(cdktf.TerraformDataSource));
exports.DataCloudflareEmailSecurityBlockSender = DataCloudflareEmailSecurityBlockSender;
