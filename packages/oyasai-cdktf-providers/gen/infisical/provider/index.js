"use strict";
// https://registry.terraform.io/providers/infisical/infisical/0.16.18/docs
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
exports.InfisicalProvider = void 0;
exports.infisicalProviderAuthAwsIamToTerraform = infisicalProviderAuthAwsIamToTerraform;
exports.infisicalProviderAuthAwsIamToHclTerraform = infisicalProviderAuthAwsIamToHclTerraform;
exports.infisicalProviderAuthKubernetesToTerraform = infisicalProviderAuthKubernetesToTerraform;
exports.infisicalProviderAuthKubernetesToHclTerraform = infisicalProviderAuthKubernetesToHclTerraform;
exports.infisicalProviderAuthOidcToTerraform = infisicalProviderAuthOidcToTerraform;
exports.infisicalProviderAuthOidcToHclTerraform = infisicalProviderAuthOidcToHclTerraform;
exports.infisicalProviderAuthUniversalToTerraform = infisicalProviderAuthUniversalToTerraform;
exports.infisicalProviderAuthUniversalToHclTerraform = infisicalProviderAuthUniversalToHclTerraform;
exports.infisicalProviderAuthToTerraform = infisicalProviderAuthToTerraform;
exports.infisicalProviderAuthToHclTerraform = infisicalProviderAuthToHclTerraform;
var cdktf = require("cdktf");
function infisicalProviderAuthAwsIamToTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
        identity_id: cdktf.stringToTerraform(struct.identityId),
    };
}
function infisicalProviderAuthAwsIamToHclTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    var attrs = {
        identity_id: {
            value: cdktf.stringToHclTerraform(struct.identityId),
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
function infisicalProviderAuthKubernetesToTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
        identity_id: cdktf.stringToTerraform(struct.identityId),
        service_account_token: cdktf.stringToTerraform(struct.serviceAccountToken),
        service_account_token_path: cdktf.stringToTerraform(struct.serviceAccountTokenPath),
    };
}
function infisicalProviderAuthKubernetesToHclTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    var attrs = {
        identity_id: {
            value: cdktf.stringToHclTerraform(struct.identityId),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        service_account_token: {
            value: cdktf.stringToHclTerraform(struct.serviceAccountToken),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        service_account_token_path: {
            value: cdktf.stringToHclTerraform(struct.serviceAccountTokenPath),
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
function infisicalProviderAuthOidcToTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
        identity_id: cdktf.stringToTerraform(struct.identityId),
        token_environment_variable_name: cdktf.stringToTerraform(struct.tokenEnvironmentVariableName),
    };
}
function infisicalProviderAuthOidcToHclTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    var attrs = {
        identity_id: {
            value: cdktf.stringToHclTerraform(struct.identityId),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        token_environment_variable_name: {
            value: cdktf.stringToHclTerraform(struct.tokenEnvironmentVariableName),
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
function infisicalProviderAuthUniversalToTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
        client_id: cdktf.stringToTerraform(struct.clientId),
        client_secret: cdktf.stringToTerraform(struct.clientSecret),
    };
}
function infisicalProviderAuthUniversalToHclTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    var attrs = {
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
    };
    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(function (_a) {
        var _ = _a[0], value = _a[1];
        return value !== undefined && value.value !== undefined;
    }));
}
function infisicalProviderAuthToTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
        aws_iam: infisicalProviderAuthAwsIamToTerraform(struct.awsIam),
        kubernetes: infisicalProviderAuthKubernetesToTerraform(struct.kubernetes),
        oidc: infisicalProviderAuthOidcToTerraform(struct.oidc),
        organization_slug: cdktf.stringToTerraform(struct.organizationSlug),
        token: cdktf.stringToTerraform(struct.token),
        universal: infisicalProviderAuthUniversalToTerraform(struct.universal),
    };
}
function infisicalProviderAuthToHclTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    var attrs = {
        aws_iam: {
            value: infisicalProviderAuthAwsIamToHclTerraform(struct.awsIam),
            isBlock: true,
            type: "struct",
            storageClassType: "InfisicalProviderAuthAwsIam",
        },
        kubernetes: {
            value: infisicalProviderAuthKubernetesToHclTerraform(struct.kubernetes),
            isBlock: true,
            type: "struct",
            storageClassType: "InfisicalProviderAuthKubernetes",
        },
        oidc: {
            value: infisicalProviderAuthOidcToHclTerraform(struct.oidc),
            isBlock: true,
            type: "struct",
            storageClassType: "InfisicalProviderAuthOidc",
        },
        organization_slug: {
            value: cdktf.stringToHclTerraform(struct.organizationSlug),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        token: {
            value: cdktf.stringToHclTerraform(struct.token),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        universal: {
            value: infisicalProviderAuthUniversalToHclTerraform(struct.universal),
            isBlock: true,
            type: "struct",
            storageClassType: "InfisicalProviderAuthUniversal",
        },
    };
    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(function (_a) {
        var _ = _a[0], value = _a[1];
        return value !== undefined && value.value !== undefined;
    }));
}
/**
* Represents a {@link https://registry.terraform.io/providers/infisical/infisical/0.16.18/docs infisical}
*/
var InfisicalProvider = /** @class */ (function (_super) {
    __extends(InfisicalProvider, _super);
    // ===========
    // INITIALIZER
    // ===========
    /**
    * Create a new {@link https://registry.terraform.io/providers/infisical/infisical/0.16.18/docs infisical} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options InfisicalProviderConfig = {}
    */
    function InfisicalProvider(scope, id, config) {
        if (config === void 0) { config = {}; }
        var _this = _super.call(this, scope, id, {
            terraformResourceType: 'infisical',
            terraformGeneratorMetadata: {
                providerName: 'infisical',
                providerVersion: '0.16.18'
            },
            terraformProviderSource: 'infisical/infisical'
        }) || this;
        _this._auth = config.auth;
        _this._clientId = config.clientId;
        _this._clientSecret = config.clientSecret;
        _this._host = config.host;
        _this._serviceToken = config.serviceToken;
        _this._alias = config.alias;
        return _this;
    }
    // ==============
    // STATIC Methods
    // ==============
    /**
    * Generates CDKTF code for importing a InfisicalProvider resource upon running "cdktf plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the InfisicalProvider to import
    * @param importFromId The id of the existing InfisicalProvider that should be imported. Refer to the {@link https://registry.terraform.io/providers/infisical/infisical/0.16.18/docs#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the InfisicalProvider to import is found
    */
    InfisicalProvider.generateConfigForImport = function (scope, importToId, importFromId, provider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "infisical", importId: importFromId, provider: provider });
    };
    Object.defineProperty(InfisicalProvider.prototype, "auth", {
        get: function () {
            return this._auth;
        },
        set: function (value) {
            this._auth = value;
        },
        enumerable: false,
        configurable: true
    });
    InfisicalProvider.prototype.resetAuth = function () {
        this._auth = undefined;
    };
    Object.defineProperty(InfisicalProvider.prototype, "authInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._auth;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(InfisicalProvider.prototype, "clientId", {
        get: function () {
            return this._clientId;
        },
        set: function (value) {
            this._clientId = value;
        },
        enumerable: false,
        configurable: true
    });
    InfisicalProvider.prototype.resetClientId = function () {
        this._clientId = undefined;
    };
    Object.defineProperty(InfisicalProvider.prototype, "clientIdInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._clientId;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(InfisicalProvider.prototype, "clientSecret", {
        get: function () {
            return this._clientSecret;
        },
        set: function (value) {
            this._clientSecret = value;
        },
        enumerable: false,
        configurable: true
    });
    InfisicalProvider.prototype.resetClientSecret = function () {
        this._clientSecret = undefined;
    };
    Object.defineProperty(InfisicalProvider.prototype, "clientSecretInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._clientSecret;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(InfisicalProvider.prototype, "host", {
        get: function () {
            return this._host;
        },
        set: function (value) {
            this._host = value;
        },
        enumerable: false,
        configurable: true
    });
    InfisicalProvider.prototype.resetHost = function () {
        this._host = undefined;
    };
    Object.defineProperty(InfisicalProvider.prototype, "hostInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._host;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(InfisicalProvider.prototype, "serviceToken", {
        get: function () {
            return this._serviceToken;
        },
        set: function (value) {
            this._serviceToken = value;
        },
        enumerable: false,
        configurable: true
    });
    InfisicalProvider.prototype.resetServiceToken = function () {
        this._serviceToken = undefined;
    };
    Object.defineProperty(InfisicalProvider.prototype, "serviceTokenInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._serviceToken;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(InfisicalProvider.prototype, "alias", {
        get: function () {
            return this._alias;
        },
        set: function (value) {
            this._alias = value;
        },
        enumerable: false,
        configurable: true
    });
    InfisicalProvider.prototype.resetAlias = function () {
        this._alias = undefined;
    };
    Object.defineProperty(InfisicalProvider.prototype, "aliasInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._alias;
        },
        enumerable: false,
        configurable: true
    });
    // =========
    // SYNTHESIS
    // =========
    InfisicalProvider.prototype.synthesizeAttributes = function () {
        return {
            auth: infisicalProviderAuthToTerraform(this._auth),
            client_id: cdktf.stringToTerraform(this._clientId),
            client_secret: cdktf.stringToTerraform(this._clientSecret),
            host: cdktf.stringToTerraform(this._host),
            service_token: cdktf.stringToTerraform(this._serviceToken),
            alias: cdktf.stringToTerraform(this._alias),
        };
    };
    InfisicalProvider.prototype.synthesizeHclAttributes = function () {
        var attrs = {
            auth: {
                value: infisicalProviderAuthToHclTerraform(this._auth),
                isBlock: true,
                type: "struct",
                storageClassType: "InfisicalProviderAuth",
            },
            client_id: {
                value: cdktf.stringToHclTerraform(this._clientId),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            client_secret: {
                value: cdktf.stringToHclTerraform(this._clientSecret),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            host: {
                value: cdktf.stringToHclTerraform(this._host),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            service_token: {
                value: cdktf.stringToHclTerraform(this._serviceToken),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            alias: {
                value: cdktf.stringToHclTerraform(this._alias),
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
    InfisicalProvider.tfResourceType = "infisical";
    return InfisicalProvider;
}(cdktf.TerraformProvider));
exports.InfisicalProvider = InfisicalProvider;
