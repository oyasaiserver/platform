"use strict";
// https://registry.terraform.io/providers/infisical/infisical/0.16.18/docs/resources/identity_gcp_auth
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
exports.IdentityGcpAuth = exports.IdentityGcpAuthAccessTokenTrustedIpsList = exports.IdentityGcpAuthAccessTokenTrustedIpsOutputReference = void 0;
exports.identityGcpAuthAccessTokenTrustedIpsToTerraform = identityGcpAuthAccessTokenTrustedIpsToTerraform;
exports.identityGcpAuthAccessTokenTrustedIpsToHclTerraform = identityGcpAuthAccessTokenTrustedIpsToHclTerraform;
var cdktf = require("cdktf");
function identityGcpAuthAccessTokenTrustedIpsToTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
        ip_address: cdktf.stringToTerraform(struct.ipAddress),
    };
}
function identityGcpAuthAccessTokenTrustedIpsToHclTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    var attrs = {
        ip_address: {
            value: cdktf.stringToHclTerraform(struct.ipAddress),
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
var IdentityGcpAuthAccessTokenTrustedIpsOutputReference = /** @class */ (function (_super) {
    __extends(IdentityGcpAuthAccessTokenTrustedIpsOutputReference, _super);
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    function IdentityGcpAuthAccessTokenTrustedIpsOutputReference(terraformResource, terraformAttribute, complexObjectIndex, complexObjectIsFromSet) {
        var _this = _super.call(this, terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex) || this;
        _this.isEmptyObject = false;
        return _this;
    }
    Object.defineProperty(IdentityGcpAuthAccessTokenTrustedIpsOutputReference.prototype, "internalValue", {
        get: function () {
            if (this.resolvableValue) {
                return this.resolvableValue;
            }
            var hasAnyValues = this.isEmptyObject;
            var internalValueResult = {};
            if (this._ipAddress !== undefined) {
                hasAnyValues = true;
                internalValueResult.ipAddress = this._ipAddress;
            }
            return hasAnyValues ? internalValueResult : undefined;
        },
        set: function (value) {
            if (value === undefined) {
                this.isEmptyObject = false;
                this.resolvableValue = undefined;
                this._ipAddress = undefined;
            }
            else if (cdktf.Tokenization.isResolvable(value)) {
                this.isEmptyObject = false;
                this.resolvableValue = value;
            }
            else {
                this.isEmptyObject = Object.keys(value).length === 0;
                this.resolvableValue = undefined;
                this._ipAddress = value.ipAddress;
            }
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(IdentityGcpAuthAccessTokenTrustedIpsOutputReference.prototype, "ipAddress", {
        get: function () {
            return this.getStringAttribute('ip_address');
        },
        set: function (value) {
            this._ipAddress = value;
        },
        enumerable: false,
        configurable: true
    });
    IdentityGcpAuthAccessTokenTrustedIpsOutputReference.prototype.resetIpAddress = function () {
        this._ipAddress = undefined;
    };
    Object.defineProperty(IdentityGcpAuthAccessTokenTrustedIpsOutputReference.prototype, "ipAddressInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._ipAddress;
        },
        enumerable: false,
        configurable: true
    });
    return IdentityGcpAuthAccessTokenTrustedIpsOutputReference;
}(cdktf.ComplexObject));
exports.IdentityGcpAuthAccessTokenTrustedIpsOutputReference = IdentityGcpAuthAccessTokenTrustedIpsOutputReference;
var IdentityGcpAuthAccessTokenTrustedIpsList = /** @class */ (function (_super) {
    __extends(IdentityGcpAuthAccessTokenTrustedIpsList, _super);
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    function IdentityGcpAuthAccessTokenTrustedIpsList(terraformResource, terraformAttribute, wrapsSet) {
        var _this = _super.call(this, terraformResource, terraformAttribute, wrapsSet) || this;
        _this.terraformResource = terraformResource;
        _this.terraformAttribute = terraformAttribute;
        _this.wrapsSet = wrapsSet;
        return _this;
    }
    /**
    * @param index the index of the item to return
    */
    IdentityGcpAuthAccessTokenTrustedIpsList.prototype.get = function (index) {
        return new IdentityGcpAuthAccessTokenTrustedIpsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
    };
    return IdentityGcpAuthAccessTokenTrustedIpsList;
}(cdktf.ComplexList));
exports.IdentityGcpAuthAccessTokenTrustedIpsList = IdentityGcpAuthAccessTokenTrustedIpsList;
/**
* Represents a {@link https://registry.terraform.io/providers/infisical/infisical/0.16.18/docs/resources/identity_gcp_auth infisical_identity_gcp_auth}
*/
var IdentityGcpAuth = /** @class */ (function (_super) {
    __extends(IdentityGcpAuth, _super);
    // ===========
    // INITIALIZER
    // ===========
    /**
    * Create a new {@link https://registry.terraform.io/providers/infisical/infisical/0.16.18/docs/resources/identity_gcp_auth infisical_identity_gcp_auth} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options IdentityGcpAuthConfig
    */
    function IdentityGcpAuth(scope, id, config) {
        var _this = _super.call(this, scope, id, {
            terraformResourceType: 'infisical_identity_gcp_auth',
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
        // access_token_trusted_ips - computed: true, optional: true, required: false
        _this._accessTokenTrustedIps = new IdentityGcpAuthAccessTokenTrustedIpsList(_this, "access_token_trusted_ips", false);
        _this._accessTokenMaxTtl = config.accessTokenMaxTtl;
        _this._accessTokenNumUsesLimit = config.accessTokenNumUsesLimit;
        _this._accessTokenTrustedIps.internalValue = config.accessTokenTrustedIps;
        _this._accessTokenTtl = config.accessTokenTtl;
        _this._allowedProjects = config.allowedProjects;
        _this._allowedServiceAccountEmails = config.allowedServiceAccountEmails;
        _this._allowedZones = config.allowedZones;
        _this._identityId = config.identityId;
        _this._type = config.type;
        return _this;
    }
    // ==============
    // STATIC Methods
    // ==============
    /**
    * Generates CDKTF code for importing a IdentityGcpAuth resource upon running "cdktf plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the IdentityGcpAuth to import
    * @param importFromId The id of the existing IdentityGcpAuth that should be imported. Refer to the {@link https://registry.terraform.io/providers/infisical/infisical/0.16.18/docs/resources/identity_gcp_auth#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the IdentityGcpAuth to import is found
    */
    IdentityGcpAuth.generateConfigForImport = function (scope, importToId, importFromId, provider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "infisical_identity_gcp_auth", importId: importFromId, provider: provider });
    };
    Object.defineProperty(IdentityGcpAuth.prototype, "accessTokenMaxTtl", {
        get: function () {
            return this.getNumberAttribute('access_token_max_ttl');
        },
        set: function (value) {
            this._accessTokenMaxTtl = value;
        },
        enumerable: false,
        configurable: true
    });
    IdentityGcpAuth.prototype.resetAccessTokenMaxTtl = function () {
        this._accessTokenMaxTtl = undefined;
    };
    Object.defineProperty(IdentityGcpAuth.prototype, "accessTokenMaxTtlInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._accessTokenMaxTtl;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(IdentityGcpAuth.prototype, "accessTokenNumUsesLimit", {
        get: function () {
            return this.getNumberAttribute('access_token_num_uses_limit');
        },
        set: function (value) {
            this._accessTokenNumUsesLimit = value;
        },
        enumerable: false,
        configurable: true
    });
    IdentityGcpAuth.prototype.resetAccessTokenNumUsesLimit = function () {
        this._accessTokenNumUsesLimit = undefined;
    };
    Object.defineProperty(IdentityGcpAuth.prototype, "accessTokenNumUsesLimitInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._accessTokenNumUsesLimit;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(IdentityGcpAuth.prototype, "accessTokenTrustedIps", {
        get: function () {
            return this._accessTokenTrustedIps;
        },
        enumerable: false,
        configurable: true
    });
    IdentityGcpAuth.prototype.putAccessTokenTrustedIps = function (value) {
        this._accessTokenTrustedIps.internalValue = value;
    };
    IdentityGcpAuth.prototype.resetAccessTokenTrustedIps = function () {
        this._accessTokenTrustedIps.internalValue = undefined;
    };
    Object.defineProperty(IdentityGcpAuth.prototype, "accessTokenTrustedIpsInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._accessTokenTrustedIps.internalValue;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(IdentityGcpAuth.prototype, "accessTokenTtl", {
        get: function () {
            return this.getNumberAttribute('access_token_ttl');
        },
        set: function (value) {
            this._accessTokenTtl = value;
        },
        enumerable: false,
        configurable: true
    });
    IdentityGcpAuth.prototype.resetAccessTokenTtl = function () {
        this._accessTokenTtl = undefined;
    };
    Object.defineProperty(IdentityGcpAuth.prototype, "accessTokenTtlInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._accessTokenTtl;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(IdentityGcpAuth.prototype, "allowedProjects", {
        get: function () {
            return this.getListAttribute('allowed_projects');
        },
        set: function (value) {
            this._allowedProjects = value;
        },
        enumerable: false,
        configurable: true
    });
    IdentityGcpAuth.prototype.resetAllowedProjects = function () {
        this._allowedProjects = undefined;
    };
    Object.defineProperty(IdentityGcpAuth.prototype, "allowedProjectsInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._allowedProjects;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(IdentityGcpAuth.prototype, "allowedServiceAccountEmails", {
        get: function () {
            return this.getListAttribute('allowed_service_account_emails');
        },
        set: function (value) {
            this._allowedServiceAccountEmails = value;
        },
        enumerable: false,
        configurable: true
    });
    IdentityGcpAuth.prototype.resetAllowedServiceAccountEmails = function () {
        this._allowedServiceAccountEmails = undefined;
    };
    Object.defineProperty(IdentityGcpAuth.prototype, "allowedServiceAccountEmailsInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._allowedServiceAccountEmails;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(IdentityGcpAuth.prototype, "allowedZones", {
        get: function () {
            return this.getListAttribute('allowed_zones');
        },
        set: function (value) {
            this._allowedZones = value;
        },
        enumerable: false,
        configurable: true
    });
    IdentityGcpAuth.prototype.resetAllowedZones = function () {
        this._allowedZones = undefined;
    };
    Object.defineProperty(IdentityGcpAuth.prototype, "allowedZonesInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._allowedZones;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(IdentityGcpAuth.prototype, "id", {
        // id - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('id');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(IdentityGcpAuth.prototype, "identityId", {
        get: function () {
            return this.getStringAttribute('identity_id');
        },
        set: function (value) {
            this._identityId = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(IdentityGcpAuth.prototype, "identityIdInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._identityId;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(IdentityGcpAuth.prototype, "type", {
        get: function () {
            return this.getStringAttribute('type');
        },
        set: function (value) {
            this._type = value;
        },
        enumerable: false,
        configurable: true
    });
    IdentityGcpAuth.prototype.resetType = function () {
        this._type = undefined;
    };
    Object.defineProperty(IdentityGcpAuth.prototype, "typeInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._type;
        },
        enumerable: false,
        configurable: true
    });
    // =========
    // SYNTHESIS
    // =========
    IdentityGcpAuth.prototype.synthesizeAttributes = function () {
        return {
            access_token_max_ttl: cdktf.numberToTerraform(this._accessTokenMaxTtl),
            access_token_num_uses_limit: cdktf.numberToTerraform(this._accessTokenNumUsesLimit),
            access_token_trusted_ips: cdktf.listMapper(identityGcpAuthAccessTokenTrustedIpsToTerraform, false)(this._accessTokenTrustedIps.internalValue),
            access_token_ttl: cdktf.numberToTerraform(this._accessTokenTtl),
            allowed_projects: cdktf.listMapper(cdktf.stringToTerraform, false)(this._allowedProjects),
            allowed_service_account_emails: cdktf.listMapper(cdktf.stringToTerraform, false)(this._allowedServiceAccountEmails),
            allowed_zones: cdktf.listMapper(cdktf.stringToTerraform, false)(this._allowedZones),
            identity_id: cdktf.stringToTerraform(this._identityId),
            type: cdktf.stringToTerraform(this._type),
        };
    };
    IdentityGcpAuth.prototype.synthesizeHclAttributes = function () {
        var attrs = {
            access_token_max_ttl: {
                value: cdktf.numberToHclTerraform(this._accessTokenMaxTtl),
                isBlock: false,
                type: "simple",
                storageClassType: "number",
            },
            access_token_num_uses_limit: {
                value: cdktf.numberToHclTerraform(this._accessTokenNumUsesLimit),
                isBlock: false,
                type: "simple",
                storageClassType: "number",
            },
            access_token_trusted_ips: {
                value: cdktf.listMapperHcl(identityGcpAuthAccessTokenTrustedIpsToHclTerraform, false)(this._accessTokenTrustedIps.internalValue),
                isBlock: true,
                type: "list",
                storageClassType: "IdentityGcpAuthAccessTokenTrustedIpsList",
            },
            access_token_ttl: {
                value: cdktf.numberToHclTerraform(this._accessTokenTtl),
                isBlock: false,
                type: "simple",
                storageClassType: "number",
            },
            allowed_projects: {
                value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._allowedProjects),
                isBlock: false,
                type: "list",
                storageClassType: "stringList",
            },
            allowed_service_account_emails: {
                value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._allowedServiceAccountEmails),
                isBlock: false,
                type: "list",
                storageClassType: "stringList",
            },
            allowed_zones: {
                value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._allowedZones),
                isBlock: false,
                type: "list",
                storageClassType: "stringList",
            },
            identity_id: {
                value: cdktf.stringToHclTerraform(this._identityId),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            type: {
                value: cdktf.stringToHclTerraform(this._type),
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
    IdentityGcpAuth.tfResourceType = "infisical_identity_gcp_auth";
    return IdentityGcpAuth;
}(cdktf.TerraformResource));
exports.IdentityGcpAuth = IdentityGcpAuth;
