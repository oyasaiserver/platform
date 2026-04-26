"use strict";
// https://registry.terraform.io/providers/infisical/infisical/0.16.18/docs/resources/app_connection_supabase
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
exports.AppConnectionSupabase = exports.AppConnectionSupabaseCredentialsOutputReference = void 0;
exports.appConnectionSupabaseCredentialsToTerraform = appConnectionSupabaseCredentialsToTerraform;
exports.appConnectionSupabaseCredentialsToHclTerraform = appConnectionSupabaseCredentialsToHclTerraform;
var cdktf = require("cdktf");
function appConnectionSupabaseCredentialsToTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
        access_key: cdktf.stringToTerraform(struct.accessKey),
        instance_url: cdktf.stringToTerraform(struct.instanceUrl),
    };
}
function appConnectionSupabaseCredentialsToHclTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    var attrs = {
        access_key: {
            value: cdktf.stringToHclTerraform(struct.accessKey),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        instance_url: {
            value: cdktf.stringToHclTerraform(struct.instanceUrl),
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
var AppConnectionSupabaseCredentialsOutputReference = /** @class */ (function (_super) {
    __extends(AppConnectionSupabaseCredentialsOutputReference, _super);
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    function AppConnectionSupabaseCredentialsOutputReference(terraformResource, terraformAttribute) {
        var _this = _super.call(this, terraformResource, terraformAttribute, false) || this;
        _this.isEmptyObject = false;
        return _this;
    }
    Object.defineProperty(AppConnectionSupabaseCredentialsOutputReference.prototype, "internalValue", {
        get: function () {
            if (this.resolvableValue) {
                return this.resolvableValue;
            }
            var hasAnyValues = this.isEmptyObject;
            var internalValueResult = {};
            if (this._accessKey !== undefined) {
                hasAnyValues = true;
                internalValueResult.accessKey = this._accessKey;
            }
            if (this._instanceUrl !== undefined) {
                hasAnyValues = true;
                internalValueResult.instanceUrl = this._instanceUrl;
            }
            return hasAnyValues ? internalValueResult : undefined;
        },
        set: function (value) {
            if (value === undefined) {
                this.isEmptyObject = false;
                this.resolvableValue = undefined;
                this._accessKey = undefined;
                this._instanceUrl = undefined;
            }
            else if (cdktf.Tokenization.isResolvable(value)) {
                this.isEmptyObject = false;
                this.resolvableValue = value;
            }
            else {
                this.isEmptyObject = Object.keys(value).length === 0;
                this.resolvableValue = undefined;
                this._accessKey = value.accessKey;
                this._instanceUrl = value.instanceUrl;
            }
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(AppConnectionSupabaseCredentialsOutputReference.prototype, "accessKey", {
        get: function () {
            return this.getStringAttribute('access_key');
        },
        set: function (value) {
            this._accessKey = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(AppConnectionSupabaseCredentialsOutputReference.prototype, "accessKeyInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._accessKey;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(AppConnectionSupabaseCredentialsOutputReference.prototype, "instanceUrl", {
        get: function () {
            return this.getStringAttribute('instance_url');
        },
        set: function (value) {
            this._instanceUrl = value;
        },
        enumerable: false,
        configurable: true
    });
    AppConnectionSupabaseCredentialsOutputReference.prototype.resetInstanceUrl = function () {
        this._instanceUrl = undefined;
    };
    Object.defineProperty(AppConnectionSupabaseCredentialsOutputReference.prototype, "instanceUrlInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._instanceUrl;
        },
        enumerable: false,
        configurable: true
    });
    return AppConnectionSupabaseCredentialsOutputReference;
}(cdktf.ComplexObject));
exports.AppConnectionSupabaseCredentialsOutputReference = AppConnectionSupabaseCredentialsOutputReference;
/**
* Represents a {@link https://registry.terraform.io/providers/infisical/infisical/0.16.18/docs/resources/app_connection_supabase infisical_app_connection_supabase}
*/
var AppConnectionSupabase = /** @class */ (function (_super) {
    __extends(AppConnectionSupabase, _super);
    // ===========
    // INITIALIZER
    // ===========
    /**
    * Create a new {@link https://registry.terraform.io/providers/infisical/infisical/0.16.18/docs/resources/app_connection_supabase infisical_app_connection_supabase} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options AppConnectionSupabaseConfig
    */
    function AppConnectionSupabase(scope, id, config) {
        var _this = _super.call(this, scope, id, {
            terraformResourceType: 'infisical_app_connection_supabase',
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
        // ==========
        // ATTRIBUTES
        // ==========
        // credentials - computed: false, optional: false, required: true
        _this._credentials = new AppConnectionSupabaseCredentialsOutputReference(_this, "credentials");
        _this._credentials.internalValue = config.credentials;
        _this._description = config.description;
        _this._method = config.method;
        _this._name = config.name;
        _this._projectId = config.projectId;
        return _this;
    }
    // ==============
    // STATIC Methods
    // ==============
    /**
    * Generates CDKTF code for importing a AppConnectionSupabase resource upon running "cdktf plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the AppConnectionSupabase to import
    * @param importFromId The id of the existing AppConnectionSupabase that should be imported. Refer to the {@link https://registry.terraform.io/providers/infisical/infisical/0.16.18/docs/resources/app_connection_supabase#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the AppConnectionSupabase to import is found
    */
    AppConnectionSupabase.generateConfigForImport = function (scope, importToId, importFromId, provider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "infisical_app_connection_supabase", importId: importFromId, provider: provider });
    };
    Object.defineProperty(AppConnectionSupabase.prototype, "credentials", {
        get: function () {
            return this._credentials;
        },
        enumerable: false,
        configurable: true
    });
    AppConnectionSupabase.prototype.putCredentials = function (value) {
        this._credentials.internalValue = value;
    };
    Object.defineProperty(AppConnectionSupabase.prototype, "credentialsInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._credentials.internalValue;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(AppConnectionSupabase.prototype, "credentialsHash", {
        // credentials_hash - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('credentials_hash');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(AppConnectionSupabase.prototype, "description", {
        get: function () {
            return this.getStringAttribute('description');
        },
        set: function (value) {
            this._description = value;
        },
        enumerable: false,
        configurable: true
    });
    AppConnectionSupabase.prototype.resetDescription = function () {
        this._description = undefined;
    };
    Object.defineProperty(AppConnectionSupabase.prototype, "descriptionInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._description;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(AppConnectionSupabase.prototype, "id", {
        // id - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('id');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(AppConnectionSupabase.prototype, "method", {
        get: function () {
            return this.getStringAttribute('method');
        },
        set: function (value) {
            this._method = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(AppConnectionSupabase.prototype, "methodInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._method;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(AppConnectionSupabase.prototype, "name", {
        get: function () {
            return this.getStringAttribute('name');
        },
        set: function (value) {
            this._name = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(AppConnectionSupabase.prototype, "nameInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._name;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(AppConnectionSupabase.prototype, "projectId", {
        get: function () {
            return this.getStringAttribute('project_id');
        },
        set: function (value) {
            this._projectId = value;
        },
        enumerable: false,
        configurable: true
    });
    AppConnectionSupabase.prototype.resetProjectId = function () {
        this._projectId = undefined;
    };
    Object.defineProperty(AppConnectionSupabase.prototype, "projectIdInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._projectId;
        },
        enumerable: false,
        configurable: true
    });
    // =========
    // SYNTHESIS
    // =========
    AppConnectionSupabase.prototype.synthesizeAttributes = function () {
        return {
            credentials: appConnectionSupabaseCredentialsToTerraform(this._credentials.internalValue),
            description: cdktf.stringToTerraform(this._description),
            method: cdktf.stringToTerraform(this._method),
            name: cdktf.stringToTerraform(this._name),
            project_id: cdktf.stringToTerraform(this._projectId),
        };
    };
    AppConnectionSupabase.prototype.synthesizeHclAttributes = function () {
        var attrs = {
            credentials: {
                value: appConnectionSupabaseCredentialsToHclTerraform(this._credentials.internalValue),
                isBlock: true,
                type: "struct",
                storageClassType: "AppConnectionSupabaseCredentials",
            },
            description: {
                value: cdktf.stringToHclTerraform(this._description),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            method: {
                value: cdktf.stringToHclTerraform(this._method),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            name: {
                value: cdktf.stringToHclTerraform(this._name),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            project_id: {
                value: cdktf.stringToHclTerraform(this._projectId),
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
    AppConnectionSupabase.tfResourceType = "infisical_app_connection_supabase";
    return AppConnectionSupabase;
}(cdktf.TerraformResource));
exports.AppConnectionSupabase = AppConnectionSupabase;
