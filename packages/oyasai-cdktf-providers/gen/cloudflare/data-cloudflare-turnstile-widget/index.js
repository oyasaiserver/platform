"use strict";
// https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/data-sources/turnstile_widget
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
exports.DataCloudflareTurnstileWidget = exports.DataCloudflareTurnstileWidgetFilterOutputReference = void 0;
exports.dataCloudflareTurnstileWidgetFilterToTerraform = dataCloudflareTurnstileWidgetFilterToTerraform;
exports.dataCloudflareTurnstileWidgetFilterToHclTerraform = dataCloudflareTurnstileWidgetFilterToHclTerraform;
var cdktf = require("cdktf");
function dataCloudflareTurnstileWidgetFilterToTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
        direction: cdktf.stringToTerraform(struct.direction),
        filter: cdktf.stringToTerraform(struct.filter),
        order: cdktf.stringToTerraform(struct.order),
    };
}
function dataCloudflareTurnstileWidgetFilterToHclTerraform(struct) {
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
        filter: {
            value: cdktf.stringToHclTerraform(struct.filter),
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
    };
    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(function (_a) {
        var _ = _a[0], value = _a[1];
        return value !== undefined && value.value !== undefined;
    }));
}
var DataCloudflareTurnstileWidgetFilterOutputReference = /** @class */ (function (_super) {
    __extends(DataCloudflareTurnstileWidgetFilterOutputReference, _super);
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    function DataCloudflareTurnstileWidgetFilterOutputReference(terraformResource, terraformAttribute) {
        var _this = _super.call(this, terraformResource, terraformAttribute, false) || this;
        _this.isEmptyObject = false;
        return _this;
    }
    Object.defineProperty(DataCloudflareTurnstileWidgetFilterOutputReference.prototype, "internalValue", {
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
            if (this._filter !== undefined) {
                hasAnyValues = true;
                internalValueResult.filter = this._filter;
            }
            if (this._order !== undefined) {
                hasAnyValues = true;
                internalValueResult.order = this._order;
            }
            return hasAnyValues ? internalValueResult : undefined;
        },
        set: function (value) {
            if (value === undefined) {
                this.isEmptyObject = false;
                this.resolvableValue = undefined;
                this._direction = undefined;
                this._filter = undefined;
                this._order = undefined;
            }
            else if (cdktf.Tokenization.isResolvable(value)) {
                this.isEmptyObject = false;
                this.resolvableValue = value;
            }
            else {
                this.isEmptyObject = Object.keys(value).length === 0;
                this.resolvableValue = undefined;
                this._direction = value.direction;
                this._filter = value.filter;
                this._order = value.order;
            }
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareTurnstileWidgetFilterOutputReference.prototype, "direction", {
        get: function () {
            return this.getStringAttribute('direction');
        },
        set: function (value) {
            this._direction = value;
        },
        enumerable: false,
        configurable: true
    });
    DataCloudflareTurnstileWidgetFilterOutputReference.prototype.resetDirection = function () {
        this._direction = undefined;
    };
    Object.defineProperty(DataCloudflareTurnstileWidgetFilterOutputReference.prototype, "directionInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._direction;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareTurnstileWidgetFilterOutputReference.prototype, "filter", {
        get: function () {
            return this.getStringAttribute('filter');
        },
        set: function (value) {
            this._filter = value;
        },
        enumerable: false,
        configurable: true
    });
    DataCloudflareTurnstileWidgetFilterOutputReference.prototype.resetFilter = function () {
        this._filter = undefined;
    };
    Object.defineProperty(DataCloudflareTurnstileWidgetFilterOutputReference.prototype, "filterInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._filter;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareTurnstileWidgetFilterOutputReference.prototype, "order", {
        get: function () {
            return this.getStringAttribute('order');
        },
        set: function (value) {
            this._order = value;
        },
        enumerable: false,
        configurable: true
    });
    DataCloudflareTurnstileWidgetFilterOutputReference.prototype.resetOrder = function () {
        this._order = undefined;
    };
    Object.defineProperty(DataCloudflareTurnstileWidgetFilterOutputReference.prototype, "orderInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._order;
        },
        enumerable: false,
        configurable: true
    });
    return DataCloudflareTurnstileWidgetFilterOutputReference;
}(cdktf.ComplexObject));
exports.DataCloudflareTurnstileWidgetFilterOutputReference = DataCloudflareTurnstileWidgetFilterOutputReference;
/**
* Represents a {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/data-sources/turnstile_widget cloudflare_turnstile_widget}
*/
var DataCloudflareTurnstileWidget = /** @class */ (function (_super) {
    __extends(DataCloudflareTurnstileWidget, _super);
    // ===========
    // INITIALIZER
    // ===========
    /**
    * Create a new {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/data-sources/turnstile_widget cloudflare_turnstile_widget} Data Source
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options DataCloudflareTurnstileWidgetConfig = {}
    */
    function DataCloudflareTurnstileWidget(scope, id, config) {
        if (config === void 0) { config = {}; }
        var _this = _super.call(this, scope, id, {
            terraformResourceType: 'cloudflare_turnstile_widget',
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
        _this._filter = new DataCloudflareTurnstileWidgetFilterOutputReference(_this, "filter");
        _this._accountId = config.accountId;
        _this._filter.internalValue = config.filter;
        _this._sitekey = config.sitekey;
        return _this;
    }
    // ==============
    // STATIC Methods
    // ==============
    /**
    * Generates CDKTF code for importing a DataCloudflareTurnstileWidget resource upon running "cdktf plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the DataCloudflareTurnstileWidget to import
    * @param importFromId The id of the existing DataCloudflareTurnstileWidget that should be imported. Refer to the {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/data-sources/turnstile_widget#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the DataCloudflareTurnstileWidget to import is found
    */
    DataCloudflareTurnstileWidget.generateConfigForImport = function (scope, importToId, importFromId, provider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "cloudflare_turnstile_widget", importId: importFromId, provider: provider });
    };
    Object.defineProperty(DataCloudflareTurnstileWidget.prototype, "accountId", {
        get: function () {
            return this.getStringAttribute('account_id');
        },
        set: function (value) {
            this._accountId = value;
        },
        enumerable: false,
        configurable: true
    });
    DataCloudflareTurnstileWidget.prototype.resetAccountId = function () {
        this._accountId = undefined;
    };
    Object.defineProperty(DataCloudflareTurnstileWidget.prototype, "accountIdInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._accountId;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareTurnstileWidget.prototype, "botFightMode", {
        // bot_fight_mode - computed: true, optional: false, required: false
        get: function () {
            return this.getBooleanAttribute('bot_fight_mode');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareTurnstileWidget.prototype, "clearanceLevel", {
        // clearance_level - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('clearance_level');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareTurnstileWidget.prototype, "createdOn", {
        // created_on - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('created_on');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareTurnstileWidget.prototype, "domains", {
        // domains - computed: true, optional: false, required: false
        get: function () {
            return this.getListAttribute('domains');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareTurnstileWidget.prototype, "ephemeralId", {
        // ephemeral_id - computed: true, optional: false, required: false
        get: function () {
            return this.getBooleanAttribute('ephemeral_id');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareTurnstileWidget.prototype, "filter", {
        get: function () {
            return this._filter;
        },
        enumerable: false,
        configurable: true
    });
    DataCloudflareTurnstileWidget.prototype.putFilter = function (value) {
        this._filter.internalValue = value;
    };
    DataCloudflareTurnstileWidget.prototype.resetFilter = function () {
        this._filter.internalValue = undefined;
    };
    Object.defineProperty(DataCloudflareTurnstileWidget.prototype, "filterInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._filter.internalValue;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareTurnstileWidget.prototype, "id", {
        // id - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('id');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareTurnstileWidget.prototype, "mode", {
        // mode - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('mode');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareTurnstileWidget.prototype, "modifiedOn", {
        // modified_on - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('modified_on');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareTurnstileWidget.prototype, "name", {
        // name - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('name');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareTurnstileWidget.prototype, "offlabel", {
        // offlabel - computed: true, optional: false, required: false
        get: function () {
            return this.getBooleanAttribute('offlabel');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareTurnstileWidget.prototype, "region", {
        // region - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('region');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareTurnstileWidget.prototype, "secret", {
        // secret - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('secret');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareTurnstileWidget.prototype, "sitekey", {
        get: function () {
            return this.getStringAttribute('sitekey');
        },
        set: function (value) {
            this._sitekey = value;
        },
        enumerable: false,
        configurable: true
    });
    DataCloudflareTurnstileWidget.prototype.resetSitekey = function () {
        this._sitekey = undefined;
    };
    Object.defineProperty(DataCloudflareTurnstileWidget.prototype, "sitekeyInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._sitekey;
        },
        enumerable: false,
        configurable: true
    });
    // =========
    // SYNTHESIS
    // =========
    DataCloudflareTurnstileWidget.prototype.synthesizeAttributes = function () {
        return {
            account_id: cdktf.stringToTerraform(this._accountId),
            filter: dataCloudflareTurnstileWidgetFilterToTerraform(this._filter.internalValue),
            sitekey: cdktf.stringToTerraform(this._sitekey),
        };
    };
    DataCloudflareTurnstileWidget.prototype.synthesizeHclAttributes = function () {
        var attrs = {
            account_id: {
                value: cdktf.stringToHclTerraform(this._accountId),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            filter: {
                value: dataCloudflareTurnstileWidgetFilterToHclTerraform(this._filter.internalValue),
                isBlock: true,
                type: "struct",
                storageClassType: "DataCloudflareTurnstileWidgetFilter",
            },
            sitekey: {
                value: cdktf.stringToHclTerraform(this._sitekey),
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
    DataCloudflareTurnstileWidget.tfResourceType = "cloudflare_turnstile_widget";
    return DataCloudflareTurnstileWidget;
}(cdktf.TerraformDataSource));
exports.DataCloudflareTurnstileWidget = DataCloudflareTurnstileWidget;
