"use strict";
// https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/data-sources/zero_trust_access_identity_providers
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
exports.DataCloudflareZeroTrustAccessIdentityProviders = exports.DataCloudflareZeroTrustAccessIdentityProvidersResultList = exports.DataCloudflareZeroTrustAccessIdentityProvidersResultOutputReference = exports.DataCloudflareZeroTrustAccessIdentityProvidersResultScimConfigOutputReference = exports.DataCloudflareZeroTrustAccessIdentityProvidersResultConfigOutputReference = exports.DataCloudflareZeroTrustAccessIdentityProvidersResultConfigHeaderAttributesList = exports.DataCloudflareZeroTrustAccessIdentityProvidersResultConfigHeaderAttributesOutputReference = void 0;
exports.dataCloudflareZeroTrustAccessIdentityProvidersResultConfigHeaderAttributesToTerraform = dataCloudflareZeroTrustAccessIdentityProvidersResultConfigHeaderAttributesToTerraform;
exports.dataCloudflareZeroTrustAccessIdentityProvidersResultConfigHeaderAttributesToHclTerraform = dataCloudflareZeroTrustAccessIdentityProvidersResultConfigHeaderAttributesToHclTerraform;
exports.dataCloudflareZeroTrustAccessIdentityProvidersResultConfigToTerraform = dataCloudflareZeroTrustAccessIdentityProvidersResultConfigToTerraform;
exports.dataCloudflareZeroTrustAccessIdentityProvidersResultConfigToHclTerraform = dataCloudflareZeroTrustAccessIdentityProvidersResultConfigToHclTerraform;
exports.dataCloudflareZeroTrustAccessIdentityProvidersResultScimConfigToTerraform = dataCloudflareZeroTrustAccessIdentityProvidersResultScimConfigToTerraform;
exports.dataCloudflareZeroTrustAccessIdentityProvidersResultScimConfigToHclTerraform = dataCloudflareZeroTrustAccessIdentityProvidersResultScimConfigToHclTerraform;
exports.dataCloudflareZeroTrustAccessIdentityProvidersResultToTerraform = dataCloudflareZeroTrustAccessIdentityProvidersResultToTerraform;
exports.dataCloudflareZeroTrustAccessIdentityProvidersResultToHclTerraform = dataCloudflareZeroTrustAccessIdentityProvidersResultToHclTerraform;
var cdktf = require("cdktf");
function dataCloudflareZeroTrustAccessIdentityProvidersResultConfigHeaderAttributesToTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {};
}
function dataCloudflareZeroTrustAccessIdentityProvidersResultConfigHeaderAttributesToHclTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    var attrs = {};
    return attrs;
}
var DataCloudflareZeroTrustAccessIdentityProvidersResultConfigHeaderAttributesOutputReference = /** @class */ (function (_super) {
    __extends(DataCloudflareZeroTrustAccessIdentityProvidersResultConfigHeaderAttributesOutputReference, _super);
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    function DataCloudflareZeroTrustAccessIdentityProvidersResultConfigHeaderAttributesOutputReference(terraformResource, terraformAttribute, complexObjectIndex, complexObjectIsFromSet) {
        var _this = _super.call(this, terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex) || this;
        _this.isEmptyObject = false;
        return _this;
    }
    Object.defineProperty(DataCloudflareZeroTrustAccessIdentityProvidersResultConfigHeaderAttributesOutputReference.prototype, "internalValue", {
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
    Object.defineProperty(DataCloudflareZeroTrustAccessIdentityProvidersResultConfigHeaderAttributesOutputReference.prototype, "attributeName", {
        // attribute_name - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('attribute_name');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareZeroTrustAccessIdentityProvidersResultConfigHeaderAttributesOutputReference.prototype, "headerName", {
        // header_name - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('header_name');
        },
        enumerable: false,
        configurable: true
    });
    return DataCloudflareZeroTrustAccessIdentityProvidersResultConfigHeaderAttributesOutputReference;
}(cdktf.ComplexObject));
exports.DataCloudflareZeroTrustAccessIdentityProvidersResultConfigHeaderAttributesOutputReference = DataCloudflareZeroTrustAccessIdentityProvidersResultConfigHeaderAttributesOutputReference;
var DataCloudflareZeroTrustAccessIdentityProvidersResultConfigHeaderAttributesList = /** @class */ (function (_super) {
    __extends(DataCloudflareZeroTrustAccessIdentityProvidersResultConfigHeaderAttributesList, _super);
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    function DataCloudflareZeroTrustAccessIdentityProvidersResultConfigHeaderAttributesList(terraformResource, terraformAttribute, wrapsSet) {
        var _this = _super.call(this, terraformResource, terraformAttribute, wrapsSet) || this;
        _this.terraformResource = terraformResource;
        _this.terraformAttribute = terraformAttribute;
        _this.wrapsSet = wrapsSet;
        return _this;
    }
    /**
    * @param index the index of the item to return
    */
    DataCloudflareZeroTrustAccessIdentityProvidersResultConfigHeaderAttributesList.prototype.get = function (index) {
        return new DataCloudflareZeroTrustAccessIdentityProvidersResultConfigHeaderAttributesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
    };
    return DataCloudflareZeroTrustAccessIdentityProvidersResultConfigHeaderAttributesList;
}(cdktf.ComplexList));
exports.DataCloudflareZeroTrustAccessIdentityProvidersResultConfigHeaderAttributesList = DataCloudflareZeroTrustAccessIdentityProvidersResultConfigHeaderAttributesList;
function dataCloudflareZeroTrustAccessIdentityProvidersResultConfigToTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {};
}
function dataCloudflareZeroTrustAccessIdentityProvidersResultConfigToHclTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    var attrs = {};
    return attrs;
}
var DataCloudflareZeroTrustAccessIdentityProvidersResultConfigOutputReference = /** @class */ (function (_super) {
    __extends(DataCloudflareZeroTrustAccessIdentityProvidersResultConfigOutputReference, _super);
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    function DataCloudflareZeroTrustAccessIdentityProvidersResultConfigOutputReference(terraformResource, terraformAttribute) {
        var _this = _super.call(this, terraformResource, terraformAttribute, false) || this;
        _this.isEmptyObject = false;
        // header_attributes - computed: true, optional: false, required: false
        _this._headerAttributes = new DataCloudflareZeroTrustAccessIdentityProvidersResultConfigHeaderAttributesList(_this, "header_attributes", false);
        return _this;
    }
    Object.defineProperty(DataCloudflareZeroTrustAccessIdentityProvidersResultConfigOutputReference.prototype, "internalValue", {
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
    Object.defineProperty(DataCloudflareZeroTrustAccessIdentityProvidersResultConfigOutputReference.prototype, "appsDomain", {
        // apps_domain - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('apps_domain');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareZeroTrustAccessIdentityProvidersResultConfigOutputReference.prototype, "attributes", {
        // attributes - computed: true, optional: false, required: false
        get: function () {
            return this.getListAttribute('attributes');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareZeroTrustAccessIdentityProvidersResultConfigOutputReference.prototype, "authUrl", {
        // auth_url - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('auth_url');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareZeroTrustAccessIdentityProvidersResultConfigOutputReference.prototype, "authorizationServerId", {
        // authorization_server_id - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('authorization_server_id');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareZeroTrustAccessIdentityProvidersResultConfigOutputReference.prototype, "centrifyAccount", {
        // centrify_account - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('centrify_account');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareZeroTrustAccessIdentityProvidersResultConfigOutputReference.prototype, "centrifyAppId", {
        // centrify_app_id - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('centrify_app_id');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareZeroTrustAccessIdentityProvidersResultConfigOutputReference.prototype, "certsUrl", {
        // certs_url - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('certs_url');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareZeroTrustAccessIdentityProvidersResultConfigOutputReference.prototype, "claims", {
        // claims - computed: true, optional: false, required: false
        get: function () {
            return this.getListAttribute('claims');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareZeroTrustAccessIdentityProvidersResultConfigOutputReference.prototype, "clientId", {
        // client_id - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('client_id');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareZeroTrustAccessIdentityProvidersResultConfigOutputReference.prototype, "clientSecret", {
        // client_secret - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('client_secret');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareZeroTrustAccessIdentityProvidersResultConfigOutputReference.prototype, "conditionalAccessEnabled", {
        // conditional_access_enabled - computed: true, optional: false, required: false
        get: function () {
            return this.getBooleanAttribute('conditional_access_enabled');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareZeroTrustAccessIdentityProvidersResultConfigOutputReference.prototype, "directoryId", {
        // directory_id - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('directory_id');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareZeroTrustAccessIdentityProvidersResultConfigOutputReference.prototype, "emailAttributeName", {
        // email_attribute_name - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('email_attribute_name');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareZeroTrustAccessIdentityProvidersResultConfigOutputReference.prototype, "emailClaimName", {
        // email_claim_name - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('email_claim_name');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareZeroTrustAccessIdentityProvidersResultConfigOutputReference.prototype, "headerAttributes", {
        get: function () {
            return this._headerAttributes;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareZeroTrustAccessIdentityProvidersResultConfigOutputReference.prototype, "idpPublicCerts", {
        // idp_public_certs - computed: true, optional: false, required: false
        get: function () {
            return this.getListAttribute('idp_public_certs');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareZeroTrustAccessIdentityProvidersResultConfigOutputReference.prototype, "issuerUrl", {
        // issuer_url - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('issuer_url');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareZeroTrustAccessIdentityProvidersResultConfigOutputReference.prototype, "oktaAccount", {
        // okta_account - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('okta_account');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareZeroTrustAccessIdentityProvidersResultConfigOutputReference.prototype, "oneloginAccount", {
        // onelogin_account - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('onelogin_account');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareZeroTrustAccessIdentityProvidersResultConfigOutputReference.prototype, "pingEnvId", {
        // ping_env_id - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('ping_env_id');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareZeroTrustAccessIdentityProvidersResultConfigOutputReference.prototype, "pkceEnabled", {
        // pkce_enabled - computed: true, optional: false, required: false
        get: function () {
            return this.getBooleanAttribute('pkce_enabled');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareZeroTrustAccessIdentityProvidersResultConfigOutputReference.prototype, "prompt", {
        // prompt - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('prompt');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareZeroTrustAccessIdentityProvidersResultConfigOutputReference.prototype, "scopes", {
        // scopes - computed: true, optional: false, required: false
        get: function () {
            return this.getListAttribute('scopes');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareZeroTrustAccessIdentityProvidersResultConfigOutputReference.prototype, "signRequest", {
        // sign_request - computed: true, optional: false, required: false
        get: function () {
            return this.getBooleanAttribute('sign_request');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareZeroTrustAccessIdentityProvidersResultConfigOutputReference.prototype, "ssoTargetUrl", {
        // sso_target_url - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('sso_target_url');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareZeroTrustAccessIdentityProvidersResultConfigOutputReference.prototype, "supportGroups", {
        // support_groups - computed: true, optional: false, required: false
        get: function () {
            return this.getBooleanAttribute('support_groups');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareZeroTrustAccessIdentityProvidersResultConfigOutputReference.prototype, "tokenUrl", {
        // token_url - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('token_url');
        },
        enumerable: false,
        configurable: true
    });
    return DataCloudflareZeroTrustAccessIdentityProvidersResultConfigOutputReference;
}(cdktf.ComplexObject));
exports.DataCloudflareZeroTrustAccessIdentityProvidersResultConfigOutputReference = DataCloudflareZeroTrustAccessIdentityProvidersResultConfigOutputReference;
function dataCloudflareZeroTrustAccessIdentityProvidersResultScimConfigToTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {};
}
function dataCloudflareZeroTrustAccessIdentityProvidersResultScimConfigToHclTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    var attrs = {};
    return attrs;
}
var DataCloudflareZeroTrustAccessIdentityProvidersResultScimConfigOutputReference = /** @class */ (function (_super) {
    __extends(DataCloudflareZeroTrustAccessIdentityProvidersResultScimConfigOutputReference, _super);
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    function DataCloudflareZeroTrustAccessIdentityProvidersResultScimConfigOutputReference(terraformResource, terraformAttribute) {
        var _this = _super.call(this, terraformResource, terraformAttribute, false) || this;
        _this.isEmptyObject = false;
        return _this;
    }
    Object.defineProperty(DataCloudflareZeroTrustAccessIdentityProvidersResultScimConfigOutputReference.prototype, "internalValue", {
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
    Object.defineProperty(DataCloudflareZeroTrustAccessIdentityProvidersResultScimConfigOutputReference.prototype, "enabled", {
        // enabled - computed: true, optional: false, required: false
        get: function () {
            return this.getBooleanAttribute('enabled');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareZeroTrustAccessIdentityProvidersResultScimConfigOutputReference.prototype, "identityUpdateBehavior", {
        // identity_update_behavior - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('identity_update_behavior');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareZeroTrustAccessIdentityProvidersResultScimConfigOutputReference.prototype, "scimBaseUrl", {
        // scim_base_url - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('scim_base_url');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareZeroTrustAccessIdentityProvidersResultScimConfigOutputReference.prototype, "seatDeprovision", {
        // seat_deprovision - computed: true, optional: false, required: false
        get: function () {
            return this.getBooleanAttribute('seat_deprovision');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareZeroTrustAccessIdentityProvidersResultScimConfigOutputReference.prototype, "secret", {
        // secret - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('secret');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareZeroTrustAccessIdentityProvidersResultScimConfigOutputReference.prototype, "userDeprovision", {
        // user_deprovision - computed: true, optional: false, required: false
        get: function () {
            return this.getBooleanAttribute('user_deprovision');
        },
        enumerable: false,
        configurable: true
    });
    return DataCloudflareZeroTrustAccessIdentityProvidersResultScimConfigOutputReference;
}(cdktf.ComplexObject));
exports.DataCloudflareZeroTrustAccessIdentityProvidersResultScimConfigOutputReference = DataCloudflareZeroTrustAccessIdentityProvidersResultScimConfigOutputReference;
function dataCloudflareZeroTrustAccessIdentityProvidersResultToTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {};
}
function dataCloudflareZeroTrustAccessIdentityProvidersResultToHclTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    var attrs = {};
    return attrs;
}
var DataCloudflareZeroTrustAccessIdentityProvidersResultOutputReference = /** @class */ (function (_super) {
    __extends(DataCloudflareZeroTrustAccessIdentityProvidersResultOutputReference, _super);
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    function DataCloudflareZeroTrustAccessIdentityProvidersResultOutputReference(terraformResource, terraformAttribute, complexObjectIndex, complexObjectIsFromSet) {
        var _this = _super.call(this, terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex) || this;
        _this.isEmptyObject = false;
        // config - computed: true, optional: false, required: false
        _this._config = new DataCloudflareZeroTrustAccessIdentityProvidersResultConfigOutputReference(_this, "config");
        // scim_config - computed: true, optional: false, required: false
        _this._scimConfig = new DataCloudflareZeroTrustAccessIdentityProvidersResultScimConfigOutputReference(_this, "scim_config");
        return _this;
    }
    Object.defineProperty(DataCloudflareZeroTrustAccessIdentityProvidersResultOutputReference.prototype, "internalValue", {
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
    Object.defineProperty(DataCloudflareZeroTrustAccessIdentityProvidersResultOutputReference.prototype, "config", {
        get: function () {
            return this._config;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareZeroTrustAccessIdentityProvidersResultOutputReference.prototype, "id", {
        // id - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('id');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareZeroTrustAccessIdentityProvidersResultOutputReference.prototype, "name", {
        // name - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('name');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareZeroTrustAccessIdentityProvidersResultOutputReference.prototype, "scimConfig", {
        get: function () {
            return this._scimConfig;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareZeroTrustAccessIdentityProvidersResultOutputReference.prototype, "type", {
        // type - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('type');
        },
        enumerable: false,
        configurable: true
    });
    return DataCloudflareZeroTrustAccessIdentityProvidersResultOutputReference;
}(cdktf.ComplexObject));
exports.DataCloudflareZeroTrustAccessIdentityProvidersResultOutputReference = DataCloudflareZeroTrustAccessIdentityProvidersResultOutputReference;
var DataCloudflareZeroTrustAccessIdentityProvidersResultList = /** @class */ (function (_super) {
    __extends(DataCloudflareZeroTrustAccessIdentityProvidersResultList, _super);
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    function DataCloudflareZeroTrustAccessIdentityProvidersResultList(terraformResource, terraformAttribute, wrapsSet) {
        var _this = _super.call(this, terraformResource, terraformAttribute, wrapsSet) || this;
        _this.terraformResource = terraformResource;
        _this.terraformAttribute = terraformAttribute;
        _this.wrapsSet = wrapsSet;
        return _this;
    }
    /**
    * @param index the index of the item to return
    */
    DataCloudflareZeroTrustAccessIdentityProvidersResultList.prototype.get = function (index) {
        return new DataCloudflareZeroTrustAccessIdentityProvidersResultOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
    };
    return DataCloudflareZeroTrustAccessIdentityProvidersResultList;
}(cdktf.ComplexList));
exports.DataCloudflareZeroTrustAccessIdentityProvidersResultList = DataCloudflareZeroTrustAccessIdentityProvidersResultList;
/**
* Represents a {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/data-sources/zero_trust_access_identity_providers cloudflare_zero_trust_access_identity_providers}
*/
var DataCloudflareZeroTrustAccessIdentityProviders = /** @class */ (function (_super) {
    __extends(DataCloudflareZeroTrustAccessIdentityProviders, _super);
    // ===========
    // INITIALIZER
    // ===========
    /**
    * Create a new {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/data-sources/zero_trust_access_identity_providers cloudflare_zero_trust_access_identity_providers} Data Source
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options DataCloudflareZeroTrustAccessIdentityProvidersConfig = {}
    */
    function DataCloudflareZeroTrustAccessIdentityProviders(scope, id, config) {
        if (config === void 0) { config = {}; }
        var _this = _super.call(this, scope, id, {
            terraformResourceType: 'cloudflare_zero_trust_access_identity_providers',
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
        // result - computed: true, optional: false, required: false
        _this._result = new DataCloudflareZeroTrustAccessIdentityProvidersResultList(_this, "result", false);
        _this._accountId = config.accountId;
        _this._maxItems = config.maxItems;
        _this._scimEnabled = config.scimEnabled;
        _this._zoneId = config.zoneId;
        return _this;
    }
    // ==============
    // STATIC Methods
    // ==============
    /**
    * Generates CDKTF code for importing a DataCloudflareZeroTrustAccessIdentityProviders resource upon running "cdktf plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the DataCloudflareZeroTrustAccessIdentityProviders to import
    * @param importFromId The id of the existing DataCloudflareZeroTrustAccessIdentityProviders that should be imported. Refer to the {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/data-sources/zero_trust_access_identity_providers#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the DataCloudflareZeroTrustAccessIdentityProviders to import is found
    */
    DataCloudflareZeroTrustAccessIdentityProviders.generateConfigForImport = function (scope, importToId, importFromId, provider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "cloudflare_zero_trust_access_identity_providers", importId: importFromId, provider: provider });
    };
    Object.defineProperty(DataCloudflareZeroTrustAccessIdentityProviders.prototype, "accountId", {
        get: function () {
            return this.getStringAttribute('account_id');
        },
        set: function (value) {
            this._accountId = value;
        },
        enumerable: false,
        configurable: true
    });
    DataCloudflareZeroTrustAccessIdentityProviders.prototype.resetAccountId = function () {
        this._accountId = undefined;
    };
    Object.defineProperty(DataCloudflareZeroTrustAccessIdentityProviders.prototype, "accountIdInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._accountId;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareZeroTrustAccessIdentityProviders.prototype, "maxItems", {
        get: function () {
            return this.getNumberAttribute('max_items');
        },
        set: function (value) {
            this._maxItems = value;
        },
        enumerable: false,
        configurable: true
    });
    DataCloudflareZeroTrustAccessIdentityProviders.prototype.resetMaxItems = function () {
        this._maxItems = undefined;
    };
    Object.defineProperty(DataCloudflareZeroTrustAccessIdentityProviders.prototype, "maxItemsInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._maxItems;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareZeroTrustAccessIdentityProviders.prototype, "result", {
        get: function () {
            return this._result;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareZeroTrustAccessIdentityProviders.prototype, "scimEnabled", {
        get: function () {
            return this.getStringAttribute('scim_enabled');
        },
        set: function (value) {
            this._scimEnabled = value;
        },
        enumerable: false,
        configurable: true
    });
    DataCloudflareZeroTrustAccessIdentityProviders.prototype.resetScimEnabled = function () {
        this._scimEnabled = undefined;
    };
    Object.defineProperty(DataCloudflareZeroTrustAccessIdentityProviders.prototype, "scimEnabledInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._scimEnabled;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareZeroTrustAccessIdentityProviders.prototype, "zoneId", {
        get: function () {
            return this.getStringAttribute('zone_id');
        },
        set: function (value) {
            this._zoneId = value;
        },
        enumerable: false,
        configurable: true
    });
    DataCloudflareZeroTrustAccessIdentityProviders.prototype.resetZoneId = function () {
        this._zoneId = undefined;
    };
    Object.defineProperty(DataCloudflareZeroTrustAccessIdentityProviders.prototype, "zoneIdInput", {
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
    DataCloudflareZeroTrustAccessIdentityProviders.prototype.synthesizeAttributes = function () {
        return {
            account_id: cdktf.stringToTerraform(this._accountId),
            max_items: cdktf.numberToTerraform(this._maxItems),
            scim_enabled: cdktf.stringToTerraform(this._scimEnabled),
            zone_id: cdktf.stringToTerraform(this._zoneId),
        };
    };
    DataCloudflareZeroTrustAccessIdentityProviders.prototype.synthesizeHclAttributes = function () {
        var attrs = {
            account_id: {
                value: cdktf.stringToHclTerraform(this._accountId),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            max_items: {
                value: cdktf.numberToHclTerraform(this._maxItems),
                isBlock: false,
                type: "simple",
                storageClassType: "number",
            },
            scim_enabled: {
                value: cdktf.stringToHclTerraform(this._scimEnabled),
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
    DataCloudflareZeroTrustAccessIdentityProviders.tfResourceType = "cloudflare_zero_trust_access_identity_providers";
    return DataCloudflareZeroTrustAccessIdentityProviders;
}(cdktf.TerraformDataSource));
exports.DataCloudflareZeroTrustAccessIdentityProviders = DataCloudflareZeroTrustAccessIdentityProviders;
