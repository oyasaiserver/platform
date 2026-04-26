"use strict";
// https://registry.terraform.io/providers/infisical/infisical/0.16.18/docs/resources/dynamic_secret_mongo_db
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
exports.DynamicSecretMongoDb = exports.DynamicSecretMongoDbMetadataList = exports.DynamicSecretMongoDbMetadataOutputReference = exports.DynamicSecretMongoDbConfigurationOutputReference = void 0;
exports.dynamicSecretMongoDbConfigurationToTerraform = dynamicSecretMongoDbConfigurationToTerraform;
exports.dynamicSecretMongoDbConfigurationToHclTerraform = dynamicSecretMongoDbConfigurationToHclTerraform;
exports.dynamicSecretMongoDbMetadataToTerraform = dynamicSecretMongoDbMetadataToTerraform;
exports.dynamicSecretMongoDbMetadataToHclTerraform = dynamicSecretMongoDbMetadataToHclTerraform;
var cdktf = require("cdktf");
function dynamicSecretMongoDbConfigurationToTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
        ca: cdktf.stringToTerraform(struct.ca),
        database: cdktf.stringToTerraform(struct.database),
        host: cdktf.stringToTerraform(struct.host),
        password: cdktf.stringToTerraform(struct.password),
        port: cdktf.numberToTerraform(struct.port),
        roles: cdktf.listMapper(cdktf.stringToTerraform, false)(struct.roles),
        username: cdktf.stringToTerraform(struct.username),
    };
}
function dynamicSecretMongoDbConfigurationToHclTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    var attrs = {
        ca: {
            value: cdktf.stringToHclTerraform(struct.ca),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        database: {
            value: cdktf.stringToHclTerraform(struct.database),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        host: {
            value: cdktf.stringToHclTerraform(struct.host),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        password: {
            value: cdktf.stringToHclTerraform(struct.password),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        port: {
            value: cdktf.numberToHclTerraform(struct.port),
            isBlock: false,
            type: "simple",
            storageClassType: "number",
        },
        roles: {
            value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct.roles),
            isBlock: false,
            type: "list",
            storageClassType: "stringList",
        },
        username: {
            value: cdktf.stringToHclTerraform(struct.username),
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
var DynamicSecretMongoDbConfigurationOutputReference = /** @class */ (function (_super) {
    __extends(DynamicSecretMongoDbConfigurationOutputReference, _super);
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    function DynamicSecretMongoDbConfigurationOutputReference(terraformResource, terraformAttribute) {
        var _this = _super.call(this, terraformResource, terraformAttribute, false) || this;
        _this.isEmptyObject = false;
        return _this;
    }
    Object.defineProperty(DynamicSecretMongoDbConfigurationOutputReference.prototype, "internalValue", {
        get: function () {
            if (this.resolvableValue) {
                return this.resolvableValue;
            }
            var hasAnyValues = this.isEmptyObject;
            var internalValueResult = {};
            if (this._ca !== undefined) {
                hasAnyValues = true;
                internalValueResult.ca = this._ca;
            }
            if (this._database !== undefined) {
                hasAnyValues = true;
                internalValueResult.database = this._database;
            }
            if (this._host !== undefined) {
                hasAnyValues = true;
                internalValueResult.host = this._host;
            }
            if (this._password !== undefined) {
                hasAnyValues = true;
                internalValueResult.password = this._password;
            }
            if (this._port !== undefined) {
                hasAnyValues = true;
                internalValueResult.port = this._port;
            }
            if (this._roles !== undefined) {
                hasAnyValues = true;
                internalValueResult.roles = this._roles;
            }
            if (this._username !== undefined) {
                hasAnyValues = true;
                internalValueResult.username = this._username;
            }
            return hasAnyValues ? internalValueResult : undefined;
        },
        set: function (value) {
            if (value === undefined) {
                this.isEmptyObject = false;
                this.resolvableValue = undefined;
                this._ca = undefined;
                this._database = undefined;
                this._host = undefined;
                this._password = undefined;
                this._port = undefined;
                this._roles = undefined;
                this._username = undefined;
            }
            else if (cdktf.Tokenization.isResolvable(value)) {
                this.isEmptyObject = false;
                this.resolvableValue = value;
            }
            else {
                this.isEmptyObject = Object.keys(value).length === 0;
                this.resolvableValue = undefined;
                this._ca = value.ca;
                this._database = value.database;
                this._host = value.host;
                this._password = value.password;
                this._port = value.port;
                this._roles = value.roles;
                this._username = value.username;
            }
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DynamicSecretMongoDbConfigurationOutputReference.prototype, "ca", {
        get: function () {
            return this.getStringAttribute('ca');
        },
        set: function (value) {
            this._ca = value;
        },
        enumerable: false,
        configurable: true
    });
    DynamicSecretMongoDbConfigurationOutputReference.prototype.resetCa = function () {
        this._ca = undefined;
    };
    Object.defineProperty(DynamicSecretMongoDbConfigurationOutputReference.prototype, "caInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._ca;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DynamicSecretMongoDbConfigurationOutputReference.prototype, "database", {
        get: function () {
            return this.getStringAttribute('database');
        },
        set: function (value) {
            this._database = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DynamicSecretMongoDbConfigurationOutputReference.prototype, "databaseInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._database;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DynamicSecretMongoDbConfigurationOutputReference.prototype, "host", {
        get: function () {
            return this.getStringAttribute('host');
        },
        set: function (value) {
            this._host = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DynamicSecretMongoDbConfigurationOutputReference.prototype, "hostInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._host;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DynamicSecretMongoDbConfigurationOutputReference.prototype, "password", {
        get: function () {
            return this.getStringAttribute('password');
        },
        set: function (value) {
            this._password = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DynamicSecretMongoDbConfigurationOutputReference.prototype, "passwordInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._password;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DynamicSecretMongoDbConfigurationOutputReference.prototype, "port", {
        get: function () {
            return this.getNumberAttribute('port');
        },
        set: function (value) {
            this._port = value;
        },
        enumerable: false,
        configurable: true
    });
    DynamicSecretMongoDbConfigurationOutputReference.prototype.resetPort = function () {
        this._port = undefined;
    };
    Object.defineProperty(DynamicSecretMongoDbConfigurationOutputReference.prototype, "portInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._port;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DynamicSecretMongoDbConfigurationOutputReference.prototype, "roles", {
        get: function () {
            return this.getListAttribute('roles');
        },
        set: function (value) {
            this._roles = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DynamicSecretMongoDbConfigurationOutputReference.prototype, "rolesInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._roles;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DynamicSecretMongoDbConfigurationOutputReference.prototype, "username", {
        get: function () {
            return this.getStringAttribute('username');
        },
        set: function (value) {
            this._username = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DynamicSecretMongoDbConfigurationOutputReference.prototype, "usernameInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._username;
        },
        enumerable: false,
        configurable: true
    });
    return DynamicSecretMongoDbConfigurationOutputReference;
}(cdktf.ComplexObject));
exports.DynamicSecretMongoDbConfigurationOutputReference = DynamicSecretMongoDbConfigurationOutputReference;
function dynamicSecretMongoDbMetadataToTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
        key: cdktf.stringToTerraform(struct.key),
        value: cdktf.stringToTerraform(struct.value),
    };
}
function dynamicSecretMongoDbMetadataToHclTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    var attrs = {
        key: {
            value: cdktf.stringToHclTerraform(struct.key),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        value: {
            value: cdktf.stringToHclTerraform(struct.value),
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
var DynamicSecretMongoDbMetadataOutputReference = /** @class */ (function (_super) {
    __extends(DynamicSecretMongoDbMetadataOutputReference, _super);
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    function DynamicSecretMongoDbMetadataOutputReference(terraformResource, terraformAttribute, complexObjectIndex, complexObjectIsFromSet) {
        var _this = _super.call(this, terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex) || this;
        _this.isEmptyObject = false;
        return _this;
    }
    Object.defineProperty(DynamicSecretMongoDbMetadataOutputReference.prototype, "internalValue", {
        get: function () {
            if (this.resolvableValue) {
                return this.resolvableValue;
            }
            var hasAnyValues = this.isEmptyObject;
            var internalValueResult = {};
            if (this._key !== undefined) {
                hasAnyValues = true;
                internalValueResult.key = this._key;
            }
            if (this._value !== undefined) {
                hasAnyValues = true;
                internalValueResult.value = this._value;
            }
            return hasAnyValues ? internalValueResult : undefined;
        },
        set: function (value) {
            if (value === undefined) {
                this.isEmptyObject = false;
                this.resolvableValue = undefined;
                this._key = undefined;
                this._value = undefined;
            }
            else if (cdktf.Tokenization.isResolvable(value)) {
                this.isEmptyObject = false;
                this.resolvableValue = value;
            }
            else {
                this.isEmptyObject = Object.keys(value).length === 0;
                this.resolvableValue = undefined;
                this._key = value.key;
                this._value = value.value;
            }
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DynamicSecretMongoDbMetadataOutputReference.prototype, "key", {
        get: function () {
            return this.getStringAttribute('key');
        },
        set: function (value) {
            this._key = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DynamicSecretMongoDbMetadataOutputReference.prototype, "keyInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._key;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DynamicSecretMongoDbMetadataOutputReference.prototype, "value", {
        get: function () {
            return this.getStringAttribute('value');
        },
        set: function (value) {
            this._value = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DynamicSecretMongoDbMetadataOutputReference.prototype, "valueInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._value;
        },
        enumerable: false,
        configurable: true
    });
    return DynamicSecretMongoDbMetadataOutputReference;
}(cdktf.ComplexObject));
exports.DynamicSecretMongoDbMetadataOutputReference = DynamicSecretMongoDbMetadataOutputReference;
var DynamicSecretMongoDbMetadataList = /** @class */ (function (_super) {
    __extends(DynamicSecretMongoDbMetadataList, _super);
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    function DynamicSecretMongoDbMetadataList(terraformResource, terraformAttribute, wrapsSet) {
        var _this = _super.call(this, terraformResource, terraformAttribute, wrapsSet) || this;
        _this.terraformResource = terraformResource;
        _this.terraformAttribute = terraformAttribute;
        _this.wrapsSet = wrapsSet;
        return _this;
    }
    /**
    * @param index the index of the item to return
    */
    DynamicSecretMongoDbMetadataList.prototype.get = function (index) {
        return new DynamicSecretMongoDbMetadataOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
    };
    return DynamicSecretMongoDbMetadataList;
}(cdktf.ComplexList));
exports.DynamicSecretMongoDbMetadataList = DynamicSecretMongoDbMetadataList;
/**
* Represents a {@link https://registry.terraform.io/providers/infisical/infisical/0.16.18/docs/resources/dynamic_secret_mongo_db infisical_dynamic_secret_mongo_db}
*/
var DynamicSecretMongoDb = /** @class */ (function (_super) {
    __extends(DynamicSecretMongoDb, _super);
    // ===========
    // INITIALIZER
    // ===========
    /**
    * Create a new {@link https://registry.terraform.io/providers/infisical/infisical/0.16.18/docs/resources/dynamic_secret_mongo_db infisical_dynamic_secret_mongo_db} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options DynamicSecretMongoDbConfig
    */
    function DynamicSecretMongoDb(scope, id, config) {
        var _this = _super.call(this, scope, id, {
            terraformResourceType: 'infisical_dynamic_secret_mongo_db',
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
        // configuration - computed: false, optional: false, required: true
        _this._configuration = new DynamicSecretMongoDbConfigurationOutputReference(_this, "configuration");
        // metadata - computed: false, optional: true, required: false
        _this._metadata = new DynamicSecretMongoDbMetadataList(_this, "metadata", true);
        _this._configuration.internalValue = config.configuration;
        _this._defaultTtl = config.defaultTtl;
        _this._environmentSlug = config.environmentSlug;
        _this._maxTtl = config.maxTtl;
        _this._metadata.internalValue = config.metadata;
        _this._name = config.name;
        _this._path = config.path;
        _this._projectSlug = config.projectSlug;
        _this._usernameTemplate = config.usernameTemplate;
        return _this;
    }
    // ==============
    // STATIC Methods
    // ==============
    /**
    * Generates CDKTF code for importing a DynamicSecretMongoDb resource upon running "cdktf plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the DynamicSecretMongoDb to import
    * @param importFromId The id of the existing DynamicSecretMongoDb that should be imported. Refer to the {@link https://registry.terraform.io/providers/infisical/infisical/0.16.18/docs/resources/dynamic_secret_mongo_db#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the DynamicSecretMongoDb to import is found
    */
    DynamicSecretMongoDb.generateConfigForImport = function (scope, importToId, importFromId, provider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "infisical_dynamic_secret_mongo_db", importId: importFromId, provider: provider });
    };
    Object.defineProperty(DynamicSecretMongoDb.prototype, "configuration", {
        get: function () {
            return this._configuration;
        },
        enumerable: false,
        configurable: true
    });
    DynamicSecretMongoDb.prototype.putConfiguration = function (value) {
        this._configuration.internalValue = value;
    };
    Object.defineProperty(DynamicSecretMongoDb.prototype, "configurationInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._configuration.internalValue;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DynamicSecretMongoDb.prototype, "defaultTtl", {
        get: function () {
            return this.getStringAttribute('default_ttl');
        },
        set: function (value) {
            this._defaultTtl = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DynamicSecretMongoDb.prototype, "defaultTtlInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._defaultTtl;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DynamicSecretMongoDb.prototype, "environmentSlug", {
        get: function () {
            return this.getStringAttribute('environment_slug');
        },
        set: function (value) {
            this._environmentSlug = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DynamicSecretMongoDb.prototype, "environmentSlugInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._environmentSlug;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DynamicSecretMongoDb.prototype, "id", {
        // id - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('id');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DynamicSecretMongoDb.prototype, "maxTtl", {
        get: function () {
            return this.getStringAttribute('max_ttl');
        },
        set: function (value) {
            this._maxTtl = value;
        },
        enumerable: false,
        configurable: true
    });
    DynamicSecretMongoDb.prototype.resetMaxTtl = function () {
        this._maxTtl = undefined;
    };
    Object.defineProperty(DynamicSecretMongoDb.prototype, "maxTtlInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._maxTtl;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DynamicSecretMongoDb.prototype, "metadata", {
        get: function () {
            return this._metadata;
        },
        enumerable: false,
        configurable: true
    });
    DynamicSecretMongoDb.prototype.putMetadata = function (value) {
        this._metadata.internalValue = value;
    };
    DynamicSecretMongoDb.prototype.resetMetadata = function () {
        this._metadata.internalValue = undefined;
    };
    Object.defineProperty(DynamicSecretMongoDb.prototype, "metadataInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._metadata.internalValue;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DynamicSecretMongoDb.prototype, "name", {
        get: function () {
            return this.getStringAttribute('name');
        },
        set: function (value) {
            this._name = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DynamicSecretMongoDb.prototype, "nameInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._name;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DynamicSecretMongoDb.prototype, "path", {
        get: function () {
            return this.getStringAttribute('path');
        },
        set: function (value) {
            this._path = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DynamicSecretMongoDb.prototype, "pathInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._path;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DynamicSecretMongoDb.prototype, "projectSlug", {
        get: function () {
            return this.getStringAttribute('project_slug');
        },
        set: function (value) {
            this._projectSlug = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DynamicSecretMongoDb.prototype, "projectSlugInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._projectSlug;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DynamicSecretMongoDb.prototype, "usernameTemplate", {
        get: function () {
            return this.getStringAttribute('username_template');
        },
        set: function (value) {
            this._usernameTemplate = value;
        },
        enumerable: false,
        configurable: true
    });
    DynamicSecretMongoDb.prototype.resetUsernameTemplate = function () {
        this._usernameTemplate = undefined;
    };
    Object.defineProperty(DynamicSecretMongoDb.prototype, "usernameTemplateInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._usernameTemplate;
        },
        enumerable: false,
        configurable: true
    });
    // =========
    // SYNTHESIS
    // =========
    DynamicSecretMongoDb.prototype.synthesizeAttributes = function () {
        return {
            configuration: dynamicSecretMongoDbConfigurationToTerraform(this._configuration.internalValue),
            default_ttl: cdktf.stringToTerraform(this._defaultTtl),
            environment_slug: cdktf.stringToTerraform(this._environmentSlug),
            max_ttl: cdktf.stringToTerraform(this._maxTtl),
            metadata: cdktf.listMapper(dynamicSecretMongoDbMetadataToTerraform, false)(this._metadata.internalValue),
            name: cdktf.stringToTerraform(this._name),
            path: cdktf.stringToTerraform(this._path),
            project_slug: cdktf.stringToTerraform(this._projectSlug),
            username_template: cdktf.stringToTerraform(this._usernameTemplate),
        };
    };
    DynamicSecretMongoDb.prototype.synthesizeHclAttributes = function () {
        var attrs = {
            configuration: {
                value: dynamicSecretMongoDbConfigurationToHclTerraform(this._configuration.internalValue),
                isBlock: true,
                type: "struct",
                storageClassType: "DynamicSecretMongoDbConfiguration",
            },
            default_ttl: {
                value: cdktf.stringToHclTerraform(this._defaultTtl),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            environment_slug: {
                value: cdktf.stringToHclTerraform(this._environmentSlug),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            max_ttl: {
                value: cdktf.stringToHclTerraform(this._maxTtl),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            metadata: {
                value: cdktf.listMapperHcl(dynamicSecretMongoDbMetadataToHclTerraform, false)(this._metadata.internalValue),
                isBlock: true,
                type: "set",
                storageClassType: "DynamicSecretMongoDbMetadataList",
            },
            name: {
                value: cdktf.stringToHclTerraform(this._name),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            path: {
                value: cdktf.stringToHclTerraform(this._path),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            project_slug: {
                value: cdktf.stringToHclTerraform(this._projectSlug),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            username_template: {
                value: cdktf.stringToHclTerraform(this._usernameTemplate),
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
    DynamicSecretMongoDb.tfResourceType = "infisical_dynamic_secret_mongo_db";
    return DynamicSecretMongoDb;
}(cdktf.TerraformResource));
exports.DynamicSecretMongoDb = DynamicSecretMongoDb;
