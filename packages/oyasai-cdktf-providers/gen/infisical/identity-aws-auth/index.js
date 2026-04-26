"use strict";
// https://registry.terraform.io/providers/infisical/infisical/0.16.18/docs/resources/identity_aws_auth
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
exports.IdentityAwsAuth = exports.IdentityAwsAuthAccessTokenTrustedIpsList = exports.IdentityAwsAuthAccessTokenTrustedIpsOutputReference = void 0;
exports.identityAwsAuthAccessTokenTrustedIpsToTerraform = identityAwsAuthAccessTokenTrustedIpsToTerraform;
exports.identityAwsAuthAccessTokenTrustedIpsToHclTerraform = identityAwsAuthAccessTokenTrustedIpsToHclTerraform;
var cdktf = require("cdktf");
function identityAwsAuthAccessTokenTrustedIpsToTerraform(struct) {
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
function identityAwsAuthAccessTokenTrustedIpsToHclTerraform(struct) {
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
var IdentityAwsAuthAccessTokenTrustedIpsOutputReference = /** @class */ (function (_super) {
    __extends(IdentityAwsAuthAccessTokenTrustedIpsOutputReference, _super);
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    function IdentityAwsAuthAccessTokenTrustedIpsOutputReference(terraformResource, terraformAttribute, complexObjectIndex, complexObjectIsFromSet) {
        var _this = _super.call(this, terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex) || this;
        _this.isEmptyObject = false;
        return _this;
    }
    Object.defineProperty(IdentityAwsAuthAccessTokenTrustedIpsOutputReference.prototype, "internalValue", {
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
    Object.defineProperty(IdentityAwsAuthAccessTokenTrustedIpsOutputReference.prototype, "ipAddress", {
        get: function () {
            return this.getStringAttribute('ip_address');
        },
        set: function (value) {
            this._ipAddress = value;
        },
        enumerable: false,
        configurable: true
    });
    IdentityAwsAuthAccessTokenTrustedIpsOutputReference.prototype.resetIpAddress = function () {
        this._ipAddress = undefined;
    };
    Object.defineProperty(IdentityAwsAuthAccessTokenTrustedIpsOutputReference.prototype, "ipAddressInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._ipAddress;
        },
        enumerable: false,
        configurable: true
    });
    return IdentityAwsAuthAccessTokenTrustedIpsOutputReference;
}(cdktf.ComplexObject));
exports.IdentityAwsAuthAccessTokenTrustedIpsOutputReference = IdentityAwsAuthAccessTokenTrustedIpsOutputReference;
var IdentityAwsAuthAccessTokenTrustedIpsList = /** @class */ (function (_super) {
    __extends(IdentityAwsAuthAccessTokenTrustedIpsList, _super);
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    function IdentityAwsAuthAccessTokenTrustedIpsList(terraformResource, terraformAttribute, wrapsSet) {
        var _this = _super.call(this, terraformResource, terraformAttribute, wrapsSet) || this;
        _this.terraformResource = terraformResource;
        _this.terraformAttribute = terraformAttribute;
        _this.wrapsSet = wrapsSet;
        return _this;
    }
    /**
    * @param index the index of the item to return
    */
    IdentityAwsAuthAccessTokenTrustedIpsList.prototype.get = function (index) {
        return new IdentityAwsAuthAccessTokenTrustedIpsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
    };
    return IdentityAwsAuthAccessTokenTrustedIpsList;
}(cdktf.ComplexList));
exports.IdentityAwsAuthAccessTokenTrustedIpsList = IdentityAwsAuthAccessTokenTrustedIpsList;
/**
* Represents a {@link https://registry.terraform.io/providers/infisical/infisical/0.16.18/docs/resources/identity_aws_auth infisical_identity_aws_auth}
*/
var IdentityAwsAuth = /** @class */ (function (_super) {
    __extends(IdentityAwsAuth, _super);
    // ===========
    // INITIALIZER
    // ===========
    /**
    * Create a new {@link https://registry.terraform.io/providers/infisical/infisical/0.16.18/docs/resources/identity_aws_auth infisical_identity_aws_auth} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options IdentityAwsAuthConfig
    */
    function IdentityAwsAuth(scope, id, config) {
        var _this = _super.call(this, scope, id, {
            terraformResourceType: 'infisical_identity_aws_auth',
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
        _this._accessTokenTrustedIps = new IdentityAwsAuthAccessTokenTrustedIpsList(_this, "access_token_trusted_ips", false);
        _this._accessTokenMaxTtl = config.accessTokenMaxTtl;
        _this._accessTokenNumUsesLimit = config.accessTokenNumUsesLimit;
        _this._accessTokenTrustedIps.internalValue = config.accessTokenTrustedIps;
        _this._accessTokenTtl = config.accessTokenTtl;
        _this._allowedAccountIds = config.allowedAccountIds;
        _this._allowedPrincipalArns = config.allowedPrincipalArns;
        _this._identityId = config.identityId;
        _this._stsEndpoint = config.stsEndpoint;
        return _this;
    }
    // ==============
    // STATIC Methods
    // ==============
    /**
    * Generates CDKTF code for importing a IdentityAwsAuth resource upon running "cdktf plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the IdentityAwsAuth to import
    * @param importFromId The id of the existing IdentityAwsAuth that should be imported. Refer to the {@link https://registry.terraform.io/providers/infisical/infisical/0.16.18/docs/resources/identity_aws_auth#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the IdentityAwsAuth to import is found
    */
    IdentityAwsAuth.generateConfigForImport = function (scope, importToId, importFromId, provider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "infisical_identity_aws_auth", importId: importFromId, provider: provider });
    };
    Object.defineProperty(IdentityAwsAuth.prototype, "accessTokenMaxTtl", {
        get: function () {
            return this.getNumberAttribute('access_token_max_ttl');
        },
        set: function (value) {
            this._accessTokenMaxTtl = value;
        },
        enumerable: false,
        configurable: true
    });
    IdentityAwsAuth.prototype.resetAccessTokenMaxTtl = function () {
        this._accessTokenMaxTtl = undefined;
    };
    Object.defineProperty(IdentityAwsAuth.prototype, "accessTokenMaxTtlInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._accessTokenMaxTtl;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(IdentityAwsAuth.prototype, "accessTokenNumUsesLimit", {
        get: function () {
            return this.getNumberAttribute('access_token_num_uses_limit');
        },
        set: function (value) {
            this._accessTokenNumUsesLimit = value;
        },
        enumerable: false,
        configurable: true
    });
    IdentityAwsAuth.prototype.resetAccessTokenNumUsesLimit = function () {
        this._accessTokenNumUsesLimit = undefined;
    };
    Object.defineProperty(IdentityAwsAuth.prototype, "accessTokenNumUsesLimitInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._accessTokenNumUsesLimit;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(IdentityAwsAuth.prototype, "accessTokenTrustedIps", {
        get: function () {
            return this._accessTokenTrustedIps;
        },
        enumerable: false,
        configurable: true
    });
    IdentityAwsAuth.prototype.putAccessTokenTrustedIps = function (value) {
        this._accessTokenTrustedIps.internalValue = value;
    };
    IdentityAwsAuth.prototype.resetAccessTokenTrustedIps = function () {
        this._accessTokenTrustedIps.internalValue = undefined;
    };
    Object.defineProperty(IdentityAwsAuth.prototype, "accessTokenTrustedIpsInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._accessTokenTrustedIps.internalValue;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(IdentityAwsAuth.prototype, "accessTokenTtl", {
        get: function () {
            return this.getNumberAttribute('access_token_ttl');
        },
        set: function (value) {
            this._accessTokenTtl = value;
        },
        enumerable: false,
        configurable: true
    });
    IdentityAwsAuth.prototype.resetAccessTokenTtl = function () {
        this._accessTokenTtl = undefined;
    };
    Object.defineProperty(IdentityAwsAuth.prototype, "accessTokenTtlInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._accessTokenTtl;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(IdentityAwsAuth.prototype, "allowedAccountIds", {
        get: function () {
            return this.getListAttribute('allowed_account_ids');
        },
        set: function (value) {
            this._allowedAccountIds = value;
        },
        enumerable: false,
        configurable: true
    });
    IdentityAwsAuth.prototype.resetAllowedAccountIds = function () {
        this._allowedAccountIds = undefined;
    };
    Object.defineProperty(IdentityAwsAuth.prototype, "allowedAccountIdsInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._allowedAccountIds;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(IdentityAwsAuth.prototype, "allowedPrincipalArns", {
        get: function () {
            return this.getListAttribute('allowed_principal_arns');
        },
        set: function (value) {
            this._allowedPrincipalArns = value;
        },
        enumerable: false,
        configurable: true
    });
    IdentityAwsAuth.prototype.resetAllowedPrincipalArns = function () {
        this._allowedPrincipalArns = undefined;
    };
    Object.defineProperty(IdentityAwsAuth.prototype, "allowedPrincipalArnsInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._allowedPrincipalArns;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(IdentityAwsAuth.prototype, "id", {
        // id - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('id');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(IdentityAwsAuth.prototype, "identityId", {
        get: function () {
            return this.getStringAttribute('identity_id');
        },
        set: function (value) {
            this._identityId = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(IdentityAwsAuth.prototype, "identityIdInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._identityId;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(IdentityAwsAuth.prototype, "stsEndpoint", {
        get: function () {
            return this.getStringAttribute('sts_endpoint');
        },
        set: function (value) {
            this._stsEndpoint = value;
        },
        enumerable: false,
        configurable: true
    });
    IdentityAwsAuth.prototype.resetStsEndpoint = function () {
        this._stsEndpoint = undefined;
    };
    Object.defineProperty(IdentityAwsAuth.prototype, "stsEndpointInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._stsEndpoint;
        },
        enumerable: false,
        configurable: true
    });
    // =========
    // SYNTHESIS
    // =========
    IdentityAwsAuth.prototype.synthesizeAttributes = function () {
        return {
            access_token_max_ttl: cdktf.numberToTerraform(this._accessTokenMaxTtl),
            access_token_num_uses_limit: cdktf.numberToTerraform(this._accessTokenNumUsesLimit),
            access_token_trusted_ips: cdktf.listMapper(identityAwsAuthAccessTokenTrustedIpsToTerraform, false)(this._accessTokenTrustedIps.internalValue),
            access_token_ttl: cdktf.numberToTerraform(this._accessTokenTtl),
            allowed_account_ids: cdktf.listMapper(cdktf.stringToTerraform, false)(this._allowedAccountIds),
            allowed_principal_arns: cdktf.listMapper(cdktf.stringToTerraform, false)(this._allowedPrincipalArns),
            identity_id: cdktf.stringToTerraform(this._identityId),
            sts_endpoint: cdktf.stringToTerraform(this._stsEndpoint),
        };
    };
    IdentityAwsAuth.prototype.synthesizeHclAttributes = function () {
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
                value: cdktf.listMapperHcl(identityAwsAuthAccessTokenTrustedIpsToHclTerraform, false)(this._accessTokenTrustedIps.internalValue),
                isBlock: true,
                type: "list",
                storageClassType: "IdentityAwsAuthAccessTokenTrustedIpsList",
            },
            access_token_ttl: {
                value: cdktf.numberToHclTerraform(this._accessTokenTtl),
                isBlock: false,
                type: "simple",
                storageClassType: "number",
            },
            allowed_account_ids: {
                value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._allowedAccountIds),
                isBlock: false,
                type: "list",
                storageClassType: "stringList",
            },
            allowed_principal_arns: {
                value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._allowedPrincipalArns),
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
            sts_endpoint: {
                value: cdktf.stringToHclTerraform(this._stsEndpoint),
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
    IdentityAwsAuth.tfResourceType = "infisical_identity_aws_auth";
    return IdentityAwsAuth;
}(cdktf.TerraformResource));
exports.IdentityAwsAuth = IdentityAwsAuth;
