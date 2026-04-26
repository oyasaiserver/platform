"use strict";
// https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/email_routing_catch_all
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
exports.EmailRoutingCatchAll = exports.EmailRoutingCatchAllMatchersList = exports.EmailRoutingCatchAllMatchersOutputReference = exports.EmailRoutingCatchAllActionsList = exports.EmailRoutingCatchAllActionsOutputReference = void 0;
exports.emailRoutingCatchAllActionsToTerraform = emailRoutingCatchAllActionsToTerraform;
exports.emailRoutingCatchAllActionsToHclTerraform = emailRoutingCatchAllActionsToHclTerraform;
exports.emailRoutingCatchAllMatchersToTerraform = emailRoutingCatchAllMatchersToTerraform;
exports.emailRoutingCatchAllMatchersToHclTerraform = emailRoutingCatchAllMatchersToHclTerraform;
var cdktf = require("cdktf");
function emailRoutingCatchAllActionsToTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
        type: cdktf.stringToTerraform(struct.type),
        value: cdktf.listMapper(cdktf.stringToTerraform, false)(struct.value),
    };
}
function emailRoutingCatchAllActionsToHclTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    var attrs = {
        type: {
            value: cdktf.stringToHclTerraform(struct.type),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        value: {
            value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct.value),
            isBlock: false,
            type: "list",
            storageClassType: "stringList",
        },
    };
    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(function (_a) {
        var _ = _a[0], value = _a[1];
        return value !== undefined && value.value !== undefined;
    }));
}
var EmailRoutingCatchAllActionsOutputReference = /** @class */ (function (_super) {
    __extends(EmailRoutingCatchAllActionsOutputReference, _super);
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    function EmailRoutingCatchAllActionsOutputReference(terraformResource, terraformAttribute, complexObjectIndex, complexObjectIsFromSet) {
        var _this = _super.call(this, terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex) || this;
        _this.isEmptyObject = false;
        return _this;
    }
    Object.defineProperty(EmailRoutingCatchAllActionsOutputReference.prototype, "internalValue", {
        get: function () {
            if (this.resolvableValue) {
                return this.resolvableValue;
            }
            var hasAnyValues = this.isEmptyObject;
            var internalValueResult = {};
            if (this._type !== undefined) {
                hasAnyValues = true;
                internalValueResult.type = this._type;
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
                this._type = undefined;
                this._value = undefined;
            }
            else if (cdktf.Tokenization.isResolvable(value)) {
                this.isEmptyObject = false;
                this.resolvableValue = value;
            }
            else {
                this.isEmptyObject = Object.keys(value).length === 0;
                this.resolvableValue = undefined;
                this._type = value.type;
                this._value = value.value;
            }
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(EmailRoutingCatchAllActionsOutputReference.prototype, "type", {
        get: function () {
            return this.getStringAttribute('type');
        },
        set: function (value) {
            this._type = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(EmailRoutingCatchAllActionsOutputReference.prototype, "typeInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._type;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(EmailRoutingCatchAllActionsOutputReference.prototype, "value", {
        get: function () {
            return this.getListAttribute('value');
        },
        set: function (value) {
            this._value = value;
        },
        enumerable: false,
        configurable: true
    });
    EmailRoutingCatchAllActionsOutputReference.prototype.resetValue = function () {
        this._value = undefined;
    };
    Object.defineProperty(EmailRoutingCatchAllActionsOutputReference.prototype, "valueInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._value;
        },
        enumerable: false,
        configurable: true
    });
    return EmailRoutingCatchAllActionsOutputReference;
}(cdktf.ComplexObject));
exports.EmailRoutingCatchAllActionsOutputReference = EmailRoutingCatchAllActionsOutputReference;
var EmailRoutingCatchAllActionsList = /** @class */ (function (_super) {
    __extends(EmailRoutingCatchAllActionsList, _super);
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    function EmailRoutingCatchAllActionsList(terraformResource, terraformAttribute, wrapsSet) {
        var _this = _super.call(this, terraformResource, terraformAttribute, wrapsSet) || this;
        _this.terraformResource = terraformResource;
        _this.terraformAttribute = terraformAttribute;
        _this.wrapsSet = wrapsSet;
        return _this;
    }
    /**
    * @param index the index of the item to return
    */
    EmailRoutingCatchAllActionsList.prototype.get = function (index) {
        return new EmailRoutingCatchAllActionsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
    };
    return EmailRoutingCatchAllActionsList;
}(cdktf.ComplexList));
exports.EmailRoutingCatchAllActionsList = EmailRoutingCatchAllActionsList;
function emailRoutingCatchAllMatchersToTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
        type: cdktf.stringToTerraform(struct.type),
    };
}
function emailRoutingCatchAllMatchersToHclTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    var attrs = {
        type: {
            value: cdktf.stringToHclTerraform(struct.type),
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
var EmailRoutingCatchAllMatchersOutputReference = /** @class */ (function (_super) {
    __extends(EmailRoutingCatchAllMatchersOutputReference, _super);
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    function EmailRoutingCatchAllMatchersOutputReference(terraformResource, terraformAttribute, complexObjectIndex, complexObjectIsFromSet) {
        var _this = _super.call(this, terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex) || this;
        _this.isEmptyObject = false;
        return _this;
    }
    Object.defineProperty(EmailRoutingCatchAllMatchersOutputReference.prototype, "internalValue", {
        get: function () {
            if (this.resolvableValue) {
                return this.resolvableValue;
            }
            var hasAnyValues = this.isEmptyObject;
            var internalValueResult = {};
            if (this._type !== undefined) {
                hasAnyValues = true;
                internalValueResult.type = this._type;
            }
            return hasAnyValues ? internalValueResult : undefined;
        },
        set: function (value) {
            if (value === undefined) {
                this.isEmptyObject = false;
                this.resolvableValue = undefined;
                this._type = undefined;
            }
            else if (cdktf.Tokenization.isResolvable(value)) {
                this.isEmptyObject = false;
                this.resolvableValue = value;
            }
            else {
                this.isEmptyObject = Object.keys(value).length === 0;
                this.resolvableValue = undefined;
                this._type = value.type;
            }
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(EmailRoutingCatchAllMatchersOutputReference.prototype, "type", {
        get: function () {
            return this.getStringAttribute('type');
        },
        set: function (value) {
            this._type = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(EmailRoutingCatchAllMatchersOutputReference.prototype, "typeInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._type;
        },
        enumerable: false,
        configurable: true
    });
    return EmailRoutingCatchAllMatchersOutputReference;
}(cdktf.ComplexObject));
exports.EmailRoutingCatchAllMatchersOutputReference = EmailRoutingCatchAllMatchersOutputReference;
var EmailRoutingCatchAllMatchersList = /** @class */ (function (_super) {
    __extends(EmailRoutingCatchAllMatchersList, _super);
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    function EmailRoutingCatchAllMatchersList(terraformResource, terraformAttribute, wrapsSet) {
        var _this = _super.call(this, terraformResource, terraformAttribute, wrapsSet) || this;
        _this.terraformResource = terraformResource;
        _this.terraformAttribute = terraformAttribute;
        _this.wrapsSet = wrapsSet;
        return _this;
    }
    /**
    * @param index the index of the item to return
    */
    EmailRoutingCatchAllMatchersList.prototype.get = function (index) {
        return new EmailRoutingCatchAllMatchersOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
    };
    return EmailRoutingCatchAllMatchersList;
}(cdktf.ComplexList));
exports.EmailRoutingCatchAllMatchersList = EmailRoutingCatchAllMatchersList;
/**
* Represents a {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/email_routing_catch_all cloudflare_email_routing_catch_all}
*/
var EmailRoutingCatchAll = /** @class */ (function (_super) {
    __extends(EmailRoutingCatchAll, _super);
    // ===========
    // INITIALIZER
    // ===========
    /**
    * Create a new {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/email_routing_catch_all cloudflare_email_routing_catch_all} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options EmailRoutingCatchAllConfig
    */
    function EmailRoutingCatchAll(scope, id, config) {
        var _this = _super.call(this, scope, id, {
            terraformResourceType: 'cloudflare_email_routing_catch_all',
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
        // actions - computed: false, optional: false, required: true
        _this._actions = new EmailRoutingCatchAllActionsList(_this, "actions", false);
        // matchers - computed: false, optional: false, required: true
        _this._matchers = new EmailRoutingCatchAllMatchersList(_this, "matchers", false);
        _this._actions.internalValue = config.actions;
        _this._enabled = config.enabled;
        _this._matchers.internalValue = config.matchers;
        _this._name = config.name;
        _this._zoneId = config.zoneId;
        return _this;
    }
    // ==============
    // STATIC Methods
    // ==============
    /**
    * Generates CDKTF code for importing a EmailRoutingCatchAll resource upon running "cdktf plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the EmailRoutingCatchAll to import
    * @param importFromId The id of the existing EmailRoutingCatchAll that should be imported. Refer to the {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/email_routing_catch_all#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the EmailRoutingCatchAll to import is found
    */
    EmailRoutingCatchAll.generateConfigForImport = function (scope, importToId, importFromId, provider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "cloudflare_email_routing_catch_all", importId: importFromId, provider: provider });
    };
    Object.defineProperty(EmailRoutingCatchAll.prototype, "actions", {
        get: function () {
            return this._actions;
        },
        enumerable: false,
        configurable: true
    });
    EmailRoutingCatchAll.prototype.putActions = function (value) {
        this._actions.internalValue = value;
    };
    Object.defineProperty(EmailRoutingCatchAll.prototype, "actionsInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._actions.internalValue;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(EmailRoutingCatchAll.prototype, "enabled", {
        get: function () {
            return this.getBooleanAttribute('enabled');
        },
        set: function (value) {
            this._enabled = value;
        },
        enumerable: false,
        configurable: true
    });
    EmailRoutingCatchAll.prototype.resetEnabled = function () {
        this._enabled = undefined;
    };
    Object.defineProperty(EmailRoutingCatchAll.prototype, "enabledInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._enabled;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(EmailRoutingCatchAll.prototype, "id", {
        // id - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('id');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(EmailRoutingCatchAll.prototype, "matchers", {
        get: function () {
            return this._matchers;
        },
        enumerable: false,
        configurable: true
    });
    EmailRoutingCatchAll.prototype.putMatchers = function (value) {
        this._matchers.internalValue = value;
    };
    Object.defineProperty(EmailRoutingCatchAll.prototype, "matchersInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._matchers.internalValue;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(EmailRoutingCatchAll.prototype, "name", {
        get: function () {
            return this.getStringAttribute('name');
        },
        set: function (value) {
            this._name = value;
        },
        enumerable: false,
        configurable: true
    });
    EmailRoutingCatchAll.prototype.resetName = function () {
        this._name = undefined;
    };
    Object.defineProperty(EmailRoutingCatchAll.prototype, "nameInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._name;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(EmailRoutingCatchAll.prototype, "tag", {
        // tag - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('tag');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(EmailRoutingCatchAll.prototype, "zoneId", {
        get: function () {
            return this.getStringAttribute('zone_id');
        },
        set: function (value) {
            this._zoneId = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(EmailRoutingCatchAll.prototype, "zoneIdInput", {
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
    EmailRoutingCatchAll.prototype.synthesizeAttributes = function () {
        return {
            actions: cdktf.listMapper(emailRoutingCatchAllActionsToTerraform, false)(this._actions.internalValue),
            enabled: cdktf.booleanToTerraform(this._enabled),
            matchers: cdktf.listMapper(emailRoutingCatchAllMatchersToTerraform, false)(this._matchers.internalValue),
            name: cdktf.stringToTerraform(this._name),
            zone_id: cdktf.stringToTerraform(this._zoneId),
        };
    };
    EmailRoutingCatchAll.prototype.synthesizeHclAttributes = function () {
        var attrs = {
            actions: {
                value: cdktf.listMapperHcl(emailRoutingCatchAllActionsToHclTerraform, false)(this._actions.internalValue),
                isBlock: true,
                type: "list",
                storageClassType: "EmailRoutingCatchAllActionsList",
            },
            enabled: {
                value: cdktf.booleanToHclTerraform(this._enabled),
                isBlock: false,
                type: "simple",
                storageClassType: "boolean",
            },
            matchers: {
                value: cdktf.listMapperHcl(emailRoutingCatchAllMatchersToHclTerraform, false)(this._matchers.internalValue),
                isBlock: true,
                type: "list",
                storageClassType: "EmailRoutingCatchAllMatchersList",
            },
            name: {
                value: cdktf.stringToHclTerraform(this._name),
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
    EmailRoutingCatchAll.tfResourceType = "cloudflare_email_routing_catch_all";
    return EmailRoutingCatchAll;
}(cdktf.TerraformResource));
exports.EmailRoutingCatchAll = EmailRoutingCatchAll;
