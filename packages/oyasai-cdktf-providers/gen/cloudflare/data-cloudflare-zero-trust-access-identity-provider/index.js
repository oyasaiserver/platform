"use strict";
// https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/data-sources/zero_trust_access_identity_provider
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
exports.DataCloudflareZeroTrustAccessIdentityProvider = exports.DataCloudflareZeroTrustAccessIdentityProviderScimConfigOutputReference = exports.DataCloudflareZeroTrustAccessIdentityProviderFilterOutputReference = exports.DataCloudflareZeroTrustAccessIdentityProviderConfigAOutputReference = exports.DataCloudflareZeroTrustAccessIdentityProviderConfigHeaderAttributesList = exports.DataCloudflareZeroTrustAccessIdentityProviderConfigHeaderAttributesOutputReference = void 0;
exports.dataCloudflareZeroTrustAccessIdentityProviderConfigHeaderAttributesToTerraform = dataCloudflareZeroTrustAccessIdentityProviderConfigHeaderAttributesToTerraform;
exports.dataCloudflareZeroTrustAccessIdentityProviderConfigHeaderAttributesToHclTerraform = dataCloudflareZeroTrustAccessIdentityProviderConfigHeaderAttributesToHclTerraform;
exports.dataCloudflareZeroTrustAccessIdentityProviderConfigAToTerraform = dataCloudflareZeroTrustAccessIdentityProviderConfigAToTerraform;
exports.dataCloudflareZeroTrustAccessIdentityProviderConfigAToHclTerraform = dataCloudflareZeroTrustAccessIdentityProviderConfigAToHclTerraform;
exports.dataCloudflareZeroTrustAccessIdentityProviderFilterToTerraform = dataCloudflareZeroTrustAccessIdentityProviderFilterToTerraform;
exports.dataCloudflareZeroTrustAccessIdentityProviderFilterToHclTerraform = dataCloudflareZeroTrustAccessIdentityProviderFilterToHclTerraform;
exports.dataCloudflareZeroTrustAccessIdentityProviderScimConfigToTerraform = dataCloudflareZeroTrustAccessIdentityProviderScimConfigToTerraform;
exports.dataCloudflareZeroTrustAccessIdentityProviderScimConfigToHclTerraform = dataCloudflareZeroTrustAccessIdentityProviderScimConfigToHclTerraform;
var cdktf = require("cdktf");
function dataCloudflareZeroTrustAccessIdentityProviderConfigHeaderAttributesToTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {};
}
function dataCloudflareZeroTrustAccessIdentityProviderConfigHeaderAttributesToHclTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    var attrs = {};
    return attrs;
}
var DataCloudflareZeroTrustAccessIdentityProviderConfigHeaderAttributesOutputReference = /** @class */ (function (_super) {
    __extends(DataCloudflareZeroTrustAccessIdentityProviderConfigHeaderAttributesOutputReference, _super);
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    function DataCloudflareZeroTrustAccessIdentityProviderConfigHeaderAttributesOutputReference(terraformResource, terraformAttribute, complexObjectIndex, complexObjectIsFromSet) {
        var _this = _super.call(this, terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex) || this;
        _this.isEmptyObject = false;
        return _this;
    }
    Object.defineProperty(DataCloudflareZeroTrustAccessIdentityProviderConfigHeaderAttributesOutputReference.prototype, "internalValue", {
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
    Object.defineProperty(DataCloudflareZeroTrustAccessIdentityProviderConfigHeaderAttributesOutputReference.prototype, "attributeName", {
        // attribute_name - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('attribute_name');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareZeroTrustAccessIdentityProviderConfigHeaderAttributesOutputReference.prototype, "headerName", {
        // header_name - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('header_name');
        },
        enumerable: false,
        configurable: true
    });
    return DataCloudflareZeroTrustAccessIdentityProviderConfigHeaderAttributesOutputReference;
}(cdktf.ComplexObject));
exports.DataCloudflareZeroTrustAccessIdentityProviderConfigHeaderAttributesOutputReference = DataCloudflareZeroTrustAccessIdentityProviderConfigHeaderAttributesOutputReference;
var DataCloudflareZeroTrustAccessIdentityProviderConfigHeaderAttributesList = /** @class */ (function (_super) {
    __extends(DataCloudflareZeroTrustAccessIdentityProviderConfigHeaderAttributesList, _super);
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    function DataCloudflareZeroTrustAccessIdentityProviderConfigHeaderAttributesList(terraformResource, terraformAttribute, wrapsSet) {
        var _this = _super.call(this, terraformResource, terraformAttribute, wrapsSet) || this;
        _this.terraformResource = terraformResource;
        _this.terraformAttribute = terraformAttribute;
        _this.wrapsSet = wrapsSet;
        return _this;
    }
    /**
    * @param index the index of the item to return
    */
    DataCloudflareZeroTrustAccessIdentityProviderConfigHeaderAttributesList.prototype.get = function (index) {
        return new DataCloudflareZeroTrustAccessIdentityProviderConfigHeaderAttributesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
    };
    return DataCloudflareZeroTrustAccessIdentityProviderConfigHeaderAttributesList;
}(cdktf.ComplexList));
exports.DataCloudflareZeroTrustAccessIdentityProviderConfigHeaderAttributesList = DataCloudflareZeroTrustAccessIdentityProviderConfigHeaderAttributesList;
function dataCloudflareZeroTrustAccessIdentityProviderConfigAToTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {};
}
function dataCloudflareZeroTrustAccessIdentityProviderConfigAToHclTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    var attrs = {};
    return attrs;
}
var DataCloudflareZeroTrustAccessIdentityProviderConfigAOutputReference = /** @class */ (function (_super) {
    __extends(DataCloudflareZeroTrustAccessIdentityProviderConfigAOutputReference, _super);
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    function DataCloudflareZeroTrustAccessIdentityProviderConfigAOutputReference(terraformResource, terraformAttribute) {
        var _this = _super.call(this, terraformResource, terraformAttribute, false) || this;
        _this.isEmptyObject = false;
        // header_attributes - computed: true, optional: false, required: false
        _this._headerAttributes = new DataCloudflareZeroTrustAccessIdentityProviderConfigHeaderAttributesList(_this, "header_attributes", false);
        return _this;
    }
    Object.defineProperty(DataCloudflareZeroTrustAccessIdentityProviderConfigAOutputReference.prototype, "internalValue", {
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
    Object.defineProperty(DataCloudflareZeroTrustAccessIdentityProviderConfigAOutputReference.prototype, "appsDomain", {
        // apps_domain - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('apps_domain');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareZeroTrustAccessIdentityProviderConfigAOutputReference.prototype, "attributes", {
        // attributes - computed: true, optional: false, required: false
        get: function () {
            return this.getListAttribute('attributes');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareZeroTrustAccessIdentityProviderConfigAOutputReference.prototype, "authUrl", {
        // auth_url - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('auth_url');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareZeroTrustAccessIdentityProviderConfigAOutputReference.prototype, "authorizationServerId", {
        // authorization_server_id - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('authorization_server_id');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareZeroTrustAccessIdentityProviderConfigAOutputReference.prototype, "centrifyAccount", {
        // centrify_account - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('centrify_account');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareZeroTrustAccessIdentityProviderConfigAOutputReference.prototype, "centrifyAppId", {
        // centrify_app_id - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('centrify_app_id');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareZeroTrustAccessIdentityProviderConfigAOutputReference.prototype, "certsUrl", {
        // certs_url - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('certs_url');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareZeroTrustAccessIdentityProviderConfigAOutputReference.prototype, "claims", {
        // claims - computed: true, optional: false, required: false
        get: function () {
            return this.getListAttribute('claims');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareZeroTrustAccessIdentityProviderConfigAOutputReference.prototype, "clientId", {
        // client_id - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('client_id');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareZeroTrustAccessIdentityProviderConfigAOutputReference.prototype, "clientSecret", {
        // client_secret - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('client_secret');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareZeroTrustAccessIdentityProviderConfigAOutputReference.prototype, "conditionalAccessEnabled", {
        // conditional_access_enabled - computed: true, optional: false, required: false
        get: function () {
            return this.getBooleanAttribute('conditional_access_enabled');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareZeroTrustAccessIdentityProviderConfigAOutputReference.prototype, "directoryId", {
        // directory_id - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('directory_id');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareZeroTrustAccessIdentityProviderConfigAOutputReference.prototype, "emailAttributeName", {
        // email_attribute_name - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('email_attribute_name');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareZeroTrustAccessIdentityProviderConfigAOutputReference.prototype, "emailClaimName", {
        // email_claim_name - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('email_claim_name');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareZeroTrustAccessIdentityProviderConfigAOutputReference.prototype, "headerAttributes", {
        get: function () {
            return this._headerAttributes;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareZeroTrustAccessIdentityProviderConfigAOutputReference.prototype, "idpPublicCerts", {
        // idp_public_certs - computed: true, optional: false, required: false
        get: function () {
            return this.getListAttribute('idp_public_certs');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareZeroTrustAccessIdentityProviderConfigAOutputReference.prototype, "issuerUrl", {
        // issuer_url - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('issuer_url');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareZeroTrustAccessIdentityProviderConfigAOutputReference.prototype, "oktaAccount", {
        // okta_account - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('okta_account');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareZeroTrustAccessIdentityProviderConfigAOutputReference.prototype, "oneloginAccount", {
        // onelogin_account - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('onelogin_account');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareZeroTrustAccessIdentityProviderConfigAOutputReference.prototype, "pingEnvId", {
        // ping_env_id - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('ping_env_id');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareZeroTrustAccessIdentityProviderConfigAOutputReference.prototype, "pkceEnabled", {
        // pkce_enabled - computed: true, optional: false, required: false
        get: function () {
            return this.getBooleanAttribute('pkce_enabled');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareZeroTrustAccessIdentityProviderConfigAOutputReference.prototype, "prompt", {
        // prompt - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('prompt');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareZeroTrustAccessIdentityProviderConfigAOutputReference.prototype, "redirectUrl", {
        // redirect_url - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('redirect_url');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareZeroTrustAccessIdentityProviderConfigAOutputReference.prototype, "scopes", {
        // scopes - computed: true, optional: false, required: false
        get: function () {
            return this.getListAttribute('scopes');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareZeroTrustAccessIdentityProviderConfigAOutputReference.prototype, "signRequest", {
        // sign_request - computed: true, optional: false, required: false
        get: function () {
            return this.getBooleanAttribute('sign_request');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareZeroTrustAccessIdentityProviderConfigAOutputReference.prototype, "ssoTargetUrl", {
        // sso_target_url - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('sso_target_url');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareZeroTrustAccessIdentityProviderConfigAOutputReference.prototype, "supportGroups", {
        // support_groups - computed: true, optional: false, required: false
        get: function () {
            return this.getBooleanAttribute('support_groups');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareZeroTrustAccessIdentityProviderConfigAOutputReference.prototype, "tokenUrl", {
        // token_url - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('token_url');
        },
        enumerable: false,
        configurable: true
    });
    return DataCloudflareZeroTrustAccessIdentityProviderConfigAOutputReference;
}(cdktf.ComplexObject));
exports.DataCloudflareZeroTrustAccessIdentityProviderConfigAOutputReference = DataCloudflareZeroTrustAccessIdentityProviderConfigAOutputReference;
function dataCloudflareZeroTrustAccessIdentityProviderFilterToTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
        scim_enabled: cdktf.stringToTerraform(struct.scimEnabled),
    };
}
function dataCloudflareZeroTrustAccessIdentityProviderFilterToHclTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    var attrs = {
        scim_enabled: {
            value: cdktf.stringToHclTerraform(struct.scimEnabled),
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
var DataCloudflareZeroTrustAccessIdentityProviderFilterOutputReference = /** @class */ (function (_super) {
    __extends(DataCloudflareZeroTrustAccessIdentityProviderFilterOutputReference, _super);
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    function DataCloudflareZeroTrustAccessIdentityProviderFilterOutputReference(terraformResource, terraformAttribute) {
        var _this = _super.call(this, terraformResource, terraformAttribute, false) || this;
        _this.isEmptyObject = false;
        return _this;
    }
    Object.defineProperty(DataCloudflareZeroTrustAccessIdentityProviderFilterOutputReference.prototype, "internalValue", {
        get: function () {
            if (this.resolvableValue) {
                return this.resolvableValue;
            }
            var hasAnyValues = this.isEmptyObject;
            var internalValueResult = {};
            if (this._scimEnabled !== undefined) {
                hasAnyValues = true;
                internalValueResult.scimEnabled = this._scimEnabled;
            }
            return hasAnyValues ? internalValueResult : undefined;
        },
        set: function (value) {
            if (value === undefined) {
                this.isEmptyObject = false;
                this.resolvableValue = undefined;
                this._scimEnabled = undefined;
            }
            else if (cdktf.Tokenization.isResolvable(value)) {
                this.isEmptyObject = false;
                this.resolvableValue = value;
            }
            else {
                this.isEmptyObject = Object.keys(value).length === 0;
                this.resolvableValue = undefined;
                this._scimEnabled = value.scimEnabled;
            }
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareZeroTrustAccessIdentityProviderFilterOutputReference.prototype, "scimEnabled", {
        get: function () {
            return this.getStringAttribute('scim_enabled');
        },
        set: function (value) {
            this._scimEnabled = value;
        },
        enumerable: false,
        configurable: true
    });
    DataCloudflareZeroTrustAccessIdentityProviderFilterOutputReference.prototype.resetScimEnabled = function () {
        this._scimEnabled = undefined;
    };
    Object.defineProperty(DataCloudflareZeroTrustAccessIdentityProviderFilterOutputReference.prototype, "scimEnabledInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._scimEnabled;
        },
        enumerable: false,
        configurable: true
    });
    return DataCloudflareZeroTrustAccessIdentityProviderFilterOutputReference;
}(cdktf.ComplexObject));
exports.DataCloudflareZeroTrustAccessIdentityProviderFilterOutputReference = DataCloudflareZeroTrustAccessIdentityProviderFilterOutputReference;
function dataCloudflareZeroTrustAccessIdentityProviderScimConfigToTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {};
}
function dataCloudflareZeroTrustAccessIdentityProviderScimConfigToHclTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    var attrs = {};
    return attrs;
}
var DataCloudflareZeroTrustAccessIdentityProviderScimConfigOutputReference = /** @class */ (function (_super) {
    __extends(DataCloudflareZeroTrustAccessIdentityProviderScimConfigOutputReference, _super);
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    function DataCloudflareZeroTrustAccessIdentityProviderScimConfigOutputReference(terraformResource, terraformAttribute) {
        var _this = _super.call(this, terraformResource, terraformAttribute, false) || this;
        _this.isEmptyObject = false;
        return _this;
    }
    Object.defineProperty(DataCloudflareZeroTrustAccessIdentityProviderScimConfigOutputReference.prototype, "internalValue", {
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
    Object.defineProperty(DataCloudflareZeroTrustAccessIdentityProviderScimConfigOutputReference.prototype, "enabled", {
        // enabled - computed: true, optional: false, required: false
        get: function () {
            return this.getBooleanAttribute('enabled');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareZeroTrustAccessIdentityProviderScimConfigOutputReference.prototype, "identityUpdateBehavior", {
        // identity_update_behavior - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('identity_update_behavior');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareZeroTrustAccessIdentityProviderScimConfigOutputReference.prototype, "scimBaseUrl", {
        // scim_base_url - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('scim_base_url');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareZeroTrustAccessIdentityProviderScimConfigOutputReference.prototype, "seatDeprovision", {
        // seat_deprovision - computed: true, optional: false, required: false
        get: function () {
            return this.getBooleanAttribute('seat_deprovision');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareZeroTrustAccessIdentityProviderScimConfigOutputReference.prototype, "secret", {
        // secret - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('secret');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareZeroTrustAccessIdentityProviderScimConfigOutputReference.prototype, "userDeprovision", {
        // user_deprovision - computed: true, optional: false, required: false
        get: function () {
            return this.getBooleanAttribute('user_deprovision');
        },
        enumerable: false,
        configurable: true
    });
    return DataCloudflareZeroTrustAccessIdentityProviderScimConfigOutputReference;
}(cdktf.ComplexObject));
exports.DataCloudflareZeroTrustAccessIdentityProviderScimConfigOutputReference = DataCloudflareZeroTrustAccessIdentityProviderScimConfigOutputReference;
/**
* Represents a {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/data-sources/zero_trust_access_identity_provider cloudflare_zero_trust_access_identity_provider}
*/
var DataCloudflareZeroTrustAccessIdentityProvider = /** @class */ (function (_super) {
    __extends(DataCloudflareZeroTrustAccessIdentityProvider, _super);
    // ===========
    // INITIALIZER
    // ===========
    /**
    * Create a new {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/data-sources/zero_trust_access_identity_provider cloudflare_zero_trust_access_identity_provider} Data Source
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options DataCloudflareZeroTrustAccessIdentityProviderConfig = {}
    */
    function DataCloudflareZeroTrustAccessIdentityProvider(scope, id, config) {
        if (config === void 0) { config = {}; }
        var _this = _super.call(this, scope, id, {
            terraformResourceType: 'cloudflare_zero_trust_access_identity_provider',
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
        // config - computed: true, optional: false, required: false
        _this._config = new DataCloudflareZeroTrustAccessIdentityProviderConfigAOutputReference(_this, "config");
        // filter - computed: false, optional: true, required: false
        _this._filter = new DataCloudflareZeroTrustAccessIdentityProviderFilterOutputReference(_this, "filter");
        // scim_config - computed: true, optional: false, required: false
        _this._scimConfig = new DataCloudflareZeroTrustAccessIdentityProviderScimConfigOutputReference(_this, "scim_config");
        _this._accountId = config.accountId;
        _this._filter.internalValue = config.filter;
        _this._identityProviderId = config.identityProviderId;
        _this._zoneId = config.zoneId;
        return _this;
    }
    // ==============
    // STATIC Methods
    // ==============
    /**
    * Generates CDKTF code for importing a DataCloudflareZeroTrustAccessIdentityProvider resource upon running "cdktf plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the DataCloudflareZeroTrustAccessIdentityProvider to import
    * @param importFromId The id of the existing DataCloudflareZeroTrustAccessIdentityProvider that should be imported. Refer to the {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/data-sources/zero_trust_access_identity_provider#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the DataCloudflareZeroTrustAccessIdentityProvider to import is found
    */
    DataCloudflareZeroTrustAccessIdentityProvider.generateConfigForImport = function (scope, importToId, importFromId, provider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "cloudflare_zero_trust_access_identity_provider", importId: importFromId, provider: provider });
    };
    Object.defineProperty(DataCloudflareZeroTrustAccessIdentityProvider.prototype, "accountId", {
        get: function () {
            return this.getStringAttribute('account_id');
        },
        set: function (value) {
            this._accountId = value;
        },
        enumerable: false,
        configurable: true
    });
    DataCloudflareZeroTrustAccessIdentityProvider.prototype.resetAccountId = function () {
        this._accountId = undefined;
    };
    Object.defineProperty(DataCloudflareZeroTrustAccessIdentityProvider.prototype, "accountIdInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._accountId;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareZeroTrustAccessIdentityProvider.prototype, "config", {
        get: function () {
            return this._config;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareZeroTrustAccessIdentityProvider.prototype, "filter", {
        get: function () {
            return this._filter;
        },
        enumerable: false,
        configurable: true
    });
    DataCloudflareZeroTrustAccessIdentityProvider.prototype.putFilter = function (value) {
        this._filter.internalValue = value;
    };
    DataCloudflareZeroTrustAccessIdentityProvider.prototype.resetFilter = function () {
        this._filter.internalValue = undefined;
    };
    Object.defineProperty(DataCloudflareZeroTrustAccessIdentityProvider.prototype, "filterInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._filter.internalValue;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareZeroTrustAccessIdentityProvider.prototype, "id", {
        // id - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('id');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareZeroTrustAccessIdentityProvider.prototype, "identityProviderId", {
        get: function () {
            return this.getStringAttribute('identity_provider_id');
        },
        set: function (value) {
            this._identityProviderId = value;
        },
        enumerable: false,
        configurable: true
    });
    DataCloudflareZeroTrustAccessIdentityProvider.prototype.resetIdentityProviderId = function () {
        this._identityProviderId = undefined;
    };
    Object.defineProperty(DataCloudflareZeroTrustAccessIdentityProvider.prototype, "identityProviderIdInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._identityProviderId;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareZeroTrustAccessIdentityProvider.prototype, "name", {
        // name - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('name');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareZeroTrustAccessIdentityProvider.prototype, "scimConfig", {
        get: function () {
            return this._scimConfig;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareZeroTrustAccessIdentityProvider.prototype, "type", {
        // type - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('type');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareZeroTrustAccessIdentityProvider.prototype, "zoneId", {
        get: function () {
            return this.getStringAttribute('zone_id');
        },
        set: function (value) {
            this._zoneId = value;
        },
        enumerable: false,
        configurable: true
    });
    DataCloudflareZeroTrustAccessIdentityProvider.prototype.resetZoneId = function () {
        this._zoneId = undefined;
    };
    Object.defineProperty(DataCloudflareZeroTrustAccessIdentityProvider.prototype, "zoneIdInput", {
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
    DataCloudflareZeroTrustAccessIdentityProvider.prototype.synthesizeAttributes = function () {
        return {
            account_id: cdktf.stringToTerraform(this._accountId),
            filter: dataCloudflareZeroTrustAccessIdentityProviderFilterToTerraform(this._filter.internalValue),
            identity_provider_id: cdktf.stringToTerraform(this._identityProviderId),
            zone_id: cdktf.stringToTerraform(this._zoneId),
        };
    };
    DataCloudflareZeroTrustAccessIdentityProvider.prototype.synthesizeHclAttributes = function () {
        var attrs = {
            account_id: {
                value: cdktf.stringToHclTerraform(this._accountId),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            filter: {
                value: dataCloudflareZeroTrustAccessIdentityProviderFilterToHclTerraform(this._filter.internalValue),
                isBlock: true,
                type: "struct",
                storageClassType: "DataCloudflareZeroTrustAccessIdentityProviderFilter",
            },
            identity_provider_id: {
                value: cdktf.stringToHclTerraform(this._identityProviderId),
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
    DataCloudflareZeroTrustAccessIdentityProvider.tfResourceType = "cloudflare_zero_trust_access_identity_provider";
    return DataCloudflareZeroTrustAccessIdentityProvider;
}(cdktf.TerraformDataSource));
exports.DataCloudflareZeroTrustAccessIdentityProvider = DataCloudflareZeroTrustAccessIdentityProvider;
