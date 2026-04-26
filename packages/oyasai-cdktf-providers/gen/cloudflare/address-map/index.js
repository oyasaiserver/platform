"use strict";
// https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/address_map
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
exports.AddressMap = exports.AddressMapMembershipsList = exports.AddressMapMembershipsOutputReference = void 0;
exports.addressMapMembershipsToTerraform = addressMapMembershipsToTerraform;
exports.addressMapMembershipsToHclTerraform = addressMapMembershipsToHclTerraform;
var cdktf = require("cdktf");
function addressMapMembershipsToTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
        identifier: cdktf.stringToTerraform(struct.identifier),
        kind: cdktf.stringToTerraform(struct.kind),
    };
}
function addressMapMembershipsToHclTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    var attrs = {
        identifier: {
            value: cdktf.stringToHclTerraform(struct.identifier),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        kind: {
            value: cdktf.stringToHclTerraform(struct.kind),
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
var AddressMapMembershipsOutputReference = /** @class */ (function (_super) {
    __extends(AddressMapMembershipsOutputReference, _super);
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    function AddressMapMembershipsOutputReference(terraformResource, terraformAttribute, complexObjectIndex, complexObjectIsFromSet) {
        var _this = _super.call(this, terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex) || this;
        _this.isEmptyObject = false;
        return _this;
    }
    Object.defineProperty(AddressMapMembershipsOutputReference.prototype, "internalValue", {
        get: function () {
            if (this.resolvableValue) {
                return this.resolvableValue;
            }
            var hasAnyValues = this.isEmptyObject;
            var internalValueResult = {};
            if (this._identifier !== undefined) {
                hasAnyValues = true;
                internalValueResult.identifier = this._identifier;
            }
            if (this._kind !== undefined) {
                hasAnyValues = true;
                internalValueResult.kind = this._kind;
            }
            return hasAnyValues ? internalValueResult : undefined;
        },
        set: function (value) {
            if (value === undefined) {
                this.isEmptyObject = false;
                this.resolvableValue = undefined;
                this._identifier = undefined;
                this._kind = undefined;
            }
            else if (cdktf.Tokenization.isResolvable(value)) {
                this.isEmptyObject = false;
                this.resolvableValue = value;
            }
            else {
                this.isEmptyObject = Object.keys(value).length === 0;
                this.resolvableValue = undefined;
                this._identifier = value.identifier;
                this._kind = value.kind;
            }
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(AddressMapMembershipsOutputReference.prototype, "identifier", {
        get: function () {
            return this.getStringAttribute('identifier');
        },
        set: function (value) {
            this._identifier = value;
        },
        enumerable: false,
        configurable: true
    });
    AddressMapMembershipsOutputReference.prototype.resetIdentifier = function () {
        this._identifier = undefined;
    };
    Object.defineProperty(AddressMapMembershipsOutputReference.prototype, "identifierInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._identifier;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(AddressMapMembershipsOutputReference.prototype, "kind", {
        get: function () {
            return this.getStringAttribute('kind');
        },
        set: function (value) {
            this._kind = value;
        },
        enumerable: false,
        configurable: true
    });
    AddressMapMembershipsOutputReference.prototype.resetKind = function () {
        this._kind = undefined;
    };
    Object.defineProperty(AddressMapMembershipsOutputReference.prototype, "kindInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._kind;
        },
        enumerable: false,
        configurable: true
    });
    return AddressMapMembershipsOutputReference;
}(cdktf.ComplexObject));
exports.AddressMapMembershipsOutputReference = AddressMapMembershipsOutputReference;
var AddressMapMembershipsList = /** @class */ (function (_super) {
    __extends(AddressMapMembershipsList, _super);
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    function AddressMapMembershipsList(terraformResource, terraformAttribute, wrapsSet) {
        var _this = _super.call(this, terraformResource, terraformAttribute, wrapsSet) || this;
        _this.terraformResource = terraformResource;
        _this.terraformAttribute = terraformAttribute;
        _this.wrapsSet = wrapsSet;
        return _this;
    }
    /**
    * @param index the index of the item to return
    */
    AddressMapMembershipsList.prototype.get = function (index) {
        return new AddressMapMembershipsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
    };
    return AddressMapMembershipsList;
}(cdktf.ComplexList));
exports.AddressMapMembershipsList = AddressMapMembershipsList;
/**
* Represents a {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/address_map cloudflare_address_map}
*/
var AddressMap = /** @class */ (function (_super) {
    __extends(AddressMap, _super);
    // ===========
    // INITIALIZER
    // ===========
    /**
    * Create a new {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/address_map cloudflare_address_map} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options AddressMapConfig = {}
    */
    function AddressMap(scope, id, config) {
        if (config === void 0) { config = {}; }
        var _this = _super.call(this, scope, id, {
            terraformResourceType: 'cloudflare_address_map',
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
        // memberships - computed: false, optional: true, required: false
        _this._memberships = new AddressMapMembershipsList(_this, "memberships", false);
        _this._accountId = config.accountId;
        _this._defaultSni = config.defaultSni;
        _this._description = config.description;
        _this._enabled = config.enabled;
        _this._ips = config.ips;
        _this._memberships.internalValue = config.memberships;
        return _this;
    }
    // ==============
    // STATIC Methods
    // ==============
    /**
    * Generates CDKTF code for importing a AddressMap resource upon running "cdktf plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the AddressMap to import
    * @param importFromId The id of the existing AddressMap that should be imported. Refer to the {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/address_map#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the AddressMap to import is found
    */
    AddressMap.generateConfigForImport = function (scope, importToId, importFromId, provider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "cloudflare_address_map", importId: importFromId, provider: provider });
    };
    Object.defineProperty(AddressMap.prototype, "accountId", {
        get: function () {
            return this.getStringAttribute('account_id');
        },
        set: function (value) {
            this._accountId = value;
        },
        enumerable: false,
        configurable: true
    });
    AddressMap.prototype.resetAccountId = function () {
        this._accountId = undefined;
    };
    Object.defineProperty(AddressMap.prototype, "accountIdInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._accountId;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(AddressMap.prototype, "canDelete", {
        // can_delete - computed: true, optional: false, required: false
        get: function () {
            return this.getBooleanAttribute('can_delete');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(AddressMap.prototype, "canModifyIps", {
        // can_modify_ips - computed: true, optional: false, required: false
        get: function () {
            return this.getBooleanAttribute('can_modify_ips');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(AddressMap.prototype, "createdAt", {
        // created_at - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('created_at');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(AddressMap.prototype, "defaultSni", {
        get: function () {
            return this.getStringAttribute('default_sni');
        },
        set: function (value) {
            this._defaultSni = value;
        },
        enumerable: false,
        configurable: true
    });
    AddressMap.prototype.resetDefaultSni = function () {
        this._defaultSni = undefined;
    };
    Object.defineProperty(AddressMap.prototype, "defaultSniInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._defaultSni;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(AddressMap.prototype, "description", {
        get: function () {
            return this.getStringAttribute('description');
        },
        set: function (value) {
            this._description = value;
        },
        enumerable: false,
        configurable: true
    });
    AddressMap.prototype.resetDescription = function () {
        this._description = undefined;
    };
    Object.defineProperty(AddressMap.prototype, "descriptionInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._description;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(AddressMap.prototype, "enabled", {
        get: function () {
            return this.getBooleanAttribute('enabled');
        },
        set: function (value) {
            this._enabled = value;
        },
        enumerable: false,
        configurable: true
    });
    AddressMap.prototype.resetEnabled = function () {
        this._enabled = undefined;
    };
    Object.defineProperty(AddressMap.prototype, "enabledInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._enabled;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(AddressMap.prototype, "id", {
        // id - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('id');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(AddressMap.prototype, "ips", {
        get: function () {
            return this.getListAttribute('ips');
        },
        set: function (value) {
            this._ips = value;
        },
        enumerable: false,
        configurable: true
    });
    AddressMap.prototype.resetIps = function () {
        this._ips = undefined;
    };
    Object.defineProperty(AddressMap.prototype, "ipsInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._ips;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(AddressMap.prototype, "memberships", {
        get: function () {
            return this._memberships;
        },
        enumerable: false,
        configurable: true
    });
    AddressMap.prototype.putMemberships = function (value) {
        this._memberships.internalValue = value;
    };
    AddressMap.prototype.resetMemberships = function () {
        this._memberships.internalValue = undefined;
    };
    Object.defineProperty(AddressMap.prototype, "membershipsInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._memberships.internalValue;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(AddressMap.prototype, "modifiedAt", {
        // modified_at - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('modified_at');
        },
        enumerable: false,
        configurable: true
    });
    // =========
    // SYNTHESIS
    // =========
    AddressMap.prototype.synthesizeAttributes = function () {
        return {
            account_id: cdktf.stringToTerraform(this._accountId),
            default_sni: cdktf.stringToTerraform(this._defaultSni),
            description: cdktf.stringToTerraform(this._description),
            enabled: cdktf.booleanToTerraform(this._enabled),
            ips: cdktf.listMapper(cdktf.stringToTerraform, false)(this._ips),
            memberships: cdktf.listMapper(addressMapMembershipsToTerraform, false)(this._memberships.internalValue),
        };
    };
    AddressMap.prototype.synthesizeHclAttributes = function () {
        var attrs = {
            account_id: {
                value: cdktf.stringToHclTerraform(this._accountId),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            default_sni: {
                value: cdktf.stringToHclTerraform(this._defaultSni),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            description: {
                value: cdktf.stringToHclTerraform(this._description),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            enabled: {
                value: cdktf.booleanToHclTerraform(this._enabled),
                isBlock: false,
                type: "simple",
                storageClassType: "boolean",
            },
            ips: {
                value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._ips),
                isBlock: false,
                type: "list",
                storageClassType: "stringList",
            },
            memberships: {
                value: cdktf.listMapperHcl(addressMapMembershipsToHclTerraform, false)(this._memberships.internalValue),
                isBlock: true,
                type: "list",
                storageClassType: "AddressMapMembershipsList",
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
    AddressMap.tfResourceType = "cloudflare_address_map";
    return AddressMap;
}(cdktf.TerraformResource));
exports.AddressMap = AddressMap;
