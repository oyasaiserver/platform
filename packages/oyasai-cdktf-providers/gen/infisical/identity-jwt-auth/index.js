"use strict";
// https://registry.terraform.io/providers/infisical/infisical/0.16.18/docs/resources/identity_jwt_auth
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
exports.IdentityJwtAuth = exports.IdentityJwtAuthAccessTokenTrustedIpsList = exports.IdentityJwtAuthAccessTokenTrustedIpsOutputReference = void 0;
exports.identityJwtAuthAccessTokenTrustedIpsToTerraform = identityJwtAuthAccessTokenTrustedIpsToTerraform;
exports.identityJwtAuthAccessTokenTrustedIpsToHclTerraform = identityJwtAuthAccessTokenTrustedIpsToHclTerraform;
var cdktf = require("cdktf");
function identityJwtAuthAccessTokenTrustedIpsToTerraform(struct) {
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
function identityJwtAuthAccessTokenTrustedIpsToHclTerraform(struct) {
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
var IdentityJwtAuthAccessTokenTrustedIpsOutputReference = /** @class */ (function (_super) {
    __extends(IdentityJwtAuthAccessTokenTrustedIpsOutputReference, _super);
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    function IdentityJwtAuthAccessTokenTrustedIpsOutputReference(terraformResource, terraformAttribute, complexObjectIndex, complexObjectIsFromSet) {
        var _this = _super.call(this, terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex) || this;
        _this.isEmptyObject = false;
        return _this;
    }
    Object.defineProperty(IdentityJwtAuthAccessTokenTrustedIpsOutputReference.prototype, "internalValue", {
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
    Object.defineProperty(IdentityJwtAuthAccessTokenTrustedIpsOutputReference.prototype, "ipAddress", {
        get: function () {
            return this.getStringAttribute('ip_address');
        },
        set: function (value) {
            this._ipAddress = value;
        },
        enumerable: false,
        configurable: true
    });
    IdentityJwtAuthAccessTokenTrustedIpsOutputReference.prototype.resetIpAddress = function () {
        this._ipAddress = undefined;
    };
    Object.defineProperty(IdentityJwtAuthAccessTokenTrustedIpsOutputReference.prototype, "ipAddressInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._ipAddress;
        },
        enumerable: false,
        configurable: true
    });
    return IdentityJwtAuthAccessTokenTrustedIpsOutputReference;
}(cdktf.ComplexObject));
exports.IdentityJwtAuthAccessTokenTrustedIpsOutputReference = IdentityJwtAuthAccessTokenTrustedIpsOutputReference;
var IdentityJwtAuthAccessTokenTrustedIpsList = /** @class */ (function (_super) {
    __extends(IdentityJwtAuthAccessTokenTrustedIpsList, _super);
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    function IdentityJwtAuthAccessTokenTrustedIpsList(terraformResource, terraformAttribute, wrapsSet) {
        var _this = _super.call(this, terraformResource, terraformAttribute, wrapsSet) || this;
        _this.terraformResource = terraformResource;
        _this.terraformAttribute = terraformAttribute;
        _this.wrapsSet = wrapsSet;
        return _this;
    }
    /**
    * @param index the index of the item to return
    */
    IdentityJwtAuthAccessTokenTrustedIpsList.prototype.get = function (index) {
        return new IdentityJwtAuthAccessTokenTrustedIpsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
    };
    return IdentityJwtAuthAccessTokenTrustedIpsList;
}(cdktf.ComplexList));
exports.IdentityJwtAuthAccessTokenTrustedIpsList = IdentityJwtAuthAccessTokenTrustedIpsList;
/**
* Represents a {@link https://registry.terraform.io/providers/infisical/infisical/0.16.18/docs/resources/identity_jwt_auth infisical_identity_jwt_auth}
*/
var IdentityJwtAuth = /** @class */ (function (_super) {
    __extends(IdentityJwtAuth, _super);
    // ===========
    // INITIALIZER
    // ===========
    /**
    * Create a new {@link https://registry.terraform.io/providers/infisical/infisical/0.16.18/docs/resources/identity_jwt_auth infisical_identity_jwt_auth} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options IdentityJwtAuthConfig
    */
    function IdentityJwtAuth(scope, id, config) {
        var _this = _super.call(this, scope, id, {
            terraformResourceType: 'infisical_identity_jwt_auth',
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
        _this._accessTokenTrustedIps = new IdentityJwtAuthAccessTokenTrustedIpsList(_this, "access_token_trusted_ips", false);
        _this._accessTokenMaxTtl = config.accessTokenMaxTtl;
        _this._accessTokenNumUsesLimit = config.accessTokenNumUsesLimit;
        _this._accessTokenTrustedIps.internalValue = config.accessTokenTrustedIps;
        _this._accessTokenTtl = config.accessTokenTtl;
        _this._boundAudiences = config.boundAudiences;
        _this._boundClaims = config.boundClaims;
        _this._boundIssuer = config.boundIssuer;
        _this._boundSubject = config.boundSubject;
        _this._configurationType = config.configurationType;
        _this._identityId = config.identityId;
        _this._jwksCaCert = config.jwksCaCert;
        _this._jwksUrl = config.jwksUrl;
        _this._publicKeys = config.publicKeys;
        return _this;
    }
    // ==============
    // STATIC Methods
    // ==============
    /**
    * Generates CDKTF code for importing a IdentityJwtAuth resource upon running "cdktf plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the IdentityJwtAuth to import
    * @param importFromId The id of the existing IdentityJwtAuth that should be imported. Refer to the {@link https://registry.terraform.io/providers/infisical/infisical/0.16.18/docs/resources/identity_jwt_auth#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the IdentityJwtAuth to import is found
    */
    IdentityJwtAuth.generateConfigForImport = function (scope, importToId, importFromId, provider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "infisical_identity_jwt_auth", importId: importFromId, provider: provider });
    };
    Object.defineProperty(IdentityJwtAuth.prototype, "accessTokenMaxTtl", {
        get: function () {
            return this.getNumberAttribute('access_token_max_ttl');
        },
        set: function (value) {
            this._accessTokenMaxTtl = value;
        },
        enumerable: false,
        configurable: true
    });
    IdentityJwtAuth.prototype.resetAccessTokenMaxTtl = function () {
        this._accessTokenMaxTtl = undefined;
    };
    Object.defineProperty(IdentityJwtAuth.prototype, "accessTokenMaxTtlInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._accessTokenMaxTtl;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(IdentityJwtAuth.prototype, "accessTokenNumUsesLimit", {
        get: function () {
            return this.getNumberAttribute('access_token_num_uses_limit');
        },
        set: function (value) {
            this._accessTokenNumUsesLimit = value;
        },
        enumerable: false,
        configurable: true
    });
    IdentityJwtAuth.prototype.resetAccessTokenNumUsesLimit = function () {
        this._accessTokenNumUsesLimit = undefined;
    };
    Object.defineProperty(IdentityJwtAuth.prototype, "accessTokenNumUsesLimitInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._accessTokenNumUsesLimit;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(IdentityJwtAuth.prototype, "accessTokenTrustedIps", {
        get: function () {
            return this._accessTokenTrustedIps;
        },
        enumerable: false,
        configurable: true
    });
    IdentityJwtAuth.prototype.putAccessTokenTrustedIps = function (value) {
        this._accessTokenTrustedIps.internalValue = value;
    };
    IdentityJwtAuth.prototype.resetAccessTokenTrustedIps = function () {
        this._accessTokenTrustedIps.internalValue = undefined;
    };
    Object.defineProperty(IdentityJwtAuth.prototype, "accessTokenTrustedIpsInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._accessTokenTrustedIps.internalValue;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(IdentityJwtAuth.prototype, "accessTokenTtl", {
        get: function () {
            return this.getNumberAttribute('access_token_ttl');
        },
        set: function (value) {
            this._accessTokenTtl = value;
        },
        enumerable: false,
        configurable: true
    });
    IdentityJwtAuth.prototype.resetAccessTokenTtl = function () {
        this._accessTokenTtl = undefined;
    };
    Object.defineProperty(IdentityJwtAuth.prototype, "accessTokenTtlInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._accessTokenTtl;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(IdentityJwtAuth.prototype, "boundAudiences", {
        get: function () {
            return this.getListAttribute('bound_audiences');
        },
        set: function (value) {
            this._boundAudiences = value;
        },
        enumerable: false,
        configurable: true
    });
    IdentityJwtAuth.prototype.resetBoundAudiences = function () {
        this._boundAudiences = undefined;
    };
    Object.defineProperty(IdentityJwtAuth.prototype, "boundAudiencesInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._boundAudiences;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(IdentityJwtAuth.prototype, "boundClaims", {
        get: function () {
            return this.getStringMapAttribute('bound_claims');
        },
        set: function (value) {
            this._boundClaims = value;
        },
        enumerable: false,
        configurable: true
    });
    IdentityJwtAuth.prototype.resetBoundClaims = function () {
        this._boundClaims = undefined;
    };
    Object.defineProperty(IdentityJwtAuth.prototype, "boundClaimsInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._boundClaims;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(IdentityJwtAuth.prototype, "boundIssuer", {
        get: function () {
            return this.getStringAttribute('bound_issuer');
        },
        set: function (value) {
            this._boundIssuer = value;
        },
        enumerable: false,
        configurable: true
    });
    IdentityJwtAuth.prototype.resetBoundIssuer = function () {
        this._boundIssuer = undefined;
    };
    Object.defineProperty(IdentityJwtAuth.prototype, "boundIssuerInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._boundIssuer;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(IdentityJwtAuth.prototype, "boundSubject", {
        get: function () {
            return this.getStringAttribute('bound_subject');
        },
        set: function (value) {
            this._boundSubject = value;
        },
        enumerable: false,
        configurable: true
    });
    IdentityJwtAuth.prototype.resetBoundSubject = function () {
        this._boundSubject = undefined;
    };
    Object.defineProperty(IdentityJwtAuth.prototype, "boundSubjectInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._boundSubject;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(IdentityJwtAuth.prototype, "configurationType", {
        get: function () {
            return this.getStringAttribute('configuration_type');
        },
        set: function (value) {
            this._configurationType = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(IdentityJwtAuth.prototype, "configurationTypeInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._configurationType;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(IdentityJwtAuth.prototype, "id", {
        // id - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('id');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(IdentityJwtAuth.prototype, "identityId", {
        get: function () {
            return this.getStringAttribute('identity_id');
        },
        set: function (value) {
            this._identityId = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(IdentityJwtAuth.prototype, "identityIdInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._identityId;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(IdentityJwtAuth.prototype, "jwksCaCert", {
        get: function () {
            return this.getStringAttribute('jwks_ca_cert');
        },
        set: function (value) {
            this._jwksCaCert = value;
        },
        enumerable: false,
        configurable: true
    });
    IdentityJwtAuth.prototype.resetJwksCaCert = function () {
        this._jwksCaCert = undefined;
    };
    Object.defineProperty(IdentityJwtAuth.prototype, "jwksCaCertInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._jwksCaCert;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(IdentityJwtAuth.prototype, "jwksUrl", {
        get: function () {
            return this.getStringAttribute('jwks_url');
        },
        set: function (value) {
            this._jwksUrl = value;
        },
        enumerable: false,
        configurable: true
    });
    IdentityJwtAuth.prototype.resetJwksUrl = function () {
        this._jwksUrl = undefined;
    };
    Object.defineProperty(IdentityJwtAuth.prototype, "jwksUrlInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._jwksUrl;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(IdentityJwtAuth.prototype, "publicKeys", {
        get: function () {
            return this.getListAttribute('public_keys');
        },
        set: function (value) {
            this._publicKeys = value;
        },
        enumerable: false,
        configurable: true
    });
    IdentityJwtAuth.prototype.resetPublicKeys = function () {
        this._publicKeys = undefined;
    };
    Object.defineProperty(IdentityJwtAuth.prototype, "publicKeysInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._publicKeys;
        },
        enumerable: false,
        configurable: true
    });
    // =========
    // SYNTHESIS
    // =========
    IdentityJwtAuth.prototype.synthesizeAttributes = function () {
        return {
            access_token_max_ttl: cdktf.numberToTerraform(this._accessTokenMaxTtl),
            access_token_num_uses_limit: cdktf.numberToTerraform(this._accessTokenNumUsesLimit),
            access_token_trusted_ips: cdktf.listMapper(identityJwtAuthAccessTokenTrustedIpsToTerraform, false)(this._accessTokenTrustedIps.internalValue),
            access_token_ttl: cdktf.numberToTerraform(this._accessTokenTtl),
            bound_audiences: cdktf.listMapper(cdktf.stringToTerraform, false)(this._boundAudiences),
            bound_claims: cdktf.hashMapper(cdktf.stringToTerraform)(this._boundClaims),
            bound_issuer: cdktf.stringToTerraform(this._boundIssuer),
            bound_subject: cdktf.stringToTerraform(this._boundSubject),
            configuration_type: cdktf.stringToTerraform(this._configurationType),
            identity_id: cdktf.stringToTerraform(this._identityId),
            jwks_ca_cert: cdktf.stringToTerraform(this._jwksCaCert),
            jwks_url: cdktf.stringToTerraform(this._jwksUrl),
            public_keys: cdktf.listMapper(cdktf.stringToTerraform, false)(this._publicKeys),
        };
    };
    IdentityJwtAuth.prototype.synthesizeHclAttributes = function () {
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
                value: cdktf.listMapperHcl(identityJwtAuthAccessTokenTrustedIpsToHclTerraform, false)(this._accessTokenTrustedIps.internalValue),
                isBlock: true,
                type: "list",
                storageClassType: "IdentityJwtAuthAccessTokenTrustedIpsList",
            },
            access_token_ttl: {
                value: cdktf.numberToHclTerraform(this._accessTokenTtl),
                isBlock: false,
                type: "simple",
                storageClassType: "number",
            },
            bound_audiences: {
                value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._boundAudiences),
                isBlock: false,
                type: "list",
                storageClassType: "stringList",
            },
            bound_claims: {
                value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(this._boundClaims),
                isBlock: false,
                type: "map",
                storageClassType: "stringMap",
            },
            bound_issuer: {
                value: cdktf.stringToHclTerraform(this._boundIssuer),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            bound_subject: {
                value: cdktf.stringToHclTerraform(this._boundSubject),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            configuration_type: {
                value: cdktf.stringToHclTerraform(this._configurationType),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            identity_id: {
                value: cdktf.stringToHclTerraform(this._identityId),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            jwks_ca_cert: {
                value: cdktf.stringToHclTerraform(this._jwksCaCert),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            jwks_url: {
                value: cdktf.stringToHclTerraform(this._jwksUrl),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            public_keys: {
                value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._publicKeys),
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
    };
    // =================
    // STATIC PROPERTIES
    // =================
    IdentityJwtAuth.tfResourceType = "infisical_identity_jwt_auth";
    return IdentityJwtAuth;
}(cdktf.TerraformResource));
exports.IdentityJwtAuth = IdentityJwtAuth;
