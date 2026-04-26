"use strict";
// https://registry.terraform.io/providers/infisical/infisical/0.16.18/docs/resources/identity_oidc_auth
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
exports.IdentityOidcAuth = exports.IdentityOidcAuthAccessTokenTrustedIpsList = exports.IdentityOidcAuthAccessTokenTrustedIpsOutputReference = void 0;
exports.identityOidcAuthAccessTokenTrustedIpsToTerraform = identityOidcAuthAccessTokenTrustedIpsToTerraform;
exports.identityOidcAuthAccessTokenTrustedIpsToHclTerraform = identityOidcAuthAccessTokenTrustedIpsToHclTerraform;
var cdktf = require("cdktf");
function identityOidcAuthAccessTokenTrustedIpsToTerraform(struct) {
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
function identityOidcAuthAccessTokenTrustedIpsToHclTerraform(struct) {
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
var IdentityOidcAuthAccessTokenTrustedIpsOutputReference = /** @class */ (function (_super) {
    __extends(IdentityOidcAuthAccessTokenTrustedIpsOutputReference, _super);
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    function IdentityOidcAuthAccessTokenTrustedIpsOutputReference(terraformResource, terraformAttribute, complexObjectIndex, complexObjectIsFromSet) {
        var _this = _super.call(this, terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex) || this;
        _this.isEmptyObject = false;
        return _this;
    }
    Object.defineProperty(IdentityOidcAuthAccessTokenTrustedIpsOutputReference.prototype, "internalValue", {
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
    Object.defineProperty(IdentityOidcAuthAccessTokenTrustedIpsOutputReference.prototype, "ipAddress", {
        get: function () {
            return this.getStringAttribute('ip_address');
        },
        set: function (value) {
            this._ipAddress = value;
        },
        enumerable: false,
        configurable: true
    });
    IdentityOidcAuthAccessTokenTrustedIpsOutputReference.prototype.resetIpAddress = function () {
        this._ipAddress = undefined;
    };
    Object.defineProperty(IdentityOidcAuthAccessTokenTrustedIpsOutputReference.prototype, "ipAddressInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._ipAddress;
        },
        enumerable: false,
        configurable: true
    });
    return IdentityOidcAuthAccessTokenTrustedIpsOutputReference;
}(cdktf.ComplexObject));
exports.IdentityOidcAuthAccessTokenTrustedIpsOutputReference = IdentityOidcAuthAccessTokenTrustedIpsOutputReference;
var IdentityOidcAuthAccessTokenTrustedIpsList = /** @class */ (function (_super) {
    __extends(IdentityOidcAuthAccessTokenTrustedIpsList, _super);
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    function IdentityOidcAuthAccessTokenTrustedIpsList(terraformResource, terraformAttribute, wrapsSet) {
        var _this = _super.call(this, terraformResource, terraformAttribute, wrapsSet) || this;
        _this.terraformResource = terraformResource;
        _this.terraformAttribute = terraformAttribute;
        _this.wrapsSet = wrapsSet;
        return _this;
    }
    /**
    * @param index the index of the item to return
    */
    IdentityOidcAuthAccessTokenTrustedIpsList.prototype.get = function (index) {
        return new IdentityOidcAuthAccessTokenTrustedIpsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
    };
    return IdentityOidcAuthAccessTokenTrustedIpsList;
}(cdktf.ComplexList));
exports.IdentityOidcAuthAccessTokenTrustedIpsList = IdentityOidcAuthAccessTokenTrustedIpsList;
/**
* Represents a {@link https://registry.terraform.io/providers/infisical/infisical/0.16.18/docs/resources/identity_oidc_auth infisical_identity_oidc_auth}
*/
var IdentityOidcAuth = /** @class */ (function (_super) {
    __extends(IdentityOidcAuth, _super);
    // ===========
    // INITIALIZER
    // ===========
    /**
    * Create a new {@link https://registry.terraform.io/providers/infisical/infisical/0.16.18/docs/resources/identity_oidc_auth infisical_identity_oidc_auth} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options IdentityOidcAuthConfig
    */
    function IdentityOidcAuth(scope, id, config) {
        var _this = _super.call(this, scope, id, {
            terraformResourceType: 'infisical_identity_oidc_auth',
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
        _this._accessTokenTrustedIps = new IdentityOidcAuthAccessTokenTrustedIpsList(_this, "access_token_trusted_ips", false);
        _this._accessTokenMaxTtl = config.accessTokenMaxTtl;
        _this._accessTokenNumUsesLimit = config.accessTokenNumUsesLimit;
        _this._accessTokenTrustedIps.internalValue = config.accessTokenTrustedIps;
        _this._accessTokenTtl = config.accessTokenTtl;
        _this._boundAudiences = config.boundAudiences;
        _this._boundClaims = config.boundClaims;
        _this._boundIssuer = config.boundIssuer;
        _this._boundSubject = config.boundSubject;
        _this._claimMetadataMapping = config.claimMetadataMapping;
        _this._identityId = config.identityId;
        _this._oidcCaCertificate = config.oidcCaCertificate;
        _this._oidcDiscoveryUrl = config.oidcDiscoveryUrl;
        return _this;
    }
    // ==============
    // STATIC Methods
    // ==============
    /**
    * Generates CDKTF code for importing a IdentityOidcAuth resource upon running "cdktf plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the IdentityOidcAuth to import
    * @param importFromId The id of the existing IdentityOidcAuth that should be imported. Refer to the {@link https://registry.terraform.io/providers/infisical/infisical/0.16.18/docs/resources/identity_oidc_auth#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the IdentityOidcAuth to import is found
    */
    IdentityOidcAuth.generateConfigForImport = function (scope, importToId, importFromId, provider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "infisical_identity_oidc_auth", importId: importFromId, provider: provider });
    };
    Object.defineProperty(IdentityOidcAuth.prototype, "accessTokenMaxTtl", {
        get: function () {
            return this.getNumberAttribute('access_token_max_ttl');
        },
        set: function (value) {
            this._accessTokenMaxTtl = value;
        },
        enumerable: false,
        configurable: true
    });
    IdentityOidcAuth.prototype.resetAccessTokenMaxTtl = function () {
        this._accessTokenMaxTtl = undefined;
    };
    Object.defineProperty(IdentityOidcAuth.prototype, "accessTokenMaxTtlInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._accessTokenMaxTtl;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(IdentityOidcAuth.prototype, "accessTokenNumUsesLimit", {
        get: function () {
            return this.getNumberAttribute('access_token_num_uses_limit');
        },
        set: function (value) {
            this._accessTokenNumUsesLimit = value;
        },
        enumerable: false,
        configurable: true
    });
    IdentityOidcAuth.prototype.resetAccessTokenNumUsesLimit = function () {
        this._accessTokenNumUsesLimit = undefined;
    };
    Object.defineProperty(IdentityOidcAuth.prototype, "accessTokenNumUsesLimitInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._accessTokenNumUsesLimit;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(IdentityOidcAuth.prototype, "accessTokenTrustedIps", {
        get: function () {
            return this._accessTokenTrustedIps;
        },
        enumerable: false,
        configurable: true
    });
    IdentityOidcAuth.prototype.putAccessTokenTrustedIps = function (value) {
        this._accessTokenTrustedIps.internalValue = value;
    };
    IdentityOidcAuth.prototype.resetAccessTokenTrustedIps = function () {
        this._accessTokenTrustedIps.internalValue = undefined;
    };
    Object.defineProperty(IdentityOidcAuth.prototype, "accessTokenTrustedIpsInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._accessTokenTrustedIps.internalValue;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(IdentityOidcAuth.prototype, "accessTokenTtl", {
        get: function () {
            return this.getNumberAttribute('access_token_ttl');
        },
        set: function (value) {
            this._accessTokenTtl = value;
        },
        enumerable: false,
        configurable: true
    });
    IdentityOidcAuth.prototype.resetAccessTokenTtl = function () {
        this._accessTokenTtl = undefined;
    };
    Object.defineProperty(IdentityOidcAuth.prototype, "accessTokenTtlInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._accessTokenTtl;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(IdentityOidcAuth.prototype, "boundAudiences", {
        get: function () {
            return this.getListAttribute('bound_audiences');
        },
        set: function (value) {
            this._boundAudiences = value;
        },
        enumerable: false,
        configurable: true
    });
    IdentityOidcAuth.prototype.resetBoundAudiences = function () {
        this._boundAudiences = undefined;
    };
    Object.defineProperty(IdentityOidcAuth.prototype, "boundAudiencesInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._boundAudiences;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(IdentityOidcAuth.prototype, "boundClaims", {
        get: function () {
            return this.getStringMapAttribute('bound_claims');
        },
        set: function (value) {
            this._boundClaims = value;
        },
        enumerable: false,
        configurable: true
    });
    IdentityOidcAuth.prototype.resetBoundClaims = function () {
        this._boundClaims = undefined;
    };
    Object.defineProperty(IdentityOidcAuth.prototype, "boundClaimsInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._boundClaims;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(IdentityOidcAuth.prototype, "boundIssuer", {
        get: function () {
            return this.getStringAttribute('bound_issuer');
        },
        set: function (value) {
            this._boundIssuer = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(IdentityOidcAuth.prototype, "boundIssuerInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._boundIssuer;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(IdentityOidcAuth.prototype, "boundSubject", {
        get: function () {
            return this.getStringAttribute('bound_subject');
        },
        set: function (value) {
            this._boundSubject = value;
        },
        enumerable: false,
        configurable: true
    });
    IdentityOidcAuth.prototype.resetBoundSubject = function () {
        this._boundSubject = undefined;
    };
    Object.defineProperty(IdentityOidcAuth.prototype, "boundSubjectInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._boundSubject;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(IdentityOidcAuth.prototype, "claimMetadataMapping", {
        get: function () {
            return this.getStringMapAttribute('claim_metadata_mapping');
        },
        set: function (value) {
            this._claimMetadataMapping = value;
        },
        enumerable: false,
        configurable: true
    });
    IdentityOidcAuth.prototype.resetClaimMetadataMapping = function () {
        this._claimMetadataMapping = undefined;
    };
    Object.defineProperty(IdentityOidcAuth.prototype, "claimMetadataMappingInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._claimMetadataMapping;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(IdentityOidcAuth.prototype, "id", {
        // id - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('id');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(IdentityOidcAuth.prototype, "identityId", {
        get: function () {
            return this.getStringAttribute('identity_id');
        },
        set: function (value) {
            this._identityId = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(IdentityOidcAuth.prototype, "identityIdInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._identityId;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(IdentityOidcAuth.prototype, "oidcCaCertificate", {
        get: function () {
            return this.getStringAttribute('oidc_ca_certificate');
        },
        set: function (value) {
            this._oidcCaCertificate = value;
        },
        enumerable: false,
        configurable: true
    });
    IdentityOidcAuth.prototype.resetOidcCaCertificate = function () {
        this._oidcCaCertificate = undefined;
    };
    Object.defineProperty(IdentityOidcAuth.prototype, "oidcCaCertificateInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._oidcCaCertificate;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(IdentityOidcAuth.prototype, "oidcDiscoveryUrl", {
        get: function () {
            return this.getStringAttribute('oidc_discovery_url');
        },
        set: function (value) {
            this._oidcDiscoveryUrl = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(IdentityOidcAuth.prototype, "oidcDiscoveryUrlInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._oidcDiscoveryUrl;
        },
        enumerable: false,
        configurable: true
    });
    // =========
    // SYNTHESIS
    // =========
    IdentityOidcAuth.prototype.synthesizeAttributes = function () {
        return {
            access_token_max_ttl: cdktf.numberToTerraform(this._accessTokenMaxTtl),
            access_token_num_uses_limit: cdktf.numberToTerraform(this._accessTokenNumUsesLimit),
            access_token_trusted_ips: cdktf.listMapper(identityOidcAuthAccessTokenTrustedIpsToTerraform, false)(this._accessTokenTrustedIps.internalValue),
            access_token_ttl: cdktf.numberToTerraform(this._accessTokenTtl),
            bound_audiences: cdktf.listMapper(cdktf.stringToTerraform, false)(this._boundAudiences),
            bound_claims: cdktf.hashMapper(cdktf.stringToTerraform)(this._boundClaims),
            bound_issuer: cdktf.stringToTerraform(this._boundIssuer),
            bound_subject: cdktf.stringToTerraform(this._boundSubject),
            claim_metadata_mapping: cdktf.hashMapper(cdktf.stringToTerraform)(this._claimMetadataMapping),
            identity_id: cdktf.stringToTerraform(this._identityId),
            oidc_ca_certificate: cdktf.stringToTerraform(this._oidcCaCertificate),
            oidc_discovery_url: cdktf.stringToTerraform(this._oidcDiscoveryUrl),
        };
    };
    IdentityOidcAuth.prototype.synthesizeHclAttributes = function () {
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
                value: cdktf.listMapperHcl(identityOidcAuthAccessTokenTrustedIpsToHclTerraform, false)(this._accessTokenTrustedIps.internalValue),
                isBlock: true,
                type: "list",
                storageClassType: "IdentityOidcAuthAccessTokenTrustedIpsList",
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
            claim_metadata_mapping: {
                value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(this._claimMetadataMapping),
                isBlock: false,
                type: "map",
                storageClassType: "stringMap",
            },
            identity_id: {
                value: cdktf.stringToHclTerraform(this._identityId),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            oidc_ca_certificate: {
                value: cdktf.stringToHclTerraform(this._oidcCaCertificate),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            oidc_discovery_url: {
                value: cdktf.stringToHclTerraform(this._oidcDiscoveryUrl),
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
    IdentityOidcAuth.tfResourceType = "infisical_identity_oidc_auth";
    return IdentityOidcAuth;
}(cdktf.TerraformResource));
exports.IdentityOidcAuth = IdentityOidcAuth;
