"use strict";
// https://registry.terraform.io/providers/infisical/infisical/0.16.18/docs/resources/app_connection_aws
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
exports.AppConnectionAws = exports.AppConnectionAwsCredentialsOutputReference = void 0;
exports.appConnectionAwsCredentialsToTerraform = appConnectionAwsCredentialsToTerraform;
exports.appConnectionAwsCredentialsToHclTerraform = appConnectionAwsCredentialsToHclTerraform;
var cdktf = require("cdktf");
function appConnectionAwsCredentialsToTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
        access_key_id: cdktf.stringToTerraform(struct.accessKeyId),
        role_arn: cdktf.stringToTerraform(struct.roleArn),
        secret_access_key: cdktf.stringToTerraform(struct.secretAccessKey),
    };
}
function appConnectionAwsCredentialsToHclTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    var attrs = {
        access_key_id: {
            value: cdktf.stringToHclTerraform(struct.accessKeyId),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        role_arn: {
            value: cdktf.stringToHclTerraform(struct.roleArn),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        secret_access_key: {
            value: cdktf.stringToHclTerraform(struct.secretAccessKey),
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
var AppConnectionAwsCredentialsOutputReference = /** @class */ (function (_super) {
    __extends(AppConnectionAwsCredentialsOutputReference, _super);
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    function AppConnectionAwsCredentialsOutputReference(terraformResource, terraformAttribute) {
        var _this = _super.call(this, terraformResource, terraformAttribute, false) || this;
        _this.isEmptyObject = false;
        return _this;
    }
    Object.defineProperty(AppConnectionAwsCredentialsOutputReference.prototype, "internalValue", {
        get: function () {
            if (this.resolvableValue) {
                return this.resolvableValue;
            }
            var hasAnyValues = this.isEmptyObject;
            var internalValueResult = {};
            if (this._accessKeyId !== undefined) {
                hasAnyValues = true;
                internalValueResult.accessKeyId = this._accessKeyId;
            }
            if (this._roleArn !== undefined) {
                hasAnyValues = true;
                internalValueResult.roleArn = this._roleArn;
            }
            if (this._secretAccessKey !== undefined) {
                hasAnyValues = true;
                internalValueResult.secretAccessKey = this._secretAccessKey;
            }
            return hasAnyValues ? internalValueResult : undefined;
        },
        set: function (value) {
            if (value === undefined) {
                this.isEmptyObject = false;
                this.resolvableValue = undefined;
                this._accessKeyId = undefined;
                this._roleArn = undefined;
                this._secretAccessKey = undefined;
            }
            else if (cdktf.Tokenization.isResolvable(value)) {
                this.isEmptyObject = false;
                this.resolvableValue = value;
            }
            else {
                this.isEmptyObject = Object.keys(value).length === 0;
                this.resolvableValue = undefined;
                this._accessKeyId = value.accessKeyId;
                this._roleArn = value.roleArn;
                this._secretAccessKey = value.secretAccessKey;
            }
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(AppConnectionAwsCredentialsOutputReference.prototype, "accessKeyId", {
        get: function () {
            return this.getStringAttribute('access_key_id');
        },
        set: function (value) {
            this._accessKeyId = value;
        },
        enumerable: false,
        configurable: true
    });
    AppConnectionAwsCredentialsOutputReference.prototype.resetAccessKeyId = function () {
        this._accessKeyId = undefined;
    };
    Object.defineProperty(AppConnectionAwsCredentialsOutputReference.prototype, "accessKeyIdInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._accessKeyId;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(AppConnectionAwsCredentialsOutputReference.prototype, "roleArn", {
        get: function () {
            return this.getStringAttribute('role_arn');
        },
        set: function (value) {
            this._roleArn = value;
        },
        enumerable: false,
        configurable: true
    });
    AppConnectionAwsCredentialsOutputReference.prototype.resetRoleArn = function () {
        this._roleArn = undefined;
    };
    Object.defineProperty(AppConnectionAwsCredentialsOutputReference.prototype, "roleArnInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._roleArn;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(AppConnectionAwsCredentialsOutputReference.prototype, "secretAccessKey", {
        get: function () {
            return this.getStringAttribute('secret_access_key');
        },
        set: function (value) {
            this._secretAccessKey = value;
        },
        enumerable: false,
        configurable: true
    });
    AppConnectionAwsCredentialsOutputReference.prototype.resetSecretAccessKey = function () {
        this._secretAccessKey = undefined;
    };
    Object.defineProperty(AppConnectionAwsCredentialsOutputReference.prototype, "secretAccessKeyInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._secretAccessKey;
        },
        enumerable: false,
        configurable: true
    });
    return AppConnectionAwsCredentialsOutputReference;
}(cdktf.ComplexObject));
exports.AppConnectionAwsCredentialsOutputReference = AppConnectionAwsCredentialsOutputReference;
/**
* Represents a {@link https://registry.terraform.io/providers/infisical/infisical/0.16.18/docs/resources/app_connection_aws infisical_app_connection_aws}
*/
var AppConnectionAws = /** @class */ (function (_super) {
    __extends(AppConnectionAws, _super);
    // ===========
    // INITIALIZER
    // ===========
    /**
    * Create a new {@link https://registry.terraform.io/providers/infisical/infisical/0.16.18/docs/resources/app_connection_aws infisical_app_connection_aws} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options AppConnectionAwsConfig
    */
    function AppConnectionAws(scope, id, config) {
        var _this = _super.call(this, scope, id, {
            terraformResourceType: 'infisical_app_connection_aws',
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
        _this._credentials = new AppConnectionAwsCredentialsOutputReference(_this, "credentials");
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
    * Generates CDKTF code for importing a AppConnectionAws resource upon running "cdktf plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the AppConnectionAws to import
    * @param importFromId The id of the existing AppConnectionAws that should be imported. Refer to the {@link https://registry.terraform.io/providers/infisical/infisical/0.16.18/docs/resources/app_connection_aws#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the AppConnectionAws to import is found
    */
    AppConnectionAws.generateConfigForImport = function (scope, importToId, importFromId, provider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "infisical_app_connection_aws", importId: importFromId, provider: provider });
    };
    Object.defineProperty(AppConnectionAws.prototype, "credentials", {
        get: function () {
            return this._credentials;
        },
        enumerable: false,
        configurable: true
    });
    AppConnectionAws.prototype.putCredentials = function (value) {
        this._credentials.internalValue = value;
    };
    Object.defineProperty(AppConnectionAws.prototype, "credentialsInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._credentials.internalValue;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(AppConnectionAws.prototype, "credentialsHash", {
        // credentials_hash - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('credentials_hash');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(AppConnectionAws.prototype, "description", {
        get: function () {
            return this.getStringAttribute('description');
        },
        set: function (value) {
            this._description = value;
        },
        enumerable: false,
        configurable: true
    });
    AppConnectionAws.prototype.resetDescription = function () {
        this._description = undefined;
    };
    Object.defineProperty(AppConnectionAws.prototype, "descriptionInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._description;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(AppConnectionAws.prototype, "id", {
        // id - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('id');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(AppConnectionAws.prototype, "method", {
        get: function () {
            return this.getStringAttribute('method');
        },
        set: function (value) {
            this._method = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(AppConnectionAws.prototype, "methodInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._method;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(AppConnectionAws.prototype, "name", {
        get: function () {
            return this.getStringAttribute('name');
        },
        set: function (value) {
            this._name = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(AppConnectionAws.prototype, "nameInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._name;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(AppConnectionAws.prototype, "projectId", {
        get: function () {
            return this.getStringAttribute('project_id');
        },
        set: function (value) {
            this._projectId = value;
        },
        enumerable: false,
        configurable: true
    });
    AppConnectionAws.prototype.resetProjectId = function () {
        this._projectId = undefined;
    };
    Object.defineProperty(AppConnectionAws.prototype, "projectIdInput", {
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
    AppConnectionAws.prototype.synthesizeAttributes = function () {
        return {
            credentials: appConnectionAwsCredentialsToTerraform(this._credentials.internalValue),
            description: cdktf.stringToTerraform(this._description),
            method: cdktf.stringToTerraform(this._method),
            name: cdktf.stringToTerraform(this._name),
            project_id: cdktf.stringToTerraform(this._projectId),
        };
    };
    AppConnectionAws.prototype.synthesizeHclAttributes = function () {
        var attrs = {
            credentials: {
                value: appConnectionAwsCredentialsToHclTerraform(this._credentials.internalValue),
                isBlock: true,
                type: "struct",
                storageClassType: "AppConnectionAwsCredentials",
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
    AppConnectionAws.tfResourceType = "infisical_app_connection_aws";
    return AppConnectionAws;
}(cdktf.TerraformResource));
exports.AppConnectionAws = AppConnectionAws;
