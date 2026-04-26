"use strict";
// https://registry.terraform.io/providers/integrations/github/6.12.0/docs
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
exports.GithubProvider = void 0;
exports.githubProviderAppAuthToTerraform = githubProviderAppAuthToTerraform;
exports.githubProviderAppAuthToHclTerraform = githubProviderAppAuthToHclTerraform;
var cdktf = require("cdktf");
function githubProviderAppAuthToTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
        id: cdktf.stringToTerraform(struct.id),
        installation_id: cdktf.stringToTerraform(struct.installationId),
        pem_file: cdktf.stringToTerraform(struct.pemFile),
    };
}
function githubProviderAppAuthToHclTerraform(struct) {
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
        installation_id: {
            value: cdktf.stringToHclTerraform(struct.installationId),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        pem_file: {
            value: cdktf.stringToHclTerraform(struct.pemFile),
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
/**
* Represents a {@link https://registry.terraform.io/providers/integrations/github/6.12.0/docs github}
*/
var GithubProvider = /** @class */ (function (_super) {
    __extends(GithubProvider, _super);
    // ===========
    // INITIALIZER
    // ===========
    /**
    * Create a new {@link https://registry.terraform.io/providers/integrations/github/6.12.0/docs github} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options GithubProviderConfig = {}
    */
    function GithubProvider(scope, id, config) {
        if (config === void 0) { config = {}; }
        var _this = _super.call(this, scope, id, {
            terraformResourceType: 'github',
            terraformGeneratorMetadata: {
                providerName: 'github',
                providerVersion: '6.12.0'
            },
            terraformProviderSource: 'integrations/github'
        }) || this;
        _this._baseUrl = config.baseUrl;
        _this._insecure = config.insecure;
        _this._maxPerPage = config.maxPerPage;
        _this._maxRetries = config.maxRetries;
        _this._organization = config.organization;
        _this._owner = config.owner;
        _this._parallelRequests = config.parallelRequests;
        _this._readDelayMs = config.readDelayMs;
        _this._retryDelayMs = config.retryDelayMs;
        _this._retryableErrors = config.retryableErrors;
        _this._token = config.token;
        _this._writeDelayMs = config.writeDelayMs;
        _this._alias = config.alias;
        _this._appAuth = config.appAuth;
        return _this;
    }
    // ==============
    // STATIC Methods
    // ==============
    /**
    * Generates CDKTF code for importing a GithubProvider resource upon running "cdktf plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the GithubProvider to import
    * @param importFromId The id of the existing GithubProvider that should be imported. Refer to the {@link https://registry.terraform.io/providers/integrations/github/6.12.0/docs#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the GithubProvider to import is found
    */
    GithubProvider.generateConfigForImport = function (scope, importToId, importFromId, provider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "github", importId: importFromId, provider: provider });
    };
    Object.defineProperty(GithubProvider.prototype, "baseUrl", {
        get: function () {
            return this._baseUrl;
        },
        set: function (value) {
            this._baseUrl = value;
        },
        enumerable: false,
        configurable: true
    });
    GithubProvider.prototype.resetBaseUrl = function () {
        this._baseUrl = undefined;
    };
    Object.defineProperty(GithubProvider.prototype, "baseUrlInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._baseUrl;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(GithubProvider.prototype, "insecure", {
        get: function () {
            return this._insecure;
        },
        set: function (value) {
            this._insecure = value;
        },
        enumerable: false,
        configurable: true
    });
    GithubProvider.prototype.resetInsecure = function () {
        this._insecure = undefined;
    };
    Object.defineProperty(GithubProvider.prototype, "insecureInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._insecure;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(GithubProvider.prototype, "maxPerPage", {
        get: function () {
            return this._maxPerPage;
        },
        set: function (value) {
            this._maxPerPage = value;
        },
        enumerable: false,
        configurable: true
    });
    GithubProvider.prototype.resetMaxPerPage = function () {
        this._maxPerPage = undefined;
    };
    Object.defineProperty(GithubProvider.prototype, "maxPerPageInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._maxPerPage;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(GithubProvider.prototype, "maxRetries", {
        get: function () {
            return this._maxRetries;
        },
        set: function (value) {
            this._maxRetries = value;
        },
        enumerable: false,
        configurable: true
    });
    GithubProvider.prototype.resetMaxRetries = function () {
        this._maxRetries = undefined;
    };
    Object.defineProperty(GithubProvider.prototype, "maxRetriesInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._maxRetries;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(GithubProvider.prototype, "organization", {
        get: function () {
            return this._organization;
        },
        set: function (value) {
            this._organization = value;
        },
        enumerable: false,
        configurable: true
    });
    GithubProvider.prototype.resetOrganization = function () {
        this._organization = undefined;
    };
    Object.defineProperty(GithubProvider.prototype, "organizationInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._organization;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(GithubProvider.prototype, "owner", {
        get: function () {
            return this._owner;
        },
        set: function (value) {
            this._owner = value;
        },
        enumerable: false,
        configurable: true
    });
    GithubProvider.prototype.resetOwner = function () {
        this._owner = undefined;
    };
    Object.defineProperty(GithubProvider.prototype, "ownerInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._owner;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(GithubProvider.prototype, "parallelRequests", {
        get: function () {
            return this._parallelRequests;
        },
        set: function (value) {
            this._parallelRequests = value;
        },
        enumerable: false,
        configurable: true
    });
    GithubProvider.prototype.resetParallelRequests = function () {
        this._parallelRequests = undefined;
    };
    Object.defineProperty(GithubProvider.prototype, "parallelRequestsInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._parallelRequests;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(GithubProvider.prototype, "readDelayMs", {
        get: function () {
            return this._readDelayMs;
        },
        set: function (value) {
            this._readDelayMs = value;
        },
        enumerable: false,
        configurable: true
    });
    GithubProvider.prototype.resetReadDelayMs = function () {
        this._readDelayMs = undefined;
    };
    Object.defineProperty(GithubProvider.prototype, "readDelayMsInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._readDelayMs;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(GithubProvider.prototype, "retryDelayMs", {
        get: function () {
            return this._retryDelayMs;
        },
        set: function (value) {
            this._retryDelayMs = value;
        },
        enumerable: false,
        configurable: true
    });
    GithubProvider.prototype.resetRetryDelayMs = function () {
        this._retryDelayMs = undefined;
    };
    Object.defineProperty(GithubProvider.prototype, "retryDelayMsInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._retryDelayMs;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(GithubProvider.prototype, "retryableErrors", {
        get: function () {
            return this._retryableErrors;
        },
        set: function (value) {
            this._retryableErrors = value;
        },
        enumerable: false,
        configurable: true
    });
    GithubProvider.prototype.resetRetryableErrors = function () {
        this._retryableErrors = undefined;
    };
    Object.defineProperty(GithubProvider.prototype, "retryableErrorsInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._retryableErrors;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(GithubProvider.prototype, "token", {
        get: function () {
            return this._token;
        },
        set: function (value) {
            this._token = value;
        },
        enumerable: false,
        configurable: true
    });
    GithubProvider.prototype.resetToken = function () {
        this._token = undefined;
    };
    Object.defineProperty(GithubProvider.prototype, "tokenInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._token;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(GithubProvider.prototype, "writeDelayMs", {
        get: function () {
            return this._writeDelayMs;
        },
        set: function (value) {
            this._writeDelayMs = value;
        },
        enumerable: false,
        configurable: true
    });
    GithubProvider.prototype.resetWriteDelayMs = function () {
        this._writeDelayMs = undefined;
    };
    Object.defineProperty(GithubProvider.prototype, "writeDelayMsInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._writeDelayMs;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(GithubProvider.prototype, "alias", {
        get: function () {
            return this._alias;
        },
        set: function (value) {
            this._alias = value;
        },
        enumerable: false,
        configurable: true
    });
    GithubProvider.prototype.resetAlias = function () {
        this._alias = undefined;
    };
    Object.defineProperty(GithubProvider.prototype, "aliasInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._alias;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(GithubProvider.prototype, "appAuth", {
        get: function () {
            return this._appAuth;
        },
        set: function (value) {
            this._appAuth = value;
        },
        enumerable: false,
        configurable: true
    });
    GithubProvider.prototype.resetAppAuth = function () {
        this._appAuth = undefined;
    };
    Object.defineProperty(GithubProvider.prototype, "appAuthInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._appAuth;
        },
        enumerable: false,
        configurable: true
    });
    // =========
    // SYNTHESIS
    // =========
    GithubProvider.prototype.synthesizeAttributes = function () {
        return {
            base_url: cdktf.stringToTerraform(this._baseUrl),
            insecure: cdktf.booleanToTerraform(this._insecure),
            max_per_page: cdktf.numberToTerraform(this._maxPerPage),
            max_retries: cdktf.numberToTerraform(this._maxRetries),
            organization: cdktf.stringToTerraform(this._organization),
            owner: cdktf.stringToTerraform(this._owner),
            parallel_requests: cdktf.booleanToTerraform(this._parallelRequests),
            read_delay_ms: cdktf.numberToTerraform(this._readDelayMs),
            retry_delay_ms: cdktf.numberToTerraform(this._retryDelayMs),
            retryable_errors: cdktf.listMapper(cdktf.numberToTerraform, false)(this._retryableErrors),
            token: cdktf.stringToTerraform(this._token),
            write_delay_ms: cdktf.numberToTerraform(this._writeDelayMs),
            alias: cdktf.stringToTerraform(this._alias),
            app_auth: githubProviderAppAuthToTerraform(this._appAuth),
        };
    };
    GithubProvider.prototype.synthesizeHclAttributes = function () {
        var attrs = {
            base_url: {
                value: cdktf.stringToHclTerraform(this._baseUrl),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            insecure: {
                value: cdktf.booleanToHclTerraform(this._insecure),
                isBlock: false,
                type: "simple",
                storageClassType: "boolean",
            },
            max_per_page: {
                value: cdktf.numberToHclTerraform(this._maxPerPage),
                isBlock: false,
                type: "simple",
                storageClassType: "number",
            },
            max_retries: {
                value: cdktf.numberToHclTerraform(this._maxRetries),
                isBlock: false,
                type: "simple",
                storageClassType: "number",
            },
            organization: {
                value: cdktf.stringToHclTerraform(this._organization),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            owner: {
                value: cdktf.stringToHclTerraform(this._owner),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            parallel_requests: {
                value: cdktf.booleanToHclTerraform(this._parallelRequests),
                isBlock: false,
                type: "simple",
                storageClassType: "boolean",
            },
            read_delay_ms: {
                value: cdktf.numberToHclTerraform(this._readDelayMs),
                isBlock: false,
                type: "simple",
                storageClassType: "number",
            },
            retry_delay_ms: {
                value: cdktf.numberToHclTerraform(this._retryDelayMs),
                isBlock: false,
                type: "simple",
                storageClassType: "number",
            },
            retryable_errors: {
                value: cdktf.listMapperHcl(cdktf.numberToHclTerraform, false)(this._retryableErrors),
                isBlock: false,
                type: "list",
                storageClassType: "numberList",
            },
            token: {
                value: cdktf.stringToHclTerraform(this._token),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            write_delay_ms: {
                value: cdktf.numberToHclTerraform(this._writeDelayMs),
                isBlock: false,
                type: "simple",
                storageClassType: "number",
            },
            alias: {
                value: cdktf.stringToHclTerraform(this._alias),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            app_auth: {
                value: githubProviderAppAuthToHclTerraform(this._appAuth),
                isBlock: true,
                type: "list",
                storageClassType: "GithubProviderAppAuthList",
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
    GithubProvider.tfResourceType = "github";
    return GithubProvider;
}(cdktf.TerraformProvider));
exports.GithubProvider = GithubProvider;
