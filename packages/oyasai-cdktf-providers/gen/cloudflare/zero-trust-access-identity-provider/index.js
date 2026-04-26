"use strict";
// https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/zero_trust_access_identity_provider
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
exports.ZeroTrustAccessIdentityProvider = exports.ZeroTrustAccessIdentityProviderScimConfigOutputReference = exports.ZeroTrustAccessIdentityProviderConfigAOutputReference = exports.ZeroTrustAccessIdentityProviderConfigHeaderAttributesList = exports.ZeroTrustAccessIdentityProviderConfigHeaderAttributesOutputReference = void 0;
exports.zeroTrustAccessIdentityProviderConfigHeaderAttributesToTerraform = zeroTrustAccessIdentityProviderConfigHeaderAttributesToTerraform;
exports.zeroTrustAccessIdentityProviderConfigHeaderAttributesToHclTerraform = zeroTrustAccessIdentityProviderConfigHeaderAttributesToHclTerraform;
exports.zeroTrustAccessIdentityProviderConfigAToTerraform = zeroTrustAccessIdentityProviderConfigAToTerraform;
exports.zeroTrustAccessIdentityProviderConfigAToHclTerraform = zeroTrustAccessIdentityProviderConfigAToHclTerraform;
exports.zeroTrustAccessIdentityProviderScimConfigToTerraform = zeroTrustAccessIdentityProviderScimConfigToTerraform;
exports.zeroTrustAccessIdentityProviderScimConfigToHclTerraform = zeroTrustAccessIdentityProviderScimConfigToHclTerraform;
var cdktf = require("cdktf");
function zeroTrustAccessIdentityProviderConfigHeaderAttributesToTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
        attribute_name: cdktf.stringToTerraform(struct.attributeName),
        header_name: cdktf.stringToTerraform(struct.headerName),
    };
}
function zeroTrustAccessIdentityProviderConfigHeaderAttributesToHclTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    var attrs = {
        attribute_name: {
            value: cdktf.stringToHclTerraform(struct.attributeName),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        header_name: {
            value: cdktf.stringToHclTerraform(struct.headerName),
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
var ZeroTrustAccessIdentityProviderConfigHeaderAttributesOutputReference = /** @class */ (function (_super) {
    __extends(ZeroTrustAccessIdentityProviderConfigHeaderAttributesOutputReference, _super);
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    function ZeroTrustAccessIdentityProviderConfigHeaderAttributesOutputReference(terraformResource, terraformAttribute, complexObjectIndex, complexObjectIsFromSet) {
        var _this = _super.call(this, terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex) || this;
        _this.isEmptyObject = false;
        return _this;
    }
    Object.defineProperty(ZeroTrustAccessIdentityProviderConfigHeaderAttributesOutputReference.prototype, "internalValue", {
        get: function () {
            if (this.resolvableValue) {
                return this.resolvableValue;
            }
            var hasAnyValues = this.isEmptyObject;
            var internalValueResult = {};
            if (this._attributeName !== undefined) {
                hasAnyValues = true;
                internalValueResult.attributeName = this._attributeName;
            }
            if (this._headerName !== undefined) {
                hasAnyValues = true;
                internalValueResult.headerName = this._headerName;
            }
            return hasAnyValues ? internalValueResult : undefined;
        },
        set: function (value) {
            if (value === undefined) {
                this.isEmptyObject = false;
                this.resolvableValue = undefined;
                this._attributeName = undefined;
                this._headerName = undefined;
            }
            else if (cdktf.Tokenization.isResolvable(value)) {
                this.isEmptyObject = false;
                this.resolvableValue = value;
            }
            else {
                this.isEmptyObject = Object.keys(value).length === 0;
                this.resolvableValue = undefined;
                this._attributeName = value.attributeName;
                this._headerName = value.headerName;
            }
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ZeroTrustAccessIdentityProviderConfigHeaderAttributesOutputReference.prototype, "attributeName", {
        get: function () {
            return this.getStringAttribute('attribute_name');
        },
        set: function (value) {
            this._attributeName = value;
        },
        enumerable: false,
        configurable: true
    });
    ZeroTrustAccessIdentityProviderConfigHeaderAttributesOutputReference.prototype.resetAttributeName = function () {
        this._attributeName = undefined;
    };
    Object.defineProperty(ZeroTrustAccessIdentityProviderConfigHeaderAttributesOutputReference.prototype, "attributeNameInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._attributeName;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ZeroTrustAccessIdentityProviderConfigHeaderAttributesOutputReference.prototype, "headerName", {
        get: function () {
            return this.getStringAttribute('header_name');
        },
        set: function (value) {
            this._headerName = value;
        },
        enumerable: false,
        configurable: true
    });
    ZeroTrustAccessIdentityProviderConfigHeaderAttributesOutputReference.prototype.resetHeaderName = function () {
        this._headerName = undefined;
    };
    Object.defineProperty(ZeroTrustAccessIdentityProviderConfigHeaderAttributesOutputReference.prototype, "headerNameInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._headerName;
        },
        enumerable: false,
        configurable: true
    });
    return ZeroTrustAccessIdentityProviderConfigHeaderAttributesOutputReference;
}(cdktf.ComplexObject));
exports.ZeroTrustAccessIdentityProviderConfigHeaderAttributesOutputReference = ZeroTrustAccessIdentityProviderConfigHeaderAttributesOutputReference;
var ZeroTrustAccessIdentityProviderConfigHeaderAttributesList = /** @class */ (function (_super) {
    __extends(ZeroTrustAccessIdentityProviderConfigHeaderAttributesList, _super);
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    function ZeroTrustAccessIdentityProviderConfigHeaderAttributesList(terraformResource, terraformAttribute, wrapsSet) {
        var _this = _super.call(this, terraformResource, terraformAttribute, wrapsSet) || this;
        _this.terraformResource = terraformResource;
        _this.terraformAttribute = terraformAttribute;
        _this.wrapsSet = wrapsSet;
        return _this;
    }
    /**
    * @param index the index of the item to return
    */
    ZeroTrustAccessIdentityProviderConfigHeaderAttributesList.prototype.get = function (index) {
        return new ZeroTrustAccessIdentityProviderConfigHeaderAttributesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
    };
    return ZeroTrustAccessIdentityProviderConfigHeaderAttributesList;
}(cdktf.ComplexList));
exports.ZeroTrustAccessIdentityProviderConfigHeaderAttributesList = ZeroTrustAccessIdentityProviderConfigHeaderAttributesList;
function zeroTrustAccessIdentityProviderConfigAToTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
        apps_domain: cdktf.stringToTerraform(struct.appsDomain),
        attributes: cdktf.listMapper(cdktf.stringToTerraform, false)(struct.attributes),
        auth_url: cdktf.stringToTerraform(struct.authUrl),
        authorization_server_id: cdktf.stringToTerraform(struct.authorizationServerId),
        centrify_account: cdktf.stringToTerraform(struct.centrifyAccount),
        centrify_app_id: cdktf.stringToTerraform(struct.centrifyAppId),
        certs_url: cdktf.stringToTerraform(struct.certsUrl),
        claims: cdktf.listMapper(cdktf.stringToTerraform, false)(struct.claims),
        client_id: cdktf.stringToTerraform(struct.clientId),
        client_secret: cdktf.stringToTerraform(struct.clientSecret),
        conditional_access_enabled: cdktf.booleanToTerraform(struct.conditionalAccessEnabled),
        directory_id: cdktf.stringToTerraform(struct.directoryId),
        email_attribute_name: cdktf.stringToTerraform(struct.emailAttributeName),
        email_claim_name: cdktf.stringToTerraform(struct.emailClaimName),
        header_attributes: cdktf.listMapper(zeroTrustAccessIdentityProviderConfigHeaderAttributesToTerraform, false)(struct.headerAttributes),
        idp_public_certs: cdktf.listMapper(cdktf.stringToTerraform, false)(struct.idpPublicCerts),
        issuer_url: cdktf.stringToTerraform(struct.issuerUrl),
        okta_account: cdktf.stringToTerraform(struct.oktaAccount),
        onelogin_account: cdktf.stringToTerraform(struct.oneloginAccount),
        ping_env_id: cdktf.stringToTerraform(struct.pingEnvId),
        pkce_enabled: cdktf.booleanToTerraform(struct.pkceEnabled),
        prompt: cdktf.stringToTerraform(struct.prompt),
        scopes: cdktf.listMapper(cdktf.stringToTerraform, false)(struct.scopes),
        sign_request: cdktf.booleanToTerraform(struct.signRequest),
        sso_target_url: cdktf.stringToTerraform(struct.ssoTargetUrl),
        support_groups: cdktf.booleanToTerraform(struct.supportGroups),
        token_url: cdktf.stringToTerraform(struct.tokenUrl),
    };
}
function zeroTrustAccessIdentityProviderConfigAToHclTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    var attrs = {
        apps_domain: {
            value: cdktf.stringToHclTerraform(struct.appsDomain),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        attributes: {
            value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct.attributes),
            isBlock: false,
            type: "list",
            storageClassType: "stringList",
        },
        auth_url: {
            value: cdktf.stringToHclTerraform(struct.authUrl),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        authorization_server_id: {
            value: cdktf.stringToHclTerraform(struct.authorizationServerId),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        centrify_account: {
            value: cdktf.stringToHclTerraform(struct.centrifyAccount),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        centrify_app_id: {
            value: cdktf.stringToHclTerraform(struct.centrifyAppId),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        certs_url: {
            value: cdktf.stringToHclTerraform(struct.certsUrl),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        claims: {
            value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct.claims),
            isBlock: false,
            type: "list",
            storageClassType: "stringList",
        },
        client_id: {
            value: cdktf.stringToHclTerraform(struct.clientId),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        client_secret: {
            value: cdktf.stringToHclTerraform(struct.clientSecret),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        conditional_access_enabled: {
            value: cdktf.booleanToHclTerraform(struct.conditionalAccessEnabled),
            isBlock: false,
            type: "simple",
            storageClassType: "boolean",
        },
        directory_id: {
            value: cdktf.stringToHclTerraform(struct.directoryId),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        email_attribute_name: {
            value: cdktf.stringToHclTerraform(struct.emailAttributeName),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        email_claim_name: {
            value: cdktf.stringToHclTerraform(struct.emailClaimName),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        header_attributes: {
            value: cdktf.listMapperHcl(zeroTrustAccessIdentityProviderConfigHeaderAttributesToHclTerraform, false)(struct.headerAttributes),
            isBlock: true,
            type: "list",
            storageClassType: "ZeroTrustAccessIdentityProviderConfigHeaderAttributesList",
        },
        idp_public_certs: {
            value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct.idpPublicCerts),
            isBlock: false,
            type: "list",
            storageClassType: "stringList",
        },
        issuer_url: {
            value: cdktf.stringToHclTerraform(struct.issuerUrl),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        okta_account: {
            value: cdktf.stringToHclTerraform(struct.oktaAccount),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        onelogin_account: {
            value: cdktf.stringToHclTerraform(struct.oneloginAccount),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        ping_env_id: {
            value: cdktf.stringToHclTerraform(struct.pingEnvId),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        pkce_enabled: {
            value: cdktf.booleanToHclTerraform(struct.pkceEnabled),
            isBlock: false,
            type: "simple",
            storageClassType: "boolean",
        },
        prompt: {
            value: cdktf.stringToHclTerraform(struct.prompt),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        scopes: {
            value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct.scopes),
            isBlock: false,
            type: "list",
            storageClassType: "stringList",
        },
        sign_request: {
            value: cdktf.booleanToHclTerraform(struct.signRequest),
            isBlock: false,
            type: "simple",
            storageClassType: "boolean",
        },
        sso_target_url: {
            value: cdktf.stringToHclTerraform(struct.ssoTargetUrl),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        support_groups: {
            value: cdktf.booleanToHclTerraform(struct.supportGroups),
            isBlock: false,
            type: "simple",
            storageClassType: "boolean",
        },
        token_url: {
            value: cdktf.stringToHclTerraform(struct.tokenUrl),
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
var ZeroTrustAccessIdentityProviderConfigAOutputReference = /** @class */ (function (_super) {
    __extends(ZeroTrustAccessIdentityProviderConfigAOutputReference, _super);
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    function ZeroTrustAccessIdentityProviderConfigAOutputReference(terraformResource, terraformAttribute) {
        var _this = _super.call(this, terraformResource, terraformAttribute, false) || this;
        _this.isEmptyObject = false;
        // header_attributes - computed: false, optional: true, required: false
        _this._headerAttributes = new ZeroTrustAccessIdentityProviderConfigHeaderAttributesList(_this, "header_attributes", false);
        return _this;
    }
    Object.defineProperty(ZeroTrustAccessIdentityProviderConfigAOutputReference.prototype, "internalValue", {
        get: function () {
            var _a, _b;
            if (this.resolvableValue) {
                return this.resolvableValue;
            }
            var hasAnyValues = this.isEmptyObject;
            var internalValueResult = {};
            if (this._appsDomain !== undefined) {
                hasAnyValues = true;
                internalValueResult.appsDomain = this._appsDomain;
            }
            if (this._attributes !== undefined) {
                hasAnyValues = true;
                internalValueResult.attributes = this._attributes;
            }
            if (this._authUrl !== undefined) {
                hasAnyValues = true;
                internalValueResult.authUrl = this._authUrl;
            }
            if (this._authorizationServerId !== undefined) {
                hasAnyValues = true;
                internalValueResult.authorizationServerId = this._authorizationServerId;
            }
            if (this._centrifyAccount !== undefined) {
                hasAnyValues = true;
                internalValueResult.centrifyAccount = this._centrifyAccount;
            }
            if (this._centrifyAppId !== undefined) {
                hasAnyValues = true;
                internalValueResult.centrifyAppId = this._centrifyAppId;
            }
            if (this._certsUrl !== undefined) {
                hasAnyValues = true;
                internalValueResult.certsUrl = this._certsUrl;
            }
            if (this._claims !== undefined) {
                hasAnyValues = true;
                internalValueResult.claims = this._claims;
            }
            if (this._clientId !== undefined) {
                hasAnyValues = true;
                internalValueResult.clientId = this._clientId;
            }
            if (this._clientSecret !== undefined) {
                hasAnyValues = true;
                internalValueResult.clientSecret = this._clientSecret;
            }
            if (this._conditionalAccessEnabled !== undefined) {
                hasAnyValues = true;
                internalValueResult.conditionalAccessEnabled = this._conditionalAccessEnabled;
            }
            if (this._directoryId !== undefined) {
                hasAnyValues = true;
                internalValueResult.directoryId = this._directoryId;
            }
            if (this._emailAttributeName !== undefined) {
                hasAnyValues = true;
                internalValueResult.emailAttributeName = this._emailAttributeName;
            }
            if (this._emailClaimName !== undefined) {
                hasAnyValues = true;
                internalValueResult.emailClaimName = this._emailClaimName;
            }
            if (((_a = this._headerAttributes) === null || _a === void 0 ? void 0 : _a.internalValue) !== undefined) {
                hasAnyValues = true;
                internalValueResult.headerAttributes = (_b = this._headerAttributes) === null || _b === void 0 ? void 0 : _b.internalValue;
            }
            if (this._idpPublicCerts !== undefined) {
                hasAnyValues = true;
                internalValueResult.idpPublicCerts = this._idpPublicCerts;
            }
            if (this._issuerUrl !== undefined) {
                hasAnyValues = true;
                internalValueResult.issuerUrl = this._issuerUrl;
            }
            if (this._oktaAccount !== undefined) {
                hasAnyValues = true;
                internalValueResult.oktaAccount = this._oktaAccount;
            }
            if (this._oneloginAccount !== undefined) {
                hasAnyValues = true;
                internalValueResult.oneloginAccount = this._oneloginAccount;
            }
            if (this._pingEnvId !== undefined) {
                hasAnyValues = true;
                internalValueResult.pingEnvId = this._pingEnvId;
            }
            if (this._pkceEnabled !== undefined) {
                hasAnyValues = true;
                internalValueResult.pkceEnabled = this._pkceEnabled;
            }
            if (this._prompt !== undefined) {
                hasAnyValues = true;
                internalValueResult.prompt = this._prompt;
            }
            if (this._scopes !== undefined) {
                hasAnyValues = true;
                internalValueResult.scopes = this._scopes;
            }
            if (this._signRequest !== undefined) {
                hasAnyValues = true;
                internalValueResult.signRequest = this._signRequest;
            }
            if (this._ssoTargetUrl !== undefined) {
                hasAnyValues = true;
                internalValueResult.ssoTargetUrl = this._ssoTargetUrl;
            }
            if (this._supportGroups !== undefined) {
                hasAnyValues = true;
                internalValueResult.supportGroups = this._supportGroups;
            }
            if (this._tokenUrl !== undefined) {
                hasAnyValues = true;
                internalValueResult.tokenUrl = this._tokenUrl;
            }
            return hasAnyValues ? internalValueResult : undefined;
        },
        set: function (value) {
            if (value === undefined) {
                this.isEmptyObject = false;
                this.resolvableValue = undefined;
                this._appsDomain = undefined;
                this._attributes = undefined;
                this._authUrl = undefined;
                this._authorizationServerId = undefined;
                this._centrifyAccount = undefined;
                this._centrifyAppId = undefined;
                this._certsUrl = undefined;
                this._claims = undefined;
                this._clientId = undefined;
                this._clientSecret = undefined;
                this._conditionalAccessEnabled = undefined;
                this._directoryId = undefined;
                this._emailAttributeName = undefined;
                this._emailClaimName = undefined;
                this._headerAttributes.internalValue = undefined;
                this._idpPublicCerts = undefined;
                this._issuerUrl = undefined;
                this._oktaAccount = undefined;
                this._oneloginAccount = undefined;
                this._pingEnvId = undefined;
                this._pkceEnabled = undefined;
                this._prompt = undefined;
                this._scopes = undefined;
                this._signRequest = undefined;
                this._ssoTargetUrl = undefined;
                this._supportGroups = undefined;
                this._tokenUrl = undefined;
            }
            else if (cdktf.Tokenization.isResolvable(value)) {
                this.isEmptyObject = false;
                this.resolvableValue = value;
            }
            else {
                this.isEmptyObject = Object.keys(value).length === 0;
                this.resolvableValue = undefined;
                this._appsDomain = value.appsDomain;
                this._attributes = value.attributes;
                this._authUrl = value.authUrl;
                this._authorizationServerId = value.authorizationServerId;
                this._centrifyAccount = value.centrifyAccount;
                this._centrifyAppId = value.centrifyAppId;
                this._certsUrl = value.certsUrl;
                this._claims = value.claims;
                this._clientId = value.clientId;
                this._clientSecret = value.clientSecret;
                this._conditionalAccessEnabled = value.conditionalAccessEnabled;
                this._directoryId = value.directoryId;
                this._emailAttributeName = value.emailAttributeName;
                this._emailClaimName = value.emailClaimName;
                this._headerAttributes.internalValue = value.headerAttributes;
                this._idpPublicCerts = value.idpPublicCerts;
                this._issuerUrl = value.issuerUrl;
                this._oktaAccount = value.oktaAccount;
                this._oneloginAccount = value.oneloginAccount;
                this._pingEnvId = value.pingEnvId;
                this._pkceEnabled = value.pkceEnabled;
                this._prompt = value.prompt;
                this._scopes = value.scopes;
                this._signRequest = value.signRequest;
                this._ssoTargetUrl = value.ssoTargetUrl;
                this._supportGroups = value.supportGroups;
                this._tokenUrl = value.tokenUrl;
            }
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ZeroTrustAccessIdentityProviderConfigAOutputReference.prototype, "appsDomain", {
        get: function () {
            return this.getStringAttribute('apps_domain');
        },
        set: function (value) {
            this._appsDomain = value;
        },
        enumerable: false,
        configurable: true
    });
    ZeroTrustAccessIdentityProviderConfigAOutputReference.prototype.resetAppsDomain = function () {
        this._appsDomain = undefined;
    };
    Object.defineProperty(ZeroTrustAccessIdentityProviderConfigAOutputReference.prototype, "appsDomainInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._appsDomain;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ZeroTrustAccessIdentityProviderConfigAOutputReference.prototype, "attributes", {
        get: function () {
            return this.getListAttribute('attributes');
        },
        set: function (value) {
            this._attributes = value;
        },
        enumerable: false,
        configurable: true
    });
    ZeroTrustAccessIdentityProviderConfigAOutputReference.prototype.resetAttributes = function () {
        this._attributes = undefined;
    };
    Object.defineProperty(ZeroTrustAccessIdentityProviderConfigAOutputReference.prototype, "attributesInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._attributes;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ZeroTrustAccessIdentityProviderConfigAOutputReference.prototype, "authUrl", {
        get: function () {
            return this.getStringAttribute('auth_url');
        },
        set: function (value) {
            this._authUrl = value;
        },
        enumerable: false,
        configurable: true
    });
    ZeroTrustAccessIdentityProviderConfigAOutputReference.prototype.resetAuthUrl = function () {
        this._authUrl = undefined;
    };
    Object.defineProperty(ZeroTrustAccessIdentityProviderConfigAOutputReference.prototype, "authUrlInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._authUrl;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ZeroTrustAccessIdentityProviderConfigAOutputReference.prototype, "authorizationServerId", {
        get: function () {
            return this.getStringAttribute('authorization_server_id');
        },
        set: function (value) {
            this._authorizationServerId = value;
        },
        enumerable: false,
        configurable: true
    });
    ZeroTrustAccessIdentityProviderConfigAOutputReference.prototype.resetAuthorizationServerId = function () {
        this._authorizationServerId = undefined;
    };
    Object.defineProperty(ZeroTrustAccessIdentityProviderConfigAOutputReference.prototype, "authorizationServerIdInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._authorizationServerId;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ZeroTrustAccessIdentityProviderConfigAOutputReference.prototype, "centrifyAccount", {
        get: function () {
            return this.getStringAttribute('centrify_account');
        },
        set: function (value) {
            this._centrifyAccount = value;
        },
        enumerable: false,
        configurable: true
    });
    ZeroTrustAccessIdentityProviderConfigAOutputReference.prototype.resetCentrifyAccount = function () {
        this._centrifyAccount = undefined;
    };
    Object.defineProperty(ZeroTrustAccessIdentityProviderConfigAOutputReference.prototype, "centrifyAccountInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._centrifyAccount;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ZeroTrustAccessIdentityProviderConfigAOutputReference.prototype, "centrifyAppId", {
        get: function () {
            return this.getStringAttribute('centrify_app_id');
        },
        set: function (value) {
            this._centrifyAppId = value;
        },
        enumerable: false,
        configurable: true
    });
    ZeroTrustAccessIdentityProviderConfigAOutputReference.prototype.resetCentrifyAppId = function () {
        this._centrifyAppId = undefined;
    };
    Object.defineProperty(ZeroTrustAccessIdentityProviderConfigAOutputReference.prototype, "centrifyAppIdInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._centrifyAppId;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ZeroTrustAccessIdentityProviderConfigAOutputReference.prototype, "certsUrl", {
        get: function () {
            return this.getStringAttribute('certs_url');
        },
        set: function (value) {
            this._certsUrl = value;
        },
        enumerable: false,
        configurable: true
    });
    ZeroTrustAccessIdentityProviderConfigAOutputReference.prototype.resetCertsUrl = function () {
        this._certsUrl = undefined;
    };
    Object.defineProperty(ZeroTrustAccessIdentityProviderConfigAOutputReference.prototype, "certsUrlInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._certsUrl;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ZeroTrustAccessIdentityProviderConfigAOutputReference.prototype, "claims", {
        get: function () {
            return this.getListAttribute('claims');
        },
        set: function (value) {
            this._claims = value;
        },
        enumerable: false,
        configurable: true
    });
    ZeroTrustAccessIdentityProviderConfigAOutputReference.prototype.resetClaims = function () {
        this._claims = undefined;
    };
    Object.defineProperty(ZeroTrustAccessIdentityProviderConfigAOutputReference.prototype, "claimsInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._claims;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ZeroTrustAccessIdentityProviderConfigAOutputReference.prototype, "clientId", {
        get: function () {
            return this.getStringAttribute('client_id');
        },
        set: function (value) {
            this._clientId = value;
        },
        enumerable: false,
        configurable: true
    });
    ZeroTrustAccessIdentityProviderConfigAOutputReference.prototype.resetClientId = function () {
        this._clientId = undefined;
    };
    Object.defineProperty(ZeroTrustAccessIdentityProviderConfigAOutputReference.prototype, "clientIdInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._clientId;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ZeroTrustAccessIdentityProviderConfigAOutputReference.prototype, "clientSecret", {
        get: function () {
            return this.getStringAttribute('client_secret');
        },
        set: function (value) {
            this._clientSecret = value;
        },
        enumerable: false,
        configurable: true
    });
    ZeroTrustAccessIdentityProviderConfigAOutputReference.prototype.resetClientSecret = function () {
        this._clientSecret = undefined;
    };
    Object.defineProperty(ZeroTrustAccessIdentityProviderConfigAOutputReference.prototype, "clientSecretInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._clientSecret;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ZeroTrustAccessIdentityProviderConfigAOutputReference.prototype, "conditionalAccessEnabled", {
        get: function () {
            return this.getBooleanAttribute('conditional_access_enabled');
        },
        set: function (value) {
            this._conditionalAccessEnabled = value;
        },
        enumerable: false,
        configurable: true
    });
    ZeroTrustAccessIdentityProviderConfigAOutputReference.prototype.resetConditionalAccessEnabled = function () {
        this._conditionalAccessEnabled = undefined;
    };
    Object.defineProperty(ZeroTrustAccessIdentityProviderConfigAOutputReference.prototype, "conditionalAccessEnabledInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._conditionalAccessEnabled;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ZeroTrustAccessIdentityProviderConfigAOutputReference.prototype, "directoryId", {
        get: function () {
            return this.getStringAttribute('directory_id');
        },
        set: function (value) {
            this._directoryId = value;
        },
        enumerable: false,
        configurable: true
    });
    ZeroTrustAccessIdentityProviderConfigAOutputReference.prototype.resetDirectoryId = function () {
        this._directoryId = undefined;
    };
    Object.defineProperty(ZeroTrustAccessIdentityProviderConfigAOutputReference.prototype, "directoryIdInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._directoryId;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ZeroTrustAccessIdentityProviderConfigAOutputReference.prototype, "emailAttributeName", {
        get: function () {
            return this.getStringAttribute('email_attribute_name');
        },
        set: function (value) {
            this._emailAttributeName = value;
        },
        enumerable: false,
        configurable: true
    });
    ZeroTrustAccessIdentityProviderConfigAOutputReference.prototype.resetEmailAttributeName = function () {
        this._emailAttributeName = undefined;
    };
    Object.defineProperty(ZeroTrustAccessIdentityProviderConfigAOutputReference.prototype, "emailAttributeNameInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._emailAttributeName;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ZeroTrustAccessIdentityProviderConfigAOutputReference.prototype, "emailClaimName", {
        get: function () {
            return this.getStringAttribute('email_claim_name');
        },
        set: function (value) {
            this._emailClaimName = value;
        },
        enumerable: false,
        configurable: true
    });
    ZeroTrustAccessIdentityProviderConfigAOutputReference.prototype.resetEmailClaimName = function () {
        this._emailClaimName = undefined;
    };
    Object.defineProperty(ZeroTrustAccessIdentityProviderConfigAOutputReference.prototype, "emailClaimNameInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._emailClaimName;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ZeroTrustAccessIdentityProviderConfigAOutputReference.prototype, "headerAttributes", {
        get: function () {
            return this._headerAttributes;
        },
        enumerable: false,
        configurable: true
    });
    ZeroTrustAccessIdentityProviderConfigAOutputReference.prototype.putHeaderAttributes = function (value) {
        this._headerAttributes.internalValue = value;
    };
    ZeroTrustAccessIdentityProviderConfigAOutputReference.prototype.resetHeaderAttributes = function () {
        this._headerAttributes.internalValue = undefined;
    };
    Object.defineProperty(ZeroTrustAccessIdentityProviderConfigAOutputReference.prototype, "headerAttributesInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._headerAttributes.internalValue;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ZeroTrustAccessIdentityProviderConfigAOutputReference.prototype, "idpPublicCerts", {
        get: function () {
            return this.getListAttribute('idp_public_certs');
        },
        set: function (value) {
            this._idpPublicCerts = value;
        },
        enumerable: false,
        configurable: true
    });
    ZeroTrustAccessIdentityProviderConfigAOutputReference.prototype.resetIdpPublicCerts = function () {
        this._idpPublicCerts = undefined;
    };
    Object.defineProperty(ZeroTrustAccessIdentityProviderConfigAOutputReference.prototype, "idpPublicCertsInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._idpPublicCerts;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ZeroTrustAccessIdentityProviderConfigAOutputReference.prototype, "issuerUrl", {
        get: function () {
            return this.getStringAttribute('issuer_url');
        },
        set: function (value) {
            this._issuerUrl = value;
        },
        enumerable: false,
        configurable: true
    });
    ZeroTrustAccessIdentityProviderConfigAOutputReference.prototype.resetIssuerUrl = function () {
        this._issuerUrl = undefined;
    };
    Object.defineProperty(ZeroTrustAccessIdentityProviderConfigAOutputReference.prototype, "issuerUrlInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._issuerUrl;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ZeroTrustAccessIdentityProviderConfigAOutputReference.prototype, "oktaAccount", {
        get: function () {
            return this.getStringAttribute('okta_account');
        },
        set: function (value) {
            this._oktaAccount = value;
        },
        enumerable: false,
        configurable: true
    });
    ZeroTrustAccessIdentityProviderConfigAOutputReference.prototype.resetOktaAccount = function () {
        this._oktaAccount = undefined;
    };
    Object.defineProperty(ZeroTrustAccessIdentityProviderConfigAOutputReference.prototype, "oktaAccountInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._oktaAccount;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ZeroTrustAccessIdentityProviderConfigAOutputReference.prototype, "oneloginAccount", {
        get: function () {
            return this.getStringAttribute('onelogin_account');
        },
        set: function (value) {
            this._oneloginAccount = value;
        },
        enumerable: false,
        configurable: true
    });
    ZeroTrustAccessIdentityProviderConfigAOutputReference.prototype.resetOneloginAccount = function () {
        this._oneloginAccount = undefined;
    };
    Object.defineProperty(ZeroTrustAccessIdentityProviderConfigAOutputReference.prototype, "oneloginAccountInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._oneloginAccount;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ZeroTrustAccessIdentityProviderConfigAOutputReference.prototype, "pingEnvId", {
        get: function () {
            return this.getStringAttribute('ping_env_id');
        },
        set: function (value) {
            this._pingEnvId = value;
        },
        enumerable: false,
        configurable: true
    });
    ZeroTrustAccessIdentityProviderConfigAOutputReference.prototype.resetPingEnvId = function () {
        this._pingEnvId = undefined;
    };
    Object.defineProperty(ZeroTrustAccessIdentityProviderConfigAOutputReference.prototype, "pingEnvIdInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._pingEnvId;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ZeroTrustAccessIdentityProviderConfigAOutputReference.prototype, "pkceEnabled", {
        get: function () {
            return this.getBooleanAttribute('pkce_enabled');
        },
        set: function (value) {
            this._pkceEnabled = value;
        },
        enumerable: false,
        configurable: true
    });
    ZeroTrustAccessIdentityProviderConfigAOutputReference.prototype.resetPkceEnabled = function () {
        this._pkceEnabled = undefined;
    };
    Object.defineProperty(ZeroTrustAccessIdentityProviderConfigAOutputReference.prototype, "pkceEnabledInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._pkceEnabled;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ZeroTrustAccessIdentityProviderConfigAOutputReference.prototype, "prompt", {
        get: function () {
            return this.getStringAttribute('prompt');
        },
        set: function (value) {
            this._prompt = value;
        },
        enumerable: false,
        configurable: true
    });
    ZeroTrustAccessIdentityProviderConfigAOutputReference.prototype.resetPrompt = function () {
        this._prompt = undefined;
    };
    Object.defineProperty(ZeroTrustAccessIdentityProviderConfigAOutputReference.prototype, "promptInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._prompt;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ZeroTrustAccessIdentityProviderConfigAOutputReference.prototype, "redirectUrl", {
        // redirect_url - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('redirect_url');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ZeroTrustAccessIdentityProviderConfigAOutputReference.prototype, "scopes", {
        get: function () {
            return this.getListAttribute('scopes');
        },
        set: function (value) {
            this._scopes = value;
        },
        enumerable: false,
        configurable: true
    });
    ZeroTrustAccessIdentityProviderConfigAOutputReference.prototype.resetScopes = function () {
        this._scopes = undefined;
    };
    Object.defineProperty(ZeroTrustAccessIdentityProviderConfigAOutputReference.prototype, "scopesInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._scopes;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ZeroTrustAccessIdentityProviderConfigAOutputReference.prototype, "signRequest", {
        get: function () {
            return this.getBooleanAttribute('sign_request');
        },
        set: function (value) {
            this._signRequest = value;
        },
        enumerable: false,
        configurable: true
    });
    ZeroTrustAccessIdentityProviderConfigAOutputReference.prototype.resetSignRequest = function () {
        this._signRequest = undefined;
    };
    Object.defineProperty(ZeroTrustAccessIdentityProviderConfigAOutputReference.prototype, "signRequestInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._signRequest;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ZeroTrustAccessIdentityProviderConfigAOutputReference.prototype, "ssoTargetUrl", {
        get: function () {
            return this.getStringAttribute('sso_target_url');
        },
        set: function (value) {
            this._ssoTargetUrl = value;
        },
        enumerable: false,
        configurable: true
    });
    ZeroTrustAccessIdentityProviderConfigAOutputReference.prototype.resetSsoTargetUrl = function () {
        this._ssoTargetUrl = undefined;
    };
    Object.defineProperty(ZeroTrustAccessIdentityProviderConfigAOutputReference.prototype, "ssoTargetUrlInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._ssoTargetUrl;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ZeroTrustAccessIdentityProviderConfigAOutputReference.prototype, "supportGroups", {
        get: function () {
            return this.getBooleanAttribute('support_groups');
        },
        set: function (value) {
            this._supportGroups = value;
        },
        enumerable: false,
        configurable: true
    });
    ZeroTrustAccessIdentityProviderConfigAOutputReference.prototype.resetSupportGroups = function () {
        this._supportGroups = undefined;
    };
    Object.defineProperty(ZeroTrustAccessIdentityProviderConfigAOutputReference.prototype, "supportGroupsInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._supportGroups;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ZeroTrustAccessIdentityProviderConfigAOutputReference.prototype, "tokenUrl", {
        get: function () {
            return this.getStringAttribute('token_url');
        },
        set: function (value) {
            this._tokenUrl = value;
        },
        enumerable: false,
        configurable: true
    });
    ZeroTrustAccessIdentityProviderConfigAOutputReference.prototype.resetTokenUrl = function () {
        this._tokenUrl = undefined;
    };
    Object.defineProperty(ZeroTrustAccessIdentityProviderConfigAOutputReference.prototype, "tokenUrlInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._tokenUrl;
        },
        enumerable: false,
        configurable: true
    });
    return ZeroTrustAccessIdentityProviderConfigAOutputReference;
}(cdktf.ComplexObject));
exports.ZeroTrustAccessIdentityProviderConfigAOutputReference = ZeroTrustAccessIdentityProviderConfigAOutputReference;
function zeroTrustAccessIdentityProviderScimConfigToTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
        enabled: cdktf.booleanToTerraform(struct.enabled),
        identity_update_behavior: cdktf.stringToTerraform(struct.identityUpdateBehavior),
        seat_deprovision: cdktf.booleanToTerraform(struct.seatDeprovision),
        user_deprovision: cdktf.booleanToTerraform(struct.userDeprovision),
    };
}
function zeroTrustAccessIdentityProviderScimConfigToHclTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    var attrs = {
        enabled: {
            value: cdktf.booleanToHclTerraform(struct.enabled),
            isBlock: false,
            type: "simple",
            storageClassType: "boolean",
        },
        identity_update_behavior: {
            value: cdktf.stringToHclTerraform(struct.identityUpdateBehavior),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        seat_deprovision: {
            value: cdktf.booleanToHclTerraform(struct.seatDeprovision),
            isBlock: false,
            type: "simple",
            storageClassType: "boolean",
        },
        user_deprovision: {
            value: cdktf.booleanToHclTerraform(struct.userDeprovision),
            isBlock: false,
            type: "simple",
            storageClassType: "boolean",
        },
    };
    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(function (_a) {
        var _ = _a[0], value = _a[1];
        return value !== undefined && value.value !== undefined;
    }));
}
var ZeroTrustAccessIdentityProviderScimConfigOutputReference = /** @class */ (function (_super) {
    __extends(ZeroTrustAccessIdentityProviderScimConfigOutputReference, _super);
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    function ZeroTrustAccessIdentityProviderScimConfigOutputReference(terraformResource, terraformAttribute) {
        var _this = _super.call(this, terraformResource, terraformAttribute, false) || this;
        _this.isEmptyObject = false;
        return _this;
    }
    Object.defineProperty(ZeroTrustAccessIdentityProviderScimConfigOutputReference.prototype, "internalValue", {
        get: function () {
            if (this.resolvableValue) {
                return this.resolvableValue;
            }
            var hasAnyValues = this.isEmptyObject;
            var internalValueResult = {};
            if (this._enabled !== undefined) {
                hasAnyValues = true;
                internalValueResult.enabled = this._enabled;
            }
            if (this._identityUpdateBehavior !== undefined) {
                hasAnyValues = true;
                internalValueResult.identityUpdateBehavior = this._identityUpdateBehavior;
            }
            if (this._seatDeprovision !== undefined) {
                hasAnyValues = true;
                internalValueResult.seatDeprovision = this._seatDeprovision;
            }
            if (this._userDeprovision !== undefined) {
                hasAnyValues = true;
                internalValueResult.userDeprovision = this._userDeprovision;
            }
            return hasAnyValues ? internalValueResult : undefined;
        },
        set: function (value) {
            if (value === undefined) {
                this.isEmptyObject = false;
                this.resolvableValue = undefined;
                this._enabled = undefined;
                this._identityUpdateBehavior = undefined;
                this._seatDeprovision = undefined;
                this._userDeprovision = undefined;
            }
            else if (cdktf.Tokenization.isResolvable(value)) {
                this.isEmptyObject = false;
                this.resolvableValue = value;
            }
            else {
                this.isEmptyObject = Object.keys(value).length === 0;
                this.resolvableValue = undefined;
                this._enabled = value.enabled;
                this._identityUpdateBehavior = value.identityUpdateBehavior;
                this._seatDeprovision = value.seatDeprovision;
                this._userDeprovision = value.userDeprovision;
            }
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ZeroTrustAccessIdentityProviderScimConfigOutputReference.prototype, "enabled", {
        get: function () {
            return this.getBooleanAttribute('enabled');
        },
        set: function (value) {
            this._enabled = value;
        },
        enumerable: false,
        configurable: true
    });
    ZeroTrustAccessIdentityProviderScimConfigOutputReference.prototype.resetEnabled = function () {
        this._enabled = undefined;
    };
    Object.defineProperty(ZeroTrustAccessIdentityProviderScimConfigOutputReference.prototype, "enabledInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._enabled;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ZeroTrustAccessIdentityProviderScimConfigOutputReference.prototype, "identityUpdateBehavior", {
        get: function () {
            return this.getStringAttribute('identity_update_behavior');
        },
        set: function (value) {
            this._identityUpdateBehavior = value;
        },
        enumerable: false,
        configurable: true
    });
    ZeroTrustAccessIdentityProviderScimConfigOutputReference.prototype.resetIdentityUpdateBehavior = function () {
        this._identityUpdateBehavior = undefined;
    };
    Object.defineProperty(ZeroTrustAccessIdentityProviderScimConfigOutputReference.prototype, "identityUpdateBehaviorInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._identityUpdateBehavior;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ZeroTrustAccessIdentityProviderScimConfigOutputReference.prototype, "scimBaseUrl", {
        // scim_base_url - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('scim_base_url');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ZeroTrustAccessIdentityProviderScimConfigOutputReference.prototype, "seatDeprovision", {
        get: function () {
            return this.getBooleanAttribute('seat_deprovision');
        },
        set: function (value) {
            this._seatDeprovision = value;
        },
        enumerable: false,
        configurable: true
    });
    ZeroTrustAccessIdentityProviderScimConfigOutputReference.prototype.resetSeatDeprovision = function () {
        this._seatDeprovision = undefined;
    };
    Object.defineProperty(ZeroTrustAccessIdentityProviderScimConfigOutputReference.prototype, "seatDeprovisionInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._seatDeprovision;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ZeroTrustAccessIdentityProviderScimConfigOutputReference.prototype, "secret", {
        // secret - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('secret');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ZeroTrustAccessIdentityProviderScimConfigOutputReference.prototype, "userDeprovision", {
        get: function () {
            return this.getBooleanAttribute('user_deprovision');
        },
        set: function (value) {
            this._userDeprovision = value;
        },
        enumerable: false,
        configurable: true
    });
    ZeroTrustAccessIdentityProviderScimConfigOutputReference.prototype.resetUserDeprovision = function () {
        this._userDeprovision = undefined;
    };
    Object.defineProperty(ZeroTrustAccessIdentityProviderScimConfigOutputReference.prototype, "userDeprovisionInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._userDeprovision;
        },
        enumerable: false,
        configurable: true
    });
    return ZeroTrustAccessIdentityProviderScimConfigOutputReference;
}(cdktf.ComplexObject));
exports.ZeroTrustAccessIdentityProviderScimConfigOutputReference = ZeroTrustAccessIdentityProviderScimConfigOutputReference;
/**
* Represents a {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/zero_trust_access_identity_provider cloudflare_zero_trust_access_identity_provider}
*/
var ZeroTrustAccessIdentityProvider = /** @class */ (function (_super) {
    __extends(ZeroTrustAccessIdentityProvider, _super);
    // ===========
    // INITIALIZER
    // ===========
    /**
    * Create a new {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/zero_trust_access_identity_provider cloudflare_zero_trust_access_identity_provider} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options ZeroTrustAccessIdentityProviderConfig
    */
    function ZeroTrustAccessIdentityProvider(scope, id, config) {
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
        // config - computed: false, optional: false, required: true
        _this._config = new ZeroTrustAccessIdentityProviderConfigAOutputReference(_this, "config");
        // scim_config - computed: true, optional: true, required: false
        _this._scimConfig = new ZeroTrustAccessIdentityProviderScimConfigOutputReference(_this, "scim_config");
        _this._accountId = config.accountId;
        _this._config.internalValue = config.config;
        _this._name = config.name;
        _this._scimConfig.internalValue = config.scimConfig;
        _this._type = config.type;
        _this._zoneId = config.zoneId;
        return _this;
    }
    // ==============
    // STATIC Methods
    // ==============
    /**
    * Generates CDKTF code for importing a ZeroTrustAccessIdentityProvider resource upon running "cdktf plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the ZeroTrustAccessIdentityProvider to import
    * @param importFromId The id of the existing ZeroTrustAccessIdentityProvider that should be imported. Refer to the {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/zero_trust_access_identity_provider#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the ZeroTrustAccessIdentityProvider to import is found
    */
    ZeroTrustAccessIdentityProvider.generateConfigForImport = function (scope, importToId, importFromId, provider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "cloudflare_zero_trust_access_identity_provider", importId: importFromId, provider: provider });
    };
    Object.defineProperty(ZeroTrustAccessIdentityProvider.prototype, "accountId", {
        get: function () {
            return this.getStringAttribute('account_id');
        },
        set: function (value) {
            this._accountId = value;
        },
        enumerable: false,
        configurable: true
    });
    ZeroTrustAccessIdentityProvider.prototype.resetAccountId = function () {
        this._accountId = undefined;
    };
    Object.defineProperty(ZeroTrustAccessIdentityProvider.prototype, "accountIdInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._accountId;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ZeroTrustAccessIdentityProvider.prototype, "config", {
        get: function () {
            return this._config;
        },
        enumerable: false,
        configurable: true
    });
    ZeroTrustAccessIdentityProvider.prototype.putConfig = function (value) {
        this._config.internalValue = value;
    };
    Object.defineProperty(ZeroTrustAccessIdentityProvider.prototype, "configInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._config.internalValue;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ZeroTrustAccessIdentityProvider.prototype, "id", {
        // id - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('id');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ZeroTrustAccessIdentityProvider.prototype, "name", {
        get: function () {
            return this.getStringAttribute('name');
        },
        set: function (value) {
            this._name = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ZeroTrustAccessIdentityProvider.prototype, "nameInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._name;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ZeroTrustAccessIdentityProvider.prototype, "scimConfig", {
        get: function () {
            return this._scimConfig;
        },
        enumerable: false,
        configurable: true
    });
    ZeroTrustAccessIdentityProvider.prototype.putScimConfig = function (value) {
        this._scimConfig.internalValue = value;
    };
    ZeroTrustAccessIdentityProvider.prototype.resetScimConfig = function () {
        this._scimConfig.internalValue = undefined;
    };
    Object.defineProperty(ZeroTrustAccessIdentityProvider.prototype, "scimConfigInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._scimConfig.internalValue;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ZeroTrustAccessIdentityProvider.prototype, "type", {
        get: function () {
            return this.getStringAttribute('type');
        },
        set: function (value) {
            this._type = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ZeroTrustAccessIdentityProvider.prototype, "typeInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._type;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ZeroTrustAccessIdentityProvider.prototype, "zoneId", {
        get: function () {
            return this.getStringAttribute('zone_id');
        },
        set: function (value) {
            this._zoneId = value;
        },
        enumerable: false,
        configurable: true
    });
    ZeroTrustAccessIdentityProvider.prototype.resetZoneId = function () {
        this._zoneId = undefined;
    };
    Object.defineProperty(ZeroTrustAccessIdentityProvider.prototype, "zoneIdInput", {
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
    ZeroTrustAccessIdentityProvider.prototype.synthesizeAttributes = function () {
        return {
            account_id: cdktf.stringToTerraform(this._accountId),
            config: zeroTrustAccessIdentityProviderConfigAToTerraform(this._config.internalValue),
            name: cdktf.stringToTerraform(this._name),
            scim_config: zeroTrustAccessIdentityProviderScimConfigToTerraform(this._scimConfig.internalValue),
            type: cdktf.stringToTerraform(this._type),
            zone_id: cdktf.stringToTerraform(this._zoneId),
        };
    };
    ZeroTrustAccessIdentityProvider.prototype.synthesizeHclAttributes = function () {
        var attrs = {
            account_id: {
                value: cdktf.stringToHclTerraform(this._accountId),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            config: {
                value: zeroTrustAccessIdentityProviderConfigAToHclTerraform(this._config.internalValue),
                isBlock: true,
                type: "struct",
                storageClassType: "ZeroTrustAccessIdentityProviderConfigA",
            },
            name: {
                value: cdktf.stringToHclTerraform(this._name),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            scim_config: {
                value: zeroTrustAccessIdentityProviderScimConfigToHclTerraform(this._scimConfig.internalValue),
                isBlock: true,
                type: "struct",
                storageClassType: "ZeroTrustAccessIdentityProviderScimConfig",
            },
            type: {
                value: cdktf.stringToHclTerraform(this._type),
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
    ZeroTrustAccessIdentityProvider.tfResourceType = "cloudflare_zero_trust_access_identity_provider";
    return ZeroTrustAccessIdentityProvider;
}(cdktf.TerraformResource));
exports.ZeroTrustAccessIdentityProvider = ZeroTrustAccessIdentityProvider;
