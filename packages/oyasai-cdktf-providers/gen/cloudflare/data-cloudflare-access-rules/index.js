"use strict";
// https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/data-sources/access_rules
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
exports.DataCloudflareAccessRules = exports.DataCloudflareAccessRulesResultList = exports.DataCloudflareAccessRulesResultOutputReference = exports.DataCloudflareAccessRulesResultScopeOutputReference = exports.DataCloudflareAccessRulesResultConfigurationOutputReference = exports.DataCloudflareAccessRulesConfigurationOutputReference = void 0;
exports.dataCloudflareAccessRulesConfigurationToTerraform = dataCloudflareAccessRulesConfigurationToTerraform;
exports.dataCloudflareAccessRulesConfigurationToHclTerraform = dataCloudflareAccessRulesConfigurationToHclTerraform;
exports.dataCloudflareAccessRulesResultConfigurationToTerraform = dataCloudflareAccessRulesResultConfigurationToTerraform;
exports.dataCloudflareAccessRulesResultConfigurationToHclTerraform = dataCloudflareAccessRulesResultConfigurationToHclTerraform;
exports.dataCloudflareAccessRulesResultScopeToTerraform = dataCloudflareAccessRulesResultScopeToTerraform;
exports.dataCloudflareAccessRulesResultScopeToHclTerraform = dataCloudflareAccessRulesResultScopeToHclTerraform;
exports.dataCloudflareAccessRulesResultToTerraform = dataCloudflareAccessRulesResultToTerraform;
exports.dataCloudflareAccessRulesResultToHclTerraform = dataCloudflareAccessRulesResultToHclTerraform;
var cdktf = require("cdktf");
function dataCloudflareAccessRulesConfigurationToTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
        target: cdktf.stringToTerraform(struct.target),
        value: cdktf.stringToTerraform(struct.value),
    };
}
function dataCloudflareAccessRulesConfigurationToHclTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    var attrs = {
        target: {
            value: cdktf.stringToHclTerraform(struct.target),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        value: {
            value: cdktf.stringToHclTerraform(struct.value),
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
var DataCloudflareAccessRulesConfigurationOutputReference = /** @class */ (function (_super) {
    __extends(DataCloudflareAccessRulesConfigurationOutputReference, _super);
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    function DataCloudflareAccessRulesConfigurationOutputReference(terraformResource, terraformAttribute) {
        var _this = _super.call(this, terraformResource, terraformAttribute, false) || this;
        _this.isEmptyObject = false;
        return _this;
    }
    Object.defineProperty(DataCloudflareAccessRulesConfigurationOutputReference.prototype, "internalValue", {
        get: function () {
            if (this.resolvableValue) {
                return this.resolvableValue;
            }
            var hasAnyValues = this.isEmptyObject;
            var internalValueResult = {};
            if (this._target !== undefined) {
                hasAnyValues = true;
                internalValueResult.target = this._target;
            }
            if (this._value !== undefined) {
                hasAnyValues = true;
                internalValueResult.value = this._value;
            }
            return hasAnyValues ? internalValueResult : undefined;
        },
        set: function (value) {
            if (value === undefined) {
                this.isEmptyObject = false;
                this.resolvableValue = undefined;
                this._target = undefined;
                this._value = undefined;
            }
            else if (cdktf.Tokenization.isResolvable(value)) {
                this.isEmptyObject = false;
                this.resolvableValue = value;
            }
            else {
                this.isEmptyObject = Object.keys(value).length === 0;
                this.resolvableValue = undefined;
                this._target = value.target;
                this._value = value.value;
            }
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareAccessRulesConfigurationOutputReference.prototype, "target", {
        get: function () {
            return this.getStringAttribute('target');
        },
        set: function (value) {
            this._target = value;
        },
        enumerable: false,
        configurable: true
    });
    DataCloudflareAccessRulesConfigurationOutputReference.prototype.resetTarget = function () {
        this._target = undefined;
    };
    Object.defineProperty(DataCloudflareAccessRulesConfigurationOutputReference.prototype, "targetInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._target;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareAccessRulesConfigurationOutputReference.prototype, "value", {
        get: function () {
            return this.getStringAttribute('value');
        },
        set: function (value) {
            this._value = value;
        },
        enumerable: false,
        configurable: true
    });
    DataCloudflareAccessRulesConfigurationOutputReference.prototype.resetValue = function () {
        this._value = undefined;
    };
    Object.defineProperty(DataCloudflareAccessRulesConfigurationOutputReference.prototype, "valueInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._value;
        },
        enumerable: false,
        configurable: true
    });
    return DataCloudflareAccessRulesConfigurationOutputReference;
}(cdktf.ComplexObject));
exports.DataCloudflareAccessRulesConfigurationOutputReference = DataCloudflareAccessRulesConfigurationOutputReference;
function dataCloudflareAccessRulesResultConfigurationToTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {};
}
function dataCloudflareAccessRulesResultConfigurationToHclTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    var attrs = {};
    return attrs;
}
var DataCloudflareAccessRulesResultConfigurationOutputReference = /** @class */ (function (_super) {
    __extends(DataCloudflareAccessRulesResultConfigurationOutputReference, _super);
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    function DataCloudflareAccessRulesResultConfigurationOutputReference(terraformResource, terraformAttribute) {
        var _this = _super.call(this, terraformResource, terraformAttribute, false) || this;
        _this.isEmptyObject = false;
        return _this;
    }
    Object.defineProperty(DataCloudflareAccessRulesResultConfigurationOutputReference.prototype, "internalValue", {
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
    Object.defineProperty(DataCloudflareAccessRulesResultConfigurationOutputReference.prototype, "target", {
        // target - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('target');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareAccessRulesResultConfigurationOutputReference.prototype, "value", {
        // value - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('value');
        },
        enumerable: false,
        configurable: true
    });
    return DataCloudflareAccessRulesResultConfigurationOutputReference;
}(cdktf.ComplexObject));
exports.DataCloudflareAccessRulesResultConfigurationOutputReference = DataCloudflareAccessRulesResultConfigurationOutputReference;
function dataCloudflareAccessRulesResultScopeToTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {};
}
function dataCloudflareAccessRulesResultScopeToHclTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    var attrs = {};
    return attrs;
}
var DataCloudflareAccessRulesResultScopeOutputReference = /** @class */ (function (_super) {
    __extends(DataCloudflareAccessRulesResultScopeOutputReference, _super);
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    function DataCloudflareAccessRulesResultScopeOutputReference(terraformResource, terraformAttribute) {
        var _this = _super.call(this, terraformResource, terraformAttribute, false) || this;
        _this.isEmptyObject = false;
        return _this;
    }
    Object.defineProperty(DataCloudflareAccessRulesResultScopeOutputReference.prototype, "internalValue", {
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
    Object.defineProperty(DataCloudflareAccessRulesResultScopeOutputReference.prototype, "email", {
        // email - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('email');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareAccessRulesResultScopeOutputReference.prototype, "id", {
        // id - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('id');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareAccessRulesResultScopeOutputReference.prototype, "type", {
        // type - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('type');
        },
        enumerable: false,
        configurable: true
    });
    return DataCloudflareAccessRulesResultScopeOutputReference;
}(cdktf.ComplexObject));
exports.DataCloudflareAccessRulesResultScopeOutputReference = DataCloudflareAccessRulesResultScopeOutputReference;
function dataCloudflareAccessRulesResultToTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {};
}
function dataCloudflareAccessRulesResultToHclTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    var attrs = {};
    return attrs;
}
var DataCloudflareAccessRulesResultOutputReference = /** @class */ (function (_super) {
    __extends(DataCloudflareAccessRulesResultOutputReference, _super);
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    function DataCloudflareAccessRulesResultOutputReference(terraformResource, terraformAttribute, complexObjectIndex, complexObjectIsFromSet) {
        var _this = _super.call(this, terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex) || this;
        _this.isEmptyObject = false;
        // configuration - computed: true, optional: false, required: false
        _this._configuration = new DataCloudflareAccessRulesResultConfigurationOutputReference(_this, "configuration");
        // scope - computed: true, optional: false, required: false
        _this._scope = new DataCloudflareAccessRulesResultScopeOutputReference(_this, "scope");
        return _this;
    }
    Object.defineProperty(DataCloudflareAccessRulesResultOutputReference.prototype, "internalValue", {
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
    Object.defineProperty(DataCloudflareAccessRulesResultOutputReference.prototype, "allowedModes", {
        // allowed_modes - computed: true, optional: false, required: false
        get: function () {
            return this.getListAttribute('allowed_modes');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareAccessRulesResultOutputReference.prototype, "configuration", {
        get: function () {
            return this._configuration;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareAccessRulesResultOutputReference.prototype, "createdOn", {
        // created_on - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('created_on');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareAccessRulesResultOutputReference.prototype, "id", {
        // id - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('id');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareAccessRulesResultOutputReference.prototype, "mode", {
        // mode - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('mode');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareAccessRulesResultOutputReference.prototype, "modifiedOn", {
        // modified_on - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('modified_on');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareAccessRulesResultOutputReference.prototype, "notes", {
        // notes - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('notes');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareAccessRulesResultOutputReference.prototype, "scope", {
        get: function () {
            return this._scope;
        },
        enumerable: false,
        configurable: true
    });
    return DataCloudflareAccessRulesResultOutputReference;
}(cdktf.ComplexObject));
exports.DataCloudflareAccessRulesResultOutputReference = DataCloudflareAccessRulesResultOutputReference;
var DataCloudflareAccessRulesResultList = /** @class */ (function (_super) {
    __extends(DataCloudflareAccessRulesResultList, _super);
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    function DataCloudflareAccessRulesResultList(terraformResource, terraformAttribute, wrapsSet) {
        var _this = _super.call(this, terraformResource, terraformAttribute, wrapsSet) || this;
        _this.terraformResource = terraformResource;
        _this.terraformAttribute = terraformAttribute;
        _this.wrapsSet = wrapsSet;
        return _this;
    }
    /**
    * @param index the index of the item to return
    */
    DataCloudflareAccessRulesResultList.prototype.get = function (index) {
        return new DataCloudflareAccessRulesResultOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
    };
    return DataCloudflareAccessRulesResultList;
}(cdktf.ComplexList));
exports.DataCloudflareAccessRulesResultList = DataCloudflareAccessRulesResultList;
/**
* Represents a {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/data-sources/access_rules cloudflare_access_rules}
*/
var DataCloudflareAccessRules = /** @class */ (function (_super) {
    __extends(DataCloudflareAccessRules, _super);
    // ===========
    // INITIALIZER
    // ===========
    /**
    * Create a new {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/data-sources/access_rules cloudflare_access_rules} Data Source
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options DataCloudflareAccessRulesConfig = {}
    */
    function DataCloudflareAccessRules(scope, id, config) {
        if (config === void 0) { config = {}; }
        var _this = _super.call(this, scope, id, {
            terraformResourceType: 'cloudflare_access_rules',
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
        // configuration - computed: false, optional: true, required: false
        _this._configuration = new DataCloudflareAccessRulesConfigurationOutputReference(_this, "configuration");
        // result - computed: true, optional: false, required: false
        _this._result = new DataCloudflareAccessRulesResultList(_this, "result", false);
        _this._accountId = config.accountId;
        _this._configuration.internalValue = config.configuration;
        _this._direction = config.direction;
        _this._match = config.match;
        _this._maxItems = config.maxItems;
        _this._mode = config.mode;
        _this._notes = config.notes;
        _this._order = config.order;
        _this._zoneId = config.zoneId;
        return _this;
    }
    // ==============
    // STATIC Methods
    // ==============
    /**
    * Generates CDKTF code for importing a DataCloudflareAccessRules resource upon running "cdktf plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the DataCloudflareAccessRules to import
    * @param importFromId The id of the existing DataCloudflareAccessRules that should be imported. Refer to the {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/data-sources/access_rules#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the DataCloudflareAccessRules to import is found
    */
    DataCloudflareAccessRules.generateConfigForImport = function (scope, importToId, importFromId, provider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "cloudflare_access_rules", importId: importFromId, provider: provider });
    };
    Object.defineProperty(DataCloudflareAccessRules.prototype, "accountId", {
        get: function () {
            return this.getStringAttribute('account_id');
        },
        set: function (value) {
            this._accountId = value;
        },
        enumerable: false,
        configurable: true
    });
    DataCloudflareAccessRules.prototype.resetAccountId = function () {
        this._accountId = undefined;
    };
    Object.defineProperty(DataCloudflareAccessRules.prototype, "accountIdInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._accountId;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareAccessRules.prototype, "configuration", {
        get: function () {
            return this._configuration;
        },
        enumerable: false,
        configurable: true
    });
    DataCloudflareAccessRules.prototype.putConfiguration = function (value) {
        this._configuration.internalValue = value;
    };
    DataCloudflareAccessRules.prototype.resetConfiguration = function () {
        this._configuration.internalValue = undefined;
    };
    Object.defineProperty(DataCloudflareAccessRules.prototype, "configurationInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._configuration.internalValue;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareAccessRules.prototype, "direction", {
        get: function () {
            return this.getStringAttribute('direction');
        },
        set: function (value) {
            this._direction = value;
        },
        enumerable: false,
        configurable: true
    });
    DataCloudflareAccessRules.prototype.resetDirection = function () {
        this._direction = undefined;
    };
    Object.defineProperty(DataCloudflareAccessRules.prototype, "directionInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._direction;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareAccessRules.prototype, "match", {
        get: function () {
            return this.getStringAttribute('match');
        },
        set: function (value) {
            this._match = value;
        },
        enumerable: false,
        configurable: true
    });
    DataCloudflareAccessRules.prototype.resetMatch = function () {
        this._match = undefined;
    };
    Object.defineProperty(DataCloudflareAccessRules.prototype, "matchInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._match;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareAccessRules.prototype, "maxItems", {
        get: function () {
            return this.getNumberAttribute('max_items');
        },
        set: function (value) {
            this._maxItems = value;
        },
        enumerable: false,
        configurable: true
    });
    DataCloudflareAccessRules.prototype.resetMaxItems = function () {
        this._maxItems = undefined;
    };
    Object.defineProperty(DataCloudflareAccessRules.prototype, "maxItemsInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._maxItems;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareAccessRules.prototype, "mode", {
        get: function () {
            return this.getStringAttribute('mode');
        },
        set: function (value) {
            this._mode = value;
        },
        enumerable: false,
        configurable: true
    });
    DataCloudflareAccessRules.prototype.resetMode = function () {
        this._mode = undefined;
    };
    Object.defineProperty(DataCloudflareAccessRules.prototype, "modeInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._mode;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareAccessRules.prototype, "notes", {
        get: function () {
            return this.getStringAttribute('notes');
        },
        set: function (value) {
            this._notes = value;
        },
        enumerable: false,
        configurable: true
    });
    DataCloudflareAccessRules.prototype.resetNotes = function () {
        this._notes = undefined;
    };
    Object.defineProperty(DataCloudflareAccessRules.prototype, "notesInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._notes;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareAccessRules.prototype, "order", {
        get: function () {
            return this.getStringAttribute('order');
        },
        set: function (value) {
            this._order = value;
        },
        enumerable: false,
        configurable: true
    });
    DataCloudflareAccessRules.prototype.resetOrder = function () {
        this._order = undefined;
    };
    Object.defineProperty(DataCloudflareAccessRules.prototype, "orderInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._order;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareAccessRules.prototype, "result", {
        get: function () {
            return this._result;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareAccessRules.prototype, "zoneId", {
        get: function () {
            return this.getStringAttribute('zone_id');
        },
        set: function (value) {
            this._zoneId = value;
        },
        enumerable: false,
        configurable: true
    });
    DataCloudflareAccessRules.prototype.resetZoneId = function () {
        this._zoneId = undefined;
    };
    Object.defineProperty(DataCloudflareAccessRules.prototype, "zoneIdInput", {
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
    DataCloudflareAccessRules.prototype.synthesizeAttributes = function () {
        return {
            account_id: cdktf.stringToTerraform(this._accountId),
            configuration: dataCloudflareAccessRulesConfigurationToTerraform(this._configuration.internalValue),
            direction: cdktf.stringToTerraform(this._direction),
            match: cdktf.stringToTerraform(this._match),
            max_items: cdktf.numberToTerraform(this._maxItems),
            mode: cdktf.stringToTerraform(this._mode),
            notes: cdktf.stringToTerraform(this._notes),
            order: cdktf.stringToTerraform(this._order),
            zone_id: cdktf.stringToTerraform(this._zoneId),
        };
    };
    DataCloudflareAccessRules.prototype.synthesizeHclAttributes = function () {
        var attrs = {
            account_id: {
                value: cdktf.stringToHclTerraform(this._accountId),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            configuration: {
                value: dataCloudflareAccessRulesConfigurationToHclTerraform(this._configuration.internalValue),
                isBlock: true,
                type: "struct",
                storageClassType: "DataCloudflareAccessRulesConfiguration",
            },
            direction: {
                value: cdktf.stringToHclTerraform(this._direction),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            match: {
                value: cdktf.stringToHclTerraform(this._match),
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
            mode: {
                value: cdktf.stringToHclTerraform(this._mode),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            notes: {
                value: cdktf.stringToHclTerraform(this._notes),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            order: {
                value: cdktf.stringToHclTerraform(this._order),
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
    DataCloudflareAccessRules.tfResourceType = "cloudflare_access_rules";
    return DataCloudflareAccessRules;
}(cdktf.TerraformDataSource));
exports.DataCloudflareAccessRules = DataCloudflareAccessRules;
