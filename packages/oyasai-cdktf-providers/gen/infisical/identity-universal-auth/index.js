"use strict";
// https://registry.terraform.io/providers/infisical/infisical/0.16.18/docs/resources/identity_universal_auth
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
exports.IdentityUniversalAuth = exports.IdentityUniversalAuthClientSecretTrustedIpsList = exports.IdentityUniversalAuthClientSecretTrustedIpsOutputReference = exports.IdentityUniversalAuthAccessTokenTrustedIpsList = exports.IdentityUniversalAuthAccessTokenTrustedIpsOutputReference = void 0;
exports.identityUniversalAuthAccessTokenTrustedIpsToTerraform = identityUniversalAuthAccessTokenTrustedIpsToTerraform;
exports.identityUniversalAuthAccessTokenTrustedIpsToHclTerraform = identityUniversalAuthAccessTokenTrustedIpsToHclTerraform;
exports.identityUniversalAuthClientSecretTrustedIpsToTerraform = identityUniversalAuthClientSecretTrustedIpsToTerraform;
exports.identityUniversalAuthClientSecretTrustedIpsToHclTerraform = identityUniversalAuthClientSecretTrustedIpsToHclTerraform;
var cdktf = require("cdktf");
function identityUniversalAuthAccessTokenTrustedIpsToTerraform(struct) {
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
function identityUniversalAuthAccessTokenTrustedIpsToHclTerraform(struct) {
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
var IdentityUniversalAuthAccessTokenTrustedIpsOutputReference = /** @class */ (function (_super) {
    __extends(IdentityUniversalAuthAccessTokenTrustedIpsOutputReference, _super);
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    function IdentityUniversalAuthAccessTokenTrustedIpsOutputReference(terraformResource, terraformAttribute, complexObjectIndex, complexObjectIsFromSet) {
        var _this = _super.call(this, terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex) || this;
        _this.isEmptyObject = false;
        return _this;
    }
    Object.defineProperty(IdentityUniversalAuthAccessTokenTrustedIpsOutputReference.prototype, "internalValue", {
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
    Object.defineProperty(IdentityUniversalAuthAccessTokenTrustedIpsOutputReference.prototype, "ipAddress", {
        get: function () {
            return this.getStringAttribute('ip_address');
        },
        set: function (value) {
            this._ipAddress = value;
        },
        enumerable: false,
        configurable: true
    });
    IdentityUniversalAuthAccessTokenTrustedIpsOutputReference.prototype.resetIpAddress = function () {
        this._ipAddress = undefined;
    };
    Object.defineProperty(IdentityUniversalAuthAccessTokenTrustedIpsOutputReference.prototype, "ipAddressInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._ipAddress;
        },
        enumerable: false,
        configurable: true
    });
    return IdentityUniversalAuthAccessTokenTrustedIpsOutputReference;
}(cdktf.ComplexObject));
exports.IdentityUniversalAuthAccessTokenTrustedIpsOutputReference = IdentityUniversalAuthAccessTokenTrustedIpsOutputReference;
var IdentityUniversalAuthAccessTokenTrustedIpsList = /** @class */ (function (_super) {
    __extends(IdentityUniversalAuthAccessTokenTrustedIpsList, _super);
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    function IdentityUniversalAuthAccessTokenTrustedIpsList(terraformResource, terraformAttribute, wrapsSet) {
        var _this = _super.call(this, terraformResource, terraformAttribute, wrapsSet) || this;
        _this.terraformResource = terraformResource;
        _this.terraformAttribute = terraformAttribute;
        _this.wrapsSet = wrapsSet;
        return _this;
    }
    /**
    * @param index the index of the item to return
    */
    IdentityUniversalAuthAccessTokenTrustedIpsList.prototype.get = function (index) {
        return new IdentityUniversalAuthAccessTokenTrustedIpsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
    };
    return IdentityUniversalAuthAccessTokenTrustedIpsList;
}(cdktf.ComplexList));
exports.IdentityUniversalAuthAccessTokenTrustedIpsList = IdentityUniversalAuthAccessTokenTrustedIpsList;
function identityUniversalAuthClientSecretTrustedIpsToTerraform(struct) {
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
function identityUniversalAuthClientSecretTrustedIpsToHclTerraform(struct) {
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
var IdentityUniversalAuthClientSecretTrustedIpsOutputReference = /** @class */ (function (_super) {
    __extends(IdentityUniversalAuthClientSecretTrustedIpsOutputReference, _super);
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    function IdentityUniversalAuthClientSecretTrustedIpsOutputReference(terraformResource, terraformAttribute, complexObjectIndex, complexObjectIsFromSet) {
        var _this = _super.call(this, terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex) || this;
        _this.isEmptyObject = false;
        return _this;
    }
    Object.defineProperty(IdentityUniversalAuthClientSecretTrustedIpsOutputReference.prototype, "internalValue", {
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
    Object.defineProperty(IdentityUniversalAuthClientSecretTrustedIpsOutputReference.prototype, "ipAddress", {
        get: function () {
            return this.getStringAttribute('ip_address');
        },
        set: function (value) {
            this._ipAddress = value;
        },
        enumerable: false,
        configurable: true
    });
    IdentityUniversalAuthClientSecretTrustedIpsOutputReference.prototype.resetIpAddress = function () {
        this._ipAddress = undefined;
    };
    Object.defineProperty(IdentityUniversalAuthClientSecretTrustedIpsOutputReference.prototype, "ipAddressInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._ipAddress;
        },
        enumerable: false,
        configurable: true
    });
    return IdentityUniversalAuthClientSecretTrustedIpsOutputReference;
}(cdktf.ComplexObject));
exports.IdentityUniversalAuthClientSecretTrustedIpsOutputReference = IdentityUniversalAuthClientSecretTrustedIpsOutputReference;
var IdentityUniversalAuthClientSecretTrustedIpsList = /** @class */ (function (_super) {
    __extends(IdentityUniversalAuthClientSecretTrustedIpsList, _super);
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    function IdentityUniversalAuthClientSecretTrustedIpsList(terraformResource, terraformAttribute, wrapsSet) {
        var _this = _super.call(this, terraformResource, terraformAttribute, wrapsSet) || this;
        _this.terraformResource = terraformResource;
        _this.terraformAttribute = terraformAttribute;
        _this.wrapsSet = wrapsSet;
        return _this;
    }
    /**
    * @param index the index of the item to return
    */
    IdentityUniversalAuthClientSecretTrustedIpsList.prototype.get = function (index) {
        return new IdentityUniversalAuthClientSecretTrustedIpsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
    };
    return IdentityUniversalAuthClientSecretTrustedIpsList;
}(cdktf.ComplexList));
exports.IdentityUniversalAuthClientSecretTrustedIpsList = IdentityUniversalAuthClientSecretTrustedIpsList;
/**
* Represents a {@link https://registry.terraform.io/providers/infisical/infisical/0.16.18/docs/resources/identity_universal_auth infisical_identity_universal_auth}
*/
var IdentityUniversalAuth = /** @class */ (function (_super) {
    __extends(IdentityUniversalAuth, _super);
    // ===========
    // INITIALIZER
    // ===========
    /**
    * Create a new {@link https://registry.terraform.io/providers/infisical/infisical/0.16.18/docs/resources/identity_universal_auth infisical_identity_universal_auth} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options IdentityUniversalAuthConfig
    */
    function IdentityUniversalAuth(scope, id, config) {
        var _this = _super.call(this, scope, id, {
            terraformResourceType: 'infisical_identity_universal_auth',
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
        _this._accessTokenTrustedIps = new IdentityUniversalAuthAccessTokenTrustedIpsList(_this, "access_token_trusted_ips", false);
        // client_secret_trusted_ips - computed: true, optional: true, required: false
        _this._clientSecretTrustedIps = new IdentityUniversalAuthClientSecretTrustedIpsList(_this, "client_secret_trusted_ips", false);
        _this._accessTokenMaxTtl = config.accessTokenMaxTtl;
        _this._accessTokenNumUsesLimit = config.accessTokenNumUsesLimit;
        _this._accessTokenTrustedIps.internalValue = config.accessTokenTrustedIps;
        _this._accessTokenTtl = config.accessTokenTtl;
        _this._clientSecretTrustedIps.internalValue = config.clientSecretTrustedIps;
        _this._identityId = config.identityId;
        return _this;
    }
    // ==============
    // STATIC Methods
    // ==============
    /**
    * Generates CDKTF code for importing a IdentityUniversalAuth resource upon running "cdktf plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the IdentityUniversalAuth to import
    * @param importFromId The id of the existing IdentityUniversalAuth that should be imported. Refer to the {@link https://registry.terraform.io/providers/infisical/infisical/0.16.18/docs/resources/identity_universal_auth#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the IdentityUniversalAuth to import is found
    */
    IdentityUniversalAuth.generateConfigForImport = function (scope, importToId, importFromId, provider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "infisical_identity_universal_auth", importId: importFromId, provider: provider });
    };
    Object.defineProperty(IdentityUniversalAuth.prototype, "accessTokenMaxTtl", {
        get: function () {
            return this.getNumberAttribute('access_token_max_ttl');
        },
        set: function (value) {
            this._accessTokenMaxTtl = value;
        },
        enumerable: false,
        configurable: true
    });
    IdentityUniversalAuth.prototype.resetAccessTokenMaxTtl = function () {
        this._accessTokenMaxTtl = undefined;
    };
    Object.defineProperty(IdentityUniversalAuth.prototype, "accessTokenMaxTtlInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._accessTokenMaxTtl;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(IdentityUniversalAuth.prototype, "accessTokenNumUsesLimit", {
        get: function () {
            return this.getNumberAttribute('access_token_num_uses_limit');
        },
        set: function (value) {
            this._accessTokenNumUsesLimit = value;
        },
        enumerable: false,
        configurable: true
    });
    IdentityUniversalAuth.prototype.resetAccessTokenNumUsesLimit = function () {
        this._accessTokenNumUsesLimit = undefined;
    };
    Object.defineProperty(IdentityUniversalAuth.prototype, "accessTokenNumUsesLimitInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._accessTokenNumUsesLimit;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(IdentityUniversalAuth.prototype, "accessTokenTrustedIps", {
        get: function () {
            return this._accessTokenTrustedIps;
        },
        enumerable: false,
        configurable: true
    });
    IdentityUniversalAuth.prototype.putAccessTokenTrustedIps = function (value) {
        this._accessTokenTrustedIps.internalValue = value;
    };
    IdentityUniversalAuth.prototype.resetAccessTokenTrustedIps = function () {
        this._accessTokenTrustedIps.internalValue = undefined;
    };
    Object.defineProperty(IdentityUniversalAuth.prototype, "accessTokenTrustedIpsInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._accessTokenTrustedIps.internalValue;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(IdentityUniversalAuth.prototype, "accessTokenTtl", {
        get: function () {
            return this.getNumberAttribute('access_token_ttl');
        },
        set: function (value) {
            this._accessTokenTtl = value;
        },
        enumerable: false,
        configurable: true
    });
    IdentityUniversalAuth.prototype.resetAccessTokenTtl = function () {
        this._accessTokenTtl = undefined;
    };
    Object.defineProperty(IdentityUniversalAuth.prototype, "accessTokenTtlInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._accessTokenTtl;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(IdentityUniversalAuth.prototype, "clientSecretTrustedIps", {
        get: function () {
            return this._clientSecretTrustedIps;
        },
        enumerable: false,
        configurable: true
    });
    IdentityUniversalAuth.prototype.putClientSecretTrustedIps = function (value) {
        this._clientSecretTrustedIps.internalValue = value;
    };
    IdentityUniversalAuth.prototype.resetClientSecretTrustedIps = function () {
        this._clientSecretTrustedIps.internalValue = undefined;
    };
    Object.defineProperty(IdentityUniversalAuth.prototype, "clientSecretTrustedIpsInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._clientSecretTrustedIps.internalValue;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(IdentityUniversalAuth.prototype, "id", {
        // id - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('id');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(IdentityUniversalAuth.prototype, "identityId", {
        get: function () {
            return this.getStringAttribute('identity_id');
        },
        set: function (value) {
            this._identityId = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(IdentityUniversalAuth.prototype, "identityIdInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._identityId;
        },
        enumerable: false,
        configurable: true
    });
    // =========
    // SYNTHESIS
    // =========
    IdentityUniversalAuth.prototype.synthesizeAttributes = function () {
        return {
            access_token_max_ttl: cdktf.numberToTerraform(this._accessTokenMaxTtl),
            access_token_num_uses_limit: cdktf.numberToTerraform(this._accessTokenNumUsesLimit),
            access_token_trusted_ips: cdktf.listMapper(identityUniversalAuthAccessTokenTrustedIpsToTerraform, false)(this._accessTokenTrustedIps.internalValue),
            access_token_ttl: cdktf.numberToTerraform(this._accessTokenTtl),
            client_secret_trusted_ips: cdktf.listMapper(identityUniversalAuthClientSecretTrustedIpsToTerraform, false)(this._clientSecretTrustedIps.internalValue),
            identity_id: cdktf.stringToTerraform(this._identityId),
        };
    };
    IdentityUniversalAuth.prototype.synthesizeHclAttributes = function () {
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
                value: cdktf.listMapperHcl(identityUniversalAuthAccessTokenTrustedIpsToHclTerraform, false)(this._accessTokenTrustedIps.internalValue),
                isBlock: true,
                type: "list",
                storageClassType: "IdentityUniversalAuthAccessTokenTrustedIpsList",
            },
            access_token_ttl: {
                value: cdktf.numberToHclTerraform(this._accessTokenTtl),
                isBlock: false,
                type: "simple",
                storageClassType: "number",
            },
            client_secret_trusted_ips: {
                value: cdktf.listMapperHcl(identityUniversalAuthClientSecretTrustedIpsToHclTerraform, false)(this._clientSecretTrustedIps.internalValue),
                isBlock: true,
                type: "list",
                storageClassType: "IdentityUniversalAuthClientSecretTrustedIpsList",
            },
            identity_id: {
                value: cdktf.stringToHclTerraform(this._identityId),
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
    IdentityUniversalAuth.tfResourceType = "infisical_identity_universal_auth";
    return IdentityUniversalAuth;
}(cdktf.TerraformResource));
exports.IdentityUniversalAuth = IdentityUniversalAuth;
