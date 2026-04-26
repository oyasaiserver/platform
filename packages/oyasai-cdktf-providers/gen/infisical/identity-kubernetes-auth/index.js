"use strict";
// https://registry.terraform.io/providers/infisical/infisical/0.16.18/docs/resources/identity_kubernetes_auth
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
exports.IdentityKubernetesAuth = exports.IdentityKubernetesAuthAccessTokenTrustedIpsList = exports.IdentityKubernetesAuthAccessTokenTrustedIpsOutputReference = void 0;
exports.identityKubernetesAuthAccessTokenTrustedIpsToTerraform = identityKubernetesAuthAccessTokenTrustedIpsToTerraform;
exports.identityKubernetesAuthAccessTokenTrustedIpsToHclTerraform = identityKubernetesAuthAccessTokenTrustedIpsToHclTerraform;
var cdktf = require("cdktf");
function identityKubernetesAuthAccessTokenTrustedIpsToTerraform(struct) {
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
function identityKubernetesAuthAccessTokenTrustedIpsToHclTerraform(struct) {
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
var IdentityKubernetesAuthAccessTokenTrustedIpsOutputReference = /** @class */ (function (_super) {
    __extends(IdentityKubernetesAuthAccessTokenTrustedIpsOutputReference, _super);
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    function IdentityKubernetesAuthAccessTokenTrustedIpsOutputReference(terraformResource, terraformAttribute, complexObjectIndex, complexObjectIsFromSet) {
        var _this = _super.call(this, terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex) || this;
        _this.isEmptyObject = false;
        return _this;
    }
    Object.defineProperty(IdentityKubernetesAuthAccessTokenTrustedIpsOutputReference.prototype, "internalValue", {
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
    Object.defineProperty(IdentityKubernetesAuthAccessTokenTrustedIpsOutputReference.prototype, "ipAddress", {
        get: function () {
            return this.getStringAttribute('ip_address');
        },
        set: function (value) {
            this._ipAddress = value;
        },
        enumerable: false,
        configurable: true
    });
    IdentityKubernetesAuthAccessTokenTrustedIpsOutputReference.prototype.resetIpAddress = function () {
        this._ipAddress = undefined;
    };
    Object.defineProperty(IdentityKubernetesAuthAccessTokenTrustedIpsOutputReference.prototype, "ipAddressInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._ipAddress;
        },
        enumerable: false,
        configurable: true
    });
    return IdentityKubernetesAuthAccessTokenTrustedIpsOutputReference;
}(cdktf.ComplexObject));
exports.IdentityKubernetesAuthAccessTokenTrustedIpsOutputReference = IdentityKubernetesAuthAccessTokenTrustedIpsOutputReference;
var IdentityKubernetesAuthAccessTokenTrustedIpsList = /** @class */ (function (_super) {
    __extends(IdentityKubernetesAuthAccessTokenTrustedIpsList, _super);
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    function IdentityKubernetesAuthAccessTokenTrustedIpsList(terraformResource, terraformAttribute, wrapsSet) {
        var _this = _super.call(this, terraformResource, terraformAttribute, wrapsSet) || this;
        _this.terraformResource = terraformResource;
        _this.terraformAttribute = terraformAttribute;
        _this.wrapsSet = wrapsSet;
        return _this;
    }
    /**
    * @param index the index of the item to return
    */
    IdentityKubernetesAuthAccessTokenTrustedIpsList.prototype.get = function (index) {
        return new IdentityKubernetesAuthAccessTokenTrustedIpsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
    };
    return IdentityKubernetesAuthAccessTokenTrustedIpsList;
}(cdktf.ComplexList));
exports.IdentityKubernetesAuthAccessTokenTrustedIpsList = IdentityKubernetesAuthAccessTokenTrustedIpsList;
/**
* Represents a {@link https://registry.terraform.io/providers/infisical/infisical/0.16.18/docs/resources/identity_kubernetes_auth infisical_identity_kubernetes_auth}
*/
var IdentityKubernetesAuth = /** @class */ (function (_super) {
    __extends(IdentityKubernetesAuth, _super);
    // ===========
    // INITIALIZER
    // ===========
    /**
    * Create a new {@link https://registry.terraform.io/providers/infisical/infisical/0.16.18/docs/resources/identity_kubernetes_auth infisical_identity_kubernetes_auth} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options IdentityKubernetesAuthConfig
    */
    function IdentityKubernetesAuth(scope, id, config) {
        var _this = _super.call(this, scope, id, {
            terraformResourceType: 'infisical_identity_kubernetes_auth',
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
        _this._accessTokenTrustedIps = new IdentityKubernetesAuthAccessTokenTrustedIpsList(_this, "access_token_trusted_ips", false);
        _this._accessTokenMaxTtl = config.accessTokenMaxTtl;
        _this._accessTokenNumUsesLimit = config.accessTokenNumUsesLimit;
        _this._accessTokenTrustedIps.internalValue = config.accessTokenTrustedIps;
        _this._accessTokenTtl = config.accessTokenTtl;
        _this._allowedAudience = config.allowedAudience;
        _this._allowedNamespaces = config.allowedNamespaces;
        _this._allowedServiceAccountNames = config.allowedServiceAccountNames;
        _this._gatewayId = config.gatewayId;
        _this._identityId = config.identityId;
        _this._kubernetesCaCertificate = config.kubernetesCaCertificate;
        _this._kubernetesHost = config.kubernetesHost;
        _this._tokenReviewerJwt = config.tokenReviewerJwt;
        _this._tokenReviewerMode = config.tokenReviewerMode;
        return _this;
    }
    // ==============
    // STATIC Methods
    // ==============
    /**
    * Generates CDKTF code for importing a IdentityKubernetesAuth resource upon running "cdktf plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the IdentityKubernetesAuth to import
    * @param importFromId The id of the existing IdentityKubernetesAuth that should be imported. Refer to the {@link https://registry.terraform.io/providers/infisical/infisical/0.16.18/docs/resources/identity_kubernetes_auth#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the IdentityKubernetesAuth to import is found
    */
    IdentityKubernetesAuth.generateConfigForImport = function (scope, importToId, importFromId, provider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "infisical_identity_kubernetes_auth", importId: importFromId, provider: provider });
    };
    Object.defineProperty(IdentityKubernetesAuth.prototype, "accessTokenMaxTtl", {
        get: function () {
            return this.getNumberAttribute('access_token_max_ttl');
        },
        set: function (value) {
            this._accessTokenMaxTtl = value;
        },
        enumerable: false,
        configurable: true
    });
    IdentityKubernetesAuth.prototype.resetAccessTokenMaxTtl = function () {
        this._accessTokenMaxTtl = undefined;
    };
    Object.defineProperty(IdentityKubernetesAuth.prototype, "accessTokenMaxTtlInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._accessTokenMaxTtl;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(IdentityKubernetesAuth.prototype, "accessTokenNumUsesLimit", {
        get: function () {
            return this.getNumberAttribute('access_token_num_uses_limit');
        },
        set: function (value) {
            this._accessTokenNumUsesLimit = value;
        },
        enumerable: false,
        configurable: true
    });
    IdentityKubernetesAuth.prototype.resetAccessTokenNumUsesLimit = function () {
        this._accessTokenNumUsesLimit = undefined;
    };
    Object.defineProperty(IdentityKubernetesAuth.prototype, "accessTokenNumUsesLimitInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._accessTokenNumUsesLimit;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(IdentityKubernetesAuth.prototype, "accessTokenTrustedIps", {
        get: function () {
            return this._accessTokenTrustedIps;
        },
        enumerable: false,
        configurable: true
    });
    IdentityKubernetesAuth.prototype.putAccessTokenTrustedIps = function (value) {
        this._accessTokenTrustedIps.internalValue = value;
    };
    IdentityKubernetesAuth.prototype.resetAccessTokenTrustedIps = function () {
        this._accessTokenTrustedIps.internalValue = undefined;
    };
    Object.defineProperty(IdentityKubernetesAuth.prototype, "accessTokenTrustedIpsInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._accessTokenTrustedIps.internalValue;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(IdentityKubernetesAuth.prototype, "accessTokenTtl", {
        get: function () {
            return this.getNumberAttribute('access_token_ttl');
        },
        set: function (value) {
            this._accessTokenTtl = value;
        },
        enumerable: false,
        configurable: true
    });
    IdentityKubernetesAuth.prototype.resetAccessTokenTtl = function () {
        this._accessTokenTtl = undefined;
    };
    Object.defineProperty(IdentityKubernetesAuth.prototype, "accessTokenTtlInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._accessTokenTtl;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(IdentityKubernetesAuth.prototype, "allowedAudience", {
        get: function () {
            return this.getStringAttribute('allowed_audience');
        },
        set: function (value) {
            this._allowedAudience = value;
        },
        enumerable: false,
        configurable: true
    });
    IdentityKubernetesAuth.prototype.resetAllowedAudience = function () {
        this._allowedAudience = undefined;
    };
    Object.defineProperty(IdentityKubernetesAuth.prototype, "allowedAudienceInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._allowedAudience;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(IdentityKubernetesAuth.prototype, "allowedNamespaces", {
        get: function () {
            return this.getListAttribute('allowed_namespaces');
        },
        set: function (value) {
            this._allowedNamespaces = value;
        },
        enumerable: false,
        configurable: true
    });
    IdentityKubernetesAuth.prototype.resetAllowedNamespaces = function () {
        this._allowedNamespaces = undefined;
    };
    Object.defineProperty(IdentityKubernetesAuth.prototype, "allowedNamespacesInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._allowedNamespaces;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(IdentityKubernetesAuth.prototype, "allowedServiceAccountNames", {
        get: function () {
            return this.getListAttribute('allowed_service_account_names');
        },
        set: function (value) {
            this._allowedServiceAccountNames = value;
        },
        enumerable: false,
        configurable: true
    });
    IdentityKubernetesAuth.prototype.resetAllowedServiceAccountNames = function () {
        this._allowedServiceAccountNames = undefined;
    };
    Object.defineProperty(IdentityKubernetesAuth.prototype, "allowedServiceAccountNamesInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._allowedServiceAccountNames;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(IdentityKubernetesAuth.prototype, "gatewayId", {
        get: function () {
            return this.getStringAttribute('gateway_id');
        },
        set: function (value) {
            this._gatewayId = value;
        },
        enumerable: false,
        configurable: true
    });
    IdentityKubernetesAuth.prototype.resetGatewayId = function () {
        this._gatewayId = undefined;
    };
    Object.defineProperty(IdentityKubernetesAuth.prototype, "gatewayIdInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._gatewayId;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(IdentityKubernetesAuth.prototype, "id", {
        // id - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('id');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(IdentityKubernetesAuth.prototype, "identityId", {
        get: function () {
            return this.getStringAttribute('identity_id');
        },
        set: function (value) {
            this._identityId = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(IdentityKubernetesAuth.prototype, "identityIdInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._identityId;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(IdentityKubernetesAuth.prototype, "kubernetesCaCertificate", {
        get: function () {
            return this.getStringAttribute('kubernetes_ca_certificate');
        },
        set: function (value) {
            this._kubernetesCaCertificate = value;
        },
        enumerable: false,
        configurable: true
    });
    IdentityKubernetesAuth.prototype.resetKubernetesCaCertificate = function () {
        this._kubernetesCaCertificate = undefined;
    };
    Object.defineProperty(IdentityKubernetesAuth.prototype, "kubernetesCaCertificateInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._kubernetesCaCertificate;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(IdentityKubernetesAuth.prototype, "kubernetesHost", {
        get: function () {
            return this.getStringAttribute('kubernetes_host');
        },
        set: function (value) {
            this._kubernetesHost = value;
        },
        enumerable: false,
        configurable: true
    });
    IdentityKubernetesAuth.prototype.resetKubernetesHost = function () {
        this._kubernetesHost = undefined;
    };
    Object.defineProperty(IdentityKubernetesAuth.prototype, "kubernetesHostInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._kubernetesHost;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(IdentityKubernetesAuth.prototype, "tokenReviewerJwt", {
        get: function () {
            return this.getStringAttribute('token_reviewer_jwt');
        },
        set: function (value) {
            this._tokenReviewerJwt = value;
        },
        enumerable: false,
        configurable: true
    });
    IdentityKubernetesAuth.prototype.resetTokenReviewerJwt = function () {
        this._tokenReviewerJwt = undefined;
    };
    Object.defineProperty(IdentityKubernetesAuth.prototype, "tokenReviewerJwtInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._tokenReviewerJwt;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(IdentityKubernetesAuth.prototype, "tokenReviewerMode", {
        get: function () {
            return this.getStringAttribute('token_reviewer_mode');
        },
        set: function (value) {
            this._tokenReviewerMode = value;
        },
        enumerable: false,
        configurable: true
    });
    IdentityKubernetesAuth.prototype.resetTokenReviewerMode = function () {
        this._tokenReviewerMode = undefined;
    };
    Object.defineProperty(IdentityKubernetesAuth.prototype, "tokenReviewerModeInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._tokenReviewerMode;
        },
        enumerable: false,
        configurable: true
    });
    // =========
    // SYNTHESIS
    // =========
    IdentityKubernetesAuth.prototype.synthesizeAttributes = function () {
        return {
            access_token_max_ttl: cdktf.numberToTerraform(this._accessTokenMaxTtl),
            access_token_num_uses_limit: cdktf.numberToTerraform(this._accessTokenNumUsesLimit),
            access_token_trusted_ips: cdktf.listMapper(identityKubernetesAuthAccessTokenTrustedIpsToTerraform, false)(this._accessTokenTrustedIps.internalValue),
            access_token_ttl: cdktf.numberToTerraform(this._accessTokenTtl),
            allowed_audience: cdktf.stringToTerraform(this._allowedAudience),
            allowed_namespaces: cdktf.listMapper(cdktf.stringToTerraform, false)(this._allowedNamespaces),
            allowed_service_account_names: cdktf.listMapper(cdktf.stringToTerraform, false)(this._allowedServiceAccountNames),
            gateway_id: cdktf.stringToTerraform(this._gatewayId),
            identity_id: cdktf.stringToTerraform(this._identityId),
            kubernetes_ca_certificate: cdktf.stringToTerraform(this._kubernetesCaCertificate),
            kubernetes_host: cdktf.stringToTerraform(this._kubernetesHost),
            token_reviewer_jwt: cdktf.stringToTerraform(this._tokenReviewerJwt),
            token_reviewer_mode: cdktf.stringToTerraform(this._tokenReviewerMode),
        };
    };
    IdentityKubernetesAuth.prototype.synthesizeHclAttributes = function () {
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
                value: cdktf.listMapperHcl(identityKubernetesAuthAccessTokenTrustedIpsToHclTerraform, false)(this._accessTokenTrustedIps.internalValue),
                isBlock: true,
                type: "list",
                storageClassType: "IdentityKubernetesAuthAccessTokenTrustedIpsList",
            },
            access_token_ttl: {
                value: cdktf.numberToHclTerraform(this._accessTokenTtl),
                isBlock: false,
                type: "simple",
                storageClassType: "number",
            },
            allowed_audience: {
                value: cdktf.stringToHclTerraform(this._allowedAudience),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            allowed_namespaces: {
                value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._allowedNamespaces),
                isBlock: false,
                type: "list",
                storageClassType: "stringList",
            },
            allowed_service_account_names: {
                value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._allowedServiceAccountNames),
                isBlock: false,
                type: "list",
                storageClassType: "stringList",
            },
            gateway_id: {
                value: cdktf.stringToHclTerraform(this._gatewayId),
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
            kubernetes_ca_certificate: {
                value: cdktf.stringToHclTerraform(this._kubernetesCaCertificate),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            kubernetes_host: {
                value: cdktf.stringToHclTerraform(this._kubernetesHost),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            token_reviewer_jwt: {
                value: cdktf.stringToHclTerraform(this._tokenReviewerJwt),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            token_reviewer_mode: {
                value: cdktf.stringToHclTerraform(this._tokenReviewerMode),
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
    IdentityKubernetesAuth.tfResourceType = "infisical_identity_kubernetes_auth";
    return IdentityKubernetesAuth;
}(cdktf.TerraformResource));
exports.IdentityKubernetesAuth = IdentityKubernetesAuth;
