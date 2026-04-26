"use strict";
// https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/authenticated_origin_pulls
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
exports.AuthenticatedOriginPulls = exports.AuthenticatedOriginPullsConfigAList = exports.AuthenticatedOriginPullsConfigAOutputReference = void 0;
exports.authenticatedOriginPullsConfigAToTerraform = authenticatedOriginPullsConfigAToTerraform;
exports.authenticatedOriginPullsConfigAToHclTerraform = authenticatedOriginPullsConfigAToHclTerraform;
var cdktf = require("cdktf");
function authenticatedOriginPullsConfigAToTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
        cert_id: cdktf.stringToTerraform(struct.certId),
        enabled: cdktf.booleanToTerraform(struct.enabled),
        hostname: cdktf.stringToTerraform(struct.hostname),
    };
}
function authenticatedOriginPullsConfigAToHclTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    var attrs = {
        cert_id: {
            value: cdktf.stringToHclTerraform(struct.certId),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        enabled: {
            value: cdktf.booleanToHclTerraform(struct.enabled),
            isBlock: false,
            type: "simple",
            storageClassType: "boolean",
        },
        hostname: {
            value: cdktf.stringToHclTerraform(struct.hostname),
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
var AuthenticatedOriginPullsConfigAOutputReference = /** @class */ (function (_super) {
    __extends(AuthenticatedOriginPullsConfigAOutputReference, _super);
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    function AuthenticatedOriginPullsConfigAOutputReference(terraformResource, terraformAttribute, complexObjectIndex, complexObjectIsFromSet) {
        var _this = _super.call(this, terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex) || this;
        _this.isEmptyObject = false;
        return _this;
    }
    Object.defineProperty(AuthenticatedOriginPullsConfigAOutputReference.prototype, "internalValue", {
        get: function () {
            if (this.resolvableValue) {
                return this.resolvableValue;
            }
            var hasAnyValues = this.isEmptyObject;
            var internalValueResult = {};
            if (this._certId !== undefined) {
                hasAnyValues = true;
                internalValueResult.certId = this._certId;
            }
            if (this._enabled !== undefined) {
                hasAnyValues = true;
                internalValueResult.enabled = this._enabled;
            }
            if (this._hostname !== undefined) {
                hasAnyValues = true;
                internalValueResult.hostname = this._hostname;
            }
            return hasAnyValues ? internalValueResult : undefined;
        },
        set: function (value) {
            if (value === undefined) {
                this.isEmptyObject = false;
                this.resolvableValue = undefined;
                this._certId = undefined;
                this._enabled = undefined;
                this._hostname = undefined;
            }
            else if (cdktf.Tokenization.isResolvable(value)) {
                this.isEmptyObject = false;
                this.resolvableValue = value;
            }
            else {
                this.isEmptyObject = Object.keys(value).length === 0;
                this.resolvableValue = undefined;
                this._certId = value.certId;
                this._enabled = value.enabled;
                this._hostname = value.hostname;
            }
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(AuthenticatedOriginPullsConfigAOutputReference.prototype, "certId", {
        get: function () {
            return this.getStringAttribute('cert_id');
        },
        set: function (value) {
            this._certId = value;
        },
        enumerable: false,
        configurable: true
    });
    AuthenticatedOriginPullsConfigAOutputReference.prototype.resetCertId = function () {
        this._certId = undefined;
    };
    Object.defineProperty(AuthenticatedOriginPullsConfigAOutputReference.prototype, "certIdInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._certId;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(AuthenticatedOriginPullsConfigAOutputReference.prototype, "enabled", {
        get: function () {
            return this.getBooleanAttribute('enabled');
        },
        set: function (value) {
            this._enabled = value;
        },
        enumerable: false,
        configurable: true
    });
    AuthenticatedOriginPullsConfigAOutputReference.prototype.resetEnabled = function () {
        this._enabled = undefined;
    };
    Object.defineProperty(AuthenticatedOriginPullsConfigAOutputReference.prototype, "enabledInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._enabled;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(AuthenticatedOriginPullsConfigAOutputReference.prototype, "hostname", {
        get: function () {
            return this.getStringAttribute('hostname');
        },
        set: function (value) {
            this._hostname = value;
        },
        enumerable: false,
        configurable: true
    });
    AuthenticatedOriginPullsConfigAOutputReference.prototype.resetHostname = function () {
        this._hostname = undefined;
    };
    Object.defineProperty(AuthenticatedOriginPullsConfigAOutputReference.prototype, "hostnameInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._hostname;
        },
        enumerable: false,
        configurable: true
    });
    return AuthenticatedOriginPullsConfigAOutputReference;
}(cdktf.ComplexObject));
exports.AuthenticatedOriginPullsConfigAOutputReference = AuthenticatedOriginPullsConfigAOutputReference;
var AuthenticatedOriginPullsConfigAList = /** @class */ (function (_super) {
    __extends(AuthenticatedOriginPullsConfigAList, _super);
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    function AuthenticatedOriginPullsConfigAList(terraformResource, terraformAttribute, wrapsSet) {
        var _this = _super.call(this, terraformResource, terraformAttribute, wrapsSet) || this;
        _this.terraformResource = terraformResource;
        _this.terraformAttribute = terraformAttribute;
        _this.wrapsSet = wrapsSet;
        return _this;
    }
    /**
    * @param index the index of the item to return
    */
    AuthenticatedOriginPullsConfigAList.prototype.get = function (index) {
        return new AuthenticatedOriginPullsConfigAOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
    };
    return AuthenticatedOriginPullsConfigAList;
}(cdktf.ComplexList));
exports.AuthenticatedOriginPullsConfigAList = AuthenticatedOriginPullsConfigAList;
/**
* Represents a {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/authenticated_origin_pulls cloudflare_authenticated_origin_pulls}
*/
var AuthenticatedOriginPulls = /** @class */ (function (_super) {
    __extends(AuthenticatedOriginPulls, _super);
    // ===========
    // INITIALIZER
    // ===========
    /**
    * Create a new {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/authenticated_origin_pulls cloudflare_authenticated_origin_pulls} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options AuthenticatedOriginPullsConfig
    */
    function AuthenticatedOriginPulls(scope, id, config) {
        var _this = _super.call(this, scope, id, {
            terraformResourceType: 'cloudflare_authenticated_origin_pulls',
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
        _this._config = new AuthenticatedOriginPullsConfigAList(_this, "config", false);
        _this._config.internalValue = config.config;
        _this._zoneId = config.zoneId;
        return _this;
    }
    // ==============
    // STATIC Methods
    // ==============
    /**
    * Generates CDKTF code for importing a AuthenticatedOriginPulls resource upon running "cdktf plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the AuthenticatedOriginPulls to import
    * @param importFromId The id of the existing AuthenticatedOriginPulls that should be imported. Refer to the {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/authenticated_origin_pulls#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the AuthenticatedOriginPulls to import is found
    */
    AuthenticatedOriginPulls.generateConfigForImport = function (scope, importToId, importFromId, provider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "cloudflare_authenticated_origin_pulls", importId: importFromId, provider: provider });
    };
    Object.defineProperty(AuthenticatedOriginPulls.prototype, "certId", {
        // ==========
        // ATTRIBUTES
        // ==========
        // cert_id - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('cert_id');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(AuthenticatedOriginPulls.prototype, "certStatus", {
        // cert_status - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('cert_status');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(AuthenticatedOriginPulls.prototype, "certUpdatedAt", {
        // cert_updated_at - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('cert_updated_at');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(AuthenticatedOriginPulls.prototype, "certUploadedOn", {
        // cert_uploaded_on - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('cert_uploaded_on');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(AuthenticatedOriginPulls.prototype, "certificate", {
        // certificate - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('certificate');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(AuthenticatedOriginPulls.prototype, "config", {
        get: function () {
            return this._config;
        },
        enumerable: false,
        configurable: true
    });
    AuthenticatedOriginPulls.prototype.putConfig = function (value) {
        this._config.internalValue = value;
    };
    Object.defineProperty(AuthenticatedOriginPulls.prototype, "configInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._config.internalValue;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(AuthenticatedOriginPulls.prototype, "createdAt", {
        // created_at - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('created_at');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(AuthenticatedOriginPulls.prototype, "enabled", {
        // enabled - computed: true, optional: false, required: false
        get: function () {
            return this.getBooleanAttribute('enabled');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(AuthenticatedOriginPulls.prototype, "expiresOn", {
        // expires_on - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('expires_on');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(AuthenticatedOriginPulls.prototype, "hostname", {
        // hostname - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('hostname');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(AuthenticatedOriginPulls.prototype, "id", {
        // id - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('id');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(AuthenticatedOriginPulls.prototype, "issuer", {
        // issuer - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('issuer');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(AuthenticatedOriginPulls.prototype, "privateKey", {
        // private_key - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('private_key');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(AuthenticatedOriginPulls.prototype, "serialNumber", {
        // serial_number - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('serial_number');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(AuthenticatedOriginPulls.prototype, "signature", {
        // signature - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('signature');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(AuthenticatedOriginPulls.prototype, "status", {
        // status - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('status');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(AuthenticatedOriginPulls.prototype, "updatedAt", {
        // updated_at - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('updated_at');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(AuthenticatedOriginPulls.prototype, "zoneId", {
        get: function () {
            return this.getStringAttribute('zone_id');
        },
        set: function (value) {
            this._zoneId = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(AuthenticatedOriginPulls.prototype, "zoneIdInput", {
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
    AuthenticatedOriginPulls.prototype.synthesizeAttributes = function () {
        return {
            config: cdktf.listMapper(authenticatedOriginPullsConfigAToTerraform, false)(this._config.internalValue),
            zone_id: cdktf.stringToTerraform(this._zoneId),
        };
    };
    AuthenticatedOriginPulls.prototype.synthesizeHclAttributes = function () {
        var attrs = {
            config: {
                value: cdktf.listMapperHcl(authenticatedOriginPullsConfigAToHclTerraform, false)(this._config.internalValue),
                isBlock: true,
                type: "list",
                storageClassType: "AuthenticatedOriginPullsConfigAList",
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
    AuthenticatedOriginPulls.tfResourceType = "cloudflare_authenticated_origin_pulls";
    return AuthenticatedOriginPulls;
}(cdktf.TerraformResource));
exports.AuthenticatedOriginPulls = AuthenticatedOriginPulls;
