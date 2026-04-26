"use strict";
// https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/organization
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
exports.Organization = exports.OrganizationProfileOutputReference = exports.OrganizationParentOutputReference = exports.OrganizationMetaOutputReference = exports.OrganizationMetaFlagsOutputReference = void 0;
exports.organizationMetaFlagsToTerraform = organizationMetaFlagsToTerraform;
exports.organizationMetaFlagsToHclTerraform = organizationMetaFlagsToHclTerraform;
exports.organizationMetaToTerraform = organizationMetaToTerraform;
exports.organizationMetaToHclTerraform = organizationMetaToHclTerraform;
exports.organizationParentToTerraform = organizationParentToTerraform;
exports.organizationParentToHclTerraform = organizationParentToHclTerraform;
exports.organizationProfileToTerraform = organizationProfileToTerraform;
exports.organizationProfileToHclTerraform = organizationProfileToHclTerraform;
var cdktf = require("cdktf");
function organizationMetaFlagsToTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {};
}
function organizationMetaFlagsToHclTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    var attrs = {};
    return attrs;
}
var OrganizationMetaFlagsOutputReference = /** @class */ (function (_super) {
    __extends(OrganizationMetaFlagsOutputReference, _super);
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    function OrganizationMetaFlagsOutputReference(terraformResource, terraformAttribute) {
        var _this = _super.call(this, terraformResource, terraformAttribute, false) || this;
        _this.isEmptyObject = false;
        return _this;
    }
    Object.defineProperty(OrganizationMetaFlagsOutputReference.prototype, "internalValue", {
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
    Object.defineProperty(OrganizationMetaFlagsOutputReference.prototype, "accountCreation", {
        // account_creation - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('account_creation');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(OrganizationMetaFlagsOutputReference.prototype, "accountDeletion", {
        // account_deletion - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('account_deletion');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(OrganizationMetaFlagsOutputReference.prototype, "accountMigration", {
        // account_migration - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('account_migration');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(OrganizationMetaFlagsOutputReference.prototype, "accountMobility", {
        // account_mobility - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('account_mobility');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(OrganizationMetaFlagsOutputReference.prototype, "subOrgCreation", {
        // sub_org_creation - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('sub_org_creation');
        },
        enumerable: false,
        configurable: true
    });
    return OrganizationMetaFlagsOutputReference;
}(cdktf.ComplexObject));
exports.OrganizationMetaFlagsOutputReference = OrganizationMetaFlagsOutputReference;
function organizationMetaToTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {};
}
function organizationMetaToHclTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    var attrs = {};
    return attrs;
}
var OrganizationMetaOutputReference = /** @class */ (function (_super) {
    __extends(OrganizationMetaOutputReference, _super);
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    function OrganizationMetaOutputReference(terraformResource, terraformAttribute) {
        var _this = _super.call(this, terraformResource, terraformAttribute, false) || this;
        _this.isEmptyObject = false;
        // flags - computed: true, optional: false, required: false
        _this._flags = new OrganizationMetaFlagsOutputReference(_this, "flags");
        return _this;
    }
    Object.defineProperty(OrganizationMetaOutputReference.prototype, "internalValue", {
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
    Object.defineProperty(OrganizationMetaOutputReference.prototype, "flags", {
        get: function () {
            return this._flags;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(OrganizationMetaOutputReference.prototype, "managedBy", {
        // managed_by - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('managed_by');
        },
        enumerable: false,
        configurable: true
    });
    return OrganizationMetaOutputReference;
}(cdktf.ComplexObject));
exports.OrganizationMetaOutputReference = OrganizationMetaOutputReference;
function organizationParentToTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
        id: cdktf.stringToTerraform(struct.id),
    };
}
function organizationParentToHclTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    var attrs = {
        id: {
            value: cdktf.stringToHclTerraform(struct.id),
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
var OrganizationParentOutputReference = /** @class */ (function (_super) {
    __extends(OrganizationParentOutputReference, _super);
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    function OrganizationParentOutputReference(terraformResource, terraformAttribute) {
        var _this = _super.call(this, terraformResource, terraformAttribute, false) || this;
        _this.isEmptyObject = false;
        return _this;
    }
    Object.defineProperty(OrganizationParentOutputReference.prototype, "internalValue", {
        get: function () {
            if (this.resolvableValue) {
                return this.resolvableValue;
            }
            var hasAnyValues = this.isEmptyObject;
            var internalValueResult = {};
            if (this._id !== undefined) {
                hasAnyValues = true;
                internalValueResult.id = this._id;
            }
            return hasAnyValues ? internalValueResult : undefined;
        },
        set: function (value) {
            if (value === undefined) {
                this.isEmptyObject = false;
                this.resolvableValue = undefined;
                this._id = undefined;
            }
            else if (cdktf.Tokenization.isResolvable(value)) {
                this.isEmptyObject = false;
                this.resolvableValue = value;
            }
            else {
                this.isEmptyObject = Object.keys(value).length === 0;
                this.resolvableValue = undefined;
                this._id = value.id;
            }
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(OrganizationParentOutputReference.prototype, "id", {
        get: function () {
            return this.getStringAttribute('id');
        },
        set: function (value) {
            this._id = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(OrganizationParentOutputReference.prototype, "idInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._id;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(OrganizationParentOutputReference.prototype, "name", {
        // name - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('name');
        },
        enumerable: false,
        configurable: true
    });
    return OrganizationParentOutputReference;
}(cdktf.ComplexObject));
exports.OrganizationParentOutputReference = OrganizationParentOutputReference;
function organizationProfileToTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
        business_address: cdktf.stringToTerraform(struct.businessAddress),
        business_email: cdktf.stringToTerraform(struct.businessEmail),
        business_name: cdktf.stringToTerraform(struct.businessName),
        business_phone: cdktf.stringToTerraform(struct.businessPhone),
        external_metadata: cdktf.stringToTerraform(struct.externalMetadata),
    };
}
function organizationProfileToHclTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    var attrs = {
        business_address: {
            value: cdktf.stringToHclTerraform(struct.businessAddress),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        business_email: {
            value: cdktf.stringToHclTerraform(struct.businessEmail),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        business_name: {
            value: cdktf.stringToHclTerraform(struct.businessName),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        business_phone: {
            value: cdktf.stringToHclTerraform(struct.businessPhone),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        external_metadata: {
            value: cdktf.stringToHclTerraform(struct.externalMetadata),
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
var OrganizationProfileOutputReference = /** @class */ (function (_super) {
    __extends(OrganizationProfileOutputReference, _super);
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    function OrganizationProfileOutputReference(terraformResource, terraformAttribute) {
        var _this = _super.call(this, terraformResource, terraformAttribute, false) || this;
        _this.isEmptyObject = false;
        return _this;
    }
    Object.defineProperty(OrganizationProfileOutputReference.prototype, "internalValue", {
        get: function () {
            if (this.resolvableValue) {
                return this.resolvableValue;
            }
            var hasAnyValues = this.isEmptyObject;
            var internalValueResult = {};
            if (this._businessAddress !== undefined) {
                hasAnyValues = true;
                internalValueResult.businessAddress = this._businessAddress;
            }
            if (this._businessEmail !== undefined) {
                hasAnyValues = true;
                internalValueResult.businessEmail = this._businessEmail;
            }
            if (this._businessName !== undefined) {
                hasAnyValues = true;
                internalValueResult.businessName = this._businessName;
            }
            if (this._businessPhone !== undefined) {
                hasAnyValues = true;
                internalValueResult.businessPhone = this._businessPhone;
            }
            if (this._externalMetadata !== undefined) {
                hasAnyValues = true;
                internalValueResult.externalMetadata = this._externalMetadata;
            }
            return hasAnyValues ? internalValueResult : undefined;
        },
        set: function (value) {
            if (value === undefined) {
                this.isEmptyObject = false;
                this.resolvableValue = undefined;
                this._businessAddress = undefined;
                this._businessEmail = undefined;
                this._businessName = undefined;
                this._businessPhone = undefined;
                this._externalMetadata = undefined;
            }
            else if (cdktf.Tokenization.isResolvable(value)) {
                this.isEmptyObject = false;
                this.resolvableValue = value;
            }
            else {
                this.isEmptyObject = Object.keys(value).length === 0;
                this.resolvableValue = undefined;
                this._businessAddress = value.businessAddress;
                this._businessEmail = value.businessEmail;
                this._businessName = value.businessName;
                this._businessPhone = value.businessPhone;
                this._externalMetadata = value.externalMetadata;
            }
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(OrganizationProfileOutputReference.prototype, "businessAddress", {
        get: function () {
            return this.getStringAttribute('business_address');
        },
        set: function (value) {
            this._businessAddress = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(OrganizationProfileOutputReference.prototype, "businessAddressInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._businessAddress;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(OrganizationProfileOutputReference.prototype, "businessEmail", {
        get: function () {
            return this.getStringAttribute('business_email');
        },
        set: function (value) {
            this._businessEmail = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(OrganizationProfileOutputReference.prototype, "businessEmailInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._businessEmail;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(OrganizationProfileOutputReference.prototype, "businessName", {
        get: function () {
            return this.getStringAttribute('business_name');
        },
        set: function (value) {
            this._businessName = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(OrganizationProfileOutputReference.prototype, "businessNameInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._businessName;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(OrganizationProfileOutputReference.prototype, "businessPhone", {
        get: function () {
            return this.getStringAttribute('business_phone');
        },
        set: function (value) {
            this._businessPhone = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(OrganizationProfileOutputReference.prototype, "businessPhoneInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._businessPhone;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(OrganizationProfileOutputReference.prototype, "externalMetadata", {
        get: function () {
            return this.getStringAttribute('external_metadata');
        },
        set: function (value) {
            this._externalMetadata = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(OrganizationProfileOutputReference.prototype, "externalMetadataInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._externalMetadata;
        },
        enumerable: false,
        configurable: true
    });
    return OrganizationProfileOutputReference;
}(cdktf.ComplexObject));
exports.OrganizationProfileOutputReference = OrganizationProfileOutputReference;
/**
* Represents a {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/organization cloudflare_organization}
*/
var Organization = /** @class */ (function (_super) {
    __extends(Organization, _super);
    // ===========
    // INITIALIZER
    // ===========
    /**
    * Create a new {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/organization cloudflare_organization} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options OrganizationConfig
    */
    function Organization(scope, id, config) {
        var _this = _super.call(this, scope, id, {
            terraformResourceType: 'cloudflare_organization',
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
        // meta - computed: true, optional: false, required: false
        _this._meta = new OrganizationMetaOutputReference(_this, "meta");
        // parent - computed: true, optional: true, required: false
        _this._parent = new OrganizationParentOutputReference(_this, "parent");
        // profile - computed: false, optional: true, required: false
        _this._profile = new OrganizationProfileOutputReference(_this, "profile");
        _this._name = config.name;
        _this._parent.internalValue = config.parent;
        _this._profile.internalValue = config.profile;
        return _this;
    }
    // ==============
    // STATIC Methods
    // ==============
    /**
    * Generates CDKTF code for importing a Organization resource upon running "cdktf plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the Organization to import
    * @param importFromId The id of the existing Organization that should be imported. Refer to the {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/organization#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the Organization to import is found
    */
    Organization.generateConfigForImport = function (scope, importToId, importFromId, provider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "cloudflare_organization", importId: importFromId, provider: provider });
    };
    Object.defineProperty(Organization.prototype, "createTime", {
        // ==========
        // ATTRIBUTES
        // ==========
        // create_time - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('create_time');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Organization.prototype, "id", {
        // id - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('id');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Organization.prototype, "meta", {
        get: function () {
            return this._meta;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Organization.prototype, "name", {
        get: function () {
            return this.getStringAttribute('name');
        },
        set: function (value) {
            this._name = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Organization.prototype, "nameInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._name;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Organization.prototype, "parent", {
        get: function () {
            return this._parent;
        },
        enumerable: false,
        configurable: true
    });
    Organization.prototype.putParent = function (value) {
        this._parent.internalValue = value;
    };
    Organization.prototype.resetParent = function () {
        this._parent.internalValue = undefined;
    };
    Object.defineProperty(Organization.prototype, "parentInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._parent.internalValue;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Organization.prototype, "profile", {
        get: function () {
            return this._profile;
        },
        enumerable: false,
        configurable: true
    });
    Organization.prototype.putProfile = function (value) {
        this._profile.internalValue = value;
    };
    Organization.prototype.resetProfile = function () {
        this._profile.internalValue = undefined;
    };
    Object.defineProperty(Organization.prototype, "profileInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._profile.internalValue;
        },
        enumerable: false,
        configurable: true
    });
    // =========
    // SYNTHESIS
    // =========
    Organization.prototype.synthesizeAttributes = function () {
        return {
            name: cdktf.stringToTerraform(this._name),
            parent: organizationParentToTerraform(this._parent.internalValue),
            profile: organizationProfileToTerraform(this._profile.internalValue),
        };
    };
    Organization.prototype.synthesizeHclAttributes = function () {
        var attrs = {
            name: {
                value: cdktf.stringToHclTerraform(this._name),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            parent: {
                value: organizationParentToHclTerraform(this._parent.internalValue),
                isBlock: true,
                type: "struct",
                storageClassType: "OrganizationParent",
            },
            profile: {
                value: organizationProfileToHclTerraform(this._profile.internalValue),
                isBlock: true,
                type: "struct",
                storageClassType: "OrganizationProfile",
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
    Organization.tfResourceType = "cloudflare_organization";
    return Organization;
}(cdktf.TerraformResource));
exports.Organization = Organization;
