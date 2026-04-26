"use strict";
// https://registry.terraform.io/providers/infisical/infisical/0.16.18/docs/resources/identity
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
exports.Identity = exports.IdentityMetadataList = exports.IdentityMetadataOutputReference = void 0;
exports.identityMetadataToTerraform = identityMetadataToTerraform;
exports.identityMetadataToHclTerraform = identityMetadataToHclTerraform;
var cdktf = require("cdktf");
function identityMetadataToTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
        key: cdktf.stringToTerraform(struct.key),
        value: cdktf.stringToTerraform(struct.value),
    };
}
function identityMetadataToHclTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    var attrs = {
        key: {
            value: cdktf.stringToHclTerraform(struct.key),
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
var IdentityMetadataOutputReference = /** @class */ (function (_super) {
    __extends(IdentityMetadataOutputReference, _super);
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    function IdentityMetadataOutputReference(terraformResource, terraformAttribute, complexObjectIndex, complexObjectIsFromSet) {
        var _this = _super.call(this, terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex) || this;
        _this.isEmptyObject = false;
        return _this;
    }
    Object.defineProperty(IdentityMetadataOutputReference.prototype, "internalValue", {
        get: function () {
            if (this.resolvableValue) {
                return this.resolvableValue;
            }
            var hasAnyValues = this.isEmptyObject;
            var internalValueResult = {};
            if (this._key !== undefined) {
                hasAnyValues = true;
                internalValueResult.key = this._key;
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
                this._key = undefined;
                this._value = undefined;
            }
            else if (cdktf.Tokenization.isResolvable(value)) {
                this.isEmptyObject = false;
                this.resolvableValue = value;
            }
            else {
                this.isEmptyObject = Object.keys(value).length === 0;
                this.resolvableValue = undefined;
                this._key = value.key;
                this._value = value.value;
            }
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(IdentityMetadataOutputReference.prototype, "key", {
        get: function () {
            return this.getStringAttribute('key');
        },
        set: function (value) {
            this._key = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(IdentityMetadataOutputReference.prototype, "keyInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._key;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(IdentityMetadataOutputReference.prototype, "value", {
        get: function () {
            return this.getStringAttribute('value');
        },
        set: function (value) {
            this._value = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(IdentityMetadataOutputReference.prototype, "valueInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._value;
        },
        enumerable: false,
        configurable: true
    });
    return IdentityMetadataOutputReference;
}(cdktf.ComplexObject));
exports.IdentityMetadataOutputReference = IdentityMetadataOutputReference;
var IdentityMetadataList = /** @class */ (function (_super) {
    __extends(IdentityMetadataList, _super);
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    function IdentityMetadataList(terraformResource, terraformAttribute, wrapsSet) {
        var _this = _super.call(this, terraformResource, terraformAttribute, wrapsSet) || this;
        _this.terraformResource = terraformResource;
        _this.terraformAttribute = terraformAttribute;
        _this.wrapsSet = wrapsSet;
        return _this;
    }
    /**
    * @param index the index of the item to return
    */
    IdentityMetadataList.prototype.get = function (index) {
        return new IdentityMetadataOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
    };
    return IdentityMetadataList;
}(cdktf.ComplexList));
exports.IdentityMetadataList = IdentityMetadataList;
/**
* Represents a {@link https://registry.terraform.io/providers/infisical/infisical/0.16.18/docs/resources/identity infisical_identity}
*/
var Identity = /** @class */ (function (_super) {
    __extends(Identity, _super);
    // ===========
    // INITIALIZER
    // ===========
    /**
    * Create a new {@link https://registry.terraform.io/providers/infisical/infisical/0.16.18/docs/resources/identity infisical_identity} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options IdentityConfig
    */
    function Identity(scope, id, config) {
        var _this = _super.call(this, scope, id, {
            terraformResourceType: 'infisical_identity',
            terraformGeneratorMetadata: {
                providerName: 'infisical',
                providerVersion: '0.16.18'
            },
            provider: config.provider,
            dependsOn: config.dependsOn,
            count: config.count,
            lifecycle: config.lifecycle,
            provisioners: config.provisioners,
            connection: config.connection,
            forEach: config.forEach
        }) || this;
        // metadata - computed: false, optional: true, required: false
        _this._metadata = new IdentityMetadataList(_this, "metadata", true);
        _this._hasDeleteProtection = config.hasDeleteProtection;
        _this._metadata.internalValue = config.metadata;
        _this._name = config.name;
        _this._orgId = config.orgId;
        _this._role = config.role;
        return _this;
    }
    // ==============
    // STATIC Methods
    // ==============
    /**
    * Generates CDKTF code for importing a Identity resource upon running "cdktf plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the Identity to import
    * @param importFromId The id of the existing Identity that should be imported. Refer to the {@link https://registry.terraform.io/providers/infisical/infisical/0.16.18/docs/resources/identity#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the Identity to import is found
    */
    Identity.generateConfigForImport = function (scope, importToId, importFromId, provider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "infisical_identity", importId: importFromId, provider: provider });
    };
    Object.defineProperty(Identity.prototype, "authModes", {
        // ==========
        // ATTRIBUTES
        // ==========
        // auth_modes - computed: true, optional: false, required: false
        get: function () {
            return this.getListAttribute('auth_modes');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Identity.prototype, "hasDeleteProtection", {
        get: function () {
            return this.getBooleanAttribute('has_delete_protection');
        },
        set: function (value) {
            this._hasDeleteProtection = value;
        },
        enumerable: false,
        configurable: true
    });
    Identity.prototype.resetHasDeleteProtection = function () {
        this._hasDeleteProtection = undefined;
    };
    Object.defineProperty(Identity.prototype, "hasDeleteProtectionInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._hasDeleteProtection;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Identity.prototype, "id", {
        // id - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('id');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Identity.prototype, "metadata", {
        get: function () {
            return this._metadata;
        },
        enumerable: false,
        configurable: true
    });
    Identity.prototype.putMetadata = function (value) {
        this._metadata.internalValue = value;
    };
    Identity.prototype.resetMetadata = function () {
        this._metadata.internalValue = undefined;
    };
    Object.defineProperty(Identity.prototype, "metadataInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._metadata.internalValue;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Identity.prototype, "name", {
        get: function () {
            return this.getStringAttribute('name');
        },
        set: function (value) {
            this._name = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Identity.prototype, "nameInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._name;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Identity.prototype, "orgId", {
        get: function () {
            return this.getStringAttribute('org_id');
        },
        set: function (value) {
            this._orgId = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Identity.prototype, "orgIdInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._orgId;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Identity.prototype, "role", {
        get: function () {
            return this.getStringAttribute('role');
        },
        set: function (value) {
            this._role = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Identity.prototype, "roleInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._role;
        },
        enumerable: false,
        configurable: true
    });
    // =========
    // SYNTHESIS
    // =========
    Identity.prototype.synthesizeAttributes = function () {
        return {
            has_delete_protection: cdktf.booleanToTerraform(this._hasDeleteProtection),
            metadata: cdktf.listMapper(identityMetadataToTerraform, false)(this._metadata.internalValue),
            name: cdktf.stringToTerraform(this._name),
            org_id: cdktf.stringToTerraform(this._orgId),
            role: cdktf.stringToTerraform(this._role),
        };
    };
    Identity.prototype.synthesizeHclAttributes = function () {
        var attrs = {
            has_delete_protection: {
                value: cdktf.booleanToHclTerraform(this._hasDeleteProtection),
                isBlock: false,
                type: "simple",
                storageClassType: "boolean",
            },
            metadata: {
                value: cdktf.listMapperHcl(identityMetadataToHclTerraform, false)(this._metadata.internalValue),
                isBlock: true,
                type: "set",
                storageClassType: "IdentityMetadataList",
            },
            name: {
                value: cdktf.stringToHclTerraform(this._name),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            org_id: {
                value: cdktf.stringToHclTerraform(this._orgId),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            role: {
                value: cdktf.stringToHclTerraform(this._role),
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
    Identity.tfResourceType = "infisical_identity";
    return Identity;
}(cdktf.TerraformResource));
exports.Identity = Identity;
